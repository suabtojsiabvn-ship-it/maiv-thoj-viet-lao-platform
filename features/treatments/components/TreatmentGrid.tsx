"use client";

import { useTreatments } from "../hooks/useTreatments";
import { TreatmentCard } from "./TreatmentCard";

export function TreatmentGrid() {
  const { items } = useTreatments();

  return (
    <div className="mt-16 grid items-stretch gap-8 md:grid-cols-2">
      {items.map((treatment) => (
        <TreatmentCard
          key={treatment.slug}
          treatment={treatment}
        />
      ))}
    </div>
  );
}