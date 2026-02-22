import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import { getAuth, clerkClient } from "@clerk/express";
import type { User } from "../../drizzle/schema";
import { getUserByClerkId, upsertUser } from "../db";

export type TrpcContext = {
  req: CreateExpressContextOptions["req"];
  res: CreateExpressContextOptions["res"];
  user: User | null;
};

export async function createContext(
  opts: CreateExpressContextOptions
): Promise<TrpcContext> {
  let user: User | null = null;

  try {
    const { userId } = getAuth(opts.req);

    if (userId) {
      user = (await getUserByClerkId(userId)) ?? null;

      // Auto-sync from Clerk if user not in DB yet
      if (!user) {
        const clerkUser = await clerkClient.users.getUser(userId);
        await upsertUser({
          clerkUserId: userId,
          email: clerkUser.emailAddresses[0]?.emailAddress ?? null,
          name:
            `${clerkUser.firstName ?? ""} ${clerkUser.lastName ?? ""}`.trim() ||
            null,
        });
        user = (await getUserByClerkId(userId)) ?? null;
      }
    }
  } catch (error) {
    // Authentication is optional for public procedures.
    user = null;
  }

  return {
    req: opts.req,
    res: opts.res,
    user,
  };
}
