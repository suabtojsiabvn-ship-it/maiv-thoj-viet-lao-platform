import type { Locale } from "@/types/i18n";
import { locales } from "@/types/i18n";

export const localePrefix = "always";

export function isSupportedLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleFromPathname(pathname: string): Locale | null {
  const segment = pathname.split("/")[1];

  if (segment && isSupportedLocale(segment)) {
    return segment;
  }

  return null;
}

export function addLocaleToPathname(pathname: string, locale: Locale) {
  if (pathname === "/") {
    return `/${locale}`;
  }

  return `/${locale}${pathname}`;
}