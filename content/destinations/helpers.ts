import type { Locale } from "@/types/i18n";

import { destinations } from "./index";

export function getDestinationsByLocale(locale: Locale) {
  return destinations.filter(
    (destination) => destination.locale === locale && destination.published,
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

export function getFeaturedDestinations(locale: Locale) {
  return destinations.filter(
    (destination) =>
      destination.locale === locale &&
      destination.published &&
      destination.featured,
  );
}

export function getDestinationSlugs(locale?: Locale) {
  return destinations
    .filter((destination) =>
      locale ? destination.locale === locale : true,
    )
    .filter((destination) => destination.published)
    .map((destination) => ({
      locale: destination.locale,
      slug: destination.slug,
    }));
}