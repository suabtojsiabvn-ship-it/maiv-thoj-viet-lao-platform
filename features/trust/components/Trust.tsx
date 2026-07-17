"use client";

import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui";

import { useTrust } from "../hooks/useTrust";

import { CountryGrid } from "./CountryGrid";
import { MaterialBar } from "./MaterialBar";
import { PersonalizedCare } from "./PersonalizedCare";

export function Trust() {
  const { trust } = useTrust();

  return (
    <Section className="bg-slate-50">
      <Container>
        <SectionHeading
          badge={trust.badge}
          title={trust.heading}
          description={trust.description}
        />

        <CountryGrid countries={trust.countries} />

        <PersonalizedCare
          text={trust.personalizedCare}
        />

        <MaterialBar material={trust.material} />
      </Container>
    </Section>
  );
}