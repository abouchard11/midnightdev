import type { Metadata } from "next";
import { CaseFilePage } from "../case-file/page";

export const metadata: Metadata = {
  title: "Alex Bouchard | Forward-Deployed AI Lead",
  description:
    "Forward-deployed AI engineering evidence across shipped products, evaluation systems, PostHog telemetry, SEO/GEO, distribution, and end-to-end operations.",
  alternates: {
    canonical: "/alex-bouchard",
  },
  openGraph: {
    title: "Alex Bouchard | Forward-Deployed AI Lead",
    description:
      "Shipped products, model-governance boundaries, evals, PostHog telemetry, SEO/GEO, and distribution evidence in one interactive case file.",
    url: "https://midnightdev.dev/alex-bouchard",
    siteName: "MidnightDev",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Bouchard — Interactive AI Case File",
    description:
      "A forward-deployed engineering evidence trail from product thesis through deployment, measurement, and distribution.",
  },
};

export default CaseFilePage;
