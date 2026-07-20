import type {
  PatientJourneyStep,
} from "@/content/journey";

interface TimelineItemProps {
  step: PatientJourneyStep;
  isLast: boolean;
  optionalLabel: string;
  timingLabel: string;
}

export function TimelineItem({
  step,
  isLast,
  optionalLabel,
  timingLabel,
}: TimelineItemProps) {
  return (
    <li className="relative grid grid-cols-[2.75rem_1fr] gap-3 md:grid-cols-[4rem_1fr] md:gap-5">
      <div className="relative flex justify-center">
        <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-primary/35 bg-card text-sm font-bold text-primary shadow-lg shadow-black/20 md:h-12 md:w-12">
          {step.order}
        </div>

        {!isLast && (
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-10 h-[calc(100%+1rem)] w-px -translate-x-1/2 bg-primary/20 md:top-12"
          />
        )}
      </div>

      <article className="mb-6 rounded-3xl border border-primary/15 bg-card/65 p-4 transition-colors hover:border-primary/35 hover:bg-secondary/80 sm:p-5 md:mb-8 md:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary md:tracking-[0.2em]">
            {step.stageLabel}
          </span>

          {step.optional && (
            <span className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-medium text-gold-soft">
              {optionalLabel}
            </span>
          )}
        </div>

        <h3 className="mt-4 font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
          {step.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7 md:mt-4">
          {step.description}
        </p>

        {step.estimatedDuration && (
          <p className="mt-4 text-sm text-muted-foreground md:mt-5">
            <span className="font-semibold text-foreground">
              {timingLabel}:
            </span>{" "}
            {step.estimatedDuration}
          </p>
        )}
      </article>
    </li>
  );
}
