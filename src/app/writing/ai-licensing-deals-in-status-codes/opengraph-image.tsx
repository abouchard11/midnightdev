import { ImageResponse } from "next/og";

// The figures in the result strip below duplicate numbers stated in ./page.tsx
// and sourced from geo-crawl-audit/examples/major-sites-2026-08.md. If that
// dataset is ever re-run, update the arrays in ./page.tsx AND this strip, or
// the share card goes stale.

export const alt =
  "Reading AI licensing deals out of HTTP status codes — MidnightDev";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#08080D",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Subtle gradient overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse at 20% 0%, rgba(75,139,245,0.10) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 20,
            fontFamily: "monospace",
            letterSpacing: "0.1em",
            color: "#4B8BF5",
          }}
        >
          <img src="https://midnightdev.dev/logo.png" alt="" width={30} height={30} />
          <div style={{ display: "flex" }}>writing / ai crawlers</div>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 62,
            fontWeight: 800,
            color: "#EDEDF0",
            letterSpacing: "-0.03em",
            lineHeight: 1.08,
            display: "flex",
            maxWidth: 1000,
          }}
        >
          Reading AI licensing deals out of HTTP status codes
        </div>

        {/* Measured-result strip */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 24,
              fontFamily: "monospace",
              color: "#7A7A8E",
            }}
          >
            18 sites &middot; 12 AI user-agents &middot; Guardian 200 / NYT 403
            to GPTBot
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              fontFamily: "monospace",
              letterSpacing: "0.06em",
              color: "#4A4A58",
            }}
          >
            midnight_dev &middot; measured 2026-08-07
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, #4B8BF5, #8B5CF6)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
