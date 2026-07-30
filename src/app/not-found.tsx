import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Page Not Found — MidnightDev",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Nav />

      <main className="flex flex-1 items-center justify-center px-6 py-24 md:px-12">
        <div className="text-center">
          <p className="font-mono text-[length:var(--fs-label)] uppercase tracking-[0.1em] text-[var(--text-dim)]">
            <span className="gradient-text">404</span>
          </p>
          <h1 className="mt-4 font-display text-[clamp(32px,5vw,48px)] font-bold leading-[1.1] tracking-[-0.03em]">
            Page not found
          </h1>
          <p className="mt-4 max-w-md text-lg text-[var(--text-muted)]">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block rounded-[var(--r-sm)] bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] px-6 py-3 font-mono text-[length:var(--fs-nav)] font-medium text-white transition-all hover:brightness-110"
          >
            back to home
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
