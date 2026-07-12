import { Container, Section } from "@/components/ui";

import type { TreatmentContent } from "@/content/treatments";

interface ProcedureProps {
  procedure: TreatmentContent["procedure"];
}

export function Procedure({
  procedure,
}: ProcedureProps) {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-white">
            {procedure.heading}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            {procedure.description}
          </p>

          <div className="mt-12 space-y-8">
            {procedure.steps.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-6 rounded-2xl border border-white/10 bg-slate-900/40 p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-sm font-bold text-slate-950">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}