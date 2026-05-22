import { engish_dictionary } from "./en";
import { japanese_dictionary } from "./ja";
import type { DictionaryKey, LanguageKey } from "./types";

export const dictionary: Record<LanguageKey, Record<DictionaryKey, string>> = {
  en: engish_dictionary,
  ja: japanese_dictionary,
};
