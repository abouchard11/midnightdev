import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-10 md:px-12">
      <div className="mx-auto max-w-[var(--content-max)]">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="MidnightDev"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="font-mono text-sm font-semibold text-[var(--text-primary)]">
                midnight_dev
              </span>
            </div>
            <span className="font-mono text-xs text-[var(--text-dim)]">
              Applied AI products and systems
              <br />
              built by Alex Bouchard in Houston.
            </span>
          </div>

          <div className="flex gap-8 sm:gap-12">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[var(--fs-label)] uppercase tracking-[0.05em] text-[var(--text-dim)]">
                Explore
              </span>
              <Link
                href="/#work"
                className="font-mono text-[13px] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                shipped work
              </Link>
              <Link
                href="/#systems"
                className="font-mono text-[13px] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                reliability systems
              </Link>
              <Link
                href="/#story"
                className="font-mono text-[13px] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                chronological story
              </Link>
              <Link
                href="/services"
                className="font-mono text-[13px] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                consulting
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-mono text-[var(--fs-label)] uppercase tracking-[0.05em] text-[var(--text-dim)]">
                Links
              </span>
              <Link
                href="/#work"
                className="font-mono text-[13px] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                work
              </Link>
              <Link
                href="/#contact"
                className="font-mono text-[13px] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                contact
              </Link>
              <a
                href="https://github.com/abouchard11"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[13px] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                github
              </a>
              <a
                href="https://www.linkedin.com/in/alex-bouchard-70aa958?trk=profile-badge"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[13px] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                linkedin
              </a>
              <Link
                href="/privacy"
                className="font-mono text-[13px] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                privacy
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-[var(--border)] pt-6 sm:flex-row">
          <span className="font-mono text-xs text-[var(--text-dim)]">
            &copy; {new Date().getFullYear()} midnight dev llc &middot;
            Houston, TX
          </span>
          <a
            href="mailto:alex@midnightdev.dev"
            className="font-mono text-xs text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          >
            alex@midnightdev.dev
          </a>
        </div>
      </div>
    </footer>
  );
}
