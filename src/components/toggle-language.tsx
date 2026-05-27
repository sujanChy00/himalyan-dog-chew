import { useLanguage } from "#/context/language";

export const ToggleLanguage = () => {
  const { setLanguage, language } = useLanguage();
  return (
    <div className="flex items-center gap-1" aria-label="Language switch">
      <button
        onClick={() => setLanguage("en")}
        id="btn-en"
        className={`rounded-full size-8 text-xs transition-all hover:bg-creamy hover:text-dark duration-300 ${language === "en" ? "bg-creamy text-dark" : ""}`}
        type="button"
      >
        EN
      </button>
      <button
        id="btn-jp"
        onClick={() => setLanguage("ja")}
        className={`rounded-full size-8 text-xs transition-all hover:bg-creamy hover:text-dark duration-300 ${language === "ja" ? "bg-creamy text-dark" : ""}`}
        type="button"
      >
        JP
      </button>
    </div>
  );
};
