import { notFound } from "next/navigation";

import { getDictionary } from "@/content/locales";
import { buildMetadata } from "@/content/seo";
import { FAQ } from "@/features/faq";
import { isSupportedLocale } from "@/lib/i18n-routing";

interface FAQPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: FAQPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const dictionary = await getDictionary(locale);

  return buildMetadata({
    title: dictionary.footer.sections.travel.links.faq,
    description:
      "Frequently asked questions about patient journey support, airport pickup, hotel coordination, dental treatment, payment and international patient care in Vietnam.",
    canonical: `/${locale}/faq`,
    locale,
  });
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
