import { brand } from "@/content/branding";

export const seo = {
  title: `${brand.name} | International Dental & Patient Journey Support in Vietnam`,

  description:
    "Maiv Thoj Viet Lao Platform helps international patients, especially the global Hmong community, feel supported throughout their dental treatment journey in Vietnam — from consultation and travel planning to airport pickup, clinic visits, aftercare and returning home.",

  keywords: [
    "Maiv Thoj Viet Lao Platform",
    "International Dental Care Vietnam",
    "Dental Treatment Vietnam",
    "Hmong Dental Travel",
    "International Hmong Patients",
    "Patient Journey Support",
    "Dental Concierge Vietnam",
    "Airport Pickup Dental Vietnam",
    "Dental Tourism Vietnam",
    "An Nhien Dental",
    "Dr Toan Nguyen",
  ],
siteName: "Maiv Thoj Viet Lao Platform",
  ogImage: "/images/og-image.webp",

  siteUrl: "https://maivthojvietlao.com",

  twitter: {
    card: "summary_large_image" as const,
  },
};

export type SeoConfig = typeof seo;