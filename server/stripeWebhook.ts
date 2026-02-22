import { Request, Response } from "express";
import Stripe from "stripe";
import {
  getPaymentBySessionId,
  updatePaymentStatus,
  updateAuditLeadPayment,
} from "./db";
import { notifyOwner } from "./_core/notification";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2025-12-15.clover" as any,
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || "";

export async function handleStripeWebhook(req: Request, res: Response) {
  const sig = req.headers["stripe-signature"];

  if (!sig) {
    console.error("[Stripe Webhook] No signature found");
    return res.status(400).send("No signature");
  }

  let event: Stripe.Event;

  try {
    // Verify webhook signature
    event = stripe.webhooks.constructEvent(
      req.body, // Raw body buffer
      sig,
      webhookSecret
    );
  } catch (err: any) {
    console.error(
      "[Stripe Webhook] Signature verification failed:",
      err.message
    );
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  console.log(`[Stripe Webhook] Received event: ${event.type}`);

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;

        console.log(`[Stripe Webhook] Checkout completed: ${session.id}`);

        // Update payment status in database
        const payment = await getPaymentBySessionId(session.id);
        if (payment) {
          await updatePaymentStatus(String(payment.id), "completed");

          // If this was an audit payment, update the lead
          if (session.metadata?.leadId) {
            await updateAuditLeadPayment(
              parseInt(session.metadata.leadId),
              session.id
            );
          }

          // Notify owner
          await notifyOwner({
            title: "💰 Payment Completed!",
            content: `
**New Payment Received**

- **Customer:** ${session.customer_email}
- **Amount:** $${(session.amount_total || 0) / 100}
- **Product:** ${session.metadata?.productType || "Signal Check Audit"}
- **Session ID:** ${session.id}

Payment has been marked as completed in the database.
            `.trim(),
          });
        }
        break;
      }

      case "checkout.session.expired": {
        const session = event.data.object as Stripe.Checkout.Session;

        console.log(`[Stripe Webhook] Checkout expired: ${session.id}`);

        // Update payment status
        const payment = await getPaymentBySessionId(session.id);
        if (payment) {
          await updatePaymentStatus(String(payment.id), "failed");
        }
        break;
      }

      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;

        console.log(`[Stripe Webhook] Payment failed: ${paymentIntent.id}`);

        // Notify owner of failed payment
        await notifyOwner({
          title: "⚠️ Payment Failed",
          content: `
**Payment Failed**

- **Amount:** $${(paymentIntent.amount || 0) / 100}
- **Error:** ${paymentIntent.last_payment_error?.message || "Unknown error"}
- **Payment Intent:** ${paymentIntent.id}

The customer may need assistance or will retry.
          `.trim(),
        });
        break;
      }

      case "customer.subscription.created":
      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;

        console.log(
          `[Stripe Webhook] Subscription ${event.type}: ${subscription.id}`
        );

        // Notify owner of subscription events
        await notifyOwner({
          title: "🔄 Subscription Update",
          content: `
**Subscription ${event.type === "customer.subscription.created" ? "Created" : "Updated"}**

- **Status:** ${subscription.status}
- **Subscription ID:** ${subscription.id}

Check Stripe dashboard for full details.
          `.trim(),
        });
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;

        console.log(
          `[Stripe Webhook] Subscription cancelled: ${subscription.id}`
        );

        await notifyOwner({
          title: "❌ Subscription Cancelled",
          content: `
**Subscription Cancelled**

- **Subscription ID:** ${subscription.id}

Consider reaching out to understand why they cancelled.
          `.trim(),
        });
        break;
      }

      case "invoice.payment_succeeded": {
        const invoice = event.data.object as Stripe.Invoice;

        console.log(`[Stripe Webhook] Invoice paid: ${invoice.id}`);

        await notifyOwner({
          title: "💵 Recurring Payment Received",
          content: `
**Invoice Paid**

- **Customer:** ${invoice.customer_email}
- **Amount:** $${(invoice.amount_paid || 0) / 100}
- **Invoice ID:** ${invoice.id}

Recurring subscription payment processed successfully.
          `.trim(),
        });
        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;

        console.log(`[Stripe Webhook] Invoice payment failed: ${invoice.id}`);

        await notifyOwner({
          title: "⚠️ Invoice Payment Failed",
          content: `
**Invoice Payment Failed**

- **Customer:** ${invoice.customer_email}
- **Amount:** $${(invoice.amount_due || 0) / 100}
- **Invoice ID:** ${invoice.id}

Stripe will automatically retry. Consider reaching out to the customer.
          `.trim(),
        });
        break;
      }

      default:
        console.log(`[Stripe Webhook] Unhandled event type: ${event.type}`);
    }

    res.json({ received: true });
  } catch (error) {
    console.error("[Stripe Webhook] Error processing event:", error);
    res.status(500).json({ error: "Webhook handler failed" });
  }
}
