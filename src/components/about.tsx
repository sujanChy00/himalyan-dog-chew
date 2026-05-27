import { useLanguage } from "#/context/language";

export const About = () => {
  const { t } = useLanguage();

  return (
    <div className="md:pr-10">
      <h2 className="text-2xl font-bold mb-4 whitespace-pre-line">
        {t("about_title")}
      </h2>
      <p className="text-gray-800 text-sm font-medium leading-relaxed mb-4 whitespace-pre-line">
        {t("about_paragraph_1")}
      </p>
      <p className="text-gray-800 text-sm font-medium leading-relaxed mb-6 whitespace-pre-line">
        {t("about_paragraph_2")}
      </p>
      <img
        src="/himalyan_yak.webp"
        alt="Himalayan mountains with yaks"
        className="rounded-xl w-full h-44 object-cover shadow"
      />
    </div>
  );
};
