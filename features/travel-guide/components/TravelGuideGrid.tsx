import { isTravelGuideKey } from "@/content/travel-guide";
import type { TravelGuideContent } from "@/types/content/travel-guide";
import type { Locale, LocaleTravelGuidePageDictionary } from "@/types/i18n";

import { TravelGuideCard } from "./TravelGuideCard";

interface TravelGuideGridProps {
  guides: TravelGuideContent[];
  locale: Locale;
  page: LocaleTravelGuidePageDictionary;
}

export function TravelGuideGrid({
  guides,
  locale,
  page,
}: TravelGuideGridProps) {
  if (guides.length === 0) {
    return (
      <div className="mt-12 rounded-[1.75rem] border border-[#D6A84B]/20 bg-[#15130F] p-8 text-center sm:p-12">
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#F7F3EA]">
          {page.emptyState.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-[#B8B0A2]">
          {page.emptyState.description}
        </p>
      </div>
    );
  }

  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {guides.map((guide) =>
        isTravelGuideKey(guide.slug) ? (
          <TravelGuideCard
            key={guide.id}
            guide={guide}
            locale={locale}
            content={page.items[guide.slug]}
            ctaLabel={page.labels.readGuide}
          />
        ) : null,
      )}
    </div>
  );
}
