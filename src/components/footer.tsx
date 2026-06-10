import { footerLinks } from "#/constants";
import { useLanguage } from "#/context/language";
import { Link } from "@tanstack/react-router";
import { Container } from "./container";
import { InstagramIcon } from "./icons/instagram";
import { MailIcon } from "./icons/mail";

export const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="border-t border-t-creamy-dark">
      <Container className="grid grid-cols-1 md:grid-cols-4 gap-10 md:divide-x py-10">
        <section className="space-y-1">
          <Link to="/">
            <img src="/logo.webp" alt="" />
          </Link>

          <div className="text-sm text-gray-700 leading-relaxed">
            <p>{t("address_company")}</p>
            <p className="whitespace-pre-line">{t("address_lines")}</p>
            <a href="tel:+81488653396">
              {t("address_phone_label")}:{" "}
              {language === "ja" ? "048-865-3396" : "+81-48-865-3396"}
            </a>
            <br />
            <a href="mailto:info@sierrajapan.com">
              {t("address_email_label")}: info@sierrajapan.com
            </a>
          </div>
        </section>
        <section className="space-y-1">
          <h4 className="font-bold text-sm mb-4 uppercase tracking-wide">
            {t("footer_menu_title")}
          </h4>
          <ul className="space-y-2 text-sm text-gray-700">
            {footerLinks.map((link, index) => (
              <li key={String(link.to) + String(index)}>
                <Link
                  activeProps={{
                    className:
                      "underline text-creamy-text decoration-creamy-text",
                  }}
                  to={link.to}
                  className="hover:text-creamy-text hover:underline"
                >
                  {t(link.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="space-y-1">
          <h4 className="font-bold text-sm mb-4 uppercase tracking-wide">
            {t("footer_contact_title")}
          </h4>
          <p className="text-sm text-gray-700 mb-4 whitespace-pre-line">
            {t("footer_contact_desc")}
          </p>
          <Link
            to="/contact"
            className="bg-creamy-dark text-white inline-flex items-center gap-2 px-5 py-2 rounded text-sm font-bold"
          >
            <MailIcon />
            <span>{t("footer_contact_button")}</span>
          </Link>
        </section>
        <section className="space-y-1">
          <h4 className="font-bold text-sm mb-4 uppercase tracking-wide">
            {t("footer_sns_title")}
          </h4>
          <a
            href="#"
            className="flex items-center gap-2 text-pink-500 font-semibold hover:opacity-80 transition mb-2"
          >
            <InstagramIcon />
            <span>Instagram</span>
          </a>
          <p className="text-xs text-gray-700 whitespace-pre-line">
            {t("footer_sns_desc")}
          </p>
        </section>
      </Container>
      <div className="bg-creamy-dark">
        <Container className="text-brand flex flex-wrap items-center gap-3 justify-between py-4">
          <div className="flex gap-4">
            <a href="#" className="hover:underline hover:text-creamy">
              {t("footer_privacy_policy")}
            </a>
            <span>|</span>
            <a href="#" className="hover:underline hover:text-creamy">
              {t("footer_terms_of_use")}
            </a>
          </div>
          <p>© Sierra Japan Enterprises LLC. All Rights Reserved.</p>
        </Container>
      </div>
    </footer>
  );
};
