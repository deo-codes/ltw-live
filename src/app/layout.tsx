import type { Metadata } from "next";
import { Geist_Mono, Merriweather, Oswald } from "next/font/google";
import "./globals.css";
import ScrollToTopButton from "@/components/layout/ScrollToTopButton";

const bodyFont = Merriweather({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const headingFont = Oswald({
  variable: "--font-brand-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Official Site of Locked Target Wrestling & Regal Brotherhood Wrestling",
  description: "Locked Target Wrestling and Regal Brotherhood Wrestling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${geistMono.variable} ${headingFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
