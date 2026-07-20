export const defaultLocale = "en" as const;

export const locales = [
  "en",
  "hmn",
  "vi",
  "th",
  "lo",
] as const;

export type Locale = (typeof locales)[number];

export const localePriority = {
  en: 1,
  hmn: 2,
  vi: 3,
  th: 4,
  lo: 5,
} as const;

export const localeLabels = {
  en: "English",
  hmn: "Hmong",
  vi: "Tiếng Việt",
  th: "ไทย",
  lo: "ລາວ",
} as const;

export interface LocaleInfo {
  code: Locale;
  label: string;
  nativeLabel: string;
  direction: "ltr" | "rtl";
}

export type LocaleNavigationItemKey =
  | "home"
  | "treatments"
  | "journey"
  | "about"
  | "contact";

export interface LocaleNavigationDictionary {
  items: Record<LocaleNavigationItemKey, string>;
}

export interface LocaleCta {
  label: string;
}

export interface LocaleTextItem {
  title: string;
  description: string;
}

export interface LocaleHeroDictionary {
  badge: string;

  title: {
    line1: string;
    line2: string;
  };

  subtitle: string;

  actions: {
    primary: string;
    secondary: string;
  };

  highlights: {
    sectionLabel: string;
    heading: string;

    items: {
      consultation: LocaleTextItem;
      airportPickup: LocaleTextItem;
      multilingualSupport: LocaleTextItem;
      clinicalPartner: LocaleTextItem;
    };
  };

  stats: {
    facebookCommunity: string;
    tiktokCommunity: string;
    languagesSupported: string;
  };
}

export interface LocaleFounderDictionary {
  sectionLabel: string;
  title: string;
  description: string;
  imageAlt: string;
  story: string[];
  quote: string;

  stats: {
    facebook: string;
    tiktok: string;
    role: {
      value: string;
      label: string;
    };
  };

  cta: LocaleCta;
}

export type LocaleCoordinatorServiceKey =
  | "planning"
  | "airportWelcome"
  | "communication"
  | "coordination"
  | "memories";

export interface LocaleCoordinatorDictionary {
  sectionLabel: string;
  title: string;
  description: string;
  imageAlt: string;

  badge: string;
  heading: string;
  intro: string;

  story: string[];

  quote: string;

  cta: LocaleCta;

  imageCard: {
    role: string;
    description: string;
  };

  services: Record<LocaleCoordinatorServiceKey, LocaleTextItem>;
}

export type LocaleClinicalHighlightKey =
  | "personalizedPlanning"
  | "experiencedTeam"
  | "clinicalLeadership"
  | "digitalDentistry";

export interface LocaleClinicalPartnerDictionary {
  sectionLabel: string;
  title: string;
  description: string;
  imageAlt: string;

  badge: string;
  heading: string;
  intro: string;
  quote: string;

  cta: LocaleCta;

  highlights: Record<LocaleClinicalHighlightKey, LocaleTextItem>;

  technology: {
    title: string;
  };

  imageCard: {
    badge: string;
    description: string;
  };

  technologies: Array<{
    name: string;
    description: string;
  }>;
}

export interface LocaleTreatmentsDictionary {
  sectionLabel: string;
  title: string;
  description: string;

  items: {
    implant: LocaleTextItem;
    crowns: LocaleTextItem;
    veneers: LocaleTextItem;
    smileMakeover: LocaleTextItem;
  };

  cta: {
    learnMore: string;
  };
}

export interface LocaleBeforeAfterDictionary {
  sectionLabel: string;
  title: string;
  description: string;

  labels: {
    before: string;
    after: string;
  };

  cases: {
    case1: {
      title: string;
      treatment: string;
      country: string;
    };

    case2: {
      title: string;
      treatment: string;
      country: string;
    };

    case3: {
      title: string;
      treatment: string;
      country: string;
    };

    case4: {
      title: string;
      treatment: string;
      country: string;
    };
  };
}

