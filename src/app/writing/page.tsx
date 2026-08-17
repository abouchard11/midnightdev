import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

const TITLE = "Writing";
const DESCRIPTION =
  "Notes on shipping AI products: evaluation, calibration, and the parts of the work that cannot be checked automatically.";

export const metadata: Metadata = {
  title: "Writing | MidnightDev",
  description: DESCRIPTION,
  alternates: {
    canonical: "/writing",
  },
  openGraph: {
    title: `${TITLE} — Alex Bouchard`,
    description: DESCRIPTION,
    url: "https://midnightdev.dev/writing",
    siteName: "MidnightDev",
    type: "website",
    images: [
      {
        url: "https://midnightdev.dev/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Alex Bouchard — Forward-Deployed AI Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} — Alex Bouchard`,
    description: DESCRIPTION,
    images: ["https://midnightdev.dev/opengraph-image"],
  },
};

const posts = [
  {
    slug: "benchmarking-a-generative-character",
    title:
      "Benchmarking a generative character when there is nothing to diff against",
    description:
      "A shipped AI character, an 82% hidden-reasoning bill, and a whole-game evaluation harness for the quality a one-shot test cannot see.",
    date: "2026-08-17",
    dateLabel: "17 August 2026",
    topic: "llm evaluation",
  },
  {
    slug: "ai-licensing-deals-in-status-codes",
    title: "Your firewall is your AI policy",
    description:
      "I probed 18 major sites with the user-agent of every AI crawler that matters. Who gets a 200 and who gets a 403 lines up with who signed deals and who is in litigation — and two of my own findings did not survive the data.",
    date: "2026-08-07",
    dateLabel: "7 August 2026",
    topic: "ai crawlers",
  },
  {
    slug: "calibrating-an-llm-judge",
    title: "Calibrating an LLM judge for a game people are trying to beat",
    description:
      "A scoring model that grades live players has no reference implementation to check itself against. What I measured, what broke, and the calibration metric I had to change.",
    date: "2026-08-04",
    dateLabel: "4 August 2026",
    topic: "llm evaluation",
  },
];

export default function WritingIndexPage() {
  return (
    <>
      <Nav />

      <main className="flex-1">
        <section className="bg-dotgrid px-6 pb-14 pt-14 md:px-12 md:pb-20 md:pt-24">
          <div className="mx-auto max-w-[var(--content-max)]">
            <p className="mb-4 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.1em] text-[var(--accent-blue)]">
              writing
            </p>

            <h1 className="max-w-[900px] font-display text-[length:var(--fs-h1)] font-extrabold leading-[1.05] tracking-[-0.04em]">
              Notes from the <span className="gradient-text">build room</span>
            </h1>

            <p className="mt-8 max-w-[680px] text-lg leading-relaxed text-[var(--text-muted)]">
              Write-ups of work that already shipped, with the measurements
              attached. Mostly evaluation: how you know an AI product is doing
              the thing you claim it does.
            </p>
          </div>
        </section>

        <section className="border-t border-[var(--border)] px-6 py-14 md:px-12 md:py-20">
          <div className="mx-auto max-w-[var(--content-max)]">
            <ul className="flex flex-col gap-4">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/writing/${post.slug}`}
                    className="block rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)]"
                  >
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--text-dim)]">
                      <time dateTime={post.date}>{post.dateLabel}</time>
                      <span>·</span>
                      <span>{post.topic}</span>
                    </div>

                    <h2 className="mt-3 max-w-[820px] font-display text-2xl font-bold tracking-[-0.02em]">
                      {post.title}
                    </h2>

                    <p className="mt-3 max-w-[720px] text-[length:var(--fs-small)] leading-relaxed text-[var(--text-muted)]">
                      {post.description}
                    </p>

                    <span className="mt-5 inline-block font-mono text-[length:var(--fs-small)] text-[var(--accent-blue)]">
                      read it &rarr;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
