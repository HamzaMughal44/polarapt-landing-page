import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "polarapt — every person on your team, one connected system",
  description:
    "Polarapt unifies hiring, payroll, attendance, and performance management for high-growth teams into one simple, connected system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="font-inter bg-cream text-ink antialiased min-h-screen selection:bg-brand-orange/20 selection:text-ink">
        {children}
      </body>
    </html>
  );
}
