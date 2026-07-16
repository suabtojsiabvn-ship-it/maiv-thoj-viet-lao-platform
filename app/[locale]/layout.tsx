import { notFound } from "next/navigation";

import { isSupportedLocale } from "@/lib/i18n-routing";
import { LocaleProvider } from "@/providers/LocaleProvider";
import { locales } from "@/types/i18n";
import type { Locale } from "@/types/i18n";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return (
    <LocaleProvider locale={locale as Locale}>
      {children}
    </LocaleProvider>
  );
}