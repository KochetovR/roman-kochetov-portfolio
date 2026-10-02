"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navigation = [
  { href: "/#about", id: "about", label: "About" },
  { href: "/#work", id: "work", label: "Work" },
  { href: "#contact", id: "contact", label: "Contact" },
] as const;

type NavigationTabId = (typeof navigation)[number]["id"];
type NavigationTabVariant = "bottom" | "header";
type ActiveNavigationTab = NavigationTabId | null;

const NAVIGATION_SETTLE_DELAY = 180;

export function NavigationTabs({ variant }: { variant: NavigationTabVariant }) {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<ActiveNavigationTab>(pathname.startsWith("/work/") ? null : "about");
  const pendingTab = useRef<NavigationTabId | null>(null);

  useEffect(() => {
    if (pathname !== "/") {
      const contactSection = document.getElementById("contact");

      if (!contactSection) return;

      pendingTab.current = null;
      const contactObserver = new IntersectionObserver(([entry]) => {
        setActiveTab(entry.isIntersecting ? "contact" : null);
      });

      contactObserver.observe(contactSection);

      return () => contactObserver.disconnect();
    }

    let animationFrame: number | undefined;
    let pendingCompletionTimeout: number | undefined;

    const updateActiveTab = () => {
      if (pendingTab.current) {
        setActiveTab(pendingTab.current);
        return;
      }

      const activationLine = window.innerHeight * 0.4;
      let nextActiveTab: NavigationTabId = "about";

      for (const item of navigation) {
        const section = document.getElementById(item.id);

        if (section && section.getBoundingClientRect().top <= activationLine) {
          nextActiveTab = item.id;
        }
      }

      setActiveTab((currentTab) => (currentTab === nextActiveTab ? currentTab : nextActiveTab));
    };

    const scheduleTabUpdate = () => {
      if (animationFrame !== undefined) return;

      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = undefined;
        updateActiveTab();
      });
    };

    const completePendingNavigation = () => {
      pendingCompletionTimeout = undefined;
      pendingTab.current = null;
      scheduleTabUpdate();
    };

    const schedulePendingNavigationCompletion = () => {
      if (!pendingTab.current) return;

      if (pendingCompletionTimeout !== undefined) window.clearTimeout(pendingCompletionTimeout);
      pendingCompletionTimeout = window.setTimeout(completePendingNavigation, NAVIGATION_SETTLE_DELAY);
    };

    const handleScroll = () => {
      scheduleTabUpdate();
      schedulePendingNavigationCompletion();
    };

    const selectHashTarget = () => {
      const hashTarget = window.location.hash.slice(1) as NavigationTabId;

      if (!navigation.some((item) => item.id === hashTarget)) return;

      pendingTab.current = hashTarget;
      setActiveTab(hashTarget);
      schedulePendingNavigationCompletion();
    };

    scheduleTabUpdate();
    schedulePendingNavigationCompletion();
    window.addEventListener("hashchange", selectHashTarget);
    window.addEventListener("resize", scheduleTabUpdate);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (animationFrame !== undefined) window.cancelAnimationFrame(animationFrame);
      if (pendingCompletionTimeout !== undefined) window.clearTimeout(pendingCompletionTimeout);
      window.removeEventListener("hashchange", selectHashTarget);
      window.removeEventListener("resize", scheduleTabUpdate);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const isHeader = variant === "header";

  return (
    <nav aria-label={isHeader ? "Main navigation" : "Mobile navigation"} className={isHeader ? "" : "mobile-bottom-navigation fixed bottom-0 left-0 z-40 w-screen border-t border-border bg-page px-[var(--content-padding-inline)] py-3 min-[540px]:hidden"}>
      <ul className={isHeader ? "flex items-center gap-2" : "mx-auto grid max-w-[var(--content-max-width)] grid-cols-3 gap-2"}>
        {navigation.map((item) => {
          const isActive = activeTab === item.id;

          return (
            <li key={item.id}>
              <Link
                aria-current={isActive ? "true" : undefined}
                className={`navigation-tab ${isHeader ? "type-body-2-medium flex h-10 items-center px-2" : "type-body-3-medium flex min-h-10 items-center justify-center rounded-lg active:bg-muted"} ${isActive ? "is-active" : ""}`}
                href={item.href}
                onClick={() => {
                  pendingTab.current = item.id;
                  setActiveTab(item.id);
                }}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
