import { ImageResponse } from "next/og";

export const alt =
  "Benchmarking a generative character when there is nothing to diff against — MidnightDev";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
            right: 0,
            bottom: 0,
            left: 0,
            background:
              "radial-gradient(ellipse at 20% 0%, rgba(75,139,245,0.12) 0%, transparent 70%)",
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
          <img
            src="https://midnightdev.dev/logo.png"
            alt=""
            width={30}
            height={30}
          />
          <div style={{ display: "flex" }}>writing / llm evaluation</div>
        </div>

        <div
          style={{
            display: "flex",
            maxWidth: 1040,
            fontSize: 60,
            fontWeight: 800,
            color: "#EDEDF0",
            letterSpacing: "-0.03em",
            lineHeight: 1.06,
          }}
        >
          Benchmarking a generative character when there is nothing to diff
          against
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              fontFamily: "monospace",
              color: "#9A9AAD",
            }}
          >
            82% hidden-reasoning bill &middot; 0 hidden tokens at minimal
            &middot; 36 hint samples
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              fontFamily: "monospace",
              letterSpacing: "0.06em",
              color: "#68687A",
            }}
          >
            Yapword &middot; Alex Bouchard &middot; MidnightDev
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
    { ...size }
  );
}
