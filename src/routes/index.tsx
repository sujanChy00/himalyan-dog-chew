import { Benefits } from "#/components/benefits";
import { Contact } from "#/components/contact";
import { FAQ } from "#/components/faq";
import { FeaturedProducts } from "#/components/featured-products";
import { HeroSection } from "#/components/hero-section";
import { Info } from "#/components/info";
import { OurStory } from "#/components/our-story";
import { Reviews } from "#/components/reviews";
import { Wholesale } from "#/components/wholesale";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main>
      <HeroSection />
      <Benefits />
      <FeaturedProducts className="bg-white" />
      <Info />
      <OurStory />
      <Reviews />
      <Wholesale />
      <FAQ />
      <Contact />
    </main>
  );
}
