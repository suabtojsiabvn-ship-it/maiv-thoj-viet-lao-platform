import type { TreatmentSlug } from "@/content/treatments";

export interface TreatmentJourneyMap {
  stories: readonly string[];
  travelGuides: readonly string[];
  destinations: readonly string[];
}

export const treatmentJourney: Record<
  TreatmentSlug,
  TreatmentJourneyMap
> = {
  implant: {
    stories: [
      "implant-sydney",
    ],

    travelGuides: [
      "airport-arrival",
      "hotel-stay",
    ],

    destinations: [],
  },

  crowns: {
    stories: [],

    travelGuides: [
      "airport-arrival",
    ],

    destinations: [],
  },

  veneers: {
    stories: [
      "hmong-lava-plus",
    ],

    travelGuides: [
      "hotel-stay",
    ],

    destinations: [],
  },

  smileMakeover: {
    stories: [
      "implant-sydney",
      "hmong-lava-plus",
    ],

    travelGuides: [
      "airport-arrival",
      "hotel-stay",
      "food-culture",
    ],

    destinations: [],
  },
} as const;