import type { MetadataRoute } from "next";

const projects = [
  "methyleneblueultra",
  "jonesactcalculator",
  "htxpermitfix",
  "stackdworkforce",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://midnightdev.dev",
      lastModified: new Date(),
      priority: 1,
    },
    ...projects.map((slug) => ({
      url: `https://midnightdev.dev/work/${slug}`,
      lastModified: new Date(),
      priority: 0.8,
    })),
  ];
}
