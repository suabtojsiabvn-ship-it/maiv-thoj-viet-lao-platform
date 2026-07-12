import { Container, Section } from "@/components/ui";

import type { TreatmentContent } from "@/content/treatments";

interface CandidatesProps {
  candidates: TreatmentContent["candidates"];
}

export function Candidates({
  candidates,
}: CandidatesProps) {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-white">
            {candidates.heading}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            {candidates.description}
          </p>

          <ul className="mt-10 space-y-5">
            {candidates.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-900/40 p-5"
              >
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-300">
                  ✓
                </span>

                <span className="leading-7 text-slate-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}