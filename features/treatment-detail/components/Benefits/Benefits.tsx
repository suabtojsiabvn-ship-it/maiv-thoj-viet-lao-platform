import { Container, Section } from "@/components/ui";

import type { TreatmentContent } from "@/content/treatments";

interface BenefitsProps {
  benefits: TreatmentContent["benefits"];
}

export function Benefits({
  benefits,
}: BenefitsProps) {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-white">
            {benefits.heading}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            {benefits.description}
          </p>

          <div className="mt-12 space-y-8">
            {benefits.items.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-slate-900/40 p-6"
              >
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}