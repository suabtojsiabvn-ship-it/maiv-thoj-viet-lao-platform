import Link from "next/link";

import type { DestinationContent } from "@/types/content/destination";

interface DestinationCardProps {
  destination: DestinationContent;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link
      href={`/${destination.locale}/destinations/${destination.slug}`}
      className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40 hover:bg-white/[0.06]"
    >
      <p className="text-sm uppercase tracking-wide text-cyan-300">
        {destination.location.province}
      </p>

      <h3 className="mt-3 text-2xl font-semibold text-white">
        {destination.title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-slate-300">
        {destination.summary}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {destination.bestFor?.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>

      <p className="mt-6 text-sm font-medium text-cyan-300">
        Explore destination →
      </p>
    </Link>
  );
}