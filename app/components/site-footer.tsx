"use client";

import { getTranslation } from "../data/translations";
import { CopyButton } from "./copy-button";
import { useLocale } from "./locale-provider";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/roman-kochetov-98a8721b9/",
    label: "LinkedIn",
    icon: (
      <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.45 3H3.55A.55.55 0 0 0 3 3.55v16.9c0 .3.25.55.55.55h16.9c.3 0 .55-.25.55-.55V3.55a.55.55 0 0 0-.55-.55ZM8.34 18.34H5.66V9.72h2.68v8.62ZM7 8.55a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm11.34 9.79h-2.67v-4.2c0-1-.02-2.28-1.39-2.28-1.4 0-1.62 1.08-1.62 2.2v4.28H10V9.72h2.56v1.18h.04c.36-.67 1.23-1.38 2.53-1.38 2.7 0 3.2 1.78 3.2 4.1v4.72Z" />
      </svg>
    ),
  },
  {
    href: "https://t.me/RomanKochetov",
    label: "Telegram",
    icon: (
      <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21.42 4.18 18.3 19.33c-.24 1.07-.86 1.33-1.74.83l-4.82-3.55-2.33 2.24c-.26.26-.48.48-.98.48l.35-4.92 8.96-8.1c.39-.35-.09-.55-.6-.2L6.07 13.08 1.3 11.59c-1.04-.32-1.06-1.04.22-1.55L20.2 2.85c.86-.32 1.61.2 1.22 1.33Z" />
      </svg>
    ),
  },
  {
    href: "https://github.com/KochetovR",
    label: "GitHub",
    icon: (
      <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.46-1.15-1.12-1.45-1.12-1.45-.91-.63.07-.62.07-.62 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.22-.25-4.56-1.1-4.56-4.96 0-1.1.4-2 1.04-2.7-.1-.25-.45-1.28.1-2.67 0 0 .85-.27 2.75 1.03A9.6 9.6 0 0 1 12 6.42c.85 0 1.7.11 2.5.34 1.9-1.3 2.75-1.03 2.75-1.03.55 1.39.2 2.42.1 2.67.65.7 1.04 1.6 1.04 2.7 0 3.87-2.34 4.7-4.57 4.95.36.3.68.86.68 1.73v3.23c0 .26.18.57.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    ),
  },
];

export function SiteFooter() {
  const locale = useLocale();
  const text = getTranslation(locale).footer;
  const copy = getTranslation(locale).copy;

  return (
    <footer>
      <section
        className="mx-auto px-[var(--content-padding-inline)] py-[var(--section-padding-block)] text-center bg-section"
        id="contact"
      >
        <span className="type-body-3 inline-flex rounded-xl bg-muted px-3 py-1 text-secondary type-body-2-medium">
          {text.eyebrow}
        </span>
        <p className="type-subtitle mx-auto mt-4 max-w-[640px] text-secondary md:type-h3">
          {text.subtitle}
        </p>

        <div className="mt-8 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <svg aria-hidden="true" className="h-6 w-6 shrink-0 text-secondary" fill="none" viewBox="0 0 24 24">
              <rect height="14" rx="2" stroke="currentColor" strokeWidth="1.75" width="18" x="3" y="5" />
              <path d="m4 7 8 6 8-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
            </svg>
            <a className="type-h3 text-primary hover:underline" href="mailto:k04erg0@gmail.com">
              k04erg0@gmail.com
            </a>
            <CopyButton label={copy.emailAddress} value="k04erg0@gmail.com" />
          </div>

          <div className="flex items-center justify-center gap-2">
            <svg aria-hidden="true" className="h-6 w-6 shrink-0 text-secondary" fill="none" viewBox="0 0 24 24">
              <path d="M5.1 4.86 7.6 4.2a1.4 1.4 0 0 1 1.62.72l1.18 2.48a1.4 1.4 0 0 1-.3 1.62L8.72 10.4a11.1 11.1 0 0 0 4.88 4.88l1.38-1.38a1.4 1.4 0 0 1 1.62-.3l2.48 1.18a1.4 1.4 0 0 1 .72 1.62l-.66 2.5a1.4 1.4 0 0 1-1.35 1.04C10.1 19.94 4.06 13.9 4.06 6.21A1.4 1.4 0 0 1 5.1 4.86Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
            </svg>
            <a className="type-h3 text-primary hover:underline" href="tel:+380663716961">
              +380 66 371 6961
            </a>
            <CopyButton label={copy.phoneNumber} value="+380663716961" />
          </div>
        </div>

        <div className="mt-8">
          <p className="type-body-2 text-secondary">{text.social}</p>
          <ul className="mt-4 flex justify-center gap-4">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  aria-label={link.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-secondary transition-colors hover:bg-muted hover:text-primary"
                  href={link.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="h-5 w-5">{link.icon}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="px-[var(--content-padding-inline)] py-5 text-center ">
        <p className="type-body-3 text-secondary">{text.copyright}</p>
      </div>
    </footer>
  );
}
