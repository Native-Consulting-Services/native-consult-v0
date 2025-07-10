import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Analytics from "@/components/analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // Don't preload mono font as it's likely used less
});

export const metadata: Metadata = {
  title:
    "Native Consulting Services - Your Native Partner In Software Solutions",
  description:
    "Native Consulting Services specializes in secure, custom software solutions for Tribal Governments and organizations requiring high compliance standards.",
  viewport: "width=device-width, initial-scale=1",
  other: {
    "color-scheme": "light",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Critical CSS for above-the-fold content */}
        <style>{`
          body { margin: 0; font-family: system-ui, -apple-system, sans-serif; }
          .header-skeleton { height: 64px; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        `}</style>
        
        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/favicon.ico" as="image" />
        
        {/* DNS prefetch for other potential external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
