import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Résumé — Alex Bouchard | Forward-Deployed AI Lead",
  description:
    "Forward-deployed AI lead. Two consumer AI products live on the App Store, built solo end to end — model behavior, safety gates, reliability, cost controls, native release, and telemetry.",
  alternates: { canonical: "/resume" },
  openGraph: {
    title: "Résumé — Alex Bouchard",
    description:
      "One person. Two shipped AI products. No handoffs.",
    url: "https://midnightdev.dev/resume",
    siteName: "MidnightDev",
    type: "profile",
    images: [
      {
        url: "https://midnightdev.dev/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Alex Bouchard — Forward-Deployed AI Lead",
      },
    ],
  },
};

/* ---------------------------------- data --------------------------------- */

const CONTACT = [
  { label: "alex@midnightdev.dev", href: "mailto:alex@midnightdev.dev" },
  { label: "midnightdev.dev", href: "https://midnightdev.dev" },
  { label: "github.com/abouchard11", href: "https://github.com/abouchard11" },
  {
    label: "linkedin.com/in/alex-bouchard-ai",
    href: "https://www.linkedin.com/in/alex-bouchard-ai",
  },
];

type Work = {
  name: string;
  url: string;
  href: string;
  meta: string;
  summary: string;
  bullets: string[];
  /** Indices of bullets kept on the web page but dropped from the print/PDF sheet. */
  printTrim?: number[];
  stack: string[];
};

const WORK: Work[] = [
  {
    name: "Dozen",
    url: "midnightdev.dev/work/dozen",
    href: "https://midnightdev.dev/work/dozen",
    meta: "Private product — graph and tests, not live GMV",
    summary:
      "Agent marketplace between brands and 1k–50k TikTok / Instagram creators. The model drafts captions. Accept, post, and pay stay open until a human or an independent verifier closes them.",
    bullets: [
      "Twelve-node graph: intake → safety → assemble → offer → accept → draft → verify → revise → review → post → measure → pay.",
      "Accept gate is dual — ≥60% and at least six seats. Accept stays closed until Stripe Checkout records the brand budget. Rejected seats stay in the offered denominator.",
      "Post re-checks FTC disclosure fail-closed. Anomalous ER (3.2× or 0.15×) holds that seat's payout without closing pay.",
      "43 production-imported tests plus a graph linter that fails if the model owns an irreversible edge.",
      "Stripe Checkout is wired fail-closed. Connect transfers and live TikTok/Instagram confirmation remain scaffolding. This line does not claim production GMV.",
    ],
    printTrim: [3],
    stack: ["tanstack start", "postgres", "invariant tests", "closed-loop agents"],
  },
  {
    name: "Yapword",
    url: "yapword.com",
    href: "https://yapword.com",
    meta: "Live — Web + Apple App Store",
    summary:
      "Daily word game with a persistent generative character that reacts to real play. Deterministic code owns the puzzle, score, and limits; the model produces bounded character behavior from structured game context.",
    bullets: [
      "Server-owned rules prevent the generative layer from ever touching game truth — score, answer, and limits are unreachable from the model.",
      "Character stays recognizable across guesses, hints, difficulty modes, wins, losses, fallbacks, and model changes.",
      "Automated regression checks gate every release, including character-behavior changes.",
      "Three daily difficulty modes, themed games, contextual hints, and shareable challenges.",
      "Capacitor ships the public iOS app from the same product core as the web game — one implementation, two surfaces.",
    ],
    printTrim: [3],
    stack: ["react", "typescript", "gemini", "capacitor", "supabase", "vercel"],
  },
  {
    name: "That's My Best",
    url: "thatsmybest.com",
    href: "https://thatsmybest.com",
    meta: "Live — Web + Apple App Store · concept to App Store in 14 days",
    summary:
      "Multimodal social game that turns social photo-grid screenshots into a playable friend quiz. The model proposes the answer key; code bounds what a wrong one can reach.",
    bullets: [
      "The model's guess ships as the answer key by default, so machine-checkable invariants bound it: no answers in the player payload, reveal only after a valid pick, an immutable seal, and scores only for players who actually played.",
      "Privacy-preserving by construction: creator-supplied screenshots, independent per-photo verdicts, no facial recognition, no Meta API access, no staff photo review.",
      "Early soft-launch generation cost measured at roughly 6–7¢ per completed quiz.",
      "Scoped to objective visual memory over personality judgment, so the model never invents claims about a person.",
      "Answer-specific reactions, named friends, and timed group reveals drive the social loop.",
    ],
    printTrim: [4],
    stack: ["multimodal ai", "capacitor", "serverless", "web + ios"],
  },
  {
    name: "Yapoleon's Court",
    url: "court.yapoleon.com",
    href: "https://court.yapoleon.com",
    meta: "Live — Web",
    summary:
      "Competitive AI game built so the model can't be gamed — structurally, not with prompt hardening. A player actively trying to manipulate an LLM, on a paid API, in front of a family audience.",
    bullets: [
      "The model never emits the score. It returns taste only — five bounded axes plus one in-voice line — and the favor delta is derived server-side by a pure function the model cannot see or reach.",
      "Denial-of-wallet bounded five ways: 3-turn daily cap, per-IP and per-user rate limits, atomic concurrency slot, cached degrade mode, and a hard spend stop.",
      "Deterministic red-line pre-filter runs before any model call, so flagged input costs zero tokens.",
      "Prompt injection handled structurally — the player's reply rides as data being judged, never inside the system instruction.",
      "Cached degrade mode serves an in-voice reaction with zero model calls under load; the meter never breaks and the character never breaks.",
    ],
    printTrim: [4],
    stack: ["react", "gemini", "vercel", "supabase"],
  },
  {
    name: "AI Boardroom Forecast Audit",
    url: "github.com/abouchard11/ai-boardroom-forecast-audit",
    href: "https://github.com/abouchard11/ai-boardroom-forecast-audit",
    meta: "Open source — Python",
    summary:
      "Six synthetic executive lenses with competing incentives audit an AI-built operating plan that forecast ~$65.9M in profit. Rebuilt as a transparent, reproducible model when consensus alone failed to catch the arithmetic.",
    bullets: [
      "Reconciled a $3.397M gap between reported and fully loaded base-case expenses that survived six rounds of review.",
      "100,000 seeded Monte Carlo trials stress-testing sell-through, revenue execution, expense variance, weather, sponsorship, and delays.",
      "Median reconstructed profit $1.22M; probability of reaching at least $5M: 10.5%.",
      "Invariant tests block incompatible expense definitions from quietly surviving consensus.",
      "Deterministic outputs, tests, evidence ledger, and limitations published publicly and labeled as reconstruction.",
    ],
    printTrim: [4],
    stack: ["python", "monte carlo", "regression", "invariant tests"],
  },
];

