import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { featuredProjectSlugs, projects } from "@/data/projects";

export function generateStaticParams() {
  return featuredProjectSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return Promise.resolve(params).then(({ slug }) => {
    const isFeatured = (featuredProjectSlugs as readonly string[]).includes(slug);
    const project = projects[slug as keyof typeof projects];
    if (!project || !isFeatured) {
      return {
        title: "Project Not Found",
        robots: { index: false, follow: false },
      };
    }
    return {
      title: `${project.name} — MidnightDev`,
      description: project.tagline,
      alternates: {
        canonical: `/work/${slug}`,
      },
      openGraph: {
        title: `${project.name} — MidnightDev`,
        description: project.tagline,
        url: `https://midnightdev.dev/work/${slug}`,
        siteName: "MidnightDev",
        type: "website",
        images: [
          {
            url: project.screenshot,
            width: project.screenshotWidth,
            height: project.screenshotHeight,
            alt: project.screenshotAlt,
          },
        ],
      },
      twitter: {
        card: "summary_large_image" as const,
        title: `${project.name} — MidnightDev`,
        description: project.tagline,
        images: [
          {
            url: project.screenshot,
            alt: project.screenshotAlt,
          },
        ],
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
  const isFeatured = (featuredProjectSlugs as readonly string[]).includes(slug);
  const project = projects[slug as keyof typeof projects];
  if (!project || !isFeatured) notFound();

  const pageUrl = `https://midnightdev.dev/work/${slug}`;
  const screenshotUrl = `https://midnightdev.dev${project.screenshot}`;

  // Ties this page's screenshot to the canonical Person as its creator, so the
  // "built by Alex Bouchard" claim is machine-readable rather than implied by
  // page copy. primaryImageOfPage is one of the three signals Google reads when
  // choosing a thumbnail for Search/Discover/AI Overviews (alongside
  // mainEntityOfPage and og:image, which this route now also sets).
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${project.name} — MidnightDev`,
        description: project.tagline,
        isPartOf: { "@id": "https://midnightdev.dev/#website" },
        primaryImageOfPage: { "@id": `${pageUrl}#screenshot` },
        about: { "@id": `${pageUrl}#project` },
        mainEntity: { "@id": `${pageUrl}#project` },
      },
      {
        "@type": "ImageObject",
        "@id": `${pageUrl}#screenshot`,
        contentUrl: screenshotUrl,
        url: screenshotUrl,
        width: project.screenshotWidth,
        height: project.screenshotHeight,
        caption: project.screenshotAlt,
        description: project.screenshotAlt,
        encodingFormat: project.screenshot.endsWith(".svg")
          ? "image/svg+xml"
          : "image/png",
        representativeOfPage: true,
        creator: { "@id": "https://midnightdev.dev/#alex-bouchard" },
        creditText: "MidnightDev",
        copyrightNotice: "© Alex Bouchard / MidnightDev",
      },
      {
        "@type": project.schemaType,
        "@id": `${pageUrl}#project`,
        name: project.name,
        description: project.description,
        url: `https://${project.url}`,
        image: { "@id": `${pageUrl}#screenshot` },
        author: { "@id": "https://midnightdev.dev/#alex-bouchard" },
        creator: { "@id": "https://midnightdev.dev/#alex-bouchard" },
        publisher: { "@id": "https://midnightdev.dev/#midnightdev" },
        ...(project.applicationCategory
          ? { applicationCategory: project.applicationCategory }
          : {}),
        ...(project.operatingSystem
          ? { operatingSystem: project.operatingSystem }
          : {}),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />

      <main className="flex-1">
        {/* Hero */}
        <section className="px-6 pt-16 pb-12 md:px-12 md:pt-24 md:pb-16">
          <div className="mx-auto max-w-[var(--content-max)]">
            <Link
              href="/#work"
              className="mb-8 inline-flex items-center gap-2 font-mono text-[length:var(--fs-label)] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
            >
              <span>&larr;</span> back to work
            </Link>

            <p className="mb-3 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
              <span className="gradient-text">case study</span>
            </p>

            <h1 className="font-display text-[clamp(32px,5vw,48px)] font-bold leading-[1.1] tracking-[-0.03em]">
              {project.name}
            </h1>
            <p className="mt-4 max-w-[560px] text-lg leading-relaxed text-[var(--text-muted)]">
              {project.tagline}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href={`https://${project.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[var(--r-sm)] bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] px-5 py-2.5 font-mono text-[length:var(--fs-nav)] font-medium text-white transition-all hover:brightness-110"
              >
                {project.linkLabel ?? "visit site"} &rarr;
              </a>
              {project.caseStudyHref ? (
                <Link
                  href={project.caseStudyHref}
                  className="rounded-[var(--r-sm)] border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 font-mono text-[length:var(--fs-nav)] font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)]"
                >
                  {project.caseStudyLabel ?? "evaluation case study"} &rarr;
                </Link>
              ) : null}
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
                alt={project.screenshotAlt}
                width={project.screenshotWidth}
                height={project.screenshotHeight}
                className="w-full"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* Problem / Solution */}
        <section className="px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto grid max-w-[var(--content-max)] gap-12 md:grid-cols-2">
            <div>
              <p className="mb-3 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
                <span className="gradient-text">01</span> the problem
              </p>
              <p className="text-[15px] leading-relaxed text-[var(--text-muted)]">
                {project.problem}
              </p>
            </div>
            <div>
              <p className="mb-3 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
                <span className="gradient-text">02</span> the solution
              </p>
              <p className="text-[15px] leading-relaxed text-[var(--text-muted)]">
                {project.solution}
              </p>
            </div>
          </div>
        </section>

        {/* Decisions & Tradeoffs */}
        <section className="border-t border-[var(--border)] px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-[var(--content-max)]">
            <p className="mb-3 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
              <span className="gradient-text">03</span> decisions &amp; tradeoffs
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {project.tradeoffs.map((tradeoff) => (
                <div
                  key={tradeoff.decision}
                  className="rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-5"
                >
                  <h3 className="font-mono text-sm font-semibold text-[var(--text-primary)]">
                    {tradeoff.decision}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[var(--text-muted)]">
                    {tradeoff.reasoning}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="border-t border-[var(--border)] px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-[var(--content-max)]">
            <p className="mb-3 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
              <span className="gradient-text">04</span> tech stack
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
            <p className="mb-3 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
              <span className="gradient-text">05</span> results
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

        {/* Testimonial */}
        {project.testimonial && (
          <section className="border-t border-[var(--border)] px-6 py-16 md:px-12 md:py-24">
            <div className="mx-auto max-w-[var(--content-max)]">
              <p className="mb-3 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
                <span className="gradient-text">06</span> client feedback
              </p>
              <div className="mt-6 rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-8 md:p-10">
                <div className="border-l-2 border-[var(--accent-purple)] pl-6">
                  <p className="text-[15px] leading-relaxed text-[var(--text-muted)]">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-4">
                    <p className="text-sm font-semibold">
                      {project.testimonial.name}
                    </p>
                    <p className="font-mono text-[11px] text-[var(--text-dim)]">
                      {project.testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="border-t border-[var(--border)] px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-[var(--content-max)] text-center">
            <h2 className="font-display text-[length:var(--fs-h2)] font-bold tracking-[-0.03em]">
              Want something like this?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-lg text-[var(--text-muted)]">
              Let&apos;s talk about your project.
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-block rounded-[var(--r-sm)] bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] px-6 py-3 font-mono text-[length:var(--fs-nav)] font-medium text-white shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:brightness-110"
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
