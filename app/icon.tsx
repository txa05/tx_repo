import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a0a0a",
        color: "#34d399",
        fontSize: 230,
        fontWeight: 800,
        fontFamily: "sans-serif",
        border: "24px solid #2563eb",
      }}
    >
      Tx
    </div>,
    size,
  );
}
