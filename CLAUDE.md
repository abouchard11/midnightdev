# MidnightDev

Dev agency / personal brand site for Alex Bouchard (alex@midnightdev.dev).
Builds Next.js / React / Supabase / Stripe platforms for clients.

- **Domain:** midnightdev.dev
- **Graphiti group_id:** midnightdev
- **Deployed on:** Vercel

## Rebuild Context
This repo previously contained an Express + Vite SPA on Railway. That codebase is being replaced with a fresh Next.js App Router project on Vercel. Old files in the repo may not reflect the target architecture.

## Design System
Always read DESIGN.md before making any visual or UI decisions.
All font choices, colors, spacing, and aesthetic direction are defined there.
Do not deviate without explicit user approval.
In QA mode, flag any code that doesn't match DESIGN.md.

## Stack
- Next.js (App Router) on Vercel
- TypeScript
- Tailwind CSS v4
- shadcn/ui components
- JetBrains Mono, Cabinet Grotesk, DM Sans (Google Fonts)

## Portfolio Sites (Built by MidnightDev)
All sites should have a "Built by MidnightDev" footer credit linking to midnightdev.dev.

- stackdworkforce.com
- buylandfl.com
- houstonlawyerlist.com
- htxdentalimplants.com
- jonesactcalculator.com
- methyleneblueultra.com
- htxpermitfix.com
- htximmigrationlaw.com

## Contact
- Email: alex@midnightdev.dev
- Logo: LOGOmidnight.png on Desktop (moon + code brackets, blue-to-purple gradient)

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
