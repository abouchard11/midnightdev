# Architecture

**Analysis Date:** 2026-05-01

## Pattern Overview

**Overall:** Full-stack monolith with client-server split (SPA + Express API)

**Key Characteristics:**
- Single repository with `client/`, `server/`, `shared/` directories
- tRPC for end-to-end typesafe API communication (no REST endpoints except health check and Stripe webhook)
- React SPA with client-side routing (wouter) served by the same Express server
- Vite dev server proxied through Express in development; static files served in production
- MySQL database accessed via Drizzle ORM with lazy connection pattern
- Clerk handles authentication with auto-sync to local user table

## Layers

**Presentation Layer (Client):**
- Purpose: User-facing React SPA with marketing pages, forms, and admin dashboard
- Location: `client/src/`
- Contains: React components, pages, hooks, contexts, static data, CSS
- Depends on: tRPC client, Clerk React SDK, shadcn/ui components, Radix primitives
- Used by: End users via browser

**API Layer (tRPC Routers):**
- Purpose: Typesafe RPC procedures for all data operations
- Location: `server/routers.ts`, `server/_core/trpc.ts`, `server/_core/systemRouter.ts`
- Contains: tRPC router definitions with Zod input validation
- Depends on: Database functions (`server/db.ts`), email service, Stripe SDK, notification system
- Used by: Client via tRPC React Query hooks

**Data Access Layer:**
- Purpose: Database operations via Drizzle ORM
- Location: `server/db.ts`
- Contains: CRUD functions for all 5 tables (users, audit_leads, contact_submissions, blog_posts, payments)
- Depends on: Drizzle ORM, MySQL driver, schema definitions
- Used by: tRPC routers, Stripe webhook handler

**Schema Layer:**
- Purpose: Database table definitions and type exports
- Location: `drizzle/schema.ts`, `drizzle/relations.ts`
- Contains: Table definitions using Drizzle MySQL helpers, inferred TypeScript types
- Depends on: `drizzle-orm/mysql-core`
- Used by: Data access layer, shared types

**Infrastructure Layer (Server Core):**
- Purpose: Express server setup, middleware, utilities
- Location: `server/_core/`
- Contains: Server bootstrap, tRPC context creation, Vite integration, cookie helpers, env config, notification system
- Depends on: Express, Clerk Express SDK, Vite, Resend
- Used by: All server-side code

**Shared Layer:**
- Purpose: Constants and types shared between client and server
- Location: `shared/`
- Contains: Cookie constants, error messages, HTTP error classes, re-exported schema types
- Depends on: Schema types from `drizzle/schema.ts`
- Used by: Both client and server code

## Data Flow

**Public Form Submission (Audit/Contact):**
1. User fills form on `Audit.tsx` or `ContactForm.tsx`
2. Client calls tRPC mutation (`audit.submit` or `contact.submit`) via React Query
3. tRPC procedure validates input with Zod schema
4. `server/db.ts` function inserts record into MySQL
5. `server/email.ts` triggers `notifyOwner()` which sends email via Resend
6. Success response returns to client, UI shows confirmation

**Stripe Payment Flow:**
1. User clicks "BUY NOW" on `Pricing.tsx`
2. Client calls `stripe.createCheckoutSession` tRPC mutation
3. Server creates Stripe Checkout Session and records payment in DB (`status: pending`)
4. Client redirects to Stripe Checkout
5. After payment, Stripe redirects to `PaymentSuccess.tsx`
6. Client calls `stripe.verifyPayment` to confirm
7. Separately, Stripe sends webhook to `POST /api/stripe/webhook`
8. Webhook handler updates payment status, notifies owner via email

**Authentication Flow:**
1. User clicks Sign In on Admin page (Clerk `<SignInButton>`)
2. Clerk handles OAuth/email flow
3. On authenticated tRPC request, `createContext()` calls `getAuth()` to extract Clerk user ID
4. Context function looks up user in local DB by `clerkUserId`
5. If not found, auto-syncs from Clerk API (`clerkClient.users.getUser()`) and inserts into DB
6. User object attached to tRPC context for procedure access
7. `protectedProcedure` and `adminProcedure` middleware enforce access control

**State Management:**
- Server state: TanStack React Query (via tRPC React hooks) - automatic caching, refetching
- Form state: React Hook Form with Zod resolvers
- Theme state: React Context (`ThemeContext`) with localStorage persistence
- URL state: wouter router (client-side routing, no server-side rendering)
- No global client state store (no Redux, Zustand, etc.)

## Key Abstractions

**tRPC Procedures:**
- Purpose: Authorization-gated API endpoints
- Examples: `publicProcedure`, `protectedProcedure`, `adminProcedure` in `server/_core/trpc.ts`
- Pattern: Middleware chain - each procedure type adds progressively stricter auth checks

