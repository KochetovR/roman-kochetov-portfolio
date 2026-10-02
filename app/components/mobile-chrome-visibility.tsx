"use client";

import { useEffect } from "react";

const INACTIVITY_DELAY = 5000;

export function MobileChromeVisibility() {
  useEffect(() => {
    const root = document.documentElement;
    let inactivityTimeout: number | undefined;

    const hideChrome = () => {
      root.dataset.mobileChromeHidden = "true";
    };

    const revealChrome = () => {
      delete root.dataset.mobileChromeHidden;

      if (inactivityTimeout !== undefined) window.clearTimeout(inactivityTimeout);
      inactivityTimeout = window.setTimeout(hideChrome, INACTIVITY_DELAY);
    };

    revealChrome();
    window.addEventListener("mousemove", revealChrome, { passive: true });
    window.addEventListener("scroll", revealChrome, { passive: true });
    window.addEventListener("touchstart", revealChrome, { passive: true });
    window.addEventListener("touchmove", revealChrome, { passive: true });

    return () => {
      if (inactivityTimeout !== undefined) window.clearTimeout(inactivityTimeout);
      window.removeEventListener("mousemove", revealChrome);
      window.removeEventListener("scroll", revealChrome);
      window.removeEventListener("touchstart", revealChrome);
      window.removeEventListener("touchmove", revealChrome);
      delete root.dataset.mobileChromeHidden;
    };
  }, []);

  return null;
}
