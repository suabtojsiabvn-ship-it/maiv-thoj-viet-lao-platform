import { Container, Section } from "@/components/ui";

import type { TreatmentContent } from "@/content/treatments";

interface OverviewProps {
  overview: TreatmentContent["overview"];
}

export function Overview({
  overview,
}: OverviewProps) {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white">
            {overview.heading}
          </h2>

          <div className="mt-8 space-y-6">
            {overview.description.map((paragraph) => (
              <p
                key={paragraph}
                className="text-lg leading-8 text-slate-300"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}