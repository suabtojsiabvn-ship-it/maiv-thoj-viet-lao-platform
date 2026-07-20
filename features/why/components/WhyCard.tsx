import type { WhyCard as WhyCardType } from "../types/why.types";

interface WhyCardProps {
  card: WhyCardType;
}

export function WhyCard({ card }: WhyCardProps) {
  const Icon = card.icon;

  return (
    <div className="h-full rounded-3xl border border-primary/15 bg-card/65 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-secondary/80 hover:shadow-xl hover:shadow-primary/10 md:p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="mt-5 text-lg font-semibold text-foreground">
        {card.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        {card.description}
      </p>
    </div>
  );
}
