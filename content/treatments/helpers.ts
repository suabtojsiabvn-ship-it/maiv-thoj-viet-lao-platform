import type { Locale } from "@/types/i18n";

import { crownsTreatments } from "./crowns";
import { implantTreatments } from "./implants";
import { smileMakeoverTreatments } from "./smile-makeover";
import type {
  TreatmentContent,
  TreatmentSlug,
} from "./types";
import { veneersTreatments } from "./veneers";

export const treatments: TreatmentContent[] = [
  ...implantTreatments,
  ...veneersTreatments,
  ...crownsTreatments,
  ...smileMakeoverTreatments,
];

export function getAllTreatments(): TreatmentContent[] {
  return treatments;
}

export function getTreatmentsByLocale(
  locale: Locale,
): TreatmentContent[] {
  return treatments.filter(
    (treatment) => treatment.locale === locale,
  );
}

export function getTreatmentBySlug(
  locale: Locale,
  slug: string,
): TreatmentContent | undefined {
  return treatments.find(
    (treatment) =>
      treatment.locale === locale &&
      treatment.slug === slug,
  );
}

export function getTreatmentSlugs(): TreatmentSlug[] {
  return Array.from(
    new Set(
      treatments.map(
        (treatment) => treatment.slug,
      ),
    ),
  );
}

export function getTreatmentStaticParams() {
  return treatments.map((treatment) => ({
    locale: treatment.locale,
    slug: treatment.slug,
  }));
}

export function getTreatmentBySlugWithFallback(
  locale: Locale,
  slug: string,
  fallbackLocale: Locale = "en",
): TreatmentContent | undefined {
  return (
    getTreatmentBySlug(locale, slug) ??
    (locale === fallbackLocale
      ? undefined
      : getTreatmentBySlug(fallbackLocale, slug))
  );
}
