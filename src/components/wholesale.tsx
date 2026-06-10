import { useLanguage } from "#/context/language";
import { CheckCircle } from "lucide-react";
import { Container } from "./container";

export const Wholesale = () => {
  const { t } = useLanguage();

  const businessTypes = [
    t("wholesale_list").split("\n")[0].replace("• ", "").trim(),
    t("wholesale_list").split("\n")[1].replace("• ", "").trim(),
    t("wholesale_list").split("\n")[2].replace("• ", "").trim(),
    t("wholesale_list").split("\n")[3].replace("• ", "").trim(),
    t("wholesale_list").split("\n")[4].replace("• ", "").trim(),
  ];

  return (
    <section id="wholesale" className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="bg-linear-to-br from-stone-900 to-stone-700 rounded-3xl overflow-hidden shadow-2xl p-8 sm:p-12 md:p-16 text-white max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-bold tracking-widest text-secondary uppercase bg-white/10 px-3 py-1 rounded-full">
                {t("wholesale_title")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mt-4 mb-6 leading-tight">
                {t("wholesale_subtitle")}
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-medium mb-8">
                {t("wholesale_cta")}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-creamy hover:bg-creamy/90 px-6 py-3.5 text-sm sm:text-base font-bold text-gray-950 transition shadow-lg"
              >
                📬 Get Wholesale Details
              </a>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-stone-200 mb-4 uppercase tracking-wider">
                {t("wholesale_intro")}
              </h3>
              <ul className="space-y-4">
                {businessTypes.map((type, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-stone-100 text-sm sm:text-base"
                  >
                    <CheckCircle className="size-5 text-creamy shrink-0" />
                    <span className="font-semibold">{type}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
