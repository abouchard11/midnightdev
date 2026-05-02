import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const projects: Record<
  string,
  {
    name: string;
    url: string;
    tagline: string;
    problem: string;
    solution: string;
    stack: { name: string; role: string }[];
    results: string[];
    screenshot: string;
    gradient: string;
  }
> = {
  methyleneblueultra: {
    name: "Methylene Blue Ultra",
    url: "methyleneblueultra.com",
    tagline: "Supplement e-commerce with waitlist-first launch strategy.",
    problem:
      "A supplement brand needed to launch a new product line with pre-launch demand capture. The founder wanted a premium storefront that educated visitors on methylene blue before converting them — not a generic Shopify template.",
    solution:
      "Built a custom Next.js storefront with a waitlist-first funnel. Product education pages break down the science in accessible language. Stripe handles payments and pre-orders. The design matches the premium positioning — dark, clean, clinical without being sterile.",
    stack: [
      { name: "Next.js", role: "App Router with static generation for product pages" },
      { name: "Stripe", role: "Payment processing, pre-orders, and subscription billing" },
      { name: "Vercel", role: "Edge deployment with instant cache invalidation" },
      { name: "Tailwind CSS", role: "Custom design system, dark theme" },
    ],
    results: [
      "400+ monthly sessions within 3 months of launch",
      "1.5% bounce rate — visitors engage deeply with content",
      "24 returning users averaging 5+ min sessions",
      "Waitlist capture converting to pre-orders",
    ],
    screenshot: "/screenshots/methyleneblueultra.png",
    gradient: "from-[#0F0F2A] to-[#181838]",
  },
  jonesactcalculator: {
    name: "Jones Act Calculator",
    url: "jonesactcalculator.com",
    tagline: "Maritime injury calculator with case value estimation.",
    problem:
      "Maritime injury victims need to understand their potential case value before contacting an attorney. Existing resources are generic legal pages with no interactive tools — just walls of text that don't answer the real question: how much is my case worth?",
    solution:
      "Built an interactive calculator that walks users through their injury details, employment info, and circumstances to produce a personalized case value estimate. The tool educates while it qualifies — by the time someone submits, they understand their rights and are ready to talk to an attorney.",
    stack: [
      { name: "Next.js", role: "App Router with dynamic calculator logic" },
      { name: "TypeScript", role: "Type-safe calculation engine and form validation" },
      { name: "Vercel", role: "Edge-deployed for fast load times nationwide" },
      { name: "SEO", role: "Targeting long-tail maritime injury keywords" },
    ],
    results: [
      "130+ monthly sessions with targeted maritime injury traffic",
      "Interactive calculator drives engagement beyond typical legal sites",
      "Attorney matching connects qualified leads with representation",
      "SEO-optimized content ranks for Jones Act-specific queries",
    ],
    screenshot: "/screenshots/jonesactcalculator.png",
    gradient: "from-[#2A2A0F] to-[#383818]",
  },
  htxpermitfix: {
    name: "HTX Permit Fix",
    url: "htxpermitfix.com",
    tagline: "Permit expediting for Houston contractors.",
    problem:
      "Houston contractors lose weeks waiting on building permits. A permit expediting service needed a site that communicated speed and reliability — and captured leads from contractors who are mid-project and frustrated with city permitting delays.",
    solution:
      "Built a bold, direct lead generation site. The messaging hits the pain point immediately: your permit is stuck, we fix it. Clear service breakdown, instant quote request, and phone-first CTA for contractors who want to talk now. No fluff.",
    stack: [
      { name: "Next.js", role: "Static site with dynamic contact forms" },
      { name: "React", role: "Interactive service selector and quote builder" },
      { name: "Vercel", role: "Fast deployment, edge-cached pages" },
      { name: "SEO", role: "Local SEO targeting Houston permit keywords" },
    ],
    results: [
      "Lead generation active for Houston metro area",
      "Phone-first CTA design matches contractor behavior",
      "Fast load times on mobile — where contractors browse from job sites",
      "Local SEO positioning for Houston permit expediting searches",
    ],
    screenshot: "/screenshots/htxpermitfix.png",
    gradient: "from-[#2A1A0F] to-[#382618]",
  },
  stackdworkforce: {
    name: "StackD Workforce",
    url: "stackdworkforce.com",
    tagline: "Contractor marketplace for heavy industry.",
    problem:
      "Heavy industry companies struggle to find qualified contractors. The hiring process involves compliance checks, skill verification, payment processing, and scheduling — none of which existing job boards handle well for blue-collar skilled trades.",
    solution:
      "Built a full SaaS platform from zero. Contractor profiles with skill verification, company dashboards for posting jobs and managing crews, Stripe Connect for compliant contractor payments, and a matching algorithm that surfaces the right people for each job. Real marketplace infrastructure, not a listing directory.",
    stack: [
      { name: "Next.js", role: "Full-stack app with API routes and server components" },
      { name: "Supabase", role: "Auth, database, row-level security, real-time subscriptions" },
      { name: "Stripe", role: "Connect platform for marketplace payments and payouts" },
      { name: "Vercel", role: "Production deployment with preview branches" },
    ],
    results: [
      "Full marketplace with contractor and company sides",
      "Stripe Connect handles compliant 1099 contractor payments",
      "Real-time job matching and notification system",
      "Admin dashboard for platform operations and compliance",
    ],
    screenshot: "/screenshots/stackdworkforce.png",
    gradient: "from-[#152538] to-[#1E3050]",
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // Next.js 16 passes params as a promise but generateMetadata receives it synchronously in static generation
  // We need to handle both cases
  return Promise.resolve(params).then(({ slug }) => {
    const project = projects[slug];
    if (!project) return { title: "Project Not Found" };
    return {
      title: `${project.name} — MidnightDev`,
      description: project.tagline,
    };
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug];
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
              {project.stack.map((tech) => (
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
