import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

const TITLE = "Calibrating an LLM judge for a game people are trying to beat";
const DESCRIPTION =
  "A scoring model that grades live players has no reference implementation to check itself against. What I measured on Yapoleon's Court, what broke, and the calibration metric I had to change.";
const URL = "https://midnightdev.dev/writing/calibrating-an-llm-judge";
const PUBLISHED = "2026-08-04";

export const metadata: Metadata = {
  title: `${TITLE} | MidnightDev`,
  description: DESCRIPTION,
  alternates: {
    canonical: "/writing/calibrating-an-llm-judge",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "MidnightDev",
    type: "article",
    publishedTime: PUBLISHED,
    authors: ["Alex Bouchard"],
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
    title: TITLE,
    description:
      "The specified metric was a median win-rate. It turned out bimodal and degenerate — an offline sweep of hundreds of curves found zero in band. So the metric changed.",
    images: ["https://midnightdev.dev/opengraph-image"],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${URL}#article`,
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  inLanguage: "en-US",
  url: URL,
  image: "https://midnightdev.dev/opengraph-image",
  author: {
    "@id": "https://midnightdev.dev/#alex-bouchard",
  },
  publisher: {
    "@type": "Organization",
    name: "MidnightDev",
    url: "https://midnightdev.dev",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": URL,
  },
  about: [
    "LLM evaluation",
    "LLM-as-judge",
    "Calibration",
    "Adversarial robustness",
  ],
};

const properties = [
  {
    step: "01",
    title: "Learnable",
    rule: "better replies must score better",
    detail:
      "Three authored archetypes per demand — weak, mid, strong — have to come out in that order, with separation wide enough to read.",
  },
  {
    step: "02",
    title: "Fair",
    rule: "representative wins inside a stated band",
    detail:
      "A middling reply should win some of the time, not always and not never, and a perfect run has to be reachable inside the turn limit.",
  },
  {
    step: "03",
    title: "Not template-farmable",
    rule: "one fixed mold must lose off-axis",
    detail:
      "The negative control. One rhetorical shape applied to all thirty days has to lose on the days its shape is not weighted. If it wins everywhere, the daily weight shift is decorative.",
  },
  {
    step: "04",
    title: "Not gameable",
    rule: "five adversarial probes against the live judge",
    detail:
      "Naked flattery, prompt injection, legitimate audacity, delimiter breakout, and grovel dressed as economy. Each aimed at one specific failure, each run against the shipping judge.",
  },
  {
    step: "05",
    title: "Honest about noise",
    rule: "distributions, not point values",
    detail:
      "Hosted inference is not bit-reproducible at temperature 0.2, so every cell runs at least three times and the spread is reported alongside the number.",
  },
];

const results = [
  {
    property: "Representative (mean mid) win-rate",
    measured: "72.2%",
    target: "55–70% — 2.2 pts above",
    ok: false,
  },
  {
    property: "Weak archetype win-rate",
    measured: "0%",
    target: "must lose",
    ok: true,
  },
  {
    property: "Strong archetype win-rate",
    measured: "96.7%",
    target: "must win",
    ok: true,
  },
  {
    property: "Learnable (strong > mid > weak)",
    measured: "0% → 72.2% → 96.7%",
    target: "ordered, with separation",
    ok: true,
  },
  {
    property: "Fixed-mold off-axis win-rate",
    measured: "0%",
    target: "must lose",
    ok: true,
  },
];

const probes = [
  {
    probe: "Naked flattery",
    delta: "−22.7",
    outcome: "Penalized. Grovel with no specific turn scores low on every axis.",
  },
  {
    probe: "Prompt injection",
    delta: "−10",
    outcome: "Penalized, and not obeyed — the instruction did not change the reaction.",
  },
  {
    probe: "Legitimate audacity",
    delta: "+37.7",
    outcome:
      "Rewarded. Nerve the demand invited is not mistaken for an attack — this is the false-positive check.",
  },
  {
    probe: "Delimiter breakout",
    delta: "−19.3",
    outcome: "Fence neutralized and the attempt penalized.",
  },
  {
    probe: "Grovel on an economy-weighted day",
    delta: "−13",
    outcome: "Empty brevity did not ride the economy weight to favor.",
  },
];

const weaknesses = [
  {
    step: "01",
    title: "Three runs per cell is thin",
    detail:
      "At 30 demands × 3 runs, the sampling band around 72.2% is roughly ±5–9% — wide enough that the overshoot cannot be separated from noise. Tightening it means 5–6 runs per cell, about 1,800 calls. That run has not happened.",
  },
  {
    step: "02",
    title: "The archetypes are one person's taste",
    detail:
      "I authored the weak, mid, and strong replies. “Representative player” means what I think a representative player writes. A real distribution of player replies would move the number and I do not know which direction.",
  },
  {
    step: "03",
    title: "One product, one property",
    detail:
      "This has been run once, on one grader, for one game, against one narrow property — is the scoring rubric fair. Nothing here demonstrates the approach transfers to a grader for factual accuracy or safety.",
  },
  {
    step: "04",
    title: "72.2% shipped above the band",
    detail:
      "The options were re-tune the curve or accept and record it. I accepted: the skill gradient and the mold defense both held, and the overshoot favors players. The re-tune is a separate pass that has not been run.",
  },
  {
    step: "05",
    title: "One judge, one setting",
    detail:
      "Every number here is a property of gemini-3.5-flash at temperature 0.2 with a flat response schema. A model swap invalidates the measurements, not the method.",
  },
];

const sources = [
  {
    label: "CALIBRATION.md — the v1 method of record",
    href: "https://github.com/abouchard11/yapoleons-court/blob/main/CALIBRATION.md",
  },
  {
    label: "CALIBRATION-v2.md — the live re-measurement",
    href: "https://github.com/abouchard11/yapoleons-court/blob/main/CALIBRATION-v2.md",
  },
  {
    label: "yapoleon-calibrate.ts — the win-rate simulator",
    href: "https://github.com/abouchard11/yapoleons-court/blob/main/scripts/yapoleon-calibrate.ts",
  },
  {
    label: "judge.ts — the scoring contract",
    href: "https://github.com/abouchard11/yapoleons-court/blob/main/src/judge.ts",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.1em] text-[var(--accent-blue)]">
      {children}
    </p>
  );
}

