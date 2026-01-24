/**
 * Email Notification System
 * 
 * Uses the built-in Manus notification system to send emails.
 * For production, you can integrate with services like:
 * - Resend (https://resend.com)
 * - SendGrid
 * - AWS SES
 */

import { notifyOwner } from "./_core/notification";

interface AuditConfirmationEmail {
  to: string;
  businessName: string;
  websiteUrl: string;
}

interface PaymentConfirmationEmail {
  to: string;
  productName: string;
  amount: number;
}

interface ContactConfirmationEmail {
  to: string;
  name: string;
}

/**
 * Send confirmation email after audit form submission
 * Currently notifies owner - can be extended with transactional email service
 */
export async function sendAuditConfirmation(data: AuditConfirmationEmail): Promise<boolean> {
  // Notify owner about the submission
  const ownerNotified = await notifyOwner({
    title: "🎯 New AI Visibility Audit Request",
    content: `
**New Lead Received!**

- **Business:** ${data.businessName}
- **Website:** ${data.websiteUrl}
- **Email:** ${data.to}

The user has been shown a confirmation message. Follow up within 24 hours.
    `.trim()
  });

  // In production, you would also send an email to the user here
  // Example with Resend:
  // await resend.emails.send({
  //   from: 'Midnight Dev <hello@midnightdev.dev>',
  //   to: data.to,
  //   subject: 'Your AI Visibility Audit Request Received',
  //   html: generateAuditEmailTemplate(data)
  // });

  console.log(`[Email] Audit confirmation for ${data.to} - Owner notified: ${ownerNotified}`);
  return ownerNotified;
}

/**
 * Send confirmation email after successful payment
 */
export async function sendPaymentConfirmation(data: PaymentConfirmationEmail): Promise<boolean> {
  const ownerNotified = await notifyOwner({
    title: "💰 Payment Received!",
    content: `
**New Payment Completed!**

- **Product:** ${data.productName}
- **Amount:** $${data.amount}
- **Customer:** ${data.to}

Deliver the audit within the promised timeframe.
    `.trim()
  });

  console.log(`[Email] Payment confirmation for ${data.to} - Owner notified: ${ownerNotified}`);
  return ownerNotified;
}

/**
 * Send confirmation email after contact form submission
 */
export async function sendContactConfirmation(data: ContactConfirmationEmail): Promise<boolean> {
  const ownerNotified = await notifyOwner({
    title: "📬 New Contact Form Submission",
    content: `
**New Contact Request!**

- **Name:** ${data.name}
- **Email:** ${data.to}

Respond within 24 hours to maintain response time SLA.
    `.trim()
  });

  console.log(`[Email] Contact confirmation for ${data.to} - Owner notified: ${ownerNotified}`);
  return ownerNotified;
}

/**
 * Email template generator for audit confirmation
 * Use this when integrating with a transactional email service
 */
export function generateAuditEmailTemplate(data: AuditConfirmationEmail): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your AI Visibility Audit Request</title>
</head>
<body style="margin: 0; padding: 0; background-color: #000000; font-family: 'Courier New', monospace;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #000000; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #0a0a0a; border: 1px solid #333;">
          <!-- Header -->
          <tr>
            <td style="padding: 40px; border-bottom: 1px solid #333;">
              <h1 style="margin: 0; color: #a855f7; font-size: 24px; letter-spacing: 2px;">
                MIDNIGHT_DEV_
              </h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 20px; color: #ffffff; font-size: 20px;">
                AUDIT_REQUEST_RECEIVED_
              </h2>
              
              <p style="color: #888; line-height: 1.8; margin: 0 0 20px;">
                Thank you for requesting an AI Visibility Audit for <strong style="color: #fff;">${data.businessName}</strong>.
              </p>
              
              <div style="background-color: #111; border: 1px solid #333; padding: 20px; margin: 20px 0;">
                <p style="color: #888; margin: 0 0 10px; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">
                  WHAT_HAPPENS_NEXT_
                </p>
                <ul style="color: #ccc; margin: 0; padding-left: 20px; line-height: 2;">
                  <li>Our team will analyze ${data.websiteUrl}</li>
                  <li>We'll research your competitors in AI search</li>
                  <li>You'll receive your full audit within 48 hours</li>
                  <li>We'll schedule your 30-minute strategy call</li>
                </ul>
              </div>
              
              <p style="color: #888; line-height: 1.8; margin: 20px 0 0;">
                Questions? Reply to this email or reach out at <a href="mailto:hello@midnightdev.dev" style="color: #a855f7;">hello@midnightdev.dev</a>
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 30px 40px; border-top: 1px solid #333; background-color: #050505;">
              <p style="margin: 0; color: #666; font-size: 12px;">
                © ${new Date().getFullYear()} Midnight Dev. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
