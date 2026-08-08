import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

// Slug intentionally does not match the title. The piece shipped as
// "Reading AI licensing deals out of HTTP status codes" and was retitled
// 2026-08-07 because that phrasing asserted a cause the data only correlates:
// a status code tells you who is blocked, not why. The licensing material is
// still in section 02, hedged. The slug stays put so the URL keeps working.
// "firewall" not "WAF" on purpose — the acronym failed a live comprehension
// test on a technical reader, and this piece is read by marketing and SEO
// people too. The body uses WAF freely, with context around it.
const TITLE = "Your firewall is your AI policy";
const DESCRIPTION =
  "I probed 18 major sites with the user-agent of every AI crawler that matters. Who gets a 200 and who gets a 403 lines up with who signed deals and who is in litigation — and two of my own findings did not survive the data.";
const URL = "https://midnightdev.dev/writing/ai-licensing-deals-in-status-codes";
const PUBLISHED = "2026-08-07";

export const metadata: Metadata = {
  title: `${TITLE} | MidnightDev`,
  description: DESCRIPTION,
  alternates: {
    canonical: "/writing/ai-licensing-deals-in-status-codes",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "MidnightDev",
    type: "article",
    publishedTime: PUBLISHED,
    authors: ["Alex Bouchard"],
    // Images intentionally omitted — ./opengraph-image.tsx supplies the
    // per-article card via the file convention for both og: and twitter:.
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "The Guardian serves GPTBot a 200 and ClaudeBot a 403. The NYT 403s almost everyone. Reddit's robots.txt blocks every AI bot and its WAF disagrees. 18 sites, measured.",
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
    "AI crawlers",
    "Generative engine optimization",
    "robots.txt",
    "Bot management",
    "Server-side rendering",
  ],
};

// Every figure below is read from the 2026-08-07 run committed at
// geo-crawl-audit/examples/major-sites-2026-08.md. If that dataset is
// re-run, update these arrays AND ./opengraph-image.tsx together.
const MEASURED = "2026-08-07";

const botMatrix = [
  { bot: "GPTBot", cat: "training", guardian: "200", nyt: "403", reddit: "403", figma: "200" },
  { bot: "OAI-SearchBot", cat: "retrieval", guardian: "200", nyt: "403", reddit: "200", figma: "200" },
  { bot: "ChatGPT-User", cat: "user fetch", guardian: "200", nyt: "403", reddit: "403", figma: "200" },
  { bot: "ClaudeBot", cat: "training", guardian: "403", nyt: "403", reddit: "429", figma: "200" },
  { bot: "Claude-SearchBot", cat: "retrieval", guardian: "403", nyt: "403", reddit: "200", figma: "200" },
  { bot: "PerplexityBot", cat: "retrieval", guardian: "403", nyt: "403", reddit: "200", figma: "200" },
  { bot: "bingbot", cat: "retrieval", guardian: "200", nyt: "200", reddit: "403", figma: "200" },
  { bot: "CCBot", cat: "training", guardian: "403", nyt: "403", reddit: "429", figma: "200" },
  { bot: "meta-externalagent", cat: "training", guardian: "403", nyt: "403", reddit: "200", figma: "200" },
];

