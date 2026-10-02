"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { getTranslation } from "../data/translations";
import type { Locale } from "../lib/locale";

const mobileViewportQuery = "(max-width: 767px)";
const modalTransitionDuration = 200;

type Skill = {
  icon: string;
  id: string;
  label: string;
  themeClass?: string;
};

const skills: Skill[] = [
  { id: "javascript", icon: "js.svg", label: "JavaScript" },
  { id: "typescript", icon: "ts.svg", label: "TypeScript" },
  { id: "vue", icon: "vue-js.svg", label: "Vue.js" },
  { id: "nuxt", icon: "nuxt-js.svg", label: "Nuxt" },
  { id: "react", icon: "react.svg", label: "React" },
  { id: "next", icon: "next.svg", label: "Next.js" },
  { id: "html", icon: "html.svg", label: "HTML5" },
  { id: "css", icon: "css.svg", label: "CSS3" },
  { id: "sass", icon: "sass.svg", label: "Sass / SCSS" },
  { id: "tailwind", icon: "tailwindcss.svg", label: "Tailwind CSS" },
  { id: "pinia", icon: "pinia.svg", label: "Pinia" },
  { id: "redux", icon: "redux.svg", label: "Redux Toolkit" },
  { id: "vuetify", icon: "vuetify.svg", label: "Vuetify" },
  { id: "restApi", icon: "rest-api.svg", label: "REST API", themeClass: "skill-icon-invert-dark" },
  { id: "socketIo", icon: "socket.svg", label: "Socket.IO", themeClass: "skill-icon-invert-light" },
  { id: "axios", icon: "axios.svg", label: "Axios" },
  { id: "oauth", icon: "oauth.svg", label: "OAuth / Auth", themeClass: "skill-icon-invert-dark" },
  { id: "i18next", icon: "i18next.svg", label: "i18next", themeClass: "skill-icon-invert-dark" },
  { id: "ssrPwa", icon: "ssr-pwa.svg", label: "SSR / PWA", themeClass: "skill-icon-invert-dark" },
  { id: "vite", icon: "vite.svg", label: "Vite" },
  { id: "npm", icon: "npm.svg", label: "npm" },
  { id: "browserStack", icon: "browser-stack.svg", label: "BrowserStack" },
  { id: "postman", icon: "postman.svg", label: "Postman" },
  { id: "docker", icon: "docker.svg", label: "Docker" },
  { id: "git", icon: "git.svg", label: "Git" },
  { id: "gitlab", icon: "gitlab.svg", label: "GitLab" },
  { id: "jira", icon: "jira.svg", label: "Jira" },
  { id: "figma", icon: "figma.svg", label: "Figma" },
  { id: "adobeXd", icon: "adobe-xd.svg", label: "Adobe XD" },
  { id: "flutter", icon: "flutter.svg", label: "Flutter" },
];

type ModalState = "closed" | "opening" | "open" | "closing";