export type LocaleJourneyIcon =
  | "message-circle"
  | "clipboard-list"
  | "plane-takeoff"
  | "car"
  | "stethoscope"
  | "heart-pulse"
  | "house";

export interface LocaleJourneyStep {
  id: string;
  icon: LocaleJourneyIcon;
  title: string;
  description: string;
}

export interface LocaleJourneyDictionary {
  sectionLabel: string;
  title: string;
  description: string;

  badge: string;
  heading: string;
  intro: string;

  steps: LocaleJourneyStep[];

  cta: LocaleCta;
}

export interface LocaleTrustMaterialDictionary {
  title: string;
  description: string;
  items: string[];
}

export interface LocaleTrustDictionary {
  badge: string;
  heading: string;
  description: string;
  personalizedCare: string;

  countries: Array<{
    code: string;
    name: string;
  }>;

  transparency: {
    title: string;
    description: string;
    items: string[];
  };

  material: LocaleTrustMaterialDictionary;

  community: {
    title: string;
    description: string;

    stats: Array<{
      value: string;
      label: string;
    }>;
  };
}

export interface LocaleBookingDictionary {
  sectionLabel: string;
  title: string;
  description: string;

  badge: string;
  heading: string;
  intro: string;

  benefits: {
    consultation: LocaleTextItem;
    plan: LocaleTextItem;
    travel: LocaleTextItem;
    coordinator: LocaleTextItem;
  };

  fields: {
    fullName: string;
    fullNamePlaceholder: string;

    country: string;
    countryPlaceholder: string;

    preferredLanguage: string;

    whatsapp: string;
    whatsappPlaceholder: string;

    email: string;
    emailPlaceholder: string;

    treatment: string;
    selectTreatment: string;

    travelDate: string;

    message: string;
    messagePlaceholder: string;
  };

  treatments: {
    implant: string;
    smileMakeover: string;
    crowns: string;
    veneers: string;
    consultation: string;
  };

  languages: {
    en: string;
    vi: string;
    lo: string;
    hmn: string;
    th: string;
  };

  cta: {
    submit: string;
    submitting: string;
    privacy: string;
  };
}

export interface LocaleFooterDictionary {
  description: string;

  sections: {
    treatments: {
      title: string;

      links: {
        implants: string;
        smileMakeover: string;
        veneers: string;
        crowns: string;
      };
    };

    travel: {
      title: string;

      links: {
        airportPickup: string;
        hotels: string;
        travelGuide: string;
        faq: string;
      };
    };

    company: {
      title: string;

      links: {
        about: string;
        doctors: string;
        patientStories: string;
        contact: string;
      };
    };

    resources: {
      title: string;

      links: {
        blog: string;
        privacy: string;
        terms: string;
        sitemap: string;
      };
    };
  };

  contact: {
    title: string;
    addressLabel: string;
    phoneLabel: string;
    vietnamPhoneLabel: string;
    laosPhoneLabel: string;
    emailLabel: string;
    whatsappLabel: string;
    hoursLabel: string;
    languagesLabel: string;
  };

  socialTitle: string;

  bottom: {
    rightsReserved: string;
    builtFor: string;
  };
}

export type LocalePatientJourneyStepKey =
  | "initialContact"
  | "initialConsultation"
  | "preliminaryPlanning"
  | "travelToVietnam"
  | "airportArrival"
  | "clinicalAssessment"
  | "treatmentProcess"
  | "recovery"
  | "optionalTravel"
  | "finalReview"
  | "internationalAftercare";

export interface LocalePatientJourneyStepText {
  stage: string;
  title: string;
  description: string;
  estimatedDuration: string;
}

export interface LocalePatientJourneyDictionary {
  badge: string;
  title: string;
  description: string;
  optional: string;
  timing: string;

  steps: Record<
    LocalePatientJourneyStepKey,
    LocalePatientJourneyStepText
  >;
}

export interface LocaleWhyDictionary {
  sectionLabel: string;
  title: string;
  description: string;
  imageAlt: string;

