import type { TreatmentSlug } from "@/content/treatments";

import { treatmentJourney } from "./treatment-journey";

export function getTreatmentJourney(
  slug: TreatmentSlug,
) {
  return treatmentJourney[slug];
}