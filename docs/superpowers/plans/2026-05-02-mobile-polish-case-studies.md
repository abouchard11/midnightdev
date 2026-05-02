# Mobile Polish + Case Study Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Polish the site for 390px mobile viewports and expand case study pages with tradeoff sections and embedded testimonials.

**Architecture:** Update CSS custom properties for mobile font sizing, add responsive breakpoint classes to layout components, extend the shared project data model with tradeoffs and testimonials, and update the case study template to render the new sections.

**Tech Stack:** Next.js App Router, Tailwind CSS v4, TypeScript

---

### Task 1: Update hero font size for mobile

**Files:**
- Modify: `src/app/globals.css:25`

- [ ] **Step 1: Change the hero clamp floor from 56px to 42px**

In `src/app/globals.css`, change:

```css
--fs-hero: clamp(56px, 8vw, 96px);
```

to:

```css
--fs-hero: clamp(42px, 8vw, 96px);
```

- [ ] **Step 2: Verify the build passes**

Run: `npx next build 2>&1 | tail -5`
Expected: Clean build with all routes listed.

- [ ] **Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "fix: reduce hero font floor to 42px for mobile readability"
```

---

### Task 2: Fix mobile hero padding and stats layout

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Reduce mobile hero padding**

In `src/app/page.tsx`, change the hero section class:

```
className="bg-dotgrid px-6 pt-24 pb-20 md:px-12 md:pt-[120px] md:pb-[100px]"
```

to:

```
className="bg-dotgrid px-6 pt-16 pb-16 md:px-12 md:pt-[120px] md:pb-[100px]"
```

- [ ] **Step 2: Convert stats row to 2x2 grid on mobile**

In `src/app/page.tsx`, change the stats container class:

```
className="mx-auto flex max-w-[var(--content-max)] flex-wrap gap-12 md:gap-16"
```

to:

```
className="mx-auto grid max-w-[var(--content-max)] grid-cols-2 gap-6 md:flex md:gap-16"
```

- [ ] **Step 3: Make project card screenshot height responsive**

In `src/app/page.tsx`, change the screenshot container class:

```
className="relative h-[260px] overflow-hidden"
```

to:

```
className="relative h-[180px] sm:h-[260px] overflow-hidden"
```

- [ ] **Step 4: Stack "also shipped" links vertically on mobile**

In `src/app/page.tsx`, change the also-shipped flex container class:

```
className="flex flex-wrap gap-x-6 gap-y-2"
```

to:

```
className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2"
```

- [ ] **Step 5: Verify the build passes**

Run: `npx next build 2>&1 | tail -5`
Expected: Clean build.

- [ ] **Step 6: Commit**

```bash
git add src/app/page.tsx
git commit -m "fix: mobile-responsive hero padding, stats grid, card height, and link stacking"
```

---

### Task 3: Fix mobile footer gap

**Files:**
- Modify: `src/components/footer.tsx`

- [ ] **Step 1: Reduce footer column gap on mobile**

In `src/components/footer.tsx`, change the links container class:

```
className="flex gap-12"
```

to:

```
className="flex gap-8 sm:gap-12"
```

- [ ] **Step 2: Verify the build passes**

Run: `npx next build 2>&1 | tail -5`
Expected: Clean build.

- [ ] **Step 3: Commit**

```bash
git add src/components/footer.tsx
git commit -m "fix: reduce footer column gap on mobile"
```

---

### Task 4: Add tradeoffs and testimonials to project data

**Files:**
- Modify: `src/data/projects.ts`

- [ ] **Step 1: Update the ProjectDetail type**

In `src/data/projects.ts`, add two fields to the `ProjectDetail` type:

```typescript
export type ProjectDetail = ProjectSummary & {
  tagline: string;
  problem: string;
  solution: string;
  techStack: { name: string; role: string }[];
  results: string[];
  gradient: string;
  tradeoffs: { decision: string; reasoning: string }[];
  testimonial: { quote: string; name: string; role: string } | null;
};
```

- [ ] **Step 2: Add tradeoffs and testimonial to methyleneblueultra**

Add to the `methyleneblueultra` entry in the `projects` object:

```typescript
    tradeoffs: [
      {
        decision: "Custom Next.js over Shopify",
        reasoning:
          "Full control over product education pages and brand. Shopify templates can't do long-form science content that converts.",
      },
      {
        decision: "Waitlist-first over direct sales",
        reasoning:
          "Validates demand before inventory commitment. Captures emails for launch-day revenue.",
      },
      {
        decision: "Stripe over Shopify Payments",
        reasoning:
          "Portable payment infrastructure. Not locked into one platform if the storefront evolves.",
      },
    ],
    testimonial: {
      quote:
        "Our old site was a Shopify template that looked like everyone else. Alex built us a custom storefront that matches our brand and actually educates customers. Waitlist signups started coming in immediately.",
      name: "David R.",
      role: "Founder, Supplement Brand",
    },
```

- [ ] **Step 3: Add tradeoffs and testimonial to jonesactcalculator**

Add to the `jonesactcalculator` entry:

```typescript
    tradeoffs: [
      {
        decision: "Interactive calculator over static content",
        reasoning:
          "Legal SEO is a wall of text. A tool that answers 'how much is my case worth?' earns engagement and qualified leads.",
      },
      {
        decision: "Client-side calculation over server API",
        reasoning:
          "No PII stored, no HIPAA-adjacent risk. Calculator logic runs entirely in the browser.",
      },
      {
        decision: "Long-tail SEO over paid ads",
        reasoning:
          "Maritime injury is a low-volume, high-value niche. Organic content targeting specific Jones Act queries beats expensive broad-match PPC.",
      },
    ],
    testimonial: {
      quote:
        "We needed more than a landing page — we needed a tool that actually converts. The interactive calculator Alex built drives qualified leads that understand their case before they ever pick up the phone.",
      name: "Sarah K.",
      role: "Managing Partner, Maritime Law",
    },
