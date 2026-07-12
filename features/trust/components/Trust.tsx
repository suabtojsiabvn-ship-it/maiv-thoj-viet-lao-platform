"use client";

import { Container, Section } from "@/components/ui";

import { useTrust } from "../hooks/useTrust";

import { CountryGrid } from "./CountryGrid";
import { MaterialBar } from "./MaterialBar";

export function Trust() {
  const { trust } = useTrust();

  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            {trust.badge}
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            {trust.heading}
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            {trust.description}
          </p>
        </div>

        <CountryGrid countries={trust.countries} />

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-cyan-500/20 bg-cyan-500/5 px-6 py-5 text-center">
          <p className="leading-7 text-slate-700">
            {trust.personalizedCare}
          </p>
        </div>

        <MaterialBar material={trust.material} />
      </Container>
    </Section>
  );
}