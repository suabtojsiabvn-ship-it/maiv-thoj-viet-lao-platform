import type { Metadata } from "next";

import { seo } from "./seo";

export const SUPPORTED_LOCALES = [
  "en",
  "hmn",
  "vi",
  "th",
  "lo",
] as const;

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

interface BuildMetadataInput {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  locale?: SupportedLocale;
}

function buildLanguageAlternates(
  locale: SupportedLocale,
  canonical?: string,
) {
  if (!canonical) {
    return undefined;
  }

  const normalized = canonical.startsWith("/")
    ? canonical
    : `/${canonical}`;

  const withoutLocale = normalized.replace(
    new RegExp(`^/${locale}`),
    "",
  );

  return Object.fromEntries(
    SUPPORTED_LOCALES.map((supportedLocale) => [
      supportedLocale,
      `/${supportedLocale}${withoutLocale}`,
    ]),
  );
}

export function buildMetadata({
  title,
  description,
  canonical,
  image,
  locale = "en",
}: BuildMetadataInput = {}): Metadata {
  const metaTitle = title ?? seo.title;
  const metaDescription = description ?? seo.description;
  const metaImage = image ?? seo.ogImage;

  return {
    metadataBase: new URL(seo.siteUrl),

    title: metaTitle,

    description: metaDescription,

    keywords: seo.keywords,

    alternates: {
      canonical,
      languages: buildLanguageAlternates(locale, canonical),
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