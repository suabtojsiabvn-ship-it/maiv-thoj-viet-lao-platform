import {
  HeartHandshake,
  MonitorSmartphone,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type {
  ClinicalHighlight,
  ClinicalHighlightId,
} from "../types/clinical-partner.types";

interface ClinicalHighlightsProps {
  highlights: ClinicalHighlight[];
}

const highlightIcons: Record<ClinicalHighlightId, LucideIcon> = {
  personalizedPlanning: HeartHandshake,
  experiencedTeam: Users,
  clinicalLeadership: ShieldCheck,
  digitalDentistry: MonitorSmartphone,
};

export function ClinicalHighlights({
  highlights,
}: ClinicalHighlightsProps) {
  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2">
      {highlights.map((highlight) => {
        const Icon = highlightIcons[highlight.id];

        return (
          <article
            key={highlight.id}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300">
              <Icon className="h-6 w-6" />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-white">
              {highlight.title}
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              {highlight.description}
            </p>
          </article>
        );
      })}
    </div>
  );
}
