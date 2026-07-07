export const locales = ["en", "vi", "hmn", "lo", "th"] as const;

export type Locale = (typeof locales)[number];

export interface LocaleInfo {
  code: Locale;
  label: string;
  nativeLabel: string;
  direction: "ltr" | "rtl";
}

export interface LocaleDictionary {
  common: {
    brandName: string;
    tagline: string;
    primaryCta: string;
    secondaryCta: string;
  };

  hero: {
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
      consultation: {
        title: string;
        description: string;
      };

      airportPickup: {
        title: string;
        description: string;
      };

      multilingualSupport: {
        title: string;
        description: string;
      };

      clinicalPartner: {
        title: string;
        description: string;
      };
    };

    stats: {
      facebookCommunity: string;
      tiktokCommunity: string;
      languagesSupported: string;
    };
  };

  founder: {
    sectionLabel: string;
    title: string;
    description: string;
  };

  coordinator: {
    sectionLabel: string;
    title: string;
    description: string;
  };

  clinicalPartner: {
    sectionLabel: string;
    title: string;
    description: string;
  };

  treatments: {
    sectionLabel: string;
    title: string;
    description: string;
  };

  beforeAfter: {
    sectionLabel: string;
    title: string;
    description: string;
  };

  journey: {
    sectionLabel: string;
    title: string;
    description: string;
  };

  booking: {
    sectionLabel: string;
    title: string;
    description: string;
  };

  footer: {
    description: string;
  };
}