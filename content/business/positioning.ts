import { brand } from "./brand";

export const positioning = {
  category:
    "International Medical & Beauty Concierge Platform",

  currentFocus:
    "International dental treatment and patient journey support in Vietnam",

  primaryMarket:
    "Global Hmong community",

  secondaryMarket:
    "International patients communicating in English, Vietnamese, Lao or Thai",

  valueProposition:
    "Trusted multilingual guidance, patient journey coordination and connection with qualified clinical partners in Vietnam.",

  platformRole: {
    includes: [
      "Pre-arrival guidance",
      "Multilingual communication support",
      "Airport pickup and drop-off coordination",
      "Appointment coordination",
      "Practical support during the confirmed patient journey",
      "Optional journey memories with patient permission",
    ],

    excludes: [
      "Clinical diagnosis",
      "Dental treatment decisions",
      "Medical guarantees",
      "Guaranteed treatment outcomes",
    ],
  },

  clinicalCare:
    "Clinical examination, diagnosis, treatment planning and dental treatment are provided by qualified clinical partners.",

  slogan: brand.slogan,

  mission: brand.mission,

  vision: brand.vision,

  philosophy: brand.philosophy,
} as const;

export type Positioning = typeof positioning;