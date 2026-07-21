import type { JourneyStep as JourneyStepType } from "../types/journey.types";

import { JourneyStep } from "./JourneyStep";

interface JourneyTimelineProps {
  steps: JourneyStepType[];
}

export function JourneyTimeline({
  steps,
}: JourneyTimelineProps) {
  return (
    <section className="relative mt-12 sm:mt-16">
      {steps.map((step, index) => (
        <JourneyStep
          key={step.id}
          step={step}
          isLast={index === steps.length - 1}
        />
      ))}
    </section>
  );
}
