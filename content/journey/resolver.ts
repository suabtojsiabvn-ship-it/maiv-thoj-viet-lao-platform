import { getDestinationBySlug } from "@/content/destinations";
import { getPatientStoryBySlug } from "@/content/stories";
import type { TreatmentSlug } from "@/content/treatments";
import { getTravelGuideBySlug } from "@/content/travel-guide";
import type { Locale } from "@/types/i18n";

import { getTreatmentJourney } from "./helpers";

export function resolveTreatmentJourney(
  locale: Locale,
  slug: TreatmentSlug,
) {
  const mapping = getTreatmentJourney(slug);

  return {
    stories: mapping.stories.flatMap((storySlug) => {
      const story = getPatientStoryBySlug(
        locale,
        storySlug,
      );

      return story ? [story] : [];
    }),

    travelGuides: mapping.travelGuides.flatMap(
      (guideSlug) => {
        const guide = getTravelGuideBySlug(
          locale,
          guideSlug,
        );

        return guide ? [guide] : [];
      },
    ),

    destinations: mapping.destinations.flatMap(
      (destinationSlug) => {
        const destination = getDestinationBySlug(
          locale,
          destinationSlug,
        );

        return destination ? [destination] : [];
      },
    ),
  };
}

export type ResolvedTreatmentJourney =
  ReturnType<typeof resolveTreatmentJourney>;