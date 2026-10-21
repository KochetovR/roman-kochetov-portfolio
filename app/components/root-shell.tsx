import type { ReactNode } from "react";
import { MobileBottomNavigation } from "./mobile-bottom-navigation";
import { MobileChromeVisibility } from "./mobile-chrome-visibility";
import { LocaleProvider } from "./locale-provider";
import { ScrollToTopButton } from "./scroll-to-top-button";
import { SectionReveal } from "./section-reveal";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function RootShell({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <MobileChromeVisibility />
      <SiteHeader />
      {children}
      <SectionReveal><SiteFooter /></SectionReveal>
      <MobileBottomNavigation />
      <ScrollToTopButton />
    </LocaleProvider>
  );
}
