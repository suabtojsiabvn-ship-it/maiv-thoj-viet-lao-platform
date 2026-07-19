"use client";

import { MotionSection } from "@/components/motion";
import { Container, Section } from "@/components/ui";

import { HeroActions } from "./HeroActions";
import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroHighlights } from "./HeroHighlights";
import { HeroStats } from "./HeroStats";

import { useHero } from "../hooks/useHero";

export function Hero() {
  const hero = useHero();

  return (
    <Section className="relative min-h-screen overflow-hidden">
      <HeroBackground />

      <Container className="relative z-10 flex min-h-screen flex-col justify-center">
        <MotionSection>
          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
            <HeroContent
              badge={hero.content.badge}
              title={hero.content.title}
              subtitle={hero.content.subtitle}
            />

            <HeroActions actions={hero.content.actions} />

            <HeroHighlights {...hero.highlights} />

            <HeroStats stats={hero.stats} />
          </div>
        </MotionSection>
      </Container>
    </Section>
  );
}