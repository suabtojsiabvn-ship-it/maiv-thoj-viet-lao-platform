"use client";

import Link from "next/link";

import { useCurrentLocale, useDictionary } from "@/hooks/useDictionary";

export default function TravelGuideNotFound() {
  const locale = useCurrentLocale();
  const page = useDictionary().pages.travelGuide;

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#090806] px-5 py-20 text-center text-[#F8F4EC] sm:px-6">
      <div className="max-w-xl rounded-[2rem] border border-[#D6A84B]/20 bg-[#15130F] p-8 sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D6A84B]">
          {page.notFound.badge}
        </p>
        <h1 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-semibold text-[#F7F3EA] sm:text-5xl">
          {page.notFound.heading}
        </h1>
        <p className="mt-5 leading-7 text-[#B8B0A2]">
          {page.notFound.description}
        </p>
        <Link
          href={`/${locale}`}
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#D6A84B] px-6 py-3 text-sm font-semibold text-[#090806] transition hover:bg-[#E9CC82]"
        >
          {page.notFound.backHome}
        </Link>
      </div>
    </main>
  );
}
