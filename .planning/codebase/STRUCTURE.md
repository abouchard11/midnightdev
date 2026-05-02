# Codebase Structure

**Analysis Date:** 2026-05-01

## Directory Layout

```
midnightdev/
├── client/                    # React SPA (Vite root)
│   ├── index.html             # HTML entry point
│   ├── public/                # Static assets (served at /)
│   │   ├── images/            # Hero/service images (PNG)
│   │   └── sitemap.xml        # Generated sitemap
│   └── src/                   # Application source
│       ├── App.tsx            # Router + providers
│       ├── main.tsx           # React DOM entry
│       ├── index.css          # Tailwind + theme + custom CSS
│       ├── const.ts           # Re-exports from shared
│       ├── components/        # Reusable components
│       │   ├── ui/            # shadcn/ui primitives (53 files)
│       │   ├── diagrams/      # SVG diagram components
│       │   ├── Navigation.tsx # Site-wide nav bar
│       │   ├── Footer.tsx     # Site-wide footer
│       │   ├── Hero.tsx       # Homepage hero section
│       │   ├── Services.tsx   # Services grid
│       │   ├── Work.tsx       # Portfolio showcase
│       │   ├── SEO.tsx        # Meta tag management
│       │   ├── StructuredData.tsx # JSON-LD injection
│       │   ├── ContactForm.tsx    # Contact form (EmailJS)
│       │   ├── ContactDialog.tsx  # Contact modal wrapper
│       │   ├── AIChatBox.tsx      # AI chat interface
│       │   ├── DashboardLayout.tsx    # Admin layout with sidebar
│       │   ├── DashboardLayoutSkeleton.tsx # Loading skeleton
│       │   ├── ErrorBoundary.tsx   # Error boundary
│       │   ├── ManusDialog.tsx    # Dialog component
│       │   ├── Map.tsx            # Google Maps component
│       │   └── ScrollToTop.tsx    # Route scroll reset
│       ├── pages/             # Route page components
│       │   ├── Home.tsx       # Landing page
│       │   ├── Admin.tsx      # Admin dashboard (34KB - largest file)
│       │   ├── Audit.tsx      # AI Visibility Audit form
│       │   ├── Pricing.tsx    # Pricing tiers + Stripe checkout
│       │   ├── PaymentSuccess.tsx # Post-payment confirmation
│       │   ├── SaasDevelopment.tsx # SaaS service page
│       │   ├── AiMarketing.tsx    # AI marketing service page
│       │   ├── GeoOptimization.tsx    # GEO service page
│       │   ├── CitationEngineering.tsx # Citation service page
│       │   ├── ConversationalLandingPages.tsx # CLP service page
│       │   ├── SchemaBuilder.tsx  # Schema builder tool
│       │   ├── Insights.tsx       # Blog listing page
│       │   ├── BlogPostTemplate.tsx # Single blog post
│       │   ├── CaseStudyTemplate.tsx # Case study detail
│       │   ├── ComponentShowcase.tsx  # UI component demo (58KB)
│       │   ├── Privacy.tsx        # Privacy policy
│       │   └── NotFound.tsx       # 404 page
│       ├── contexts/          # React contexts
│       │   └── ThemeContext.tsx
│       ├── hooks/             # Custom React hooks
│       │   ├── useComposition.ts  # IME composition handler
│       │   ├── useMobile.tsx      # Mobile breakpoint detector
│       │   └── usePersistFn.ts    # Stable function reference
│       ├── data/              # Static data files
│       │   ├── caseStudies.ts # Case study content
│       │   ├── blogPosts.ts   # Blog post content
│       │   └── insights.ts    # Insights/article data
│       └── lib/               # Utility libraries
│           ├── trpc.ts        # tRPC React client
│           └── utils.ts       # cn() class merge utility
├── server/                    # Express + tRPC backend
│   ├── _core/                 # Server infrastructure
│   │   ├── index.ts           # Server entry point (Express setup)
│   │   ├── trpc.ts            # tRPC initialization + procedures
│   │   ├── context.ts         # tRPC context (auth extraction)
│   │   ├── vite.ts            # Vite dev server integration
│   │   ├── notification.ts    # Resend email notification system
│   │   ├── cookies.ts         # Session cookie config
│   │   ├── env.ts             # Environment variable accessors
│   │   ├── systemRouter.ts    # System tRPC routes (health, notify)
│   │   └── types/             # Type declarations
│   │       └── cookie.d.ts    # Cookie package types
│   ├── index.ts               # Alternative static server entry (unused)
│   ├── routers.ts             # Main tRPC router (all business logic)
│   ├── db.ts                  # Database access functions (Drizzle)
│   ├── email.ts               # Email templates + send functions
│   ├── stripeWebhook.ts       # Stripe webhook handler
│   ├── audit.test.ts          # Audit feature tests
│   └── auth.logout.test.ts    # Auth logout tests
├── shared/                    # Code shared between client & server
│   ├── const.ts               # Cookie name, timeouts, error messages
│   ├── types.ts               # Re-exports schema types + errors
│   └── _core/
│       └── errors.ts          # HttpError class + convenience constructors
├── drizzle/                   # Database schema & migrations
│   ├── schema.ts              # Table definitions (5 tables)
│   ├── relations.ts           # Relation definitions (empty)
│   ├── 0000_young_scrambler.sql       # Initial migration
│   ├── 0001_wealthy_psylocke.sql      # Blog + payments tables
│   ├── 0002_nebulous_the_santerians.sql # Schema update
│   ├── meta/                  # Migration metadata/snapshots
│   │   ├── _journal.json
│   │   ├── 0000_snapshot.json
│   │   ├── 0001_snapshot.json
│   │   └── 0002_snapshot.json
│   └── migrations/            # Migration output directory
├── patches/                   # pnpm patch files
│   └── wouter@3.7.1.patch    # Patch for wouter router
├── .planning/                 # GSD planning documents
│   ├── PROJECT.md
│   ├── ROADMAP.md
│   ├── STATE.md
│   ├── config.json
│   ├── phases/
│   └── codebase/              # This directory (codebase analysis)
├── package.json               # Dependencies + scripts
├── pnpm-lock.yaml             # Lockfile
├── tsconfig.json              # Main TypeScript config
├── tsconfig.node.json         # Vite-specific TS config
├── vite.config.ts             # Vite build configuration
├── vitest.config.ts           # Test configuration
├── drizzle.config.ts          # Drizzle ORM configuration
├── components.json            # shadcn/ui configuration
├── railway.toml               # Railway deployment config
├── generate-sitemap.js        # Sitemap generator script
├── .prettierrc                # Code formatting rules
├── .prettierignore            # Prettier exclusions
├── .gitignore                 # Git exclusions
├── .env.example               # Environment variable template
├── ideas.md                   # Feature ideas/brainstorming
├── research_notes.md          # Research notes
└── todo.md                    # Task tracking
```

