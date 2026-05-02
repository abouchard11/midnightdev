export type ProjectSummary = {
  name: string;
  slug: string;
  url: string;
  description: string;
  stack: string[];
  screenshot: string;
};

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

export const projectSlugs = [
  "methyleneblueultra",
  "jonesactcalculator",
  "htxpermitfix",
  "stackdworkforce",
] as const;

export type ProjectSlug = (typeof projectSlugs)[number];

export const projects: Record<ProjectSlug, ProjectDetail> = {
  methyleneblueultra: {
    name: "Methylene Blue Ultra",
    slug: "methyleneblueultra",
    url: "methyleneblueultra.com",
    description:
      "Supplement e-commerce. Product education, waitlist, pre-orders.",
    stack: ["next.js", "stripe", "vercel"],
    screenshot: "/screenshots/methyleneblueultra.png",
    tagline: "Supplement e-commerce with waitlist-first launch strategy.",
    problem:
      "A supplement brand needed to launch a new product line with pre-launch demand capture. The founder wanted a premium storefront that educated visitors on methylene blue before converting them — not a generic Shopify template.",
    solution:
      "Built a custom Next.js storefront with a waitlist-first funnel. Product education pages break down the science in accessible language. Stripe handles payments and pre-orders. The design matches the premium positioning — dark, clean, clinical without being sterile.",
    techStack: [
      { name: "Next.js", role: "App Router with static generation for product pages" },
      { name: "Stripe", role: "Payment processing, pre-orders, and subscription billing" },
      { name: "Vercel", role: "Edge deployment with instant cache invalidation" },
      { name: "Tailwind CSS", role: "Custom design system, dark theme" },
    ],
    results: [
      "400+ monthly sessions within 3 months of launch",
      "1.5% bounce rate — visitors engage deeply with content",
      "24 returning users averaging 5+ min sessions",
      "Waitlist capture converting to pre-orders",
    ],
    gradient: "from-[#0F0F2A] to-[#181838]",
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
  },
  jonesactcalculator: {
    name: "Jones Act Calculator",
    slug: "jonesactcalculator",
    url: "jonesactcalculator.com",
    description:
      "Maritime injury calculator. Case value estimation, attorney matching.",
    stack: ["next.js", "typescript", "vercel"],
    screenshot: "/screenshots/jonesactcalculator.png",
    tagline: "Maritime injury calculator with case value estimation.",
    problem:
      "Maritime injury victims need to understand their potential case value before contacting an attorney. Existing resources are generic legal pages with no interactive tools — just walls of text that don't answer the real question: how much is my case worth?",
    solution:
      "Built an interactive calculator that walks users through their injury details, employment info, and circumstances to produce a personalized case value estimate. The tool educates while it qualifies — by the time someone submits, they understand their rights and are ready to talk to an attorney.",
    techStack: [
      { name: "Next.js", role: "App Router with dynamic calculator logic" },
      { name: "TypeScript", role: "Type-safe calculation engine and form validation" },
      { name: "Vercel", role: "Edge-deployed for fast load times nationwide" },
      { name: "SEO", role: "Targeting long-tail maritime injury keywords" },
    ],
    results: [
      "130+ monthly sessions with targeted maritime injury traffic",
      "Interactive calculator drives engagement beyond typical legal sites",
      "Attorney matching connects qualified leads with representation",
      "SEO-optimized content ranks for Jones Act-specific queries",
    ],
    gradient: "from-[#2A2A0F] to-[#383818]",
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
  },
  htxpermitfix: {
    name: "HTX Permit Fix",
    slug: "htxpermitfix",
    url: "htxpermitfix.com",
    description:
      "Permit expediting for Houston contractors. Lead gen, service matching.",
    stack: ["next.js", "react", "vercel"],
    screenshot: "/screenshots/htxpermitfix.png",
    tagline: "Permit expediting for Houston contractors.",
    problem:
      "Houston contractors lose weeks waiting on building permits. A permit expediting service needed a site that communicated speed and reliability — and captured leads from contractors who are mid-project and frustrated with city permitting delays.",
    solution:
      "Built a bold, direct lead generation site. The messaging hits the pain point immediately: your permit is stuck, we fix it. Clear service breakdown, instant quote request, and phone-first CTA for contractors who want to talk now. No fluff.",
    techStack: [
      { name: "Next.js", role: "Static site with dynamic contact forms" },
      { name: "React", role: "Interactive service selector and quote builder" },
      { name: "Vercel", role: "Fast deployment, edge-cached pages" },
      { name: "SEO", role: "Local SEO targeting Houston permit keywords" },
    ],
    results: [
      "Lead generation active for Houston metro area",
      "Phone-first CTA design matches contractor behavior",
      "Fast load times on mobile — where contractors browse from job sites",
      "Local SEO positioning for Houston permit expediting searches",
    ],
    gradient: "from-[#2A1A0F] to-[#382618]",
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
  },
  stackdworkforce: {
    name: "StackD Workforce",
    slug: "stackdworkforce",
    url: "stackdworkforce.com",
    description:
      "Contractor marketplace for heavy industry. Matching, payments, compliance.",
    stack: ["next.js", "supabase", "stripe"],
    screenshot: "/screenshots/stackdworkforce.png",
    tagline: "Contractor marketplace for heavy industry.",
    problem:
      "Heavy industry companies struggle to find qualified contractors. The hiring process involves compliance checks, skill verification, payment processing, and scheduling — none of which existing job boards handle well for blue-collar skilled trades.",
    solution:
      "Built a full SaaS platform from zero. Contractor profiles with skill verification, company dashboards for posting jobs and managing crews, Stripe Connect for compliant contractor payments, and a matching algorithm that surfaces the right people for each job. Real marketplace infrastructure, not a listing directory.",
    techStack: [
      { name: "Next.js", role: "Full-stack app with API routes and server components" },
      { name: "Supabase", role: "Auth, database, row-level security, real-time subscriptions" },
      { name: "Stripe", role: "Connect platform for marketplace payments and payouts" },
      { name: "Vercel", role: "Production deployment with preview branches" },
    ],
    results: [
      "Full marketplace with contractor and company sides",
      "Stripe Connect handles compliant 1099 contractor payments",
      "Real-time job matching and notification system",
      "Admin dashboard for platform operations and compliance",
    ],
    gradient: "from-[#152538] to-[#1E3050]",
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
  },
};

export const projectList: ProjectSummary[] = projectSlugs.map((slug) => ({
  name: projects[slug].name,
  slug: projects[slug].slug,
  url: projects[slug].url,
  description: projects[slug].description,
  stack: projects[slug].stack,
  screenshot: projects[slug].screenshot,
}));
