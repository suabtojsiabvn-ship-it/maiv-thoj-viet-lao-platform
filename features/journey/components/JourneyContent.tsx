"use client";

import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { useJourney } from "../hooks/useJourney";
import { JourneyTimeline } from "./JourneyTimeline";

export function JourneyContent() {
  const { journey } = useJourney();

  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="mx-auto max-w-4xl text-center">
        <span className="inline-flex rounded-full border border-[#D6A84B]/35 bg-[#D6A84B]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#E9CC82] sm:px-5">
          {journey.badge}
        </span>

        <h1 className="mt-6 whitespace-pre-line font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.08] tracking-tight text-[#F7F3EA] sm:text-5xl lg:text-6xl">
          {journey.heading}
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#B8B0A2] sm:mt-6 sm:text-lg sm:leading-8">
          {journey.intro}
        </p>
      </div>

      <JourneyTimeline steps={journey.steps} />

      <div className="mt-6 flex justify-center sm:mt-10">
        <Link
          href={journey.cta.href}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#D6A84B] px-7 py-3 text-sm font-semibold text-[#15130F] shadow-[0_14px_40px_rgba(214,168,75,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E9CC82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9CC82] focus-visible:ring-offset-4 focus-visible:ring-offset-[#090806] sm:px-9"
        >
          {journey.cta.label}

          <ArrowRight
            aria-hidden="true"
            className="size-4"
          />
        </Link>
      </div>
    </div>
  );
}
