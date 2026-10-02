import { AboutSection } from "./about-section";
import { ExperienceSection } from "./experience-section";
import { HashScrollHandler } from "./hash-scroll-handler";
import { HeroSection } from "./hero-section";
import { SkillsSection } from "./skills-section";
import { WorkSection } from "./work-section";

export function HomeMain() {
  return (
    <main className="flex-1">
      <HashScrollHandler />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <WorkSection />
    </main>
  );
}
