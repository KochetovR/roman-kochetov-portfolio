import Image from "next/image";
import { getTranslation } from "../data/translations";
import type { Locale } from "../lib/locale";

const skills = [
  { icon: "js.svg", label: "JavaScript" },
  { icon: "ts.svg", label: "TypeScript" },
  { icon: "vue-js.svg", label: "Vue.js" },
  { icon: "nuxt-js.svg", label: "Nuxt" },
  { icon: "react.svg", label: "React" },
  { icon: "next.svg", label: "Next.js" },
  { icon: "html.svg", label: "HTML5" },
  { icon: "css.svg", label: "CSS3" },
  { icon: "sass.svg", label: "Sass / SCSS" },
  { icon: "tailwindcss.svg", label: "Tailwind CSS" },
  { icon: "pinia.svg", label: "Pinia" },
  { icon: "redux.svg", label: "Redux Toolkit" },
  { icon: "vuetify.svg", label: "Vuetify" },
  { icon: "rest-api.svg", label: "REST API", themeClass: "skill-icon-invert-dark" },
  { icon: "socket.svg", label: "Socket.IO", themeClass: "skill-icon-invert-light" },
  { icon: "axios.svg", label: "Axios" },
  { icon: "oauth.svg", label: "OAuth / Auth", themeClass: "skill-icon-invert-dark" },
  { icon: "i18next.svg", label: "i18next", themeClass: "skill-icon-invert-dark" },
  { icon: "ssr-pwa.svg", label: "SSR / PWA", themeClass: "skill-icon-invert-dark" },
  { icon: "vite.svg", label: "Vite" },
  { icon: "npm.svg", label: "npm" },
  { icon: "browser-stack.svg", label: "BrowserStack" },
  { icon: "postman.svg", label: "Postman" },
  { icon: "docker.svg", label: "Docker" },
  { icon: "git.svg", label: "Git" },
  { icon: "gitlab.svg", label: "GitLab" },
  { icon: "jira.svg", label: "Jira" },
  { icon: "figma.svg", label: "Figma" },
  { icon: "adobe-xd.svg", label: "Adobe XD" },
  { icon: "flutter.svg", label: "Flutter" },
];

export function SkillsSection({ locale }: { locale: Locale }) {
  const text = getTranslation(locale).skills;

  return (
    <section
      aria-labelledby="skills-title"
      className="bg-page px-[var(--content-padding-inline)] py-[var(--section-padding-block)]"
      id="skills"
    >
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <div className="mx-auto w-fit rounded-xl bg-muted px-3 py-1 type-body-3-medium text-secondary">
          {text.eyebrow}
        </div>
        <h2 className="type-subtitle mx-auto mt-4 max-w-xl text-center text-primary" id="skills-title">
          {text.title}
        </h2>

        <ul className="mx-auto mt-10 grid max-w-6xl grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-8 md:grid-cols-6 md:gap-y-10">
          {skills.map((skill) => (
            <li className="flex flex-col items-center gap-3" key={skill.icon}>
              <div className="relative h-16 w-16">
                <Image
                  alt=""
                  className={`object-contain ${skill.themeClass ?? ""}`}
                  decoding="async"
                  fill
                  sizes="64px"
                  src={`/assets/icons/${skill.icon}`}
                  unoptimized
                />
              </div>
              <span className="type-body-2 text-center text-secondary">{skill.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
