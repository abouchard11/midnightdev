# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# MidnightDev

Public workfolio of Alex Bouchard (alex@midnightdev.dev) — forward-deployed AI lead and founder of MidnightDev. This site is his canonical identity/entity home, not a product site.

- **Domain:** midnightdev.dev (deployed on Vercel)
- **Graphiti group_id:** midnightdev
- **Positioning:** `docs/POSITIONING.md` is the canonical source for public MidnightDev / Alex Bouchard positioning. Website copy, case studies, and claims must stay consistent with it; record newer evidence there first.
- The site favors evidence-bearing language over marketing shorthand. Legacy agency case pages and unsupported production claims are excluded from the public workfolio routes and sitemap.

## Commands

pnpm is the package manager.

- `pnpm install` — install dependencies
- `pnpm dev` — dev server at http://localhost:3000
- `pnpm lint` — ESLint (eslint-config-next core-web-vitals + typescript, flat config)
- `pnpm build` — production build

There is no test framework; validation is `pnpm lint` + `pnpm build`.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (CSS-first via `@tailwindcss/postcss` — there is no tailwind.config file; tokens live in `src/app/globals.css`)
- Fonts: DM Sans + JetBrains Mono via `next/font/google`; Cabinet Grotesk (display) from local woffs in `src/fonts/`, all exposed as `--font-*` CSS variables in `src/app/layout.tsx`
- `@vercel/analytics`; nodemailer for the contact endpoint

## Architecture

Static-content site: no database, no CMS, one API route. All content is hardcoded in page components or `src/data/`.

- **Routes** (`src/app/`): `/` (homepage), `/build-room` (canonical case file), `/alex-bouchard` (renders `CaseFilePage`; `/case-file` 301s to it via `next.config.ts`), `/work/[slug]` (project case studies), `/writing` plus one directory per essay, `/resume`, `/services`, `/privacy`.
- **Project data** (`src/data/projects.ts`): single source of truth for project case studies — a typed `projects` record keyed by slug. `featuredProjectSlugs` gates what is publicly rendered and indexed: non-featured slugs 404 with `noindex` in `work/[slug]/page.tsx`. Adding a project means updating `projects`, `featuredProjectSlugs`, and `src/app/sitemap.ts`.
- **Sitemap** (`src/app/sitemap.ts`) hardcodes every indexable URL, including writing posts. Any new public page must be added there manually.
- **JSON-LD entity graph**: `src/data/schema.ts` defines the canonical `@id` constants (`PERSON_ID`, `ORG_ID`, `WEBSITE_ID`). The Person/Organization/WebSite graph is emitted on every page from `src/app/layout.tsx`; any page-level structured data must reference these constants, never inline `@id` strings — a typo silently splits the entity in two.
- **Canonical host** (`src/proxy.ts`): 301-redirects every non-localhost, non-Vercel-preview host to https://midnightdev.dev.
- **Contact endpoint** (`src/app/api/contact/route.ts`): the only API route. Sends mail via Gmail SMTP with nodemailer (requires `GMAIL_APP_PASSWORD` env var), with in-memory per-IP rate limiting and a honeypot field.
- **robots.ts**: deliberate allow-all posture, including AI training crawlers — this is intentional (see the dated comment in the file) because the site exists to seed the entity graph into AI answer engines. Do not "harden" it.
- **SEO conventions**: every page exports `Metadata` with `alternates.canonical` and OpenGraph fields; writing essays each have their own `opengraph-image.tsx`.

## Design System

Always read DESIGN.md before making any visual or UI decisions.
All font choices, colors, spacing, and aesthetic direction are defined there.
Do not deviate without explicit user approval.
In QA mode, flag any code that doesn't match DESIGN.md.

Implementation notes:
- Design tokens are CSS custom properties in `src/app/globals.css`, consumed through Tailwind arbitrary values (e.g. `bg-[var(--surface)]`, `text-[length:var(--fs-label)]`, `rounded-[var(--r-md)]`).
- Dark-only — there is no light mode. The blue→purple gradient (`#4B8BF5` → `#8B5CF6`) is the only chromatic accent, used surgically (logo, primary CTA, gradient text), never as a background.
- JetBrains Mono marks nav items, section labels, badges, and metadata; Cabinet Grotesk 700/800 for display headings.

## Repo docs and working files

- `docs/POSITIONING.md` — canonical public positioning (see above).
- `.planning/`, `docs/superpowers/`, `WEBSITE_REVIEW.md`, `CLAUDE_DESIGN_BRIEF.md` — historical planning/review artifacts, not shipped content.
- `CITATION.cff` — machine-readable citation metadata for the site.

## Portfolio Sites (Built by MidnightDev)

Client/portfolio sites (separate repos) should have a "Built by MidnightDev" footer credit linking to midnightdev.dev:
stackdworkforce.com, buylandfl.com, houstonlawyerlist.com, htxdentalimplants.com, jonesactcalculator.com, methyleneblueultra.com, htxpermitfix.com, htximmigrationlaw.com.

## Contact

- Email: alex@midnightdev.dev

## Skill routing

When the user's request matches an available skill, invoke it via the Skill tool. When in doubt, invoke the skill.

Key routing rules:
- Product ideas/brainstorming → invoke /office-hours
- Strategy/scope → invoke /plan-ceo-review
- Architecture → invoke /plan-eng-review
- Design system/plan review → invoke /design-consultation or /plan-design-review
- Full review pipeline → invoke /autoplan
- Bugs/errors → invoke /investigate
- QA/testing site behavior → invoke /qa or /qa-only
- Code review/diff check → invoke /review
- Visual polish → invoke /design-review
- Ship/deploy/PR → invoke /ship or /land-and-deploy
- Save progress → invoke /context-save
- Resume context → invoke /context-restore
