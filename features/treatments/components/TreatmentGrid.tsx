import { treatments } from "../data/treatments.data";
import { TreatmentCard } from "./TreatmentCard";

export function TreatmentGrid() {
  return (
    <div className="mt-16 grid items-stretch gap-8 md:grid-cols-2">
      {treatments.map((treatment) => (
        <TreatmentCard
          key={treatment.slug}
          treatment={treatment}
        />
      ))}
    </div>
  );
}