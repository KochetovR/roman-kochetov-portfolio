import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject } from "../data/projects";
import { getTranslation } from "../data/translations";
import { getLocalizedPathname, type Locale } from "../lib/locale";

export function WorkDetail({ locale, slug }: { locale: Locale; slug: string }) {
  const project = getProject(slug, locale);

  if (!project) notFound();

  const text = getTranslation(locale).caseStudy;

  return (
    <main className="bg-page px-[var(--content-padding-inline)] py-12 md:py-20 lg:py-24">
      <article className="mx-auto max-w-5xl">
        <Link className="type-body-3 inline-flex items-center gap-2 text-secondary transition-colors hover:text-primary" href={`${getLocalizedPathname(locale, "/")}#work`}>
          <span aria-hidden="true">←</span>
          {text.backToWork}
        </Link>

        <header className="mt-10 max-w-3xl md:mt-14">
          <div className="w-fit rounded-xl bg-muted px-3 py-1 type-body-3-medium text-secondary">{text.caseStudy}</div>
          <h1 className="type-h1 mt-4 text-primary">{project.title}</h1>
          <p className="type-subtitle mt-5 text-secondary">{project.summary}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.href ? (
              <a className="type-body-3 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 font-semibold text-on-inverse transition-opacity hover:opacity-90" href={project.href} rel="noreferrer" target="_blank">
                {text.visitWebsite} <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <p className="type-body-3 text-secondary">{project.notice}</p>
            )}
          </div>
        </header>

        <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-2xl bg-raised md:mt-14">
          <Image alt={project.image.alt} className="object-contain p-3 md:p-6" fill preload sizes="(max-width: 1023px) calc(100vw - 32px), 1024px" src={project.image.src} />
        </div>

        <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-[minmax(0,1fr)_minmax(15rem,0.6fr)] md:gap-20">
          <section aria-labelledby="overview-title">
            <h2 className="type-h2 text-primary" id="overview-title">{text.overview}</h2>
            {project.caseStudy ? (
              project.caseStudy.overview.map((paragraph, index) => (
                <p className={`type-body-2 text-secondary ${index === 0 ? "mt-5" : "mt-4"}`} key={paragraph}>{paragraph}</p>
              ))
            ) : (
              <>
                <p className="type-body-2 mt-5 text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat, ipsum at feugiat facilisis, metus lectus pellentesque arcu, sed elementum sem enim at nibh.</p>
                <p className="type-body-2 mt-4 text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor, arcu a gravida dignissim, ipsum enim condimentum nisl, in viverra erat nunc at libero.</p>
              </>
            )}
          </section>
          <aside>
            <h2 className="type-body-2 type-body-2-semibold text-primary">{text.technology}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <li className="rounded-xl bg-muted px-3 py-1 type-body-3-medium text-secondary" key={technology}>{technology}</li>
              ))}
            </ul>
          </aside>
        </div>

        <section aria-labelledby="approach-title" className="mt-14 md:mt-20">
          <h2 className="type-h2 text-primary" id="approach-title">{text.approach}</h2>
          {project.caseStudy ? (
            project.caseStudy.approach.map((paragraph, index) => (
              <p className={`type-body-2 max-w-3xl text-secondary ${index === 0 ? "mt-5" : "mt-4"}`} key={paragraph}>{paragraph}</p>
            ))
          ) : (
            <p className="type-body-2 mt-5 max-w-3xl text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sed luctus convallis, nibh metus lectus pellentesque arcu, sed elementum sem enim at nibh.</p>
          )}
        </section>

        <section aria-labelledby="gallery-title" className="mt-10 md:mt-14">
          <h2 className="sr-only" id="gallery-title">{text.gallery}</h2>
          <div className="columns-1 gap-6 md:columns-2">
            {project.media.map((media) => (
              <figure className="mb-6 break-inside-avoid overflow-hidden rounded-2xl bg-raised" key={media.src}>
                <Image alt={media.alt} className="h-auto w-full transition-transform duration-500 hover:scale-[1.015]" height={media.height} sizes="(max-width: 767px) calc(100vw - 32px), 50vw" src={media.src} width={media.width} />
              </figure>
            ))}
          </div>
        </section>

        <section aria-labelledby="outcome-title" className="mt-14 max-w-3xl md:mt-20">
          <h2 className="type-h2 text-primary" id="outcome-title">{text.outcome}</h2>
          {project.caseStudy ? (
            project.caseStudy.outcome.map((paragraph, index) => (
              <p className={`type-body-2 text-secondary ${index === 0 ? "mt-5" : "mt-4"}`} key={paragraph}>{paragraph}</p>
            ))
          ) : (
            <p className="type-body-2 mt-5 text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae arcu non urna eleifend malesuada. Replace this placeholder with the project outcome, your contribution, and the impact of the work.</p>
          )}
        </section>
      </article>
    </main>
  );
}
