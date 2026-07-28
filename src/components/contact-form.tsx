"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
      website_url_confirm: (form.elements.namedItem("website_url_confirm") as HTMLInputElement)?.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        const body = await res.json().catch(() => null);
        setErrorMsg(body?.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex items-center justify-center rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-8">
        <div className="text-center">
          <p className="font-display text-lg font-bold">Message sent.</p>
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            I&apos;ll reply as soon as I can.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 font-mono text-xs text-[var(--accent-blue)] transition-colors hover:text-[var(--text-primary)]"
          >
            send another &rarr;
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        name="website_url_confirm"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />
      {status === "error" && errorMsg && (
        <div
          role="alert"
          aria-live="assertive"
          className="rounded-[var(--r-sm)] border border-[var(--error)] bg-[var(--error)]/10 px-4 py-3 font-mono text-xs text-[var(--error)]"
        >
          {errorMsg}
        </div>
      )}
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block font-mono text-[var(--fs-label)] uppercase tracking-[0.05em] text-[var(--text-dim)]"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-[var(--r-sm)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-dim)] focus:border-[var(--accent-blue)] focus:outline-none"
          placeholder="Your name"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block font-mono text-[var(--fs-label)] uppercase tracking-[0.05em] text-[var(--text-dim)]"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-[var(--r-sm)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-dim)] focus:border-[var(--accent-blue)] focus:outline-none"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block font-mono text-[var(--fs-label)] uppercase tracking-[0.05em] text-[var(--text-dim)]"
        >
          What are you building?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full resize-none rounded-[var(--r-sm)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-dim)] focus:border-[var(--accent-blue)] focus:outline-none"
          placeholder="Tell me the goal, what already exists, and where the hard part is."
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-[var(--r-sm)] bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] px-6 py-3 font-mono text-[var(--fs-nav)] font-medium text-white shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:brightness-110 disabled:opacity-50"
      >
        {status === "sending" ? "sending..." : "send note"}
      </button>
    </form>
  );
}
