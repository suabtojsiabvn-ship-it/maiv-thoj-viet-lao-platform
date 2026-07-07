export const locales = ["en", "vi", "hmn", "lo", "th"] as const;

export type Locale = (typeof locales)[number];

export interface LocaleInfo {
  code: Locale;
  label: string;
  nativeLabel: string;
  direction: "ltr" | "rtl";
}

export interface LocaleDictionary {
  common: {
    brandName: string;
    tagline: string;
    primaryCta: string;
    secondaryCta: string;
  };
}