## Directory Purposes

**`client/src/components/`:**
- Purpose: All reusable React components
- Contains: Business components at root level, shadcn/ui in `ui/`, SVG diagrams in `diagrams/`
- Key files: `Navigation.tsx`, `Footer.tsx`, `Hero.tsx`, `SEO.tsx`, `ContactForm.tsx`

**`client/src/components/ui/`:**
- Purpose: shadcn/ui component library (53 components)
- Contains: Radix-based accessible primitives styled with Tailwind
- Key files: `button.tsx`, `dialog.tsx`, `form.tsx`, `sidebar.tsx`, `table.tsx`
- Generated: Initially generated via shadcn CLI, then customized

**`client/src/pages/`:**
- Purpose: Route-level page components (17 pages)
- Contains: Full-page views that compose components with SEO + layout
- Key files: `Home.tsx` (landing), `Admin.tsx` (dashboard), `Audit.tsx` (lead form), `Pricing.tsx` (checkout)

**`client/src/data/`:**
- Purpose: Static content data (case studies, blog posts, insights)
- Contains: TypeScript files exporting typed content objects
- Key files: `caseStudies.ts`, `blogPosts.ts`, `insights.ts`

**`server/_core/`:**
- Purpose: Server infrastructure and shared middleware
- Contains: Express setup, tRPC initialization, auth context, notification system
- Key files: `index.ts` (entry), `trpc.ts` (procedure definitions), `context.ts` (auth)

**`shared/`:**
- Purpose: Code shared between client and server bundles
- Contains: Constants, types, error classes
- Key files: `const.ts`, `types.ts`, `_core/errors.ts`

**`drizzle/`:**
- Purpose: Database schema definitions and SQL migrations
- Contains: Schema file, relations file, SQL migrations, migration metadata
- Key files: `schema.ts` (5 table definitions), migration SQL files

## Key File Locations

