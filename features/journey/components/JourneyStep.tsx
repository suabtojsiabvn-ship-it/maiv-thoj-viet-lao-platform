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

const iconMap: Record<JourneyIcon, React.ComponentType<{ className?: string }>> = {
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
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">
          <Icon className="h-6 w-6" />
        </div>

        {!isLast && (
          <div className="mt-2 h-full w-px bg-white/10" />
        )}
      </div>

      {/* Content */}
      <div className="pb-12">
        <h3 className="text-xl font-semibold text-white">
          {step.title}
        </h3>

        <p className="mt-3 max-w-xl leading-7 text-slate-400">
          {step.description}
        </p>
      </div>
    </div>
  );
}