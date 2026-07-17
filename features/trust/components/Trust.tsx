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
import { TransparencyPromise } from "./TransparencyPromise";
import { CommunityStats } from "./CommunityStats";

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

        <TransparencyPromise
          transparency={trust.transparency}
        />

        <MaterialBar material={trust.material} />
        <CommunityStats community={trust.community} />
      </Container>
    </Section>
  );
}