"use client";

import { MotionSection } from "@/components/motion";
import { Container, Section } from "@/components/ui";

import { HeroActions } from "./HeroActions";
import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroMedia } from "./HeroMedia";

import { useHero } from "../hooks/useHero";

export function Hero() {
  const hero = useHero();

  return (
    <Section
      spacing="sm"
      className="relative isolate overflow-hidden border-b border-primary/10 py-12 sm:py-14 lg:py-16"
    >
      <HeroBackground />

      <Container size="lg" className="relative z-10">
        <MotionSection>
          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.92fr)] lg:gap-12 xl:gap-16">
            <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
              <HeroContent
                badge={hero.content.badge}
                title={hero.content.title}
                subtitle={hero.content.subtitle}
              />

              <HeroActions actions={hero.content.actions} />
            </div>

            <HeroMedia badge={hero.content.badge} stats={hero.stats} />
          </div>
        </MotionSection>
      </Container>
    </Section>
  );
}
