import type { FounderStat } from "../types/founder.types";

interface FounderStatsProps {
  stats: FounderStat[];
}

export function FounderStats({ stats }: FounderStatsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={`${stat.value}-${stat.label}`}
          className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
        >
          <div className="text-2xl font-bold text-cyan-300">
            {stat.value}
          </div>
          <div className="mt-2 text-sm text-slate-400">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}