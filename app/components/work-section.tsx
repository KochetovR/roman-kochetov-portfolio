import Image from "next/image";
import Link from "next/link";
import { getProjects } from "../data/projects";
import { getTranslation } from "../data/translations";
import { getLocalizedPathname, type Locale } from "../lib/locale";

export function WorkSection({ locale }: { locale: Locale }) {
  const text = getTranslation(locale).work;
  const projects = getProjects(locale);

  return (
    <section
      aria-labelledby="work-title"
      className="bg-page px-[var(--content-padding-inline)] py-[var(--section-padding-block)]"
      id="work"
    >
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <div className="mx-auto w-fit rounded-xl bg-muted px-3 py-1 type-body-3-medium text-secondary">{text.eyebrow}</div>
        <h2 className="type-subtitle mx-auto mt-4 max-w-xl text-center text-primary" id="work-title">
          {text.title}
        </h2>

        <div className="mx-auto mt-10 max-w-6xl space-y-6 md:mt-12 md:space-y-8">
          {projects.map((project, index) => (
            <article
              className="group overflow-hidden rounded-2xl bg-card p-4 shadow-md transition-shadow duration-300 hover:shadow-lg md:grid md:grid-cols-2 md:items-center md:gap-10 md:p-6 lg:gap-14 lg:p-8"
              key={project.slug}
            >
              <Link aria-label={text.readCaseStudy(project.title)} className={`relative block aspect-[16/10] overflow-hidden rounded-xl bg-raised ${index % 2 === 1 ? "md:order-2" : ""}`} href={getLocalizedPathname(locale, `/work/${project.slug}`)}>
                <Image
                  alt={project.image.alt}
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                  fill
                  sizes="(max-width: 767px) calc(100vw - 64px), (max-width: 1023px) calc(100vw - 176px), 620px"
                  src={project.image.src}
                />
              </Link>

              <div className={`mt-6 ${index % 2 === 1 ? "md:order-1" : ""} md:mt-0`}>
                <h3 className="type-h3 text-primary">{project.title}</h3>
                <p className="type-body-3 mt-3 text-secondary md:mt-4">{project.summary}</p>
                <ul aria-label={text.technologies(project.title)} className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <li className="rounded-xl bg-muted px-3 py-1 type-body-3-medium text-secondary" key={technology}>{technology}</li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link className="type-body-3 inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 font-semibold text-primary transition-colors hover:bg-muted" href={getLocalizedPathname(locale, `/work/${project.slug}`)}>
                    {text.viewCaseStudy} <span aria-hidden="true">→</span>
                  </Link>
                  {project.href ? (
                    <a className="type-body-3 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 font-semibold text-on-inverse transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-90" href={project.href} rel="noreferrer" target="_blank">
                      {text.visitWebsite} <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <p className="type-body-3 text-secondary">{project.notice}</p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
