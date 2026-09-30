import { AboutSection } from "./about-section";
import { HeroSection } from "./hero-section";

export function HomeMain() {
  return (
    <main className="flex-1">
      <HeroSection />
      <AboutSection />
    </main>
  );
}
