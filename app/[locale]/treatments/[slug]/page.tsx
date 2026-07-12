import { notFound } from "next/navigation";

import {
  getTreatmentBySlug,
  getTreatmentStaticParams,
} from "@/content/treatments";
import { buildMetadata } from "@/content/seo";
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
}: TreatmentDetailPageProps) {
  const { locale, slug } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const treatment = getTreatmentBySlug(
    locale as Locale,
    slug,
  );

  if (!treatment) {
    return {};
  }

  return buildMetadata({
    title: treatment.seo.title,
    description: treatment.seo.description,
    canonical:
      treatment.seo.canonical ??
      `/${locale}/treatments/${slug}`,
    image:
      treatment.seo.image ??
      treatment.media.og,
    locale,
  });
}

export default async function TreatmentDetailPage({
  params,
}: TreatmentDetailPageProps) {
  const { locale, slug } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const treatment = getTreatmentBySlug(
    locale as Locale,
    slug,
  );

  if (!treatment) {
    notFound();
  }

  return <TreatmentDetail treatment={treatment} />;
}