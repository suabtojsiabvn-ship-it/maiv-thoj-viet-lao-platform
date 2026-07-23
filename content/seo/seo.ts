import { brand } from "@/content/branding";

export const seo = {
  title: `${brand.name} | International Dental & Patient Journey Support in Vietnam`,

  description:
    "Maiv Thoj Viet Lao Platform helps international patients, especially the global Hmong community, feel supported throughout their dental treatment journey in Vietnam — from consultation and travel planning to airport pickup, clinic visits, aftercare and returning home.",

  keywords: [
    "Maiv Thoj Viet Lao Platform",
    "Maiv Thoj Viet Lao",
    "Maiv Thoj",
    "Txhim Tsawb",
    "A Sử",
    "A Su",
    "A Sử (Txhim)",
    "dental care Vietnam",
    "dental treatment Vietnam",
    "dentist Vietnam",
    "dental clinic Vietnam",
    "dental tourism Vietnam",
    "dental implants Vietnam",
    "veneers Vietnam",
    "dental crowns Vietnam",
    "smile makeover Vietnam",
    "Hmong dental care",
    "Hmong dentist Vietnam",
    "International Hmong patients",
    "kho hniav",
    "kws kho hniav",
    "kho hniav hauv Nyab Laj",
    "cog hniav",
    "looj hniav",
    "patient journey support",
    "dental concierge Vietnam",
    "airport pickup dental Vietnam",
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
