import Link from "next/link";

import { ArrowRight } from "lucide-react";

import type { TravelGuideContent } from "@/types/content/travel-guide";
import type {
  Locale,
  LocaleTravelGuideItemDictionary,
  LocaleTravelGuidePageDictionary,
} from "@/types/i18n";

import { TravelGuideBody } from "./TravelGuideBody";
import { TravelGuideHero } from "./TravelGuideHero";
import { TravelGuideMeta } from "./TravelGuideMeta";
import { TravelGuideTips } from "./TravelGuideTips";

interface TravelGuideArticleProps {
  guide: TravelGuideContent;
  locale: Locale;
  content: LocaleTravelGuideItemDictionary;
  page: LocaleTravelGuidePageDictionary;
}

export function TravelGuideArticle({
  guide,
  locale,
  content,
  page,
}: TravelGuideArticleProps) {
  return (
    <main className="min-h-screen bg-[#090806] text-[#F8F4EC]">
      <TravelGuideHero
        guide={guide}
        locale={locale}
        content={content}
        badge={page.badge}
        backLabel={page.labels.backToGuides}
      />

      <TravelGuideMeta content={content} labels={page.labels} />
      <TravelGuideBody paragraphs={content.body} />
      <TravelGuideTips tips={content.tips} heading={page.labels.tipsHeading} />

      <section className="px-5 pb-20 pt-6 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-3xl rounded-[1.75rem] border border-[#D6A84B]/25 bg-[#15130F] p-6 text-center sm:p-10">
          <Link
            href={`/${locale}/booking`}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#D6A84B] px-6 py-3 text-sm font-semibold text-[#090806] transition hover:bg-[#E9CC82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7F3EA] focus-visible:ring-offset-4 focus-visible:ring-offset-[#15130F]"
          >
            {page.labels.consultationCta}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
