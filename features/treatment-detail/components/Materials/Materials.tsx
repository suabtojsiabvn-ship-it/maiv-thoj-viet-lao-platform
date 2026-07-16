import { Container, Section } from "@/components/ui";

import type { TreatmentContent } from "@/content/treatments";

interface MaterialsProps {
  materials: TreatmentContent["materials"];
}

export function Materials({
  materials,
}: MaterialsProps) {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-white">
            {materials.heading}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            {materials.description}
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {materials.items.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                  <span aria-hidden="true">✓</span>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}