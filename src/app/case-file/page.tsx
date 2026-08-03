import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

const INTERACTIVE_CASE_FILE =
  "https://alex-ai-engineer-portfolio.amb1122.chatgpt.site/";

export const metadata: Metadata = {
  title: "Interactive AI Engineering Case File | MidnightDev",
  description:
    "A role-focused, interactive case file covering Alex Bouchard's shipped AI products, evaluation systems, PostHog telemetry, SEO/GEO, distribution, and operating background.",
  alternates: {
    canonical: "/case-file",
  },
  openGraph: {
    title: "Alex Bouchard — Interactive AI Engineering Case File",
    description:
      "Shipped products, model-governance boundaries, evals, PostHog telemetry, SEO/GEO, and distribution evidence in one interactive case file.",
    url: "https://midnightdev.dev/case-file",
    siteName: "MidnightDev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Bouchard — Interactive AI Engineering Case File",
    description:
      "A role-focused evidence trail from product thesis through deployment, measurement, and distribution.",
  },
};

const proof = [
  "Two shipped AI products across web and native iOS",
  "Evaluation ledgers, release gates, and deterministic authority boundaries",
  "PostHog funnels, retention, session replay, reliability, and release telemetry",
  "Technical SEO, GEO/AI-answer readiness, and operated distribution systems",
];

export default function CaseFilePage() {
  return (
    <>
      <Nav />
      <main className="flex-1 bg-dotgrid px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-[var(--content-max)]">
          <p className="font-mono text-[length:var(--fs-label)] uppercase tracking-[0.09em] text-[var(--accent-blue)]">
            interactive case file / external exhibit
          </p>
          <h1 className="mt-5 max-w-[920px] font-display text-[length:var(--fs-h1)] font-extrabold leading-[1.02] tracking-[-0.04em]">
            One accountable builder.
            <br />
            <span className="gradient-text">The full evidence trail.</span>
          </h1>
          <p className="mt-7 max-w-[720px] text-lg leading-relaxed text-[var(--text-muted)]">
            This role-focused portfolio takes MidnightDev&apos;s work apart: product
            decisions, architecture, implementation, evaluation, native release,
            production telemetry, organic discovery, and operating judgment.
          </p>

          <ul className="mt-9 grid max-w-[900px] gap-3 md:grid-cols-2">
            {proof.map((item) => (
              <li
                key={item}
                className="rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-5 text-[length:var(--fs-small)] leading-relaxed text-[var(--text-primary)]"
              >
                <span className="mr-2 text-[var(--accent-blue)]">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={INTERACTIVE_CASE_FILE}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[var(--r-sm)] bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] px-6 py-3 font-mono text-[length:var(--fs-nav)] font-medium text-white shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:brightness-110"
            >
              open the interactive case file &#8599;
            </a>
            <Link
              href="/build-room"
              className="rounded-[var(--r-sm)] border border-[var(--border)] bg-[var(--surface)] px-6 py-3 font-mono text-[length:var(--fs-nav)] font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)]"
            >
              inspect the Build Room
            </Link>
          </div>

          <p className="mt-7 max-w-[700px] font-mono text-[length:var(--fs-label)] leading-relaxed text-[var(--text-dim)]">
            The interactive exhibit is hosted separately so it can stay tailored
            to forward-deployed, applied-AI, and implementation roles. MidnightDev
            remains the canonical studio and consulting home.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
