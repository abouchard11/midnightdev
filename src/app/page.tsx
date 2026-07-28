import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { projectList } from "@/data/projects";

export const metadata: Metadata = {
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

const selectedWebSystems = [
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
              Houston, Texas · open to applied AI product roles
            </p>

            <h1 className="max-w-[920px] font-display text-[var(--fs-h1)] font-bold leading-[1.05] tracking-[-0.035em]">
              I build consumer AI products—
              <br />
              and put hard limits on what the model controls.
            </h1>

            <p className="mt-8 max-w-[760px] text-lg leading-relaxed text-[var(--text-muted)] md:text-xl">
              I&apos;m Alex Bouchard, founder of MidnightDev. Before software, I
              contributed to nearly $500 million in commercial real estate
              transactions. Now I ship AI games on web and iOS. The common thread
              is judgment under uncertainty: check the source data, define who has
              authority, and own the result.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#work"
                className="rounded-[var(--r-sm)] bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] px-6 py-3 text-center font-mono text-[var(--fs-nav)] font-medium text-white shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:brightness-110"
              >
                view my work
              </Link>
              <a
                href="https://github.com/abouchard11"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[var(--r-sm)] border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-center font-mono text-[var(--fs-nav)] font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)]"
              >
                view GitHub
              </a>
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
            <p className="mb-3 font-mono text-[var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
              Featured work
            </p>
            <div className="mb-10 grid gap-4 md:grid-cols-[1fr_0.7fr] md:items-end">
              <h2 className="font-display text-[var(--fs-h2)] font-bold tracking-[-0.03em]">
                Three live AI products—and the engineering evidence behind them.
              </h2>
              <p className="text-[15px] leading-relaxed text-[var(--text-muted)]">
                The products are different by design. The case studies explain
                where the model helps, where it fails, and what the code keeps
                under control.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {projectList.map((project) => (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="group overflow-hidden rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-hover)]"
                >
                  <div className="relative h-[190px] overflow-hidden sm:h-[260px]">
                    <Image
                      src={project.screenshot}
                      alt=""
                      width={640}
                      height={400}
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-[16px] font-semibold">{project.name}</h3>
                      <span className="font-mono text-[10px] text-[var(--accent-blue)]">
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
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section
          id="systems"
          className="border-t border-[var(--border)] px-6 py-14 md:px-12 md:py-20"
        >
          <div className="mx-auto max-w-[var(--content-max)]">
            <p className="mb-3 font-mono text-[var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
              Reliability and safety
            </p>
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
              <div>
                <h2 className="font-display text-[var(--fs-h2)] font-bold tracking-[-0.03em]">
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
            <p className="mb-3 font-mono text-[var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
              Additional work
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="font-display text-[var(--fs-h2)] font-bold tracking-[-0.03em]">
                  Research, IP, and smaller systems that still matter.
                </h2>
                <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-[var(--text-muted)]">
                  Not every useful piece of work needs a flagship case study.
                  These projects cover AI citation research, technical SEO,
                  independent invention work, and focused web tools.
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
                <p className="font-mono text-[var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
                  selected websites
                </p>
                <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-[var(--text-muted)]">
                  Smaller web products that demonstrate interactive tools,
                  information architecture, public methodology, and search
                  discipline.
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
            <p className="mb-3 font-mono text-[var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
              From experiments to product rules
            </p>
            <h2 className="max-w-[760px] font-display text-[var(--fs-h2)] font-bold tracking-[-0.03em]">
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
              <p className="font-mono text-[var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
                Background
              </p>
              <h2 className="mt-3 font-display text-[var(--fs-h2)] font-bold tracking-[-0.03em]">
                I did not take the usual route into AI.
              </h2>
              <div className="mt-5 grid max-w-[900px] gap-5 text-[15px] leading-relaxed text-[var(--text-muted)] md:grid-cols-2">
                <p>
                  Before MidnightDev, I led acquisitions, dispositions, leasing,
                  and portfolio strategy in commercial real estate. The work
                  demanded disciplined underwriting, careful diligence, and clear
                  decisions under uncertainty.
                </p>
                <p>
                  That experience is why I treat model output as evidence, not
                  authority. In my products, people and deterministic code still
                  control truth, scores, safety, and spend.
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
              <p className="mb-3 font-mono text-[var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
                Contact
              </p>
              <h2 className="font-display text-[var(--fs-h2)] font-bold tracking-[-0.03em]">
                Interested in the work?
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-[var(--text-muted)]">
                I&apos;m open to applied-AI product roles, product partnerships,
                and selective consulting engagements.
              </p>
              <div className="mt-6 flex flex-col gap-2 font-mono text-[var(--fs-nav)]">
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
