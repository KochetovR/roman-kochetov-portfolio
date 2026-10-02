"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function SectionReveal({ children }: { children: ReactNode }) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const section = sectionRef.current;

    if (!section) return;

    const { bottom, top } = section.getBoundingClientRect();

    if (top < window.innerHeight && bottom > 0) {
      section.dataset.revealState = "visible";
      return;
    }

    section.dataset.revealState = "hidden";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        section.dataset.revealState = "visible";
        observer.unobserve(section);
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return <div className="section-reveal" ref={sectionRef}>{children}</div>;
}
