import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { projectList } from "@/data/projects";

export const metadata: Metadata = {
  title: "Alex Bouchard — Forward-Deployed AI Lead · MidnightDev | ReadableByAI, Yapword | $400M CRE",
  description:
    "Embedded AI product builds for operators. Founder @ MidnightDev. Shipped ReadableByAI and Yapword. $400M closed in commercial real estate.",
  alternates: {
    canonical: "/",
  },
};

const reliabilityWork = [
  {
    name: "Gemini reliability proxy",
    href: "https://github.com/abouchard11/gemini-reliability-proxy",
    detail: "Fallback chains, retry budgets, output limits, and denial-of-wallet protection.",
  },
  {
    name: "LLM safety gate",
    href: "https://github.com/abouchard11/llm-safety-gate",
    detail: "Fail-closed classification with quorum voting and per-item degradation.",
  },
  {
    name: "Graphiti + Neo4j operations",
    href: "https://github.com/abouchard11/graphiti-neo4j-ops",
    detail: "Health-driven recovery, safe backups, and local-only networking.",
  },
];

const researchAndOperations = [
  {
    name: "AI citation patterns",
    href: "https://github.com/abouchard11/ai-citation-patterns",
    detail:
      "A dated, source-qualified reference on how answer engines crawl, retrieve, and cite web content.",
  },
  {
    name: "Midnight SEO skills",
    href: "https://github.com/abouchard11/midnight-seo-skills",
    detail:
      "An operational skill suite for audits, topical mapping, indexing, analytics, and search distribution.",
  },
  {
    name: "Independent patent development",
    detail:
      "Completed a provisional patent application package for an independently developed invention, including the specification, prior-art review, examiner brief, and 26 claims, with critique from an Australian patent reviewer.",
  },
];

const organicResults = [
  {
    property: "BuyLandFL",
    href: "https://buylandfl.com",
    result: "51,804 impressions · 198 clicks",
    period: "92-day Search Console export",
    system: "Transactional search and programmatic county-level geography.",
  },
  {
    property: "Methylene Blue Ultra",
    href: "https://methyleneblueultra.com",
    result: "7,746 impressions · 100 clicks",
    period: "28-day Search Console export",
    system: "Research-led topical authority, comparisons, citations, and calculators.",
  },
  {
    property: "Jones Act Calculator",
    href: "https://www.jonesactcalculator.com",
    result: "2,700 impressions · 23 clicks",
    period: "28-day Search Console export",
    system: "Tool-led legal discovery with public methodology and intent-specific pages.",
  },
];

const organicCapabilities = [
  {
    title: "Search architecture",
    detail:
      "Technical SEO, content taxonomies, internal-link systems, programmatic geography, structured data, and indexation controls.",
  },
  {
    title: "AI-answer readiness",
    detail:
      "Entity clarity, source-qualified claims, extractable answers, citation surfaces, freshness signals, and answer-engine research.",
  },
  {
    title: "Owned distribution",
    detail:
      "Editorial properties, App Store positioning, social character accounts, conversion paths, and PostHog telemetry that closes the loop.",
  },
];

const posthogProof = [
  "Five active PostHog project spaces across the portfolio",
  "Dozens of explicit product events spanning web and iOS",
  "Activation funnels, weekly retention, share-loop and referral measurement",
  "Session replay, rage-click diagnosis, fallback health, and release telemetry",
];

