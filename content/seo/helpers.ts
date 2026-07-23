import type { Metadata } from "next";

import { defaultLocale } from "@/types/i18n";

import { seo } from "./seo";

export const SUPPORTED_LOCALES = ["en", "hmn", "vi", "th", "lo"] as const;

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

interface BuildMetadataInput {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  keywords?: readonly string[];
  locale?: SupportedLocale;
  includeLanguageAlternates?: boolean;
}

function buildLanguageAlternates(locale: SupportedLocale, canonical?: string) {
  if (!canonical) {
    return undefined;
  }

  const normalized = canonical.startsWith("/") ? canonical : `/${canonical}`;

  const withoutLocale = normalized.replace(
    new RegExp(`^/${locale}(?=/|$)`),
    "",
  );

  return {
    ...Object.fromEntries(
      SUPPORTED_LOCALES.map((supportedLocale) => [
        supportedLocale,
        `/${supportedLocale}${withoutLocale}`,
      ]),
    ),
    "x-default": `/${defaultLocale}${withoutLocale}`,
  };
}

export function buildMetadata({
  title,
  description,
  canonical,
  image,
  keywords,
  locale = defaultLocale,
  includeLanguageAlternates = true,
}: BuildMetadataInput = {}): Metadata {
  const metaTitle = title ?? seo.title;
  const metaDescription = description ?? seo.description;
  const metaImage = image ?? seo.ogImage;
  const metaKeywords = [...new Set([...seo.keywords, ...(keywords ?? [])])];

  return {
    metadataBase: new URL(seo.siteUrl),

    title: metaTitle,

    description: metaDescription,

    keywords: metaKeywords,

    alternates: {
      canonical,
      languages: includeLanguageAlternates
        ? buildLanguageAlternates(locale, canonical)
        : undefined,
    },

    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonical,
      siteName: seo.siteName,
      images: [
        {
          url: metaImage,
          alt: metaTitle,
        },
      ],
      locale,
      type: "website",
    },

    twitter: {
      card: seo.twitter.card,
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
    },
  };
}
