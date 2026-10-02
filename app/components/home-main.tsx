import { AboutSection } from "./about-section";
import { ExperienceSection } from "./experience-section";
import { HashScrollHandler } from "./hash-scroll-handler";
import { HeroSection } from "./hero-section";
import { SkillsSection } from "./skills-section";
import { WorkSection } from "./work-section";
import type { Locale } from "../lib/locale";

export function HomeMain({ locale }: { locale: Locale }) {
  return (
    <main className="flex-1">
      <HashScrollHandler />
      <HeroSection locale={locale} />
      <AboutSection locale={locale} />
      <SkillsSection locale={locale} />
      <ExperienceSection locale={locale} />
      <WorkSection locale={locale} />
    </main>
  );
}
