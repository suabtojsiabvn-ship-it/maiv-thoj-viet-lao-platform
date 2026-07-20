"use client";

import { useTreatments } from "../hooks/useTreatments";
import { TreatmentCard } from "./TreatmentCard";

export function TreatmentGrid() {
  const { items } = useTreatments();

  return (
    <div className="mt-10 grid items-stretch gap-4 md:mt-14 md:grid-cols-2 md:gap-6 lg:gap-8">
      {items.map((treatment) => (
        <TreatmentCard
          key={treatment.slug}
          treatment={treatment}
        />
      ))}
    </div>
  );
}
