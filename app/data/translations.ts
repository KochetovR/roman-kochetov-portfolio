import type { Locale } from "../lib/locale";

type ExperienceItem = {
  highlights: string[];
  period: string;
  role: string;
};

export type Translation = {
  about: {
    eyebrow: string;
    paragraphs: string[];
    title: string;
  };
  caseStudy: {
    approach: string;
    backToWork: string;
    caseStudy: string;
    gallery: string;
    outcome: string;
    overview: string;
    technology: string;
    visitWebsite: string;
  };
  copy: {
    copied: string;
    copy: string;
    emailAddress: string;
    phoneNumber: string;
  };
  experience: {
    eyebrow: string;
    items: ExperienceItem[];
    title: string;
  };
  footer: {
    copyright: string;
    eyebrow: string;
    social: string;
    subtitle: string;
  };
  header: {
    downloadCv: string;
    home: string;
  };
  hero: {
    availability: string;
    description: string;
    greeting: string;
    location: string;
  };
  navigation: {
    about: string;
    contact: string;
    main: string;
    mobile: string;
    work: string;
  };
  scrollToTop: string;
  skills: {
    eyebrow: string;
    title: string;
  };
  theme: {
    dark: string;
    light: string;
    switchToDark: string;
    switchToLight: string;
  };
  work: {
    eyebrow: string;
    readCaseStudy: (title: string) => string;
    technologies: (title: string) => string;
    title: string;
    viewCaseStudy: string;
    visitWebsite: string;
  };
};

