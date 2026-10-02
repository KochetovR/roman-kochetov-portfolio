"use client";

import { useEffect } from "react";
import { Preloader } from "./preloader";

export function HashScrollHandler() {
  useEffect(() => {
    const root = document.documentElement;
    const hash = window.location.hash.slice(1);

    if (!hash) {
      root.dataset.hashNavigationReady = "true";
      return () => {
        delete root.dataset.hashNavigationReady;
      };
    }

    root.dataset.hashNavigationLoading = "true";

    let completionFrame: number | undefined;
    const scrollFrame = window.requestAnimationFrame(() => {
      const target = document.getElementById(decodeURIComponent(hash));
      const previousScrollBehavior = root.style.scrollBehavior;

      root.style.scrollBehavior = "auto";
      target?.scrollIntoView({ block: "start" });
      root.style.scrollBehavior = previousScrollBehavior;

      completionFrame = window.requestAnimationFrame(() => {
        delete root.dataset.hashNavigationLoading;
        root.dataset.hashNavigationReady = "true";
      });
    });

    return () => {
      window.cancelAnimationFrame(scrollFrame);
      if (completionFrame) window.cancelAnimationFrame(completionFrame);
      delete root.dataset.hashNavigationLoading;
      delete root.dataset.hashNavigationReady;
    };
  }, []);

  return (
    <div aria-hidden="true" className="hash-navigation-preloader pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-gray-950 opacity-0 transition-opacity duration-200">
      <Preloader />
    </div>
  );
}
