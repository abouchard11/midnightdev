import { ImageResponse } from "next/og";

// Figures below duplicate numbers stated in ./page.tsx (43 product tests +
// 5 graph-linter tests, 19 August 2026). If those counts change, update them
// HERE as well or the share card goes stale.

export const alt = "The model cannot own the money — MidnightDev";
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
          <div style={{ display: "flex" }}>writing / agent graphs</div>
        </div>

        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#EDEDF0",
            letterSpacing: "-0.03em",
            lineHeight: 1.08,
            display: "flex",
            maxWidth: 1040,
          }}
        >
          The model cannot own the money
        </div>

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
            43 tests · accept closed until escrow · Connect not live
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
            midnight_dev · 19 August 2026
          </div>
        </div>

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
    { ...size },
  );
}
