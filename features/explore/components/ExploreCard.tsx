import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Locale } from "@/types/i18n";

import type { ExploreItem } from "../types/explore.types";

interface ExploreCardProps {
  locale: Locale;
  item: ExploreItem;
}

export function ExploreCard({ locale, item }: ExploreCardProps) {
  const Icon = item.icon;

  return (
    <Link
      href={`/${locale}${item.href}`}
      className="group relative overflow-hidden rounded-[2rem] border border-[#D6A84B]/30 bg-[#15130F] p-7 shadow-[0_18px_60px_rgba(21,19,15,0.12)] transition duration-300 hover:-translate-y-1 hover:border-[#D6A84B]/70 hover:shadow-[0_24px_70px_rgba(21,19,15,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9A6A18] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F7F3EA] sm:p-9"
    >
      <div className="absolute -right-16 -top-16 size-44 rounded-full bg-[#D6A84B]/10 blur-3xl transition group-hover:bg-[#D6A84B]/20" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <span className="flex size-12 items-center justify-center rounded-2xl border border-[#D6A84B]/30 bg-[#D6A84B]/10 text-[#E9CC82]">
            <Icon aria-hidden="true" className="size-6" />
          </span>

          <ArrowUpRight
            aria-hidden="true"
            className="size-5 text-[#8F877A] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#E9CC82]"
          />
        </div>

        <h3 className="mt-8 font-[family-name:var(--font-display)] text-3xl font-semibold text-[#F7F3EA]">
          {item.title}
        </h3>

        <p className="mt-4 max-w-xl text-sm leading-7 text-[#B8B0A2] sm:text-base">
          {item.description}
        </p>

        <span className="mt-7 inline-flex min-h-11 items-center text-sm font-semibold text-[#E9CC82]">
          {item.cta}
        </span>
      </div>
    </Link>
  );
}
