import { ImageResponse } from "next/og";

export const alt = "Alex Bouchard — AI Product & Growth Systems";
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
          justifyContent: "center",
          alignItems: "center",
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
              "radial-gradient(ellipse at 50% 50%, rgba(75,139,245,0.08) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Logo */}
        { }
        <img
          src="https://midnightdev.dev/logo.png"
          alt=""
          width={80}
          height={80}
          style={{ marginBottom: 24 }}
        />

        {/* Brand name */}
        <div
          style={{
            fontSize: 20,
            fontWeight: 500,
            letterSpacing: "0.08em",
            color: "#7A7A8E",
            fontFamily: "monospace",
            marginBottom: 32,
          }}
        >
          midnight_dev
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "#EDEDF0",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            textAlign: "center",
            display: "flex",
          }}
        >
          AI products—and the systems that get them found.
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: 22,
            color: "#7A7A8E",
            marginTop: 20,
            textAlign: "center",
            display: "flex",
          }}
        >
          Product strategy &middot; Full-stack delivery &middot; SEO/GEO &middot; Telemetry
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
