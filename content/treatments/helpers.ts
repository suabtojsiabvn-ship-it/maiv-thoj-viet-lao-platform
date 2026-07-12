import type { Locale } from "@/types/i18n";

import { implantTreatments } from "./implants";
import type {
  TreatmentContent,
  TreatmentSlug,
} from "./types";

export const treatments: TreatmentContent[] = [
  ...implantTreatments,
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