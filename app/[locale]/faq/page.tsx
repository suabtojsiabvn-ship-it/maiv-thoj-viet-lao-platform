import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FAQ } from "@/features/faq";
import { isSupportedLocale } from "@/lib/i18n-routing";

interface FAQPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: FAQPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  return {
    title: "FAQ | Maiv Thoj Viet Lao Platform",
    description:
      "Frequently asked questions about patient journey support, airport pickup, hotel coordination, dental treatment, payment and international patient care in Vietnam.",
    alternates: {
      canonical: `/${locale}/faq`,
    },
    openGraph: {
      title: "FAQ | Maiv Thoj Viet Lao Platform",
      description:
        "Frequently asked questions about patient journey support, airport pickup, hotel coordination, dental treatment, payment and international patient care in Vietnam.",
    },
  };
}

export default async function FAQPage({ params }: FAQPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <FAQ />
    </main>
  );
}