  cards: {
    guidance: LocaleTextItem;
    language: LocaleTextItem;
    coordination: LocaleTextItem;
    care: LocaleTextItem;
  };
}

/**
 * Shared SEO text for an individual localized route.
 */
export interface LocalePageSeoDictionary {
  title: string;
  description: string;
}

/**
 * Localized text used by /[locale]/contact.
 *
 * Contact values such as phone numbers, WhatsApp URLs and email addresses
 * remain in content/contact. Only user-facing text belongs here.
 */
export interface LocaleContactPageDictionary {
  seo: LocalePageSeoDictionary;

  badge: string;
  heading: string;
  description: string;

  channels: {
    whatsapp: {
      description: string;
    };

    email: {
      description: string;
    };

    vietnamPhone: {
      description: string;
    };

    laosPhone: {
      description: string;
    };
  };

  cta: {
    heading: string;
    description: string;
    label: string;
  };
}

/**
 * Localized route-specific text used by /[locale]/journey.
 *
 * The timeline itself continues to use LocaleJourneyDictionary so that
 * the homepage section and standalone page share the same journey data.
 */
export interface LocaleJourneyPageDictionary {
  seo: LocalePageSeoDictionary;

  trustMessage: {
    heading: string;
    description: string;
  };
}

/**
 * Localized listing-page text used by /[locale]/treatments.
 *
 * Individual treatment details continue to live in the treatment content
 * layer. This interface covers the route heading, description and SEO.
 */
export interface LocaleTreatmentsPageDictionary {
  seo: LocalePageSeoDictionary;

  badge: string;
  heading: string;
  description: string;

  schema: {
    collectionName: string;
    breadcrumbHome: string;
    breadcrumbCurrent: string;
  };

  emptyState: {
    heading: string;
    description: string;
  };
}

/**
 * Localized listing-page text used by /[locale]/travel-guide.
 */
export interface LocaleTravelGuidePageDictionary {
  seo: LocalePageSeoDictionary;

  badge: string;
  heading: string;
  description: string;

  schema: {
    collectionName: string;
    breadcrumbHome: string;
    breadcrumbCurrent: string;
  };

  emptyState: {
    heading: string;
    description: string;
  };
}

/**
 * Localized text used by /[locale]/about.
 *
 * Founder, coordinator and clinical-partner content continues to come
 * from their existing shared dictionaries.
 */
export interface LocaleAboutPageDictionary {
  seo: LocalePageSeoDictionary;

  badge: string;
  heading: string;
  description: string;
}

/**
 * Route-level text that must not be hardcoded inside page.tsx files.
 */
export interface LocalePagesDictionary {
  contact: LocaleContactPageDictionary;
  journey: LocaleJourneyPageDictionary;
  treatments: LocaleTreatmentsPageDictionary;
  travelGuide: LocaleTravelGuidePageDictionary;
  about: LocaleAboutPageDictionary;
}

export interface LocaleDictionary {
  common: {
    brandName: string;
    tagline: string;
    primaryCta: string;
    secondaryCta: string;
  };

  navigation: LocaleNavigationDictionary;
  hero: LocaleHeroDictionary;
  why: LocaleWhyDictionary;
  founder: LocaleFounderDictionary;
  coordinator: LocaleCoordinatorDictionary;
  clinicalPartner: LocaleClinicalPartnerDictionary;
  treatments: LocaleTreatmentsDictionary;
  beforeAfter: LocaleBeforeAfterDictionary;
  journey: LocaleJourneyDictionary;
  patientJourney: LocalePatientJourneyDictionary;
  trust: LocaleTrustDictionary;
  booking: LocaleBookingDictionary;
  footer: LocaleFooterDictionary;

  /**
   * Optional only during the dictionary migration.
   *
   * It will become required after en, hmn, vi, th and lo dictionaries
   * have all received their route-level page content.
   */
  pages: LocalePagesDictionary;
}
