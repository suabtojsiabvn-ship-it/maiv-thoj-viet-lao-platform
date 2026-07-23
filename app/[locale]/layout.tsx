import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { notFound } from "next/navigation";

import { SiteAnalytics } from "@/components/analytics";
import { Header } from "@/components/layout";
import { homepageSchema } from "@/content/seo";
import { Footer } from "@/features/footer";
import { defaultMetadata } from "@/lib/metadata";
import { isSupportedLocale } from "@/lib/i18n-routing";
import { LocaleProvider } from "@/providers/LocaleProvider";
import { locales } from "@/types/i18n";
import type { Locale } from "@/types/i18n";

import "../globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-display",
});

export const metadata: Metadata = defaultMetadata;

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
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body>
        <LocaleProvider locale={locale as Locale}>
          <div className="flex min-h-screen flex-col bg-background text-foreground">
            <Header />

            <div className="flex-1">{children}</div>

            <Footer />
          </div>
        </LocaleProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(homepageSchema),
          }}
        />

        <SiteAnalytics />
      </body>
    </html>
  );
}
