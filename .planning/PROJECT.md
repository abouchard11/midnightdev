# Midnight Dev - Manus Migration

## What This Is

Agency website for Midnight Dev, a software development company offering SaaS development, AI automation, and local marketing services. Currently hosted on Manus platform with tight coupling to Manus OAuth, notifications, and hosting. Migrating to Railway with Clerk auth and Resend notifications.

## Core Value

Full agency website with lead capture forms, Stripe payments, and blog CMS that works independently of Manus platform.

## Requirements

### Validated

- ✓ Vite + Express + tRPC architecture — existing
- ✓ MySQL database with Drizzle ORM — existing
- ✓ Stripe payment integration — existing
- ✓ Lead capture forms (audit, contact) — existing
- ✓ Blog CMS with CRUD — existing
- ✓ Dark theme UI with Radix components — existing

### Active

- [ ] Replace Manus OAuth with Clerk authentication
- [ ] Replace Manus notifications with Resend emails
- [ ] Remove unused Manus features (LLM, image gen, voice, maps, storage)
- [ ] Deploy to Railway with MySQL
- [ ] Point midnightdev.dev DNS to Railway

### Out of Scope

- AI chat/LLM features — defined but never used, removing
- Image generation — defined but never used, removing
- Voice transcription — defined but never used, removing
- Maps integration — defined but never used, removing
- File storage API — defined but never used, removing
- New feature development — focus on migration only

## Context

**Current State:**

- App built on Manus 1.6 platform with vite-plugin-manus-runtime
- OAuth tightly coupled to Manus OAuth server (OAUTH_SERVER_URL, VITE_APP_ID)
- Notifications via Manus Forge API (BUILT_IN_FORGE_API_URL)
- Multiple unused Manus services (llm.ts, imageGeneration.ts, etc.) defined but never called

**Target State:**

- Railway hosting (supports Vite + Express)
- Clerk for authentication (similar OAuth flow, easy migration)
- Resend for transactional emails (email templates already exist)
- PlanetScale or Railway MySQL for database

**Critical Files:**

- `server/_core/sdk.ts` — Manus OAuth implementation
- `server/_core/oauth.ts` — OAuth callback handler
- `server/_core/notification.ts` — Manus notification service
- `server/email.ts` — Email functions (already has templates)
- `vite.config.ts` — Manus runtime plugin
- `drizzle/schema.ts` — User table with Manus openId

## Constraints

- **Tech stack**: Must remain Vite + Express + tRPC + MySQL (preserve existing architecture)
- **Database**: User schema change from `openId` to `clerkUserId` requires migration
- **Timeline**: DNS currently pointing to Cloudflare Pages (landing page), need to update to Railway
- **Dependencies**: Must remove vite-plugin-manus-runtime from build

## Key Decisions

| Decision                     | Rationale                                                | Outcome   |
| ---------------------------- | -------------------------------------------------------- | --------- |
| Clerk over Auth0/NextAuth    | Similar OAuth UX to Manus, React SDK, Express middleware | — Pending |
| Resend over SendGrid         | Modern, simple API, generous free tier                   | — Pending |
| Railway over Vercel          | Better support for Express servers, built-in MySQL       | — Pending |
| Delete unused Manus services | Never called in app, adds complexity                     | — Pending |

---

_Last updated: 2026-01-25 after initialization_
