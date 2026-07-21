import { locales } from "@/types/i18n";
import type { Locale } from "@/types/i18n";

import { crownsTreatments } from "./crowns";
import { implantTreatments } from "./implants";
import { localizedTreatmentTranslations } from "./locales";
import { localizeTreatment } from "./localize";
import { smileMakeoverTreatments } from "./smile-makeover";
import type { TreatmentContent, TreatmentSlug } from "./types";
import { veneersTreatments } from "./veneers";

const sourceTreatments: TreatmentContent[] = [
  ...implantTreatments,
  ...veneersTreatments,
  ...crownsTreatments,
  ...smileMakeoverTreatments,
];

const englishTreatments = sourceTreatments.filter(
  (treatment) => treatment.locale === "en",
);

export const treatments: TreatmentContent[] = locales.flatMap((locale) => {
  if (locale === "en") {
    return englishTreatments;
  }

  const translations = localizedTreatmentTranslations[locale];

  if (!translations) {
    return [];
  }

  return englishTreatments.map((treatment) =>
    localizeTreatment(treatment, locale, translations[treatment.slug]),
  );
});

export function getAllTreatments(): TreatmentContent[] {
  return treatments;
}

export function getTreatmentsByLocale(locale: Locale): TreatmentContent[] {
  return treatments.filter((treatment) => treatment.locale === locale);
}

export function getTreatmentBySlug(
  locale: Locale,
  slug: string,
): TreatmentContent | undefined {
  return treatments.find(
    (treatment) => treatment.locale === locale && treatment.slug === slug,
  );
}

export function getTreatmentSlugs(): TreatmentSlug[] {
  return Array.from(
    new Set(englishTreatments.map((treatment) => treatment.slug)),
  );
}

export function getTreatmentStaticParams() {
  return locales.flatMap((locale) =>
    getTreatmentSlugs().map((slug) => ({
      locale,
      slug,
    })),
  );
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
