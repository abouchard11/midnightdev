import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

const TITLE =
  "Benchmarking a generative character when there is nothing to diff against";
const DESCRIPTION =
  "How a whole-game evaluation harness tested whether Yapword's AI character kept its voice after hidden reasoning was removed from production inference.";
const URL =
  "https://midnightdev.dev/writing/benchmarking-a-generative-character";
const PUBLISHED = "2026-08-17";

export const metadata: Metadata = {
  title: `${TITLE} | MidnightDev`,
  description: DESCRIPTION,
  alternates: {
    canonical: "/writing/benchmarking-a-generative-character",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "MidnightDev",
    type: "article",
    publishedTime: PUBLISHED,
    authors: ["Alex Bouchard"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "A shipped AI character, an 82% hidden-reasoning bill, and a whole-game eval for the quality a one-shot test cannot see.",
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
  image: `${URL}/opengraph-image`,
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
    "Generative characters",
    "Inference cost",
    "Multi-turn evaluation",
    "AI product engineering",
  ],
};

const sweep = [
  {
    setting: "minimal",
    hiddenWin: "0",
    hiddenLoss: "0",
    latencyWin: "6.0s",
    latencyLoss: "5.6s",
  },
  {
    setting: "low",
    hiddenWin: "4,065",
    hiddenLoss: "5,178",
    latencyWin: "24.5s",
    latencyLoss: "29.6s",
  },
  {
    setting: "medium",
    hiddenWin: "7,945",
    hiddenLoss: "7,349",
    latencyWin: "43.0s",
    latencyLoss: "40.7s",
  },
  {
    setting: "high",
    hiddenWin: "8,991",
    hiddenLoss: "11,663",
    latencyWin: "48.8s",
    latencyLoss: "60.9s",
  },
];

const invariants = [
  {
    step: "01",
    title: "Identical inputs",
    detail:
      "Turn inputs are derived once, frozen, and reused across every arm. The setting is the variable; the game is not.",
  },
  {
    step: "02",
    title: "Ordered continuity",
    detail:
      "Each successful line joins the next turn's context in sequence, so the bench measures the through-line instead of isolated one-liners.",
  },
  {
    step: "03",
    title: "Failures stay failures",
    detail:
      "Transport errors are counted separately from quality samples and never become fake dialogue or a zero score.",
  },
  {
    step: "04",
    title: "Usage is reported",
    detail:
      "Visible and hidden tokens come from provider metadata, with run count and completeness carried beside every summary.",
  },
];

const limits = [
  {
    title: "Three runs per cell",
    detail:
      "Hosted inference is not bit-reproducible. These are small samples with a spread, not universal point estimates.",
  },
  {
    title: "One product, one property",
    detail:
      "The sweep measures voice continuity under cost pressure. It does not establish factual accuracy or broad model safety.",
  },
  {
    title: "A human still judges the joke",
    detail:
      "The harness automates controlled inputs, usage, latency, comparability, and leak screening. Taste remains a human decision on purpose.",
  },
];

const sources = [
  {
    label: "Executable reference model",
    href: "https://github.com/abouchard11/yapword-voice-eval-case-study",
  },
  {
    label: "Thinking-floor method and transcripts",
    href: "https://github.com/abouchard11/yapword-voice-eval-case-study/blob/main/docs/thinking-floor.md",
  },
  {
    label: "Hint leak-safety benchmark",
    href: "https://github.com/abouchard11/yapword-voice-eval-case-study/blob/main/docs/leak-safety.md",
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

export default function BenchmarkingAGenerativeCharacterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <Nav />

      <main className="flex-1">
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
                <time dateTime={PUBLISHED}>17 august 2026</time>
              </span>
            </p>

            <h1 className="max-w-[960px] font-display text-[length:var(--fs-h1)] font-extrabold leading-[1.05] tracking-[-0.04em]">
              Benchmarking a generative character when there is{" "}
              <span className="gradient-text">nothing to diff against</span>
            </h1>

            <p className="mt-8 max-w-[760px] text-lg leading-relaxed text-[var(--text-muted)]">
              Yapword is a daily five-letter word game for web and iPhone. A
              persistent AI character reacts to every guess, carries jokes across
              the board, gives contextual hints, and closes the game with a
              personalized roast. This is how I tested whether lowering its
              reasoning budget changed the part players actually experience.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://apps.apple.com/us/app/yapword-ai-word-game/id6774829903"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[var(--r-sm)] bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] px-6 py-3 font-mono text-[length:var(--fs-nav)] font-medium text-white shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:brightness-110"
              >
                open the iPhone app &#8599;
              </a>
              <a
                href="https://github.com/abouchard11/yapword-voice-eval-case-study"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[var(--r-sm)] border border-[var(--border)] bg-[var(--surface)] px-6 py-3 font-mono text-[length:var(--fs-nav)] font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)]"
              >
                inspect the runnable case study &#8599;
              </a>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--border)] px-6 py-10 md:px-12">
          <div className="mx-auto grid max-w-[var(--content-max)] grid-cols-2 gap-6 md:grid-cols-4 md:gap-12">
            {[
              ["82%", "inference bill attributed to hidden reasoning"],
              ["0", "hidden tokens at the minimal setting"],
              ["5–10×", "latency at the higher settings"],
              ["36", "hint samples with zero detected leaks"],
            ].map(([value, label]) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="font-display text-[30px] font-bold tracking-[-0.02em]">
                  {value}
                </span>
                <span className="max-w-[210px] font-mono text-[length:var(--fs-label)] uppercase leading-relaxed tracking-[0.05em] text-[var(--text-dim)]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className={SECTION}>
          <div className={INNER}>
            <SectionLabel>01 / the product boundary</SectionLabel>
            <h2 className={H2}>Code owns truth. The model owns expression.</h2>

            <p className={P}>
              The model never decides whether a guess is valid, which letters
              match, what the answer is, or whether the player won. A deterministic
              rules engine owns the board, the score, and the outcome. The model
              receives structured game context and turns that truth into character.
            </p>

            <p className={P}>
              That boundary makes the product reliable, but it does not make the
              character easy to evaluate. A funny line on turn two can still lead
              to a flat game if turn five forgets it. The property at risk is not a
              single response. It is the through-line.
            </p>
          </div>
        </section>

        <section className={SECTION}>
          <div className={INNER}>
            <SectionLabel>02 / the production question</SectionLabel>
            <h2 className={H2}>
              Most of the bill was invisible. Removing it was the easy part.
            </h2>

            <p className={P}>
              Roughly 82% of Yapword&apos;s inference bill was hidden reasoning
              tokens: billed output that never reached a player. The configuration
              could be lowered in one line. The real question was whether those
              tokens were buying continuity, timing, or better jokes.
            </p>

            <p className={P}>
              A single-shot A/B test could not answer that. It would compare two
              isolated lines while missing whether the character noticed a repeated
              mistake, referred back to an earlier guess, or escalated the same joke
              through the closing roast.
            </p>

            <div className="mt-10 rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
              <p className="font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--text-dim)]">
                the measured property
              </p>
              <p className="mt-4 max-w-[840px] font-display text-2xl font-bold leading-snug tracking-[-0.02em]">
                Does the character preserve a recognizable, game-specific
                through-line across a complete round when the thinking setting
                changes?
              </p>
            </div>
          </div>
        </section>

        <section className={SECTION}>
          <div className={INNER}>
            <SectionLabel>03 / the evaluation harness</SectionLabel>
            <h2 className={H2}>Walk the whole game, not a bag of prompts.</h2>

            <p className={P}>
              Each arm replays a complete game turn by turn against the production
              prompt builder. Every successful response joins the context for the
              next call, followed by the postgame roast. The only swept variable is
              the model&apos;s thinking setting.
            </p>

            <p className={P}>
              Two scenarios stress continuity in opposite directions: a win where
              one letter remains misplaced until the final guess, and a loss where
              the player opens with the same wrong letter six times. One offers a
              story to escalate; the other tests whether the character recognizes a
              pattern instead of merely reacting to the latest turn.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {invariants.map((item) => (
                <article
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
                  <p className="mt-2.5 text-[length:var(--fs-small)] leading-relaxed text-[var(--text-muted)]">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={SECTION}>
          <div className={INNER}>
            <SectionLabel>04 / measured sweep</SectionLabel>
            <h2 className={H2}>The expensive settings took longer. They were not funnier.</h2>

            <p className={P}>
              A six-turn game produced roughly 170–216 visible tokens. On the paid
              thinking arms, hidden reasoning made up 95–98% of billed output and
              added five to ten times the latency. Higher settings changed the
              imagery, but the small controlled sweep did not show a clear quality
              gain.
            </p>

            <div className="mt-10 overflow-x-auto rounded-[var(--r-md)] border border-[var(--border)]">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-[var(--border)] bg-[var(--surface)]">
                    {[
                      "Setting",
                      "Hidden tokens · win",
                      "Hidden tokens · loss",
                      "Latency · win",
                      "Latency · loss",
                    ].map((heading) => (
                      <th
                        key={heading}
                        className="px-5 py-3 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--text-dim)]"
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sweep.map((row) => (
                    <tr
                      key={row.setting}
                      className="border-b border-[var(--border)] last:border-b-0"
                    >
                      <td className="px-5 py-3.5 font-mono text-[length:var(--fs-small)] text-[var(--text-primary)]">
                        {row.setting}
                      </td>
                      <td className="px-5 py-3.5 font-mono text-[length:var(--fs-small)] text-[var(--text-muted)]">
                        {row.hiddenWin}
                      </td>
                      <td className="px-5 py-3.5 font-mono text-[length:var(--fs-small)] text-[var(--text-muted)]">
                        {row.hiddenLoss}
                      </td>
                      <td className="px-5 py-3.5 font-mono text-[length:var(--fs-small)] text-[var(--text-muted)]">
                        {row.latencyWin}
                      </td>
                      <td className="px-5 py-3.5 font-mono text-[length:var(--fs-small)] text-[var(--text-muted)]">
                        {row.latencyLoss}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 rounded-[var(--r-md)] border border-[var(--accent-blue)]/30 bg-[var(--surface)] p-6 md:p-8">
              <span className="font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--accent-blue)]">
                the through-line survived
              </span>
              <blockquote className="mt-4 max-w-[820px] font-display text-2xl font-bold leading-snug tracking-[-0.02em]">
                &ldquo;Your grid is beginning to look less like a strategy and more
                like a poorly managed petting zoo.&rdquo;
              </blockquote>
              <p className="mt-4 max-w-[760px] text-[length:var(--fs-small)] leading-relaxed text-[var(--text-muted)]">
                At the minimal setting, the line connected RANCH to FAWNS and then
                carried the scene into the next turn. The continuity came from the
                accumulated context and voice system, not a hidden reasoning budget.
              </p>
            </div>
          </div>
        </section>

        <section className={SECTION}>
          <div className={INNER}>
            <SectionLabel>05 / the accuracy-sensitive path</SectionLabel>
            <h2 className={H2}>Hints needed a different test.</h2>

            <p className={P}>
              Most Yapword output is evaluated on taste. A hint is different: the
              answer is present in model context, and the instruction is what stops
              the model from revealing it. That creates a concrete failure with an
              objective check.
            </p>

            <p className={P}>
              The separate benchmark ran three answer profiles across four thinking
              settings and three repetitions: 36 hints. It detected zero whole-word
              leaks and zero unrevealed-letter flags at every setting. Minimal
              thinking produced a hint in 0.9 seconds; high thinking took 8.2 seconds.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ["36", "hint samples"],
                ["0", "whole-answer leaks"],
                ["0.9s", "minimal-setting latency"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6"
                >
                  <span className="font-display text-[30px] font-bold tracking-[-0.02em]">
                    {value}
                  </span>
                  <p className="mt-1 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.05em] text-[var(--text-dim)]">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <p className={P}>
              The screen is deliberately modest. A regex can catch an answer that is
              stated; it cannot determine whether a hint gives the answer away without
              naming it. That remains a human review problem.
            </p>
          </div>
        </section>

        <section className={SECTION}>
          <div className={INNER}>
            <SectionLabel>06 / what the result supports</SectionLabel>
            <h2 className={H2}>
              The result is useful because its boundaries are visible.
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {limits.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6"
                >
                  <h3 className="font-display text-lg font-bold tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[length:var(--fs-small)] leading-relaxed text-[var(--text-muted)]">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>

            <p className={P}>
              The defensible conclusion is narrow: for these two full-game
              scenarios, at three samples per cell, additional hidden reasoning did
              not improve the character&apos;s multi-turn voice enough to justify its
              token and latency cost. That was enough evidence for a production
              decision. It is not a claim about every model, character, or task.
            </p>
          </div>
        </section>

        <section className={SECTION}>
          <div className={INNER}>
            <SectionLabel>07 / public artifact</SectionLabel>
            <h2 className={H2}>The method is executable, not just described.</h2>

            <p className={P}>
              I extracted and sanitized the evaluation design into a public,
              provider-agnostic reference model. It has zero runtime dependencies,
              runs on Node 20+, and tests every invariant without a network or
              credentials. The production prompt, character definition, provider
              wiring, and private analytics remain excluded.
            </p>

            <div className="mt-10 rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6">
              <span className="font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--text-dim)]">
                sources and runnable code
              </span>
              <ul className="mt-4 flex flex-col gap-2.5">
                {sources.map((source) => (
                  <li key={source.href}>
                    <a
                      href={source.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[length:var(--fs-small)] text-[var(--accent-blue)] transition-opacity hover:opacity-80"
                    >
                      {source.label} &#8599;
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://apps.apple.com/us/app/yapword-ai-word-game/id6774829903"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[var(--r-sm)] bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] px-6 py-3 font-mono text-[length:var(--fs-nav)] font-medium text-white transition-all hover:brightness-110"
              >
                play Yapword on iPhone &#8599;
              </a>
              <Link
                href="/work/yapword"
                className="rounded-[var(--r-sm)] border border-[var(--border)] bg-[var(--surface)] px-6 py-3 font-mono text-[length:var(--fs-nav)] font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)]"
              >
                product case study
              </Link>
              <Link
                href="/writing"
                className="font-mono text-[length:var(--fs-small)] text-[var(--accent-blue)] transition-opacity hover:opacity-80"
              >
                all writing &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
