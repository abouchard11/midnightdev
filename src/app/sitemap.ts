import type { MetadataRoute } from "next";
import { projectSlugs } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString().split("T")[0];

  return [
    {
      url: "https://midnightdev.dev",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectSlugs.map((slug) => ({
      url: `https://midnightdev.dev/work/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: "https://midnightdev.dev/privacy",
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];
}
