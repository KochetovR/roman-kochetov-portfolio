import { notFound } from "next/navigation";
import { hasLocalizedLocale, localizedLocales } from "../lib/locale";

export function generateStaticParams() {
  return localizedLocales.map((locale) => ({ locale }));
}

export default async function LocalizedLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocalizedLocale(locale)) notFound();

  return children;
}
