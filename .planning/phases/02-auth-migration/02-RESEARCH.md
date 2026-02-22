# Phase 2: Auth Migration - Research

**Researched:** 2026-01-25
**Domain:** Manus OAuth → Clerk Authentication (Express + React)
**Confidence:** HIGH

<research_summary>

## Summary

Researched Clerk authentication for replacing Manus OAuth in a Vite + Express + React + tRPC application. Clerk provides nearly identical OAuth UX patterns to Manus but with modern SDK design.

The migration is straightforward because:

1. Clerk's Express middleware (`clerkMiddleware()`, `requireAuth()`, `getAuth()`) maps 1:1 to the existing Manus SDK patterns
2. React hooks (`useAuth()`, `useUser()`) replace the custom `useAuth.ts` hook
3. Session management is handled by Clerk (no manual JWT creation needed)
4. Database schema change is minimal: `openId` → `clerkUserId`

**Primary recommendation:** Use `@clerk/express` for backend, `@clerk/clerk-react` for frontend. Let Clerk handle all session/token management — remove custom JWT code entirely.
</research_summary>

<standard_stack>

## Standard Stack

### Core

| Library            | Version | Purpose                | Why Standard                                                 |
| ------------------ | ------- | ---------------------- | ------------------------------------------------------------ |
| @clerk/express     | ^2.x    | Express middleware     | Official Clerk SDK for Express, handles session verification |
| @clerk/clerk-react | ^5.x    | React hooks/components | Official React SDK, provides useAuth, useUser, ClerkProvider |

### Supporting

| Library        | Version  | Purpose                 | When to Use                                  |
| -------------- | -------- | ----------------------- | -------------------------------------------- |
| @clerk/backend | included | Backend user operations | When fetching full user data via clerkClient |

### Remove (Manus-specific)

| Library             | Action                                                   |
| ------------------- | -------------------------------------------------------- |
| jose (JWT)          | Can remove if only used for Manus sessions               |
| axios (OAuth calls) | Keep if used elsewhere, but OAuth-specific usage removed |

**Installation:**

```bash
pnpm add @clerk/express @clerk/clerk-react
```

</standard_stack>

<architecture_patterns>

## Architecture Patterns

### Pattern 1: Express Middleware Setup

**What:** Global Clerk middleware + route-specific protection
**Current (Manus):**

```typescript
// sdk.authenticateRequest() called in tRPC context
const session = await sdk.verifySession(cookieValue);
if (!session) throw ForbiddenError();
```

**Target (Clerk):**

```typescript
import { clerkMiddleware, requireAuth, getAuth } from "@clerk/express";

app.use(clerkMiddleware());

// In tRPC context or protected routes:
const { userId } = getAuth(req);
if (!userId) throw TRPCError({ code: "UNAUTHORIZED" });
```

### Pattern 2: React Auth Hook

**What:** Replace custom useAuth with Clerk's useAuth
**Current (Manus):**

```typescript
const meQuery = trpc.auth.me.useQuery();
const { user, loading, isAuthenticated } = state;
```

**Target (Clerk):**

```typescript
import { useAuth, useUser } from "@clerk/clerk-react";

const { isSignedIn, isLoaded, userId, signOut } = useAuth();
const { user } = useUser();
```

### Pattern 3: ClerkProvider Setup

**What:** Wrap app root with ClerkProvider
**Current (Manus):** No provider needed (uses cookie-based sessions)
**Target (Clerk):**

```tsx
// main.tsx
import { ClerkProvider } from "@clerk/clerk-react";

<ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
  <App />
</ClerkProvider>;
```

### Pattern 4: Database User Sync

**What:** Sync Clerk user to local database on first auth
**Current (Manus):**

```typescript
// In oauth.ts callback
await db.upsertUser({
  openId: userInfo.openId,
  name: userInfo.name,
  email: userInfo.email,
});
```

**Target (Clerk):**

