"use client";

import { FadeUp, MotionSection } from "@/components/motion";
import { Badge, Container, Section } from "@/components/ui";

import { useWhy } from "../hooks/useWhy";

import { WhyGrid } from "./WhyGrid";
import { WhyImage } from "./WhyImage";

export function Why() {
  const why = useWhy();

  return (
    <Section className="relative overflow-hidden bg-slate-950 py-24">
      <Container>
        <MotionSection>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <FadeUp>
                <Badge variant="cyan">{why.sectionLabel}</Badge>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h2 className="mt-6 max-w-3xl font-heading text-4xl font-bold leading-tight text-white md:text-5xl">
                  {why.title}
                </h2>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  {why.description}
                </p>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div className="mt-10">
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