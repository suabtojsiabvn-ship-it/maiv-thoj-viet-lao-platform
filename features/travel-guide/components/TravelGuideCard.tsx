import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight, Clock3 } from "lucide-react";

import type { TravelGuideContent } from "@/types/content/travel-guide";
import type { Locale, LocaleTravelGuideItemDictionary } from "@/types/i18n";

interface TravelGuideCardProps {
  guide: TravelGuideContent;
  locale: Locale;
  content: LocaleTravelGuideItemDictionary;
  ctaLabel: string;
}

export function TravelGuideCard({
  guide,
  locale,
  content,
  ctaLabel,
}: TravelGuideCardProps) {
  return (
    <Link
      href={`/${locale}/travel-guide/${guide.slug}`}
      className="group overflow-hidden rounded-[1.75rem] border border-[#D6A84B]/20 bg-[#15130F] shadow-[0_20px_65px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:border-[#D6A84B]/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9CC82] focus-visible:ring-offset-4 focus-visible:ring-offset-[#090806]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#1D1912]">
        <Image
          src={guide.media.coverImage}
          alt={content.title}
          fill
          sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090806]/85 via-[#090806]/10 to-transparent" />
        <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-[#090806]/75 px-3 py-1.5 text-xs font-medium text-[#E9CC82] backdrop-blur-md">
          {content.category}
        </span>
      </div>

      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight text-[#F7F3EA] transition-colors group-hover:text-[#E9CC82] sm:text-3xl">
            {content.title}
          </h3>
          <ArrowUpRight
            aria-hidden="true"
            className="mt-1 size-5 shrink-0 text-[#8F877A] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#E9CC82]"
          />
        </div>

        <p className="mt-4 line-clamp-4 text-sm leading-7 text-[#B8B0A2] sm:text-base">
          {content.summary}
        </p>

        <p className="mt-5 flex items-center gap-2 text-xs text-[#9E9587] sm:text-sm">
          <Clock3 aria-hidden="true" className="size-4 text-[#D6A84B]" />
          {content.estimatedTime}
        </p>

        <span className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-[#E9CC82]">
          {ctaLabel}
        </span>
      </div>
    </Link>
  );
}
