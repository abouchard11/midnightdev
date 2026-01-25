export const ENV = {
  clerkSecretKey: process.env.CLERK_SECRET_KEY ?? "",
  jwtSecret: process.env.JWT_SECRET ?? "",
  databaseUrl: process.env.DATABASE_URL ?? "",
  ownerClerkId: process.env.OWNER_CLERK_ID ?? "",
  isProduction: process.env.NODE_ENV === "production",
};
