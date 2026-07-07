import type { Metadata } from "next";

export const siteConfig = {
  name: "An Nhien Dental",
  shortName: "An Nhien Dental",

  title: "Smile Journey Vietnam | Premium Dental Tourism",

  description:
    "Premium dental tourism in Vietnam with multilingual support, airport pickup, transparent pricing, and world-class dentists.",

  url: "https://your-domain.com",

  locale: "en_US",

  ogImage: "/og-image.jpg",

  creator: "An Nhien Dental",

  keywords: [
    "Dental Tourism Vietnam",
    "Dentist Vietnam",
    "Dental Clinic Vietnam",
    "Dental Implants",
    "Dental Veneers",
    "Smile Makeover",
    "Cosmetic Dentistry",
    "Full Mouth Restoration",
    "International Dental Clinic",
  ],

  authors: [
    {
      name: "An Nhien Dental",
    },
  ],
} as const;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: [...siteConfig.keywords],

  authors: [...siteConfig.authors],

  creator: siteConfig.creator,

  applicationName: siteConfig.name,

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};