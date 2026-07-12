"use client";

import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { useJourney } from "../hooks/useJourney";
import { JourneyTimeline } from "./JourneyTimeline";

export function JourneyContent() {
  const { journey } = useJourney();

  return (
    <div className="mx-auto max-w-5xl">
      {/* Badge */}
      <div className="flex justify-center">
        <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
          {journey.badge}
        </span>
      </div>

      {/* Heading */}
      <h2 className="mt-6 text-center whitespace-pre-line text-4xl font-bold tracking-tight text-white lg:text-5xl">
        {journey.heading}
      </h2>

      {/* Intro */}
      <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-300">
        {journey.intro}
      </p>

      {/* Timeline */}
      <JourneyTimeline steps={journey.steps} />

      {/* Trust Message */}
      <div className="mt-14 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8 text-center">
        <h3 className="text-2xl font-semibold text-white">
          Every Smile Has a Story
        </h3>

        <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-400">
          Every patient follows a carefully planned journey with real people,
          real care and genuine support from arrival to departure.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-12 flex justify-center">
        <Link
          href={journey.cta.href}
          className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 text-sm font-semibold text-slate-950 transition-all duration-300 hover:scale-105 hover:bg-cyan-400"
        >
          {journey.cta.label}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}