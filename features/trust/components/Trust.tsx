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
    <Section
      spacing="md"
      className="border-b border-primary/15 bg-ivory text-ivory-foreground"
    >
      <Container>
        <SectionHeading
          badge={trust.badge}
          title={trust.heading}
          description={trust.description}
          tone="light"
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
