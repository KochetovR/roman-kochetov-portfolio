import Image from "next/image";
import { getTranslation } from "../data/translations";
import type { Locale } from "../lib/locale";

const experience = [
  {
    company: "Alma-Soft",
    logo: {
      dark: "/assets/logos/alma-soft-on-dark.webp",
      darkHeight: 136,
      light: "/assets/logos/alma-soft-on-light.webp",
      lightHeight: 136,
      width: 245,
    },
  },
  {
    company: "Viseven",
    logo: {
      dark: "/assets/logos/viseven-on-dark.webp",
      darkHeight: 148,
      lightHeight: 148,
      light: "/assets/logos/viseven-on-light.webp",
      width: 161,
    },
  },
];

export function ExperienceSection({ locale }: { locale: Locale }) {
  const text = getTranslation(locale).experience;

  return (
    <section
      aria-labelledby="experience-title"
      className="bg-section px-[var(--content-padding-inline)] py-[var(--section-padding-block)]"
      id="experience"
    >
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <div className="mx-auto w-fit rounded-xl bg-muted px-3 py-1 type-body-3-medium text-secondary">
          {text.eyebrow}
        </div>
        <h2 className="type-subtitle mx-auto mt-4 max-w-xl text-center text-primary" id="experience-title">
          {text.title}
        </h2>

        <div className="mx-auto mt-10 max-w-4xl space-y-6 md:space-y-8">
          {experience.map((item, index) => {
            const localizedItem = text.items[index];

            return (
            <article className="rounded-xl bg-card p-6 shadow-md md:grid md:grid-cols-[11rem_minmax(0,1fr)_9rem] md:gap-8 md:p-8" key={item.company}>
              <div className="mx-auto w-44 md:mx-0 md:self-center">
                <Image
                  alt={`${item.company} logo`}
                  className={`h-auto w-full ${item.logo.dark ? "experience-logo-light-paired" : ""}`}
                  height={item.logo.lightHeight}
                  src={item.logo.light}
                  width={item.logo.width}
                />
                {item.logo.dark && (
                  <Image
                    alt={`${item.company} logo`}
                    className="experience-logo-dark h-auto w-full"
                    height={item.logo.darkHeight}
                    src={item.logo.dark}
                    width={item.logo.width}
                  />
                )}
              </div>
              <p className="type-body-3 mt-4 text-secondary md:order-3 md:mt-0 md:text-right">{localizedItem.period}</p>
              <div className="mt-4 md:order-2 md:mt-0">
                <h3 className="type-body-2 type-body-2-semibold text-primary">{localizedItem.role}</h3>
                <ul className="type-body-3 mt-3 list-disc space-y-1 pl-4 text-secondary md:mt-4">
                  {localizedItem.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
