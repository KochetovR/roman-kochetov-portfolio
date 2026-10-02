"use client";

import { useEffect } from "react";

const INACTIVITY_DELAY = 5000;

export function MobileChromeVisibility() {
  useEffect(() => {
    const root = document.documentElement;
    let inactivityTimeout: number | undefined;

    const hideChrome = () => {
      const bodyStyles = window.getComputedStyle(document.body);
      const header = document.querySelector<HTMLElement>(".mobile-site-header");
      const bottomNavigation = document.querySelector<HTMLElement>(".mobile-bottom-navigation");
      const topReservedSpace = Math.max(header?.getBoundingClientRect().height ?? 0, Number.parseFloat(bodyStyles.paddingTop));
      const bottomReservedSpace = Math.max(bottomNavigation?.getBoundingClientRect().height ?? 0, Number.parseFloat(bodyStyles.paddingBottom));
      const remainingScrollDistance = document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);
      const isWithinHeaderSpace = window.scrollY <= topReservedSpace;
      const isWithinBottomNavigationSpace = bottomReservedSpace > 0 && remainingScrollDistance <= bottomReservedSpace;

      if (isWithinHeaderSpace) {
        delete root.dataset.headerHidden;
      } else {
        root.dataset.headerHidden = "true";
      }

      if (isWithinBottomNavigationSpace) {
        delete root.dataset.bottomNavigationHidden;
      } else {
        root.dataset.bottomNavigationHidden = "true";
      }
    };

    const revealChrome = () => {
      delete root.dataset.headerHidden;
      delete root.dataset.bottomNavigationHidden;

      if (inactivityTimeout !== undefined) window.clearTimeout(inactivityTimeout);
      inactivityTimeout = window.setTimeout(hideChrome, INACTIVITY_DELAY);
    };

    revealChrome();
    window.addEventListener("mousemove", revealChrome, { passive: true });
    window.addEventListener("scroll", revealChrome, { passive: true });
    window.addEventListener("resize", revealChrome);
    window.addEventListener("touchstart", revealChrome, { passive: true });
    window.addEventListener("touchmove", revealChrome, { passive: true });

    return () => {
      if (inactivityTimeout !== undefined) window.clearTimeout(inactivityTimeout);
      window.removeEventListener("mousemove", revealChrome);
      window.removeEventListener("scroll", revealChrome);
      window.removeEventListener("resize", revealChrome);
      window.removeEventListener("touchstart", revealChrome);
      window.removeEventListener("touchmove", revealChrome);
      delete root.dataset.headerHidden;
      delete root.dataset.bottomNavigationHidden;
    };
  }, []);

  return null;
}
