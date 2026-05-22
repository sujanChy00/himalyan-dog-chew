import { useEffect, useState } from "react";
import { CarouselControls } from "./carousel-controls";
import { CarouselImages } from "./carousel-images";

const DELAY = 5000;

const images = [
  "/banner_1.webp",
  "/banner_2.webp",
  "/banner_3.webp",
  "/banner_4.webp",
];

export const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, DELAY);

    return () => clearTimeout(timeout);
  }, [activeIndex]);

  return (
    <section className="relative min-h-[92dvh] flex flex-col justify-center overflow-hidden">
      <CarouselImages images={images} activeIndex={activeIndex} />
      <div
        className="absolute inset-0 z-1"
        style={{
          background:
            "linear-gradient(105deg, rgba(20,12,4,0.72) 0%, rgba(20,12,4,0.38) 55%, rgba(20,12,4,0.15) 100%), linear-gradient(to top, rgba(20,12,4,0.55) 0%, transparent 50%)",
        }}
      />

      <div className="absolute left-0 bottom-0 right-0 z-2 pointer-events-none">
        <svg
          viewBox="0 0 1440 90"
          className="block w-full h-[90px]"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,90 L0,55 L90,18 L180,45 L290,8 L400,38 L520,0 L640,32 L760,10 L880,42 L1000,15 L1120,48 L1260,20 L1360,50 L1440,30 L1440,90 Z"
            fill="#faf6ef"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full py-28 sm:py-36">
        <div className="max-w-3xl">
          <div className="fade-up fade-up-1 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white/90 text-xs font-semibold uppercase tracking-widest mb-7">
            <span>🏔</span> Natural Chew · ナチュラルチュー
          </div>

          <h1
            className="animate-fade-up delay-[0.22s] font-display font-black leading-[1.01] text-white mb-7"
            style={{ fontSize: "clamp(2.8rem,6.5vw,5.5rem)" }}
          >
            <span data-lang="en">
              The chew your
              <br />
              <em className="text-[#f4b877] font-normal">dog deserves.</em>
            </span>
          </h1>

          <p className="fade-up fade-up-3 text-white/75 text-lg leading-relaxed max-w-xl mb-10">
            <span data-lang="en">
              Crafted in the Himalayas from simple, natural ingredients — a
              long-lasting hard cheese chew for daily enrichment and happy dogs.
            </span>
          </p>

          <div className="fade-up fade-up-4 flex flex-wrap gap-4 mb-12">
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-stone-900 font-semibold hover:bg-stone-100 transition-colors shadow-xl text-sm"
            >
              <span data-lang="en">Explore Products</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm text-sm"
            >
              <span data-lang="en">Retail &amp; Contact</span>
            </a>
          </div>

          <div className="fade-up fade-up-4 flex flex-wrap gap-2 mb-14">
            <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/15 backdrop-blur-sm border border-white/20 text-white/90">
              🦴 Long-lasting chew
            </span>
            <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/15 backdrop-blur-sm border border-white/20 text-white/90">
              🧀 Hard cheese style
            </span>
            <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/15 backdrop-blur-sm border border-white/20 text-white/90">
              🌿 Natural ingredients
            </span>
            <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/15 backdrop-blur-sm border border-white/20 text-white/90">
              🇯🇵 EN / JP
            </span>
          </div>

          <CarouselControls
            animationDelay={DELAY}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            dotsLength={images.length}
          />
        </div>
      </div>
    </section>
  );
};