**Database Functions:**
- Purpose: Encapsulate all DB operations with graceful fallback
- Examples: `createAuditLead()`, `getUserByClerkId()`, `updatePaymentStatus()` in `server/db.ts`
- Pattern: Every function calls `getDb()` first, returns `null`/`[]` if DB unavailable. No raw SQL.

**Page Components:**
- Purpose: Full-page views with SEO metadata, navigation, and footer
- Examples: `client/src/pages/Home.tsx`, `client/src/pages/Audit.tsx`, `client/src/pages/Admin.tsx`
- Pattern: Each page imports `<SEO>`, `<Navigation>`, `<Footer>` and composes section components

**shadcn/ui Components:**
- Purpose: Reusable, accessible UI primitives
- Examples: 53 components in `client/src/components/ui/`
- Pattern: Radix primitives wrapped with Tailwind CSS and CVA variants; composed via `cn()` utility

**Notification System:**
- Purpose: Email alerts to site owner for business events
- Examples: `notifyOwner()` in `server/_core/notification.ts`
- Pattern: Validates payload, converts markdown to HTML, sends via Resend with branded template

## Entry Points

**Server Entry (Development):**
- Location: `server/_core/index.ts`
- Triggers: `pnpm dev` -> `tsx watch server/_core/index.ts`
- Responsibilities: Express setup, middleware registration (Stripe webhook, Clerk, body parser, tRPC, Vite), port discovery, server start

**Server Entry (Production Build):**
- Location: `dist/index.js` (bundled from `server/_core/index.ts` by esbuild)
- Triggers: `pnpm start` -> `node dist/index.js`
- Responsibilities: Same as development but serves static files instead of Vite dev server

**Client Entry:**
- Location: `client/src/main.tsx`
- Triggers: Vite bundles and serves `client/index.html` which loads `main.tsx`
- Responsibilities: Provider setup (tRPC, React Query, Clerk, Helmet), renders `<App>`

**Client Router:**
- Location: `client/src/App.tsx`
- Triggers: Browser navigation
- Responsibilities: Route definitions (wouter Switch/Route), theme provider, error boundary, toast provider

**Stripe Webhook:**
- Location: `server/stripeWebhook.ts`
- Triggers: `POST /api/stripe/webhook` from Stripe
- Responsibilities: Signature verification, event routing (checkout completed/expired, payment failed, subscriptions, invoices)

**tRPC API:**
- Location: `server/routers.ts`
- Triggers: Client tRPC calls to `/api/trpc`
- Responsibilities: All business logic - audit leads, contacts, blog CRUD, Stripe checkout, auth

**Alternative Server Entry:**
- Location: `server/index.ts`
- Triggers: Not referenced in scripts (likely legacy/unused)
- Responsibilities: Minimal static file server without tRPC/auth/middleware

## Error Handling

**Strategy:** Mixed - tRPC errors for API, graceful degradation for DB/auth

**Patterns:**
- tRPC errors: `TRPCError` with standard codes (`UNAUTHORIZED`, `FORBIDDEN`, `BAD_REQUEST`) in `server/_core/trpc.ts`
- Database: Every DB function catches errors, logs with `console.error`, and either returns `null`/`[]` or re-throws
- Auth: Authentication failures silently set `user = null` in context (public procedures still work)
- Client: `ErrorBoundary` component wraps entire app in `App.tsx`
- Notifications: `notifyOwner()` returns `false` on failure instead of throwing
- Stripe webhook: Returns 400 for signature failures, 500 for processing errors
- Shared errors: `HttpError` class and convenience constructors in `shared/_core/errors.ts` (not widely used; tRPC errors preferred)

## Cross-Cutting Concerns

**Logging:** Console-based with module prefix tags (`[Database]`, `[Email]`, `[Notification]`, `[Stripe Webhook]`). No structured logging library.

**Validation:** Zod schemas at tRPC procedure inputs. React Hook Form + Zod resolvers on client forms. Dual validation (client + server).

**Authentication:** Clerk middleware on Express, `getAuth()` in tRPC context, three procedure access levels (`public`, `protected`, `admin`).

**SEO:** Per-page `<SEO>` component (Helmet), `<StructuredData>` for JSON-LD, static sitemap generator, canonical URL handling.

**Theming:** Dark-first design with CSS custom properties (oklch color space), `ThemeProvider` context with localStorage persistence. Theme switching disabled by default (hardcoded dark).

**Body Size:** Express body parser configured to 50MB limit for potential file uploads.

---

*Architecture analysis: 2026-05-01*
