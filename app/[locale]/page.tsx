import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomeMain } from "../components/home-main";
import { hasLocalizedLocale } from "../lib/locale";
import { createHomeMetadata } from "../lib/seo";

export async function generateMetadata({ params }: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;

  return hasLocalizedLocale(locale) ? createHomeMetadata(locale) : { robots: { index: false, follow: false } };
}

export default async function LocalizedHome({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocalizedLocale(locale)) notFound();

  return <HomeMain locale={locale} />;
}
