import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

const TITLE = "The model cannot own the money";
const DESCRIPTION =
  "Dozen is a twelve-node creator marketplace. Accept, post, and pay stay outside the model. This is what the graph actually owns, what Stripe Checkout does, and what is still scaffolding.";
const URL = "https://midnightdev.dev/writing/the-model-cannot-own-the-money";
const PUBLISHED = "2026-08-19";

export const metadata: Metadata = {
  title: `${TITLE} | MidnightDev`,
  description: DESCRIPTION,
  alternates: {
    canonical: "/writing/the-model-cannot-own-the-money",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "MidnightDev",
    type: "article",
    publishedTime: PUBLISHED,
    authors: ["Alex Bouchard"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "43 production-imported tests. Accept stays closed until Stripe records the budget. Connect transfers and live posting are still scaffolding. No GMV claim.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${URL}#article`,
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  inLanguage: "en-US",
  url: URL,
  image: `${URL}/opengraph-image`,
  author: {
    "@id": "https://midnightdev.dev/#alex-bouchard",
  },
  publisher: {
    "@type": "Organization",
    name: "MidnightDev",
    url: "https://midnightdev.dev",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": URL,
  },
  about: [
    "Agent graphs",
    "Marketplace design",
    "Human-in-the-loop systems",
    "Stripe escrow",
  ],
};

const nodes = [
  { id: "intake", closer: "script", irreversible: false, done: "Budget ≥ $200, niche + platform present" },
  { id: "safety", closer: "policy", irreversible: true, done: "Fail-closed banned verticals" },
  { id: "assemble", closer: "script", irreversible: false, done: "6–16 micros, fee math, fake-risk < 70 bps" },
  { id: "offer", closer: "script", irreversible: false, done: "Rate band + brand escrow funded" },
  { id: "accept", closer: "human", irreversible: true, done: "≥60% accept or explicit bench refill" },
  { id: "draft", closer: "model", irreversible: false, done: "Drafts exist only for accepted seats" },
  { id: "verify", closer: "script", irreversible: false, done: "FTC disclosure + must-say + avoid" },
  { id: "revise", closer: "script", irreversible: false, done: "≤2 selective retries on this subgraph only" },
  { id: "review", closer: "human", irreversible: false, done: "Brand sees only the batch" },
  { id: "post", closer: "human", irreversible: true, done: "Disclosure still present on every accepted slot" },
  { id: "measure", closer: "script", irreversible: false, done: "ER not anomalous vs baseline" },
  { id: "pay", closer: "policy", irreversible: true, done: "Escrow funded + posted + no open dispute" },
];

const results = [
  {
    property: "Production-imported tests",
    measured: "43 pass",
    target: "Import live modules, not stubs",
    ok: true,
  },
  {
    property: "Graph linter",
    measured: "5 pass",
    target: "Model cannot close an irreversible edge",
    ok: true,
  },
  {
    property: "Accept without funded escrow",
    measured: "closed",
    target: "Fail-closed until Checkout is paid",
    ok: true,
  },
  {
    property: "Paid amount below budget",
    measured: "rejected",
    target: "Underpay cannot open accept",
    ok: true,
  },
  {
    property: "Missing Stripe secret key",
    measured: "throws",
    target: "Checkout and priority stay off",
    ok: true,
  },
  {
    property: "Anomalous ER after post",
    measured: "that seat held",
    target: "Measure can fail without closing pay",
    ok: true,
  },
  {
    property: "Clean measure + funded escrow",
    measured: "ledger released",
    target: "Bank transfers wait on Connect",
    ok: true,
  },
  {
    property: "Production GMV",
    measured: "not claimed",
    target: "No live money, no live posts",
    ok: false,
  },
];

const scaffolding = [
  {
    step: "01",
    title: "Stripe Checkout is wired. Live production money is not.",
    detail:
      "The product talks to Stripe’s Checkout Sessions API the same way Cite already does: form-urlencoded REST, no SDK, a secret key or a thrown error. If the key is missing, priority stays off and escrow stays unfunded. That is the correct failure. It is not the same thing as a live marketplace moving brand money.",
  },
  {
    step: "02",
    title: "Connect transfers are a ledger row",
    detail:
      "When pay passes, Dozen writes a dozen_payouts row with status queued and the sentence “Connect transfers are not live.” The 18% take is computed. The creator’s rate is recorded. No bank account is credited. Claiming payouts here would be the same class of lie as auto-closing accept.",
  },
  {
    step: "03",
    title: "Creators still tap “mark posted”",
    detail:
      "Post re-checks #ad fail-closed. It does not fetch a TikTok or Instagram URL, and it does not confirm the live caption. The public /demo is labeled a closed sample against the seed bench. Views on that page are derived from each creator’s baseline ER, not a platform API.",
  },
  {
    step: "04",
    title: "The repository stays private",
    detail:
      "The public artifacts are this essay and the case study. Shipping a public repo before Connect and live post confirmation would invite people to treat a graph that is honest about its holes as a finished marketplace.",
  },
];

const sources = [
  {
    label: "Dozen case study — the public product page",
    href: "https://midnightdev.dev/work/dozen",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.1em] text-[var(--accent-blue)]">
      {children}
    </p>
  );
}

const P = "mt-5 max-w-[720px] leading-relaxed text-[var(--text-muted)]";
const H2 = "max-w-[820px] font-display text-[length:var(--fs-h2)] font-bold tracking-[-0.03em]";
const SECTION = "border-t border-[var(--border)] px-6 py-14 md:px-12 md:py-20";
const INNER = "mx-auto max-w-[var(--content-max)]";

export default function TheModelCannotOwnTheMoneyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <Nav />

      <main className="flex-1">
        <section className="bg-dotgrid px-6 pb-14 pt-14 md:px-12 md:pb-20 md:pt-24">
          <div className={INNER}>
            <p className="mb-6 flex flex-wrap items-center gap-2 font-mono text-[11px] lowercase tracking-[0.08em] text-[var(--accent-blue)]">
              <Link
                href="/writing"
                className="transition-colors hover:text-[var(--text-primary)]"
              >
                writing
              </Link>
              <span className="text-[var(--text-dim)]">/</span>
              <span className="text-[var(--text-dim)]">
                agent graphs ·{" "}
                <time dateTime={PUBLISHED}>19 august 2026</time>
              </span>
            </p>

            <h1 className="max-w-[900px] font-display text-[length:var(--fs-h1)] font-extrabold leading-[1.05] tracking-[-0.04em]">
              The model cannot own{" "}
              <span className="gradient-text">the money</span>
            </h1>

            <p className="mt-8 max-w-[720px] text-lg leading-relaxed text-[var(--text-muted)]">
              Dozen is a twelve-node marketplace between brands and 1k–50k
              TikTok and Instagram creators. The model writes captions. It
              does not accept a seat, post a disclosure, or release a payout.
              This is what that constraint actually forced.
            </p>

            <p className="mt-4 max-w-[720px] text-[length:var(--fs-small)] leading-relaxed text-[var(--text-dim)]">
              Every number below comes from production-imported tests in the
              private product repository, measured 19 August 2026. The public
              artifact is the{" "}
              <Link
                href="/work/dozen"
                className="text-[var(--text-muted)] underline underline-offset-4 transition-colors hover:text-[var(--text-primary)]"
              >
                case study
              </Link>
              . This page does not claim live Stripe volume, Connect
              transfers, or GMV.
            </p>
          </div>
        </section>

        <section className={SECTION}>
          <div className={INNER}>
            <SectionLabel>01 / the hole</SectionLabel>
            <h2 className={H2}>
              The work after “I found someone” is still a spreadsheet
            </h2>

            <p className={P}>
              Micro-creators with 1k–50k followers already make $50–$200
              posts. They find that work in DMs, in Discord, or not at all.
              Brands who want authentic reach either overpay one macro or hire
              a coordinator to wrangle a dozen micros by hand.
            </p>

            <p className={P}>
              GRIN and Aspire sell the coordinator an $11k–$100k/year
              cockpit. Collabstr and #paid sell a directory and leave the DMs
              to you. The hole is not discovery. The hole is brief, draft,
              FTC, revise, post, pay — the work that happens after a name is
              on a list.
            </p>

            <p className={P}>
              That is a graph, not a chat. A one-pass agent demo papers over
              it by marking accept, post, and pay passed so a single handler
              can look finished. I built that version first. It took about
              forty-five minutes and it was a product lie. The captions were
              fine. The money edges were fiction.
            </p>
          </div>
        </section>

        <section className={SECTION}>
          <div className={INNER}>
            <SectionLabel>02 / why the obvious designs fail</SectionLabel>
            <h2 className={H2}>Three ways to fake a marketplace, and one way not to</h2>

            <div className="mt-10 flex flex-col gap-4">
              <article className="rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6">
                <h3 className="font-display text-xl font-bold tracking-[-0.02em]">
                  Let the model close the irreversible edges
                </h3>
                <p className="mt-3 max-w-[820px] leading-relaxed text-[var(--text-muted)]">
                  Accept spends a creator’s reputation. Post spends a
                  disclosure. Pay spends someone else’s money. If the model
                  owns those nodes, the demo finishes and the product is a
                  caption generator with a progress bar. A failed verifier has
                  to be a stop, not a suggestion the model can talk past.
                </p>
              </article>

              <article className="rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6">
                <h3 className="font-display text-xl font-bold tracking-[-0.02em]">
                  Charge for the cockpit instead of the work
                </h3>
                <p className="mt-3 max-w-[820px] leading-relaxed text-[var(--text-muted)]">
                  Enterprise influencer SaaS sells seats to the coordinator.
                  That is a reasonable business if you are selling software to
                  agencies. It is the wrong shape if the product is supposed
                  to <em>be</em> the coordinator. Dozen takes 18% when a swarm
                  pays (15% on priority or on a $2,500+ budget). No seat
                  license. The platform is paid when money moves.
                </p>
              </article>

              <article className="rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6">
                <h3 className="font-display text-xl font-bold tracking-[-0.02em]">
                  Ship a finished campaign as if it were live GMV
                </h3>
                <p className="mt-3 max-w-[820px] leading-relaxed text-[var(--text-muted)]">
                  A public /demo that looks paid is the fastest way to lie.
                  Dozen’s demo is labeled a closed sample against the seeded
                  bench. Views are derived from baseline engagement, not a
                  TikTok API. The live graph leaves accept, post, and pay
                  open. I would rather a visitor see an unfinished node than a
                  fabricated payout.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className={SECTION}>
          <div className={INNER}>
            <SectionLabel>03 / the graph</SectionLabel>
            <h2 className={H2}>Twelve nodes. The model owns one of them.</h2>

            <p className={P}>
              Draft is the only node whose closer is the model. Everything
              else is a script, a policy, or a human. Irreversible nodes —
              safety, accept, post, pay — cannot be owned by the model. A
              companion graph linter fails the topology if they are.
            </p>

            <div className="mt-10 overflow-x-auto rounded-[var(--r-md)] border border-[var(--border)]">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-[var(--border)] bg-[var(--surface)]">
                    <th className="px-5 py-3 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--text-dim)]">
                      Node
                    </th>
                    <th className="px-5 py-3 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--text-dim)]">
                      Closer
                    </th>
                    <th className="px-5 py-3 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--text-dim)]">
                      Done when
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {nodes.map((row) => (
                    <tr
                      key={row.id}
                      className="border-b border-[var(--border)] last:border-b-0"
                    >
                      <td className="px-5 py-3.5 font-mono text-[length:var(--fs-small)] text-[var(--text-primary)]">
                        {row.id}
                        {row.irreversible ? (
                          <span className="ml-2 text-[var(--text-dim)]">· irrev.</span>
                        ) : null}
                      </td>
                      <td
                        className={`px-5 py-3.5 font-mono text-[length:var(--fs-small)] ${
                          row.closer === "model"
                            ? "text-[var(--warning)]"
                            : "text-[var(--text-muted)]"
                        }`}
                      >
                        {row.closer}
                      </td>
                      <td className="px-5 py-3.5 text-[length:var(--fs-small)] text-[var(--text-dim)]">
                        {row.done}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className={P}>
              The inner loop is draft → verify → revise, max two attempts, and
              it does not restart intake or assemble. The outer loop is
              accept, which stays running until 60% of offered seats accept
              <em> and</em> at least six seats fill — or the brand explicitly
              refills from the bench. Rejected seats stay in the offered
              denominator. Six accepts of sixteen is not enough.
            </p>
          </div>
        </section>

        <section className={SECTION}>
          <div className={INNER}>
            <SectionLabel>04 / escrow</SectionLabel>
            <h2 className={H2}>
              Accept stays idle until the budget is on the platform
            </h2>

            <p className={P}>
              A marketplace that lets creators accept before the brand’s
              money has landed is asking them to spend reputation on a
              promise. The first version did that. Offers went out the moment
              assemble passed. That was the second product lie.
            </p>

            <p className={P}>
              Launch now stops in <code className="font-mono text-[length:var(--fs-small)] text-[var(--text-primary)]">funding</code>.
              Offers are written. Accept is idle. The brand opens Stripe
              Checkout for the full budget. Confirm reads the session back
              from Stripe: <code className="font-mono text-[length:var(--fs-small)] text-[var(--text-primary)]">payment_status</code>{" "}
              must be <code className="font-mono text-[length:var(--fs-small)] text-[var(--text-primary)]">paid</code>,
              the metadata must match the brand and the campaign, and{" "}
              <code className="font-mono text-[length:var(--fs-small)] text-[var(--text-primary)]">amount_total</code>{" "}
              must be at least the budget. One cent short stays fail-closed.
              A missing secret key never creates a session.
            </p>

            <p className={P}>
              Only then does accept open. Pay has a third gate on top of
              “every accepted seat posted” and “measure is clean”: escrow
              must already be funded. Anomalous engagement — more than 3.2×
              the creator’s baseline ER, or under 0.15× — holds that seat and
              holds the escrow. The campaign does not flip to paid so the
              graph can look finished.
            </p>

            <p className={P}>
              What pay <em>does</em> write, on a clean run, is a platform
              ledger row. The detail field says the quiet part: creator bank
              transfers wait on Stripe Connect. Connect is not onboarded.
              Queuing a transfer I cannot send is honest. Marking the creator
              paid in the world is not.
            </p>
          </div>
        </section>

        <section className={SECTION}>
          <div className={INNER}>
            <SectionLabel>05 / results</SectionLabel>
            <h2 className={H2}>What the tests own, and what they do not</h2>
            <p className={P}>
              The tests import the live matching, loop, verifier, escrow, and
              Stripe modules. They are not a second implementation. As of 19
              August 2026:{" "}
              <strong className="text-[var(--text-primary)]">
                43 product tests and 5 graph-linter tests, 0 failures
              </strong>
              .
            </p>

            <div className="mt-10 overflow-x-auto rounded-[var(--r-md)] border border-[var(--border)]">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-[var(--border)] bg-[var(--surface)]">
                    <th className="px-5 py-3 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--text-dim)]">
                      Property
                    </th>
                    <th className="px-5 py-3 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--text-dim)]">
                      Measured
                    </th>
                    <th className="px-5 py-3 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--text-dim)]">
                      Target
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((row) => (
                    <tr
                      key={row.property}
                      className="border-b border-[var(--border)] last:border-b-0"
                    >
                      <td className="px-5 py-3.5 text-[length:var(--fs-small)] text-[var(--text-muted)]">
                        {row.property}
                      </td>
                      <td className="px-5 py-3.5 font-mono text-[length:var(--fs-small)] text-[var(--text-primary)]">
                        {row.measured}
                      </td>
                      <td
                        className={`px-5 py-3.5 text-[length:var(--fs-small)] ${
                          row.ok ? "text-[var(--text-dim)]" : "text-[var(--warning)]"
                        }`}
                      >
                        {row.target}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 rounded-[var(--r-md)] border border-[var(--warning)]/30 bg-[var(--surface)] p-6">
              <span className="font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--warning)]">
                the thing this page is not
              </span>
              <p className="mt-3 max-w-[820px] leading-relaxed text-[var(--text-muted)]">
                A launch essay is usually a traffic event. This one is a
                constraint dump. There is no live campaign, no creator who
                has been paid, and no brand budget that has moved through
                Stripe in production. The 43 tests prove the graph refuses to
                pretend otherwise. That is the result.
              </p>
            </div>
          </div>
        </section>

        <section className={SECTION}>
          <div className={INNER}>
            <SectionLabel>06 / what is still scaffolding</SectionLabel>
            <h2 className={H2}>The parts I will not dress up</h2>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {scaffolding.map((w) => (
                <div
                  key={w.step}
                  className="rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[length:var(--fs-label)] text-[var(--accent-blue)]">
                      {w.step}
                    </span>
                    <h3 className="font-display text-lg font-bold tracking-[-0.02em]">
                      {w.title}
                    </h3>
                  </div>
                  <p className="mt-2.5 text-[length:var(--fs-small)] leading-relaxed text-[var(--text-muted)]">
                    {w.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={SECTION}>
          <div className={INNER}>
            <SectionLabel>07 / the actual product</SectionLabel>
            <h2 className={H2}>
              Agent products are interesting where the model is not allowed to finish
            </h2>

            <p className={P}>
              Most agent demos optimize for a complete-looking trace. The
              trace is the wrong object. The object is the set of edges a
              model is forbidden to close — accept, post, pay, publish, wire
              money — and the verifier that owns each one when the model
              wants to keep going.
            </p>

            <p className={P}>
              Dozen is that constraint applied to a two-sided market I
              actually want to exist: brands in a city, micros who already
              post, a coordinator no one wants to hire. The captions were
              never the hard part. The hard part is refusing to mark the
              swarm paid until the money is real.
            </p>

            <div className="mt-10 rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6">
              <span className="font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--text-dim)]">
                sources
              </span>
              <ul className="mt-4 flex flex-col gap-2.5">
                {sources.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      className="font-mono text-[length:var(--fs-small)] text-[var(--accent-blue)] transition-opacity hover:opacity-80"
                    >
                      {s.label} &#8599;
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/writing"
                className="rounded-[var(--r-sm)] border border-[var(--border)] bg-[var(--surface)] px-6 py-3 font-mono text-[length:var(--fs-nav)] font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)]"
              >
                all writing
              </Link>
              <Link
                href="/work/dozen"
                className="font-mono text-[length:var(--fs-small)] text-[var(--accent-blue)] transition-opacity hover:opacity-80"
              >
                Dozen case study &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
