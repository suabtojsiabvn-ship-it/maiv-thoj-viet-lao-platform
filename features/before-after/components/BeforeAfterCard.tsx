import Image from "next/image";

import { GlassCard } from "@/components/ui";

import type { BeforeAfterCase } from "../types/before-after.types";

interface BeforeAfterCardProps {
  item: BeforeAfterCase;
}

export function BeforeAfterCard({
  item,
}: BeforeAfterCardProps) {
  return (
    <GlassCard className="group overflow-hidden p-0 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10">
      {/* Images */}

      <div className="grid grid-cols-2">

        <div className="relative aspect-square overflow-hidden">
          <Image
            src={item.before}
            alt={`${item.title} before`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white">
            BEFORE
          </div>
        </div>

        <div className="relative aspect-square overflow-hidden">
          <Image
            src={item.after}
            alt={`${item.title} after`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute left-3 top-3 rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-white">
            AFTER
          </div>
        </div>
      </div>

      {/* Content */}

      <div className="p-8">

        <div className="mb-3 inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-300">
          {item.country}
        </div>

        <h3 className="text-2xl font-bold text-white">
          {item.title}
        </h3>

        <p className="mt-3 text-slate-300">
          {item.treatment}
        </p>

      </div>
    </GlassCard>
  );
}