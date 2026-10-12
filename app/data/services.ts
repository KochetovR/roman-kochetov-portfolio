import type { Locale } from "../lib/locale";

export const serviceProjects = {
  websites: "alma-soft",
  applications: "igaming-platform",
  admin: "gaming-marketplace",
  integrations: "igaming-platform",
  maintenance: "casino-platform",
  performance: "casino-platform",
} as const;

type Service = {
  id: keyof typeof serviceProjects;
  title: string;
  description: string;
  deliverables: string[];
};

type ServicesContent = {
  eyebrow: string;
  title: string;
  description: string;
  items: Service[];
  caseStudy: string;
  contactTitle: string;
  contactDescription: string;
  contactLabel: string;
};

export const services: Record<Locale, ServicesContent> = {
  en: {
    eyebrow: "Services",
    title: "Web development for your next project",
    description: "From a business website to a complex product interface — here is how I can help, drawing on 5 years of commercial frontend experience.",
    items: [
      {
        id: "websites",
        title: "Business websites & landing pages",
        description: "Turn your design into a responsive website that presents your business, services or product clearly on every screen.",
        deliverables: ["Responsive development from Figma layouts", "Interactive sections and GSAP animations", "Multilingual pages and reusable components"],
      },
      {
        id: "applications",
        title: "Web application frontends",
        description: "Build the customer-facing part of your product with React, Next.js, Vue or Nuxt, from individual screens to connected user flows.",
        deliverables: ["Customer portals and product catalogs", "Search, filters, forms and navigation", "Responsive interfaces connected to your API"],
      },
      {
        id: "admin",
        title: "Admin panels & internal tools",
        description: "Give your team practical interfaces for managing content and product data, or extend the tools you already use.",
        deliverables: ["Tables, filters and data-management screens", "Forms with validation and clear feedback", "New sections in existing React or Vue apps"],
      },
      {
        id: "integrations",
        title: "API integrations & live features",
        description: "Connect your frontend to backend services so users can sign in, receive live updates and interact with your product.",
        deliverables: ["REST API integration and loading/error states", "Authentication flows and OAuth integration", "Chat and real-time updates with Socket.IO"],
      },
      {
        id: "maintenance",
        title: "Project improvements & migrations",
        description: "Move an existing frontend forward: resolve interface issues, add features and modernize components while preserving existing functionality.",
        deliverables: ["React, Next.js, Vue and Nuxt feature development", "Vue 2 to Vue 3 migration and Nuxt integration", "UI refactoring and Tailwind CSS implementation"],
      },
      {
        id: "performance",
        title: "Performance & browser fixes",
        description: "Improve loading and interaction on media-heavy websites and address the mobile browser issues that get in your users’ way.",
        deliverables: ["Lazy loading, media preloading and caching", "PWA and server-rendered frontend features", "iOS/Safari layout, scrolling and form fixes"],
      },
    ],
    caseStudy: "Related work",
    contactTitle: "Have a design, an idea or an existing project?",
    contactDescription: "Tell me what you want to build or improve. I can take on the frontend and collaborate with your designer, backend developer or product team.",
    contactLabel: "Discuss your project",
  },
  uk: {
    eyebrow: "Послуги",
    title: "Веброзробка для вашого проєкту",
    description: "Від сайту для бізнесу до складного інтерфейсу продукту — ось із чим я можу допомогти, спираючись на 5 років комерційного досвіду у frontend.",
    items: [
      {
        id: "websites",
        title: "Корпоративні сайти та лендинги",
        description: "Перетворю ваш дизайн на адаптивний сайт, що зрозуміло представляє бізнес, послуги або продукт на будь-якому екрані.",
        deliverables: ["Адаптивна верстка за макетами Figma", "Інтерактивні секції та анімації на GSAP", "Багатомовні сторінки та компоненти для повторного використання"],
      },
      {
        id: "applications",
        title: "Інтерфейси вебзастосунків",
        description: "Розроблю користувацьку частину продукту на React, Next.js, Vue або Nuxt: від окремих екранів до пов’язаних сценаріїв взаємодії.",
        deliverables: ["Особисті кабінети та каталоги продуктів", "Пошук, фільтри, форми й навігація", "Адаптивні інтерфейси з підключенням до вашого API"],
      },
      {
        id: "admin",
        title: "Адмін-панелі та внутрішні інструменти",
        description: "Створю зручні інтерфейси для роботи команди з контентом і даними продукту або розширю можливості наявних інструментів.",
        deliverables: ["Таблиці, фільтри та екрани керування даними", "Форми з валідацією та зрозумілими повідомленнями", "Нові розділи в наявних React або Vue застосунках"],
      },
      {
        id: "integrations",
        title: "Інтеграції API та оновлення наживо",
        description: "Підключу frontend до серверних сервісів, щоб користувачі могли авторизуватися, отримувати оновлення наживо та взаємодіяти з продуктом.",
        deliverables: ["Інтеграція REST API, стани завантаження й помилок", "Сценарії авторизації та інтеграція OAuth", "Чат і оновлення в реальному часі на Socket.IO"],
      },
      {
        id: "maintenance",
        title: "Доопрацювання та міграція проєктів",
        description: "Допоможу розвивати наявний frontend: виправити помилки інтерфейсу, додати функції та оновити компоненти зі збереженням поточної функціональності.",
        deliverables: ["Нові функції на React, Next.js, Vue та Nuxt", "Міграція з Vue 2 на Vue 3 та інтеграція Nuxt", "Рефакторинг інтерфейсу та впровадження Tailwind CSS"],
      },
      {
        id: "performance",
        title: "Швидкодія та сумісність із браузерами",
        description: "Покращу завантаження й взаємодію на сайтах із великою кількістю медіа та виправлю проблеми мобільних браузерів, які заважають користувачам.",
        deliverables: ["Відкладене завантаження, підвантаження медіа та кешування", "Можливості PWA та серверного рендерингу frontend", "Виправлення верстки, прокручування й форм в iOS/Safari"],
      },
    ],
    caseStudy: "Приклад роботи",
    contactTitle: "Є дизайн, ідея або готовий проєкт?",
    contactDescription: "Розкажіть, що хочете створити чи покращити. Я можу взяти на себе frontend і співпрацювати з вашим дизайнером, бекенд-розробником або продуктовою командою.",
    contactLabel: "Обговорити проєкт",
  },
  ru: {
    eyebrow: "Услуги",
    title: "Веб-разработка для вашего проекта",
    description: "От сайта для бизнеса до сложного интерфейса продукта — вот с чем я могу помочь, опираясь на 5 лет коммерческого опыта во frontend.",
    items: [
      {
        id: "websites",
        title: "Корпоративные сайты и лендинги",
        description: "Превращу ваш дизайн в адаптивный сайт, который понятно представляет бизнес, услуги или продукт на любом экране.",
        deliverables: ["Адаптивная верстка по макетам Figma", "Интерактивные секции и анимации на GSAP", "Многоязычные страницы и переиспользуемые компоненты"],
      },
      {
        id: "applications",
        title: "Интерфейсы веб-приложений",
        description: "Разработаю пользовательскую часть продукта на React, Next.js, Vue или Nuxt: от отдельных экранов до связанных сценариев взаимодействия.",
        deliverables: ["Личные кабинеты и каталоги продуктов", "Поиск, фильтры, формы и навигация", "Адаптивные интерфейсы с подключением к вашему API"],
      },
      {
        id: "admin",
        title: "Админ-панели и внутренние инструменты",
        description: "Создам удобные интерфейсы для работы команды с контентом и данными продукта или расширю возможности существующих инструментов.",
        deliverables: ["Таблицы, фильтры и экраны управления данными", "Формы с валидацией и понятными сообщениями", "Новые разделы в существующих React или Vue приложениях"],
      },
      {
        id: "integrations",
        title: "Интеграции API и обновления в реальном времени",
        description: "Подключу frontend к серверным сервисам, чтобы пользователи могли авторизоваться, получать обновления в реальном времени и взаимодействовать с продуктом.",
        deliverables: ["Интеграция REST API, состояния загрузки и ошибок", "Сценарии авторизации и интеграция OAuth", "Чат и обновления в реальном времени на Socket.IO"],
      },
      {
        id: "maintenance",
        title: "Доработка и миграция проектов",
        description: "Помогу развивать существующий frontend: исправить ошибки интерфейса, добавить функции и обновить компоненты с сохранением текущей функциональности.",
        deliverables: ["Новые функции на React, Next.js, Vue и Nuxt", "Миграция с Vue 2 на Vue 3 и интеграция Nuxt", "Рефакторинг интерфейса и внедрение Tailwind CSS"],
      },
      {
        id: "performance",
        title: "Скорость и совместимость с браузерами",
        description: "Улучшу загрузку и взаимодействие на сайтах с большим количеством медиа и исправлю проблемы мобильных браузеров, которые мешают пользователям.",
        deliverables: ["Отложенная загрузка, предзагрузка медиа и кеширование", "Возможности PWA и серверного рендеринга frontend", "Исправления верстки, прокрутки и форм в iOS/Safari"],
      },
    ],
    caseStudy: "Пример работы",
    contactTitle: "Есть дизайн, идея или готовый проект?",
    contactDescription: "Расскажите, что хотите создать или улучшить. Я могу взять на себя frontend и работать с вашим дизайнером, бэкенд-разработчиком или продуктовой командой.",
    contactLabel: "Обсудить проект",
  },
};
