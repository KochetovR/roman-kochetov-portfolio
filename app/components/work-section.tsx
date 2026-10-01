import Image from "next/image";

const projects = [
  {
    description:
      "Corporate website with complex GSAP animations, scroll-driven interactions, responsive layouts, and interactive project showcases. Includes an AI assistant with Google and LinkedIn authentication, plus PWA support.",
    href: "https://alma-soft.com/",
    image: "/assets/img/work/alma-soft/alma-soft-1.webp",
    imageAlt: "Alma-Soft corporate website homepage",
    technologies: ["Vue 3", "GSAP", "Tailwind CSS", "Swiper", "Vue Router", "Vuex", "Axios", "OAuth", "PWA"],
    title: "Alma-Soft",
  },
  {
    description:
      "Full-featured responsive gaming platform with 50+ game providers, casino and sports betting integrations, multilingual support, real-time Socket.IO updates, and interactive promotional features.",
    image: "/assets/img/work/casino/1.png",
    imageAlt: "iGaming platform game catalogue and promotions",
    notice: "Commercial project — link unavailable",
    technologies: ["Vue 3", "Nuxt 3", "Socket.IO", "Vuex", "Axios", "Swiper", "SCSS", "PWA", "Vue I18n", "Nuxt Image", "VueUse"],
    title: "iGaming Platform",
  },
  {
    description:
      "Frontend refactoring and UI modernization for a gaming platform with a promotional landing page and digital asset marketplace. Rebuilt legacy UI, created reusable responsive components, and worked on marketplace and wallet flows.",
    href: "https://artyfact.game/ru",
    image: "/assets/img/work/artyfact/main.png",
    imageAlt: "Artyfact digital asset marketplace",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "WalletConnect", "Web3Modal", "ethers", "wagmi", "viem"],
    title: "Gaming Marketplace",
  },
  {
    description:
      "Full casino frontend built from scratch and evolved from Vue 2 to Vue 3 and later Nuxt 3. The modal-driven application includes game providers, payments, transaction history, multilingual support, real-time updates, chat, promotions, profile management, and responsive layouts.",
    image: "/assets/img/work/casino-2/casion-1.png",
    imageAlt: "Casino platform game catalogue",
    notice: "Commercial project — link unavailable",
    technologies: ["Vue 3", "Nuxt 3", "Socket.IO", "Vuex", "Vue I18n", "Axios", "Swiper", "SCSS", "Nitro", "Memcached"],
    title: "Casino Platform",
  },
];

export function WorkSection() {
  return (
    <section
      aria-labelledby="work-title"
      className="bg-page px-[var(--content-padding-inline)] py-[var(--section-padding-block)]"
      id="work"
    >
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <div className="mx-auto w-fit rounded-xl bg-muted px-3 py-1 type-body-3-medium text-secondary">
          Work
        </div>
        <h2 className="type-subtitle mx-auto mt-4 max-w-xl text-center text-primary" id="work-title">
          A selection of projects I&apos;ve built and helped bring to life.
        </h2>

        <div className="mx-auto mt-10 max-w-6xl space-y-6 md:mt-12 md:space-y-8">
          {projects.map((project, index) => (
            <article
              className="group overflow-hidden rounded-2xl bg-card p-4 shadow-md transition-shadow duration-300 hover:shadow-lg md:grid md:grid-cols-2 md:items-center md:gap-10 md:p-6 lg:gap-14 lg:p-8"
              key={project.title}
            >
              <div className={`relative aspect-[16/10] overflow-hidden rounded-xl bg-raised ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <Image
                  alt={project.imageAlt}
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                  fill
                  sizes="(max-width: 767px) calc(100vw - 64px), (max-width: 1023px) calc(100vw - 176px), 620px"
                  src={project.image}
                />
              </div>

              <div className={`mt-6 ${index % 2 === 1 ? "md:order-1" : ""} md:mt-0`}>
                <h3 className="type-h3 text-primary">{project.title}</h3>
                <p className="type-body-3 mt-3 text-secondary md:mt-4">{project.description}</p>
                <ul aria-label={`${project.title} technologies`} className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <li className="rounded-xl bg-muted px-3 py-1 type-body-3-medium text-secondary" key={technology}>
                      {technology}
                    </li>
                  ))}
                </ul>
                {project.href ? (
                  <a
                    className="type-body-3 mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 font-semibold text-on-inverse transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-90"
                    href={project.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Visit website
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <p className="type-body-3 mt-6 text-secondary">{project.notice}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
