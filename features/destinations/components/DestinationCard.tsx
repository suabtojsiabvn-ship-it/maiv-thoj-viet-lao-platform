import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight, MapPin } from "lucide-react";

import type { DestinationContent } from "@/types/content/destination";
import type { Locale, LocaleDestinationItemDictionary } from "@/types/i18n";

interface DestinationCardProps {
  destination: DestinationContent;
  locale: Locale;
  content: LocaleDestinationItemDictionary;
  ctaLabel: string;
}

export function DestinationCard({
  destination,
  locale,
  content,
  ctaLabel,
}: DestinationCardProps) {
  return (
    <Link
      href={`/${locale}/destinations/${destination.slug}`}
      className="group overflow-hidden rounded-[1.75rem] border border-[#D6A84B]/20 bg-[#15130F] shadow-[0_20px_65px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-[#D6A84B]/55 hover:shadow-[0_26px_75px_rgba(0,0,0,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9CC82] focus-visible:ring-offset-4 focus-visible:ring-offset-[#090806]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#1D1912]">
        <Image
          src={destination.media.coverImage}
          alt={content.title}
          fill
          sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#090806]/80 via-transparent to-transparent" />

        <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#090806]/75 px-3 py-1.5 text-xs font-medium text-[#F7F3EA] backdrop-blur-md">
          <MapPin aria-hidden="true" className="size-3.5 text-[#E9CC82]" />
          {destination.location.province}
        </span>
      </div>

      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[#F7F3EA] transition-colors group-hover:text-[#E9CC82]">
            {content.title}
          </h2>

          <ArrowUpRight
            aria-hidden="true"
            className="mt-1 size-5 shrink-0 text-[#8F877A] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#E9CC82]"
          />
        </div>

        <p className="mt-4 line-clamp-4 text-sm leading-7 text-[#B8B0A2] sm:text-base">
          {content.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {content.bestFor.slice(0, 3).map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#D6A84B]/20 bg-[#D6A84B]/5 px-3 py-1 text-xs text-[#C9C0B2]"
            >
              {item}
            </span>
          ))}
        </div>

        <span className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-[#E9CC82]">
          {ctaLabel}
        </span>
      </div>
    </Link>
  );
}
