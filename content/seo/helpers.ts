import type { Metadata } from "next";

import { seo } from "./seo";

interface BuildMetadataInput {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
}

export function buildMetadata({
  title,
  description,
  canonical,
  image,
}: BuildMetadataInput = {}): Metadata {
  const metaTitle = title ?? seo.title;
  const metaDescription = description ?? seo.description;
  const metaImage = image ?? seo.ogImage;

  return {
    metadataBase: new URL(seo.siteUrl),
    title: metaTitle,
    description: metaDescription,
    keywords: seo.keywords,
    alternates: canonical
      ? {
          canonical,
        }
      : undefined,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonical,
      siteName: "Maiv Thoj Viet Lao Platform",
      images: [
        {
          url: metaImage,
          alt: metaTitle,
        },
      ],
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