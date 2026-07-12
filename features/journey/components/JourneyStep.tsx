import {
  Car,
  ClipboardList,
  HeartPulse,
  House,
  MessageCircle,
  PlaneTakeoff,
  Stethoscope,
} from "lucide-react";

import type {
  JourneyIcon,
  JourneyStep as JourneyStepType,
} from "../types/journey.types";

interface JourneyStepProps {
  step: JourneyStepType;
  isLast?: boolean;
}

const iconMap: Record<
  JourneyIcon,
  React.ComponentType<{ className?: string }>
> = {
  "message-circle": MessageCircle,
  "clipboard-list": ClipboardList,
  "plane-takeoff": PlaneTakeoff,
  car: Car,
  stethoscope: Stethoscope,
  "heart-pulse": HeartPulse,
  house: House,
};

export function JourneyStep({
  step,
  isLast = false,
}: JourneyStepProps) {
  const Icon = iconMap[step.icon];

  return (
    <div className="relative flex gap-6">
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 shadow-lg shadow-cyan-500/10 transition-all duration-300 group-hover:scale-105">
          <Icon className="h-6 w-6" />
        </div>

        {!isLast && (
          <div className="mt-3 h-full w-px bg-gradient-to-b from-cyan-500/40 via-white/10 to-transparent" />
        )}
      </div>

      {/* Card */}
      <div className="group flex-1 pb-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/5 hover:shadow-xl hover:shadow-cyan-500/10">
          <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300">
            {step.title}
          </h3>

          <p className="mt-4 leading-7 text-slate-400">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}