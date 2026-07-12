"use client";

import Image from "next/image";

import { useCoordinator } from "../hooks/useCoordinator";

interface CoordinatorImageProps {
  src: string;
  alt: string;
}

export function CoordinatorImage({
  src,
  alt,
}: CoordinatorImageProps) {
  const { coordinator } = useCoordinator();

  return (
    <div className="relative mx-auto w-full max-w-md pb-16">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
        <Image
          src={src}
          alt={alt}
          width={640}
          height={800}
          priority
          className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
        />
      </div>

      <div className="absolute bottom-0 left-1/2 w-[90%] -translate-x-1/2 rounded-2xl border border-cyan-500/20 bg-slate-900/90 p-6 shadow-xl backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
          {coordinator.imageCard.role}
        </p>

        <h3 className="mt-3 text-2xl font-bold text-white">
          {coordinator.name}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-300">
          {coordinator.imageCard.description}
        </p>
      </div>
    </div>
  );
}