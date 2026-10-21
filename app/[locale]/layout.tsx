import type { Metadata } from "next";
import { notFound } from "next/navigation";
import localFont from "next/font/local";
import { RootShell } from "../components/root-shell";
import { hasLocalizedLocale, localizedLocales } from "../lib/locale";
import { createHomeMetadata, personJsonLd, siteUrl } from "../lib/seo";
import "../globals.css";

const inter = localFont({
  src: "../fonts/Inter/Inter-VariableFont_opsz,wght.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-inter",
  display: "swap",
});

const defaultMetadata = createHomeMetadata("en");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: defaultMetadata.title,
  description: defaultMetadata.description,
  verification: {
    google: "tOdRSx0FlYagkUUA_yQ2GNJ2LhYmX8ZgW4FjjPayUgw",
  },
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

export function generateStaticParams() {
  return localizedLocales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export default async function LocalizedLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocalizedLocale(locale)) notFound();

  return (
    <html lang={locale} data-theme="dark" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
          type="application/ld+json"
        />
        <RootShell>{children}</RootShell>
      </body>
    </html>
  );
}