const GOVERNANCE = [
  { k: "Truth", v: "Server-owned and invariant-bounded." },
  { k: "State", v: "Deterministic, kept outside the model." },
  { k: "Safety", v: "Untrusted content isolated as data, never instruction." },
  { k: "Reliability", v: "Failure paths designed in advance, not discovered in production." },
  { k: "Economics", v: "Cost treated as a product constraint with hard stops." },
  { k: "Verification", v: "Release gates across the stack." },
];

const OSS = [
  {
    name: "gemini-reliability-proxy",
    desc: "Fallback chains and graceful degradation for model calls.",
    href: "https://github.com/abouchard11",
  },
  {
    name: "llm-safety-gate",
    desc: "Deterministic boundary isolating untrusted content from instructions.",
    href: "https://github.com/abouchard11",
  },
  {
    name: "getzep/graphiti — PR #1698",
    desc: "Upstream contribution to production memory infrastructure.",
    href: "https://github.com/getzep/graphiti/pull/1698",
  },
];

const STACK = [
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "Node",
  "Supabase",
  "Postgres",
  "Vercel",
  "Capacitor / iOS",
  "Google Gemini",
  "Multimodal generation",
  "Evals & invariant testing",
  "PostHog",
  "Tailwind",
];

/* -------------------------------- primitives ------------------------------ */

function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="gradient-text font-mono text-[length:var(--fs-label)] font-semibold tracking-[0.1em]">
        {n}
      </span>
      <span className="font-mono text-[length:var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
        {children}
      </span>
      <span className="h-px flex-1 bg-[var(--border)]" />
    </div>
  );
}

/* ---------------------------------- page ---------------------------------- */

