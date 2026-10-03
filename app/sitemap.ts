import type { MetadataRoute } from "next";
import { projects } from "./data/projects";
import { locales, type Locale } from "./lib/locale";
import { siteUrl } from "./lib/seo";

type SitemapEntry = MetadataRoute.Sitemap[number];

function getLocalizedPath(locale: Locale, path: string) {
  if (locale === "en") return path;

  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

function getAlternates(path: string): NonNullable<SitemapEntry["alternates"]> {
  return {
    languages: {
      en: `${siteUrl}${getLocalizedPath("en", path)}`,
      uk: `${siteUrl}${getLocalizedPath("uk", path)}`,
      ru: `${siteUrl}${getLocalizedPath("ru", path)}`,
      "x-default": `${siteUrl}${path}`,
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const homePages = locales.map((locale): SitemapEntry => ({
    url: `${siteUrl}${getLocalizedPath(locale, "/")}`,
    changeFrequency: "monthly" as const,
    priority: locale === "en" ? 1 : 0.9,
    alternates: getAlternates("/"),
  }));

  const caseStudyPages = projects.flatMap((project): SitemapEntry[] => {
    const path = `/work/${project.slug}`;

    return locales.map((locale): SitemapEntry => ({
      url: `${siteUrl}${getLocalizedPath(locale, path)}`,
      changeFrequency: "yearly" as const,
      priority: 0.8,
      alternates: getAlternates(path),
    }));
  });

  return homePages.concat(caseStudyPages);
}
