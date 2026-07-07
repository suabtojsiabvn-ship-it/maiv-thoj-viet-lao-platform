import type { Locale, LocaleDictionary, LocaleInfo } from "@/types/i18n";
import { locales } from "@/types/i18n";

import {
  enDictionary,
  hmnDictionary,
  loDictionary,
  thDictionary,
  viDictionary,
} from "@/content/locales";

export const defaultLocale: Locale = "en";

export const localeInfo: Record<Locale, LocaleInfo> = {
  en: {
    code: "en",
    label: "English",
    nativeLabel: "English",
    direction: "ltr",
  },

  vi: {
    code: "vi",
    label: "Vietnamese",
    nativeLabel: "Tiếng Việt",
    direction: "ltr",
  },

  hmn: {
    code: "hmn",
    label: "Hmong",
    nativeLabel: "Hmoob",
    direction: "ltr",
  },

  lo: {
    code: "lo",
    label: "Lao",
    nativeLabel: "ລາວ",
    direction: "ltr",
  },

  th: {
    code: "th",
    label: "Thai",
    nativeLabel: "ไทย",
    direction: "ltr",
  },
};

const dictionaries: Record<Locale, LocaleDictionary> = {
  en: enDictionary,
  vi: viDictionary,
  hmn: hmnDictionary,
  lo: loDictionary,
  th: thDictionary,
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDictionary(locale: Locale): LocaleDictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export function getLocaleInfo(locale: Locale): LocaleInfo {
  return localeInfo[locale];
}

export function getSupportedLocales() {
  return locales;
}