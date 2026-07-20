"use client";

import { FadeUp, MotionSection } from "@/components/motion";
import { Badge, Container, Section } from "@/components/ui";

import { useWhy } from "../hooks/useWhy";

import { WhyGrid } from "./WhyGrid";
import { WhyImage } from "./WhyImage";

export function Why() {
  const why = useWhy();

  return (
    <Section
      spacing="md"
      className="overflow-hidden border-b border-primary/10 bg-background"
    >
      <Container>
        <MotionSection>
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div>
              <FadeUp>
                <Badge variant="gold">{why.sectionLabel}</Badge>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h2 className="mt-5 max-w-3xl text-balance font-heading text-3xl font-bold leading-tight text-foreground md:mt-6 md:text-4xl lg:text-5xl">
                  {why.title}
                </h2>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:mt-6 md:text-lg md:leading-8">
                  {why.description}
                </p>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div className="mt-8 md:mt-10">
                  <WhyGrid cards={why.cards} />
                </div>
              </FadeUp>
            </div>

            <FadeUp delay={0.2}>
              <WhyImage src={why.image.src} alt={why.image.alt} />
            </FadeUp>
          </div>
        </MotionSection>
      </Container>
    </Section>
  );
}
