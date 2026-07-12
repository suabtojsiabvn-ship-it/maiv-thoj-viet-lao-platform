import { notFound } from "next/navigation";

import { buildMetadata } from "@/content/seo";

import { BeforeAfter } from "@/features/before-after";
import { Booking } from "@/features/booking";
import { ClinicalPartner } from "@/features/clinical-partner";
import { Coordinator } from "@/features/coordinator";
import { Founder } from "@/features/founder";
import { Hero } from "@/features/hero";
import { Journey } from "@/features/journey";
import { Treatments } from "@/features/treatments";
import { Trust } from "@/features/trust";
import { Why } from "@/features/why";

import { isSupportedLocale } from "@/lib/i18n-routing";

interface HomePageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: HomePageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  return buildMetadata({
    canonical: `/${locale}`,
    locale,
  });
}

export default async function HomePage({
  params,
}: HomePageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <Trust />
      <Why />
      <Founder />
      <Coordinator />
      <ClinicalPartner />
      <Treatments />
      <BeforeAfter />
      <Journey />
      <Booking />
    </main>
  );
}