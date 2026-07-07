import { Container, Section } from "@/components/ui";

import { CountryGrid } from "./CountryGrid";
import { MaterialBar } from "./MaterialBar";

export function Trust() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Trusted Worldwide
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Caring for Smiles Across Borders
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            We proudly welcome international and Hmong patients from around the world.
          </p>
        </div>

        <CountryGrid />

        <MaterialBar />
      </Container>
    </Section>
  );
}