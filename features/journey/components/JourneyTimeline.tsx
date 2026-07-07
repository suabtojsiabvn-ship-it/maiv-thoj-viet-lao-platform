import type { JourneyStep as JourneyStepType } from "../types/journey.types";

import { JourneyStep } from "./JourneyStep";

interface JourneyTimelineProps {
  steps: JourneyStepType[];
}

export function JourneyTimeline({
  steps,
}: JourneyTimelineProps) {
  return (
    <div className="mt-14">
      {steps.map((step, index) => (
        <JourneyStep
          key={step.id}
          step={step}
          isLast={index === steps.length - 1}
        />
      ))}
    </div>
  );
}