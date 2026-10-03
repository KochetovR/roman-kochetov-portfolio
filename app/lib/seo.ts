import type { Metadata } from "next";
import { getProject } from "../data/projects";
import type { Locale } from "./locale";

export const siteUrl = "https://roman-kochetov-portfolio.netlify.app";

const siteName = "Roman Kochetov";

const homeSeo: Record<Locale, { description: string; keywords: string[]; locale: string; title: string }> = {
  en: {
    title: "Roman Kochetov — Front-end Developer | Vue, React & Next.js",
    description: "Front-end developer in Odesa, Ukraine with 5 years of experience building responsive web applications with Vue.js, Nuxt, React, Next.js, and TypeScript.",
    keywords: ["Roman Kochetov", "front-end developer", "frontend developer", "Vue.js developer", "React developer", "Next.js developer", "TypeScript developer", "Odesa", "Ukraine"],
    locale: "en_US",
  },
  uk: {
    title: "Роман Кочетков — Front-end розробник | Vue, React і Next.js",
    description: "Front-end розробник з Одеси з 5 роками досвіду створення адаптивних вебзастосунків на Vue.js, Nuxt, React, Next.js і TypeScript.",
    keywords: ["Роман Кочетков", "front-end розробник", "frontend розробник", "Vue.js розробник", "React розробник", "Next.js розробник", "TypeScript розробник", "Одеса", "Україна"],
    locale: "uk_UA",
  },
  ru: {
    title: "Роман Кочетков — Front-end разработчик | Vue, React и Next.js",
    description: "Front-end разработчик из Одессы с 5 годами опыта создания адаптивных веб-приложений на Vue.js, Nuxt, React, Next.js и TypeScript.",
    keywords: ["Роман Кочетков", "front-end разработчик", "frontend разработчик", "Vue.js разработчик", "React разработчик", "Next.js разработчик", "TypeScript разработчик", "Одесса", "Украина"],
    locale: "ru_RU",
  },
};

const caseStudyLabels: Record<Locale, string> = {
  en: "Case Study",
  uk: "Опис проєкту",
  ru: "Описание проекта",
};

function getLocalizedPath(locale: Locale, path: string) {
  if (locale === "en") return path;

  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

function getAlternates(path: string) {
  return {
    canonical: path,
    languages: {
      en: getLocalizedPath("en", path),
      uk: getLocalizedPath("uk", path),
      ru: getLocalizedPath("ru", path),
      "x-default": getLocalizedPath("en", path),
    },
  };
}

function createMetadata(locale: Locale, path: string, title: string, description: string, keywords: string[], type: "article" | "website"): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: getAlternates(path),
    openGraph: {
      type,
      title,
      description,
      url: path,
      siteName,
      locale: homeSeo[locale].locale,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export function createHomeMetadata(locale: Locale): Metadata {
  const seo = homeSeo[locale];

  return createMetadata(locale, "/", seo.title, seo.description, seo.keywords, "website");
}

export function createCaseStudyMetadata(locale: Locale, slug: string): Metadata {
  const project = getProject(slug, locale);

  if (!project) {
    return { robots: { index: false, follow: false } };
  }

  const path = `/work/${slug}`;
  const title = `${project.title} — ${caseStudyLabels[locale]} | ${siteName}`;
  const description = project.summary.length > 160 ? `${project.summary.slice(0, 157).trimEnd()}…` : project.summary;
  const keywords = [project.title, ...project.technologies, ...homeSeo[locale].keywords.slice(1, 6)];

  return createMetadata(locale, path, title, description, keywords, "article");
}

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteName,
  url: siteUrl,
  jobTitle: "Front-end Developer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Odesa",
    addressCountry: "UA",
  },
  sameAs: [
    "https://www.linkedin.com/in/roman-kochetov-98a8721b9/",
    "https://t.me/RomanKochetov",
    "https://github.com/KochetovR",
  ],
  knowsAbout: ["Vue.js", "Nuxt", "React", "Next.js", "TypeScript", "Frontend development"],
};
