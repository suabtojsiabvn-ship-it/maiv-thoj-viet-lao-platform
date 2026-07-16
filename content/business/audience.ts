export const audience = {
  primary: {
    id: "global-hmong-community",

    name: "Global Hmong Community",

    description:
      "Hmong families and individuals living around the world who are considering trusted dental treatment and patient journey support in Vietnam.",

    preferredLocale: "hmn",

    regions: [
      "United States",
      "France",
      "Australia",
      "Laos",
      "Thailand",
      "Vietnam",
      "Other international markets",
    ],
  },

  secondary: {
    id: "international-patients",

    name: "International Patients",

    description:
      "International patients seeking trusted dental treatment, multilingual communication and personalized journey support in Vietnam.",

    supportedLocales: [
      "en",
      "vi",
      "lo",
      "th",
    ],
  },

  languageStrategy: {
    sourceLocale: "en",

    defaultLocale: "en",

    priorityAudienceLocale: "hmn",

    supportedLocales: [
      "en",
      "hmn",
      "vi",
      "lo",
      "th",
    ],
  },
} as const;

export type Audience = typeof audience;