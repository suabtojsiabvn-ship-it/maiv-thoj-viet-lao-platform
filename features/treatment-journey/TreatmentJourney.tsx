import {
  Container,
  Section,
} from "@/components/ui";
import { resolveTreatmentJourney } from "@/content/journey";
import type { TreatmentSlug } from "@/content/treatments";
import type { Locale } from "@/types/i18n";

import { JourneyCard } from "./components/JourneyCard";
import { JourneySection } from "./components/JourneySection";

interface TreatmentJourneyProps {
  locale: Locale;
  treatmentSlug: TreatmentSlug;
}

export function TreatmentJourney({
  locale,
  treatmentSlug,
}: TreatmentJourneyProps) {
  const journey = resolveTreatmentJourney(
    locale,
    treatmentSlug,
  );

  const hasStories = journey.stories.length > 0;
  const hasTravelGuides =
    journey.travelGuides.length > 0;
  const hasDestinations =
    journey.destinations.length > 0;

  if (
    !hasStories &&
    !hasTravelGuides &&
    !hasDestinations
  ) {
    return null;
  }

  return (
    <Section
      className="border-t border-white/10 bg-slate-950"
      spacing="xl"
    >
      <Container>
        <div className="space-y-24">
          {hasStories && (
            <JourneySection
              title="Real Patient Journeys"
              description="Discover experiences from international patients who received treatment and journey support in Vietnam."
            >
              {journey.stories.map((story) => (
                <JourneyCard
                  key={story.slug}
                  title={story.title}
                  summary={story.summary}
                  image={story.media.coverImage}
                  href={`/${locale}/stories/${story.slug}`}
                  label="Patient Story"
                />
              ))}
            </JourneySection>
          )}

          {hasTravelGuides && (
            <JourneySection
              title="Prepare for Your Journey"
              description="Practical guidance for arrival, accommodation, transportation and aftercare during your treatment journey."
            >
              {journey.travelGuides.map((guide) => (
                <JourneyCard
                  key={guide.slug}
                  title={guide.title}
                  summary={guide.summary}
                  image={guide.media.coverImage}
                  href={`/${locale}/travel-guide/${guide.slug}`}
                  label="Travel Guide"
                />
              ))}
            </JourneySection>
          )}

          {hasDestinations && (
            <JourneySection
              title="Explore Vietnam During Your Stay"
              description="Discover destinations that may complement your journey when your treatment schedule and clinical condition allow."
            >
              {journey.destinations.map(
                (destination) => (
                  <JourneyCard
                    key={destination.slug}
                    title={destination.title}
                    summary={destination.summary}
                    image={
                      destination.media.coverImage
                    }
                    href={`/${locale}/destinations/${destination.slug}`}
                    label="Destination"
                  />
                ),
              )}
            </JourneySection>
          )}
        </div>
      </Container>
    </Section>
  );
}