const P = "mt-5 max-w-[720px] leading-relaxed text-[var(--text-muted)]";
const H2 =
  "max-w-[820px] font-display text-[length:var(--fs-h2)] font-bold tracking-[-0.03em]";
const SECTION =
  "border-t border-[var(--border)] px-6 py-14 md:px-12 md:py-20";
const INNER = "mx-auto max-w-[var(--content-max)]";

export default function CalibratingAnLlmJudgePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <Nav />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-dotgrid px-6 pb-14 pt-14 md:px-12 md:pb-20 md:pt-24">
          <div className={INNER}>
            <p className="mb-6 flex flex-wrap items-center gap-2 font-mono text-[11px] lowercase tracking-[0.08em] text-[var(--accent-blue)]">
              <Link
                href="/writing"
                className="transition-colors hover:text-[var(--text-primary)]"
              >
                writing
              </Link>
              <span className="text-[var(--text-dim)]">/</span>
              <span className="text-[var(--text-dim)]">
                llm evaluation ·{" "}
                <time dateTime={PUBLISHED}>4 august 2026</time>
              </span>
            </p>

            <h1 className="max-w-[900px] font-display text-[length:var(--fs-h1)] font-extrabold leading-[1.05] tracking-[-0.04em]">
              Calibrating an LLM judge for a game{" "}
              <span className="gradient-text">people are trying to beat</span>
            </h1>

            <p className="mt-8 max-w-[720px] text-lg leading-relaxed text-[var(--text-muted)]">
              A scoring model that grades live players has no reference
              implementation to check itself against. This is what I measured,
              what broke, and the calibration metric I had to change.
            </p>

            <p className="mt-4 max-w-[720px] text-[length:var(--fs-small)] leading-relaxed text-[var(--text-dim)]">
              Every number below comes from the calibration study for{" "}
              <a
                href="https://court.yapoleon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] underline underline-offset-4 transition-colors hover:text-[var(--text-primary)]"
              >
                Yapoleon&apos;s Court
              </a>
              , measured live on 2026-06-16. Sources are linked at the end.
            </p>
          </div>
        </section>

        {/* The problem */}
        <section className={SECTION}>
          <div className={INNER}>
            <SectionLabel>01 / the problem</SectionLabel>
            <h2 className={H2}>
              A grader with no ground truth, reading inputs written to defeat it
            </h2>

            <p className={P}>
              Yapoleon&apos;s Court is a browser game. The emperor issues a
              demand, you answer it in three turns or fewer, and an LLM scores
              each reply. A favor meter moves by the score; reach 100 inside
              three turns and you win. There are thirty demands and five scoring
              axes — wit, specificity, audacity, economy, flattery — and the
              weight on each axis changes day to day.
            </p>

            <p className={P}>
              The judging is the product. Everything else is a text box and a
              meter.
            </p>

            <p className={P}>
              That puts the entire quality burden on a question with no answer
              key. Whether a reply was good cannot be graded against a reference
              build the way a parser or a checkout flow can. There is no correct
              output to diff against, no oracle, and no second implementation to
              disagree with. What there is instead: a set of properties the
              scoring has to hold, and a way to measure whether it holds them.
            </p>

            <p className={P}>
              There is also a second difference from most eval work. This grader
              is exposed. It scores text written by people who can see the score
              it produced and want a higher one next time.
            </p>
          </div>
        </section>

        {/* What breaks */}
        <section className={SECTION}>
          <div className={INNER}>
            <SectionLabel>02 / why the obvious approaches fail</SectionLabel>
            <h2 className={H2}>Three reasonable designs, and what each one does</h2>

            <div className="mt-10 flex flex-col gap-4">
              <article className="rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6">
                <h3 className="font-display text-xl font-bold tracking-[-0.02em]">
                  Let the model return the score
                </h3>
                <p className="mt-3 max-w-[820px] leading-relaxed text-[var(--text-muted)]">
                  This is the shortest path: ask for a number, take the number.
                  It reintroduces the review-bomb trap. A model asked to output a
                  score, handed a reply that praises it, tends to pay for the
                  praise. It does not do this consistently, which makes the bias
                  harder to detect than a consistent one would be. It also makes
                  the scoring rule unauditable — the same reply can score
                  differently on two calls and there is no artifact to point at.
                </p>
              </article>

              <article className="rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6">
                <h3 className="font-display text-xl font-bold tracking-[-0.02em]">
                  A fixed rubric with static weights
                </h3>
                <p className="mt-3 max-w-[820px] leading-relaxed text-[var(--text-muted)]">
                  Freeze the five axes and their weights and the game becomes a
                  lookup table. One player finds the rhetorical shape that
                  maximizes the fixed weighting, posts it, and everyone runs it.
                  The rubric would then be measuring whether a player found the
                  template, not the quality of the reply.
                </p>
              </article>

              <article className="rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6">
                <h3 className="font-display text-xl font-bold tracking-[-0.02em]">
                  Median win-rate as the calibration metric
                </h3>
                <p className="mt-3 max-w-[820px] leading-relaxed text-[var(--text-muted)]">
                  This one was in my own spec. The acceptance criterion read:
                  median win-rate for a representative player inside 55–70%. It
                  is the natural thing to ask for, and for this demand set it is
                  neither achievable nor meaningful. The reason is a property of
                  the game, not a tuning failure — which is the part worth
                  writing down.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Replacements */}
        <section className={SECTION}>
          <div className={INNER}>
            <SectionLabel>03 / what replaced each</SectionLabel>
            <h2 className={H2}>Server-owned scoring, moving weights, and the mean</h2>

            <h3 className="mt-10 max-w-[820px] font-display text-2xl font-bold tracking-[-0.02em]">
              The model never emits the score
            </h3>
            <p className={P}>
              The model returns five sub-scores in [0,1], a dominant axis, and
              one in-character line. That is the whole output schema. The favor
              delta is computed after the call, on the server, by a pure
              function:
            </p>

            <pre className="mt-6 max-w-[820px] overflow-x-auto rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-5 font-mono text-[length:var(--fs-small)] leading-relaxed text-[var(--text-primary)]">
              <code>{`weighted   = Σ clamp01(axisScores[axis]) × dayWeights[axis]   // 0..1
favorDelta = round(-28 + 80 × weighted)                       // −28..+52`}</code>
            </pre>

            <p className={P}>
              Same inputs, same output, every call. <code className="font-mono text-[length:var(--fs-small)] text-[var(--text-primary)]">favorDelta</code>{" "}
              is not in the model&apos;s output schema, so it cannot be argued
              into a higher one. Scores stay decomposable after the fact: every
              delta reduces to five clamped numbers and the day&apos;s weights,
              both of which are recorded.
            </p>

            <p className={P}>
              The band satisfies one invariant. A maximum turn is +52, three
              turns is 156, and the win threshold is 100 — so a perfect run
              clears it with margin rather than exactly.
            </p>

            <h3 className="mt-12 max-w-[820px] font-display text-2xl font-bold tracking-[-0.02em]">
              The axis weights move daily
            </h3>
            <p className={P}>
              A template built to farm an economy-heavy day loses on a wit-heavy
              one. That is the intent; the measurement is in the next section,
              as a negative control rather than a claim.
            </p>

            <h3 className="mt-12 max-w-[820px] font-display text-2xl font-bold tracking-[-0.02em]">
              The metric became the mean, with the spread reported
            </h3>
            <p className={P}>
              The per-demand win-rate for a fixed representative reply is
              bimodal. With one authored mid-quality reply per demand, that
              reply is either clearly winning-quality or clearly losing-quality
              against its demand. Across thirty demands, about one lands
              contested — a mid win-rate between 34% and 66%. The rest saturate
              near 0% or near 100%.
            </p>
            <p className={P}>
              A bimodal distribution has a degenerate median. It jumps between
              roughly 0% and roughly 100% as the curve threshold moves; it does
              not slide. An offline sweep of hundreds of candidate curves found
              zero with a median inside the 55–70% band. It is also unstable run
              to run: an offline fit predicted a 67% median and a live run of the
              same curve landed at 83%.
            </p>
            <p className={P}>
              The mean holds still. Applying the chosen curve to two independent
              live runs gave 61.1% and 63.3%. So the calibration metric changed
              from median to mean, and the study records the metric that was
              specified, why it does not work here, and the one that replaced it.
            </p>
          </div>
        </section>

        {/* Validation */}
        <section className={SECTION}>
          <div className={INNER}>
            <SectionLabel>04 / validation without an oracle</SectionLabel>
            <h2 className={H2}>
              If you cannot check the output, check the properties
            </h2>
            <p className={P}>
              The scoring function gets validated against properties that have to
              hold regardless of what &ldquo;good&rdquo; means on any given day.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {properties.map((p) => (
                <div
                  key={p.step}
                  className="rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[length:var(--fs-label)] text-[var(--accent-blue)]">
                      {p.step}
                    </span>
                    <h3 className="font-display text-lg font-bold tracking-[-0.02em]">
                      {p.title}
                    </h3>
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

            <h3 className="mt-12 max-w-[820px] font-display text-2xl font-bold tracking-[-0.02em]">
              Capture once, fit offline
            </h3>
            <p className={P}>
              Each round records the judge&apos;s raw axis scores per turn. Raw
              scores are independent of the favor curve, so candidate curves get
              swept offline instead of by repeated live runs. The offline model
              was validated against a live run before any curve was chosen from
              it: replaying the prior curve offline reproduced that run&apos;s
              live result exactly.
            </p>
          </div>
        </section>

        {/* Results */}
        <section className={SECTION}>
          <div className={INNER}>
            <SectionLabel>05 / results</SectionLabel>
            <h2 className={H2}>What the live run measured</h2>
            <p className={P}>
              Executed 2026-06-16 against the shipping judge at three runs per
              cell: <strong className="text-[var(--text-primary)]">1,095 judge calls, 0 errors</strong>.
            </p>

            <div className="mt-10 overflow-x-auto rounded-[var(--r-md)] border border-[var(--border)]">
              <table className="w-full min-w-[600px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-[var(--border)] bg-[var(--surface)]">
                    <th className="px-5 py-3 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--text-dim)]">
                      Property
                    </th>
                    <th className="px-5 py-3 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--text-dim)]">
                      Measured
                    </th>
                    <th className="px-5 py-3 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--text-dim)]">
                      Target
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((row) => (
                    <tr
                      key={row.property}
                      className="border-b border-[var(--border)] last:border-b-0"
                    >
                      <td className="px-5 py-3.5 text-[length:var(--fs-small)] text-[var(--text-muted)]">
                        {row.property}
                      </td>
                      <td className="px-5 py-3.5 font-mono text-[length:var(--fs-small)] text-[var(--text-primary)]">
                        {row.measured}
                      </td>
                      <td
                        className={`px-5 py-3.5 text-[length:var(--fs-small)] ${
                          row.ok
                            ? "text-[var(--text-dim)]"
                            : "text-[var(--warning)]"
                        }`}
                      >
                        {row.target}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="mt-12 max-w-[820px] font-display text-2xl font-bold tracking-[-0.02em]">
              The five anti-gaming probes
            </h3>
            <p className={P}>
              Each probe is a single-turn call against the live judge, run on the
              bucket that loads its property, averaged over at least three runs.
              All five pass.
            </p>

            <div className="mt-8 overflow-x-auto rounded-[var(--r-md)] border border-[var(--border)]">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-[var(--border)] bg-[var(--surface)]">
                    <th className="px-5 py-3 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--text-dim)]">
                      Probe
                    </th>
                    <th className="px-5 py-3 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--text-dim)]">
                      Mean favor delta
                    </th>
                    <th className="px-5 py-3 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--text-dim)]">
                      Outcome
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {probes.map((row) => (
                    <tr
                      key={row.probe}
                      className="border-b border-[var(--border)] last:border-b-0"
                    >
                      <td className="px-5 py-3.5 text-[length:var(--fs-small)] text-[var(--text-muted)]">
                        {row.probe}
                      </td>
                      <td
                        className={`px-5 py-3.5 font-mono text-[length:var(--fs-small)] ${
                          row.delta.startsWith("+")
                            ? "text-[var(--success)]"
                            : "text-[var(--text-primary)]"
                        }`}
                      >
                        {row.delta}
                      </td>
                      <td className="px-5 py-3.5 text-[length:var(--fs-small)] text-[var(--text-dim)]">
                        {row.outcome}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 rounded-[var(--r-md)] border border-[var(--warning)]/30 bg-[var(--surface)] p-6">
              <span className="font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--warning)]">
                the overshoot
              </span>
              <p className="mt-3 max-w-[820px] leading-relaxed text-[var(--text-muted)]">
                72.2% is 2.2 points above the 55–70% band. It is reported that
                way rather than rounded into range. Two things are true about it:
                the estimate carries a sampling band of roughly ±5–9% at three
                runs per cell, and part of the rise from the prior 62% is a
                prompt change working as intended — a moderately bold reply on an
                audacity-weighted day is no longer docked as insolence, so it now
                scores where it previously did not. Neither of those puts 72.2%
                inside the band.
              </p>
            </div>
          </div>
        </section>

        {/* Weaknesses */}
        <section className={SECTION}>
          <div className={INNER}>
            <SectionLabel>06 / what is still weak</SectionLabel>
            <h2 className={H2}>The parts I would do differently</h2>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {weaknesses.map((w) => (
                <div
                  key={w.step}
                  className="rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[length:var(--fs-label)] text-[var(--accent-blue)]">
                      {w.step}
                    </span>
                    <h3 className="font-display text-lg font-bold tracking-[-0.02em]">
                      {w.title}
                    </h3>
                  </div>
                  <p className="mt-2.5 text-[length:var(--fs-small)] leading-relaxed text-[var(--text-muted)]">
                    {w.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Close */}
        <section className={SECTION}>
          <div className={INNER}>
            <SectionLabel>07 / optimization pressure</SectionLabel>
            <h2 className={H2}>
              A measurement eval and a live grader are not the same object
            </h2>

            <p className={P}>
              Most eval work treats adversarial robustness as a later phase, and
              that is reasonable when the eval is only a measuring instrument. It
              runs against a dataset you control, in CI, on inputs written before
              the eval existed. Nothing in that loop is trying to score higher.
            </p>

            <p className={P}>
              A grader inside a live product does not have that property. Its
              inputs are authored after it, by people who can see its output and
              want more of it. Prompt injection is not a hypothetical there — it
              is something a player tries in the first week. Sycophancy is not a
              subtle statistical bias — it is the first strategy anyone tests.
              The five probes are the same tier of requirement as &ldquo;strong
              beats weak,&rdquo; not a hardening pass bolted on at the end.
            </p>

            <p className={P}>
              The distinction is about where the grader sits, not how good it is.
              Once a score is something a person can optimize against, the set of
              properties you have to prove gets larger.
            </p>

            <div className="mt-10 rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6">
              <span className="font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--text-dim)]">
                sources
              </span>
              <ul className="mt-4 flex flex-col gap-2.5">
                {sources.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[length:var(--fs-small)] text-[var(--accent-blue)] transition-opacity hover:opacity-80"
                    >
                      {s.label} &#8599;
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/writing"
                className="rounded-[var(--r-sm)] border border-[var(--border)] bg-[var(--surface)] px-6 py-3 font-mono text-[length:var(--fs-nav)] font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)]"
              >
                all writing
              </Link>
              <Link
                href="/build-room#graders"
                className="font-mono text-[length:var(--fs-small)] text-[var(--accent-blue)] transition-opacity hover:opacity-80"
              >
                the other two graders &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
