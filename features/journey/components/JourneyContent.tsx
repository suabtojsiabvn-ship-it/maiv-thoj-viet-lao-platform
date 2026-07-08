"use client";

import Link from "next/link";

import { useJourney } from "../hooks/useJourney";

import { JourneyTimeline } from "./JourneyTimeline";

export function JourneyContent() {
  const { journey } = useJourney();

  return (
    <div className="mx-auto max-w-4xl">
      {/* Badge */}
      <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-sm font-medium uppercase tracking-wide text-cyan-300">
        {journey.badge}
      </span>

      {/* Heading */}
      <h2 className="mt-6 whitespace-pre-line text-4xl font-bold tracking-tight text-white lg:text-5xl">
        {journey.heading}
      </h2>

      {/* Intro */}
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
        {journey.intro}
      </p>

      {/* Timeline */}
      <JourneyTimeline steps={journey.steps} />

      {/* CTA */}
      <div className="mt-14 flex justify-center">
        <Link
          href={journey.cta.href}
          className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          {journey.cta.label}
        </Link>
      </div>
    </div>
  );
}