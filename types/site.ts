export type Locale = "en" | "vi" | "lo" | "hmn" | "th";

export interface Branding {
  name: string;
  tagline: string;
  businessLocation: string;
}

export interface PhoneNumber {
  label: string;
  number: string;
}

export interface Contact {
  email: string;

  phones: PhoneNumber[];

  whatsapp: string;
}

export interface Localization {
  defaultLanguage: Locale;

  supportedLanguages: Locale[];
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface Navigation {
  main: NavigationItem[];
}

export interface CTA {
  primary: string;

  secondary: string;
}

export interface SocialLink {
  label: string;

  url: string;
}

export interface SocialLinks {
  facebook: SocialLink;

  tiktok: SocialLink;

  youtube: SocialLink;
}

export interface SEO {
  title: string;

  description: string;

  keywords: string[];

  ogImage: string;
}

export interface SiteConfig {
  branding: Branding;

  localization: Localization;

  contact: Contact;

  socials: SocialLinks;

  navigation: Navigation;

  cta: CTA;

  seo: SEO;
}