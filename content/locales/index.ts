import { enDictionary } from "./en";
import { hmnDictionary } from "./hmn";
import { viDictionary } from "./vi";
import { thDictionary } from "./th";
import { loDictionary } from "./lo";

export {
  enDictionary,
  hmnDictionary,
  viDictionary,
  thDictionary,
  loDictionary,
};

export const dictionaries = {
  en: enDictionary,
  hmn: hmnDictionary,
  vi: viDictionary,
  th: thDictionary,
  lo: loDictionary,
} as const;

export type SupportedDictionaryLocale = keyof typeof dictionaries;

export async function getDictionary(locale: string) {
  switch (locale) {
    case "en":
      return enDictionary;
    case "hmn":
      return hmnDictionary;
    case "vi":
      return viDictionary;
    case "th":
      return thDictionary;
    case "lo":
      return loDictionary;
    default:
      return enDictionary;
  }
}