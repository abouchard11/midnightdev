import type { MetadataRoute } from "next";
import { projectSlugs } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://midnightdev.dev",
      lastModified: "2026-05-02",
      priority: 1,
    },
    ...projectSlugs.map((slug) => ({
      url: `https://midnightdev.dev/work/${slug}`,
      lastModified: "2026-05-02",
      priority: 0.8,
    })),
    {
      url: "https://midnightdev.dev/privacy",
      lastModified: "2026-05-02",
      priority: 0.3,
    },
  ];
}
