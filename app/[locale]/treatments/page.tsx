import { notFound } from "next/navigation";

import { buildMetadata } from "@/content/seo";
import { getTreatmentsByLocale } from "@/content/treatments";
import { isSupportedLocale } from "@/lib/i18n-routing";
import type { Locale } from "@/types/i18n";

interface TreatmentsPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: TreatmentsPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  return buildMetadata({
    title: "Dental Treatments | Maiv Thoj Viet Lao",
    description:
      "Explore dental treatment options supported by Maiv Thoj Viet Lao Platform and trusted clinical partners in Vietnam.",
    canonical: `/${locale}/treatments`,
    locale,
  });
}

export default async function TreatmentsPage({
  params,
}: TreatmentsPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  getTreatmentsByLocale(locale as Locale);

  return null;
}