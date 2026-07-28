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
  linkLabel?: string;
};

export const projectSlugs = [
  "yapword",
  "yapoleonscourt",
  "thatsmybest",
  "boardroom",
  "agentinfra",
  "stackdworkforce",
  "methyleneblueultra",
  "jonesactcalculator",
  "htxpermitfix",
] as const;

export type ProjectSlug = (typeof projectSlugs)[number];

export const featuredProjectSlugs = [
  "yapword",
  "thatsmybest",
  "yapoleonscourt",
  "boardroom",
] as const satisfies readonly ProjectSlug[];

export type FeaturedProjectSlug = (typeof featuredProjectSlugs)[number];

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
  yapoleonscourt: {
    name: "Yapoleon's Court",
    slug: "yapoleonscourt",
    url: "court.yapoleon.com",
    description:
      "Competitive AI game where the model can't touch the score.",
    stack: ["react", "gemini", "vercel"],
    screenshot: "/screenshots/yapoleonscourt.png",
    tagline: "An AI game the LLM can't game.",
    problem:
      "A competitive game backed by an LLM the player is actively trying to game — running on a paid API, in front of minors — is a stack of production hazards. The model can be prompt-injected. It can be flattered into a high score. A bad actor can burn through your API bill. And the model can say things a family audience shouldn't hear.",
    solution:
      "Built the game so the model *can't* be gamed — structurally, not with hope. The Gemini call returns taste only (five bounded axes plus one in-voice line). The favor delta is derived server-side by a pure function the model can't see or reach. Prompt injection, sycophancy-gaming, and denial-of-wallet are handled at the architecture layer. A deterministic red-line pre-filter runs before any model call, so flagged input costs zero.",
    techStack: [
      { name: "Google Gemini", role: "Server-side proxy, low-temperature structured taste-only output" },
      { name: "React + TypeScript", role: "Web app, share-card generator, favor meter UI" },
      { name: "Vercel serverless", role: "API routes with atomic-slot concurrency damper (TOCTOU-safe)" },
      { name: "Supabase", role: "Auth, standing and rivalry persistence across days" },
    ],
    results: [
      "The model never emits the score — favor delta is derived server-side from clamped, weighted taste axes",
      "Denial-of-wallet bounded five ways: 3-turn daily cap, per-IP + per-user rate limits, atomic concurrency slot, cached degrade mode, Vercel spend hard-stop",
      "Content pre-filter short-circuits red-line input before any model call — zero cost on flagged requests",
      "Prompt injection handled structurally (player reply rides as data being judged, never in the system instruction)",
    ],
    gradient: "from-[#160B2A] to-[#241238]",
    tradeoffs: [
      {
        decision: "Model returns taste, server derives the score",
        reasoning:
          "Making the favor delta a field the LLM can output makes it a field the LLM can be talked into inflating. Removing the field entirely is stronger than any prompt hardening.",
      },
      {
        decision: "Structured, low-temperature output only",
        reasoning:
          "Predictable schema across every turn, cheaper to reason about, easier to write invariant tests against. Voice comes from prompt, not temperature.",
      },
      {
        decision: "Deterministic pre-filter before model call",
        reasoning:
          "Red-line content should never spend a token. Rules-based short-circuit is faster, cheaper, and auditable in a way an LLM classifier isn't.",
      },
      {
        decision: "Cached degrade mode over hard failure under load",
        reasoning:
          "Concurrency damper serves an in-voice cached reaction with zero model calls when spend or load spikes. Still routes a neutral score through the same derive-favor function. Meter never breaks, character never breaks.",
      },
    ],
    testimonial: null,
  },
  thatsmybest: {
    name: "That's My Best",
    slug: "thatsmybest",
    url: "thatsmybest.com",
    description:
      "Multimodal social game that turns photo-grid screenshots into a friend quiz.",
    stack: ["multimodal ai", "human confirmation", "web + ios"],
    screenshot: "/screenshots/thatsmybest.png",
    tagline: "Screenshots in. A playable social memory test out.",
    problem:
      "A screenshot contains visual evidence, but a model can still invent context, misread a tile, or turn an observation into mind-reading. The product also has to make quiz creation fast enough for a friend to finish, share, and pull other people into the loop.",
    solution:
      "Built a mobile-first web and iOS flow that ingests one to four social-grid screenshots, selects candidate tiles, generates questions and answer-specific reactions, then requires the creator to confirm the answer key before sealing the quiz. The model proposes; the person who knows the photos establishes truth.",
    techStack: [
      {
        name: "Multimodal generation",
        role: "Reads uploaded photo grids and proposes visually grounded quiz questions.",
      },
      {
        name: "Creator-confirmed truth",
        role: "The creator reviews the selected tile and answer key before publication.",
      },
      {
        name: "Serverless product loop",
        role: "Generation, publishing, attempts, reactions, group reveal, and share assets.",
      },
      {
        name: "Capacitor + App Store",
        role: "The live iOS app opens directly into the creation flow while web links preserve frictionless sharing.",
      },
    ],
    results: [
      "Live on the web and in the Apple App Store",
      "Creator-confirmed answer keys keep model guesses from becoming product truth",
      "Answer-specific reactions, named friends, and timed group reveals create the social loop",
      "Early soft-launch generation cost measured at roughly 6–7¢ per completed quiz",
    ],
    gradient: "from-[#0C0C10] to-[#181820]",
    tradeoffs: [
      {
        decision: "Human confirmation over model confidence",
        reasoning:
          "The creator knows which person, moment, or detail is correct. A confidence score does not.",
      },
      {
        decision: "Web links and an iOS app",
        reasoning:
          "Creation benefits from an app-like surface; participation must remain one tap away for friends who will not install anything first.",
      },
      {
        decision: "Objective visual memory over personality judgment",
        reasoning:
          "The funny part should come from what is actually visible in the screenshots, not invented claims about a person's looks, intelligence, or inner life.",
      },
      {
        decision: "Group reveal over constant notifications",
        reasoning:
          "Named players create anticipation, while a timed fallback prevents one missing friend from holding the entire experience hostage.",
      },
    ],
    testimonial: null,
  },
  boardroom: {
    name: "AI Boardroom Forecast Audit",
    slug: "boardroom",
    url: "github.com/abouchard11/ai-boardroom-forecast-audit",
    description:
      "Six synthetic decision lenses, one broken forecast, and a reproducible source-of-truth audit.",
    stack: ["python", "monte carlo", "regression", "invariant tests"],
    screenshot: "/screenshots/boardroom-audit.svg",
    tagline: "The AI boardroom that killed a $65.9M forecast.",
    problem:
      "An AI-built operating plan for a real Houston festival concept produced an approximately $65.9M profit forecast. A six-seat synthetic review cut the headline dramatically, but a later audit found that even the corrected workbook mixed incompatible expense definitions.",
    solution:
      "Reconstructed the decision as a transparent Python model with 100,000 seeded Monte Carlo trials, standardized regression sensitivity, committed outputs, and invariant tests. Historical claims, reconstructed analysis, and real planning inputs are labeled separately.",
    techStack: [
      {
        name: "Synthetic executive review",
        role: "Finance, operations, industry, legal, marketing, and investor lenses submitted competing objections.",
      },
      {
        name: "Monte Carlo simulation",
        role: "Seeded trials stress-test sell-through, revenue execution, expense variance, weather, sponsorship, and delays.",
      },
      {
        name: "Regression sensitivity",
        role: "Standardized coefficients expose which uncertain inputs drive the modeled outcome.",
      },
      {
        name: "Invariant tests",
        role: "Machine-checkable reconciliation blocks incompatible definitions from quietly surviving consensus.",
      },
    ],
    results: [
      "Reconciled a $3.397M gap between reported and fully loaded base-case expenses",
      "Median reconstructed profit: $1.22M",
      "Probability of reaching at least $5M: 10.5%",
      "Deterministic outputs, tests, evidence ledger, and limitations published publicly",
    ],
    gradient: "from-[#0A1224] to-[#18102B]",
    tradeoffs: [
      {
        decision: "Competing roles over one agreeable assistant",
        reasoning:
          "The review needed distinct incentives and downside ownership, not six paraphrases of the same optimistic answer.",
      },
      {
        decision: "One canonical assumptions schema",
        reasoning:
          "Consensus did not prevent arithmetic drift. Every view must regenerate from the same definitions.",
      },
      {
        decision: "Reconstruction labeled explicitly",
        reasoning:
          "The original run outputs were not fully preserved, so the public model is marked as reconstructed for reproducibility in 2026.",
      },
    ],
    testimonial: null,
    linkLabel: "inspect repository",
  },
  agentinfra: {
    name: "Agent Infrastructure",
    slug: "agentinfra",
    url: "midnightdev.dev",
    description:
      "Multi-agent orchestration with cost-tiered model routing. Runs a real-money real estate acquisition agent team in production.",
    stack: ["openrouter", "gemini", "ollama", "zep", "firestore"],
    screenshot: "/screenshots/agentinfra.png",
    tagline: "Multi-agent infra with a real-money production agent team on top.",
    problem:
      "The AI-agent tooling shelf is full now — LangGraph, CrewAI, Claude sub-agents, managed memory. But three problems the managed frameworks still don't solve well: cross-provider cost tiering (they assume one model per node), persistent artifact storage that flows into human review (sub-agent outputs evaporate at session end), and real production usage in a specialist vertical (demos are cheap, real-money agents are rare). Needed to solve all three at once for a real estate acquisition workflow.",
    solution:
      "Built a multi-agent orchestration platform (K2 Empire, running on OpenClaw) and put a real-money production agent team on top of it. Three specialist agents plus a local-Llama heartbeat, each model-matched to workload. Cross-provider fallback chains keep the system up when providers wobble. Three-layer artifact persistence (filesystem + Zep temporal graph + Slack Canvases for human review) means agent outputs don't evaporate. On top of that: a real-estate acquisition agent team running in a Telegram group chat — lead-hunter, builder, outreach, and an orchestrator that takes strategic direction from the operator and delegates. Every six hours a heartbeat verifies no specialist has drifted from its SOUL.md role file.",
    techStack: [
      { name: "K2 Empire (3-agent architecture)", role: "Orchestrator + Coder + Researcher, plus a local-Llama heartbeat. Each agent model-matched to workload." },
      { name: "Cross-provider model routing", role: "Kimi K2.5, Qwen 3.6+, Gemini 2.5 Flash, local Llama — routed per-agent-role with cross-provider fallback chains" },
      { name: "Three-layer artifact persistence", role: "Filesystem (Git-durable) + Zep Cloud (temporal knowledge graph) + Slack Canvases (human review). Nothing evaporates." },
      { name: "PropStream-Bot (production agent team)", role: "Telegram-native operator UX. Lead-hunter + builder + outreach + orchestrator. Custom PropStream CLI + Atom API enrichment + ranking-driven outbound." },
      { name: "SOUL.md drift detection", role: "6-hour heartbeat checks each specialist against its role file and against Zep + CRM facts. Catches drift and hallucination in the first day, not the first month." },
    ],
    results: [
      "Three specialist agents + local-Llama heartbeat, cost-tiered per role",
      "Cross-provider fallback chains — system stays up when providers rate-limit",
      "Three-layer persistence (filesystem + Zep graph + Slack review) — agent outputs never evaporate",
      "Real production agent team running in Telegram: lead-hunter, builder, outreach, orchestrator — 141 leads in CRM, real messages in flight",
      "6-hour drift detection against SOUL.md — role-drift and hallucination caught in day-one, not month-one",
    ],
    gradient: "from-[#0A0F1F] to-[#151F35]",
    tradeoffs: [
      {
        decision: "Cross-provider model routing over single-provider lock-in",
        reasoning:
          "Providers rate-limit, prices shift, model quality drifts. Routing across OpenRouter, Google, and local Llama means no single provider outage takes the system down, and each workload runs on the cheapest capable model.",
      },
      {
        decision: "Local Llama for the heartbeat layer",
        reasoning:
          "Uptime checks and drift-detection pings don't need frontier intelligence. Local model = $0/turn + sub-1s latency + no network dependency. Frees the paid budget for the workloads that actually need it.",
      },
      {
        decision: "SOUL.md + drift detection as a first-class production concern",
        reasoning:
          "Agents that still work but slowly drift from their assigned role is a real production failure mode the managed frameworks don't handle. A 6-hour check against a role-invariant file catches drift on day one.",
      },
      {
        decision: "Telegram group chat as the multi-agent coordination surface",
        reasoning:
          "The operator wants a natural chat interface, not a dashboard. Specialists talking to each other in the same thread makes debugging trivial: you can read what they said to each other and to you, in order, in one place.",
      },
      {
        decision: "Production agent (PropStream-Bot) on top of the infra",
        reasoning:
          "A framework nobody uses in production is a framework nobody knows works. Running an actual money-touching agent on K2 Empire proves the infra survives real load — and generated the specific pain points that drove features like drift detection.",
      },
    ],
    testimonial: null,
  },
  yapword: {
    name: "Yapword",
    slug: "yapword",
    url: "yapword.com",
    description:
      "Daily word game with a persistent generative character that reacts to real play.",
    stack: ["react", "gemini", "capacitor", "web + ios"],
    screenshot: "/screenshots/yapword.png",
    tagline: "A daily word game where the character remembers how you played.",
    problem:
      "A funny system prompt can produce a good line once. A consumer character has to remain recognizable across guesses, hints, difficulty modes, wins, losses, fallbacks, model changes, and thousands of repeated interactions — without being allowed to rewrite game truth.",
    solution:
      "Built a React and TypeScript game in which deterministic code owns the puzzle, score, and limits while Gemini produces bounded character behavior from structured game context. Capacitor ships the public iOS app from the same product core used on the web.",
    techStack: [
      {
        name: "React + TypeScript",
        role: "Shared product core for the public web game and iOS application.",
      },
      {
        name: "Google Gemini",
        role: "Bounded contextual reactions and hints; never the source of score or puzzle truth.",
      },
      {
        name: "Capacitor",
        role: "iOS packaging and native integrations including haptics, sharing, and purchases.",
      },
      {
        name: "Supabase + Vercel",
        role: "Persistence, server-side model access, analytics hooks, dynamic share assets, and deployment.",
      },
    ],
    results: [
      "Live on the web and in the Apple App Store",
      "Three daily difficulty modes, themed games, contextual hints, and shareable challenges",
      "Automated regression checks gate releases and character-behavior changes",
      "Server-owned rules prevent the generative layer from touching game truth",
    ],
    gradient: "from-[#2A0F14] to-[#38181F]",
    tradeoffs: [
      {
        decision: "Deterministic game state, generative commentary",
        reasoning:
          "A model can make the experience feel alive without being granted authority over the answer, score, or limits.",
      },
      {
        decision: "Mechanism-level voice rules over word bans",
        reasoning:
          "Positive behavioral guidance preserved comedic range better than expanding lists of forbidden phrases.",
      },
      {
        decision: "Web plus a public iOS app",
        reasoning:
          "The web keeps sharing friction low; Capacitor delivers an App Store surface without maintaining a second product implementation.",
      },
    ],
    testimonial: null,
  },
};

export const projectList: ProjectSummary[] = featuredProjectSlugs.map((slug) => ({
  name: projects[slug].name,
  slug: projects[slug].slug,
  url: projects[slug].url,
  description: projects[slug].description,
  stack: projects[slug].stack,
  screenshot: projects[slug].screenshot,
}));
