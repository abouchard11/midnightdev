import Image from "next/image";
import Link from "next/link";

export function Nav() {
  return (
    <nav className="flex items-center justify-between px-6 py-5 border-b border-[var(--border)] md:px-12">
      <Link href="/" className="flex items-center gap-2.5">
        <Image src="/logo.png" alt="MidnightDev" width={28} height={28} />
        <span className="font-mono text-sm font-semibold tracking-tight text-[var(--text-primary)]">
          midnight_dev
        </span>
      </Link>

      <div className="hidden items-center gap-8 font-mono text-[13px] text-[var(--text-muted)] md:flex">
        <Link href="/#work" className="transition-colors hover:text-[var(--text-primary)]">
          work
        </Link>
        <Link href="/#services" className="transition-colors hover:text-[var(--text-primary)]">
          services
        </Link>
        <Link href="/#contact" className="transition-colors hover:text-[var(--text-primary)]">
          contact
        </Link>
      </div>

      <Link
        href="/#contact"
        className="hidden rounded-[var(--radius-sm)] bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] px-4 py-2 font-mono text-xs font-medium text-white transition-opacity hover:opacity-90 md:inline-block"
      >
        start a project
      </Link>
    </nav>
  );
}
