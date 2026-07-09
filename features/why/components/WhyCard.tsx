import type { WhyCard as WhyCardType } from "../types/why.types";

interface WhyCardProps {
  card: WhyCardType;
}

export function WhyCard({ card }: WhyCardProps) {
  const Icon = card.icon;

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:border-cyan-400/40">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">
        <Icon className="h-6 w-6 text-cyan-300" />
      </div>

      <h3 className="mt-5 text-lg font-semibold text-white">
        {card.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-400">
        {card.description}
      </p>
    </div>
  );
}