**Entry Points:**
- `server/_core/index.ts`: Server bootstrap (Express + middleware + tRPC)
- `client/src/main.tsx`: React app initialization (providers + render)
- `client/src/App.tsx`: Client router and global providers
- `client/index.html`: HTML entry loaded by Vite

**Configuration:**
- `vite.config.ts`: Build config (aliases, plugins, output dirs)
- `tsconfig.json`: TypeScript config (strict, path aliases)
- `drizzle.config.ts`: Database migration config
- `components.json`: shadcn/ui component generation config
- `railway.toml`: Production deployment config
- `.prettierrc`: Code formatting rules

**Core Business Logic:**
- `server/routers.ts`: All tRPC procedures (audit, contact, blog, stripe, auth)
- `server/db.ts`: All database operations
- `server/stripeWebhook.ts`: Stripe event handling
- `server/_core/notification.ts`: Email notification system
- `server/email.ts`: Email templates and send functions

**Testing:**
- `server/audit.test.ts`: Audit feature tests
- `server/auth.logout.test.ts`: Auth logout tests
- `vitest.config.ts`: Test runner config (server tests only)

## Naming Conventions

**Files:**
- React components: `PascalCase.tsx` (e.g., `Navigation.tsx`, `ContactForm.tsx`)
- shadcn/ui components: `kebab-case.tsx` (e.g., `alert-dialog.tsx`, `scroll-area.tsx`)
- Hooks: `camelCase.ts` with `use` prefix (e.g., `useMobile.tsx`, `useComposition.ts`)
- Data files: `camelCase.ts` (e.g., `caseStudies.ts`)
- Server files: `camelCase.ts` (e.g., `routers.ts`, `stripeWebhook.ts`)
- Test files: `*.test.ts` (co-located with server source)
- CSS: `index.css` (single global stylesheet)

**Directories:**
- Lowercase for all directories
- Underscore prefix for infrastructure: `_core/` (marks "framework" code vs business logic)

## Where to Add New Code

**New Marketing/Service Page:**
1. Create component: `client/src/pages/NewPage.tsx`
2. Add route in `client/src/App.tsx` inside the `<Switch>` block
3. Include `<SEO>`, `<Navigation>`, and `<Footer>` in the page
4. Update nav items in `client/src/components/Navigation.tsx` if it should appear in nav
5. Update `generate-sitemap.js` if the page should be indexed

**New tRPC API Endpoint:**
1. Add Zod schema + procedure in `server/routers.ts` under the appropriate sub-router
2. Add database function in `server/db.ts` if it needs DB access
3. Add schema/table in `drizzle/schema.ts` if new data model needed
4. Run `pnpm db:push` to generate and apply migration

**New UI Component (shadcn):**
- Use shadcn CLI: `npx shadcn@latest add <component-name>`
- Components land in `client/src/components/ui/`
- Config in `components.json` handles aliases

**New Custom Component:**
- Business component: `client/src/components/ComponentName.tsx`
- Diagram component: `client/src/components/diagrams/DiagramName.tsx`

**New Hook:**
- Place in `client/src/hooks/useHookName.ts`

**New Static Data:**
- Place in `client/src/data/dataName.ts`
- Export typed interfaces and const arrays/records

**New Server Utility:**
- Infrastructure: `server/_core/utilName.ts`
- Business logic: `server/featureName.ts`

**New Shared Type/Constant:**
- Place in `shared/const.ts` for constants
- Place in `shared/types.ts` for type re-exports
- Place in `shared/_core/` for shared utilities

**New Test:**
- Place co-located in `server/` as `featureName.test.ts`
- Tests auto-discovered via `server/**/*.test.ts` pattern in vitest config

## Special Directories

**`client/public/`:**
- Purpose: Static assets served at root URL
- Generated: `sitemap.xml` is generated by `generate-sitemap.js`
- Committed: Yes
- Note: Contains 4 large PNG images (~25MB total)

**`drizzle/meta/`:**
- Purpose: Drizzle Kit migration metadata and snapshots
- Generated: Yes (by `drizzle-kit generate`)
- Committed: Yes

**`patches/`:**
- Purpose: pnpm patch files for dependency modifications
- Generated: Via `pnpm patch` workflow
- Committed: Yes
- Contains: `wouter@3.7.1.patch`

**`dist/`:**
- Purpose: Production build output
- Generated: Yes (by `vite build` + `esbuild`)
- Committed: No (gitignored)

**`.planning/`:**
- Purpose: GSD project planning and codebase analysis
- Generated: By GSD commands
- Committed: Yes

---

*Structure analysis: 2026-05-01*
