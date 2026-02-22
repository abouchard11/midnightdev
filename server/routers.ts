import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import {
  createAuditLead,
  getAuditLeads,
  getAuditLeadById,
  updateAuditLeadStatus,
  updateAuditLeadPayment,
  createContactSubmission,
  getContactSubmissions,
  updateContactSubmissionStatus,
  getPublishedBlogPosts,
  getAllBlogPosts,
  getBlogPostBySlug,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
  createPayment,
  getPaymentBySessionId,
  updatePaymentStatus,
  getPayments,
} from "./db";
import { notifyOwner } from "./_core/notification";
import {
  sendAuditConfirmation,
  sendContactConfirmation,
  sendPaymentConfirmation,
} from "./email";
import Stripe from "stripe";

// Initialize Stripe with the secret key from environment
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2025-12-15.clover",
});

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // ==================== AUDIT LEADS ====================
  audit: router({
    submit: publicProcedure
      .input(
        z.object({
          businessName: z.string().min(1, "Business name is required"),
          websiteUrl: z.string().url("Please enter a valid URL"),
          industry: z.string().min(1, "Industry is required"),
          serviceArea: z.string().optional(),
          email: z.string().email("Please enter a valid email"),
          aiRecommendationGoal: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const lead = await createAuditLead(input);

        // Send confirmation and notify owner (non-blocking for performance)
        sendAuditConfirmation({
          to: input.email,
          businessName: input.businessName,
          websiteUrl: input.websiteUrl,
        }).catch(err => {
          console.error(
            `[Audit] Failed to send confirmation email to ${input.email}:`,
            err
          );
        });

        return { success: true, leadId: lead?.id };
      }),

    list: protectedProcedure.query(async () => {
      return getAuditLeads();
    }),

    get: protectedProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        return getAuditLeadById(input.id);
      }),

    updateStatus: protectedProcedure
      .input(
        z.object({
          id: z.number(),
          status: z.enum([
            "new",
            "contacted",
            "qualified",
            "converted",
            "closed",
          ]),
        })
      )
      .mutation(async ({ input }) => {
        await updateAuditLeadStatus(input.id, input.status);
        return { success: true };
      }),
  }),

  // ==================== CONTACT SUBMISSIONS ====================
  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          email: z.string().email("Please enter a valid email"),
          company: z.string().optional(),
          service: z.string().optional(),
          message: z.string().min(10, "Message must be at least 10 characters"),
        })
      )
      .mutation(async ({ input }) => {
        const submission = await createContactSubmission(input);

        // Send confirmation and notify owner (non-blocking for performance)
        await sendContactConfirmation({
          to: input.email,
          name: input.name,
        });

        return { success: true, submissionId: submission?.id };
      }),

    list: protectedProcedure.query(async () => {
      return getContactSubmissions();
    }),

    updateStatus: protectedProcedure
      .input(
        z.object({
          id: z.number(),
          status: z.enum(["new", "read", "replied", "archived"]),
        })
      )
      .mutation(async ({ input }) => {
        await updateContactSubmissionStatus(input.id, input.status);
        return { success: true };
      }),
  }),

  // ==================== BLOG POSTS ====================
  blog: router({
    // Public: Get published posts
    published: publicProcedure.query(async () => {
      return getPublishedBlogPosts();
    }),

    // Public: Get single post by slug
    bySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        return getBlogPostBySlug(input.slug);
      }),

    // Admin: Get all posts
    all: protectedProcedure.query(async () => {
      return getAllBlogPosts();
    }),

    // Admin: Create post
    create: protectedProcedure
      .input(
        z.object({
          slug: z.string().min(1),
          title: z.string().min(1),
          excerpt: z.string().min(1),
          content: z.string().min(1),
          category: z.string().min(1),
          tags: z.string().optional(),
          readTime: z.string().optional(),
          authorName: z.string().optional(),
          authorRole: z.string().optional(),
          published: z.boolean().default(false),
          featuredImage: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const post = await createBlogPost({
          ...input,
          publishedAt: input.published ? new Date() : null,
        });
        return { success: true, postId: post?.id };
      }),

    // Admin: Update post
    update: protectedProcedure
      .input(
        z.object({
          id: z.number(),
          slug: z.string().optional(),
          title: z.string().optional(),
          excerpt: z.string().optional(),
          content: z.string().optional(),
          category: z.string().optional(),
          tags: z.string().optional(),
          readTime: z.string().optional(),
          authorName: z.string().optional(),
          authorRole: z.string().optional(),
          published: z.boolean().optional(),
          featuredImage: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const { id, ...updates } = input;
        if (updates.published === true) {
          (updates as any).publishedAt = new Date();
        }
        await updateBlogPost(id, updates);
        return { success: true };
      }),

    // Admin: Delete post
    delete: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        await deleteBlogPost(input.id);
        return { success: true };
      }),
  }),

  // ==================== STRIPE PAYMENTS ====================
  stripe: router({
    // Create checkout session for Signal Check audit
    createCheckoutSession: publicProcedure
      .input(
        z.object({
          auditLeadId: z.number().optional(),
          email: z.string().email(),
          productType: z.enum(["signal_check"]),
        })
      )
      .mutation(async ({ input }) => {
        const products = {
          signal_check: {
            name: "SIGNAL_CHECK_ AI Visibility Audit",
            description:
              "Complete AI visibility audit with competitor analysis, citation gap report, custom JSON-LD schema, and 30-minute strategy call.",
            price: 49700, // $497 in cents
          },
        };

        const product = products[input.productType];

        const session = await stripe.checkout.sessions.create({
          payment_method_types: ["card"],
          line_items: [
            {
              price_data: {
                currency: "usd",
                product_data: {
                  name: product.name,
                  description: product.description,
                },
                unit_amount: product.price,
              },
              quantity: 1,
            },
          ],
          mode: "payment",
          customer_email: input.email,
          success_url: `${process.env.VITE_APP_URL || "https://midnightdev.dev"}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${process.env.VITE_APP_URL || "https://midnightdev.dev"}/pricing`,
          metadata: {
            auditLeadId: input.auditLeadId?.toString() || "",
            productType: input.productType,
          },
        });

        // Record the payment attempt
        await createPayment({
          stripeSessionId: session.id,
          customerEmail: input.email,
          productType: input.productType,
          amount: product.price,
          currency: "usd",
          status: "pending",
          metadata: JSON.stringify({ auditLeadId: input.auditLeadId }),
          auditLeadId: input.auditLeadId || null,
        });

        return { sessionId: session.id, url: session.url };
      }),

    // Verify payment status
    verifyPayment: publicProcedure
      .input(z.object({ sessionId: z.string() }))
      .query(async ({ input }) => {
        const session = await stripe.checkout.sessions.retrieve(
          input.sessionId
        );
        const payment = await getPaymentBySessionId(input.sessionId);

        if (
          session.payment_status === "paid" &&
          payment?.status !== "completed"
        ) {
          await updatePaymentStatus(
            input.sessionId,
            "completed",
            session.payment_intent as string
          );

          // Update audit lead if associated
          if (payment?.auditLeadId) {
            await updateAuditLeadPayment(
              payment.auditLeadId,
              session.payment_intent as string
            );
          }

          // Send payment confirmation
          await sendPaymentConfirmation({
            to: session.customer_email || "",
            productName: payment?.productType || "Unknown Product",
            amount: (payment?.amount || 0) / 100,
          });
        }

        return {
          status: session.payment_status,
          customerEmail: session.customer_email,
          amountTotal: session.amount_total,
        };
      }),

    // Admin: List all payments
    listPayments: protectedProcedure.query(async () => {
      return getPayments();
    }),
  }),
});

export type AppRouter = typeof appRouter;
