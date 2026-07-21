import Image from "next/image";
import Link from "next/link";

import { ArrowLeft } from "lucide-react";

import type { TravelGuideContent } from "@/types/content/travel-guide";
import type { Locale, LocaleTravelGuideItemDictionary } from "@/types/i18n";

interface TravelGuideHeroProps {
  guide: TravelGuideContent;
  locale: Locale;
  content: LocaleTravelGuideItemDictionary;
  badge: string;
  backLabel: string;
}

export function TravelGuideHero({
  guide,
  locale,
  content,
  badge,
  backLabel,
}: TravelGuideHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-[#D6A84B]/15 px-5 py-20 sm:px-6 sm:py-24 lg:py-28">
      <Image
        src={guide.media.coverImage}
        alt={content.title}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#090806] via-[#090806]/90 to-[#090806]/55" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#090806] via-transparent to-[#090806]/35" />

      <div className="mx-auto max-w-6xl">
        <Link
          href={`/${locale}/travel-guide`}
          className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#D7CFC1] transition hover:text-[#E9CC82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9CC82]"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          {backLabel}
        </Link>

        <p className="mt-12 text-xs font-semibold uppercase tracking-[0.28em] text-[#E9CC82] sm:text-sm">
          {badge}
        </p>
        <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[#F7F3EA] sm:text-5xl lg:text-7xl">
          {content.title}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#D0C8BB] sm:text-lg">
          {content.summary}
        </p>
      </div>
    </section>
  );
}
