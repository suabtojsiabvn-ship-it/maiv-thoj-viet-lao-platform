import type { TravelGuideContent } from "@/types/content/travel-guide";
import { locales, type Locale, type LocaleTravelGuideKey } from "@/types/i18n";

import { travelGuides } from "./index";

export const travelGuideKeys = [
  "airport-arrival",
  "hotel-stay",
  "local-transportation",
  "visa-preparation",
  "food-culture",
  "aftercare-travel",
] as const satisfies readonly LocaleTravelGuideKey[];

export function isTravelGuideKey(value: string): value is LocaleTravelGuideKey {
  return travelGuideKeys.some((key) => key === value);
}

export function getTravelGuideBySlug(locale: Locale, slug: string) {
  return travelGuides.find(
    (guide) =>
      guide.locale === locale && guide.slug === slug && guide.published,
  );
}

export function getTravelGuideBySlugWithFallback(
  locale: Locale,
  slug: string,
  fallbackLocale: Locale = "vi",
) {
  return (
    getTravelGuideBySlug(locale, slug) ??
    (locale === fallbackLocale
      ? undefined
      : getTravelGuideBySlug(fallbackLocale, slug))
  );
}

export function getTravelGuidesByLocale(
  locale: Locale,
  fallbackLocale: Locale = "vi",
) {
  return travelGuideKeys
    .map((slug) =>
      getTravelGuideBySlugWithFallback(locale, slug, fallbackLocale),
    )
    .filter((guide): guide is TravelGuideContent => guide !== undefined);
}

export function getFeaturedTravelGuides(
  locale: Locale,
  fallbackLocale: Locale = "vi",
) {
  return getTravelGuidesByLocale(locale, fallbackLocale).filter(
    (guide) => guide.featured,
  );
}

export function getTravelGuidesByCategory(
  locale: Locale,
  category: TravelGuideContent["category"],
  fallbackLocale: Locale = "vi",
) {
  return getTravelGuidesByLocale(locale, fallbackLocale).filter(
    (guide) => guide.category === category,
  );
}

export function getTravelGuideSlugs(locale?: Locale) {
  return travelGuides
    .filter((guide) => (locale ? guide.locale === locale : true))
    .filter((guide) => guide.published)
    .map((guide) => ({
      locale: guide.locale,
      slug: guide.slug,
    }));
}

export function getTravelGuideStaticParams() {
  return locales.flatMap((locale) =>
    travelGuideKeys.map((slug) => ({
      locale,
      slug,
    })),
  );
}
