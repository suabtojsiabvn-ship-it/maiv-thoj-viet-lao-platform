"use client";

import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui";

import { useBeforeAfter } from "../hooks/useBeforeAfter";
import { BeforeAfterGrid } from "./BeforeAfterGrid";

export function BeforeAfter() {
  const { beforeAfter } = useBeforeAfter();

  return (
    <Section className="bg-slate-950">
      <Container>
        <SectionHeading
          badge={beforeAfter.sectionLabel}
          title={beforeAfter.title}
          description={beforeAfter.description}
        />

        <BeforeAfterGrid />
      </Container>
    </Section>
  );
}