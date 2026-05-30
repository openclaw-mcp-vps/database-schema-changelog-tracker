import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SchemaLog — Auto-generate database schema change documentation",
  description: "Monitor database schema changes and auto-generate human-readable changelogs. Built for backend developers and DBAs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c44907da-65a3-4aad-9f10-9c0022bba0a1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
