import Image from "next/image";

import type { TreatmentContent } from "@/content/treatments";

interface HeroMediaProps {
  media: TreatmentContent["media"];
  title: string;
}

export function HeroMedia({
  media,
  title,
}: HeroMediaProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl shadow-cyan-950/30">
      <div className="relative aspect-[4/3]">
        <Image
          src={media.hero}
          alt={title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
    </div>
  );
}