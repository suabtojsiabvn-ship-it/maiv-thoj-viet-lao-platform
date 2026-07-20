"use client";

import Link from "next/link";

import { FadeUp, MotionSection } from "@/components/motion";
import { Button, Container, Section } from "@/components/ui";

import { useFounder } from "../hooks/useFounder";

import { FounderContent } from "./FounderContent";
import { FounderImage } from "./FounderImage";
import { FounderQuote } from "./FounderQuote";
import { FounderStats } from "./FounderStats";

export function Founder() {
  const founder = useFounder();

  return (
    <Section
      spacing="md"
      className="overflow-hidden border-b border-primary/15 bg-ivory text-ivory-foreground"
    >
      <Container>
        <MotionSection>
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <FadeUp>
              <FounderImage
                src={founder.image.src}
                alt={founder.image.alt}
              />
            </FadeUp>

            <div>
              <FounderContent
                sectionLabel={founder.sectionLabel}
                title={founder.title}
                description={founder.description}
                story={founder.story}
              />

              <div className="mt-8 space-y-6 md:space-y-8">
                <FounderQuote
                  quote={founder.quote.text}
                  author={founder.quote.author}
                />
                <FounderStats stats={founder.stats} />

                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Link href={founder.cta.href}>{founder.cta.label}</Link>
                </Button>
              </div>
            </div>
          </div>
        </MotionSection>
      </Container>
    </Section>
  );
}
