import type { MetadataRoute } from "next";
import { featuredProjectSlugs } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString().split("T")[0];

  return [
    {
      url: "https://midnightdev.dev",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://midnightdev.dev/build-room",
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: "https://midnightdev.dev/writing/the-model-cannot-own-the-money",
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    },
    {
      url: "https://midnightdev.dev/writing/ai-licensing-deals-in-status-codes",
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    },
    {
      url: "https://midnightdev.dev/writing/calibrating-an-llm-judge",
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    },
    {
      url: "https://midnightdev.dev/writing/benchmarking-a-generative-character",
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    },
    {
      url: "https://midnightdev.dev/writing",
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    ...featuredProjectSlugs.map((slug) => ({
      url: `https://midnightdev.dev/work/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: "https://midnightdev.dev/alex-bouchard",
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: "https://midnightdev.dev/resume",
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: "https://midnightdev.dev/services",
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: "https://midnightdev.dev/privacy",
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];
}
