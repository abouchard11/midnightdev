# MidnightDev Design System

## Product
MidnightDev is a dev agency / personal brand for Alex Bouchard. He builds full-stack platforms on Next.js, React, Supabase, and Stripe for clients. Portfolio includes 8+ production sites: StackD Workforce (contractor marketplace), BuyLandFL (real estate), Houston Lawyer List (legal directory), HTX Dental Implants, Jones Act Calculator, Methylene Blue Ultra (e-commerce), HTX Permit Fix, HTX Immigration Law.

The site is a portfolio + credibility page. When someone clicks "Built by MidnightDev" from a client site, they should land here and think: "This person ships real platforms."

## Brand
- **Logo:** Moon crescent with code brackets `</>` inside, blue-to-purple gradient on dark background
- **Name:** MidnightDev (styled as `midnight_dev` in monospace)
- **Domain:** midnightdev.dev
- **Tagline:** Building platforms that ship.

## Aesthetic Direction
Industrial-Refined. Premium dev tools feel, like Linear's polish combined with Basement Studio's confidence. The midnight brand has soul. Dark-only, no light mode.

Decoration level: Intentional. Subtle noise texture or dot grid on backgrounds. Not sterile, not busy.

## Typography
- **Display/Hero:** Cabinet Grotesk 800 (bold geometric sans). -0.04em tracking, 1.0 line-height. Used for headlines and section titles.
- **Body:** DM Sans 400/500. 17px base, 1.7 line-height. Clean, great readability.
- **Code/Labels/Nav:** JetBrains Mono 500. Monospace for navigation items, section labels, tech stack badges, timestamps. 13px for nav, 11px for labels. This is the dev authenticity marker — most agencies use their body font everywhere. Mono as a design accent says "builder, not marketer."

## Color Palette
- **Background:** #08080D (near-black, cool undertone)
- **Surface:** #111118 (cards, elevated elements)
- **Surface hover:** #1A1A24
- **Border:** #1F1F2E (card borders, dividers)
- **Text primary:** #EDEDF0
- **Text muted:** #7A7A8E
- **Text dim:** #4A4A5A (lowest contrast, labels)
- **Accent blue:** #4B8BF5 (start of logo gradient)
- **Accent purple:** #8B5CF6 (end of logo gradient)
- **Accent gradient:** linear-gradient(135deg, #4B8BF5, #8B5CF6)
- **Semantic:** success #22C55E, warning #EAB308, error #EF4444

**Critical rule:** The gradient is used surgically — logo, primary CTA button, gradient text on one hero word. Everything else is grayscale. No purple gradient backgrounds. The gradient is the ONLY chromatic element on the page. This restraint makes it unforgettable.

## Spacing
- Base unit: 8px
- Density: Comfortable (generous whitespace signals premium)
- Scale: 2px, 4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px

## Layout
- Grid-disciplined. Strict columns, predictable alignment.
- Max content width: 1200px
- Border radius: sm 6px, md 10px, lg 14px

## Motion
- Intentional. Subtle entrance animations on scroll, smooth page transitions.
- Nothing bouncy or playful.
- Easing: enter(ease-out), exit(ease-in), move(ease-in-out)
- Duration: micro 50-100ms, short 150-250ms, medium 250-400ms

## Component Patterns

### Buttons
- **Primary:** Gradient background (blue-to-purple), white text, JetBrains Mono 13px, rounded 6px
- **Secondary:** Surface background (#111118), border, primary text, JetBrains Mono 13px
- **Ghost:** Transparent, muted text, JetBrains Mono 13px

### Tech Badges
- JetBrains Mono 10-11px, surface background, border, muted text, rounded 4px
- Examples: `next.js` `supabase` `stripe` `react` `typescript` `vercel`

### Project Cards
- Surface background, border, md radius
- Top: colored gradient thumbnail (180px height) with URL in monospace
- Bottom: project name (DM Sans 15px semibold), description (DM Sans 13px muted), tech stack badges

### Navigation
- JetBrains Mono 13px, muted text, hover to primary text
- Logo: moon icon + `midnight_dev` in mono
- Right side: gradient CTA button "start a project"

### Section Labels
- JetBrains Mono 11px, uppercase, 0.1em tracking, dim text
- Gradient number or word prefix

## Pages Needed
1. **Home** (single page with sections):
   - Hero: availability badge, "Building platforms that ship." headline (gradient on "platforms"), subtitle, two CTA buttons
   - Stats bar: 8+ production platforms, shipping since 2026, Next.js stack, Vercel deploy
   - Portfolio grid: 6 project cards (3-column on desktop)
   - Services: 4 cards (SaaS, Lead Gen, E-Commerce, AI Integration)
   - Contact: "Let's build something." + email CTA

## Design Risks (intentional departures from category norms)
1. Monospace nav + labels — JetBrains Mono for navigation and section labels. Says "builder, not marketer."
2. Gradient-only accent — no secondary colors. Logo gradient is the only chromatic element.
3. No about-me fluff — no process diagrams, values section, team page. Portfolio IS the pitch.

## Anti-patterns (never do these)
- Purple gradient as background
- 3-column feature grid with icons in colored circles
- Centered everything with uniform spacing
- Generic stock-photo hero sections
- Inter, Roboto, Poppins, or Space Grotesk as primary fonts
- Gradient buttons everywhere (only primary CTA)
