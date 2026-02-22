import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";
// Mock Stripe
vi.mock("stripe", () => {
  return {
    default: vi.fn().mockImplementation(() => ({
      checkout: {
        sessions: {
          create: vi.fn(),
          retrieve: vi.fn(),
        },
      },
    })),
  };
});

// Mock the notification module
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

// Mock the db module
vi.mock("./db", () => ({
  createAuditLead: vi.fn().mockResolvedValue({ id: 1 }),
  getAuditLeads: vi.fn().mockResolvedValue([]),
  getAuditLeadById: vi.fn().mockResolvedValue(null),
  updateAuditLeadStatus: vi.fn().mockResolvedValue(undefined),
  updateAuditLeadPayment: vi.fn().mockResolvedValue(undefined),
  createContactSubmission: vi.fn().mockResolvedValue({ id: 1 }),
  getContactSubmissions: vi.fn().mockResolvedValue([]),
  updateContactSubmissionStatus: vi.fn().mockResolvedValue(undefined),
  getPublishedBlogPosts: vi.fn().mockResolvedValue([]),
  getAllBlogPosts: vi.fn().mockResolvedValue([]),
  getBlogPostBySlug: vi.fn().mockResolvedValue(null),
  createBlogPost: vi.fn().mockResolvedValue({ id: 1 }),
  updateBlogPost: vi.fn().mockResolvedValue(undefined),
  deleteBlogPost: vi.fn().mockResolvedValue(undefined),
  createPayment: vi.fn().mockResolvedValue({ id: 1 }),
  getPaymentBySessionId: vi.fn().mockResolvedValue(null),
  updatePaymentStatus: vi.fn().mockResolvedValue(undefined),
  getPayments: vi.fn().mockResolvedValue([]),
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

function createAuthContext(): TrpcContext {
  return {
    user: {
      id: 1,
      clerkUserId: "user_test123",
      email: "test@example.com",
      name: "Test User",
      loginMethod: "clerk",
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    },
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("audit.submit", () => {
  it("creates an audit lead with valid input", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.audit.submit({
      businessName: "Test Corp",
      websiteUrl: "https://testcorp.com",
      industry: "saas",
      email: "test@testcorp.com",
      serviceArea: "Austin, TX",
      aiRecommendationGoal: "Best CRM for real estate",
    });

    expect(result).toEqual({ success: true, leadId: 1 });
  });

  it("rejects invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.audit.submit({
        businessName: "Test Corp",
        websiteUrl: "https://testcorp.com",
        industry: "saas",
        email: "invalid-email",
      })
    ).rejects.toThrow();
  });

  it("rejects invalid URL", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.audit.submit({
        businessName: "Test Corp",
        websiteUrl: "not-a-url",
        industry: "saas",
        email: "test@testcorp.com",
      })
    ).rejects.toThrow();
  });
});

describe("contact.submit", () => {
  it("creates a contact submission with valid input", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "John Doe",
      email: "john@example.com",
      company: "Acme Inc",
      service: "GEO Foundation",
      message: "I'm interested in learning more about your services.",
    });

    expect(result).toEqual({ success: true, submissionId: 1 });
  });

  it("rejects short messages", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "John Doe",
        email: "john@example.com",
        message: "Hi",
      })
    ).rejects.toThrow();
  });
});

describe("blog.published", () => {
  it("returns published blog posts", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.blog.published();

    expect(Array.isArray(result)).toBe(true);
  });
});
