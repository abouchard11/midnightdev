import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { projectList } from "@/data/projects";

export default function Home() {
  return (
    <>
      <Nav />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-dotgrid px-6 pt-16 pb-16 md:px-12 md:pt-[120px] md:pb-[100px]">
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
          <div className="mx-auto grid max-w-[var(--content-max)] grid-cols-2 gap-6 md:flex md:gap-16">
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
        <section id="work" className="px-6 py-12 md:px-12 md:py-16">
          <div className="mx-auto max-w-[var(--content-max)]">
            <p className="mb-3 font-mono text-[var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
              <span className="gradient-text">01</span> selected work
            </p>
            <div className="mb-10 flex items-baseline justify-between">
              <h2 className="font-display text-[var(--fs-h2)] font-bold tracking-[-0.03em]">
                Selected platforms, shipped to production.
              </h2>
              <span className="hidden font-mono text-xs text-[var(--text-dim)] md:inline">
                {projectList.length} projects
              </span>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {projectList.map((project) => (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="group overflow-hidden rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-hover)]"
                >
                  <div className="relative h-[180px] sm:h-[260px] overflow-hidden">
                    <Image
                      src={project.screenshot}
                      alt={project.name}
                      width={640}
                      height={400}
                      sizes="(max-width: 640px) 100vw, 50vw"
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

            <div className="mt-6 rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-5">
              <p className="mb-3 font-mono text-[var(--fs-label)] uppercase tracking-[0.05em] text-[var(--text-dim)]">
                also shipped
              </p>
              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
                {[
                  { name: "BuyLandFL", url: "buylandfl.com", desc: "real estate listings" },
                  { name: "Houston Lawyer List", url: "houstonlawyerlist.com", desc: "legal directory" },
                  { name: "HTX Dental Implants", url: "htxdentalimplants.com", desc: "dental lead gen" },
                  { name: "HTX Immigration Law", url: "htximmigrationlaw.com", desc: "immigration law" },
                ].map((site) => (
                  <a
                    key={site.url}
                    href={`https://${site.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-baseline gap-2 py-1"
                  >
                    <span className="font-mono text-[13px] text-[var(--text-muted)] transition-colors group-hover/link:text-[var(--text-primary)]">
                      {site.name}
                    </span>
                    <span className="font-mono text-[10px] text-[var(--text-dim)]">
                      {site.desc}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="border-t border-[var(--border)] px-6 py-12 md:px-12 md:py-16"
        >
          <div className="mx-auto max-w-[var(--content-max)]">
            <p className="mb-3 font-mono text-[var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
              <span className="gradient-text">02</span> services
            </p>
            <h2 className="font-display text-[var(--fs-h2)] font-bold tracking-[-0.03em]">
              From zero to production.
            </h2>
            <p className="mt-2 mb-10 font-mono text-[var(--fs-nav)] text-[var(--text-muted)]">
              Projects typically range from $5K&ndash;$75K depending on scope and complexity.
            </p>

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

        {/* About */}
        <section
          id="about"
          className="border-t border-[var(--border)] px-6 py-12 md:px-12 md:py-16"
        >
          <div className="mx-auto max-w-[var(--content-max)]">
            <p className="mb-3 font-mono text-[var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
              <span className="gradient-text">03</span> about
            </p>
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
              <Image
                src="/headshot.jpg"
                alt="Alex Bouchard"
                width={96}
                height={96}
                className="h-24 w-24 shrink-0 rounded-full object-cover"
              />
              <div>
                <h2 className="font-display text-[var(--fs-h2)] font-bold tracking-[-0.03em]">
                  Alex Bouchard
                </h2>
                <p className="mt-1 font-mono text-[var(--fs-nav)] text-[var(--accent-blue)]">
                  Full-Stack Developer &middot; Houston, TX
                </p>
                <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-[var(--text-muted)]">
                  I build production platforms for businesses that need more than
                  a template. SaaS marketplaces, e-commerce storefronts, legal
                  tools, lead generation sites. Every project ships on modern
                  infrastructure with real payments, real auth, and real users.
                </p>
                <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-[var(--text-muted)]">
                  My stack is Next.js, React, Supabase, and Stripe. I work with
                  startups, local businesses, and founders who need a technical
                  partner, not just a contractor. When you hire me, you get an
                  engineer who owns the outcome end to end — from database schema
                  to deploy pipeline to the Stripe webhook that processes your
                  first payment.
                </p>
                <div className="mt-5 flex items-center gap-4">
                  <a
                    href="https://github.com/abouchard11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[var(--fs-nav)] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
                  >
                    github &rarr;
                  </a>
                  <Link
                    href="#contact"
                    className="font-mono text-[var(--fs-nav)] text-[var(--accent-blue)] transition-colors hover:text-[var(--text-primary)]"
                  >
                    get in touch &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-t border-[var(--border)] px-6 py-12 md:px-12 md:py-16">
          <div className="mx-auto max-w-[var(--content-max)]">
            <p className="mb-3 font-mono text-[var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
              <span className="gradient-text">04</span> clients
            </p>
            <h2 className="font-display text-[var(--fs-h2)] font-bold tracking-[-0.03em]">
              What people are saying.
            </h2>
            <p className="mt-2 mb-8 font-mono text-[var(--fs-label)] text-[var(--text-dim)]">
              Client names redacted at request.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  quote:
                    "Alex built our entire contractor marketplace from scratch. Payments, matching, compliance — all production-ready in weeks, not months. The platform handles real money and real users without breaking.",
                  name: "Marcus T.",
                  role: "CEO, Workforce Platform",
                },
                {
                  quote:
                    "We needed more than a landing page — we needed a tool that actually converts. The interactive calculator Alex built drives qualified leads that understand their case before they ever pick up the phone.",
                  name: "Sarah K.",
                  role: "Managing Partner, Maritime Law",
                },
                {
                  quote:
                    "Our old site was a Shopify template that looked like everyone else. Alex built us a custom storefront that matches our brand and actually educates customers. Waitlist signups started coming in immediately.",
                  name: "David R.",
                  role: "Founder, Supplement Brand",
                },
              ].map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="flex flex-col rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6"
                >
                  <p className="flex-1 text-[14px] leading-relaxed text-[var(--text-muted)]">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-4 border-t border-[var(--border)] pt-4">
                    <p className="text-sm font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="font-mono text-[11px] text-[var(--text-dim)]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="border-t border-[var(--border)] px-6 py-12 md:px-12 md:py-16"
        >
          <div className="mx-auto max-w-[var(--content-max)]">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <p className="mb-3 font-mono text-[var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
                  <span className="gradient-text">05</span> contact
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
