"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getLocalizedPathname, locales, type Locale } from "../lib/locale";
import { useLocale } from "./locale-provider";
import { Preloader } from "./preloader";

const languageLabels: Record<Locale, { code: string; label: string }> = {
  en: { code: "EN", label: "English" },
  uk: { code: "UA", label: "Українська" },
  ru: { code: "RU", label: "Русский" },
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [pendingPathname, setPendingPathname] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeOnOutsideInteraction = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setIsOpen(false);
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", closeOnOutsideInteraction);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("mousedown", closeOnOutsideInteraction);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  useEffect(() => {
    if (!pendingPathname || pathname !== pendingPathname) return;

    const animationFrame = window.requestAnimationFrame(() => setPendingPathname(null));

    return () => window.cancelAnimationFrame(animationFrame);
  }, [pathname, pendingPathname]);

  const selectLocale = (nextLocale: Locale) => {
    setIsOpen(false);

    if (nextLocale === locale) return;

    const nextPathname = getLocalizedPathname(nextLocale, pathname);

    setPendingPathname(nextPathname);
    router.push(nextPathname, { scroll: false });
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        aria-controls="language-menu"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label="Select language"
        className="type-body-3 inline-flex h-10 items-center gap-1.5 rounded-lg px-2 font-semibold text-secondary transition-colors hover:bg-muted hover:text-primary cursor-pointer"
        onClick={() => setIsOpen((currentState) => !currentState)}
        type="button"
      >
        {languageLabels[locale].code}
        <svg aria-hidden="true" className={`size-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24">
          <path d="m6 9 6 6 6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </button>

      {isOpen && (
        <div aria-label="Language" className="absolute right-0 top-full z-50 mt-2 w-36 overflow-hidden rounded-xl border border-border bg-raised p-1 shadow-lg" id="language-menu" role="menu">
          {locales.map((item) => {
            const isActive = item === locale;

            return (
              <button
                aria-checked={isActive}
                className={`type-body-3 flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition-colors cursor-pointer ${isActive ? "bg-muted text-primary" : "text-secondary hover:bg-muted hover:text-primary"}`}
                key={item}
                onClick={() => selectLocale(item)}
                role="menuitemradio"
                type="button"
              >
                {languageLabels[item].label}
                <span className="text-secondary">{languageLabels[item].code}</span>
              </button>
            );
          })}
        </div>
      )}

      {pendingPathname && (
        <div aria-label="Loading" aria-live="polite" className="fixed inset-0 z-[110] flex items-center justify-center bg-gray-950" role="status">
          <Preloader />
        </div>
      )}
    </div>
  );
}
