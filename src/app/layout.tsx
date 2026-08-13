import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const cabinetGrotesk = localFont({
  src: [
    {
      path: "../fonts/CabinetGrotesk-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/CabinetGrotesk-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/CabinetGrotesk-Extrabold.woff",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-cabinet-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Bouchard | Forward-Deployed AI Lead | MidnightDev",
  description:
    "Forward-deployed AI lead and MidnightDev founder building products and organic growth systems — full-stack delivery, AI reliability, SEO/GEO, and telemetry.",
  metadataBase: new URL("https://midnightdev.dev"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Alex Bouchard | Forward-Deployed AI Lead",
    description:
      "AI products—and the growth and intelligence systems that get them discovered, measured, and used.",
    url: "https://midnightdev.dev",
    siteName: "MidnightDev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Bouchard | Forward-Deployed AI Lead",
    description:
      "Product strategy, full-stack delivery, AI reliability, SEO/GEO, telemetry, and commercial systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${jetbrainsMono.variable} ${cabinetGrotesk.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://midnightdev.dev/#alex-bouchard",
                  name: "Alex Bouchard",
                  alternateName: "Alex Bouchard AI",
                  jobTitle: "Forward-Deployed AI Lead",
                  description:
                    "Alex Bouchard is a Houston-based, AI-native product builder and the founder of MidnightDev. As a forward-deployed AI lead, he designs, ships, and operates consumer AI products end to end across web and iOS, including Yapword, That's My Best, and Yapoleon's Court. Before software, he spent roughly a decade in commercial real estate, closing 85+ retail transactions totaling roughly $400 million as half of a two-person team.",
                  url: "https://midnightdev.dev",
                  image: "https://midnightdev.dev/headshot.jpg",
                  email: "mailto:alex@midnightdev.dev",
                  homeLocation: {
                    "@type": "Place",
                    name: "Houston, Texas",
                  },
                  worksFor: { "@id": "https://midnightdev.dev/#midnightdev" },
                  sameAs: [
                    "https://midnightdev.dev",
                    "https://github.com/abouchard11",
                    "https://www.linkedin.com/in/alex-bouchard-ai",
                    "https://www.linkedin.com/in/alex-bouchard-70aa958",
                    "https://dev.to/abouchard11",
                    "https://x.com/AlexBouchardAI",
                    "https://apps.apple.com/us/developer/alex-bouchard/id6774829905",
                  ],
                  knowsAbout: [
                    "Applied artificial intelligence",
                    "AI product development",
                    "AI evaluation",
                    "Model behavior",
                    "Multimodal AI",
                    "AI safety",
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Python",
                  ],
                },
                {
                  "@type": "Organization",
                  "@id": "https://midnightdev.dev/#midnightdev",
                  name: "MidnightDev",
                  url: "https://midnightdev.dev",
                  founder: { "@id": "https://midnightdev.dev/#alex-bouchard" },
                  logo: {
                    "@type": "ImageObject",
                    url: "https://midnightdev.dev/icon-512.png",
                    width: 512,
                    height: 512,
                  },
                  sameAs: [
                    "https://yapword.com",
                    "https://thatsmybest.com",
                    "https://court.yapoleon.com",
                    "https://x.com/YapoleonGreater",
                    "https://apps.apple.com/us/app/yapword-daily-ai-word-game/id6774829903",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://midnightdev.dev/#website",
                  name: "MidnightDev",
                  url: "https://midnightdev.dev/",
                  publisher: { "@id": "https://midnightdev.dev/#midnightdev" },
                },
              ],
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
