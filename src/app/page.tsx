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
      "Developed an invention, specification, prior-art review, examiner brief, and 26-claim provisional application package, with critique from an Australian patent reviewer.",
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

const chronology = [
  {
    date: "Dec 2025",
    title: "Adversarial AI boardroom",
    detail:
      "Six synthetic decision lenses attacked a real Houston festival forecast and exposed revenue fantasy.",
  },
  {
    date: "Jan–Feb 2026",
    title: "Persistent-agent experiments",
    detail:
      "Configured and modified an OpenClaw-era workspace with memory, heartbeats, delegated checks, and human review.",
  },
  {
    date: "Mar 2026",
    title: "Twenty-one-role synthetic company",
    detail:
      "Designed the Diggs lab hierarchy: executive review, specialist squads, an event spine, and a mission ledger.",
  },
  {
    date: "Mid-2026",
    title: "Production controls",
    detail:
      "Shipped consumer apps with deterministic state, creator-confirmed truth, safety gates, analytics, and spend limits.",
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      <main className="flex-1">
        <section className="bg-dotgrid px-6 pb-16 pt-16 md:px-12 md:pb-24 md:pt-[112px]">
          <div className="mx-auto max-w-[var(--content-max)]">
            <p className="mb-6 flex items-center gap-2 font-mono text-[11px] lowercase tracking-[0.08em] text-[var(--accent-blue)]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--success)]" />
              open_to_applied_ai_product_roles
            </p>

            <h1 className="max-w-[980px] font-display text-[var(--fs-hero)] font-extrabold leading-[0.98] tracking-[-0.045em]">
              I ship AI products
              <br />
              <span className="gradient-text">that hold up</span>
              <br />
              in public.
            </h1>

            <p className="mt-8 max-w-[660px] text-lg leading-relaxed text-[var(--text-muted)] md:text-xl">
              I&apos;m Alex Bouchard, a Houston-based applied AI product engineer
              and solo founder. I build where model behavior, product experience,
              safety, cost, and reliability collide.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#work"
                className="rounded-[var(--r-sm)] bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] px-6 py-3 text-center font-mono text-[var(--fs-nav)] font-medium text-white shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:brightness-110"
              >
                see shipped systems
              </Link>
              <a
                href="https://github.com/abouchard11"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[var(--r-sm)] border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-center font-mono text-[var(--fs-nav)] font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)]"
              >
                inspect the evidence
              </a>
            </div>

            <blockquote className="mt-14 max-w-[860px] border-l-2 border-[var(--accent-purple)] pl-5 font-display text-[clamp(20px,2.5vw,32px)] font-bold leading-tight tracking-[-0.02em]">
              Generate boldly. Validate cheaply. Kill ruthlessly. Scale what survives.
            </blockquote>
          </div>
        </section>

        <section className="border-y border-[var(--border)] px-6 py-10 md:px-12">
          <div className="mx-auto grid max-w-[var(--content-max)] grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "2", label: "consumer AI apps on iOS" },
              { value: "Web + iOS", label: "publicly shipped surfaces" },
              { value: "100K", label: "seeded forecast trials" },
              { value: "Solo", label: "human product owner" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-display text-[28px] font-bold tracking-[-0.02em]">
                  {stat.value}
                </span>
                <span className="max-w-[160px] font-mono text-[var(--fs-label)] uppercase tracking-[0.05em] text-[var(--text-dim)]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="px-6 py-14 md:px-12 md:py-20">
          <div className="mx-auto max-w-[var(--content-max)]">
            <p className="mb-3 font-mono text-[var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
              <span className="gradient-text">01</span> proof, not promises
            </p>
            <div className="mb-10 grid gap-4 md:grid-cols-[1fr_0.7fr] md:items-end">
              <h2 className="font-display text-[var(--fs-h2)] font-bold tracking-[-0.03em]">
                Shipped products and reproducible engineering evidence.
              </h2>
              <p className="text-[15px] leading-relaxed text-[var(--text-muted)]">
                The products show what users touch. The public case studies show
                the controls, tradeoffs, failures, and judgment underneath them.
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
              <span className="gradient-text">02</span> reliability primitives
            </p>
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
              <div>
                <h2 className="font-display text-[var(--fs-h2)] font-bold tracking-[-0.03em]">
                  Models suggest. Systems decide.
                </h2>
                <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-[var(--text-muted)]">
                  The useful work is not hiding a prompt behind a button. It is
                  deciding which outputs can affect state, what must be confirmed
                  by a human, when the system fails closed, and how much failure
                  is allowed to cost.
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
              <span className="gradient-text">03</span> research, IP, and commercial systems
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="font-display text-[var(--fs-h2)] font-bold tracking-[-0.03em]">
                  The work extends beyond product cards.
                </h2>
                <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-[var(--text-muted)]">
                  Research, operating systems, and invention work belong in the
                  evidence map without pretending they are shipped consumer apps.
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
                  selected commercial systems
                </p>
                <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-[var(--text-muted)]">
                  Smaller web systems that demonstrate interactive tools,
                  information architecture, and search discipline. They are
                  supporting evidence, not inflated into flagship case studies.
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
              <span className="gradient-text">04</span> chronological evolution
            </p>
            <h2 className="max-w-[760px] font-display text-[var(--fs-h2)] font-bold tracking-[-0.03em]">
              From synthetic debate to production authority boundaries.
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {chronology.map((item) => (
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
                <span className="gradient-text">05</span> operator turned builder
              </p>
              <h2 className="mt-3 font-display text-[var(--fs-h2)] font-bold tracking-[-0.03em]">
                Product judgment with commercial scar tissue.
              </h2>
              <div className="mt-5 grid max-w-[900px] gap-5 text-[15px] leading-relaxed text-[var(--text-muted)] md:grid-cols-2">
                <p>
                  Before shipping AI products, I led acquisitions, dispositions,
                  leasing, and portfolio decisions in commercial real estate. That
                  background trained the reflex I now bring to software: define the
                  decision, reconcile the numbers, and distrust a beautiful model
                  that cannot survive diligence.
                </p>
                <p>
                  Founder of MidnightDev in Houston, Texas. My operating rule is
                  simple: models propose and challenge; explicit authority
                  boundaries, human confirmation, and machine-checkable invariants
                  decide what ships.
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
                <span className="gradient-text">06</span> contact
              </p>
              <h2 className="font-display text-[var(--fs-h2)] font-bold tracking-[-0.03em]">
                Put me near a hard product problem.
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-[var(--text-muted)]">
                I&apos;m open to applied-AI product engineering roles, founder-level
                collaborations, and selective consulting where the outcome matters
                more than the ceremony.
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
                looking for consulting services? →
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
