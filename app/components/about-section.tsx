import Image from "next/image";
import { LayeredPortrait } from "./layered-portrait";

export function AboutSection() {
  return (
    <section
      aria-labelledby="about-title"
      className="bg-section px-[var(--content-padding-inline)] py-[var(--section-padding-block)]"
      id="about"
    >
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <div className="mx-auto w-fit rounded-xl bg-muted px-3 py-1 type-body-3-medium text-secondary">
          About me
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
              Curious about me? Here you have it:
            </h2>

            <div className="type-body-2 mt-6 space-y-4 text-secondary md:type-body-1">
              <p>
                I&apos;m a Front-end Developer with 5 years of commercial experience building and maintaining responsive web applications with Vue.js, Nuxt, React, Next.js, JavaScript, and TypeScript.
              </p>
              <p>
                At Alma-Soft, I work on commercial products including iGaming applications, administration interfaces, company websites, and Web3-related platforms. My work spans REST APIs, Socket.IO real-time features, authentication, localization, SSR/PWA, and performance optimisation.
              </p>
              <p>
                I&apos;ve helped migrate an iGaming application from Vue 2 to Vue 3 and then Nuxt 3. I also build React and Next.js applications with Redux Toolkit, React Query, and Tailwind CSS.
              </p>
              <p>
                Earlier at Viseven, I developed Vue.js components for a medical presentation platform and tailored responsive interfaces for iPad. I focus on clean, maintainable code, reusable components, and close collaboration with designers, backend developers, and product teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
