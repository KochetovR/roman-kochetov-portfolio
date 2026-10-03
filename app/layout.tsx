import type { Metadata } from "next";
import localFont from "next/font/local";
import { MobileBottomNavigation } from "./components/mobile-bottom-navigation";
import { MobileChromeVisibility } from "./components/mobile-chrome-visibility";
import { LocaleProvider } from "./components/locale-provider";
import { ScrollToTopButton } from "./components/scroll-to-top-button";
import { SectionReveal } from "./components/section-reveal";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { personJsonLd, siteUrl } from "./lib/seo";
import "./globals.css";

const inter = localFont({
  src: "./fonts/Inter/Inter-VariableFont_opsz,wght.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Roman Kochetov — Front-end Developer",
  description: "Front-end developer building responsive web applications with Vue.js, Nuxt, React, Next.js, and TypeScript.",
  authors: [{ name: "Roman Kochetov", url: siteUrl }],
  creator: "Roman Kochetov",
  publisher: "Roman Kochetov",
  manifest: "/favicon/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon/favicon.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/favicon/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
          type="application/ld+json"
        />
        <LocaleProvider>
          <MobileChromeVisibility />
          <SiteHeader />
          {children}
          <SectionReveal><SiteFooter /></SectionReveal>
          <MobileBottomNavigation />
          <ScrollToTopButton />
        </LocaleProvider>
      </body>
    </html>
  );
}
