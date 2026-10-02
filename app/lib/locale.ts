export const locales = ["en", "uk", "ru"] as const;
export const localizedLocales = ["uk", "ru"] as const;
export const defaultLocale = "en" as const;

export type Locale = (typeof locales)[number];
export type LocalizedLocale = (typeof localizedLocales)[number];

export function hasLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function hasLocalizedLocale(value: string): value is LocalizedLocale {
  return localizedLocales.includes(value as LocalizedLocale);
}

export function getLocaleFromPathname(pathname: string): Locale {
  const locale = pathname.split("/")[1];

  return hasLocalizedLocale(locale) ? locale : defaultLocale;
}

export function getLocalizedPathname(locale: Locale, pathname: string) {
  const unlocalizedPathname = pathname.replace(/^\/(?:uk|ru)(?=\/|$)/, "") || "/";

  if (locale === defaultLocale) return unlocalizedPathname;

  return unlocalizedPathname === "/" ? `/${locale}` : `/${locale}${unlocalizedPathname}`;
}
