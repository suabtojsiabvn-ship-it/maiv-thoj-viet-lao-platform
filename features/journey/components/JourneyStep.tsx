import {
  Car,
  ClipboardList,
  HeartPulse,
  House,
  MessageCircle,
  PlaneTakeoff,
  Stethoscope,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type {
  JourneyIcon,
  JourneyStep as JourneyStepType,
} from "../types/journey.types";

interface JourneyStepProps {
  step: JourneyStepType;
  isLast?: boolean;
}

const iconMap: Record<JourneyIcon, LucideIcon> = {
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
    <div className="group relative flex gap-4 sm:gap-6">
      <div className="flex shrink-0 flex-col items-center">
        <div className="flex size-12 items-center justify-center rounded-full border border-[#D6A84B]/35 bg-[#1D1912] text-[#E9CC82] shadow-[0_12px_36px_rgba(214,168,75,0.12)] transition duration-300 group-hover:border-[#D6A84B]/70 group-hover:bg-[#D6A84B]/15 sm:size-14">
          <Icon
            aria-hidden="true"
            className="size-5 sm:size-6"
          />
        </div>

        {!isLast && (
          <div className="mt-3 w-px flex-1 bg-gradient-to-b from-[#D6A84B]/55 via-[#D6A84B]/20 to-[#D6A84B]/5" />
        )}
      </div>

      <div className="min-w-0 flex-1 pb-6 sm:pb-8">
        <div className="rounded-[1.5rem] border border-[#D6A84B]/20 bg-[#15130F] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.16)] transition duration-300 group-hover:-translate-y-0.5 group-hover:border-[#D6A84B]/45 group-hover:bg-[#1D1912] sm:rounded-[1.75rem] sm:p-7">
          <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold leading-snug text-[#F7F3EA] transition-colors duration-300 group-hover:text-[#E9CC82] sm:text-2xl">
            {step.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-[#B8B0A2] sm:mt-4 sm:text-base">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}
