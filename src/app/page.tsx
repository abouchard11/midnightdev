import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const projects = [
  {
    name: "StackD Workforce",
    url: "stackdworkforce.com",
    description:
      "Contractor marketplace for heavy industry. Matching, payments, compliance.",
    stack: ["next.js", "supabase", "stripe"],
    gradient: "from-[#0F1923] to-[#162033]",
  },
  {
    name: "BuyLandFL",
    url: "buylandfl.com",
    description:
      "Florida land sales platform. Property listings, lead gen, owner financing.",
    stack: ["next.js", "react", "vercel"],
    gradient: "from-[#0A1F0A] to-[#132813]",
  },
  {
    name: "Houston Lawyer List",
    url: "houstonlawyerlist.com",
    description:
      "Legal directory. Attorney profiles, practice areas, lead generation.",
    stack: ["next.js", "seo", "vercel"],
    gradient: "from-[#1A0F0A] to-[#231813]",
  },
  {
    name: "HTX Dental Implants",
    url: "htxdentalimplants.com",
    description:
      "Dental lead generation. Provider profiles, procedure info, appointment booking.",
    stack: ["next.js", "react", "vercel"],
    gradient: "from-[#0A0F1A] to-[#131823]",
  },
  {
    name: "Jones Act Calculator",
    url: "jonesactcalculator.com",
    description:
      "Maritime injury calculator. Case value estimation, attorney matching.",
    stack: ["next.js", "typescript", "vercel"],
    gradient: "from-[#1A1A0A] to-[#232313]",
  },
  {
    name: "Methylene Blue Ultra",
    url: "methyleneblueultra.com",
    description:
      "Supplement e-commerce. Product education, waitlist, pre-orders.",
    stack: ["next.js", "stripe", "vercel"],
    gradient: "from-[#0A0A1A] to-[#131323]",
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      <main className="flex-1">
        {/* Hero */}
        <section className="px-6 pt-20 pb-16 md:px-12 md:pt-28 md:pb-20">
          <div className="mx-auto max-w-[1200px]">
            <p className="mb-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--accent-blue)]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
              accepting projects for Q3 2026
            </p>

            <h1 className="font-display text-[clamp(42px,6vw,72px)] font-extrabold leading-[1.0] tracking-[-0.04em]">
              Building
              <br />
              <span className="bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] bg-clip-text text-transparent">
                platforms
              </span>
              <br />
              that ship.
            </h1>

            <p className="mt-6 max-w-[520px] font-body text-lg leading-relaxed text-[var(--text-muted)]">
              Full-stack development for startups and businesses. Next.js, React,
              Supabase, Stripe. From contractor marketplaces to real estate tools
              to legal calculators.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="#work"
                className="rounded-[var(--radius-sm)] bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] px-6 py-3 font-mono text-[13px] font-medium text-white transition-opacity hover:opacity-90"
              >
                see the work
              </Link>
              <Link
                href="#contact"
                className="rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface)] px-6 py-3 font-mono text-[13px] font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--text-dim)] hover:bg-[var(--surface-hover)]"
              >
                start a project
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-[var(--border)] px-6 py-10 md:px-12">
          <div className="mx-auto flex max-w-[1200px] flex-wrap gap-12 md:gap-16">
            {[
              { value: "8+", label: "production platforms" },
              { value: "2026", label: "shipping since" },
              { value: "Next.js", label: "primary stack" },
              { value: "Vercel", label: "deployed on" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span className="font-display text-[28px] font-bold tracking-[-0.02em]">
                  {stat.value}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.05em] text-[var(--text-dim)]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio */}
        <section id="work" className="px-6 py-16 md:px-12 md:py-20">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-8 flex items-baseline justify-between">
              <h2 className="font-display text-[32px] font-bold tracking-[-0.03em]">
                Selected work
              </h2>
              <span className="font-mono text-xs text-[var(--text-dim)]">
                {projects.length} projects
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <a
                  key={project.url}
                  href={`https://${project.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group overflow-hidden rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] transition-all hover:-translate-y-0.5 hover:border-[var(--text-dim)]"
                >
                  <div
                    className={`flex h-[180px] items-center justify-center bg-gradient-to-br ${project.gradient}`}
                  >
                    <span className="font-mono text-xs text-[var(--text-dim)] transition-colors group-hover:text-[var(--text-muted)]">
                      {project.url}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-body text-[15px] font-semibold">
                      {project.name}
                    </h3>
                    <p className="mt-1 font-body text-[13px] leading-snug text-[var(--text-muted)]">
                      {project.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
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
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="border-t border-[var(--border)] px-6 py-16 md:px-12 md:py-20"
        >
          <div className="mx-auto max-w-[1200px]">
            <div className="section-label mb-8 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--text-dim)]">
              <span className="bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] bg-clip-text text-transparent">
                services
              </span>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  title: "SaaS & Platform Development",
                  desc: "Full-stack platforms from zero to production. Auth, payments, dashboards, APIs. Built on Next.js, Supabase, and Stripe.",
                },
                {
                  title: "Lead Generation Sites",
                  desc: "High-converting sites for local businesses. SEO-optimized, fast, with built-in contact forms and analytics.",
                },
                {
                  title: "E-Commerce",
                  desc: "Product pages, checkout flows, inventory management. Stripe-powered with subscription and one-time payment support.",
                },
                {
                  title: "AI Integration",
                  desc: "Claude, GPT, and custom AI features wired into production apps. Chat interfaces, content generation, automation.",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-6"
                >
                  <h3 className="font-display text-lg font-bold">
                    {service.title}
                  </h3>
                  <p className="mt-2 font-body text-[15px] leading-relaxed text-[var(--text-muted)]">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="border-t border-[var(--border)] px-6 py-16 md:px-12 md:py-20"
        >
          <div className="mx-auto max-w-[1200px]">
            <h2 className="font-display text-[clamp(32px,4vw,48px)] font-bold tracking-[-0.03em]">
              Let&apos;s build something.
            </h2>
            <p className="mt-4 max-w-md font-body text-lg text-[var(--text-muted)]">
              Have a project in mind? Reach out and let&apos;s talk about what
              you need.
            </p>
            <a
              href="mailto:alex@midnightdev.dev"
              className="mt-6 inline-block rounded-[var(--radius-sm)] bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] px-6 py-3 font-mono text-[13px] font-medium text-white transition-opacity hover:opacity-90"
            >
              alex@midnightdev.dev
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
