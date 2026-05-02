# Design System -- MidnightDev

## Product Context
- **What this is:** Dev agency / personal brand portfolio for Alex Bouchard
- **Who it's for:** Potential clients clicking "Built by MidnightDev" from portfolio sites, and direct leads
- **Space/industry:** Freelance/agency software development (Next.js, React, Supabase, Stripe platforms)
- **Project type:** Portfolio / marketing site
- **Memorable thing:** "This person ships real platforms"

## Aesthetic Direction
- **Direction:** Industrial-Refined -- premium dev tools feel (Linear's polish + Basement's confidence)
- **Decoration level:** Intentional -- subtle noise texture or dot grid on backgrounds, not sterile
- **Mood:** Confident, dark, premium. Like opening a well-built CLI tool. The midnight brand has soul.
- **Reference sites:** basement.studio, linear.app, sentry.io

## Typography
- **Display/Hero:** Cabinet Grotesk 800 -- bold geometric sans, confident and modern. Not overused like Inter/Poppins. -0.04em tracking, 1.0 line-height.
- **Body:** DM Sans 400/500 -- clean, excellent readability at small sizes. 17px base, 1.7 line-height.
- **UI/Labels:** JetBrains Mono 500 -- monospace for nav items, section labels, tech stack badges, timestamps. 13px for nav, 11px for labels. This is the dev authenticity marker.
- **Data/Tables:** JetBrains Mono (tabular-nums supported)
- **Code:** JetBrains Mono
- **Loading:** Google Fonts CDN
- **Scale:**
  - hero: clamp(42px, 6vw, 72px) / Cabinet Grotesk 800
  - h1: 48px / Cabinet Grotesk 700
  - h2: 32px / Cabinet Grotesk 700
  - h3: 24px / Cabinet Grotesk 700
  - body-lg: 18px / DM Sans 400
  - body: 17px / DM Sans 400
  - body-sm: 15px / DM Sans 400
  - caption: 13px / DM Sans 500
  - label: 11px / JetBrains Mono 500 (uppercase, 0.1em tracking)
  - nav: 13px / JetBrains Mono 500
  - badge: 11px / JetBrains Mono 500

## Color
- **Approach:** Restrained -- gradient accent + neutrals only
- **Background:** #08080D -- near-black, cool undertone
- **Surface:** #111118 -- cards, elevated elements
- **Surface-hover:** #1A1A24 -- hover states on surfaces
- **Border:** #1F1F2E -- card borders, dividers
- **Accent-blue:** #4B8BF5 -- start of logo gradient
- **Accent-purple:** #8B5CF6 -- end of logo gradient
- **Accent gradient:** linear-gradient(135deg, #4B8BF5, #8B5CF6) -- used surgically: logo, primary CTA, gradient text accents. Never as backgrounds.
- **Text-primary:** #EDEDF0
- **Text-muted:** #7A7A8E
- **Text-dim:** #4A4A5A -- lowest contrast, labels and metadata
- **Semantic:** success #22C55E, warning #EAB308, error #EF4444, info #4B8BF5
- **Dark mode:** This IS dark mode. No light mode planned.

## Spacing
- **Base unit:** 8px
- **Density:** Comfortable -- generous whitespace signals premium
- **Scale:**
  - 2xs: 2px
  - xs: 4px
  - sm: 8px
  - md: 16px
  - lg: 24px
  - xl: 32px
  - 2xl: 48px
  - 3xl: 64px
  - 4xl: 96px

## Layout
- **Approach:** Grid-disciplined -- strict columns, predictable alignment. The work is the visual interest, not the layout.
- **Grid:** 12-column, 1fr gap at md breakpoint
- **Max content width:** 1200px
- **Border radius:**
  - sm: 6px (badges, small elements)
  - md: 10px (cards, inputs)
  - lg: 14px (large containers, modals)
  - full: 9999px (avatar, logo icon)

## Motion
- **Approach:** Intentional -- subtle entrance animations on scroll, smooth page transitions. Nothing bouncy or playful.
- **Easing:** enter(ease-out) exit(ease-in) move(ease-in-out)
- **Duration:** micro(50-100ms) short(150-250ms) medium(250-400ms) long(400-700ms)
- **Scroll animations:** Fade-up on enter, 0.6s duration, staggered 0.1s per element

## Component Patterns
- **Buttons:**
  - Primary: gradient background, white text, JetBrains Mono 13px
  - Secondary: surface background, border, primary text, JetBrains Mono 13px
  - Ghost: transparent, muted text, JetBrains Mono 13px
- **Tech badges:** JetBrains Mono 11px, surface background, border, muted text
- **Project cards:** Surface background, border, md radius. Thumbnail + name + description + tech badges.
- **Section labels:** JetBrains Mono 11px, uppercase, 0.1em tracking, dim text with gradient number prefix

## Design Risks (intentional departures)
1. **Monospace nav + labels** -- JetBrains Mono for navigation, timestamps, tech badges. Says "builder, not marketer."
2. **Gradient-only accent** -- no secondary colors. Logo gradient is the only chromatic element. Everything else is grayscale.
3. **No about-me fluff** -- no process diagrams, values section, team page. Portfolio IS the pitch.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-05-01 | Initial design system created | /design-consultation based on competitive research (basement.studio, linear.app, sentry.io) and "this person ships real platforms" memorable thing |
| 2026-05-01 | Cabinet Grotesk over Inter/Space Grotesk | Avoid convergence trap -- Inter and Space Grotesk are what every AI tool defaults to |
| 2026-05-01 | JetBrains Mono for nav/labels | Dev authenticity marker that most agencies don't use. Monospace as design element. |
| 2026-05-01 | Gradient-only accent | Logo gradient becomes unforgettable when it's the only color on the page |
| 2026-05-01 | No light mode | "Midnight" brand. Dark is the identity. |
