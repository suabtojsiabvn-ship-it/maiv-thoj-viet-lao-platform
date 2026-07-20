import type { FounderStat } from "../types/founder.types";

interface FounderStatsProps {
  stats: FounderStat[];
}

export function FounderStats({ stats }: FounderStatsProps) {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-4">
      {stats.map((stat) => (
        <div
          key={`${stat.value}-${stat.label}`}
          className="rounded-2xl border border-primary/15 bg-white/70 p-3 text-center shadow-sm shadow-black/5 sm:p-5 sm:text-left"
        >
          <div className="text-xl font-bold text-[#765817] sm:text-2xl">
            {stat.value}
          </div>
          <div className="mt-2 text-xs leading-5 text-[#665f54] sm:text-sm">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
