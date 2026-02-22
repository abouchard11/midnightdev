import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock Stripe
vi.mock("stripe", () => {
  return {
    default: class MockStripe {
      checkout = {
        sessions: {
          retrieve: vi.fn().mockResolvedValue({
            id: "sess_123",
            payment_status: "paid",
            payment_intent: "pi_123",
            customer_email: "test@example.com",
            amount_total: 49700,
          }),
          create: vi.fn().mockResolvedValue({
            id: "sess_123",
            url: "https://stripe.com/checkout",
          }),
        },
      };
    },
  };
});

// Mock DB
vi.mock("./db", () => ({
  createAuditLead: vi.fn(),
  getAuditLeads: vi.fn(),
  getAuditLeadById: vi.fn(),
  updateAuditLeadStatus: vi.fn(),
  updateAuditLeadPayment: vi.fn(),
  createContactSubmission: vi.fn(),
  getContactSubmissions: vi.fn(),
  updateContactSubmissionStatus: vi.fn(),
  getPublishedBlogPosts: vi.fn(),
  getAllBlogPosts: vi.fn(),
  getBlogPostBySlug: vi.fn(),
  createBlogPost: vi.fn(),
  updateBlogPost: vi.fn(),
  deleteBlogPost: vi.fn(),
  createPayment: vi.fn(),
  getPaymentBySessionId: vi.fn().mockResolvedValue({
    stripeSessionId: "sess_123",
    status: "pending",
    auditLeadId: 1,
    productType: "signal_check",
    amount: 49700,
  }),
  updatePaymentStatus: vi.fn(),
  getPayments: vi.fn(),
}));

// Mock Notification
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn(),
}));

// Mock Email
vi.mock("./email", () => ({
  sendAuditConfirmation: vi.fn(),
  sendContactConfirmation: vi.fn(),
  sendPaymentConfirmation: vi.fn(),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("stripe.verifyPayment", () => {
  it("verifies payment successfully", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.stripe.verifyPayment({
      sessionId: "sess_123",
    });

    expect(result).toEqual({
      status: "paid",
      customerEmail: "test@example.com",
      amountTotal: 49700,
    });
  });
});
