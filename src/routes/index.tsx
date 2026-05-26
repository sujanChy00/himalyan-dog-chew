import { Benefits } from "#/components/benefits";
import { HeroSection } from "#/components/hero-section";
import { Info } from "#/components/info";
import { OurStory } from "#/components/our-story";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main>
      <HeroSection />
      <Benefits />
      <Info />
      <OurStory />
      {/* 
      <PawDivider />
      <About />
      <Benefits />
      <Products />
      <HowToUse />
      <Faq />
      <Contact /> */}
    </main>
  );
}
