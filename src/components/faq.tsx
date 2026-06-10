import { useLanguage } from "#/context/language";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Container } from "./container";

export const FAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: t("faq_q1"), a: t("faq_a1") },
    { q: t("faq_q2"), a: t("faq_a2") },
    { q: t("faq_q3"), a: t("faq_a3") },
    { q: t("faq_q4"), a: t("faq_a4") },
    { q: t("faq_q5"), a: t("faq_a5") },
  ];

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-brand/5">
      <Container className="max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-sm font-bold tracking-widest text-creamy-text uppercase bg-creamy/30 px-3 py-1 rounded-full">
            {t("menu_faq")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
            {t("faq_title")}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleOpen(i)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-hidden group"
                >
                  <span className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-amber-800 transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={twMerge(
                      "size-5 text-gray-500 shrink-0 transition-transform duration-300",
                      isOpen ? "rotate-180 text-amber-700" : "",
                    )}
                  />
                </button>
                <div
                  className={twMerge(
                    "transition-all duration-300 ease-in-out",
                    isOpen
                      ? "max-h-[300px] border-t border-gray-150"
                      : "max-h-0",
                  )}
                >
                  <p className="p-6 text-sm sm:text-base text-gray-700 leading-relaxed font-medium bg-gray-50/50">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
