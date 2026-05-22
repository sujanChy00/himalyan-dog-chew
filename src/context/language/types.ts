export type LanguageKey = "en" | "ja";

export interface LanguageContextType {
  language: LanguageKey;
  setLanguage: (language: LanguageKey) => void;
}

const dictionary_keys = ["title"] as const;

export type DictionaryKey = (typeof dictionary_keys)[number];
