import { useLanguage } from "#/language";

export const ToggleLanguage = () => {
    const { setLanguage, language } = useLanguage();
    return (
      <div
        className="flex items-center gap-2 border border-stone-200 rounded-full overflow-hidden bg-white shadow-sm text-sm font-body"
        aria-label="Language switch"
      >
        <button
          onClick={() => setLanguage("en")}
          id="btn-en"
          className={`${language === "en" ? "bg-peak-500 text-white" : "text-stone-500"} px-4 py-1.5  transition-all ease-in-out`}
          type="button"
        >
          EN
        </button>
        <button
          id="btn-jp"
          onClick={() => setLanguage("ja")}
          className={`${language === "ja" ? "bg-peak-500 text-white" : "text-stone-500"} px-4 py-1.5  transition-all ease-in-out`}
          type="button"
        >
          JP
        </button>
      </div>
    );

};