export function SkillsSection({ locale }: { locale: Locale }) {
  const text = getTranslation(locale).skills;
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);
  const [modalState, setModalState] = useState<ModalState>("closed");
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const closeModal = () => {
    if (modalState === "closed" || modalState === "closing") return;

    setModalState("closing");
  };

  const openSkillDetails = (skill: Skill, trigger: HTMLButtonElement) => {
    if (!window.matchMedia(mobileViewportQuery).matches) {
      trigger.blur();
      return;
    }

    triggerRef.current = trigger;
    setActiveSkill(skill);
    setModalState("opening");
  };

  useEffect(() => {
    if (modalState !== "opening") return;

    const animationFrame = window.requestAnimationFrame(() => setModalState("open"));

    return () => window.cancelAnimationFrame(animationFrame);
  }, [modalState]);

  useEffect(() => {
    if (modalState !== "closing") return;

    const timeout = window.setTimeout(() => {
      setActiveSkill(null);
      setModalState("closed");
      triggerRef.current?.focus();
    }, modalTransitionDuration);

    return () => window.clearTimeout(timeout);
  }, [modalState]);

  useEffect(() => {
    if (modalState !== "open") return;

    closeButtonRef.current?.focus();
  }, [modalState]);

  useEffect(() => {
    if (modalState !== "open") return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setModalState("closing");
    };

    document.addEventListener("keydown", closeOnEscape);

    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [modalState]);

  useEffect(() => {
    if (!activeSkill) return;

    const scrollY = window.scrollY;
    const bodyStyle = document.body.style;
    const htmlStyle = document.documentElement.style;
    const initialBodyStyle = {
      overflow: bodyStyle.overflow,
      position: bodyStyle.position,
      top: bodyStyle.top,
      width: bodyStyle.width,
    };
    const initialScrollBehavior = htmlStyle.scrollBehavior;

    bodyStyle.overflow = "hidden";
    bodyStyle.position = "fixed";
    bodyStyle.top = `-${scrollY}px`;
    bodyStyle.width = "100%";

    return () => {
      bodyStyle.overflow = initialBodyStyle.overflow;
      bodyStyle.position = initialBodyStyle.position;
      bodyStyle.top = initialBodyStyle.top;
      bodyStyle.width = initialBodyStyle.width;
      htmlStyle.scrollBehavior = "auto";
      window.scrollTo(0, scrollY);
      htmlStyle.scrollBehavior = initialScrollBehavior;
    };
  }, [activeSkill]);

  const isModalVisible = modalState === "open";

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
          {skills.map((skill) => {
            const tooltipId = `skill-tooltip-${skill.id}`;

            return (
              <li className="skill-item flex flex-col items-center" key={skill.id}>
                <button
                  aria-describedby={tooltipId}
                  className="skill-trigger relative flex w-full flex-col items-center gap-3 rounded-lg p-1 text-left outline-none transition-colors duration-200 hover:bg-muted/70 focus-visible:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)] motion-reduce:transition-none"
                  onClick={(event) => openSkillDetails(skill, event.currentTarget)}
                  type="button"
                >
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
                  <span
                    className="skill-tooltip pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 w-56 -translate-x-1/2 rounded-lg px-3 py-2 text-center type-body-3 opacity-0 shadow-lg transition-opacity duration-200 ease-out motion-reduce:transition-none"
                    id={tooltipId}
                    role="tooltip"
                    style={{ backgroundColor: "var(--surface-inverse)", color: "var(--text-inverse)" }}
                  >
                    {text.details[skill.id]}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {activeSkill && (
        <div
          aria-hidden={!isModalVisible}
          className={`fixed inset-0 z-[120] grid place-items-center bg-black/50 backdrop-blur-sm transition-opacity duration-200 ease-out motion-reduce:transition-none ${isModalVisible ? "opacity-100" : "opacity-0"}`}
          onClick={closeModal}
        >
          <section
            aria-describedby="skill-details-description"
            aria-labelledby="skill-details-title"
            aria-modal="true"
            className={`relative w-[80vw] max-w-[320px] rounded-2xl bg-raised p-6 shadow-2xl transition duration-200 ease-out motion-reduce:transition-none ${isModalVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
          >
            <button
              aria-label={text.closeDetails}
              className="absolute right-3 top-3 inline-flex size-9 items-center justify-center rounded-full text-secondary transition-colors hover:bg-muted hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)]"
              onClick={closeModal}
              ref={closeButtonRef}
              type="button"
            >
              <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24">
                <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </button>
            <div className="relative mx-auto h-20 w-20 rounded-xl bg-muted p-3">
              <Image
                alt=""
                className={`object-contain ${activeSkill.themeClass ?? ""}`}
                fill
                sizes="80px"
                src={`/assets/icons/${activeSkill.icon}`}
                unoptimized
              />
            </div>
            <h3 className="mt-5 pr-8 text-center type-h3 text-primary" id="skill-details-title">
              {activeSkill.label}
            </h3>
            <p className="mt-3 text-center type-body-2 text-secondary" id="skill-details-description">
              {text.details[activeSkill.id]}
            </p>
          </section>
        </div>
      )}
    </section>
  );
}
