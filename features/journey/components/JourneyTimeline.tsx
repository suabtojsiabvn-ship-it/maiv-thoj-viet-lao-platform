import type { JourneyStep as JourneyStepType } from "../types/journey.types";

import { JourneyStep } from "./JourneyStep";

interface JourneyTimelineProps {
  steps: JourneyStepType[];
}

export function JourneyTimeline({
  steps,
}: JourneyTimelineProps) {
  return (
    <section className="relative mt-16">
      <div className="absolute left-7 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-500/30 via-cyan-400/10 to-transparent lg:block" />

      <div className="space-y-8">
        {steps.map((step, index) => (
          <JourneyStep
            key={step.id}
            step={step}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </section>
  );
}