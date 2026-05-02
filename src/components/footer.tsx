import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-8 md:px-12">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="font-mono text-xs text-[var(--text-dim)]">
          &copy; {new Date().getFullYear()} midnight dev llc &middot; Houston, TX
        </span>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/abouchard11"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[13px] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          >
            github
          </a>
          <a
            href="https://share.google/0klvUVK3PQvOa0X5I"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[13px] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          >
            linkedin
          </a>
          <Link
            href="mailto:alex@midnightdev.dev"
            className="font-mono text-[13px] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          >
            alex@midnightdev.dev
          </Link>
        </div>
      </div>
    </footer>
  );
}
