# Mobile Optimization & Brutalist Refinement

- [ ] **Navigation**: Implement a mobile hamburger menu.
    - [ ] Create a trigger button visible only on mobile.
    - [ ] Build a full-screen or slide-over menu overlay.
    - [ ] Style the menu with the Cyber-Brutalist Noir theme (black bg, mono font, borders).
    - [ ] Ensure "START PROJECT_" button is accessible in the mobile menu.
- [ ] **Hero Section**: Optimize for mobile.
    - [ ] Adjust font sizes for `h1` to prevent excessive wrapping or overflow.
    - [ ] Ensure the background grid/image scales correctly.
    - [ ] Adjust spacing/padding for the stacked layout.
- [ ] **Services Section**: Refine mobile grid.
    - [ ] Ensure cards have proper spacing and border visibility on mobile.
    - [ ] Verify image aspect ratios on small screens.
- [ ] **General**:
    - [ ] Check tap targets (buttons, links) are at least 44px height.
    - [ ] Verify horizontal scrolling is prevented (no overflow).

- [ ] **SaaS Development Page**:
    - [ ] Create `src/pages/SaasDevelopment.tsx`.
    - [ ] Design layout consistent with Cyber-Brutalist Noir theme.
    - [ ] Content: Technical stack details (Next.js, React 19, Clerk, Stripe), architecture diagrams (visual), process flow.
    - [ ] Add "Start Project" CTA.
- [ ] **AI Marketing Page**:
    - [ ] Create `src/pages/AiMarketing.tsx`.
    - [ ] Design layout consistent with theme.
    - [ ] Content: AI agent workflows, SEO strategy, automation tools (OpenAI, Anthropic), success metrics.
    - [ ] Add "Deploy Agents" CTA.
- [ ] **Navigation Updates**:
    - [ ] Update `src/App.tsx` with new routes.
    - [ ] Update `src/components/Navigation.tsx` to link to new pages.
    - [ ] Update `src/components/Services.tsx` "Learn More" buttons to point to new pages.

- [ ] **Interactive Diagrams**:
    - [ ] Create `src/components/diagrams/SaasArchitecture.tsx`: Animated visualization of data flow (Client -> Edge -> Server -> DB).
    - [ ] Create `src/components/diagrams/AiWorkflow.tsx`: Animated visualization of agent swarm (Input -> Analysis -> Action -> Result).
    - [ ] Integrate `SaasArchitecture` into `SaasDevelopment.tsx`.
    - [ ] Integrate `AiWorkflow` into `AiMarketing.tsx`.
    - [ ] Ensure animations are performant and respect `prefers-reduced-motion`.

- [ ] **Mobile Diagram Optimization**:
    - [ ] Update `SaasArchitecture.tsx`: Implement vertical layout for mobile, horizontal for desktop. Adjust animation paths accordingly.
    - [ ] Update `AiWorkflow.tsx`: Adjust node positioning and SVG lines for smaller screens. Ensure text is readable.
    - [ ] Test responsiveness on simulated mobile breakpoints.

- [ ] **SEO & Meta Tags**:
    - [ ] Install `wouter` compatible SEO solution (e.g., `react-helmet-async` or manual head management).
    - [ ] Create a reusable `SEO` component.
    - [ ] Add SEO tags to `Home.tsx`.
    - [ ] Add SEO tags to `SaasDevelopment.tsx` (Title: "Enterprise SaaS Architecture | Midnight Dev", Desc: "Scalable, secure, and high-performance SaaS solutions...").
    - [ ] Add SEO tags to `AiMarketing.tsx` (Title: "AI Marketing Agents | Midnight Dev", Desc: "Dominate local search with autonomous AI agents...").
    - [ ] Verify Open Graph image paths.

- [ ] **Structured Data (JSON-LD)**:
    - [ ] Create `src/components/StructuredData.tsx` component.
    - [ ] Add `Organization` schema to `Home.tsx`.
    - [ ] Add `Service` schema to `SaasDevelopment.tsx`.
    - [ ] Add `Service` schema to `AiMarketing.tsx`.
    - [ ] Validate schema output format.