const scorecard = [
  { site: "reddit.com", score: 32, words: 1, render: "CSR", cold: "1.109s", filtered: false },
  { site: "airbnb.com", score: 35, words: 94, render: "CSR", cold: "0.694s", filtered: false },
  { site: "quora.com", score: 52, words: 9, render: "CSR", cold: "0.570s", filtered: true },
  { site: "theguardian.com", score: 55, words: 3314, render: "SSR", cold: "1.380s", filtered: false },
  { site: "nytimes.com", score: 55, words: 1222, render: "SSR", cold: "1.447s", filtered: false },
  { site: "openai.com", score: 60, words: 6, render: "CSR", cold: "0.264s", filtered: true },
  { site: "perplexity.ai", score: 60, words: 9, render: "CSR", cold: "0.572s", filtered: true },
  { site: "linkedin.com", score: 72, words: 23, render: "CSR", cold: "0.233s", filtered: false },
  { site: "notion.so", score: 75, words: 627, render: "SSR", cold: "1.230s", filtered: false },
  { site: "wikipedia.org", score: 80, words: 868, render: "SSR", cold: "0.670s", filtered: false },
  { site: "bloomberg.com", score: 95, words: 108, render: "CSR", cold: "1.475s", filtered: true },
  { site: "github.com", score: 95, words: 6, render: "CSR", cold: "0.115s", filtered: true },
  { site: "figma.com", score: 95, words: 591, render: "SSR", cold: "2.459s", filtered: false },
  { site: "shopify.com", score: 97, words: 1226, render: "SSR", cold: "0.493s", filtered: false },
  { site: "stripe.com", score: 100, words: 1957, render: "SSR", cold: "0.250s", filtered: false },
  { site: "vercel.com", score: 100, words: 539, render: "SSR", cold: "0.531s", filtered: false },
  { site: "developer.mozilla.org", score: 100, words: 1134, render: "SSR", cold: "0.630s", filtered: false },
  { site: "anthropic.com", score: 100, words: 677, render: "SSR", cold: "0.202s", filtered: false },
];

const gates = [
  {
    step: "01",
    title: "Reachability",
    rule: "does the fetch return 200",
    detail:
      "Bot management is usually on defaults, and defaults do not know which crawlers you want. This is the gate that fails silently — nothing in your analytics records a crawler that never got a page.",
  },
  {
    step: "02",
    title: "Speed",
    rule: "cold TTFB, not warm",
    detail:
      "Crawlers hit uncached long-tail URLs, so the cold-start number is the one that applies to them. Figma's homepage answered my warm request in 0.969s and its cold one in 2.459s — the second number is the crawler's experience.",
  },
  {
    step: "03",
    title: "Readability",
    rule: "words in raw HTML, no JS",
    detail:
      "GPTBot, ClaudeBot and PerplexityBot do not execute JavaScript. For most sites, Googlebot (feeding Gemini) and Applebot are the only AI-adjacent crawlers that render it. A client-rendered site can rank first in Google and be blank to nearly everything else.",
  },
  {
    step: "04",
    title: "Permission",
    rule: "robots.txt, including the tokens that never fetch",
    detail:
      "Google-Extended and Applebot-Extended are opt-out tokens, not crawlers. They will never appear in your logs because they never make a request — Googlebot and Applebot do the fetching and the token governs the training use.",
  },
];

const limits = [
  {
    step: "01",
    title: "A spoofed user-agent is not a bot",
    detail:
      "Every status code here came from my IP with a claimed identity in the header. Vendors verify their crawlers by published IP range, so a site can treat a real GPTBot differently from my request calling itself GPTBot. Nothing in this dataset can distinguish the two.",
  },
  {
    step: "02",
    title: "Five sites filtered the probe itself",
    detail:
      "quora.com, openai.com, perplexity.ai, bloomberg.com and github.com challenged my baseline browser request — before any bot user-agent was involved. Their rows describe my probe environment, not their treatment of AI crawlers.",
  },
  {
    step: "03",
    title: "One URL, one moment",
    detail:
      "Homepages only, one run, 2026-08-07. WAF rules change, rate limits are stateful, and a 429 is a function of recent traffic rather than a policy. A second run an hour later is not guaranteed to reproduce the 429s.",
  },
  {
    step: "04",
    title: "robots.txt parsing is literal",
    detail:
      "The tool reports the directives as written for each token. It does not model precedence edge cases between overlapping wildcard and named groups, which is where real crawler implementations quietly differ from each other.",
  },
];

const sources = [
  {
    label: "geo-crawl-audit — the tool (MIT, Python + curl, zero dependencies)",
    href: "https://github.com/abouchard11/geo-crawl-audit",
  },
  {
    label: "major-sites-2026-08.md — the full 18-site dataset behind this piece",
    href: "https://github.com/abouchard11/geo-crawl-audit/blob/main/examples/major-sites-2026-08.md",
  },
  {
    label: "geo_probe.py — the probe, including the two false-positive classes",
    href: "https://github.com/abouchard11/geo-crawl-audit/blob/main/scripts/geo_probe.py",
  },
  {
    label: "interpreting.md — what each flag does and does not license you to claim",
    href: "https://github.com/abouchard11/geo-crawl-audit/blob/main/references/interpreting.md",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.1em] text-[var(--accent-blue)]">
      {children}
    </p>
  );
}

