import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";

import { getDictionary } from "@/content/locales";
import {
  buildMetadata,
  createBreadcrumbSchema,
  createFaqSchema,
  createTreatmentSchema,
  seo,
} from "@/content/seo";
import {
  getTreatmentBySlug,
  getTreatmentStaticParams,
} from "@/content/treatments";
import { TreatmentDetail } from "@/features/treatment-detail";
import { isSupportedLocale } from "@/lib/i18n-routing";
import type { Locale } from "@/types/i18n";

interface TreatmentDetailPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export function generateStaticParams() {
  return getTreatmentStaticParams();
}

export async function generateMetadata({
  params,
}: TreatmentDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const treatment = getTreatmentBySlug(locale as Locale, slug);

  if (!treatment) {
    return {};
  }

  return buildMetadata({
    title: treatment.seo.title,
    description: treatment.seo.description,
    canonical: treatment.seo.canonical ?? `/${locale}/treatments/${slug}`,
    image: treatment.seo.image ?? treatment.media.og,
    locale: locale as Locale,
  });
}

export default async function TreatmentDetailPage({
  params,
}: TreatmentDetailPageProps) {
  const { locale, slug } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const treatment = getTreatmentBySlug(locale as Locale, slug);

  if (!treatment) {
    notFound();
  }

  const dictionary = await getDictionary(locale);

  const canonicalPath =
    treatment.seo.canonical ?? `/${locale}/treatments/${slug}`;

  const treatmentUrl = new URL(canonicalPath, seo.siteUrl).toString();

  const treatmentsUrl = new URL(
    `/${locale}/treatments`,
    seo.siteUrl,
  ).toString();

  const homeUrl = new URL(`/${locale}`, seo.siteUrl).toString();

  const treatmentSchema = createTreatmentSchema(
    treatment.title,
    treatment.seo.description,
    treatmentUrl,
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    {
      name: dictionary.navigation.items.home,
      url: homeUrl,
    },
    {
      name: dictionary.navigation.items.treatments,
      url: treatmentsUrl,
    },
    {
      name: treatment.title,
      url: treatmentUrl,
    },
  ]);

  const faqSchema = createFaqSchema(
    treatment.faq.items.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
  );

  return (
    <>
      <Script
        id={`treatment-schema-${locale}-${treatment.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(treatmentSchema),
        }}
      />

      <Script
        id={`treatment-breadcrumb-schema-${locale}-${treatment.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <Script
        id={`treatment-faq-schema-${locale}-${treatment.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <TreatmentDetail treatment={treatment} />
    </>
  );
}
