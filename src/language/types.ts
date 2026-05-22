
export type LanguageKey = "en" | "ja";

export interface LanguageContextType {
  language: LanguageKey;
  setLanguage: (language: LanguageKey) => void;
}