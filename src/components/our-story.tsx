import { useLanguage } from "#/context/language";
import { Link } from "@tanstack/react-router";
import { Container } from "./container";

export const OurStory = () => {
  const { t } = useLanguage();
  return (
    <section className="relative my-16 sm:my-20 py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/our_story_banner.webp')] bg-cover bg-center mix-blend-darken" />
      <div className="absolute inset-0 bg-white/40" />
      <Container className="relative z-20">
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-gray-900">
            {t("our_story")}
          </h2>

          <div className="font-semibold">
            <p className="text-sm sm:text-base leading-relaxed mb-4 text-gray-800 whitespace-pre-line">
              {t("our_story_paragraph_1")}
            </p>

            <p className="text-sm sm:text-base text-gray-800 leading-relaxed mb-8 whitespace-pre-line">
              {t("our_story_paragraph_2")}
            </p>
          </div>

          <Link
            to="/our-story"
            className="inline-flex items-center justify-center rounded-lg bg-dark px-6 py-3 text-sm sm:text-base font-semibold text-white transition hover:opacity-90"
          >
            {t("our_story_learn_more")}
          </Link>
        </div>
      </Container>
    </section>
  );
};
