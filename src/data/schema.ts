/**
 * Canonical @id values for the site's JSON-LD entity graph.
 *
 * The Person, Organization, and WebSite nodes are declared in
 * `src/app/layout.tsx` and emitted on every page. Their @ids are also
 * referenced from other pages (worksFor, founder, publisher, about, …), so a
 * typo in any one copy silently splits an entity in two as far as a consumer
 * is concerned. Defining them once means every reference resolves to the same
 * node by construction rather than by careful proofreading.
 */

export const PERSON_ID = "https://midnightdev.dev/#alex-bouchard";
export const ORG_ID = "https://midnightdev.dev/#midnightdev";
export const WEBSITE_ID = "https://midnightdev.dev/#website";
