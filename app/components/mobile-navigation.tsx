"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const navigation = [
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/#contact", label: "Contact" },
];

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <div className="flex md:hidden">
      <button
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        className="inline-flex items-center justify-center rounded-lg text-primary transition-colors hover:bg-muted"
        onClick={() => setIsOpen(true)}
        type="button"
      >
        <span className="sr-only">Open navigation</span>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 18H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 12H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 24H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-50">
          <button
            aria-label="Close navigation"
            className="absolute inset-0 bg-inverse/20"
            onClick={() => setIsOpen(false)}
            type="button"
          />
          <aside
            aria-label="Mobile navigation"
            className="absolute top-0 right-0 flex h-full w-full max-w-[320px] flex-col bg-page py-5 shadow-2xl"
            id="mobile-navigation"
          >
            <div className="flex items-center justify-between border-b border-border px-6 pb-5">
              <span className="type-body-2 type-body-2-semibold text-primary">&lt;RK /&gt;</span>
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-primary transition-colors hover:bg-muted"
                onClick={() => setIsOpen(false)}
                type="button"
              >
                <span className="sr-only">Close navigation</span>

                <svg aria-hidden="true" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12L12 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12L24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <nav aria-label="Main navigation" className="px-6 pt-5">
              <ul className="space-y-1">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      className="type-body-2 block rounded-lg px-3 py-3 text-primary transition-colors hover:bg-muted"
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-4 border-t border-border">
              <div className="space-y-5 px-6 pt-4">
                <div className="flex items-center justify-between">
                  <span className="type-body-2 text-secondary">Switch theme</span>
                  <ThemeToggle />
                </div>
                <a
                  className="type-body-3 block w-full rounded-xl bg-cv-button px-4 py-2 text-center font-semibold text-on-cv-button transition-opacity hover:opacity-80"
                  download
                  href="/assets/roman-kochetov-cv.pdf"
                >
                  Download CV
                </a>
              </div>
            </div>
          </aside>
        </div>
      ) : null}
    </div>
  );
}
