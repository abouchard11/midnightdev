# Phase 2 Plan 1: Server-side Auth Migration Summary

**Replaced Manus OAuth with Clerk middleware on the server side.**

## Accomplishments
- Installed @clerk/express and @clerk/clerk-react
- Replaced Manus OAuth with Clerk middleware (clerkMiddleware)
- Updated database schema: openId → clerkUserId
- Deleted sdk.ts and oauth.ts (~350 lines removed)
- Updated context.ts to use getAuth() for user lookup
- Stubbed notification.ts (Manus Forge API removed, Phase 3 will replace with Resend)

## Files Created/Modified
- `package.json` - Added Clerk dependencies
- `server/_core/env.ts` - Updated env vars for Clerk (clerkSecretKey, ownerClerkId)
- `drizzle/schema.ts` - Renamed openId to clerkUserId
- `server/db.ts` - Updated user functions (getUserByClerkId, upsertUser)
- `server/_core/index.ts` - Added clerkMiddleware(), removed registerOAuthRoutes
- `server/_core/context.ts` - Uses getAuth() for user lookup with auto-sync
- `server/_core/notification.ts` - Stubbed (returns false, logs warning)
- `server/audit.test.ts` - Updated mock user to use clerkUserId
- `server/auth.logout.test.ts` - Updated mock user to use clerkUserId

## Files Deleted
- `server/_core/sdk.ts` - 305 lines of Manus OAuth implementation
- `server/_core/oauth.ts` - 54 lines of OAuth callback handler

## Decisions Made
- Stubbed notification.ts instead of deleting to avoid breaking form submissions (Phase 3 will replace)
- Kept loginMethod field in schema for tracking auth provider
- Auto-sync user from Clerk to local DB on first authenticated request

## Issues Encountered
- notification.ts referenced removed env vars (forgeApiUrl, forgeApiKey) — resolved by stubbing

## Verification
- ✅ `pnpm check` passes
- ✅ `pnpm build` succeeds
- ✅ sdk.ts and oauth.ts deleted
- ✅ No openId references in server code (except test mocks and unused manusTypes.ts)
- ✅ Clerk middleware integrated

## Next Step
Ready for 02-02-PLAN.md (client-side auth migration)
