import Link from "next/link";
import { getProject } from "../data/projects";
import { serviceProjects, services } from "../data/services";
import { getLocalizedPathname, type Locale } from "../lib/locale";

export function ServicesSection({ locale }: { locale: Locale }) {
  const text = services[locale];

  return (
    <section
      aria-labelledby="services-title"
      className="bg-section px-[var(--content-padding-inline)] py-[var(--section-padding-block)]"
      id="services"
    >
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <div className="type-body-3-medium mx-auto w-fit rounded-xl bg-muted px-3 py-1 text-secondary">{text.eyebrow}</div>
        <h2 className="type-h2 mx-auto mt-4 max-w-3xl text-center text-primary" id="services-title">{text.title}</h2>
        <p className="type-body-2 mx-auto mt-4 max-w-2xl text-center text-secondary">{text.description}</p>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {text.items.map((service, index) => {
            const project = getProject(serviceProjects[service.id], locale);

            return (
              <article aria-labelledby={`service-${service.id}-title`} className="flex min-w-0 flex-col rounded-2xl bg-card p-6 shadow-md lg:p-8" key={service.id}>
                <span aria-hidden="true" className="type-body-3-medium flex size-10 items-center justify-center rounded-xl bg-accent-soft text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="type-subtitle type-subtitle-semibold mt-5 text-primary" id={`service-${service.id}-title`}>{service.title}</h3>
                <p className="type-body-3 mt-3 text-secondary">{service.description}</p>
                <ul className="type-body-3 mt-5 list-disc space-y-2 pl-4 text-secondary marker:text-accent">
                  {service.deliverables.map((item) => <li key={item}>{item}</li>)}
                </ul>
                {project && (
                  <div className="mt-auto pt-6">
                    <Link className="type-body-3 inline-flex min-h-11 items-center gap-2 rounded-lg font-medium text-primary underline decoration-border underline-offset-4 transition-colors hover:decoration-current" href={getLocalizedPathname(locale, `/work/${project.slug}`)}>
                      <span>{text.caseStudy}: {project.title}</span><span aria-hidden="true">→</span>
                    </Link>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-6 rounded-2xl border border-border bg-page p-6 md:flex-row md:items-center md:justify-between lg:p-8">
          <div className="max-w-2xl">
            <h3 className="type-subtitle type-subtitle-semibold text-primary">{text.contactTitle}</h3>
            <p className="type-body-3 mt-2 text-secondary">{text.contactDescription}</p>
          </div>
          <a className="type-body-2-medium inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-cv-button px-5 py-3 text-on-cv-button transition-opacity hover:opacity-80 md:self-center" href="#contact">
            {text.contactLabel}<span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
