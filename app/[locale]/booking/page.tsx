import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { buildMetadata } from "@/content/seo";
import { Booking } from "@/features/booking";
import { isSupportedLocale } from "@/lib/i18n-routing";

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

  return buildMetadata({
    title: "Book a Free Consultation",
    description:
      "Request a free consultation with Maiv Thoj Viet Lao. Share your dental needs, preferred language and travel plans with our international patient journey team.",
    canonical: `/${locale}/booking`,
    locale,
  });
}

export default async function BookingPage({
  params,
}: BookingPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Booking />
    </main>
  );
}