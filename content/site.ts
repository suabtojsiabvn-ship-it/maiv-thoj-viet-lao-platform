import type { SiteConfig } from "@/types/site";

export const site: SiteConfig = {
  branding: {
    name: "Maiv Thoj Viet Lao",
    tagline: "Dental Tourism & Medical Concierge",
    businessLocation: "Vientiane, Laos",
  },

  localization: {
    defaultLanguage: "en",
    supportedLanguages: [
      "en",
      "vi",
      "lo",
      "hmn",
      "th",
    ],
  },

  contact: {
    email: "hello@maivthojvietlao.com",

    phones: [
      {
        label: "Laos",
        number: "02052504085",
      },
      {
        label: "Vietnam",
        number: "+84963305681",
      },
    ],

    whatsapp: "+84963305681",
  },

  socials: {
    facebook: {
      label: "Facebook",
      url: "https://www.facebook.com/maivthoj93",
    },

    tiktok: {
      label: "TikTok",
      url: "https://www.tiktok.com/@maivthojvietlaobrand1993",
    },

    youtube: {
      label: "YouTube",
      url: "",
    },
  },

  cta: {
    primary: "Start Your Journey",
    secondary: "Free Consultation",
  },

  navigation: {
    main: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Treatments",
        href: "/treatments",
      },
      {
        label: "Journey",
        href: "/journey",
      },
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Contact",
        href: "/contact",
      },
    ],
  },

  seo: {
    title: "Maiv Thoj Viet Lao | Dental Tourism & Medical Concierge",

    description:
      "Trusted dental tourism and medical concierge service connecting international patients with An Nhien Dental in Vietnam.",

    keywords: [
      "Dental Tourism",
      "Vietnam Dental",
      "An Nhien Dental",
      "Maiv Thoj Viet Lao",
      "Dental Concierge",
    ],

    ogImage: "/images/og-image.jpg",
  },
};