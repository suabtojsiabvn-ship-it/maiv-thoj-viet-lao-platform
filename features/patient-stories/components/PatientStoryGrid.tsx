import { patientStories } from "../data/patient-stories.data";
import { PatientStoryCard } from "./PatientStoryCard";

export function PatientStoryGrid() {
  return (
    <div className="mt-16 grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">
      {patientStories.map((story) => (
        <PatientStoryCard
          key={story.id}
          story={story}
        />
      ))}
    </div>
  );
}