export default function ResumePage() {
  return (
    <>
      <div className="no-print">
        <Nav />
      </div>

      <main className="resume flex-1 px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-[860px]">
          <div className="no-print mb-8 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-[length:var(--fs-label)] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
            >
              <span>&larr;</span> back to home
            </Link>
            {/*
              "download pdf" button intentionally disabled: the bundled PDF
              (public/Alex-Bouchard-Resume.pdf) was generated from stale content
              and has been removed. Regenerate per APPLY.md's "Regenerating the
              PDF after an edit" section once the content on this page is final,
              then restore an <a href="/Alex-Bouchard-Resume.pdf"> here.
            */}
          </div>

          {/* Header */}
          <header className="border-b border-[var(--border)] pb-8">
            <h1 className="font-display text-[clamp(36px,6vw,60px)] font-extrabold leading-[1.0] tracking-[-0.04em]">
              Alex Bouchard
            </h1>
            <p className="mt-3 font-mono text-[13px] uppercase tracking-[0.1em] text-[var(--accent-blue)]">
              Forward-Deployed AI Lead
            </p>
            <p className="mt-5 max-w-[680px] text-[15px] leading-relaxed text-[var(--text-muted)]">
              One person. Two consumer AI products live on the Apple App Store,
              three shipped. No handoffs. I take ambiguous AI products from
              decision to deployment — product, architecture, implementation,
              evals, native release, telemetry, and production outcomes — and I
              own the result.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[12px] text-[var(--text-muted)]">
              <span className="text-[var(--text-dim)]">
                Houston, TX · open to relocation
              </span>
              {CONTACT.map((c) => (
                <a
                  key={c.href}
                  href={c.href}
                  className="transition-colors hover:text-[var(--text-primary)]"
                >
                  {c.label}
                </a>
              ))}
            </div>
          </header>

          {/* Shipped work */}
          <section className="mt-12">
            <SectionLabel n="01">Shipped work</SectionLabel>
            <div className="space-y-9">
              {WORK.map((w) => (
                <article key={w.name} className="break-inside-avoid">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h2 className="font-display text-[22px] font-bold tracking-[-0.03em] text-[var(--text-primary)]">
                      {w.name}
                    </h2>
                    <a
                      href={w.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[12px] text-[var(--accent-blue)] transition-colors hover:text-[var(--text-primary)]"
                    >
                      {w.url}
                    </a>
                  </div>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--text-dim)]">
                    {w.meta}
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--text-muted)]">
                    {w.summary}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {w.bullets.map((b, i) => (
                      <li
                        key={b}
                        className={`relative pl-4 text-[14px] leading-relaxed text-[var(--text-muted)] before:absolute before:left-0 before:top-[0.62em] before:h-[3px] before:w-[3px] before:rounded-full before:bg-[var(--accent-purple)]${
                          w.printTrim?.includes(i) ? " print-trim" : ""
                        }`}
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {w.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-[var(--r-sm)] border border-[var(--border)] bg-[var(--surface)] px-2 py-0.5 font-mono text-[11px] text-[var(--text-dim)]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Governance */}
          <section className="mt-12 break-inside-avoid">
            <SectionLabel n="02">How I run models in production</SectionLabel>
            <dl className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {GOVERNANCE.map((g) => (
                <div key={g.k}>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--text-primary)]">
                    {g.k}
                  </dt>
                  <dd className="mt-0.5 text-[14px] leading-relaxed text-[var(--text-muted)]">
                    {g.v}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Open source */}
          <section className="mt-12 break-inside-avoid">
            <SectionLabel n="03">Open source</SectionLabel>
            <ul className="space-y-2">
              {OSS.map((o) => (
                <li key={o.name} className="text-[14px] leading-relaxed">
                  <a
                    href={o.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[13px] text-[var(--accent-blue)] transition-colors hover:text-[var(--text-primary)]"
                  >
                    {o.name}
                  </a>
                  <span className="text-[var(--text-muted)]"> — {o.desc}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Distribution */}
          <section className="mt-12 break-inside-avoid">
            <SectionLabel n="04">Distribution &amp; measurement</SectionLabel>
            <ul className="space-y-1.5">
              {[
                "Operate public web properties, treating technical SEO and generative-engine optimization as product infrastructure rather than marketing.",
                "PostHog telemetry connecting model output to user behavior across web and native iOS — starts, submissions, completions, hints, shares, and purchases.",
                "@YapoleonGreater on X run as a governed, near-autonomous publishing system that holds character voice inside defined boundaries.",
              ].map((b) => (
                <li
                  key={b}
                  className="relative pl-4 text-[14px] leading-relaxed text-[var(--text-muted)] before:absolute before:left-0 before:top-[0.62em] before:h-[3px] before:w-[3px] before:rounded-full before:bg-[var(--accent-purple)]"
                >
                  {b}
                </li>
              ))}
            </ul>
          </section>

          {/* CRE */}
          <section className="mt-12 break-inside-avoid">
            <SectionLabel n="05">Before code — commercial real estate</SectionLabel>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h2 className="font-display text-[20px] font-bold tracking-[-0.03em] text-[var(--text-primary)]">
                Commercial Real Estate — Investment Sales
              </h2>
              <span className="font-mono text-[12px] text-[var(--text-dim)]">
                2012 – 2025
              </span>
            </div>
            <ul className="mt-3 space-y-1.5">
              {[
                "85+ retail transactions representing roughly $400M in transaction volume as half of a two-person team.",
                "Rebuilt a 5,700+ contact CRM and corrected approximately 1,900 mapping errors — ground-truth data work at production scale, before it was called that.",
                "Thirteen years owning deal outcomes end to end: sourcing, underwriting, negotiation, and close.",
              ].map((b) => (
                <li
                  key={b}
                  className="relative pl-4 text-[14px] leading-relaxed text-[var(--text-muted)] before:absolute before:left-0 before:top-[0.62em] before:h-[3px] before:w-[3px] before:rounded-full before:bg-[var(--accent-purple)]"
                >
                  {b}
                </li>
              ))}
            </ul>
          </section>

          {/* Stack + education */}
          <section className="mt-12 break-inside-avoid">
            <SectionLabel n="06">Stack &amp; education</SectionLabel>
            <div className="flex flex-wrap gap-1.5">
              {STACK.map((s) => (
                <span
                  key={s}
                  className="rounded-[var(--r-sm)] border border-[var(--border)] bg-[var(--surface)] px-2 py-0.5 font-mono text-[11px] text-[var(--text-muted)]"
                >
                  {s}
                </span>
              ))}
            </div>
            <p className="mt-5 text-[14px] leading-relaxed text-[var(--text-muted)]">
              <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--text-primary)]">
                Education
              </span>
              <br />
              B.B.A. Finance — Texas A&amp;M University
            </p>
          </section>

          <p className="mt-12 border-t border-[var(--border)] pt-6 font-mono text-[12px] leading-relaxed text-[var(--text-dim)]">
            Generate boldly. Validate cheaply. Kill ruthlessly. Scale what
            survives.
          </p>
        </div>
      </main>

      <div className="no-print">
        <Footer />
      </div>

      <style>{`
        @media print {
          @page { size: Letter; margin: 12mm 13mm; }
          html, body { background: #fff !important; }
          body { color: #101014 !important; font-size: 9.5pt !important; line-height: 1.35 !important; }
          .no-print, .print-trim { display: none !important; }
          .resume { padding: 0 !important; }
          .resume .max-w-\\[860px\\] { max-width: 100% !important; }
          .resume h1 { font-size: 26pt !important; color: #101014 !important; }
          .resume h2 { font-size: 12.5pt !important; color: #101014 !important; }
          .resume a { color: #1d4ed8 !important; text-decoration: none !important; }
          .resume p, .resume li, .resume dd { color: #33333f !important; }
          .resume span, .resume dt { color: #33333f !important; }
          .resume .gradient-text { -webkit-text-fill-color: #5b3df5 !important; color: #5b3df5 !important; }

          /* Sections must flow across pages; only atomic blocks stay together. */
          .resume section { margin-top: 15pt !important; break-inside: auto !important; page-break-inside: auto !important; }
          .resume header { padding-bottom: 10pt !important; }
          .resume article { break-inside: avoid !important; page-break-inside: avoid !important; margin-bottom: 11pt !important; }
          .resume article > p, .resume li { margin-top: 3pt !important; }
          .resume ul { margin-top: 4pt !important; }
          .resume li + li { margin-top: 2pt !important; }
          .resume dl > div { break-inside: avoid !important; }

          /* Compact type inside the print sheet */
          .resume article p, .resume li, .resume dd { font-size: 9.5pt !important; }
          .resume header p { font-size: 10pt !important; }

          .resume [class*="border-"] { border-color: #d5d5de !important; }
          .resume [class*="bg-[var(--surface)]"] { background: #f3f3f7 !important; }
        }
      `}</style>
    </>
  );
}
