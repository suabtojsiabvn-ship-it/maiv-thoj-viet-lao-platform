export const locales = ["en", "vi", "hmn", "lo", "th"] as const;

export type Locale = (typeof locales)[number];

export interface LocaleInfo {
  code: Locale;
  label: string;
  nativeLabel: string;
  direction: "ltr" | "rtl";
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
  badge: string;
  heading: string;
  intro: string;
  story: string[];
  quote: string;
  cta: LocaleCta;
  values: LocaleTextItem[];
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
}

export interface LocaleBeforeAfterDictionary {
  sectionLabel: string;
  title: string;
  description: string;
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

export interface LocaleJourneyDictionary {
  sectionLabel: string;
  title: string;
  description: string;
  badge: string;
  heading: string;
  intro: string;
  steps: {
    consultation: LocaleTextItem;
    plan: LocaleTextItem;
    travel: LocaleTextItem;
    pickup: LocaleTextItem;
    treatment: LocaleTextItem;
    recovery: LocaleTextItem;
    return: LocaleTextItem;
  };
  cta: LocaleCta;
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

  hero: LocaleHeroDictionary;
  founder: LocaleFounderDictionary;
  coordinator: LocaleCoordinatorDictionary;
  clinicalPartner: LocaleClinicalPartnerDictionary;
  treatments: LocaleTreatmentsDictionary;
  beforeAfter: LocaleBeforeAfterDictionary;
  journey: LocaleJourneyDictionary;
  booking: LocaleBookingDictionary;
  footer: LocaleFooterDictionary;
}