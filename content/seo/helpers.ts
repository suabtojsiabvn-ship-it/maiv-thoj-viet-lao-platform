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
      images: [
        {
          url: metaImage,
          alt: metaTitle,
        },
      ],
    },
  };
}