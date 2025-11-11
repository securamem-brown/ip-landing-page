import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SecuraMem - Air-Gapped AI Infrastructure Acquisition",
  description: "Production-ready sovereign AI workflow platform enabling enterprise deployment in defense, healthcare, banking, and government.",
  keywords: "air-gapped AI, sovereign AI, enterprise AI, compliance, SecuraMem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