```typescript
// In tRPC context or webhook
const { userId } = getAuth(req);
let user = await db.getUserByClerkId(userId);
if (!user) {
  const clerkUser = await clerkClient.users.getUser(userId);
  user = await db.upsertUser({
    clerkUserId: userId,
    name: clerkUser.firstName + " " + clerkUser.lastName,
    email: clerkUser.emailAddresses[0]?.emailAddress,
  });
}
```

### Anti-Patterns to Avoid

- **Creating custom JWT sessions:** Clerk manages sessions — don't sign your own JWTs
- **Manual cookie handling:** Clerk middleware handles cookies automatically
- **Separate OAuth callback route:** Clerk's hosted UI handles OAuth flows (unless you need custom UI)
  </architecture_patterns>

<dont_hand_roll>

## Don't Hand-Roll

| Problem                | Don't Build               | Use Instead                                | Why                                                 |
| ---------------------- | ------------------------- | ------------------------------------------ | --------------------------------------------------- |
| Session verification   | Custom JWT verify         | `getAuth(req).userId`                      | Clerk handles token validation, refresh, revocation |
| OAuth callback flow    | `/api/oauth/callback`     | Clerk hosted sign-in                       | Clerk manages the entire OAuth dance with providers |
| Session token creation | `new SignJWT().sign()`    | Clerk sessions                             | Clerk issues/manages tokens, handles expiry         |
| Login URL generation   | `getLoginUrl()` function  | `<SignInButton>` or redirect to `/sign-in` | Clerk UI components or hosted pages                 |
| Auth state management  | Custom tRPC auth.me query | `useAuth()` hook                           | Clerk tracks auth state client-side                 |

**Key insight:** Clerk handles the entire auth lifecycle. The app should only:

1. Check if user is authenticated (`getAuth(req).userId`)
2. Sync user data to local DB (for app-specific fields like `role`)
3. Use `clerkClient.users.getUser()` when full user data needed
   </dont_hand_roll>

<common_pitfalls>

## Common Pitfalls

### Pitfall 1: Forgetting to apply clerkMiddleware() globally

**What goes wrong:** `getAuth(req)` returns undefined, routes fail
**Why it happens:** Middleware order matters in Express
**How to avoid:** Apply `app.use(clerkMiddleware())` before any route handlers
**Warning signs:** "Cannot read property 'userId' of undefined"

### Pitfall 2: Using wrong environment variable prefix

**What goes wrong:** Clerk fails to initialize on client
**Why it happens:** Vite requires `VITE_` prefix for client-exposed vars
**How to avoid:**

- Server: `CLERK_SECRET_KEY` (no prefix)
- Client: `VITE_CLERK_PUBLISHABLE_KEY`
  **Warning signs:** "Missing Clerk publishable key"

### Pitfall 3: Trying to use Clerk in SSR context without proper setup

**What goes wrong:** Auth state undefined during server render
**Why it happens:** Clerk needs client-side hydration
**How to avoid:** This app uses CSR (Vite + React), so not an issue
**Warning signs:** Hydration mismatches

### Pitfall 4: Not handling the "loading" state

**What goes wrong:** Flash of unauthenticated content
**Why it happens:** Clerk needs time to check session
**How to avoid:** Check `isLoaded` before rendering auth-dependent UI
**Warning signs:** Brief flash of sign-in button before showing user button
</common_pitfalls>

<code_examples>

## Code Examples

### Express Setup with tRPC

```typescript
// server/_core/index.ts
import { clerkMiddleware } from "@clerk/express";

app.use(clerkMiddleware());

// tRPC middleware can now use getAuth
```

### tRPC Context with Clerk

```typescript
// server/_core/context.ts
import { getAuth, clerkClient } from "@clerk/express";

export async function createContext({ req, res }) {
  const { userId } = getAuth(req);

  let user = null;
  if (userId) {
    user = await db.getUserByClerkId(userId);
    // Optionally sync from Clerk if not in DB
    if (!user) {
      const clerkUser = await clerkClient.users.getUser(userId);
      user = await db.upsertUser({
        clerkUserId: userId,
        email: clerkUser.emailAddresses[0]?.emailAddress,
        name: `${clerkUser.firstName} ${clerkUser.lastName}`.trim(),
      });
    }
  }

  return { req, res, user };
}
```

