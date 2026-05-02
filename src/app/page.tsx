import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";

const projects = [
  {
    name: "Methylene Blue Ultra",
    slug: "methyleneblueultra",
    url: "methyleneblueultra.com",
    description:
      "Supplement e-commerce. Product education, waitlist, pre-orders.",
    stack: ["next.js", "stripe", "vercel"],
    screenshot: "/screenshots/methyleneblueultra.png",
  },
  {
    name: "Jones Act Calculator",
    slug: "jonesactcalculator",
    url: "jonesactcalculator.com",
    description:
      "Maritime injury calculator. Case value estimation, attorney matching.",
    stack: ["next.js", "typescript", "vercel"],
    screenshot: "/screenshots/jonesactcalculator.png",
  },
  {
    name: "HTX Permit Fix",
    slug: "htxpermitfix",
    url: "htxpermitfix.com",
    description:
      "Permit expediting for Houston contractors. Lead gen, service matching.",
    stack: ["next.js", "react", "vercel"],
    screenshot: "/screenshots/htxpermitfix.png",
  },
  {
    name: "StackD Workforce",
    slug: "stackdworkforce",
    url: "stackdworkforce.com",
    description:
      "Contractor marketplace for heavy industry. Matching, payments, compliance.",
    stack: ["next.js", "supabase", "stripe"],
    screenshot: "/screenshots/stackdworkforce.png",
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-dotgrid px-6 pt-24 pb-20 md:px-12 md:pt-[120px] md:pb-[100px]">
          <div className="mx-auto max-w-[var(--content-max)]">
            <p className="mb-6 flex items-center gap-2 font-mono text-[11px] lowercase tracking-[0.08em] text-[var(--accent-blue)]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--success)]" />
              accepting_projects_q3_2026
            </p>

            <h1 className="font-display text-[var(--fs-hero)] font-extrabold leading-[1.0] tracking-[-0.04em]">
              Building
              <br />
              <span className="gradient-text">
                platforms
              </span>
              <br />
              that ship.
            </h1>

            <p className="mt-8 max-w-[520px] text-lg leading-relaxed text-[var(--text-muted)]">
              Full-stack development for startups and businesses in Houston and
              beyond. Next.js, React, Supabase, Stripe. From contractor
              marketplaces to real estate tools to legal calculators.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <Link
                href="#work"
                className="rounded-[var(--r-sm)] bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] px-6 py-3 font-mono text-[var(--fs-nav)] font-medium text-white shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:brightness-110"
              >
                see the work
              </Link>
              <Link
                href="#contact"
                className="rounded-[var(--r-sm)] border border-[var(--border)] bg-[var(--surface)] px-6 py-3 font-mono text-[var(--fs-nav)] font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)]"
              >
                start a project
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-[var(--border)] px-6 py-10 md:px-12">
          <div className="mx-auto flex max-w-[var(--content-max)] flex-wrap gap-12 md:gap-16">
            {[
              { value: "8+", label: "production platforms" },
              { value: "Houston", label: "based in texas" },
              { value: "Next.js", label: "primary stack" },
              { value: "Vercel", label: "deployed on" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span className="font-display text-[28px] font-bold tracking-[-0.02em]">
                  {stat.value}
                </span>
                <span className="font-mono text-[var(--fs-label)] uppercase tracking-[0.05em] text-[var(--text-dim)]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio */}
        <section id="work" className="px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-[var(--content-max)]">
            <p className="mb-3 font-mono text-[var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
              <span className="gradient-text">01</span> selected work
            </p>
            <div className="mb-10 flex items-baseline justify-between">
              <h2 className="font-display text-[var(--fs-h2)] font-bold tracking-[-0.03em]">
                Selected platforms, shipped to production.
              </h2>
              <span className="hidden font-mono text-xs text-[var(--text-dim)] md:inline">
                {projects.length} projects
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="group overflow-hidden rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-hover)]"
                >
                  <div className="relative h-[180px] overflow-hidden">
                    <Image
                      src={project.screenshot}
                      alt={project.name}
                      width={640}
                      height={400}
                      className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-[15px] font-semibold">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-[13px] leading-snug text-[var(--text-muted)]">
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
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="border-t border-[var(--border)] px-6 py-16 md:px-12 md:py-24"
        >
          <div className="mx-auto max-w-[var(--content-max)]">
            <p className="mb-3 font-mono text-[var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
              <span className="gradient-text">02</span> services
            </p>
            <h2 className="mb-10 font-display text-[var(--fs-h2)] font-bold tracking-[-0.03em]">
              From zero to production.
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
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
                  className="flex flex-col rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--border-hover)]"
                >
                  <h3 className="font-display text-lg font-bold">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-[var(--text-muted)]">
                    {service.desc}
                  </p>
                  <Link
                    href="#contact"
                    className="mt-4 inline-block font-mono text-[var(--fs-nav)] text-[var(--accent-blue)] transition-colors hover:text-[var(--text-primary)]"
                  >
                    get a quote &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="border-t border-[var(--border)] px-6 py-16 md:px-12 md:py-24"
        >
          <div className="mx-auto max-w-[var(--content-max)]">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <p className="mb-3 font-mono text-[var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
                  <span className="gradient-text">03</span> contact
                </p>
                <h2 className="font-display text-[var(--fs-h2)] font-bold tracking-[-0.03em]">
                  Let&apos;s build something.
                </h2>
                <p className="mt-4 max-w-md text-lg text-[var(--text-muted)]">
                  Have a project in mind? Fill out the form and I&apos;ll get
                  back to you within 24 hours.
                </p>
                <p className="mt-6 text-sm text-[var(--text-dim)]">
                  Or email directly:
                </p>
                <a
                  href="mailto:alex@midnightdev.dev"
                  className="mt-1 inline-block font-mono text-[var(--fs-nav)] text-[var(--accent-blue)] transition-colors hover:text-[var(--text-primary)]"
                >
                  alex@midnightdev.dev
                </a>
                <p className="mt-4 font-mono text-xs text-[var(--text-dim)]">
                  Houston, TX
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
