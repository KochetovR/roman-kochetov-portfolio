const socialLinks = [
  { href: "https://www.linkedin.com/in/roman-kochetov-98a8721b9/", label: "LinkedIn", icon: <path d="M20.45 3H3.55A.55.55 0 0 0 3 3.55v16.9c0 .3.25.55.55.55h16.9c.3 0 .55-.25.55-.55V3.55a.55.55 0 0 0-.55-.55ZM8.34 18.34H5.66V9.72h2.68v8.62ZM7 8.55a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm11.34 9.79h-2.67v-4.2c0-1-.02-2.28-1.39-2.28-1.4 0-1.62 1.08-1.62 2.2v4.28H10V9.72h2.56v1.18h.04c.36-.67 1.23-1.38 2.53-1.38 2.7 0 3.2 1.78 3.2 4.1v4.72Z" /> },
  { href: "https://t.me/RomanKochetov", label: "Telegram", icon: <path d="M21.42 4.18 18.3 19.33c-.24 1.07-.86 1.33-1.74.83l-4.82-3.55-2.33 2.24c-.26.26-.48.48-.98.48l.35-4.92 8.96-8.1c.39-.35-.09-.55-.6-.2L6.07 13.08 1.3 11.59c-1.04-.32-1.06-1.04.22-1.55L20.2 2.85c.86-.32 1.61.2 1.22 1.33Z" /> },
  { href: "https://github.com/KochetovR", label: "GitHub", icon: <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.46-1.15-1.12-1.45-1.12-1.45-.91-.63.07-.62.07-.62 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.22-.25-4.56-1.1-4.56-4.96 0-1.1.4-2 1.04-2.7-.1-.25-.45-1.28.1-2.67 0 0 .85-.27 2.75 1.03A9.6 9.6 0 0 1 12 6.42c.85 0 1.7.11 2.5.34 1.9-1.3 2.75-1.03 2.75-1.03.55 1.39.2 2.42.1 2.67.65.7 1.04 1.6 1.04 2.7 0 3.87-2.34 4.7-4.57 4.95.36.3.68.86.68 1.73v3.23c0 .26.18.57.69.48A10 10 0 0 0 12 2Z" /> },
];

function ProfilePlaceholder() {
  return (
    <div
      aria-label="Portrait placeholder for Roman Kochetov"
      className="relative mx-auto h-[300px] w-[280px] md:mx-0 md:h-[360px] md:w-[320px]"
      role="img"
    >
      <div className="absolute bottom-0 right-0 h-[280px] w-[280px] border-[8px] border-page bg-muted md:h-[320px] md:w-[280px]" />
      <div className="absolute top-0 left-1/2 z-10 flex h-[280px] w-[240px] -translate-x-1/2 items-center justify-center border-[8px] border-page bg-raised text-4xl font-semibold tracking-[-0.08em] text-primary md:relative md:left-auto md:h-[320px] md:w-[280px] md:translate-x-0 md:text-5xl">
        RK
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="bg-page px-[var(--content-padding-inline)] py-12 md:py-20 lg:py-24">
      <div className="mx-auto flex max-w-[var(--content-max-width)] flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-16">
        <div className="order-2 max-w-2xl md:order-1">
          <h1 className="type-h1 text-primary" id="hero-title">Hi, I&apos;m Roman <span aria-hidden="true">👋</span></h1>
          <p className="type-body-1 mt-3 text-secondary">I&apos;m a front-end developer with 5 years of experience building responsive web applications and commercial products. I work with Vue.js, Nuxt, React, Next.js, TypeScript, and polished interfaces that perform well at every screen size.</p>
          <div className="mt-6 space-y-2 text-secondary">
            <p className="type-body-2 flex items-center gap-2"><svg aria-hidden="true" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" /><circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.75" /></svg>Odesa, Ukraine</p>
            <p className="type-body-2 flex items-center gap-2"><span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-accent" />Available for new projects</p>
          </div>
          <ul className="mt-6 flex items-center gap-1">
            {socialLinks.map((link) => (<li key={link.label}><a aria-label={link.label} className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-secondary transition-colors hover:bg-muted hover:text-primary" href={link.href} rel="noreferrer" target="_blank"><svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">{link.icon}</svg></a></li>))}
          </ul>
        </div>
        <div className="order-1 md:order-2"><ProfilePlaceholder /></div>
      </div>
    </section>
  );
}
