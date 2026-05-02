import type { Metadata } from "next";
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
  title: "MidnightDev | Full-Stack Developer Houston | Next.js, React, Supabase",
  description:
    "Houston-based full-stack developer building production platforms for startups and businesses. Next.js, React, Supabase, Stripe. SaaS, e-commerce, lead gen, and AI integration.",
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
    title: "MidnightDev | Building platforms that ship",
    description:
      "Full-stack development for startups and businesses. Next.js, React, Supabase, Stripe.",
    url: "https://midnightdev.dev",
    siteName: "MidnightDev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MidnightDev | Building platforms that ship",
    description:
      "Full-stack development for startups and businesses. Next.js, React, Supabase, Stripe.",
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
              "@type": "ProfessionalService",
              name: "MidnightDev",
              url: "https://midnightdev.dev",
              logo: "https://midnightdev.dev/logo.png",
              description:
                "Houston-based full-stack developer building production platforms. Next.js, React, Supabase, Stripe.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Houston",
                addressRegion: "TX",
                addressCountry: "US",
              },
              email: "alex@midnightdev.dev",
              founder: {
                "@type": "Person",
                name: "Alex Bouchard",
                jobTitle: "Full-Stack Developer",
              },
              areaServed: "Houston, TX",
              knowsAbout: [
                "Next.js",
                "React",
                "Supabase",
                "Stripe",
                "TypeScript",
                "Vercel",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Development Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "SaaS & Platform Development",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Lead Generation Sites",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "E-Commerce",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AI Integration",
                    },
                  },
                ],
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
