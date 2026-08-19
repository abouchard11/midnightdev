export type ProjectSummary = {
  name: string;
  slug: string;
  url: string;
  description: string;
  stack: string[];
  screenshot: string;
  screenshotAlt: string;
  /** Intrinsic pixel dimensions of `screenshot`. Drives both the rendered
   *  aspect ratio and the ImageObject width/height emitted in JSON-LD, so
   *  these must match the real asset on disk. */
  screenshotWidth: number;
  screenshotHeight: number;
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
  caseStudyHref?: string;
  caseStudyLabel?: string;
  /** schema.org type for the JSON-LD node describing this project. Kept in
   *  data rather than inferred in the template so the choice stays honest:
   *  the shipped games are SoftwareApplication, a research artifact is not. */
  schemaType: "SoftwareApplication" | "CreativeWork";
  /** Only meaningful when schemaType is SoftwareApplication. */
  applicationCategory?: string;
  operatingSystem?: string;
};

export const projectSlugs = [
  "dozen",
  "yapword",
  "yapoleonscourt",
  "thatsmybest",
  "boardroom",
] as const;

export type ProjectSlug = (typeof projectSlugs)[number];

export const featuredProjectSlugs = [
  "dozen",
  "yapword",
  "thatsmybest",
  "yapoleonscourt",
  "boardroom",
] as const satisfies readonly ProjectSlug[];

export type FeaturedProjectSlug = (typeof featuredProjectSlugs)[number];

