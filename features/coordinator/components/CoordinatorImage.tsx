"use client";

import Image from "next/image";

import { useCoordinator } from "../hooks/useCoordinator";

interface CoordinatorImageProps {
  src: string;
}

export function CoordinatorImage({
  src,
}: CoordinatorImageProps) {
  const { coordinator } = useCoordinator();

  return (
    <div className="relative mx-auto w-full max-w-md pb-14 md:pb-16">
      <div className="overflow-hidden rounded-3xl border border-primary/20 bg-card shadow-2xl shadow-black/40">
        <Image
          src={src}
          alt={coordinator.imageAlt}
          width={640}
          height={800}
          priority
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
        />
      </div>

      <div className="absolute bottom-0 left-1/2 w-[92%] -translate-x-1/2 rounded-2xl border border-primary/25 bg-card/95 p-4 shadow-xl shadow-black/30 backdrop-blur md:w-[90%] md:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:text-sm sm:tracking-[0.18em]">
          {coordinator.imageCard.role}
        </p>

        <h3 className="mt-2 font-heading text-xl font-bold text-foreground md:mt-3 md:text-2xl">
          {coordinator.name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-muted-foreground md:mt-3">
          {coordinator.imageCard.description}
        </p>
      </div>
    </div>
  );
}
