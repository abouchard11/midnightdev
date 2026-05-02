import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-8 md:px-12">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="font-mono text-xs text-[var(--text-dim)]">
          &copy; {new Date().getFullYear()} midnight dev llc
        </span>
        <Link
          href="mailto:alex@midnightdev.dev"
          className="font-mono text-[13px] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
        >
          alex@midnightdev.dev
        </Link>
      </div>
    </footer>
  );
}
