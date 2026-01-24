import { eq, desc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { 
  InsertUser, 
  users, 
  auditLeads, 
  InsertAuditLead, 
  AuditLead,
  contactSubmissions,
  InsertContactSubmission,
  ContactSubmission,
  blogPosts,
  InsertBlogPost,
  BlogPost,
  payments,
  InsertPayment,
  Payment
} from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// ==================== AUDIT LEADS ====================

export async function createAuditLead(lead: InsertAuditLead): Promise<AuditLead | null> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot create audit lead: database not available");
    return null;
  }

  try {
    const result = await db.insert(auditLeads).values(lead);
    const insertId = result[0].insertId;
    const created = await db.select().from(auditLeads).where(eq(auditLeads.id, insertId)).limit(1);
    return created[0] || null;
  } catch (error) {
    console.error("[Database] Failed to create audit lead:", error);
    throw error;
  }
}

export async function getAuditLeads(): Promise<AuditLead[]> {
  const db = await getDb();
  if (!db) return [];

  return db.select().from(auditLeads).orderBy(desc(auditLeads.createdAt));
}

export async function getAuditLeadById(id: number): Promise<AuditLead | null> {
  const db = await getDb();
  if (!db) return null;

  const result = await db.select().from(auditLeads).where(eq(auditLeads.id, id)).limit(1);
  return result[0] || null;
}

export async function updateAuditLeadStatus(id: number, status: AuditLead['status']): Promise<void> {
  const db = await getDb();
  if (!db) return;

  await db.update(auditLeads).set({ status }).where(eq(auditLeads.id, id));
}

export async function updateAuditLeadPayment(id: number, stripePaymentId: string): Promise<void> {
  const db = await getDb();
  if (!db) return;

  await db.update(auditLeads).set({ 
    stripePaymentId, 
    paidAt: new Date(),
    status: 'qualified'
  }).where(eq(auditLeads.id, id));
}

// ==================== CONTACT SUBMISSIONS ====================

export async function createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission | null> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot create contact submission: database not available");
    return null;
  }

  try {
    const result = await db.insert(contactSubmissions).values(submission);
    const insertId = result[0].insertId;
    const created = await db.select().from(contactSubmissions).where(eq(contactSubmissions.id, insertId)).limit(1);
    return created[0] || null;
  } catch (error) {
    console.error("[Database] Failed to create contact submission:", error);
    throw error;
  }
}

export async function getContactSubmissions(): Promise<ContactSubmission[]> {
  const db = await getDb();
  if (!db) return [];

  return db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.createdAt));
}

export async function updateContactSubmissionStatus(id: number, status: ContactSubmission['status']): Promise<void> {
  const db = await getDb();
  if (!db) return;

  await db.update(contactSubmissions).set({ status }).where(eq(contactSubmissions.id, id));
}

// ==================== BLOG POSTS ====================

export async function createBlogPost(post: InsertBlogPost): Promise<BlogPost | null> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot create blog post: database not available");
    return null;
  }

  try {
    const result = await db.insert(blogPosts).values(post);
    const insertId = result[0].insertId;
    const created = await db.select().from(blogPosts).where(eq(blogPosts.id, insertId)).limit(1);
    return created[0] || null;
  } catch (error) {
    console.error("[Database] Failed to create blog post:", error);
    throw error;
  }
}

export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  const db = await getDb();
  if (!db) return [];

  return db.select().from(blogPosts)
    .where(eq(blogPosts.published, true))
    .orderBy(desc(blogPosts.publishedAt));
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const db = await getDb();
  if (!db) return [];

  return db.select().from(blogPosts).orderBy(desc(blogPosts.createdAt));
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const db = await getDb();
  if (!db) return null;

  const result = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug)).limit(1);
  return result[0] || null;
}

export async function updateBlogPost(id: number, updates: Partial<InsertBlogPost>): Promise<void> {
  const db = await getDb();
  if (!db) return;

  await db.update(blogPosts).set(updates).where(eq(blogPosts.id, id));
}

export async function deleteBlogPost(id: number): Promise<void> {
  const db = await getDb();
  if (!db) return;

  await db.delete(blogPosts).where(eq(blogPosts.id, id));
}

// ==================== PAYMENTS ====================

export async function createPayment(payment: InsertPayment): Promise<Payment | null> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot create payment: database not available");
    return null;
  }

  try {
    const result = await db.insert(payments).values(payment);
    const insertId = result[0].insertId;
    const created = await db.select().from(payments).where(eq(payments.id, insertId)).limit(1);
    return created[0] || null;
  } catch (error) {
    console.error("[Database] Failed to create payment:", error);
    throw error;
  }
}

export async function getPaymentBySessionId(sessionId: string): Promise<Payment | null> {
  const db = await getDb();
  if (!db) return null;

  const result = await db.select().from(payments).where(eq(payments.stripeSessionId, sessionId)).limit(1);
  return result[0] || null;
}

export async function updatePaymentStatus(
  sessionId: string, 
  status: Payment['status'], 
  paymentIntentId?: string
): Promise<void> {
  const db = await getDb();
  if (!db) return;

  const updates: Partial<InsertPayment> = { status };
  if (paymentIntentId) {
    updates.stripePaymentIntentId = paymentIntentId;
  }

  await db.update(payments).set(updates).where(eq(payments.stripeSessionId, sessionId));
}

export async function getPayments(): Promise<Payment[]> {
  const db = await getDb();
  if (!db) return [];

  return db.select().from(payments).orderBy(desc(payments.createdAt));
}
