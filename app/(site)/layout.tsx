import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TAITA Annual Conference 2026 · Hybrid quantum / classical / computing",
  description:
    "TAITA-SV's Annual Conference — Saturday, October 3, 2026 at Delta Hotels by Marriott, Santa Clara. Quantum computing, classical computing, AI, and global innovation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivoBlack.variable} ${inter.variable}`}>
      <body>
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#fff" }}>
          <Header />
          <AnnouncementBanner />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
