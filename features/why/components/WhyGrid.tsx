import type { WhyCard as WhyCardType } from "../types/why.types";

import { WhyCard } from "./WhyCard";

interface WhyGridProps {
  cards: WhyCardType[];
}

export function WhyGrid({ cards }: WhyGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {cards.map((card) => (
        <WhyCard key={card.key} card={card} />
      ))}
    </div>
  );
}