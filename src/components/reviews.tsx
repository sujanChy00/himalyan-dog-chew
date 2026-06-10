import { useLanguage } from "#/context/language";
import { Star } from "lucide-react";
import { Container } from "./container";

export const Reviews = () => {
  const { t } = useLanguage();

  const reviews = [
    {
      text: t("review_1_text"),
    },
    {
      text: t("review_2_text"),
    },
    {
      text: t("review_3_text"),
    },
  ];

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-brand/5">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-bold tracking-widest text-creamy-text uppercase bg-creamy/30 px-3 py-1 rounded-full">
            ★ ★ ★ ★ ★
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
            {t("reviews_title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 shadow-xs border border-gray-100 flex flex-col justify-between"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className="size-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed font-semibold italic mb-6">
                "{r.text}"
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
