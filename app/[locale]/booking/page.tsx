import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getDictionary } from "@/content/locales";
import { buildMetadata, getSeoKeywords } from "@/content/seo";
import { Booking } from "@/features/booking";
import { isSupportedLocale } from "@/lib/i18n-routing";
import type { Locale } from "@/types/i18n";

interface BookingPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: BookingPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const dictionary = await getDictionary(locale as Locale);
  const currentLocale = locale as Locale;

  return buildMetadata({
    title: dictionary.booking.seo.title,
    description: dictionary.booking.seo.description,
    canonical: `/${locale}/booking`,
    keywords: getSeoKeywords(currentLocale, "booking"),
    locale,
  });
}

export default async function BookingPage({ params }: BookingPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#090806] text-[#f8f4ec]">
      <Booking />
    </main>
  );
}