export const translations: Record<Locale, Translation> = {
  en: {
    about: {
      eyebrow: "About me",
      title: "Curious about me? Here's a quick introduction:",
      paragraphs: [
        "I'm a Front-end Developer with 5 years of commercial experience building and maintaining responsive web applications with Vue.js, Nuxt, React, Next.js, JavaScript, and TypeScript.",
        "At Alma-Soft, I work on commercial products including iGaming applications, administration interfaces, company websites, and Web3-related platforms. My work spans REST APIs, Socket.IO real-time features, authentication, localization, SSR/PWA, and performance optimisation.",
        "I've helped migrate an iGaming application from Vue 2 to Vue 3 and then Nuxt 3. I also build React and Next.js applications with Redux Toolkit, React Query, and Tailwind CSS.",
        "Earlier at Viseven, I developed Vue.js components for a medical presentation platform and tailored responsive interfaces for iPad. I focus on clean, maintainable code, reusable components, and close collaboration with designers, backend developers, and product teams.",
      ],
    },
    caseStudy: { approach: "Approach and implementation", backToWork: "Back to work", caseStudy: "Case study", gallery: "Project media", outcome: "Outcome", overview: "Project overview", technology: "Technology", visitWebsite: "Visit website" },
    copy: { copied: "Copied", copy: "Copy", emailAddress: "email address", phoneNumber: "phone number" },
    experience: {
      eyebrow: "Experience",
      title: "Here is a quick summary of my most recent experience.",
      items: [
        { period: "Jan 2023 – Present", role: "Front-end Developer", highlights: ["Build commercial applications with Vue.js, Nuxt, React, Next.js, and TypeScript.", "Migrated an iGaming application from Vue 2 to Vue 3 and later Nuxt 3, adding REST API integrations, Socket.IO features, localisation, and responsive UI.", "Developed and extended admin interfaces, including new features, tabs, tables, and forms.", "Developed features for the Artyfact Web3 platform, including its React/Next.js marketplace, landing pages, and admin interface.", "Built the Alma-Soft corporate website with complex GSAP animations.", "Contributed to Flutter mobile applications, including a VPN app and an earlier prototype."] },
        { period: "Sep 2021 – Jan 2023", role: "Front-end Developer", highlights: ["Developed Vue.js components for a medical-product presentation builder.", "Created and adapted responsive presentations optimised for iPad.", "Worked closely with product and design requirements to deliver reliable UI."] },
      ],
    },
    footer: { copyright: "© 2026 Roman Kochetov. All rights reserved.", eyebrow: "Get in touch", social: "You may also find me on these platforms!", subtitle: "What's next? Feel free to reach out if you're looking for a developer, have a query, or simply want to connect." },
    header: { downloadCv: "Download CV", home: "Roman Kochetov — home" },
    hero: { availability: "Available for new projects", description: "I'm a front-end developer with 5 years of experience building responsive web applications and commercial products. I work with Vue.js, Nuxt, React, Next.js, TypeScript, and polished interfaces that perform well at every screen size.", greeting: "Hi, I'm Roman", location: "Odesa, Ukraine" },
    navigation: { about: "About", contact: "Contact", main: "Main navigation", mobile: "Mobile navigation", work: "Work" },
    scrollToTop: "Scroll to top",
    skills: { eyebrow: "Skills", title: "The skills, tools, and technologies I work with." },
    theme: { dark: "Dark theme", light: "Light theme", switchToDark: "Switch to dark theme", switchToLight: "Switch to light theme" },
    work: { eyebrow: "Work", readCaseStudy: (title) => `Read the ${title} case study`, technologies: (title) => `${title} technologies`, title: "A selection of projects I've built and helped bring to life.", viewCaseStudy: "View case study", visitWebsite: "Visit website" },
  },
  uk: {
    about: {
      eyebrow: "Про мене",
      title: "Цікаво дізнатися більше? Ось коротко:",
      paragraphs: [
        "Я Front-end розробник із 5 роками комерційного досвіду створення та підтримки адаптивних вебзастосунків на Vue.js, Nuxt, React, Next.js, JavaScript і TypeScript.",
        "В Alma-Soft я працюю над комерційними продуктами: iGaming-застосунками, адміністративними інтерфейсами, корпоративними сайтами та Web3-платформами. Мій досвід охоплює REST API, real-time функціональність на Socket.IO, автентифікацію, локалізацію, SSR/PWA та оптимізацію продуктивності.",
        "Я допомагав мігрувати iGaming-застосунок з Vue 2 на Vue 3, а згодом на Nuxt 3. Також створюю застосунки на React і Next.js з Redux Toolkit, React Query та Tailwind CSS.",
        "Раніше у Viseven я розробляв Vue.js-компоненти для платформи медичних презентацій і адаптував інтерфейси для iPad. Зосереджуюся на чистому коді, компонентах для повторного використання та тісній співпраці з дизайнерами, бекенд-розробниками й продуктовими командами.",
      ],
    },
    caseStudy: { approach: "Підхід та реалізація", backToWork: "Назад до робіт", caseStudy: "Опис проєкту", gallery: "Матеріали проєкту", outcome: "Результат", overview: "Огляд проєкту", technology: "Технології", visitWebsite: "Відвідати сайт" },
    copy: { copied: "Скопійовано", copy: "Копіювати", emailAddress: "електронну адресу", phoneNumber: "номер телефону" },
    experience: {
      eyebrow: "Досвід",
      title: "Коротко про мій останній досвід роботи.",
      items: [
        { period: "січ. 2023 — дотепер", role: "Front-end розробник", highlights: ["Створюю комерційні застосунки на Vue.js, Nuxt, React, Next.js і TypeScript.", "Мігрував iGaming-застосунок з Vue 2 на Vue 3, а згодом на Nuxt 3, додаючи інтеграції REST API, функціональність Socket.IO, локалізацію та адаптивний UI.", "Розробляв і розширював адміністративні інтерфейси: нові функції, вкладки, таблиці та форми.", "Розробляв функціональність для Web3-платформи Artyfact: маркетплейсу на React/Next.js, лендингів та адміністративного інтерфейсу.", "Створив корпоративний сайт Alma-Soft зі складними GSAP-анімаціями.", "Долучався до Flutter-мобільних застосунків, зокрема VPN-застосунку та раннього прототипу."] },
        { period: "вер. 2021 — січ. 2023", role: "Front-end розробник", highlights: ["Розробляв Vue.js-компоненти для конструктора презентацій медичних продуктів.", "Створював і адаптував адаптивні презентації, оптимізовані для iPad.", "Тісно працював із продуктовими та дизайнерськими вимогами, щоб створювати надійні інтерфейси."] },
      ],
    },
    footer: { copyright: "© 2026 Roman Kochetov. Усі права захищено.", eyebrow: "Зв'язатися", social: "Мене також можна знайти на цих платформах!", subtitle: "Що далі? Напишіть мені, якщо шукаєте розробника, маєте запитання або просто хочете поспілкуватися." },
    header: { downloadCv: "Завантажити CV", home: "Roman Kochetov — головна" },
    hero: { availability: "Відкритий до нових проєктів", description: "Я front-end розробник із 5 роками досвіду створення адаптивних вебзастосунків і комерційних продуктів. Працюю з Vue.js, Nuxt, React, Next.js, TypeScript і створюю продумані інтерфейси, що добре працюють на кожному екрані.", greeting: "Привіт, я Роман", location: "Одеса, Україна" },
    navigation: { about: "Про мене", contact: "Контакти", main: "Основна навігація", mobile: "Мобільна навігація", work: "Роботи" },
    scrollToTop: "Нагору",
    skills: { eyebrow: "Навички", title: "Навички, інструменти й технології, з якими я працюю." },
    theme: { dark: "Темна тема", light: "Світла тема", switchToDark: "Увімкнути темну тему", switchToLight: "Увімкнути світлу тему" },
    work: { eyebrow: "Роботи", readCaseStudy: (title) => `Переглянути опис проєкту ${title}`, technologies: (title) => `Технології ${title}`, title: "Добірка проєктів, які я створив або допоміг втілити.", viewCaseStudy: "Переглянути опис", visitWebsite: "Відвідати сайт" },
  },
  ru: {
    about: {
      eyebrow: "Обо мне",
      title: "Хотите узнать обо мне больше? Вот кратко:",
      paragraphs: [
        "Я Front-end разработчик с 5 годами коммерческого опыта создания и поддержки адаптивных веб-приложений на Vue.js, Nuxt, React, Next.js, JavaScript и TypeScript.",
        "В Alma-Soft я работаю над коммерческими продуктами: iGaming-приложениями, административными интерфейсами, корпоративными сайтами и Web3-платформами. Мой опыт включает REST API, real-time функции на Socket.IO, аутентификацию, локализацию, SSR/PWA и оптимизацию производительности.",
        "Я помогал мигрировать iGaming-приложение с Vue 2 на Vue 3, а затем на Nuxt 3. Также разрабатываю приложения на React и Next.js с Redux Toolkit, React Query и Tailwind CSS.",
        "Ранее в Viseven я разрабатывал Vue.js-компоненты для платформы медицинских презентаций и адаптировал интерфейсы для iPad. Я уделяю внимание чистому поддерживаемому коду, переиспользуемым компонентам и тесному сотрудничеству с дизайнерами, backend-разработчиками и продуктовыми командами.",
      ],
    },
    caseStudy: { approach: "Подход и реализация", backToWork: "К работам", caseStudy: "Описание проекта", gallery: "Материалы проекта", outcome: "Результат", overview: "Обзор проекта", technology: "Технологии", visitWebsite: "Открыть сайт" },
    copy: { copied: "Скопировано", copy: "Копировать", emailAddress: "адрес электронной почты", phoneNumber: "номер телефона" },
    experience: {
      eyebrow: "Опыт",
      title: "Кратко о моём последнем опыте работы.",
      items: [
        { period: "янв. 2023 — настоящее время", role: "Front-end разработчик", highlights: ["Разрабатываю коммерческие приложения на Vue.js, Nuxt, React, Next.js и TypeScript.", "Мигрировал iGaming-приложение с Vue 2 на Vue 3, а затем на Nuxt 3, добавляя интеграции REST API, функции Socket.IO, локализацию и адаптивный UI.", "Разрабатывал и расширял административные интерфейсы: новые функции, вкладки, таблицы и формы.", "Разрабатывал функции для Web3-платформы Artyfact: маркетплейса на React/Next.js, лендингов и административного интерфейса.", "Создал корпоративный сайт Alma-Soft со сложными GSAP-анимациями.", "Участвовал в разработке Flutter-мобильных приложений, включая VPN-приложение и ранний прототип."] },
        { period: "сен. 2021 — янв. 2023", role: "Front-end разработчик", highlights: ["Разрабатывал Vue.js-компоненты для конструктора презентаций медицинских продуктов.", "Создавал и адаптировал адаптивные презентации, оптимизированные для iPad.", "Тесно работал с требованиями продукта и дизайна, чтобы создавать надёжные интерфейсы."] },
      ],
    },
    footer: { copyright: "© 2026 Roman Kochetov. Все права защищены.", eyebrow: "Связаться", social: "Меня также можно найти на этих платформах!", subtitle: "Что дальше? Напишите мне, если ищете разработчика, у вас есть вопрос или вы просто хотите пообщаться." },
    header: { downloadCv: "Скачать CV", home: "Roman Kochetov — главная" },
    hero: { availability: "Открыт к новым проектам", description: "Я front-end разработчик с 5 годами опыта создания адаптивных веб-приложений и коммерческих продуктов. Работаю с Vue.js, Nuxt, React, Next.js, TypeScript и создаю продуманные интерфейсы, которые хорошо работают на любом экране.", greeting: "Привет, я Роман", location: "Одесса, Украина" },
    navigation: { about: "Обо мне", contact: "Контакты", main: "Основная навигация", mobile: "Мобильная навигация", work: "Работы" },
    scrollToTop: "Наверх",
    skills: { eyebrow: "Навыки", title: "Навыки, инструменты и технологии, с которыми я работаю." },
    theme: { dark: "Тёмная тема", light: "Светлая тема", switchToDark: "Включить тёмную тему", switchToLight: "Включить светлую тему" },
    work: { eyebrow: "Работы", readCaseStudy: (title) => `Открыть описание проекта ${title}`, technologies: (title) => `Технологии ${title}`, title: "Подборка проектов, которые я создал или помог воплотить.", viewCaseStudy: "Открыть описание", visitWebsite: "Открыть сайт" },
  },
};

export function getTranslation(locale: Locale) {
  return translations[locale];
}
