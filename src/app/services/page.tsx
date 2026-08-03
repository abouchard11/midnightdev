import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

export const metadata: Metadata = {
  title: "Forward-Deployed AI & Growth Systems Consulting — MidnightDev",
  description:
    "Forward-deployed product strategy, AI engineering, technical diligence, SEO/GEO, PostHog, and organic growth systems consulting from Alex Bouchard at MidnightDev.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    title: "Product thesis and business design",
    detail:
      "Interrogate the opportunity, user loop, monetization, operating model, assumptions, and kill criteria before expensive certainty theater begins.",
  },
  {
    title: "AI architecture and model behavior",
    detail:
      "Turn model capability into a reliable product with persistent behavior, explicit authority boundaries, human review, evaluations, fallbacks, analytics, and cost controls.",
  },
  {
    title: "Organic discovery and distribution",
    detail:
      "Build the technical SEO, content architecture, programmatic search, GEO/AI-answer readiness, App Store positioning, owned media, and PostHog measurement system around the product.",
  },
  {
    title: "Technical diligence and product rescue",
    detail:
      "Audit AI-built products, forecasts, and codebases for false assumptions, security gaps, brittle state, hidden cost, unsupported claims, and missing release controls.",
  },
  {
    title: "AI-supported operating systems",
    detail:
      "Create shared context, decision records, agent workflows, PostHog dashboards, verification gates, and accountability systems that give small teams leverage without losing the plot.",
  },
  {
    title: "Focused full-stack builds",
    detail:
      "Ship bounded web and mobile products across React, Next.js, TypeScript, Python, Supabase, Vercel, and Capacitor—with the business and measurement systems attached.",
  },
];

const startingPoints = [
  {
    code: "01",
    title: "Product diagnostic",
    detail:
      "A focused examination of the thesis, user loop, architecture, model behavior, acquisition path, unit economics, evidence, and failure modes.",
    outcome:
      "You leave with a blunt decision memo: what is true, what is assumed, what to test first, and what should not be built.",
  },
  {
    code: "02",
    title: "Proof-of-value build",
    detail:
      "A sharply bounded implementation designed to validate the hardest technical or commercial assumption in production conditions.",
    outcome:
      "You leave with a working system, measurement plan, documented tradeoffs, and an explicit build, change, or kill gate.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />

      <main className="flex-1">
        <section className="bg-dotgrid px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-[var(--content-max)]">
            <p className="mb-4 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.1em] text-[var(--accent-blue)]">
              selective consulting
            </p>
            <h1 className="max-w-[900px] font-display text-[length:var(--fs-h1)] font-bold tracking-[-0.04em]">
              Bring me the product problem that is resisting polite conversation.
            </h1>
            <p className="mt-6 max-w-[680px] text-lg leading-relaxed text-[var(--text-muted)]">
              As a forward-deployed AI engineer, I take a small number of
              MidnightDev engagements where product judgment, AI behavior,
              production engineering, and distribution have to be solved together. Scope and pricing follow the
              evidence—not a theatrical menu of agency packages.
            </p>
          </div>
        </section>

        <section className="border-t border-[var(--border)] px-6 py-14 md:px-12 md:py-20">
          <div className="mx-auto max-w-[var(--content-max)]">
            <p className="font-mono text-[length:var(--fs-label)] uppercase tracking-[0.1em] text-[var(--accent-blue)]">
              how an engagement begins
            </p>
            <div className="mt-4 grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
              <div>
                <h2 className="font-display text-[length:var(--fs-h2)] font-bold tracking-[-0.03em]">
                  Start with the smallest engagement that can change the decision.
                </h2>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[var(--text-muted)]">
                  The goal is not to manufacture a six-month roadmap. It is to
                  expose the highest-risk assumption, test it honestly, and earn
                  the right to do more.
                </p>
              </div>

              <div className="grid gap-4">
                {startingPoints.map((item) => (
                  <div
                    key={item.code}
                    className="rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6"
                  >
                    <p className="font-mono text-[10px] text-[var(--accent-blue)]">
                      {item.code}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-bold tracking-[-0.02em]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-[var(--text-muted)]">
                      {item.detail}
                    </p>
                    <p className="mt-4 border-l border-[var(--accent-purple)] pl-4 text-[13px] leading-relaxed text-[var(--text-primary)]">
                      {item.outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--border)] px-6 py-14 md:px-12 md:py-20">
          <div className="mx-auto max-w-[var(--content-max)]">
            <div className="grid gap-4 md:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6"
                >
                  <h2 className="font-display text-xl font-bold tracking-[-0.02em]">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--text-muted)]">
                    {service.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--border)] px-6 py-14 md:px-12 md:py-20">
          <div className="mx-auto grid max-w-[var(--content-max)] gap-12 md:grid-cols-2">
            <div>
              <p className="font-mono text-[length:var(--fs-label)] uppercase tracking-[0.1em] text-[var(--accent-blue)]">
                start with the truth
              </p>
              <h2 className="mt-3 font-display text-[length:var(--fs-h2)] font-bold tracking-[-0.03em]">
                Tell me what must work, what already exists, and what has failed.
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[var(--text-muted)]">
                I&apos;ll tell you plainly whether I can help, what I would test
                first, and whether the idea deserves more capital.
              </p>
              <Link
                href="/"
                className="mt-6 inline-block font-mono text-xs text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                ← back to the workfolio
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
