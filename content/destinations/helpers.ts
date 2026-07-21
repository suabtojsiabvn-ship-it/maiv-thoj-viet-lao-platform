import { locales, type Locale, type LocaleDestinationKey } from "@/types/i18n";
import type { DestinationContent } from "@/types/content/destination";

import { destinations } from "./index";

export const destinationKeys = [
  "sapa",
  "bac-ha",
  "ha-giang",
  "moc-chau",
  "ha-long",
] as const satisfies readonly LocaleDestinationKey[];

export function isDestinationKey(value: string): value is LocaleDestinationKey {
  return destinationKeys.some((key) => key === value);
}

export function getDestinationsByLocale(
  locale: Locale,
  fallbackLocale: Locale = "vi",
) {
  return destinationKeys
    .map((slug) =>
      getDestinationBySlugWithFallback(locale, slug, fallbackLocale),
    )
    .filter(
      (destination): destination is DestinationContent =>
        destination !== undefined,
    );
}

export function getDestinationBySlug(locale: Locale, slug: string) {
  return destinations.find(
    (destination) =>
      destination.locale === locale &&
      destination.slug === slug &&
      destination.published,
  );
}

export function getDestinationBySlugWithFallback(
  locale: Locale,
  slug: string,
  fallbackLocale: Locale = "vi",
) {
  return (
    getDestinationBySlug(locale, slug) ??
    (locale === fallbackLocale
      ? undefined
      : getDestinationBySlug(fallbackLocale, slug))
  );
}

export function getFeaturedDestinations(
  locale: Locale,
  fallbackLocale: Locale = "vi",
) {
  return getDestinationsByLocale(locale, fallbackLocale).filter(
    (destination) => destination.featured,
  );
}

export function getDestinationSlugs(locale?: Locale) {
  return destinations
    .filter((destination) => (locale ? destination.locale === locale : true))
    .filter((destination) => destination.published)
    .map((destination) => ({
      locale: destination.locale,
      slug: destination.slug,
    }));
}

export function getDestinationStaticParams() {
  return locales.flatMap((locale) =>
    destinationKeys.map((slug) => ({
      locale,
      slug,
    })),
  );
}
