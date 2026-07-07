import type { HeroContent } from "../types/hero.types";

export const heroContent: HeroContent = {
  badge: "Trusted Dental Tourism & Medical Concierge",

  title: {
    line1: "Your Trusted Guide",
    line2: "to Dental Care in Vietnam",
  },

  subtitle:
    "From your first consultation in Laos to your safe return home, Maiv Thoj Viet Lao and our trusted team personally guide you through every step of your dental journey in Vietnam. We coordinate your treatment, travel, accommodation, airport pickup, and recovery—so you can focus on your smile with complete confidence.",

  actions: [
    {
      label: "Start Your Journey",
      href: "/booking",
      variant: "primary",
    },

    {
      label: "Free Consultation",
      href: "/contact",
      variant: "secondary",
    },
  ],
};