function statusClass(code: string) {
  if (code === "200") return "text-[var(--success)]";
  if (code === "429") return "text-[var(--warning)]";
  return "text-[var(--text-primary)]";
}

const P = "mt-5 max-w-[720px] leading-relaxed text-[var(--text-muted)]";
const H2 =
  "max-w-[820px] font-display text-[length:var(--fs-h2)] font-bold tracking-[-0.03em]";
const SECTION =
  "border-t border-[var(--border)] px-6 py-14 md:px-12 md:py-20";
const INNER = "mx-auto max-w-[var(--content-max)]";
const TH =
  "px-5 py-3 font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--text-dim)]";

export default function AiLicensingDealsInStatusCodesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <Nav />

      <main className="flex-1">
        {/* Hero */}
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
                ai crawlers ·{" "}
                <time dateTime={PUBLISHED}>7 august 2026</time>
              </span>
            </p>

            <h1 className="max-w-[900px] font-display text-[length:var(--fs-h1)] font-extrabold leading-[1.05] tracking-[-0.04em]">
              Your firewall is{" "}
              <span className="gradient-text">your AI policy</span>
            </h1>

            <p className="mt-8 max-w-[720px] text-lg leading-relaxed text-[var(--text-muted)]">
              Everyone is arguing about AI search visibility. Almost nobody is
              measuring the boring part underneath it: whether AI crawlers can
              fetch your pages at all.
            </p>

            <p className="mt-4 max-w-[720px] text-[length:var(--fs-small)] leading-relaxed text-[var(--text-dim)]">
              Every number below comes from one run of{" "}
              <a
                href="https://github.com/abouchard11/geo-crawl-audit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] underline underline-offset-4 transition-colors hover:text-[var(--text-primary)]"
              >
                geo-crawl-audit
              </a>{" "}
              against 18 homepages on {MEASURED}. The dataset is committed in the
              repo; sources are linked at the end.
            </p>
          </div>
        </section>

        {/* The problem */}
        <section className={SECTION}>
          <div className={INNER}>
            <SectionLabel>01 / the gate nobody measures</SectionLabel>
            <h2 className={H2}>
              Four things have to be true before any of the advice applies
            </h2>

            <p className={P}>
              The generative-engine-optimization industry sells schema markup,
              entity coverage, citation-friendly formatting. All of it sits
              downstream of four gates that almost nobody checks, in this order:
              the crawler has to reach you, it has to get an answer fast enough
              to stay, there has to be text in the HTML it received, and you have
              to have permitted the use.
            </p>

            <p className={P}>
              The third gate is the one that surprises people. GPTBot, ClaudeBot
              and PerplexityBot do not execute JavaScript. If your content
              arrives via client-side rendering, those crawlers receive an empty
              shell — and you will not find out from your analytics, because a
              crawler that gets a useless page does not report anything.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {gates.map((g) => (
                <div
                  key={g.step}
                  className="rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[length:var(--fs-label)] text-[var(--accent-blue)]">
                      {g.step}
                    </span>
                    <h3 className="font-display text-lg font-bold tracking-[-0.02em]">
                      {g.title}
                    </h3>
                  </div>
                  <p className="mt-2.5 font-mono text-[length:var(--fs-small)] text-[var(--text-primary)]">
                    {g.rule}
                  </p>
                  <p className="mt-2 text-[length:var(--fs-small)] leading-relaxed text-[var(--text-muted)]">
                    {g.detail}
                  </p>
                </div>
              ))}
            </div>

            <p className={P}>
              So I built a probe that walks all four gates for a given domain,
              once per crawler, and pointed it at 18 sites whose behaviour I
              could not have guessed.
            </p>
          </div>
        </section>

        {/* Licensing */}
        <section className={SECTION}>
          <div className={INNER}>
            <SectionLabel>02 / the status codes</SectionLabel>
            <h2 className={H2}>
              You can diff a company&apos;s AI strategy with curl
            </h2>

            <p className={P}>
              The Guardian has a content deal with OpenAI. Its server serves my
              GPTBot, OAI-SearchBot and ChatGPT-User requests a clean{" "}
              <strong className="text-[var(--text-primary)]">200</strong>, and
              its robots.txt does not name them. The same request wearing
              ClaudeBot, PerplexityBot or CCBot gets a{" "}
              <strong className="text-[var(--text-primary)]">403</strong> — and
              those names are in the robots.txt disallow list too. Policy and
              enforcement agree.
            </p>

            <p className={P}>
              The New York Times, currently in litigation with OpenAI, 403s
              almost the entire field: GPTBot, OAI-SearchBot, ClaudeBot,
              PerplexityBot, Common Crawl, meta-externalagent. Two user-agents
              got through — bingbot and Amazonbot.
            </p>

            <div className="mt-10 overflow-x-auto rounded-[var(--r-md)] border border-[var(--border)]">
              <table className="w-full min-w-[680px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-[var(--border)] bg-[var(--surface)]">
                    <th className={TH}>User-agent</th>
                    <th className={TH}>Guardian</th>
                    <th className={TH}>NYT</th>
                    <th className={TH}>Reddit</th>
                    <th className={TH}>Figma</th>
                  </tr>
                </thead>
                <tbody>
                  {botMatrix.map((row) => (
                    <tr
                      key={row.bot}
                      className="border-b border-[var(--border)] last:border-b-0"
                    >
                      <td className="px-5 py-3.5 text-[length:var(--fs-small)] text-[var(--text-muted)]">
                        {row.bot}
                        <span className="ml-2 font-mono text-[var(--text-dim)]">
                          {row.cat}
                        </span>
                      </td>
                      {[row.guardian, row.nyt, row.reddit, row.figma].map(
                        (code, i) => (
                          <td
                            key={i}
                            className={`px-5 py-3.5 font-mono text-[length:var(--fs-small)] ${statusClass(code)}`}
                          >
                            {code}
                          </td>
                        )
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className={P}>
              The business-development org and the infrastructure config have
              become the same document. Whatever a company says publicly about
              its posture toward AI, the WAF rule is the version that is actually
              in force, and it is readable by anyone with a terminal.
            </p>
          </div>
        </section>

        {/* robots vs WAF */}
        <section className={SECTION}>
          <div className={INNER}>
            <SectionLabel>03 / policy versus enforcement</SectionLabel>
            <h2 className={H2}>
              robots.txt is a sign on the door. The WAF is the lock.
            </h2>

            <p className={P}>
              Reddit&apos;s robots.txt blocks every AI crawler in the list —
              fourteen tokens, no exceptions. Enforcement tells a different
              story. My GPTBot request got a 403 and my ClaudeBot and CCBot
              requests got 429s, but{" "}
              <strong className="text-[var(--text-primary)]">
                OAI-SearchBot, Claude-SearchBot, PerplexityBot, Amazonbot and
                meta-externalagent all received a 200
              </strong>{" "}
              from the same IP, seconds apart. The training-oriented crawlers hit
              a wall; several of the retrieval-oriented ones walked through.
              Whether that is deliberate or a rule set that simply has not caught
              up with the names, I cannot tell from outside — but the policy and
              the enforcement are not the same policy.
            </p>

            <p className={P}>
              Figma runs the inverse configuration. Its robots.txt disallows
              GPTBot, OAI-SearchBot, ChatGPT-User, Claude-SearchBot,
              PerplexityBot, CCBot and Google-Extended — and its server returns
              200 to every single one of them. That is a policy that exists
              entirely on the honour system, which is a legitimate choice, but
              worth knowing you have made.
            </p>

            <div className="mt-8 rounded-[var(--r-md)] border border-[var(--accent-blue)]/30 bg-[var(--surface)] p-6">
              <span className="font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--accent-blue)]">
                the practical version
              </span>
              <p className="mt-3 max-w-[820px] leading-relaxed text-[var(--text-muted)]">
                If you intend to block a crawler, robots.txt alone is a request.
                If you intend to allow one, a robots.txt allow does nothing when
                your bot-management layer is challenging it anyway. Most of the
                misconfigurations in this dataset are not decisions — they are
                two systems, owned by two teams, that were never diffed against
                each other.
              </p>
            </div>
          </div>
        </section>

        {/* Accidental invisibility */}
        <section className={SECTION}>
          <div className={INNER}>
            <SectionLabel>04 / accidental invisibility</SectionLabel>
            <h2 className={H2}>
              Some very famous sites are blank to AI — deliberately or not
            </h2>

            <p className={P}>
              Airbnb returns 403 to nine of the twelve AI user-agents in the
              test — every OpenAI, Perplexity, Microsoft, Amazon, Meta and
              Common Crawl token — while all three Anthropic user-agents get a
              200. Its homepage serves 94 visible words of raw HTML either way,
              so even the allowed crawlers read a nearly blank page. LinkedIn
              served the probe a 23-word bot-check interstitial — whatever a
              verified crawler negotiates, the raw HTML a stranger receives is
              effectively empty. Reddit&apos;s homepage contains one visible
              word before JavaScript runs.
            </p>

            <p className={P}>
              The sites doing it right are boringly consistent — full
              server-rendered HTML, fast, no bot discrimination:
            </p>

            <div className="mt-10 overflow-x-auto rounded-[var(--r-md)] border border-[var(--border)]">
              <table className="w-full min-w-[620px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-[var(--border)] bg-[var(--surface)]">
                    <th className={TH}>Site</th>
                    <th className={TH}>Score</th>
                    <th className={TH}>Raw-HTML words</th>
                    <th className={TH}>Render</th>
                    <th className={TH}>Cold TTFB</th>
                  </tr>
                </thead>
                <tbody>
                  {scorecard.map((row) => (
                    <tr
                      key={row.site}
                      className="border-b border-[var(--border)] last:border-b-0"
                    >
                      <td className="px-5 py-3.5 text-[length:var(--fs-small)] text-[var(--text-muted)]">
                        {row.site}
                        {row.filtered && (
                          <span className="ml-2 font-mono text-[var(--warning)]">
                            †
                          </span>
                        )}
                      </td>
                      <td
                        className={`px-5 py-3.5 font-mono text-[length:var(--fs-small)] ${
                          row.score >= 95
                            ? "text-[var(--success)]"
                            : row.score < 60
                              ? "text-[var(--warning)]"
                              : "text-[var(--text-primary)]"
                        }`}
                      >
                        {row.score}
                      </td>
                      <td className="px-5 py-3.5 font-mono text-[length:var(--fs-small)] text-[var(--text-primary)]">
                        {row.words.toLocaleString("en-US")}
                      </td>
                      <td className="px-5 py-3.5 font-mono text-[length:var(--fs-small)] text-[var(--text-dim)]">
                        {row.render}
                      </td>
                      <td className="px-5 py-3.5 font-mono text-[length:var(--fs-small)] text-[var(--text-dim)]">
                        {row.cold}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 max-w-[720px] text-[length:var(--fs-small)] leading-relaxed text-[var(--text-dim)]">
              † The probe&apos;s own baseline browser request was filtered on
              these five, so their rows describe my probe environment rather than
              their treatment of AI crawlers. See section 05.
            </p>

            <p className={P}>
              Stripe is the high score: 1,957 words in raw HTML, a 200 for every
              crawler, 0.250s cold. Anthropic returned the fastest warm response
              in the set at 0.102s. MDN, Vercel and Shopify all land at 97 or
              above on the same recipe. None of this is exotic — it is
              server-rendered HTML on a fast origin with no bot rules that
              nobody remembers writing.
            </p>
          </div>
        </section>

        {/* Limits */}
        <section className={SECTION}>
          <div className={INNER}>
            <SectionLabel>05 / what this cannot tell you</SectionLabel>
            <h2 className={H2}>
              The two findings I had to delete
            </h2>

            <p className={P}>
              My first draft of this piece contained a detail I liked a great
              deal: that openai.com 403s a request claiming to be GPTBot, because
              they verify their own crawler by IP range and treat name-only
              claims as impostors. It is a good story. The data does not support
              it. openai.com also 403&apos;d my{" "}
              <em>baseline browser request</em>, before any bot user-agent was
              involved — so I cannot distinguish &ldquo;they detect GPTBot
              impostors&rdquo; from &ldquo;they challenge everything from a
              datacenter IP.&rdquo; The second reading is simpler and I have no
              evidence against it.
            </p>

            <p className={P}>
              The same draft said the tool withholds a content classification for
              the five filtered sites. It does not — it scores them and stamps a{" "}
              <code className="font-mono text-[length:var(--fs-small)] text-[var(--text-primary)]">
                BASELINE_ANOMALY
              </code>{" "}
              flag saying the results reflect probe-environment filtering rather
              than real bot experience. Accurate description of one&apos;s own
              tool turns out to be harder than building it.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {limits.map((l) => (
                <div
                  key={l.step}
                  className="rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[length:var(--fs-label)] text-[var(--accent-blue)]">
                      {l.step}
                    </span>
                    <h3 className="font-display text-lg font-bold tracking-[-0.02em]">
                      {l.title}
                    </h3>
                  </div>
                  <p className="mt-2.5 text-[length:var(--fs-small)] leading-relaxed text-[var(--text-muted)]">
                    {l.detail}
                  </p>
                </div>
              ))}
            </div>

            <p className={P}>
              This is why the probe is only half the tool. The other half reads
              server logs: what real crawlers actually received, with their source
              IPs verified against vendor-published ranges, which is the only way
              to answer the question the probe can merely raise. Log mode also
              surfaces the failure nothing else catches —{" "}
              <strong className="text-[var(--text-primary)]">499s</strong>, the
              status your log records when a crawler gave up waiting on a slow
              origin and hung up. No error page, no alert, no citation.
            </p>

            <div className="mt-8 rounded-[var(--r-md)] border border-[var(--warning)]/30 bg-[var(--surface)] p-6">
              <span className="font-mono text-[length:var(--fs-label)] uppercase tracking-[0.08em] text-[var(--warning)]">
                the design constraint
              </span>
              <p className="mt-3 max-w-[820px] leading-relaxed text-[var(--text-muted)]">
                The first live run of this tool produced phantom WAF blocks that
                turned out to be transient connection failures. The fix — retry
                logic plus a separate probe-error class that can never be
                reported as a finding — is the most important thing in the
                codebase. A diagnostic that overclaims is worse than no
                diagnostic, because you act on it.
              </p>
            </div>
          </div>
        </section>

        {/* Close */}
        <section className={SECTION}>
          <div className={INNER}>
            <SectionLabel>06 / if you run websites</SectionLabel>
            <h2 className={H2}>The unglamorous order of operations</h2>

            <p className={P}>
              Check reachability first: point something at your own domain with
              each crawler&apos;s user-agent and compare against a browser
              baseline. Bot management ships with defaults, defaults do not know
              your commercial intent, and a 403 to a retrieval crawler is a
              citation you will never appear in.
            </p>

            <p className={P}>
              Then check the cold number rather than the warm one, because
              crawlers land on the pages your cache has never seen. Then count the
              words in{" "}
              <code className="font-mono text-[length:var(--fs-small)] text-[var(--text-primary)]">
                curl
              </code>{" "}
              output rather than in the rendered page. Then read your own
              robots.txt against your own WAF rules and find out whether they
              agree.
            </p>

            <p className={P}>
              And no, llms.txt is not one of the gates. The tool checks it and
              weights it at zero: measured adoption data shows the overwhelming
              majority of llms.txt files receive no AI-crawler requests at all.
              It costs nothing to publish and it is not a substitute for being
              fetchable.
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[length:var(--fs-small)] text-[var(--accent-blue)] transition-opacity hover:opacity-80"
                    >
                      {s.label} &#8599;
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 max-w-[820px] text-[length:var(--fs-small)] leading-relaxed text-[var(--text-dim)]">
                Corrections welcome, especially from anyone at the companies
                named — with logs, which beat my probe on every question this
                piece raises.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/writing"
                className="rounded-[var(--r-sm)] border border-[var(--border)] bg-[var(--surface)] px-6 py-3 font-mono text-[length:var(--fs-nav)] font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)]"
              >
                all writing
              </Link>
              <a
                href="https://github.com/abouchard11/geo-crawl-audit"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[length:var(--fs-small)] text-[var(--accent-blue)] transition-opacity hover:opacity-80"
              >
                run it on your own domain &rarr;
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
