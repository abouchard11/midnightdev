# External Integrations

**Analysis Date:** 2026-05-01

## APIs & External Services

**Authentication:**
- Clerk - User authentication and session management
  - SDK/Client: `@clerk/clerk-react` (frontend), `@clerk/express` (backend middleware)
  - Auth: `CLERK_SECRET_KEY` (server), `VITE_CLERK_PUBLISHABLE_KEY` (client)
  - Integration points:
    - `server/_core/index.ts` - `clerkMiddleware()` on Express
    - `server/_core/context.ts` - `getAuth()` extracts user from request, auto-syncs to DB via `upsertUser()`
    - `client/src/main.tsx` - `<ClerkProvider>` wraps app (conditional on key availability)
    - `client/src/pages/Admin.tsx` - `useAuth()`, `useUser()`, `useClerk()`, `<SignInButton>` for admin dashboard
  - Owner auto-admin: Users matching `OWNER_CLERK_ID` env var are auto-assigned `admin` role in `server/db.ts`
  - Graceful fallback: Server and client both run without Clerk keys (logs warning)

**Payments:**
- Stripe - Payment processing via Checkout Sessions
  - SDK/Client: `stripe` (server), `@stripe/stripe-js` (client)
  - Auth: `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`
  - Integration points:
    - `server/routers.ts` - `stripe.createCheckoutSession` creates Checkout sessions for "Signal Check" audit product ($497)
    - `server/routers.ts` - `stripe.verifyPayment` verifies payment status post-redirect
    - `server/stripeWebhook.ts` - Handles `checkout.session.completed`, `checkout.session.expired`, `payment_intent.payment_failed`, subscription lifecycle events, invoice events
    - `client/src/pages/Pricing.tsx` - Initiates Stripe Checkout redirect
    - `client/src/pages/PaymentSuccess.tsx` - Post-payment verification page
  - Webhook endpoint: `POST /api/stripe/webhook` (raw body parsing, signature verification)
  - Products defined inline (not Stripe Dashboard products): `signal_check` at $497
  - API version: `2025-12-15.clover`

**Email - Transactional:**
- Resend - Server-side email notifications to site owner
  - SDK/Client: `resend`
  - Auth: `RESEND_API_KEY`
  - Integration point: `server/_core/notification.ts` - `notifyOwner()` function
  - From address: `notifications@midnightdev.dev`
  - Recipient: `OWNER_EMAIL` env var
  - Used for: audit lead notifications, payment confirmations, contact form notifications, failed payment alerts, subscription events
  - HTML templates: Inline dark-themed email templates with MIDNIGHT_DEV_ branding

**Email - Client-side (Fallback):**
- EmailJS - Client-side email sending on contact form
  - SDK/Client: `@emailjs/browser`
  - Auth: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`
  - Integration point: `client/src/components/ContactForm.tsx`
  - Note: This is a separate path from the tRPC `contact.submit` mutation; ContactForm uses EmailJS directly

**CAPTCHA:**
- Google reCAPTCHA v2 - Bot protection on contact form
  - SDK/Client: `react-google-recaptcha`
  - Integration point: `client/src/components/ContactForm.tsx`
  - Current state: Uses test site key (`6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI`) - always passes
  - Server-side verification: Not implemented (token sent to EmailJS but not validated server-side)

**Analytics:**
- Vercel Analytics - Web analytics
  - SDK/Client: `@vercel/analytics`
  - Integration point: `client/src/App.tsx` - `<Analytics />` component rendered inside Router
  - No configuration required (auto-configured by Vercel)

**Maps:**
- Google Maps JavaScript API - Map display
  - SDK/Client: `@types/google.maps` (types only)
  - Integration point: `client/src/components/Map.tsx`
  - Note: Types installed for dev but implementation details in Map component

## Data Storage

**Database:**
- MySQL (via `mysql2` driver)
  - Connection: `DATABASE_URL` env var (format: `mysql://user:pass@host:3306/db`)
  - Client: Drizzle ORM (`drizzle-orm/mysql2`)
  - Schema: `drizzle/schema.ts` - 5 tables (users, audit_leads, contact_submissions, blog_posts, payments)
  - Migrations: `drizzle/` directory (3 migrations: `0000`, `0001`, `0002`)
  - Migration command: `pnpm db:push` (runs `drizzle-kit generate && drizzle-kit migrate`)
  - Lazy connection: DB instance created lazily on first query via `getDb()` in `server/db.ts`
  - Graceful fallback: All DB functions return `null`/`[]` if database is unavailable

