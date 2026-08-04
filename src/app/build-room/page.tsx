import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

export const metadata: Metadata = {
  title: "The Build Room — Case File 001 | MidnightDev",
  description:
    "How two AI products got shipped end-to-end by one person: authority boundaries, the Yapoleon voice ledger, a 14-day App Store release, release gates, and the telemetry that closes the loop.",
  alternates: {
    canonical: "/build-room",
  },
  openGraph: {
    title: "The Build Room — Case File 001",
    description:
      "Two shipped AI products, taken apart. Architecture, evals, release gates, and the governance rules that keep the model out of the scoreboard.",
    url: "https://midnightdev.dev/build-room",
    siteName: "MidnightDev",
    type: "article",
    images: [
      {
        url: "https://midnightdev.dev/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Alex Bouchard — Forward-Deployed AI Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Build Room — Case File 001",
    description:
      "Two shipped AI products, taken apart. The model performs. The deterministic engine governs.",
    images: ["https://midnightdev.dev/opengraph-image"],
  },
};

const heroStats = [
  { value: "1st + only", label: "app store word game with live-grid ai" },
  { value: "14 days", label: "concept to app store" },
  { value: "2,309", label: "tests green in captured build" },
  { value: "100%", label: "ownership, product to production" },
];

const ownershipChain = [
  "Product decision",
  "Architecture call",
  "Implementation",
  "Evals + tests",
  "Native release",
  "Production outcome",
];

const exhibits = [
  {
    code: "CF-AB-YAP-001",
    mark: "Y",
    name: "Yapword",
    kind: "Continuously interactive AI word game",
    claim: "A character inside the deterministic game loop.",
    body: "The App Store's first and only word game where a generative-AI character reads the live letter grid and responds throughout the entire game.",
    proof: [
      "First and only on the App Store",
      "AI reads and responds to the live grid",
      "22-rendition voice ledger, R0-R13 roast lab",
    ],
    platform: "iOS + web",
    caseStudy: "/work/yapword",
    live: "https://yapword.com",
  },
  {
    code: "CF-AB-TMB-002",
    mark: "TMB",
    name: "That's My Best",
    kind: "Multimodal AI friend quiz",
    claim: "I removed the dependency instead of negotiating with it.",
    body: "Creator-supplied Instagram-grid screenshots become a playable friend quiz without face matching, Meta API access, or staff reviewing private photos.",
    proof: [
      "No face matching, no Meta API",
      "Concept to App Store in 14 days",
      "Conservative exclusion of uncertain imagery",
    ],
    platform: "iOS + web",
    caseStudy: "/work/thatsmybest",
    live: "https://thatsmybest.com",
  },
];

const yapwordLoop = [
  {
    step: "01",
    label: "Live input",
    title: "Every guess changes the grid",
    detail:
      "Letters, placements, attempt, mode, standing, and player history become bounded input.",
  },
  {
    step: "02",
    label: "Engine facts",
    title: "Truth stays deterministic",
    detail:
      "Validity, score, board truth, completion, standing, and memory remain outside the model.",
  },
  {
    step: "03",
    label: "Model output",
    title: "Voice stays generative",
    detail:
      "A board-aware reaction, contextual hint, or postgame critique returns without authority over the outcome.",
  },
];

const ledgerStats = [
  { value: "22", label: "renditions logged" },
  { value: "R0-R13", label: "controlled roast ladder" },
  { value: "14", label: "live production lines" },
  { value: "2,309", label: "tests green in captured build" },
];

const ledgerFindings = [
  {
    step: "01",
    label: "Direction",
    title: "Positive mechanisms beat the banlist.",
    detail:
      "A long enumerated denylist flattened cadence and wit. Replacing it with a positive rule — what comic move to make — restored specificity without surrendering the boundary.",
  },
  {
    step: "02",
    label: "Evaluation",
    title: "Same board. Controlled context. Different line.",
    detail:
      "Identical game states were replayed across voice renditions and six relationship standings, making memory and register changes visible instead of relying on taste and recollection.",
  },
  {
    step: "03",
    label: "Architecture",
    title: "The engine computes the world. The model authors the voice.",
    detail:
      "Deterministic software emits facts and state; the model turns them into language. That boundary keeps personality adaptive without letting the model invent score, memory, or game truth.",
  },
];

const rejectedSystem = {
  heading: "Rejected system",
  sub: "Recognize people, connect the account",
  items: [
    "Facial identity matching",
    "Instagram OAuth and token custody",
    "Meta API and policy dependency",
    "Human moderation queue",
  ],
};

const shippedSystem = {
  heading: "Shipped system",
  sub: "Understand the screenshot, never the identity",
  items: [
    "User-controlled grid screenshots",
    "Automated tile and eligibility pipeline",
    "Conservative exclusion of uncertainty",
    "Invariant-bounded answer keys",
  ],
};

const tmbPipeline = [
  {
    step: "01",
    title: "User-owned input",
    detail: "The creator supplies 1-4 screenshots from a grid they already control.",
  },
  {
    step: "02",
    title: "Tile segmentation",
    detail:
      "The workflow isolates individual posts and rejects interface chrome, partials, and duplicates.",
  },
  {
    step: "03",
    title: "Conservative eligibility",
    detail:
      "Unsuitable content, apparent minors, and uncertain images are excluded from automated selection.",
  },
  {
    step: "04",
    title: "Multimodal ranking",
    detail:
      "The system favors objective, visually grounded memories with strong quiz potential.",
  },
  {
    step: "05",
    title: "Structured generation",
    detail:
      "Selected images become answerable questions, choices, and contextual reactions.",
  },
  {
    step: "06",
    title: "Sealed under invariants",
    detail:
      "The default path seals the model's proposed key; a paid override lets the creator replace it first. Either way the player payload carries no answers and the seal is immutable — without staff reviewing the photos.",
  },
];

const governance = [
  {
    step: "01",
    title: "Truth",
    rule: "Server-owned and invariant-bounded",
    detail: "The model can propose and perform; code decides the payload, the reveal, and the score.",
  },
  {
    step: "02",
    title: "State",
    rule: "Deterministic outside the model",
    detail: "Scores, memory, completion, and product rules remain inspectable.",
  },
  {
    step: "03",
    title: "Safety",
    rule: "Untrusted content isolated as data",
    detail: "Prompt-injection boundaries and explicit gates protect control flow.",
  },
  {
    step: "04",
    title: "Reliability",
    rule: "Failure paths designed in advance",
    detail: "Fallback chains, classified retries, budgets, and cached degradation.",
  },
  {
    step: "05",
    title: "Economics",
    rule: "Cost is a product constraint",
    detail: "Output caps, rate limits, attempt budgets, and measured generation cost.",
  },
  {
    step: "06",
    title: "Verification",
    rule: "Release gates across the stack",
    detail: "Contracts, invariants, accessibility, smoke paths, and release gates.",
  },
];

const publicRecord = [
  {
    tag: "Reliability",
    name: "gemini-reliability-proxy",
    detail:
      "Fallback chains, retry classification, budgets, and graceful degradation for production model calls.",
    href: "https://github.com/abouchard11/gemini-reliability-proxy",
  },
  {
    tag: "Safety",
    name: "llm-safety-gate",
    detail:
      "A deterministic boundary that isolates untrusted user content and keeps safety decisions outside the model.",
    href: "https://github.com/abouchard11/llm-safety-gate",
  },
  {
    tag: "Operations",
    name: "graphiti-neo4j-ops",
    detail:
      "Health-driven recovery, safe backups, and local-only networking for production memory infrastructure.",
    href: "https://github.com/abouchard11/graphiti-neo4j-ops",
  },
  {
    tag: "Research",
    name: "ai-citation-patterns",
    detail:
      "A dated, source-qualified reference on how answer engines crawl, retrieve, and cite web content.",
    href: "https://github.com/abouchard11/ai-citation-patterns",
  },
];

const distribution = [
  {
    step: "01",
    title: "Technical SEO",
    rule: "Indexability is engineered",
    detail:
      "Server-rendered facts, crawl controls, canonicals, sitemaps, structured data, performance, and clean information architecture.",
  },
  {
    step: "02",
    title: "GEO",
    rule: "Citation surfaces are designed",
    detail:
      "Source-qualified claims, entity clarity, extractable answer blocks, crawler policy, and repeated verification across answer engines.",
  },
  {
    step: "03",
    title: "Topical systems",
    rule: "Coverage without content sludge",
    detail:
      "Useful taxonomies, service clusters, multilingual pathways, internal-link graphs, and explicit editorial standards.",
  },
  {
    step: "04",
    title: "Measurement",
    rule: "Telemetry closes the loop",
    detail:
      "Cross-platform events, funnels, session replay, analytics parity checks, and search signals turn discovery into an operating system.",
  },
];

const telemetry = [
  {
    label: "Unified telemetry",
    title: "Web + native iOS",
    detail:
      "Platform-tagged events make game starts, submissions, completions, hints, shares, registration, and purchases comparable across surfaces.",
  },
  {
    label: "Concrete diagnosis",
    title: "Replay to interface fix",
    detail:
      "Session evidence exposed rage clicks on a keyboard that looked live while validation was blocking it; the UI state was then bound to the real validation state.",
  },
  {
    label: "Measurement contract",
    title: "Parity, filters, privacy",
    detail:
      "Production allowlists, analytics parity checks, explicit event contracts, and no-secret / no-PII payload rules keep the numbers decision-grade.",
  },
];

const graders = [
  {
    n: "01",
    product: "Yapword",
    started: "2026-05-23",
    property: "Is the character's voice good — and what does it cost?",
    grader:
      "A multi-turn bench that walks whole games through the real prompt builder, sweeping the model's thinking level.",
    result:
      "~82% of inference COGS was invisible thinking. Zero thinking preserved the voice. The highest setting burned 8,991–11,663 tokens per game — $80–105 per 1k games — and was not better.",
  },
  {
    n: "02",
    product: "Yapoleon's Court",
    started: "2026-06-15",
    property: "Is the scoring rubric fair, learnable, and un-gameable?",
    grader:
      "Yapword's harness, forked and re-pointed at a different measurement: 30 demands x weak/mid/strong, plus a fixed-mold probe, against the live judge.",
    result:
      "72.2% mid / 0% weak / 96.7% strong — a clean skill gradient. Fixed mold 0% off-axis. 5 of 5 anti-gaming probes pass live. 1,095 calls, 0 errors.",
  },
  {
    n: "03",
    product: "That's My Best",
    started: "2026-07-01",
    property: "Is it safe to publish when the classifier itself is unreliable?",
    grader:
      "A fail-closed state machine with quorum voting over an injectable classifier — extracted out of the product entirely.",
    result:
      "Shipped as llm-safety-gate: zero-dependency, MIT, every failure path unit-tested without a network.",
  },
];

const graderProperties = [
  {
    step: "01",
    title: "Learnable",
    rule: "Better input must score better",
    detail: "Strong 96.7% > mid 72.2% > weak 0%. If the ordering breaks, the rubric is broken.",
  },
  {
    step: "02",
    title: "Not template-farmable",
    rule: "The negative control",
    detail:
      "One fixed rhetorical mold, applied to all 30 days, must lose on its off-axis days. It wins 0%.",
  },
  {
    step: "03",
    title: "Not gameable",
    rule: "Five adversarial probes, live",
    detail:
      "Naked flattery, prompt injection, legitimate audacity (the false-positive check), delimiter breakout, grovel-on-economy. All pass.",
  },
  {
    step: "04",
    title: "Bounded authority",
    rule: "The model never emits the score",
    detail:
      "It returns five clamped axis sub-scores; a pure server-side function the model cannot see or reach computes the result.",
  },
  {
    step: "05",
    title: "Honest about noise",
    rule: "Distributions, not point values",
    detail:
      "Hosted inference is not bit-reproducible at low temperature, so every cell runs at least three times and the spread is reported.",
  },
];

const webProperties = [
  { tag: "AI / studio", name: "MidnightDev", domain: "midnightdev.dev", href: "https://midnightdev.dev" },
  { tag: "AI product", name: "Yapword", domain: "yapword.com", href: "https://yapword.com" },
  { tag: "AI product", name: "That's My Best", domain: "thatsmybest.com", href: "https://thatsmybest.com" },
  { tag: "AI product", name: "Yapoleon's Court", domain: "court.yapoleon.com", href: "https://court.yapoleon.com" },
  { tag: "Owned media", name: "WordGameAI", domain: "wordgameai.com", href: "https://wordgameai.com" },
  { tag: "Legal tool", name: "Jones Act Calculator", domain: "jonesactcalculator.com", href: "https://www.jonesactcalculator.com" },
];

const priorRecord = [
  {
    label: "Transaction record",
    value: "85+ retail transactions",
    detail:
      "Roughly $400M in total volume — buying, selling, leasing, and repositioning.",
  },
  {
    label: "Operating record",
    value: "5,700+ CRM contacts rebuilt",
    detail: "Roughly 1,900 mapping errors identified and corrected.",
  },
  {
    label: "Education",
    value: "Texas A&M, Finance",
    detail: "Commercial judgment and technical execution in the same room.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.1em] text-[var(--accent-blue)]">
      {children}
    </p>
  );
}

export default function BuildRoomPage() {
  return (
    <>
      <Nav />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-dotgrid px-6 pb-14 pt-14 md:px-12 md:pb-20 md:pt-24">
          <div className="mx-auto max-w-[var(--content-max)]">
            <p className="mb-6 flex flex-wrap items-center gap-2 font-mono text-[11px] lowercase tracking-[0.08em] text-[var(--accent-blue)]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--success)]" />
              case_file_001 · forward-deployed ai lead
            </p>

            <h1 className="max-w-[900px] font-display text-[length:var(--fs-h1)] font-extrabold leading-[1.0] tracking-[-0.04em]">
              One person.
              <br />
              <span className="gradient-text">Two shipped AI products.</span>
              <br />
              No handoffs.
            </h1>

            <p className="mt-8 max-w-[680px] text-lg leading-relaxed text-[var(--text-muted)]">
              I take ambiguous AI products from decision to deployment — product,
              architecture, implementation, evals, native release, telemetry, and
              production outcomes. One product created a category; the other
              reached the App Store in 14 days.
            </p>

            <p className="mt-4 max-w-[680px] text-[length:var(--fs-small)] leading-relaxed text-[var(--text-dim)]">
              The two exhibits below are the native App Store releases. Further
              work — including{" "}
              <Link
                href="/work/yapoleonscourt"
                className="text-[var(--text-muted)] underline underline-offset-4 transition-colors hover:text-[var(--text-primary)]"
              >
                Yapoleon&apos;s Court
              </Link>{" "}
              and the{" "}
              <Link
                href="/work/boardroom"
                className="text-[var(--text-muted)] underline underline-offset-4 transition-colors hover:text-[var(--text-primary)]"
              >
                AI Boardroom Forecast Audit
              </Link>{" "}
              — is on the main workfolio.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#exhibits"
                className="rounded-[var(--r-sm)] bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] px-6 py-3 font-mono text-[length:var(--fs-nav)] font-medium text-white shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:brightness-110"
              >
                inspect the shipped work
              </Link>
              <Link
                href="/#contact"
                className="rounded-[var(--r-sm)] border border-[var(--border)] bg-[var(--surface)] px-6 py-3 font-mono text-[length:var(--fs-nav)] font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)]"
              >
                discuss a deployment problem
              </Link>
              <a
                href="/alex-bouchard"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[length:var(--fs-small)] text-[var(--accent-blue)] transition-opacity hover:opacity-80"
              >
                open the interactive case file &#8599;
              </a>
            </div>
          </div>
        </section>

        {/* Stat bar */}
        <section className="border-y border-[var(--border)] px-6 py-10 md:px-12">
          <div className="mx-auto grid max-w-[var(--content-max)] grid-cols-2 gap-6 md:flex md:gap-16">
            {heroStats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span className="font-display text-[28px] font-bold tracking-[-0.02em]">
                  {stat.value}
                </span>
                <span className="font-mono text-[length:var(--fs-label)] uppercase tracking-[0.05em] text-[var(--text-dim)]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Exhibits */}
        <section id="exhibits" className="px-6 py-14 md:px-12 md:py-20">
          <div className="mx-auto max-w-[var(--content-max)]">
            <SectionLabel>exhibits a-b / shipped products</SectionLabel>
            <h2 className="max-w-[820px] font-display text-[length:var(--fs-h2)] font-bold tracking-[-0.03em]">
              Two products. Two hard constraints.
            </h2>
            <p className="mt-5 max-w-[680px] leading-relaxed text-[var(--text-muted)]">
              Yapword keeps a generative character inside live gameplay without
              giving the model control of game truth. That&apos;s My Best creates a
              social-photo product without biometric identity, account access, or
              staff photo review.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {exhibits.map((exhibit) => (
                <article
                  key={exhibit.code}
                  className="flex flex-col rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--border-hover)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--text-dim)]">
                      {exhibit.code}
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--success)]">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--success)]" />
                      live
                    </span>
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--r-sm)] bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] font-mono text-[11px] font-semibold text-white">
                      {exhibit.mark}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold tracking-[-0.02em]">
                        {exhibit.name}
                      </h3>
                      <p className="font-mono text-[length:var(--fs-label)] uppercase tracking-[0.05em] text-[var(--text-dim)]">
                        {exhibit.kind}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 font-display text-lg font-bold leading-snug tracking-[-0.02em]">
                    {exhibit.claim}
                  </p>
                  <p className="mt-3 leading-relaxed text-[var(--text-muted)]">
                    {exhibit.body}
                  </p>

                  <ul className="mt-5 flex flex-col gap-2">
                    {exhibit.proof.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[length:var(--fs-small)] text-[var(--text-muted)]"
                      >
                        <span className="mt-[7px] inline-block h-1 w-1 shrink-0 rounded-full bg-[var(--accent-blue)]" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-[var(--border)] pt-5">
                    <Link
                      href={exhibit.caseStudy}
                      className="font-mono text-[length:var(--fs-small)] text-[var(--accent-blue)] transition-opacity hover:opacity-80"
                    >
                      open case file &rarr;
                    </Link>
                    <a
                      href={exhibit.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[length:var(--fs-small)] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
                    >
                      open product &#8599;
                    </a>
                    <span className="ml-auto font-mono text-[length:var(--fs-label)] uppercase tracking-[0.05em] text-[var(--text-dim)]">
                      {exhibit.platform}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Ownership chain */}
        <section className="border-t border-[var(--border)] px-6 py-14 md:px-12 md:py-20">
          <div className="mx-auto max-w-[var(--content-max)]">
            <SectionLabel>01 / one accountable human</SectionLabel>
            <h2 className="max-w-[820px] font-display text-[length:var(--fs-h2)] font-bold tracking-[-0.03em]">
              Agents multiplied throughput. They never owned a consequence.
            </h2>
            <p className="mt-5 max-w-[680px] leading-relaxed text-[var(--text-muted)]">
              AI development agents did not own a decision, a release gate, or a
              production outcome. Every link in this chain resolved to one person.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
              {ownershipChain.map((link, i) => (
                <div
                  key={link}
                  className="rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-4"
                >
                  <span className="font-mono text-[length:var(--fs-label)] text-[var(--accent-blue)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-1.5 text-[length:var(--fs-small)] leading-snug text-[var(--text-primary)]">
                    {link}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Yapword deep dive */}
        <section className="border-t border-[var(--border)] px-6 py-14 md:px-12 md:py-20">
          <div className="mx-auto max-w-[var(--content-max)]">
            <SectionLabel>exhibit a1 / category creation</SectionLabel>
            <h2 className="max-w-[820px] font-display text-[length:var(--fs-h2)] font-bold tracking-[-0.03em]">
              In Yapword, the AI stays in the game.
            </h2>
            <p className="mt-5 max-w-[720px] leading-relaxed text-[var(--text-muted)]">
              Most AI word games use a model before or after play. Here the rules
              engine owns the board and the outcome while the character owns the
              live voice — opponent, narrator, hint system, relationship memory,
              and postgame critic.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {yapwordLoop.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[length:var(--fs-label)] text-[var(--accent-blue)]">
                      {item.step}
                    </span>
                    <span className="font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--text-dim)]">
                      {item.label}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[length:var(--fs-small)] leading-relaxed text-[var(--text-muted)]">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Voice ledger */}
        <section className="border-t border-[var(--border)] px-6 py-14 md:px-12 md:py-20">
          <div className="mx-auto max-w-[var(--content-max)]">
            <SectionLabel>artifact / the voice ledger</SectionLabel>
            <h2 className="max-w-[820px] font-display text-[length:var(--fs-h2)] font-bold tracking-[-0.03em]">
              The character was engineered, not merely prompted.
            </h2>
            <p className="mt-5 max-w-[720px] leading-relaxed text-[var(--text-muted)]">
              A chronological production ledger traces every architecture,
              register, dial, roast-lab, surface, and incident change beside the
              real lines each version produced. The public exhibit keeps
              proprietary prompt text redacted while showing the engineering
              method and its receipts.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {ledgerStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-5"
                >
                  <span className="font-display text-[26px] font-bold tracking-[-0.02em]">
                    {stat.value}
                  </span>
                  <p className="mt-1 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.05em] text-[var(--text-dim)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {ledgerFindings.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[length:var(--fs-label)] text-[var(--accent-blue)]">
                      {item.step}
                    </span>
                    <span className="font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--text-dim)]">
                      {item.label}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold leading-snug tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[length:var(--fs-small)] leading-relaxed text-[var(--text-muted)]">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* That's My Best — constraint architecture */}
        <section className="border-t border-[var(--border)] px-6 py-14 md:px-12 md:py-20">
          <div className="mx-auto max-w-[var(--content-max)]">
            <SectionLabel>exhibit b / constraint-driven architecture</SectionLabel>
            <h2 className="max-w-[900px] font-display text-[length:var(--fs-h2)] font-bold tracking-[-0.03em]">
              No face matching. No Instagram login. No Meta API. No staff looking
              at private photos.
            </h2>
            <p className="mt-5 max-w-[720px] leading-relaxed text-[var(--text-muted)]">
              Shipped from concept to the App Store in 14 days by replacing facial
              recognition and Meta access with user-controlled screenshots. The
              pipeline segments the grid, excludes uncertain imagery, creates the
              quiz, and bounds what the model&apos;s proposed answer key can reach.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <div className="rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6">
                <span className="font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--error)]">
                  {rejectedSystem.heading}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold tracking-[-0.02em] text-[var(--text-muted)]">
                  {rejectedSystem.sub}
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {rejectedSystem.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[length:var(--fs-small)] text-[var(--text-dim)] line-through decoration-[var(--text-dim)]/50"
                    >
                      <span className="mt-[7px] inline-block h-1 w-1 shrink-0 rounded-full bg-[var(--error)] no-underline" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[var(--r-md)] border border-[var(--accent-blue)]/30 bg-[var(--surface)] p-6">
                <span className="font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--success)]">
                  {shippedSystem.heading}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold tracking-[-0.02em]">
                  {shippedSystem.sub}
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {shippedSystem.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[length:var(--fs-small)] text-[var(--text-muted)]"
                    >
                      <span className="mt-[7px] inline-block h-1 w-1 shrink-0 rounded-full bg-[var(--success)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {tmbPipeline.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-5"
                >
                  <span className="font-mono text-[length:var(--fs-label)] text-[var(--accent-blue)]">
                    {item.step}
                  </span>
                  <h3 className="mt-2 font-display text-base font-bold tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[length:var(--fs-small)] leading-relaxed text-[var(--text-muted)]">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 max-w-[720px] text-[length:var(--fs-small)] leading-relaxed text-[var(--text-dim)]">
              The automation does not need to know who anyone is. The operator does
              not need to see the user&apos;s photos. The platform does not need to
              grant account access. Safety stays conservative, and the invariants
              hold whether or not the creator edits the key.
            </p>
          </div>
        </section>

        {/* Governance */}
        <section className="border-t border-[var(--border)] px-6 py-14 md:px-12 md:py-20">
          <div className="mx-auto max-w-[var(--content-max)]">
            <SectionLabel>decision record / model governance</SectionLabel>
            <h2 className="max-w-[820px] font-display text-[length:var(--fs-h2)] font-bold tracking-[-0.03em]">
              The model performs. The deterministic engine governs.
            </h2>
            <p className="mt-5 max-w-[680px] leading-relaxed text-[var(--text-muted)]">
              Production AI becomes dependable when authority is explicit. Models
              generate useful content; they do not own truth, scoring, safety, or
              spend.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {governance.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[length:var(--fs-label)] text-[var(--accent-blue)]">
                      {item.step}
                    </span>
                    <h3 className="font-display text-lg font-bold tracking-[-0.02em]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-2.5 font-mono text-[length:var(--fs-small)] text-[var(--text-primary)]">
                    {item.rule}
                  </p>
                  <p className="mt-2 text-[length:var(--fs-small)] leading-relaxed text-[var(--text-muted)]">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Public record */}
        <section className="border-t border-[var(--border)] px-6 py-14 md:px-12 md:py-20">
          <div className="mx-auto max-w-[var(--content-max)]">
            <SectionLabel>public record / source available</SectionLabel>
            <h2 className="max-w-[820px] font-display text-[length:var(--fs-h2)] font-bold tracking-[-0.03em]">
              Inspect the work. Not just the claims.
            </h2>
            <p className="mt-5 max-w-[680px] leading-relaxed text-[var(--text-muted)]">
              Focused systems extracted from production lessons and published in
              the open.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {publicRecord.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)]"
                >
                  <span className="font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--text-dim)]">
                    {repo.tag}
                  </span>
                  <h3 className="mt-2 flex items-center gap-2 font-mono text-base font-semibold tracking-[-0.01em] text-[var(--text-primary)]">
                    {repo.name}
                    <span className="text-[var(--accent-blue)] transition-transform group-hover:translate-x-0.5">
                      &#8599;
                    </span>
                  </h3>
                  <p className="mt-2.5 text-[length:var(--fs-small)] leading-relaxed text-[var(--text-muted)]">
                    {repo.detail}
                  </p>
                </a>
              ))}
            </div>

            <a
              href="https://github.com/abouchard11"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block font-mono text-[length:var(--fs-small)] text-[var(--accent-blue)] transition-opacity hover:opacity-80"
            >
              view all engineering on GitHub &#8599;
            </a>
          </div>
        </section>

        {/* Distribution */}
        <section
          id="distribution"
          className="border-t border-[var(--border)] px-6 py-14 md:px-12 md:py-20"
        >
          <div className="mx-auto max-w-[var(--content-max)]">
            <SectionLabel>exhibit c / search distribution</SectionLabel>
            <h2 className="max-w-[820px] font-display text-[length:var(--fs-h2)] font-bold tracking-[-0.03em]">
              Shipping is not enough. The work has to be found.
            </h2>
            <p className="mt-5 max-w-[680px] leading-relaxed text-[var(--text-muted)]">
              I treat technical SEO and generative-engine optimization as product
              infrastructure: make the facts crawlable, the entities legible, the
              answers citable, and the feedback measurable.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {distribution.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[length:var(--fs-label)] text-[var(--accent-blue)]">
                      {item.step}
                    </span>
                    <h3 className="font-display text-lg font-bold tracking-[-0.02em]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-2.5 font-mono text-[length:var(--fs-small)] text-[var(--text-primary)]">
                    {item.rule}
                  </p>
                  <p className="mt-2 text-[length:var(--fs-small)] leading-relaxed text-[var(--text-muted)]">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Telemetry */}
        <section className="border-t border-[var(--border)] px-6 py-14 md:px-12 md:py-20">
          <div className="mx-auto max-w-[var(--content-max)]">
            <SectionLabel>observability loop</SectionLabel>
            <h2 className="max-w-[820px] font-display text-[length:var(--fs-h2)] font-bold tracking-[-0.03em]">
              Connect model output to what people actually do.
            </h2>
            <p className="mt-5 max-w-[720px] leading-relaxed text-[var(--text-muted)]">
              Telemetry is the cross-platform operating record for product
              behavior — not a pageview counter. Anonymous session, game, prompt,
              deployment, and relationship identifiers connect AI behavior to
              completion, abandonment, replay, sharing, registration, and
              retention.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {telemetry.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6"
                >
                  <span className="font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--text-dim)]">
                    {item.label}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[length:var(--fs-small)] leading-relaxed text-[var(--text-muted)]">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Three graders */}
        <section
          id="graders"
          className="border-t border-[var(--border)] px-6 py-14 md:px-12 md:py-20"
        >
          <div className="mx-auto max-w-[var(--content-max)]">
            <SectionLabel>exhibit d / measurement</SectionLabel>
            <h2 className="max-w-[900px] font-display text-[length:var(--fs-h2)] font-bold tracking-[-0.03em]">
              Three products. Three things that can&apos;t be checked automatically.
            </h2>
            <p className="mt-5 max-w-[720px] leading-relaxed text-[var(--text-muted)]">
              Every product has one quality property no test can assert — whether
              the voice is good, whether the scoring is fair, whether it&apos;s safe
              to publish. So I build the grader for that property, and then I take
              it out of the product. Three products in six weeks; read them in
              order, because the grader work matures across them.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              {graders.map((g) => (
                <article
                  key={g.n}
                  className="rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6"
                >
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-mono text-[length:var(--fs-label)] text-[var(--accent-blue)]">
                      {g.n}
                    </span>
                    <h3 className="font-display text-xl font-bold tracking-[-0.02em]">
                      {g.product}
                    </h3>
                    <span className="font-mono text-[length:var(--fs-label)] uppercase tracking-[0.05em] text-[var(--text-dim)]">
                      started {g.started}
                    </span>
                  </div>

                  <p className="mt-4 font-display text-lg font-bold leading-snug tracking-[-0.02em]">
                    {g.property}
                  </p>

                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <span className="font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--text-dim)]">
                        the grader
                      </span>
                      <p className="mt-1.5 text-[length:var(--fs-small)] leading-relaxed text-[var(--text-muted)]">
                        {g.grader}
                      </p>
                    </div>
                    <div>
                      <span className="font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--success)]">
                        the result
                      </span>
                      <p className="mt-1.5 text-[length:var(--fs-small)] leading-relaxed text-[var(--text-primary)]">
                        {g.result}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-[var(--r-md)] border border-[var(--accent-blue)]/30 bg-[var(--surface)] p-6">
              <span className="font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--accent-blue)]">
                the arc
              </span>
              <p className="mt-2 font-display text-lg font-bold tracking-[-0.02em]">
                Ad hoc &rarr; reused &rarr; extracted as infrastructure.
              </p>
              <p className="mt-3 max-w-[820px] text-[length:var(--fs-small)] leading-relaxed text-[var(--text-muted)]">
                The first harness was written for one product&apos;s problem. The
                second product didn&apos;t get a new one — the first was forked and
                aimed at a question it was never built for, which is the first
                evidence the method transfers. By the third, the grader stopped
                living inside the product at all and shipped as a standalone
                library someone else can inject their own classifier into.
              </p>
            </div>

            <h3 className="mt-12 max-w-[820px] font-display text-2xl font-bold tracking-[-0.02em]">
              What makes a grader trustworthy with no reference implementation
            </h3>
            <p className="mt-4 max-w-[720px] leading-relaxed text-[var(--text-muted)]">
              Code can be graded against a reference build. Voice, fairness, and
              taste cannot. So the scoring function is validated by its properties
              instead.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {graderProperties.map((p) => (
                <div
                  key={p.step}
                  className="rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[length:var(--fs-label)] text-[var(--accent-blue)]">
                      {p.step}
                    </span>
                    <h4 className="font-display text-lg font-bold tracking-[-0.02em]">
                      {p.title}
                    </h4>
                  </div>
                  <p className="mt-2.5 font-mono text-[length:var(--fs-small)] text-[var(--text-primary)]">
                    {p.rule}
                  </p>
                  <p className="mt-2 text-[length:var(--fs-small)] leading-relaxed text-[var(--text-muted)]">
                    {p.detail}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-[820px] leading-relaxed text-[var(--text-muted)]">
              The calibration also produced a finding I kept rather than buried:
              the target was specified as a <em>median</em> win-rate, and the
              median turned out to be bimodal and degenerate — an offline sweep of
              hundreds of candidate curves found zero with a median in band. The
              mean is smooth and stable across independent runs. The document says
              so, and says why.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://github.com/abouchard11/yapoleons-court/blob/main/CALIBRATION-v2.md"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[length:var(--fs-small)] text-[var(--accent-blue)] transition-opacity hover:opacity-80"
              >
                read the calibration study &#8599;
              </a>
              <a
                href="https://github.com/abouchard11/yapoleons-court/blob/main/scripts/yapoleon-calibrate.ts"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[length:var(--fs-small)] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                the win-rate simulator &#8599;
              </a>
              <a
                href="https://github.com/abouchard11/llm-safety-gate"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[length:var(--fs-small)] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                llm-safety-gate &#8599;
              </a>
            </div>
          </div>
        </section>

        {/* Agentic distribution + web properties */}
        <section className="border-t border-[var(--border)] px-6 py-14 md:px-12 md:py-20">
          <div className="mx-auto max-w-[var(--content-max)]">
            <SectionLabel>exhibit e / distribution surface</SectionLabel>
            <h2 className="max-w-[820px] font-display text-[length:var(--fs-h2)] font-bold tracking-[-0.03em]">
              A governed agent, and the surfaces it publishes to.
            </h2>

            <div className="mt-10 rounded-[var(--r-md)] border border-[var(--accent-blue)]/30 bg-[var(--surface)] p-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--accent-blue)]">
                  agentic distribution
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--success)]">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--success)]" />
                  live
                </span>
              </div>
              <h3 className="mt-2 font-display text-xl font-bold tracking-[-0.02em]">
                <a
                  href="https://x.com/YapoleonGreater"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[var(--accent-blue)]"
                >
                  @YapoleonGreater on X &#8599;
                </a>
              </h3>
              <p className="mt-3 max-w-[820px] leading-relaxed text-[var(--text-muted)]">
                Extends Yapword into a governed, near-autonomous social-publishing
                system. It generates publication-ready responses in character
                within owner-defined rules. I retain the voice, the publishing
                boundaries, the escalation decisions, and the consequences — the
                same authority split that governs every other model in this file.
              </p>
            </div>

            <h3 className="mt-12 font-display text-2xl font-bold tracking-[-0.02em]">
              Public web properties
            </h3>
            <p className="mt-3 max-w-[720px] leading-relaxed text-[var(--text-muted)]">
              Products, tools, and commercial sites — each a real distribution
              surface. Private systems and retired experiments are intentionally
              excluded.
            </p>

            <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {webProperties.map((p) => (
                <a
                  key={p.domain}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)]"
                >
                  <span className="font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--text-dim)]">
                    {p.tag}
                  </span>
                  <h4 className="mt-1.5 flex items-center gap-2 font-display text-lg font-bold tracking-[-0.02em]">
                    {p.name}
                    <span className="text-[var(--accent-blue)] transition-transform group-hover:translate-x-0.5">
                      &#8599;
                    </span>
                  </h4>
                  <p className="mt-1 font-mono text-[length:var(--fs-small)] text-[var(--text-muted)]">
                    {p.domain}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Prior record */}
        <section className="border-t border-[var(--border)] px-6 py-14 md:px-12 md:py-20">
          <div className="mx-auto max-w-[var(--content-max)]">
            <SectionLabel>prior record / operator judgment</SectionLabel>
            <h2 className="max-w-[820px] font-display text-[length:var(--fs-h2)] font-bold tracking-[-0.03em]">
              High-stakes ownership came before the code.
            </h2>
            <p className="mt-5 max-w-[680px] leading-relaxed text-[var(--text-muted)]">
              More than a decade in commercial real estate taught me to sell
              complex assets, advise executives, repair operational data, and stay
              accountable when decisions had real consequences.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {priorRecord.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6"
                >
                  <span className="font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--text-dim)]">
                    {item.label}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold tracking-[-0.02em]">
                    {item.value}
                  </h3>
                  <p className="mt-2.5 text-[length:var(--fs-small)] leading-relaxed text-[var(--text-muted)]">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--text-dim)]">
              <span className="rounded-[var(--r-sm)] border border-[var(--border)] px-3 py-1.5">
                2012-2025 · CRE operator &amp; advisor
              </span>
              <span className="text-[var(--accent-blue)]">&rarr;</span>
              <span className="rounded-[var(--r-sm)] border border-[var(--border)] px-3 py-1.5 text-[var(--text-muted)]">
                2025-now · forward-deployed AI lead
              </span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-[var(--border)] bg-dotgrid px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-[var(--content-max)]">
            <SectionLabel>next file / the right hard problem</SectionLabel>
            <h2 className="max-w-[820px] font-display text-[length:var(--fs-h2)] font-bold tracking-[-0.03em]">
              Put one strong owner on the whole problem.
            </h2>
            <p className="mt-5 max-w-[680px] leading-relaxed text-[var(--text-muted)]">
              If you need someone who can turn an ambiguous AI opportunity into a
              shipped, measured product — without losing the last mile between
              model and customer — let&apos;s talk.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/#contact"
                className="rounded-[var(--r-sm)] bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] px-6 py-3 font-mono text-[length:var(--fs-nav)] font-medium text-white shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:brightness-110"
              >
                discuss a deployment problem
              </Link>
              <Link
                href="/#work"
                className="rounded-[var(--r-sm)] border border-[var(--border)] bg-[var(--surface)] px-6 py-3 font-mono text-[length:var(--fs-nav)] font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)]"
              >
                see all work
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
