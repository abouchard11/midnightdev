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
  title: "Alex Bouchard | Applied AI Product Engineer | MidnightDev",
  description:
    "Applied AI product engineer and solo founder shipping consumer AI across web and iOS. Model behavior, multimodal generation, safety, reliability, cost controls, and product systems.",
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
    title: "Alex Bouchard | Applied AI Product Engineer",
    description:
      "Consumer AI products and public engineering evidence across model behavior, safety, reliability, and product systems.",
    url: "https://midnightdev.dev",
    siteName: "MidnightDev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Bouchard | Applied AI Product Engineer",
    description:
      "Generate boldly. Validate cheaply. Kill ruthlessly. Scale what survives.",
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
              jobTitle: "Applied AI Product Engineer",
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
                "AI product engineering",
                "Model behavior",
                "Multimodal AI",
                "AI safety",
                "React",
                "Next.js",
                "TypeScript",
                "Python",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
