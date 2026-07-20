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
    <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 md:gap-5">
      {highlights.map((highlight) => {
        const Icon = highlightIcons[highlight.id];

        return (
          <article
            key={highlight.id}
            className="h-full rounded-3xl border border-primary/15 bg-white/70 p-5 shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white md:p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-[#765817]">
              <Icon className="h-6 w-6" />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-ivory-foreground">
              {highlight.title}
            </h3>

            <p className="mt-3 leading-7 text-[#665f54]">
              {highlight.description}
            </p>
          </article>
        );
      })}
    </div>
  );
}
