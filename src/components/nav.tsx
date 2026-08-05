"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-[var(--border)]">
      <div className="mx-auto flex w-full max-w-[var(--content-max)] items-center justify-between px-6 py-5 md:px-12">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="MidnightDev" width={28} height={28} />
          <span className="font-mono text-sm font-semibold tracking-tight text-[var(--text-primary)]">
            midnight_dev
          </span>
        </Link>

        <div className="hidden items-center gap-8 font-mono text-[13px] text-[var(--text-muted)] lg:flex">
          <Link href="/#work" className="transition-colors hover:text-[var(--text-primary)]">
            work
          </Link>
          <Link href="/#growth" className="transition-colors hover:text-[var(--text-primary)]">
            growth
          </Link>
          <Link href="/build-room" className="transition-colors hover:text-[var(--text-primary)]">
            build room
          </Link>
          <Link href="/writing" className="transition-colors hover:text-[var(--text-primary)]">
            writing
          </Link>
          <Link href="/services" className="transition-colors hover:text-[var(--text-primary)]">
            services
          </Link>
          <Link href="/#contact" className="transition-colors hover:text-[var(--text-primary)]">
            contact
          </Link>
        </div>

        <Link
          href="/#contact"
          className="hidden whitespace-nowrap rounded-[var(--r-sm)] bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] px-4 py-2 font-mono text-xs font-medium text-white transition-opacity hover:opacity-90 lg:inline-block"
        >
          talk to Alex
        </Link>

        <button
          onClick={() => setOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center rounded-[var(--r-sm)] border border-[var(--border)] bg-[var(--surface)] lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-[var(--text-muted)]"
          >
            {open ? (
              <path
                d="M4 4L12 12M12 4L4 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M2 4h12M2 8h12M2 12h12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-[var(--border)] px-6 pb-5 pt-4 lg:hidden">
          <div className="flex flex-col gap-4 font-mono text-[13px] text-[var(--text-muted)]">
            <Link
              href="/#work"
              onClick={() => setOpen(false)}
              className="transition-colors hover:text-[var(--text-primary)]"
            >
              work
            </Link>
            <Link
              href="/build-room"
              onClick={() => setOpen(false)}
              className="transition-colors hover:text-[var(--text-primary)]"
            >
              build room
            </Link>
            <Link
              href="/writing"
              onClick={() => setOpen(false)}
              className="transition-colors hover:text-[var(--text-primary)]"
            >
              writing
            </Link>
            <Link
              href="/#growth"
              onClick={() => setOpen(false)}
              className="transition-colors hover:text-[var(--text-primary)]"
            >
              growth
            </Link>
            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className="transition-colors hover:text-[var(--text-primary)]"
            >
              services
            </Link>
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="transition-colors hover:text-[var(--text-primary)]"
            >
              contact
            </Link>
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-1 inline-block rounded-[var(--r-sm)] bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] px-4 py-2 text-center font-mono text-xs font-medium text-white transition-opacity hover:opacity-90"
            >
              talk to Alex
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
