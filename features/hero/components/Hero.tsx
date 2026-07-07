"use client";

import { MotionSection } from "@/components/motion";
import { Container, Section } from "@/components/ui";

import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";

export function Hero() {
  return (
    <Section className="relative min-h-screen overflow-hidden">
      <HeroBackground />

      <Container className="relative z-10 flex min-h-screen flex-col justify-center">
        <MotionSection>
          <HeroContent />
        </MotionSection>
      </Container>
    </Section>
  );
}