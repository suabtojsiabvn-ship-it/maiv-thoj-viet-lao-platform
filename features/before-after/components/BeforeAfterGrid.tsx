"use client";

import { useBeforeAfter } from "../hooks/useBeforeAfter";

import { BeforeAfterCard } from "./BeforeAfterCard";

export function BeforeAfterGrid() {
  const { cases } = useBeforeAfter();

  return (
    <div className="mt-16 grid items-stretch gap-8 md:grid-cols-2">
      {cases.map((item) => (
        <BeforeAfterCard
          key={item.key}
          item={item}
        />
      ))}
    </div>
  );
}