export type ProjectMedia = {
  alt: string;
  height: number;
  src: string;
  width: number;
};

export type ProjectCaseStudy = {
  approach: string[];
  outcome: string[];
  overview: string[];
};

export type Project = {
  caseStudy?: ProjectCaseStudy;
  href?: string;
  image: ProjectMedia;
  media: ProjectMedia[];
  notice?: string;
  slug: string;
  summary: string;
  technologies: string[];
  title: string;
};

export const projects: Project[] = [
  {
    caseStudy: {
      approach: [
        "I built the frontend with Vue 3, focusing heavily on scroll-driven interactions and motion. Several sections use pinned layouts where scrolling controls the animation timeline instead of immediately moving to the next part of the page.",
        "Within these sections, content is progressively revealed through coordinated GSAP animations — text, visual elements, icon groups, backgrounds, and project showcases appear and transition as the user continues scrolling. The implementation required careful synchronization of pinned sections, animation states, and responsive behavior across different screen sizes. I also developed reusable project modals, mobile slider-based layouts, and an AI assistant with Google and LinkedIn authentication, while keeping the overall interface responsive and consistent across desktop and mobile devices.",
      ],
      outcome: [
        "The result is a responsive, motion-driven corporate website where scrolling becomes part of the user experience rather than simple page navigation. Complex pinned sections and coordinated animations create a more engaging presentation while reusable components and responsive layouts keep the implementation maintainable across devices. The project also combines these visual interactions with practical functionality such as project showcases, OAuth authentication, PWA support, and an AI-powered assistant.",
      ],
      overview: [
        "Alma-Soft is a corporate website for a software development company, created as an interactive presentation of its services, team, experience, and completed projects. Rather than relying on traditional static sections, the website uses motion and scroll-based storytelling throughout the experience. It also includes an interactive portfolio, responsive mobile layouts, project detail modals, and an AI assistant for answering questions about the company and its services.",
      ],
    },
    href: "https://alma-soft.com/",
    image: { alt: "Alma-Soft corporate website homepage", height: 2120, src: "/assets/img/work/alma-soft/alma-soft-1.webp", width: 3756 },
    media: [
      { alt: "Alma-Soft website homepage", height: 2120, src: "/assets/img/work/alma-soft/alma-soft-1.webp", width: 3756 },
      { alt: "Alma-Soft website section", height: 2120, src: "/assets/img/work/alma-soft/alma-soft-2.webp", width: 3756 },
      { alt: "Alma-Soft website portfolio", height: 2120, src: "/assets/img/work/alma-soft/alma-soft-3.webp", width: 3756 },
      { alt: "Alma-Soft website contact section", height: 2120, src: "/assets/img/work/alma-soft/alma-soft-4.webp", width: 3756 },
      { alt: "Alma-Soft website on mobile", height: 1280, src: "/assets/img/work/alma-soft/alma-soft-5.webp", width: 590 },
      { alt: "Alma-Soft website mobile section", height: 1280, src: "/assets/img/work/alma-soft/alma-soft-6.webp", width: 590 },
      { alt: "Alma-Soft website mobile interface", height: 1280, src: "/assets/img/work/alma-soft/alma-soft-7.webp", width: 590 },
    ],
    slug: "alma-soft",
    summary: "Corporate website with complex GSAP animations, scroll-driven interactions, responsive layouts, and interactive project showcases. Includes an AI assistant with Google and LinkedIn authentication, plus PWA support.",
    technologies: ["Vue 3", "GSAP", "Tailwind CSS", "Swiper", "Vue Router", "Vuex", "Axios", "OAuth", "PWA"],
    title: "Alma-Soft",
  },
  {
    caseStudy: {
      approach: [
        "I worked on the frontend architecture and implementation across routing, layouts, reusable components, performance optimization, responsive behavior, and real-time functionality.",
        "Localization is integrated across navigation, content, promotional flows, and interactive components using a shared i18n structure.",
        "The homepage includes video-based promotional banners with cached media playback and automatic transitions, multiple game sliders, provider and collection sections, bonus showcases, and progressive game loading. Provider game lists are preloaded in batches so the next group of games is ready before the user requests it, reducing visible loading states.",
        "A major part of the work focused on performance and perceived speed. The platform uses PWA and service worker caching, CDN-level media caching, media preloading before modals are opened, skeleton states, and custom loading strategies. I also handled multiple browser-specific issues, especially on iOS and Safari, including scroll restoration, fixed mobile navigation, blur rendering, and backdrop-filter behavior.",
        "The platform also includes several real-time and interactive systems built from custom components. I developed a daily prize wheel with up to 20 sectors, weighted result handling, share-based extra spins, and animated prize states. The same wheel engine is also used in multiplayer giveaways powered by Socket.IO, where participants, rounds, winners, wheel state, and animations are synchronized in real time.",
        "I also built an alternative slot-machine giveaway mode with animated reels, timed draws, participant IDs, winner highlighting, sound effects, and live winner updates. Socket.IO is additionally used for chat, payments, and other real-time platform events.",
      ],
      outcome: [
        "The platform is live in production and reliably serves several thousand users, combining responsive performance with real-time features, media-heavy content, dynamic routing, and custom interactive mechanics.",
        "The project demonstrates my ability to build and maintain complex frontend systems with multiple layouts, Socket.IO-based real-time functionality, advanced caching and preloading strategies, PWA support, custom animations, and browser-specific optimization for iOS and Safari.",
      ],
      overview: [
        "This project is a full-featured iGaming platform with a large number of dynamic and static routes, including game categories, collections, individual games, bonuses, promotions, providers, sports betting, profile pages, technical pages, geo-restricted flows, FAQ, and informational sections.",
        "The platform supports four languages and uses multiple custom layouts for different page types, including sports, game, category, geo-blocked, and default views. It also includes casino and slot-specific content, dynamic game listings, provider filtering, game search, promotional banners, collections, bonus sections, and integrated iframe-based sports and game experiences.",
      ],
    },
    image: { alt: "iGaming platform game catalogue and promotions", height: 768, src: "/assets/img/work/casino/1.png", width: 1024 },
    media: [
      { alt: "iGaming platform game catalogue", height: 768, src: "/assets/img/work/casino/1.png", width: 1024 },
      { alt: "iGaming platform interface", height: 1238, src: "/assets/img/work/casino/2.png", width: 1534 },
      { alt: "iGaming platform promotion", height: 1282, src: "/assets/img/work/casino/3.png", width: 1532 },
      { alt: "iGaming platform on mobile", height: 1280, src: "/assets/img/work/casino/41.jpg", width: 590 },
      { alt: "iGaming platform feature", height: 1264, src: "/assets/img/work/casino/6.png", width: 1535 },
    ],
    notice: "Commercial project — link unavailable",
    slug: "igaming-platform",
    summary: "Full-featured responsive gaming platform with 50+ game providers, casino and sports betting integrations, multilingual support, real-time Socket.IO updates, and interactive promotional features.",
    technologies: ["Vue 3", "Nuxt 3", "Socket.IO", "Vuex", "Axios", "Swiper", "SCSS", "PWA", "Vue I18n", "Nuxt Image", "VueUse"],
    title: "iGaming Platform",
  },
  {
    caseStudy: {
      approach: [
        "My work focused on frontend refactoring, UI modernization, responsive implementation, and extending existing product functionality.",
        "On the landing page and marketplace, I participated in replacing legacy Bootstrap-based UI with reusable React components styled with Tailwind CSS, updating layouts to match the new visual design, and fixing existing frontend issues across desktop and mobile views.",
        "I also worked with marketplace-specific functionality, including product listings, filtering, sorting, authentication, wallet connectivity, and Web3-related flows using Wagmi, Web3Modal, WalletConnect, ethers, and viem.",
        "In addition to the public-facing frontend, I contributed to the React-based administration panel by fixing existing issues and implementing new sections, forms, tables, and data-management interfaces.",
      ],
      outcome: [
        "The result was a more modern, responsive, and maintainable frontend across the platform’s landing page and marketplace, with legacy Bootstrap-based UI gradually replaced by a more flexible React and Tailwind CSS implementation.",
        "My contribution covered both user-facing and administrative interfaces, including refactoring existing components, implementing new UI, resolving frontend bugs, and extending internal management functionality.",
      ],
      overview: [
        "This project is a gaming platform consisting of a promotional landing page, a digital asset marketplace, and a separate administration interface.",
        "The main frontend was undergoing a major UI modernization: the existing Bootstrap-based implementation was gradually replaced with a new React, Next.js, and Tailwind CSS stack. I contributed to this refactoring across both the landing page and marketplace, helping migrate existing interfaces to the updated design while preserving the platform’s existing functionality.",
      ],
    },
    href: "https://artyfact.game/ru",
    image: { alt: "Artyfact digital asset marketplace", height: 1224, src: "/assets/img/work/arty/main.png", width: 1476 },
    media: [
      { alt: "Artyfact digital asset marketplace", height: 1224, src: "/assets/img/work/arty/main.png", width: 1476 },
      { alt: "Artyfact marketplace interface", height: 1345, src: "/assets/img/work/arty/afty-2.png", width: 1658 },
      { alt: "Artyfact marketplace on mobile", height: 1280, src: "/assets/img/work/arty/arty-3.jpg", width: 572 },
      { alt: "Artyfact mobile interface", height: 1280, src: "/assets/img/work/arty/arty-4.jpg", width: 590 },
      { alt: "Artyfact mobile marketplace", height: 1280, src: "/assets/img/work/arty/arty-5.jpg", width: 590 },
    ],
    slug: "gaming-marketplace",
    summary: "Frontend refactoring and UI modernization for a gaming platform with a promotional landing page, digital asset marketplace, and administration interface. Contributed to migrating legacy Bootstrap UI to React, Next.js, and Tailwind CSS, while also extending marketplace and admin functionality.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "WalletConnect", "Web3Modal", "ethers", "wagmi", "viem"],
    title: "Gaming Marketplace",
  },
  {
    caseStudy: {
      approach: [
        "A major challenge was building the interface around a fixed viewport where both width and height are tightly controlled and traditional page scrolling is disabled. This required careful responsive handling across desktop and mobile devices, especially on iOS Safari.",
        "I implemented and maintained animated modal flows, multilingual UI states, game and provider navigation, and real-time functionality using Socket.IO for chat, balance updates during gameplay, and deposit and withdrawal status changes.",
        "I also worked on Safari- and iOS-specific issues, including virtual keyboard behavior, input focus, and form visibility inside non-scrollable layouts. To improve loading speed and stability, the project uses service workers, PWA functionality, CDN caching, and cached media delivery.",
      ],
      outcome: [
        "The platform is live in production and performs reliably under traffic from several thousand users, while maintaining responsive interactions, real-time updates, multilingual content, and media-heavy functionality.",
        "The project demonstrates my experience with Vue migrations, Nuxt integration, SEO optimization, Socket.IO, internationalization, PWA architecture, caching strategies, and solving browser-specific UI issues in non-standard responsive layouts.",
      ],
      overview: [
        "This project is a responsive casino platform built around a fixed viewport layout with no page scrolling. I originally developed the frontend with Vue 2, later migrated it to Vue 3, and eventually integrated Nuxt 3 while also working on SEO optimization.",
        "The application uses a modal-driven architecture for most user flows, with animated overlays handling account actions, payments, providers, categories, profile settings, transaction history, chat, and other interactive content. The platform also includes multilingual support, a game slider, fixed bottom navigation, sound controls, a blog section, and additional user-facing flows.",
      ],
    },
    image: { alt: "Casino platform game catalogue", height: 2120, src: "/assets/img/work/casino-2/casion-1.png", width: 3054 },
    media: [
      { alt: "Casino platform game catalogue", height: 2120, src: "/assets/img/work/casino-2/casion-1.png", width: 3054 },
      { alt: "Casino platform on mobile", height: 1280, src: "/assets/img/work/casino-2/casion-2.jpg", width: 590 },
      { alt: "Casino platform mobile promotion", height: 1280, src: "/assets/img/work/casino-2/casion-3.jpg", width: 590 },
      { alt: "Casino platform mobile interface", height: 1280, src: "/assets/img/work/casino-2/casion-4.jpg", width: 590 },
      { alt: "Casino platform mobile account", height: 1280, src: "/assets/img/work/casino-2/casion-5.jpg", width: 590 },
    ],
    notice: "Commercial project — link unavailable",
    slug: "casino-platform",
    summary: "Responsive casino frontend built around a fixed viewport and modal-driven architecture. Evolved from Vue 2 to Vue 3 and later Nuxt 3, with multilingual support, real-time Socket.IO updates, PWA caching, SEO optimization, and iOS/Safari-specific fixes.",
    technologies: ["Vue 3", "Nuxt 3", "Socket.IO", "Vuex", "Vue I18n", "Axios", "Swiper", "SCSS", "Nitro", "Memcached"],
    title: "Casino Platform",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
