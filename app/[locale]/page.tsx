import { notFound } from "next/navigation";
import { HomeMain } from "../components/home-main";
import { hasLocalizedLocale } from "../lib/locale";

export default async function LocalizedHome({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocalizedLocale(locale)) notFound();

  return <HomeMain locale={locale} />;
}