**File Storage:**
- AWS S3 (installed but not actively used in current routes)
  - SDK: `@aws-sdk/client-s3`, `@aws-sdk/s3-request-presigner`
  - No env vars listed in `.env.example` for S3
  - No S3 operations found in current router or db code

**Caching:**
- None - No caching layer

## Authentication & Identity

**Auth Provider:**
- Clerk (managed service)
  - Implementation: JWT-based sessions via Clerk middleware
  - User sync: Clerk user auto-synced to local `users` table on first tRPC request (see `server/_core/context.ts`)
  - Roles: `user` | `admin` (MySQL enum)
  - Owner detection: `OWNER_CLERK_ID` env var auto-promotes to admin
  - tRPC procedures: `publicProcedure`, `protectedProcedure` (requires user), `adminProcedure` (requires admin role)

## Monitoring & Observability

**Error Tracking:**
- None (no Sentry, DataDog, etc.)
- Client-side: `ErrorBoundary` component at `client/src/components/ErrorBoundary.tsx`

**Logs:**
- `console.log` / `console.warn` / `console.error` throughout server code
- Prefixed with module tags: `[Database]`, `[Email]`, `[Notification]`, `[Stripe Webhook]`
- No structured logging library

## CI/CD & Deployment

**Hosting:**
- Railway (primary deployment target)
  - Config: `railway.toml`
  - Builder: nixpacks
  - Start: `pnpm start` -> `node dist/index.js`
  - Health check: `GET /api/health` (300s timeout)
  - Restart policy: on_failure, max 3 retries

**CI Pipeline:**
- GitHub Actions (minimal - DataDog synthetics workflow was recently removed per commit `ed18e3d`)

**Build Process:**
1. `vite build` - Bundles client to `dist/public/`
2. `esbuild server/_core/index.ts` - Bundles server to `dist/index.js` (ESM, external packages)

## Environment Configuration

**Required env vars:**
- `CLERK_SECRET_KEY` - Clerk authentication (server)
- `VITE_CLERK_PUBLISHABLE_KEY` - Clerk authentication (client)
- `OWNER_CLERK_ID` - Auto-admin assignment
- `DATABASE_URL` - MySQL connection string
- `JWT_SECRET` - JWT operations (via jose)
- `RESEND_API_KEY` - Transactional email
- `OWNER_EMAIL` - Notification recipient
- `STRIPE_SECRET_KEY` - Stripe payments
- `STRIPE_WEBHOOK_SECRET` - Stripe webhook verification
- `VITE_APP_URL` - Application URL for Stripe redirects (defaults to `https://midnightdev.dev`)
- `NODE_ENV` - Environment mode
- `PORT` - Server port (defaults to 3000)

**Optional client env vars (not in .env.example):**
- `VITE_EMAILJS_SERVICE_ID` - EmailJS service
- `VITE_EMAILJS_TEMPLATE_ID` - EmailJS template
- `VITE_EMAILJS_PUBLIC_KEY` - EmailJS auth

**Secrets location:**
- `.env` file (gitignored)
- Railway environment variables (production)

## Webhooks & Callbacks

**Incoming:**
- `POST /api/stripe/webhook` - Stripe webhook events
  - Events handled: `checkout.session.completed`, `checkout.session.expired`, `payment_intent.payment_failed`, `customer.subscription.created/updated/deleted`, `invoice.payment_succeeded/failed`
  - Signature verification via `stripe.webhooks.constructEvent()`
  - Raw body parsing registered before `express.json()` middleware

**Outgoing:**
- Resend email notifications (triggered by form submissions and payment events)
- EmailJS sends (client-side contact form)

## SEO Infrastructure

**Sitemap:**
- Static generator: `generate-sitemap.js` -> `client/public/sitemap.xml`
- Hardcoded routes (not auto-discovered from router)

**Meta Tags:**
- `client/src/components/SEO.tsx` - React Helmet-based meta tag management
- Open Graph + Twitter Card support
- Per-page SEO configuration

**Structured Data:**
- `client/src/components/StructuredData.tsx` - JSON-LD injection via React Helmet
- Organization schema on homepage

---

*Integration audit: 2026-05-01*
