import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { buildMetadata } from "@/content/seo";
import { ClinicalPartner } from "@/features/clinical-partner";
import { Coordinator } from "@/features/coordinator";
import { Founder } from "@/features/founder";
import { isSupportedLocale } from "@/lib/i18n-routing";

interface AboutPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  return buildMetadata({
    title: "About Maiv Thoj Viet Lao",
    description:
      "Meet Maiv Thoj, A Sử (Txhim), and the trusted clinical partner supporting international dental patients throughout their journey in Vietnam.",
    canonical: `/${locale}/about`,
    locale,
  });
}

export default async function AboutPage({
  params,
}: AboutPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Founder />
      <Coordinator />
      <ClinicalPartner />
    </main>
  );
}