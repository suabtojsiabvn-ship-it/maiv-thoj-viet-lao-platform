import type { SiteConfig } from "@/types/site";

import { brand } from "@/content/branding";
import { contact } from "@/content/contact";
import { socials } from "@/content/config";
import { navigation } from "@/content/navigation";
import { seo } from "@/content/seo";

export const site: SiteConfig = {
  branding: {
    name: brand.name,
    tagline: brand.tagline,
    businessLocation: brand.location,
  },

  localization: {
    defaultLanguage: "en",
    supportedLanguages: ["en", "vi", "lo", "hmn", "th"],
  },

  contact,

  socials,

  cta: {
    primary: "Start Your Journey",
    secondary: "Free Consultation",
  },

  navigation,

  seo,
};