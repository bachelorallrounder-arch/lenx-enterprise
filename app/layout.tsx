import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lenx Tech Enterprise",
  description:
    "Lenx Tech Enterprise - Trusted distributor of electronic components, semiconductors, sensors, embedded solutions, and industrial electronics.",
  keywords: [
    "Electronic Components",
    "Semiconductors",
    "Sensors",
    "Power Electronics",
    "Embedded Systems",
    "Industrial Electronics",
    "Lenx Tech Enterprise",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Navbar />

          <main className="flex-1">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}