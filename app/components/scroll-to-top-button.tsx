"use client";

import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 0.3;

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrame: number | undefined;

    const updateVisibility = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const shouldShow = scrollableHeight > 0 && window.scrollY / scrollableHeight >= SCROLL_THRESHOLD;

      setIsVisible((currentVisibility) => (currentVisibility === shouldShow ? currentVisibility : shouldShow));
    };

    const scheduleVisibilityUpdate = () => {
      if (animationFrame !== undefined) return;

      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = undefined;
        updateVisibility();
      });
    };

    scheduleVisibilityUpdate();
    window.addEventListener("resize", scheduleVisibilityUpdate);
    window.addEventListener("scroll", scheduleVisibilityUpdate, { passive: true });

    return () => {
      if (animationFrame !== undefined) window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", scheduleVisibilityUpdate);
      window.removeEventListener("scroll", scheduleVisibilityUpdate);
    };
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  return (
    <button
      aria-label="Scroll to top"
      className={`scroll-to-top-button fixed right-4 z-30 inline-flex size-11 items-center justify-center rounded-full bg-cv-button text-on-cv-button shadow-lg min-[540px]:bottom-6 cursor-pointer ${isVisible ? "is-visible" : ""} bottom-[5.5rem]`}
      onClick={scrollToTop}
      title="Scroll to top"
      type="button"
    >
      <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24">
        <path d="m6 11 6-6 6 6M12 5v14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    </button>
  );
}
