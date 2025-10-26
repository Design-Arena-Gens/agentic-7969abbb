import type { Metadata } from "next";
import { Cinzel, Manrope } from "next/font/google";
import "./globals.css";

const display = Cinzel({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const sans = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Echoes of Aethoria | Fantasy Roguelite RPG",
  description:
    "Discover Echoes of Aethoria, a hand-crafted fantasy roguelite RPG. Command your guild, weave spells, and descend into ever-shifting dungeons to reclaim a shattered realm.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${display.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
