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
  title: "Alex Bouchard | Forward-Deployed AI Engineer | MidnightDev",
  description:
    "Forward-deployed AI engineer and MidnightDev founder building products, organic growth systems, and commercial technology across strategy, full-stack delivery, AI reliability, SEO/GEO, and telemetry.",
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
    title: "Alex Bouchard | Forward-Deployed AI Engineer",
    description:
      "AI products—and the growth and intelligence systems that get them discovered, measured, and used.",
    url: "https://midnightdev.dev",
    siteName: "MidnightDev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Bouchard | Forward-Deployed AI Engineer",
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
              "@type": "Person",
              name: "Alex Bouchard",
              jobTitle: "Founder and Forward-Deployed AI Engineer",
              url: "https://midnightdev.dev",
              image: "https://midnightdev.dev/headshot.jpg",
              email: "mailto:alex@midnightdev.dev",
              homeLocation: {
                "@type": "Place",
                name: "Houston, Texas",
              },
              worksFor: {
                "@type": "Organization",
                name: "MidnightDev",
                url: "https://midnightdev.dev",
              },
              sameAs: [
                "https://github.com/abouchard11",
                "https://www.linkedin.com/in/alex-bouchard-70aa958",
              ],
              knowsAbout: [
                "Applied artificial intelligence",
                "Forward-deployed engineering",
                "AI product engineering",
                "Model behavior",
                "Multimodal AI",
                "AI safety",
                "Product strategy",
                "Technical SEO",
                "Generative engine optimization",
                "Content architecture",
                "Organic growth strategy",
                "Product analytics",
                "PostHog",
                "Commercial real estate technology",
                "React",
                "Next.js",
                "TypeScript",
                "Python",
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
