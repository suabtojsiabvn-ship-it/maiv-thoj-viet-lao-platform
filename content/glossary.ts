export const glossary = {
  brand: {
    platformName: "Maiv Thoj Viet Lao",
    platformFullName: "Maiv Thoj Viet Lao Platform",
    positioning: "International Medical & Beauty Concierge Platform",
    primaryTagline: "A Smile Worth Traveling For",
    clinicalPartner: "An Nhien Dental",
  },

  people: {
    maivThoj: {
      displayName: "Maiv Thoj",
      primaryRole: "Community Advisor",
      secondaryRole: "International Advisor",
      optionalRole: "VIP Companion",
    },
    aSu: {
      displayName: "A Sử (Txhim)",
      shortName: "A Sử",
      primaryRole: "International Patient Journey Manager",
    },
    doctorToan: {
      displayName: "Dr. Toàn Nguyễn",
      vietnameseDisplayName: "BS. Toàn Nguyễn",
      organization: "An Nhien Dental",
    },
  },

  audiences: {
    primary: "Global Hmong community",
    secondary:
      "International patients who communicate in English, Vietnamese, Lao or Thai",
  },

  languages: {
    sourceLocale: "en",
    defaultLocale: "en",
    priorityLocale: "hmn",
    supportedLocales: ["en", "hmn", "vi", "lo", "th"],
    hmongStandard: "International Hmong",
  },

  services: {
    dentalImplants: "Dental Implants",
    ceramicCrowns: "Ceramic Crowns",
    porcelainVeneers: "Porcelain Veneers",
    smileMakeover: "Smile Makeover",
    patientJourneySupport: "International Patient Journey Support",
    airportPickup: "Airport Pickup",
    airportDropOff: "Airport Drop-off",
    languageSupport: "Language Support",
    journeyCoordination: "Journey Coordination",
    journeyMemories: "Journey Memories",
  },

  policyLanguage: {
    freePickupAndDropOff:
      "Free pickup and drop-off are provided throughout the confirmed patient journey.",
    vipCompanion:
      "Maiv Thoj VIP Companion support is available by advance request and subject to her schedule.",
    travelActivities:
      "Optional travel activities depend on clinical suitability, the confirmed treatment schedule and available time.",
    treatmentPlanning:
      "Treatment recommendations are provided only after an appropriate clinical evaluation.",
  },

  prohibitedVariants: {
    aSu: ["A Su", "A Sử (Xwm)", "A Sử (xwm tsawb)"],
    doctorToan: ["Dr. Toan Nguyen", "Doctor Toan Nguyen"],
    maivRole: ["Community Ambassador", "Brand Ambassador"],
  },
} as const;

export type Glossary = typeof glossary;
