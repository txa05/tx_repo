import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import "./globals.css";

const font = localFont({
  src: "../public/fonts/SF-Pro.ttf",
});

export const metadata: Metadata = {
  title: {
    default: "Tx | Portfólio",
    template: "%s | Tx",
  },
  description:
    "Portfólio de Tx, desenvolvedor em formação com foco em C/C++, sistemas, backend e desenvolvimento web.",
  keywords: [
    "Tx",
    "portfólio",
    "C",
    "C++",
    "Linux",
    "backend",
    "desenvolvimento web",
    "Next.js",
    "NestJS",
  ],
  authors: [
    {
      name: "Tx",
    },
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scrollbar-thin scrollbar-thumb-neutral-900 scrollbar-track-neutral-950 overflow-y-scroll ${font.className}`}
    >
      <body className="overflow-x-hidden">
        <a
          href="#main-content"
          className="fixed top-0 left-0 z-100 -translate-y-full rounded-br-lg bg-emerald-500 px-4 py-2 text-sm font-bold text-neutral-950 transition-transform duration-200 focus:translate-y-0"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
