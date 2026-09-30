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

        <div className="mt-8 grid items-center gap-12 lg:grid-cols-[440px_minmax(0,1fr)] lg:gap-x-24">
          <LayeredPortrait
            ariaLabel="Portrait placeholder for Roman Kochetov"
            backdropClassName="bottom-0 left-0 h-[360px] w-[320px] border-section bg-muted lg:h-[480px] lg:w-[400px]"
            containerClassName="h-[380px] w-[320px] lg:mx-0 lg:h-[520px] lg:w-[440px]"
            portraitClassName="top-0 left-1/2 h-[360px] w-[280px] -translate-x-1/2 border-section bg-raised text-5xl font-semibold tracking-[-0.08em] text-primary lg:left-auto lg:right-0 lg:h-[480px] lg:w-[400px] lg:translate-x-0 lg:text-7xl"
          >
            RK
          </LayeredPortrait>

          <div className="max-w-2xl">
            <h2 className="type-h3 text-primary" id="about-title">
              Curious about me? Here you have it:
            </h2>

            <div className="type-body-2 mt-6 space-y-4 text-secondary lg:type-body-1">
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
