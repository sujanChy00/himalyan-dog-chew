import { useLanguage } from "#//context/language";
import { Container } from "./container";

export const ContactForm = () => {
  const { t } = useLanguage();
  return (
    <Container className="bg-brand/10 py-10 md:max-w-3xl">
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-2">
        {t("contact_heading")}
      </h1>
      <form action="" className="grid md:grid-cols-2 grid-cols-1 gap-4 py-10">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            {t("contact_name")}
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-3 rounded-md border border-creamy-dark focus:outline-none focus:ring-[3px] focus:ring-creamy-text/50"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            {t("contact_email")}
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 rounded-md border border-creamy-dark focus:outline-none focus:ring-[3px] focus:ring-creamy-text/50"
          />
        </div>

        <div className="col-span-full">
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            {t("contact_message")}
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full px-4 py-3 rounded-md border border-creamy-dark focus:outline-none focus:ring-[3px] focus:ring-creamy-text/50"
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-creamy-dark text-white px-4 py-3 rounded-md font-medium hover:bg-creamy-dark/90 transition"
          >
            {t("contact_submit")}
          </button>
        </div>
      </form>
    </Container>
  );
};
