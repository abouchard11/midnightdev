import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Privacy Policy — MidnightDev",
  description: "Privacy policy for midnightdev.dev — what data is collected via the contact form, how it's used, and your rights.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />

      <main className="flex-1 px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-[var(--content-max)]">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 font-mono text-[var(--fs-label)] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          >
            <span>&larr;</span> back to home
          </Link>

          <h1 className="font-display text-[clamp(32px,5vw,48px)] font-bold leading-[1.1] tracking-[-0.03em]">
            Privacy Policy
          </h1>
          <p className="mt-2 font-mono text-[var(--fs-nav)] text-[var(--text-dim)]">
            Last updated: May 2026
          </p>

          <div className="mt-10 max-w-[720px] space-y-8 text-[15px] leading-relaxed text-[var(--text-muted)]">
            <section>
              <h2 className="mb-3 font-display text-lg font-bold text-[var(--text-primary)]">
                What I collect
              </h2>
              <p>
                When you submit the contact form on this site, I collect your
                name, email address, and project details. This information is
                delivered to my inbox via Google Workspace email (Gmail SMTP)
                and is not stored in any database.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-lg font-bold text-[var(--text-primary)]">
                How I use it
              </h2>
              <p>
                Your contact information is used solely to respond to your
                inquiry and discuss potential projects. I do not sell, share, or
                distribute your information to third parties. Google processes
                the email delivery per their{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent-blue)] transition-colors hover:text-[var(--text-primary)]"
                >
                  privacy policy
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-lg font-bold text-[var(--text-primary)]">
                Cookies
              </h2>
              <p>
                This site uses only essential cookies required for basic
                functionality. No advertising or tracking cookies are used.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-lg font-bold text-[var(--text-primary)]">
                Your rights
              </h2>
              <p>
                You can request deletion of any personal information I hold by
                emailing{" "}
                <a
                  href="mailto:alex@midnightdev.dev"
                  className="text-[var(--accent-blue)] transition-colors hover:text-[var(--text-primary)]"
                >
                  alex@midnightdev.dev
                </a>
                . I will respond within 30 days.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-lg font-bold text-[var(--text-primary)]">
                Contact
              </h2>
              <p>
                For questions about this policy, email{" "}
                <a
                  href="mailto:alex@midnightdev.dev"
                  className="text-[var(--accent-blue)] transition-colors hover:text-[var(--text-primary)]"
                >
                  alex@midnightdev.dev
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
