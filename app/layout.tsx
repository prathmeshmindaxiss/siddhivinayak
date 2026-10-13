import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingActions from "./components/FloatingActions";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1121",
};

export const metadata: Metadata = {
  title: "Siddhivinayak Engineering",
  description: "Premier provider of Jigs, Fixtures, and Precision Components.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}

