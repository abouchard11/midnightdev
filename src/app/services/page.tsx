import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

export const metadata: Metadata = {
  title: "Consulting Services — MidnightDev",
  description:
    "Selective product engineering and AI systems consulting from Alex Bouchard at MidnightDev.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    title: "AI product architecture",
    detail:
      "Turn a model capability into an actual product loop with explicit authority boundaries, human review, analytics, and cost controls.",
  },
  {
    title: "Model-behavior systems",
    detail:
      "Design persistent characters, structured outputs, evaluation loops, fallbacks, and regression checks that survive model drift.",
  },
  {
    title: "Product rescue and diligence",
    detail:
      "Audit an AI-built product, forecast, or codebase for false assumptions, security gaps, brittle state, and unsupported claims.",
  },
  {
    title: "Full-stack product builds",
    detail:
      "Focused web and mobile products using React, Next.js, TypeScript, Supabase, Vercel, and Capacitor.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />

      <main className="flex-1">
        <section className="bg-dotgrid px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-[var(--content-max)]">
            <p className="mb-4 font-mono text-[var(--fs-label)] uppercase tracking-[0.1em] text-[var(--accent-blue)]">
              selective consulting
            </p>
            <h1 className="max-w-[900px] font-display text-[var(--fs-h1)] font-bold tracking-[-0.04em]">
              Bring me the product problem that is resisting polite conversation.
            </h1>
            <p className="mt-6 max-w-[680px] text-lg leading-relaxed text-[var(--text-muted)]">
              MidnightDev takes a small number of engagements where product
              judgment, AI behavior, and production engineering have to be solved
              together. Scope and pricing follow the evidence—not a theatrical
              menu of agency packages.
            </p>
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
              <p className="font-mono text-[var(--fs-label)] uppercase tracking-[0.1em] text-[var(--accent-blue)]">
                start with the truth
              </p>
              <h2 className="mt-3 font-display text-[var(--fs-h2)] font-bold tracking-[-0.03em]">
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
