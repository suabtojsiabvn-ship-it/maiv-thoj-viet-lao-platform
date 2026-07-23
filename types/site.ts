export type Locale =
  | "en"
  | "hmn"
  | "vi"
  | "th"
  | "lo";

export interface Branding {
  name: string;
  tagline: string;
  businessLocation: string;
}

export interface ContactChannel {
  label: string;
  value: string;
  href: string;
}

export interface Contact {
  phone: {
    vietnam: ContactChannel;
    laos: ContactChannel;
  };

  whatsapp: ContactChannel;

  email: ContactChannel;
}

export interface Localization {
  defaultLanguage: Locale;
  supportedLanguages: readonly Locale[];
}

export type NavigationItemKey =
  | "home"
  | "treatments"
  | "journey"
  | "media"
  | "about"
  | "contact";

export interface NavigationItem {
  key: NavigationItemKey;
  href: string;
}

export interface Navigation {
  main: readonly NavigationItem[];
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
  keywords: readonly string[];
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
