import type { TreatmentContent } from "@/content/treatments";

interface HeroHeaderProps {
  hero: TreatmentContent["hero"];
}

export function HeroHeader({
  hero,
}: HeroHeaderProps) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
        {hero.badge}
      </p>

      <h1 className="mt-6 max-w-3xl font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
        {hero.title}
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
        {hero.description}
      </p>
    </div>
  );
}