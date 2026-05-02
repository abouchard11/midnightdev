# Mobile Polish + Case Study Expansion -- Design Spec

**Date:** 2026-05-02
**Scope:** Two parallel workstreams: (1) responsive polish at 390px, (2) deeper case study content and structure.

---

## Workstream 1: Mobile Polish (390px)

### Hero Section
- Change `--fs-hero` from `clamp(56px, 8vw, 96px)` to `clamp(42px, 8vw, 96px)` in globals.css
- Reduce mobile hero top padding from `pt-24` to `pt-16` (keep `md:pt-[120px]`)

### Stats Row
- Replace `flex flex-wrap gap-12` with `grid grid-cols-2 gap-6` on mobile
- Keep current flex layout at `md:` breakpoint and up (`md:flex md:gap-16`)

### Project Cards
- Reduce screenshot height on mobile: `h-[180px] sm:h-[260px]` (was fixed `h-[260px]`)

### "Also Shipped" Row
- Add `flex-col sm:flex-row` to the link container so projects stack cleanly on mobile

### Footer
- Reduce column gap on mobile: `gap-8 sm:gap-12` (was fixed `gap-12`)

### Hero Padding
- Mobile: `pt-16 pb-16` (was `pt-24 pb-20`)
- Desktop: unchanged (`md:pt-[120px] md:pb-[100px]`)

---

## Workstream 2: Case Study Expansion

### Data Model Changes (src/data/projects.ts)

Add two new fields to `ProjectDetail`:

```typescript
tradeoffs: { decision: string; reasoning: string }[];
testimonial: { quote: string; name: string; role: string } | null;
```

### Template Changes (work/[slug]/page.tsx)

Insert new sections into the case study template:

1. **"Decisions & Tradeoffs"** -- new section between Solution and Tech Stack
   - Label: `03 decisions & tradeoffs` (renumber Tech Stack to `04`, Results to `05`)
   - Layout: grid of cards (`sm:grid-cols-2`), each showing decision as bold heading, reasoning as body text
   - Styled like existing tech stack cards (surface bg, border, md radius)

2. **Testimonial embed** -- new section after Results (before CTA)
   - Only renders if `project.testimonial` is not null
   - Full-width blockquote card with gradient left border
   - Quote text, name, and role
   - Label: `06 client feedback`

### Tradeoff Content

**MethyleneBlueUltra:**
| Decision | Reasoning |
|----------|-----------|
| Custom Next.js over Shopify | Full control over product education pages and brand. Shopify templates can't do long-form science content that converts. |
| Waitlist-first over direct sales | Validates demand before inventory commitment. Captures emails for launch-day revenue. |
| Stripe over Shopify Payments | Portable payment infrastructure. Not locked into one platform if the storefront evolves. |

**JonesActCalculator:**
| Decision | Reasoning |
|----------|-----------|
| Interactive calculator over static content | Legal SEO is a wall of text. A tool that answers "how much is my case worth?" earns engagement and qualified leads. |
| Client-side calculation over server API | No PII stored, no HIPAA-adjacent risk. Calculator logic runs entirely in the browser. |
| Long-tail SEO over paid ads | Maritime injury is a low-volume, high-value niche. Organic content targeting specific Jones Act queries beats expensive broad-match PPC. |

**HTXPermitFix:**
| Decision | Reasoning |
|----------|-----------|
| Phone-first CTA over form-first | Contractors mid-project want to talk now, not fill out forms. Phone number is the hero, form is secondary. |
| Static generation over dynamic | No user accounts, no dashboard. Static pages with edge caching load instantly on job-site cell connections. |
| Local SEO focus over broad reach | Permit expediting is hyperlocal. Every page targets Houston-specific terms. |

**StackD Workforce:**
| Decision | Reasoning |
|----------|-----------|
| Supabase over custom backend | Row-level security, real-time subscriptions, and auth out of the box. Months of backend work avoided. |
| Stripe Connect over custom payment rails | Marketplace payment compliance (1099s, escrow, splits) is a minefield. Connect handles it. |
| Matching algorithm over manual search | Contractors and companies both save time. The platform's value is surfacing the right match, not being a listing directory. |

### Testimonial Mapping

| Project | Testimonial |
|---------|-------------|
| MethyleneBlueUltra | David R., Founder, Supplement Brand |
| JonesActCalculator | Sarah K., Managing Partner, Maritime Law |
| StackD Workforce | Marcus T., CEO, Workforce Platform |
| HTXPermitFix | null (no matching testimonial) |

---

## Files Changed

| File | Changes |
|------|---------|
| `src/app/globals.css` | Update `--fs-hero` clamp floor to 42px |
| `src/app/page.tsx` | Mobile-responsive stats grid, card height, also-shipped stacking, hero padding |
| `src/components/footer.tsx` | Mobile gap adjustment |
| `src/data/projects.ts` | Add tradeoffs and testimonial fields to all 4 projects |
| `src/app/work/[slug]/page.tsx` | Add Tradeoffs section, Testimonial section, renumber labels |

## Out of Scope
- Additional screenshots (no new screenshot assets available)
- Blog/writing section (separate workstream)
- Cal.com/Calendly booking (no link yet)
