import type { PatientStory } from "../types/patient-story.types";

import { PatientStoryCard } from "./PatientStoryCard";

interface PatientStoryGridProps {
  stories: PatientStory[];
  labels: {
    languageSupport: string;
    treatedBy: string;
    watchJourney: string;
  };
}

export function PatientStoryGrid({
  stories,
  labels,
}: PatientStoryGridProps) {
  return (
    <div className="mt-16 grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">
      {stories.map((story) => (
        <PatientStoryCard
          key={story.id}
          story={story}
          labels={labels}
        />
      ))}
    </div>
  );
}