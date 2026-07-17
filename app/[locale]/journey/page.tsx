import { notFound } from "next/navigation";

import { Journey } from "@/features/journey";
import { isSupportedLocale } from "@/lib/i18n-routing";

interface JourneyPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function JourneyPage({
  params,
}: JourneyPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Journey />
    </main>
  );
}