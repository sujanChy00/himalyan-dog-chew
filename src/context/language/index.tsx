import { CAN_USE_LOCAL_STORAGE } from "#/utils";
import { createContext, useContext, useEffect, useState } from "react";
import { dictionary } from "./dictionary";
import type { DictionaryKey, LanguageContextType, LanguageKey } from "./types";

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLang] = useState<LanguageKey>("ja");

  const setLanguage = (lang: LanguageKey) => {
    if (CAN_USE_LOCAL_STORAGE) {
      if (lang === "en") {
        localStorage.setItem("language", "en");
        setLang("en");
      } else {
        localStorage.setItem("language", "ja");
        setLang("ja");
      }
    }
  };

  useEffect(() => {
    if (CAN_USE_LOCAL_STORAGE) {
      const savedLanguage = localStorage.getItem("language");
      if (savedLanguage) {
        setLang(savedLanguage as LanguageKey);
      }
    }
  }, []);

  const getLanguageKey = (key: DictionaryKey) => {
    return dictionary[language][key];
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: getLanguageKey }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguageContext must be used within a LanguageProvider",
    );
  }
  return context;
};
