import type { Metadata } from "next";
import { getProject } from "../data/projects";
import type { Locale } from "./locale";

export const siteUrl = "https://roman-kochetov-portfolio.netlify.app";

const siteName = "Roman Kochetov";
const socialImage = {
  url: "/thumbnail.webp",
  width: 1731,
  height: 909,
  alt: "Roman Kochetov, Front-end Developer",
};

// Retained by preference. These intent-based phrases are not search-volume
// research, and Google does not use meta keywords for indexing or ranking.
const homeSeo: Record<Locale, { description: string; keywords: string[]; locale: string; title: string }> = {
  en: {
    title: "Custom Website & Frontend Development | React & Vue",
    description: "Need a website or web app frontend? I build business websites, landing pages and product interfaces with React, Next.js, Vue and Nuxt. Let's discuss your project.",
    keywords: [
      "custom website development",
      "frontend development services",
      "landing page development",
      "web application frontend development",
      "business website development",
      "hire React developer",
      "hire Vue.js developer",
      "Next.js development services",
      "Nuxt development services",
      "website redesign",
      "Figma to responsive website",
      "mobile responsive website development",
      "customer portal frontend development",
      "admin panel frontend development",
      "frontend API integration",
      "multilingual website development",
      "PWA development services",
      "website speed optimization",
      "website frontend bug fixes",
      "React application maintenance",
      "Vue 2 to Vue 3 migration",
      "GSAP website animations",
      "marketplace frontend development",
      "frontend maintenance and support",
      "hire frontend developer",
      "Figma to React development",
      "Figma to Vue development",
      "custom dashboard frontend development",
      "website form development and validation",
      "website login and authentication integration",
      "website search interface development",
      "product filtering and sorting interface development",
      "website chat frontend integration",
      "real-time frontend development with Socket.IO",
      "server-side rendering with Next.js and Nuxt",
      "Safari and iOS website bug fixes",
      "website layout fixes",
      "frontend code refactoring",
      "reusable React and Vue component development",
      "Tailwind CSS interface development",
      "existing Vue application development",
      "Next.js application maintenance",
      "developer to finish an existing website",
      "interactive product catalog frontend development",
      "scroll animation development",
    ],
    locale: "en_US",
  },
  uk: {
    title: "Розробка сайтів і вебінтерфейсів на замовлення",
    description: "Потрібен сайт або інтерфейс вебзастосунку? Розробляю сайти для бізнесу, лендинги й особисті кабінети на React, Next.js, Vue та Nuxt. Обговорімо ваш проєкт.",
    keywords: [
      "розробка сайтів на замовлення",
      "замовити розробку сайту",
      "розробка лендингу",
      "frontend розробка вебзастосунків",
      "створення сайту для бізнесу",
      "найняти React розробника",
      "найняти Vue.js розробника",
      "розробка на Next.js",
      "розробка на Nuxt",
      "доопрацювання сайту",
      "верстка сайту за макетом Figma",
      "адаптація сайту під мобільні пристрої",
      "розробка інтерфейсу особистого кабінету",
      "розробка інтерфейсу адмін-панелі",
      "інтеграція API у frontend",
      "розробка багатомовного сайту",
      "розробка PWA застосунків",
      "прискорення завантаження сайту",
      "виправлення помилок інтерфейсу сайту",
      "доопрацювання застосунку на React",
      "міграція з Vue 2 на Vue 3",
      "анімації для сайту на GSAP",
      "frontend розробка маркетплейсу",
      "підтримка frontend вебзастосунку",
      "найняти frontend розробника",
      "верстка Figma на React",
      "верстка Figma на Vue",
      "розробка інтерфейсу дашборду",
      "створення форм на сайті з валідацією",
      "підключення авторизації на сайті",
      "розробка інтерфейсу пошуку на сайті",
      "розробка фільтрів і сортування товарів",
      "інтеграція інтерфейсу чату на сайт",
      "оновлення даних у реальному часі на Socket.IO",
      "налаштування SSR на Next.js і Nuxt",
      "виправлення помилок сайту в Safari та на iPhone",
      "виправлення верстки сайту",
      "рефакторинг frontend коду",
      "розробка компонентів React і Vue",
      "верстка інтерфейсів на Tailwind CSS",
      "доопрацювання застосунку на Vue",
      "підтримка застосунку на Next.js",
      "розробник для завершення чужого проєкту",
      "розробка інтерфейсу каталогу товарів",
      "створення анімацій при прокручуванні сайту",
    ],
    locale: "uk_UA",
  },
  ru: {
    title: "Разработка сайтов и веб-интерфейсов на заказ",
    description: "Нужен сайт или интерфейс веб-приложения? Разрабатываю сайты для бизнеса, лендинги и личные кабинеты на React, Next.js, Vue и Nuxt. Обсудим ваш проект.",
    keywords: [
      "разработка сайтов на заказ",
      "заказать разработку сайта",
      "разработка лендинга",
      "frontend разработка веб-приложений",
      "создание сайта для бизнеса",
      "нанять React разработчика",
      "нанять Vue.js разработчика",
      "разработка на Next.js",
      "разработка на Nuxt",
      "доработка сайта",
      "верстка сайта по макету Figma",
      "адаптация сайта под мобильные устройства",
      "разработка интерфейса личного кабинета",
      "разработка интерфейса админ-панели",
      "интеграция API во frontend",
      "разработка многоязычного сайта",
      "разработка PWA приложений",
      "ускорение загрузки сайта",
      "исправление ошибок интерфейса сайта",
      "доработка приложения на React",
      "миграция с Vue 2 на Vue 3",
      "анимации для сайта на GSAP",
      "frontend разработка маркетплейса",
      "поддержка frontend веб-приложения",
      "нанять frontend разработчика",
      "верстка Figma на React",
      "верстка Figma на Vue",
      "разработка интерфейса дашборда",
      "создание форм на сайте с валидацией",
      "подключение авторизации на сайте",
      "разработка интерфейса поиска на сайте",
      "разработка фильтров и сортировки товаров",
      "интеграция интерфейса чата на сайт",
      "обновление данных в реальном времени на Socket.IO",
      "настройка SSR на Next.js и Nuxt",
      "исправление ошибок сайта в Safari и на iPhone",
      "исправление верстки сайта",
      "рефакторинг frontend кода",
      "разработка компонентов React и Vue",
      "верстка интерфейсов на Tailwind CSS",
      "доработка приложения на Vue",
      "поддержка приложения на Next.js",
      "разработчик для завершения чужого проекта",
      "разработка интерфейса каталога товаров",
      "создание анимаций при прокрутке сайта",
    ],
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

function getAlternates(locale: Locale, path: string) {
  return {
    canonical: getLocalizedPath(locale, path),
    languages: {
      en: getLocalizedPath("en", path),
      uk: getLocalizedPath("uk", path),
      ru: getLocalizedPath("ru", path),
      "x-default": getLocalizedPath("en", path),
    },
  };
}

function createMetadata(locale: Locale, path: string, title: string, description: string, keywords: string[], type: "article" | "website"): Metadata {
  const localizedPath = getLocalizedPath(locale, path);

  return {
    title,
    description,
    keywords,
    alternates: getAlternates(locale, path),
    openGraph: {
      type,
      title,
      description,
      url: localizedPath,
      siteName,
      locale: homeSeo[locale].locale,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage.url],
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
  const keywords = [project.title, ...project.technologies];

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
