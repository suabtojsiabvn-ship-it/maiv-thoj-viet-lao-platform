"use client";

import Link from "next/link";

import { brand } from "@/content/branding";
import { useCurrentLocale } from "@/hooks/useDictionary";

export function Logo() {
  const locale = useCurrentLocale();

  return (
    <Link
      href={`/${locale}`}
      aria-label={`${brand.name} — ${brand.tagline}`}
      className="flex min-w-0 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
    >
      <div
        aria-hidden="true"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-600 text-xs font-bold tracking-wide text-white shadow-lg shadow-cyan-950/30"
      >
        {brand.shortName}
      </div>

      <div className="hidden min-w-0 flex-col leading-none sm:flex">
        <span className="truncate text-base font-bold text-white lg:text-lg">
          {brand.name}
        </span>

        <span className="mt-1 max-w-64 truncate text-xs text-slate-400">
          {brand.tagline}
        </span>
      </div>
    </Link>
  );
}