const selectedWebSystems = [
  {
    name: "ReadableByAI",
    href: "https://readablebyai.com",
    detail:
      "An AI-crawler visibility system taken from concept to production in 72 hours: active probes, customer-owned monitoring, log analysis, a 661-company benchmark, and a paid verification path.",
  },
  {
    name: "Jones Act Calculator",
    href: "https://www.jonesactcalculator.com",
    detail:
      "An interactive maritime claim-estimation and eligibility resource with public methodology and explicit legal disclaimers.",
  },
  {
    name: "HTX Work Injury",
    href: "https://htxworkinjury.com",
    detail:
      "A Houston industrial-injury information system combining guided qualification, calculation, and public safety data.",
  },
  {
    name: "HTX Permit Fix",
    href: "https://htxpermitfix.com",
    detail:
      "A local-service acquisition system built around urgent permitting intent, guided intake, and recurring organic inbound calls.",
  },
  {
    name: "HTX Foundation Fix",
    href: "https://htxfoundationfix.com",
    detail:
      "A concept-to-live specialized business scaffold built in two days: acquisition, diagnostic, operating, financing, and local-discovery systems—not claimed contractor history.",
  },
  {
    name: "WordGameAI",
    href: "https://wordgameai.com",
    detail:
      "An editorial comparison and methodology property that routes qualified discovery into the Yapword product ecosystem.",
  },
];