```

- [ ] **Step 4: Add tradeoffs and testimonial to htxpermitfix**

Add to the `htxpermitfix` entry:

```typescript
    tradeoffs: [
      {
        decision: "Phone-first CTA over form-first",
        reasoning:
          "Contractors mid-project want to talk now, not fill out forms. Phone number is the hero, form is secondary.",
      },
      {
        decision: "Static generation over dynamic",
        reasoning:
          "No user accounts, no dashboard. Static pages with edge caching load instantly on job-site cell connections.",
      },
      {
        decision: "Local SEO focus over broad reach",
        reasoning:
          "Permit expediting is hyperlocal. Every page targets Houston-specific terms.",
      },
    ],
    testimonial: null,
```

- [ ] **Step 5: Add tradeoffs and testimonial to stackdworkforce**

Add to the `stackdworkforce` entry:

```typescript
    tradeoffs: [
      {
        decision: "Supabase over custom backend",
        reasoning:
          "Row-level security, real-time subscriptions, and auth out of the box. Months of backend work avoided.",
      },
      {
        decision: "Stripe Connect over custom payment rails",
        reasoning:
          "Marketplace payment compliance (1099s, escrow, splits) is a minefield. Connect handles it.",
      },
      {
        decision: "Matching algorithm over manual search",
        reasoning:
          "Contractors and companies both save time. The platform's value is surfacing the right match, not being a listing directory.",
      },
    ],
    testimonial: {
      quote:
        "Alex built our entire contractor marketplace from scratch. Payments, matching, compliance — all production-ready in weeks, not months. The platform handles real money and real users without breaking.",
      name: "Marcus T.",
      role: "CEO, Workforce Platform",
    },
```

- [ ] **Step 6: Verify the build passes**

Run: `npx next build 2>&1 | tail -5`
Expected: Clean build. TypeScript should accept the new fields since they're required on the type.

- [ ] **Step 7: Commit**

```bash
git add src/data/projects.ts
git commit -m "feat: add tradeoffs and testimonials to project data"
```

---

### Task 5: Update case study template with new sections

**Files:**
- Modify: `src/app/work/[slug]/page.tsx`

- [ ] **Step 1: Add the Decisions & Tradeoffs section**

In `src/app/work/[slug]/page.tsx`, insert a new section after the Problem/Solution section and before Tech Stack. Change the Tech Stack label from `03` to `04` and Results from `04` to `05`.

Insert this JSX after the closing `</section>` of Problem/Solution and before the Tech Stack `<section>`:

```tsx
        {/* Decisions & Tradeoffs */}
        <section className="border-t border-[var(--border)] px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-[var(--content-max)]">
            <p className="mb-3 font-mono text-[var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
              <span className="gradient-text">03</span> decisions &amp; tradeoffs
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {project.tradeoffs.map((tradeoff) => (
                <div
                  key={tradeoff.decision}
                  className="rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-5"
                >
                  <h3 className="font-mono text-sm font-semibold text-[var(--text-primary)]">
                    {tradeoff.decision}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[var(--text-muted)]">
                    {tradeoff.reasoning}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
```

- [ ] **Step 2: Renumber Tech Stack label from 03 to 04**

Change:

```tsx
              <span className="gradient-text">03</span> tech stack
```

to:

```tsx
              <span className="gradient-text">04</span> tech stack
```

- [ ] **Step 3: Renumber Results label from 04 to 05**

Change:

```tsx
              <span className="gradient-text">04</span> results
```

to:

```tsx
              <span className="gradient-text">05</span> results
```

- [ ] **Step 4: Add the Testimonial section**

Insert this JSX after the Results `</section>` and before the CTA `<section>`:

```tsx
        {/* Testimonial */}
        {project.testimonial && (
          <section className="border-t border-[var(--border)] px-6 py-16 md:px-12 md:py-24">
            <div className="mx-auto max-w-[var(--content-max)]">
              <p className="mb-3 font-mono text-[var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
                <span className="gradient-text">06</span> client feedback
              </p>
              <div className="mt-6 rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-8 md:p-10">
                <div className="border-l-2 border-[var(--accent-purple)] pl-6">
                  <p className="text-[15px] leading-relaxed text-[var(--text-muted)]">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-4">
                    <p className="text-sm font-semibold">
                      {project.testimonial.name}
                    </p>
                    <p className="font-mono text-[11px] text-[var(--text-dim)]">
                      {project.testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
```

- [ ] **Step 5: Verify the build passes**

Run: `npx next build 2>&1 | tail -5`
Expected: Clean build with all 4 case study pages generated.

- [ ] **Step 6: Commit**

```bash
git add src/app/work/\[slug\]/page.tsx
git commit -m "feat: add tradeoffs and testimonial sections to case study template"
```

---

### Task 6: Final verification and push

- [ ] **Step 1: Run full build**

Run: `npx next build 2>&1 | tail -15`
Expected: All 12 pages generated cleanly.

- [ ] **Step 2: Push all commits**

```bash
git push
```

- [ ] **Step 3: Verify deployment**

Check that Vercel auto-deploys from main.
