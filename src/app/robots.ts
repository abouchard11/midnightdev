import type { MetadataRoute } from "next";

// Deliberate allow-all posture (2026-08-07): midnightdev.dev is Alex Bouchard's
// canonical identity/entity home, not a product site. Being crawled and included
// in AI training corpora (GPTBot, CCBot, ClaudeBot, Google-Extended, etc.) here is
// intentional — it's how the entity graph (Person/Organization JSON-LD in
// src/app/layout.tsx) gets picked up and reinforced across AI answer engines.
// This is the opposite of the product-site posture (see yapword.com, 2026-06-20),
// which blocks AI training crawlers while allowing retrieval/answer bots.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://midnightdev.dev",
    sitemap: "https://midnightdev.dev/sitemap.xml",
  };
}
