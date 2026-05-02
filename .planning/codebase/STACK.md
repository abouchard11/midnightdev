# Technology Stack

**Analysis Date:** 2026-05-01

## Languages

**Primary:**
- TypeScript 5.9.3 - Used across all client, server, and shared code
- TSX - React component files in `client/src/`

**Secondary:**
- JavaScript (ESM) - `generate-sitemap.js` build script
- SQL - Drizzle migration files in `drizzle/`
- CSS - Tailwind v4 + custom CSS in `client/src/index.css`

## Runtime

**Environment:**
- Node.js (ESM modules, `"type": "module"` in `package.json`)
- No `.nvmrc` or `.node-version` file present; target is ES2022+ (per `tsconfig.node.json`)

**Package Manager:**
- pnpm 10.4.1 (corepack-managed via `packageManager` field in `package.json`)
- Lockfile: `pnpm-lock.yaml` present
- Patched dependencies: `wouter@3.7.1` via `patches/wouter@3.7.1.patch`
- Overrides: `tailwindcss>nanoid` pinned to `3.3.7`

## Frameworks

**Core:**
- React 19.2.1 - Frontend UI framework
- Express 4.21.2 - Backend HTTP server
- tRPC 11.6.0 - End-to-end typesafe API layer (client + server + react-query integration)
- Vite 7.1.7 - Dev server with HMR and production bundler

**UI Component System:**
- shadcn/ui (new-york style) - 53 Radix-based UI components in `client/src/components/ui/`
- Radix UI primitives - 20+ primitive packages for accessible headless components
- Tailwind CSS 4.1.14 - Utility-first CSS with `@tailwindcss/vite` plugin
- Framer Motion 12.23.22 - Page animations and transitions
- Lucide React 0.453.0 - Icon library
- class-variance-authority 0.7.1 + clsx 2.1.1 + tailwind-merge 3.3.1 - CSS class composition

**Testing:**
- Vitest 2.1.4 - Test runner (configured for server-side tests only)

**Build/Dev:**
- esbuild 0.25.0 - Server bundle for production (`server/_core/index.ts` -> `dist/index.js`)
- tsx 4.19.1 - TypeScript execution for dev server (`tsx watch`)
- PostCSS 8.4.47 + Autoprefixer 10.4.20 - CSS processing
- drizzle-kit 0.31.4 - Database migration generation and execution

## Key Dependencies

**Critical (Business Logic):**
- `stripe` 20.2.0 + `@stripe/stripe-js` 8.6.4 - Payment processing (Stripe Checkout)
- `@clerk/clerk-react` 5.59.6 + `@clerk/express` 1.7.65 - Authentication (Clerk)
- `drizzle-orm` 0.44.5 + `mysql2` 3.15.0 - Database ORM and MySQL driver
- `resend` 6.8.0 - Transactional email via Resend API
- `wouter` 3.3.5 - Lightweight client-side routing (patched version)
- `@tanstack/react-query` 5.90.2 - Server state management (integrated with tRPC)

**Forms & Validation:**
- `zod` 4.1.12 - Schema validation (shared between client and server via tRPC)
- `react-hook-form` 7.64.0 + `@hookform/resolvers` 5.2.2 - Form state management
- `react-google-recaptcha` 3.1.0 - CAPTCHA on contact form

**Content & SEO:**
- `react-helmet-async` 2.0.5 - Document head management (meta tags, structured data)
- `@vercel/analytics` 1.6.1 - Vercel web analytics
- `@emailjs/browser` 4.4.1 - Client-side email (contact form fallback)

**Infrastructure:**
- `superjson` 1.13.3 - tRPC transformer for serializing dates/etc.
- `jose` 6.1.0 - JWT operations
- `cookie` 1.0.2 - Cookie parsing
- `dotenv` 17.2.2 - Environment variable loading
- `nanoid` 5.1.5 - ID generation (used in Vite dev server cache busting)
- `@aws-sdk/client-s3` 3.693.0 + `@aws-sdk/s3-request-presigner` 3.693.0 - S3 file storage (installed, not actively used in current routes)
- `axios` 1.12.0 - HTTP client (installed, secondary to tRPC)

**UI Enhancement:**
- `recharts` 2.15.2 - Charts (admin dashboard)
- `sonner` 2.0.7 - Toast notifications
- `embla-carousel-react` 8.6.0 - Carousel
- `vaul` 1.1.2 - Drawer component
- `cmdk` 1.1.1 - Command palette
- `react-day-picker` 9.11.1 - Calendar/date picker
- `date-fns` 4.1.0 - Date formatting
- `input-otp` 1.4.2 - OTP input
- `react-resizable-panels` 3.0.6 - Resizable panel layout
- `streamdown` 1.4.0 - Markdown streaming for AI chat box
- `next-themes` 0.4.6 - Theme management (installed but custom `ThemeContext` used instead)
- `tailwindcss-animate` 1.0.7 + `tw-animate-css` 1.4.0 - Animation utilities

**Dev Only:**
- `@builder.io/vite-plugin-jsx-loc` 0.1.1 - JSX source location plugin
- `@tailwindcss/typography` 0.5.15 - Prose styling plugin
- `@types/google.maps` 3.58.1 - Google Maps types (Map component)
- Prettier 3.6.2 - Code formatting

## Configuration

**TypeScript:**
- `tsconfig.json` - Main config (strict mode, bundler resolution, noEmit)
- `tsconfig.node.json` - Vite config compilation (ES2022 target)
- Path aliases: `@/*` -> `client/src/*`, `@shared/*` -> `shared/*`

**Build:**
- `vite.config.ts` - Client build config (React plugin, Tailwind v4 plugin, JSX loc plugin)
- `vitest.config.ts` - Test config (node environment, server-only tests)
- `drizzle.config.ts` - Database config (MySQL dialect, schema at `drizzle/schema.ts`)
- `components.json` - shadcn/ui config (new-york style, Tailwind CSS variables, component aliases)

**Formatting:**
- `.prettierrc` - Semicolons, double quotes, 80 char width, es5 trailing commas, no arrow parens
- `.prettierignore` - Excludes node_modules, dist, lockfiles, env files

**Environment:**
- `.env.example` present - Lists required variables
- Environment loaded via `dotenv/config` import in server entry point
- Client env vars prefixed with `VITE_` (Vite convention)

## Platform Requirements

**Development:**
- Node.js with ESM support
- pnpm 10.4.1+
- MySQL database (connection via `DATABASE_URL`)
- Clerk account (auth keys)
- Resend account (email notifications)
- Stripe account (payment processing)

**Production:**
- Railway deployment (`railway.toml` present)
- nixpacks builder
- Health check at `/api/health`
- Auto-restart on failure (max 3 retries)
- `pnpm start` runs `node dist/index.js`

---

*Stack analysis: 2026-05-01*
