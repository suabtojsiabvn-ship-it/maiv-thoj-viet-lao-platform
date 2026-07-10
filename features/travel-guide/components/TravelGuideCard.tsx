import Link from "next/link";

import type { TravelGuideContent } from "@/types/content/travel-guide";

interface TravelGuideCardProps {
  guide: TravelGuideContent;
}

export function TravelGuideCard({ guide }: TravelGuideCardProps) {
  return (
    <Link
      href={`/${guide.locale}/travel-guide/${guide.slug}`}
      className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40 hover:bg-white/[0.06]"
    >
      <p className="text-sm uppercase tracking-wide text-cyan-300">
        {guide.category}
      </p>

      <h3 className="mt-3 text-2xl font-semibold text-white">
        {guide.title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-slate-300">
        {guide.summary}
      </p>

      <div className="mt-6 space-y-2 text-sm text-slate-300">
        {guide.estimatedTime ? (
          <p>
            <span className="text-cyan-300">Time:</span>{" "}
            {guide.estimatedTime}
          </p>
        ) : null}

        {guide.estimatedBudget ? (
          <p>
            <span className="text-cyan-300">Budget:</span>{" "}
            {guide.estimatedBudget}
          </p>
        ) : null}
      </div>

      <p className="mt-6 text-sm font-medium text-cyan-300">
        Read guide →
      </p>
    </Link>
  );
}