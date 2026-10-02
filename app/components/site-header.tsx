"use client";

import Link from "next/link";
import { getTranslation } from "../data/translations";
import { getLocalizedPathname } from "../lib/locale";
import { LanguageSwitcher } from "./language-switcher";
import { useLocale } from "./locale-provider";
import { NavigationTabs } from "./navigation-tabs";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  const locale = useLocale();
  const text = getTranslation(locale).header;

  return (
    <header className="mobile-site-header fixed left-0 top-0 z-40 w-screen bg-section px-[var(--content-padding-inline)] py-4">
      <div className="mx-auto flex max-w-[var(--content-max-width)] items-center justify-between">
        <Link
          aria-label={text.home}
          className="type-body-2 type-body-2-semibold rounded-lg text-primary transition-opacity hover:opacity-70"
          href={getLocalizedPathname(locale, "/")}
        >
          &lt;RK /&gt;
        </Link>

        <div className="hidden items-center gap-3 min-[540px]:flex">
          <NavigationTabs variant="header" />
          <LanguageSwitcher />
          <ThemeToggle />
          <a
            className="type-body-3 cursor-pointer rounded-xl bg-cv-button px-4 py-2 font-semibold text-on-cv-button transition-opacity hover:opacity-80"
            download
            href="/assets/roman-kochetov-cv.pdf"
          >
            {text.downloadCv}
          </a>
        </div>

        <div className="flex items-center gap-2 min-[540px]:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <a
            className="type-body-3 rounded-xl bg-cv-button px-3 py-2 font-semibold text-on-cv-button transition-opacity active:opacity-80"
            download
            href="/assets/roman-kochetov-cv.pdf"
          >
            {text.downloadCv}
          </a>
        </div>
      </div>
    </header>
  );
}