### React ClerkProvider

```tsx
// client/src/main.tsx
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

<ClerkProvider publishableKey={PUBLISHABLE_KEY}>
  <App />
</ClerkProvider>
```

### Replace useAuth Hook

```typescript
// Instead of custom useAuth.ts
import { useAuth, useUser, useClerk } from '@clerk/clerk-react'

function AuthButton() {
  const { isSignedIn, isLoaded } = useAuth()
  const { signOut } = useClerk()
  const { user } = useUser()

  if (!isLoaded) return <Spinner />

  if (!isSignedIn) {
    return <SignInButton />
  }

  return (
    <div>
      {user?.firstName}
      <button onClick={() => signOut()}>Logout</button>
    </div>
  )
}
```

</code_examples>

<migration_mapping>

## Migration Mapping

### Environment Variables

| Manus                   | Clerk                        | Notes                       |
| ----------------------- | ---------------------------- | --------------------------- |
| `OAUTH_SERVER_URL`      | (removed)                    | Clerk handles OAuth servers |
| `VITE_OAUTH_PORTAL_URL` | (removed)                    | Clerk hosted UI             |
| `VITE_APP_ID`           | `VITE_CLERK_PUBLISHABLE_KEY` | From Clerk dashboard        |
| (none)                  | `CLERK_SECRET_KEY`           | Backend only                |
| `OWNER_OPEN_ID`         | `OWNER_CLERK_ID`             | Update to new user ID       |

### Database Schema

```sql
-- Change column
ALTER TABLE users CHANGE openId clerkUserId VARCHAR(64) NOT NULL;
```

Or in Drizzle:

```typescript
// From
openId: varchar("openId", { length: 64 }).notNull().unique(),
// To
clerkUserId: varchar("clerkUserId", { length: 64 }).notNull().unique(),
```

### File Mapping

| Manus File                          | Action  | Clerk Replacement              |
| ----------------------------------- | ------- | ------------------------------ |
| `server/_core/sdk.ts`               | Replace | Use `@clerk/express` imports   |
| `server/_core/oauth.ts`             | Delete  | Clerk handles OAuth callbacks  |
| `server/_core/context.ts`           | Update  | Use `getAuth(req)`             |
| `server/_core/trpc.ts`              | Update  | Check `userId` from context    |
| `client/src/_core/hooks/useAuth.ts` | Delete  | Use `@clerk/clerk-react` hooks |
| `client/src/const.ts`               | Update  | Remove `getLoginUrl()`         |

</migration_mapping>

<sources>
## Sources

### Primary (HIGH confidence)

- Context7 `/clerk/clerk-docs` — Express middleware, React hooks, getAuth patterns
- https://clerk.com/docs/quickstarts/express — Official Express setup guide

### Secondary (MEDIUM confidence)

- https://clerk.com/blog/securing-node-express-apis-clerk-react — Blog tutorial (verified against docs)

### Notes

- Clerk deprecated `@clerk/clerk-sdk-node` in January 2025, now use `@clerk/express`
- All code patterns verified against Context7 current documentation
  </sources>

<metadata>
## Metadata

**Research scope:**

- Core technology: Clerk authentication
- Ecosystem: @clerk/express, @clerk/clerk-react
- Patterns: Express middleware, React hooks, tRPC integration
- Pitfalls: Middleware order, env var prefixes, loading states

**Confidence breakdown:**

- Standard stack: HIGH — from official docs
- Architecture: HIGH — patterns from Context7
- Pitfalls: HIGH — documented in official guides
- Code examples: HIGH — adapted from Context7 sources

**Research date:** 2026-01-25
**Valid until:** 2026-02-25 (30 days — Clerk stable, well-documented)
</metadata>

---

_Phase: 02-auth-migration_
_Research completed: 2026-01-25_
_Ready for planning: yes_