const progression = [
  {
    date: "Dec 2025",
    title: "Six AI perspectives challenged one forecast",
    detail:
      "Used deliberately different roles to stress-test a real event model. They found optimistic revenue assumptions; a later audit found a second error in how the source data was defined.",
  },
  {
    date: "Jan–Feb 2026",
    title: "Persistent agents created new failure modes",
    detail:
      "Gave agents memory, follow-up schedules, and delegated tasks. The result was useful, but made ownership and human review more important—not less.",
  },
  {
    date: "Mar 2026",
    title: "A 21-role simulation exposed bad handoffs",
    detail:
      "Simulated a small company to see where product, engineering, legal, and growth teams lost context. The failures pointed to shared state, written decisions, and explicit owners.",
  },
  {
    date: "Mid-2026",
    title: "The lessons became product rules",
    detail:
      "In Yapword, That’s My Best, and Yapoleon’s Court, models generate character and content; people and deterministic code control scores, confirmed answers, safety, and spend.",
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      <main className="flex-1">
        <section className="bg-dotgrid px-6 pb-14 pt-14 md:px-12 md:pb-20 md:pt-24">
          <div className="mx-auto max-w-[var(--content-max)]">
            <p className="mb-6 flex items-center gap-2 font-mono text-[11px] lowercase tracking-[0.08em] text-[var(--accent-blue)]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--success)]" />
              Houston, Texas · forward-deployed AI lead · founder @ MidnightDev
            </p>

            <h1 className="max-w-[920px] font-display text-[length:var(--fs-h1)] font-bold leading-[1.05] tracking-[-0.035em]">
              I build AI products—
              <br />
              and the systems that get them discovered, measured, and used.
            </h1>

            <p className="mt-8 max-w-[820px] text-lg leading-relaxed text-[var(--text-muted)] md:text-xl">
              I&apos;m Alex Bouchard, a forward-deployed AI lead and AI-native
              founder-operator. At MidnightDev, I am the sole human
              accountable for every function and every production decision—from
              thesis, business model, brand, and UX through AI systems, full-stack
              engineering, testing, security, deployment, growth, analytics, and
              ongoing operations. Before software, I specialized in repositioning{" "}
              <a
                href="https://www.linkedin.com/in/alex-bouchard-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[var(--text-dim)] underline-offset-4 transition-colors hover:text-[var(--text-primary)] hover:decoration-[var(--text-muted)]"
              >
                Class C shopping centers
              </a>{" "}
              and contributed to 85–90 shopping-center transactions totaling
              roughly $400 million.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <a
                href="https://www.linkedin.com/in/alex-bouchard-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[var(--r-sm)] border border-[var(--border)] bg-[var(--surface)] p-4 transition-colors hover:border-[var(--border-hover)]"
              >
                <p className="font-display text-2xl font-bold tracking-[-0.03em]">85–90</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.06em] text-[var(--text-muted)]">
                  shopping centers · Class C repositioning
                </p>
              </a>
              <Link
                href="/work/thatsmybest"
                className="rounded-[var(--r-sm)] border border-[var(--border)] bg-[var(--surface)] p-4 transition-colors hover:border-[var(--border-hover)]"
              >
                <p className="font-display text-2xl font-bold tracking-[-0.03em]">≈2 weeks</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.06em] text-[var(--text-muted)]">
                  concept to App Store approval
                </p>
              </Link>
              <a
                href="https://readablebyai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[var(--r-sm)] border border-[var(--border)] bg-[var(--surface)] p-4 transition-colors hover:border-[var(--border-hover)]"
              >
                <p className="font-display text-2xl font-bold tracking-[-0.03em]">72 hours</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.06em] text-[var(--text-muted)]">
                  ReadableByAI · concept to production
                </p>
              </a>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/services"
                className="rounded-[var(--r-sm)] bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] px-6 py-3 text-center font-mono text-[length:var(--fs-nav)] font-medium text-white shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:brightness-110"
              >
                work with MidnightDev
              </Link>
              <Link
                href="#work"
                className="rounded-[var(--r-sm)] border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-center font-mono text-[length:var(--fs-nav)] font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)]"
              >
                inspect the work
              </Link>
            </div>

            <p className="mt-10 max-w-[760px] border-l-2 border-[var(--accent-purple)] pl-4 text-[15px] leading-relaxed text-[var(--text-muted)]">
              Operating principle:{" "}
              <strong className="font-semibold text-[var(--text-primary)]">
                Generate boldly. Validate cheaply. Kill ruthlessly. Scale what survives.
              </strong>
            </p>
          </div>
        </section>

        <section id="work" className="px-6 py-14 md:px-12 md:py-20">
          <div className="mx-auto max-w-[var(--content-max)]">
            <p className="mb-3 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
              Featured work
            </p>
            <div className="mb-10 grid gap-4 md:grid-cols-[1fr_0.7fr] md:items-end">
              <h2 className="font-display text-[length:var(--fs-h2)] font-bold tracking-[-0.03em]">
                Products that shipped—and the engineering evidence behind them.
              </h2>
              <p className="text-[15px] leading-relaxed text-[var(--text-muted)]">
                The products are different by design. The case studies explain
                where the model helps, where it fails, and what the code keeps
                under control.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {projectList.map((project) => (
                <article
                  key={project.slug}
                  className="group relative overflow-hidden rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-hover)] focus-within:border-[var(--border-hover)]"
                >
                  <div className="relative h-[190px] overflow-hidden sm:h-[260px]">
                    <Image
                      src={project.screenshot}
                      alt={project.screenshotAlt}
                      width={640}
                      height={400}
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-[16px] font-semibold">
                        <Link
                          href={`/work/${project.slug}`}
                          className="after:absolute after:inset-0 after:content-['']"
                        >
                          {project.name}
                        </Link>
                      </h3>
                      <span
                        aria-hidden="true"
                        className="font-mono text-[10px] text-[var(--accent-blue)]"
                      >
                        case study →
                      </span>
                    </div>
                    <p className="mt-2 text-[13px] leading-relaxed text-[var(--text-muted)]">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-[4px] border border-[var(--border)] bg-[var(--bg)] px-2 py-0.5 font-mono text-[10px] text-[var(--text-muted)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="growth"
          className="border-t border-[var(--border)] px-6 py-14 md:px-12 md:py-20"
        >
          <div className="mx-auto max-w-[var(--content-max)]">
            <p className="mb-3 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
              Organic growth systems
            </p>
            <div className="grid gap-6 md:grid-cols-[1fr_0.7fr] md:items-end">
              <h2 className="font-display text-[length:var(--fs-h2)] font-bold tracking-[-0.03em]">
                I build the product. Then I engineer how it gets found.
              </h2>
              <p className="text-[15px] leading-relaxed text-[var(--text-muted)]">
                A solo-built and operated portfolio across health research, real
                estate, legal information, local services, and consumer products.
                Every result below is organic—no paid acquisition.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {organicResults.map((item) => (
                <a
                  key={item.property}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6 transition-all hover:-translate-y-0.5 hover:border-[var(--border-hover)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-bold tracking-[-0.02em]">
                      {item.property}
                    </h3>
                    <span className="font-mono text-xs text-[var(--accent-blue)]">↗</span>
                  </div>
                  <p className="mt-5 font-mono text-[15px] font-semibold text-[var(--text-primary)]">
                    {item.result}
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.06em] text-[var(--text-dim)]">
                    {item.period}
                  </p>
                  <p className="mt-4 text-[13px] leading-relaxed text-[var(--text-muted)]">
                    {item.system}
                  </p>
                </a>
              ))}
            </div>

            <p className="mt-4 font-mono text-[10px] leading-relaxed text-[var(--text-dim)]">
              Source: first-party Google Search Console exports supplied August 2,
              2026. Impressions and clicks are visibility measures, not revenue claims.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {organicCapabilities.map((item, index) => (
                <div
                  key={item.title}
                  className="border-l border-[var(--border)] pl-5"
                >
                  <p className="font-mono text-[10px] text-[var(--accent-blue)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[var(--text-muted)]">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
              <div className="grid gap-6 md:grid-cols-[0.75fr_1.25fr] md:items-start">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--accent-blue)]">
                    PostHog in production
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.03em]">
                    Instrument the decision—not merely the pageview.
                  </h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-[var(--text-muted)]">
                    The measurement system connects product behavior, acquisition,
                    reliability, and release decisions across the operated portfolio.
                  </p>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {posthogProof.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[13px] leading-relaxed text-[var(--text-muted)]"
                    >
                      <span className="mt-[8px] inline-block h-1 w-1 shrink-0 rounded-full bg-[var(--accent-purple)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="https://github.com/abouchard11/ai-citation-patterns"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[var(--accent-blue)] transition-opacity hover:opacity-80"
              >
                inspect AI citation research ↗
              </a>
              <Link
                href="/build-room#distribution"
                className="font-mono text-xs text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                inspect the distribution system →
              </Link>
              <a
                href="https://x.com/YapoleonGreater"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                operated social surface: @YapoleonGreater ↗
              </a>
            </div>
          </div>
        </section>

        <section
          id="systems"
          className="border-t border-[var(--border)] px-6 py-14 md:px-12 md:py-20"
        >
          <div className="mx-auto max-w-[var(--content-max)]">
            <p className="mb-3 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
              Reliability and safety
            </p>
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
              <div>
                <h2 className="font-display text-[length:var(--fs-h2)] font-bold tracking-[-0.03em]">
                  The model can generate content. It cannot own truth, scoring,
                  safety, or spend.
                </h2>
                <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-[var(--text-muted)]">
                  Those boundaries appear in the apps and in small public reference
                  systems for model fallback, content safety, and graph operations.
                </p>
              </div>

              <div className="divide-y divide-[var(--border)] rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)]">
                {reliabilityWork.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-5 transition-colors hover:bg-[var(--surface-hover)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-mono text-sm font-semibold text-[var(--text-primary)]">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-[13px] leading-relaxed text-[var(--text-muted)]">
                          {item.detail}
                        </p>
                      </div>
                      <span className="font-mono text-xs text-[var(--accent-blue)]">↗</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="breadth"
          className="border-t border-[var(--border)] px-6 py-14 md:px-12 md:py-20"
        >
          <div className="mx-auto max-w-[var(--content-max)]">
            <p className="mb-3 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
              Research and operating systems
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="font-display text-[length:var(--fs-h2)] font-bold tracking-[-0.03em]">
                  Public research, reusable infrastructure, and commercial systems.
                </h2>
                <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-[var(--text-muted)]">
                  The portfolio extends beyond consumer AI: citation research,
                  technical SEO tooling, independent invention work, and focused
                  systems built around real commercial intent.
                </p>
                <div className="mt-6 divide-y divide-[var(--border)] rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)]">
                  {researchAndOperations.map((item) => {
                    const content = (
                      <>
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="font-mono text-sm font-semibold text-[var(--text-primary)]">
                            {item.name}
                          </h3>
                          {item.href && (
                            <span className="font-mono text-xs text-[var(--accent-blue)]">
                              ↗
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-[13px] leading-relaxed text-[var(--text-muted)]">
                          {item.detail}
                        </p>
                      </>
                    );

                    return item.href ? (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-5 transition-colors hover:bg-[var(--surface-hover)]"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={item.name} className="p-5">
                        {content}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="font-mono text-[length:var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
                  selected commercial systems
                </p>
                <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-[var(--text-muted)]">
                  Owned properties that combine useful tools, disciplined
                  information architecture, organic acquisition, and a defined
                  conversion path.
                </p>
                <div className="mt-6 divide-y divide-[var(--border)] rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)]">
                  {selectedWebSystems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-5 transition-colors hover:bg-[var(--surface-hover)]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-mono text-sm font-semibold text-[var(--text-primary)]">
                          {item.name}
                        </h3>
                        <span className="font-mono text-xs text-[var(--accent-blue)]">
                          ↗
                        </span>
                      </div>
                      <p className="mt-1 text-[13px] leading-relaxed text-[var(--text-muted)]">
                        {item.detail}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="story"
          className="border-t border-[var(--border)] px-6 py-14 md:px-12 md:py-20"
        >
          <div className="mx-auto max-w-[var(--content-max)]">
            <p className="mb-3 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
              From experiments to product rules
            </p>
            <h2 className="max-w-[760px] font-display text-[length:var(--fs-h2)] font-bold tracking-[-0.03em]">
              Each experiment changed what I was willing to let a model control.
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {progression.map((item) => (
                <div
                  key={item.date}
                  className="rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--accent-blue)]">
                    {item.date}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-bold tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[var(--text-muted)]">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="border-t border-[var(--border)] px-6 py-14 md:px-12 md:py-20"
        >
          <div className="mx-auto grid max-w-[var(--content-max)] gap-10 md:grid-cols-[auto_1fr] md:gap-14">
            <Image
              src="/headshot.jpg"
              alt="Alex Bouchard"
              width={112}
              height={112}
              className="h-28 w-28 rounded-full object-cover"
            />
            <div>
              <p className="font-mono text-[length:var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
                Background
              </p>
              <h2 className="mt-3 font-display text-[length:var(--fs-h2)] font-bold tracking-[-0.03em]">
                I did not take the usual route into AI.
              </h2>
              <div className="mt-5 grid max-w-[900px] gap-5 text-[15px] leading-relaxed text-[var(--text-muted)] md:grid-cols-2">
                <p>
                  Before MidnightDev, I specialized in repositioning Class C
                  shopping centers and contributed to 85–90 shopping-center
                  transactions totaling roughly $400 million. I worked across
                  acquisitions, dispositions, leasing, and portfolio strategy—finding
                  underperforming retail assets, diagnosing the broken economics, and
                  creating value through disciplined execution.
                </p>
                <p>
                  That experience is why I treat model output as evidence, not
                  authority—and why I model the business, acquisition path, and
                  downside before calling a build complete. In my products,
                  people and deterministic code still control truth, scores,
                  safety, and spend.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-[var(--border)] px-6 py-14 md:px-12 md:py-20"
        >
          <div className="mx-auto grid max-w-[var(--content-max)] gap-12 md:grid-cols-2">
            <div>
              <p className="mb-3 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
                Contact
              </p>
              <h2 className="font-display text-[length:var(--fs-h2)] font-bold tracking-[-0.03em]">
                Have a product, growth, or operating problem worth attacking?
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-[var(--text-muted)]">
                MidnightDev takes a limited number of consulting engagements,
                embedded product builds, and strategic partnerships. I am also open
                to unusually strong forward-deployed AI leadership, AI-native
                founder-operator, and special-projects roles.
              </p>
              <div className="mt-6 flex flex-col gap-2 font-mono text-[length:var(--fs-nav)]">
                <a
                  href="mailto:alex@midnightdev.dev"
                  className="text-[var(--accent-blue)] transition-colors hover:text-[var(--text-primary)]"
                >
                  alex@midnightdev.dev
                </a>
                <span className="text-[var(--text-dim)]">
                  Houston, Texas · willing to relocate
                </span>
              </div>
              <Link
                href="/services"
                className="mt-8 inline-block font-mono text-xs text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                consulting services →
              </Link>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