export const projects: Record<ProjectSlug, ProjectDetail> = {
  dozen: {
    name: "Dozen",
    slug: "dozen",
    url: "midnightdev.dev/work/dozen",
    description:
      "Agent marketplace where the model cannot accept, post, or pay.",
    stack: ["tanstack start", "invariant tests", "closed-loop agents"],
    screenshot: "/screenshots/dozen.png",
    screenshotAlt:
      "Dozen landing page with the headline Don't buy one influencer. Agents run a dozen, and a twelve-node campaign graph whose accept node is still running.",
    screenshotWidth: 1200,
    screenshotHeight: 630,
    tagline: "The model writes captions. It does not own the irreversible edges.",
    problem:
      "Influencer marketplaces still leave the work after “I found someone” on humans: briefs, FTC, posting, and payouts. Agent demos paper over that hole by auto-closing accept, post, and pay so a single handler can look finished.",
    solution:
      "Built Dozen as a twelve-node graph with machine-checkable verifiers. Accept stays idle until Stripe Checkout records the brand budget, then stays open until at least 60% of offered seats accept and at least six seats fill — or the brand explicitly refills from the bench. Post re-checks FTC disclosure fail-closed. Measure can fail without closing pay: anomalous engagement holds that seat. The model only writes captions.",
    techStack: [
      {
        name: "Closed-loop agent graph",
        role: "intake → safety → assemble → offer → accept → draft → verify → revise → review → post → measure → pay. The script owns branching; the model does not own accept, post, or pay.",
      },
      {
        name: "Production-imported tests",
        role: "31 tests import the live matching, loop, and verifier modules — not stubs. A companion graph linter fails any topology that lets the model close an irreversible edge.",
      },
      {
        name: "TanStack Start + Postgres",
        role: "React 19 product surface with Better Auth and a PGLite/Postgres dual-mode store so the graph is durable, not a chat transcript.",
      },
      {
        name: "Fail-closed policy",
        role: "Banned verticals, FTC #ad, fake-risk ≥ 70 bps, and 1k–50k follower bounds reject before score. Anomalous ER (3.2× spike or 0.15× collapse) holds payout.",
      },
    ],
    results: [
      "43 production-imported tests plus a 5-test graph linter that fails if the model owns accept, post, or pay",
      "Accept gate is dual: ≥60% and at least six seats; rejected seats stay in the offered denominator",
      "Accept stays closed until Stripe Checkout is paid at or above the campaign budget",
      "Fake-risk and out-of-market seats are rejected at assemble and shown on the closed sample",
      "Anomalous ER holds that seat's payout; pay stays running until measure is clean and escrow is funded",
      "Stripe Checkout is wired fail-closed. Connect transfers and live TikTok/Instagram confirmation remain scaffolding — this case does not claim production GMV",
    ],
    gradient: "from-[#F4EFE4] to-[#E4D8C4]",
    schemaType: "SoftwareApplication",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    tradeoffs: [
      {
        decision: "The model cannot own accept, post, or pay",
        reasoning:
          "Those edges spend reputation and money. Auto-closing them so a demo finishes in one handler is a product lie. Humans, policy, or an independent verifier close them.",
      },
      {
        decision: "Measure is independent of pay",
        reasoning:
          "A 3.2× engagement spike or a 0.15× collapse is a hold, not a reason to mark the campaign paid. The pay node stays running until measure is clean.",
      },
      {
        decision: "Closed sample, not a fake finished campaign",
        reasoning:
          "The public /demo is labeled as a finished sample against the seed bench. Views are derived from baseline ER, not a live platform API.",
      },
      {
        decision: "Keep the product repository private",
        reasoning:
          "The public artifact is this case study. Shipping a public repo before Stripe escrow and live post confirmation would over-claim the product.",
      },
    ],
    testimonial: null,
    linkLabel: "read the case",
    caseStudyHref: "/writing/the-model-cannot-own-the-money",
    caseStudyLabel: "launch essay",
  },

  yapoleonscourt: {
    name: "Yapoleon's Court",
    slug: "yapoleonscourt",
    url: "court.yapoleon.com",
    description:
      "Competitive AI game where the model can't touch the score.",
    stack: ["react", "gemini", "vercel"],
    screenshot: "/screenshots/yapoleonscourt.png",
    screenshotAlt:
      "Yapoleon's Court gameplay screen showing the AI opponent's in-voice reply beside a favor meter the model cannot write to.",
    screenshotWidth: 1200,
    screenshotHeight: 630,
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
    schemaType: "SoftwareApplication",
    applicationCategory: "GameApplication",
    operatingSystem: "Web",
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
    stack: ["multimodal ai", "machine-checkable invariants", "web + ios"],
    screenshot: "/screenshots/thatsmybest.png",
    screenshotAlt:
      "That's My Best converting an uploaded photo-grid screenshot into a multiple-choice quiz about which friend picked which photo.",
    screenshotWidth: 1200,
    screenshotHeight: 630,
    tagline: "Screenshots in. A playable social memory test out.",
    problem:
      "A screenshot contains visual evidence, but a model can still invent context, misread a tile, or turn an observation into mind-reading. The product also has to make quiz creation fast enough for a friend to finish, share, and pull other people into the loop.",
    solution:
      "Built a mobile-first web and iOS flow that ingests one to four social-grid screenshots, selects candidate tiles, and generates questions and answer-specific reactions. On the free default path the model's own guess becomes the answer key at seal time; per-question correction ships as a paid upgrade, not a required step. So the guardrails are code, not a review queue: no answers in the player payload, reveal only after a valid pick, an immutable seal, and scores only for players who actually played.",
    techStack: [
      {
        name: "Multimodal generation",
        role: "Reads uploaded photo grids and proposes visually grounded quiz questions.",
      },
      {
        name: "Machine-checkable invariants",
        role: "Bound what a wrong guess can reach: no answers in the player payload, reveal only after a valid pick, an immutable seal.",
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
      "Invariants hold on every quiz, whether or not a human touched the answer key",
      "Answer-specific reactions, named friends, and timed group reveals create the social loop",
      "Early soft-launch generation cost measured at roughly 6–7¢ per completed quiz",
    ],
    gradient: "from-[#0C0C10] to-[#181820]",
    schemaType: "SoftwareApplication",
    applicationCategory: "GameApplication",
    operatingSystem: "Web, iOS",
    tradeoffs: [
      {
        decision: "Invariants over a required review step",
        reasoning:
          "A human review step is worth building, but it is not what a system can rely on — the fastest path through any product is the one that skips it. Correction ships as a paid override; the invariants run either way.",
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
    screenshotAlt:
      "AI Boardroom Forecast Audit diagram showing six synthetic decision lenses reviewing a $65.9M revenue forecast and flagging it as unsupported.",
    screenshotWidth: 1280,
    screenshotHeight: 800,
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
    schemaType: "CreativeWork",
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
  yapword: {
    name: "Yapword",
    slug: "yapword",
    url: "yapword.com",
    description:
      "Daily word game with a persistent generative character that reacts to real play.",
    stack: ["react", "gemini", "capacitor", "web + ios"],
    screenshot: "/screenshots/yapword.png",
    screenshotAlt:
      "Yapword daily word game board mid-round, with the persistent generative character reacting to the player's guesses.",
    screenshotWidth: 1200,
    screenshotHeight: 630,
    tagline: "A daily word game where the character remembers how you played.",
    caseStudyHref: "/writing/benchmarking-a-generative-character",
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
    schemaType: "SoftwareApplication",
    applicationCategory: "GameApplication",
    operatingSystem: "Web, iOS",
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
  screenshotAlt: projects[slug].screenshotAlt,
  screenshotWidth: projects[slug].screenshotWidth,
  screenshotHeight: projects[slug].screenshotHeight,
}));
