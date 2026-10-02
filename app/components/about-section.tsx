import Image from "next/image";
import { getTranslation } from "../data/translations";
import type { Locale } from "../lib/locale";
import { LayeredPortrait } from "./layered-portrait";

export function AboutSection({ locale }: { locale: Locale }) {
  const text = getTranslation(locale).about;

  return (
    <section
      aria-labelledby="about-title"
      className="bg-section px-[var(--content-padding-inline)] py-[var(--section-padding-block)]"
      id="about"
    >
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <div className="mx-auto w-fit rounded-xl bg-muted px-3 py-1 type-body-3-medium text-secondary">
          {text.eyebrow}
        </div>

        <div className="mt-8 flow-root">
          <div className="mb-12 md:float-left md:mb-6 md:mr-12 lg:mr-24">
            <LayeredPortrait
              backdropClassName="bottom-0 left-0 h-[376px] w-[296px] border-section bg-muted md:h-[484px] md:w-[328px]"
              containerClassName="h-[396px] w-[296px] md:mx-0 md:h-[524px] md:w-[368px]"
              portraitClassName="top-0 left-1/2 h-[376px] w-[256px] -translate-x-1/2 border-section bg-raised md:left-auto md:right-0 md:h-[484px] md:w-[328px] md:translate-x-0"
            >
              <Image
                alt="Portrait of Roman Kochetov"
                className="object-cover"
                fill
                sizes="(max-width: 767px) 240px, 312px"
                src="/assets/img/about-me.webp"
              />
            </LayeredPortrait>
          </div>

          <div>
            <h2 className="type-h3 text-primary" id="about-title">
              {text.title}
            </h2>

            <div className="type-body-2 mt-6 space-y-4 text-secondary md:type-body-1">
              {text.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
