import { useLanguage } from "#/context/language";
import { SectionLabel } from "./section-label";

export const Contact = () => {
  const { t, language } = useLanguage();

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="reveal bg-linear-to-br from-stone-900 to-stone-700 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-10 sm:p-14">
              <SectionLabel className="text-creamy mb-3">
                {t("contact_get_in_touch")}
              </SectionLabel>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
                <span>{t("contact_ready_partner")}</span>
              </h2>
              <p className="text-stone-400 mb-8 leading-relaxed text-sm sm:text-base">
                <span>{t("contact_desc")}</span>
              </p>
              <ul className="space-y-6 text-stone-300 text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-base shrink-0">
                    📞
                  </span>
                  <div>
                    <div className="text-xs text-stone-500 font-semibold uppercase tracking-wider">
                      <span>{t("address_phone_label")}</span>
                    </div>
                    <a
                      href="tel:048-865-3396"
                      className="hover:text-creamy transition-colors font-semibold"
                    >
                      <span>048-865-3396</span>
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-base shrink-0">
                    ✉️
                  </span>
                  <div>
                    <div className="text-xs text-stone-500 font-semibold uppercase tracking-wider">
                      <span>{t("address_email_label")}</span>
                    </div>
                    <a
                      href="mailto:info@sierrajapan.com"
                      className="hover:text-creamy transition-colors font-semibold"
                    >
                      <span>info@sierrajapan.com</span>
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-base shrink-0">
                    ⏰
                  </span>
                  <div>
                    <div className="text-xs text-stone-500 font-semibold uppercase tracking-wider">
                      <span>Business Hours</span>
                    </div>
                    <span className="font-medium whitespace-pre-line">
                      {t("contact_hours_val")}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="p-10 sm:p-14 bg-white/5 border-l border-white/10 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-white text-xl mb-6">
                  <span>{t("contact_company_profile")}</span>
                </h3>
                <div className="space-y-5 text-stone-300 text-sm">
                  <div>
                    <div className="text-xs text-stone-500 font-semibold uppercase tracking-wider mb-1">
                      <span>Company Name</span>
                    </div>
                    <div className="font-semibold text-white">
                      <span>{t("address_company")}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-stone-500 font-semibold uppercase tracking-wider mb-1">
                      <span>Address</span>
                    </div>
                    <div>
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(
                          language === "ja"
                            ? "埼玉県さいたま市中央区大戸1-34-10"
                            : "1-34-10 Oto, Chuo-ku, Saitama-shi, Saitama 338-0012, Japan",
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-creamy transition-colors inline-flex items-center gap-1 font-medium leading-relaxed"
                      >
                        <span>{t("contact_address_val")} ↗</span>
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-stone-500 font-semibold uppercase tracking-wider mb-1">
                      <span>{t("address_phone_label")}</span>
                    </div>
                    <div>
                      <a
                        href="tel:048-865-3396"
                        className="hover:text-creamy transition-colors font-semibold"
                      >
                        <span>048-865-3396</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-stone-300 border border-white/20">
                  <span>{t("contact_importer")}</span>
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-creamy/40 text-creamy border border-creamy/30">
                  <span>{t("contact_partnership")}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
