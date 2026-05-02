import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { projects, projectSlugs } from "@/data/projects";

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return Promise.resolve(params).then(({ slug }) => {
    const project = projects[slug as keyof typeof projects];
    if (!project) return { title: "Project Not Found" };
    return {
      title: `${project.name} — MidnightDev`,
      description: project.tagline,
      openGraph: {
        title: `${project.name} — MidnightDev`,
        description: project.tagline,
        url: `https://midnightdev.dev/work/${slug}`,
        siteName: "MidnightDev",
        type: "website",
      },
      twitter: {
        card: "summary_large_image" as const,
        title: `${project.name} — MidnightDev`,
        description: project.tagline,
      },
    };
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];
  if (!project) notFound();

  return (
    <>
      <Nav />

      <main className="flex-1">
        {/* Hero */}
        <section className="px-6 pt-16 pb-12 md:px-12 md:pt-24 md:pb-16">
          <div className="mx-auto max-w-[var(--content-max)]">
            <Link
              href="/#work"
              className="mb-8 inline-flex items-center gap-2 font-mono text-[var(--fs-label)] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
            >
              <span>&larr;</span> back to work
            </Link>

            <p className="mb-3 font-mono text-[var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
              <span className="gradient-text">case study</span>
            </p>

            <h1 className="font-display text-[clamp(32px,5vw,48px)] font-bold leading-[1.1] tracking-[-0.03em]">
              {project.name}
            </h1>
            <p className="mt-4 max-w-[560px] text-lg leading-relaxed text-[var(--text-muted)]">
              {project.tagline}
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a
                href={`https://${project.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[var(--r-sm)] bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] px-5 py-2.5 font-mono text-[var(--fs-nav)] font-medium text-white transition-all hover:brightness-110"
              >
                visit site &rarr;
              </a>
              <span className="font-mono text-xs text-[var(--text-dim)]">
                {project.url}
              </span>
            </div>
          </div>
        </section>

        {/* Screenshot */}
        <section className="px-6 md:px-12">
          <div className="mx-auto max-w-[var(--content-max)]">
            <div
              className={`overflow-hidden rounded-[var(--r-lg)] border border-[var(--border)] bg-gradient-to-br ${project.gradient}`}
            >
              <Image
                src={project.screenshot}
                alt={`${project.name} screenshot`}
                width={1280}
                height={800}
                className="w-full"
                priority
              />
            </div>
          </div>
        </section>

        {/* Problem / Solution */}
        <section className="px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto grid max-w-[var(--content-max)] gap-12 md:grid-cols-2">
            <div>
              <p className="mb-3 font-mono text-[var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
                <span className="gradient-text">01</span> the problem
              </p>
              <p className="text-[15px] leading-relaxed text-[var(--text-muted)]">
                {project.problem}
              </p>
            </div>
            <div>
              <p className="mb-3 font-mono text-[var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
                <span className="gradient-text">02</span> the solution
              </p>
              <p className="text-[15px] leading-relaxed text-[var(--text-muted)]">
                {project.solution}
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="border-t border-[var(--border)] px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-[var(--content-max)]">
            <p className="mb-3 font-mono text-[var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
              <span className="gradient-text">03</span> tech stack
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {project.techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-5"
                >
                  <h3 className="font-mono text-sm font-semibold text-[var(--text-primary)]">
                    {tech.name}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[var(--text-muted)]">
                    {tech.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="border-t border-[var(--border)] px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-[var(--content-max)]">
            <p className="mb-3 font-mono text-[var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
              <span className="gradient-text">04</span> results
            </p>
            <ul className="mt-6 space-y-3">
              {project.results.map((result) => (
                <li
                  key={result}
                  className="flex items-start gap-3 text-[15px] text-[var(--text-muted)]"
                >
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--success)]" />
                  {result}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-[var(--border)] px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-[var(--content-max)] text-center">
            <h2 className="font-display text-[var(--fs-h2)] font-bold tracking-[-0.03em]">
              Want something like this?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-lg text-[var(--text-muted)]">
              Let&apos;s talk about your project.
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-block rounded-[var(--r-sm)] bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] px-6 py-3 font-mono text-[var(--fs-nav)] font-medium text-white shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:brightness-110"
            >
              start a project &rarr;
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
