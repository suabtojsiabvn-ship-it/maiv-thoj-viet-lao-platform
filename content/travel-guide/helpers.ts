import type { TravelGuideCategory } from "@/types/content/travel-guide";
import type { Locale } from "@/types/i18n";

import { travelGuides } from "./index";

export function getTravelGuidesByLocale(locale: Locale) {
  return travelGuides.filter(
    (guide) => guide.locale === locale && guide.published,
  );
}

export function getTravelGuideBySlug(locale: Locale, slug: string) {
  return travelGuides.find(
    (guide) =>
      guide.locale === locale &&
      guide.slug === slug &&
      guide.published,
  );
}

export function getFeaturedTravelGuides(locale: Locale) {
  return travelGuides.filter(
    (guide) => guide.locale === locale && guide.published && guide.featured,
  );
}

export function getTravelGuidesByCategory(
  locale: Locale,
  category: TravelGuideCategory,
) {
  return travelGuides.filter(
    (guide) =>
      guide.locale === locale &&
      guide.category === category &&
      guide.published,
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