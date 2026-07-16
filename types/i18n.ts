export const defaultLocale = "en" as const;

export const locales = ["en", "hmn", "vi", "th", "lo"] as const;

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
    consultation: LocaleTextItem;
    airportPickup: LocaleTextItem;
    multilingualSupport: LocaleTextItem;
    clinicalPartner: LocaleTextItem;
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
    role: string;
  };
  cta: LocaleCta;
}

export interface LocaleCoordinatorDictionary {
  sectionLabel: string;
  title: string;
  description: string;

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

  services: LocaleTextItem[];
}

export interface LocaleClinicalPartnerDictionary {
  sectionLabel: string;
  title: string;
  description: string;
  badge: string;
  heading: string;
  intro: string;
  quote: string;
  cta: LocaleCta;
  highlights: LocaleTextItem[];
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

  material: LocaleTrustMaterialDictionary;
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
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    hoursLabel: string;
    languagesLabel: string;
  };
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
  trust: LocaleTrustDictionary;
  booking: LocaleBookingDictionary;
  footer: LocaleFooterDictionary;
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