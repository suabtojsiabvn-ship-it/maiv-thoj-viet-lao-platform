import type { Metadata } from "next";

import { urls } from "@/content/config";
import { site } from "@/content/site";

function getBaseUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  if (process.env.VERCEL_ENV === "preview" && process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return urls.production;
}

export const baseUrl = getBaseUrl();

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: site.seo.title,
    template: `%s | ${site.branding.name}`,
  },

  description: site.seo.description,

  keywords: [...site.seo.keywords],

  applicationName: site.branding.name,

  creator: site.branding.name,

  authors: [
    {
      name: site.branding.name,
    },
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: site.seo.title,
    description: site.seo.description,
    siteName: site.branding.name,

    images: [
      {
        url: site.seo.ogImage,
        width: 1200,
        height: 630,
        alt: site.branding.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
    images: [site.seo.ogImage],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};
