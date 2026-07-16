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
    <li className="relative grid gap-5 md:grid-cols-[4rem_1fr]">
      <div className="relative flex justify-center md:block">
        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950 text-sm font-bold text-cyan-300">
          {step.order}
        </div>

        {!isLast && (
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-12 h-[calc(100%+1.25rem)] w-px -translate-x-1/2 bg-white/10 md:left-6 md:translate-x-0"
          />
        )}
      </div>

      <article className="mb-10 rounded-3xl border border-white/10 bg-slate-900/40 p-6 md:mb-12 md:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            {step.stageLabel}
          </span>

          {step.optional && (
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
              {optionalLabel}
            </span>
          )}
        </div>

        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
          {step.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-300">
          {step.description}
        </p>

        {step.estimatedDuration && (
          <p className="mt-5 text-sm text-slate-400">
            <span className="font-semibold text-slate-200">
              {timingLabel}:
            </span>{" "}
            {step.estimatedDuration}
          </p>
        )}
      </article>
    </li>
  );
}