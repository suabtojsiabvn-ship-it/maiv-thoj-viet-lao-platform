"use client";

import Image from "next/image";

import { useClinicalPartner } from "../hooks/useClinicalPartner";

interface ClinicalPartnerImageProps {
  src: string;
}

export function ClinicalPartnerImage({ src }: ClinicalPartnerImageProps) {
  const { clinicalPartner } = useClinicalPartner();

  return (
    <div className="relative mx-auto w-full max-w-2xl pb-16 md:pb-20 lg:sticky lg:top-28">
      <div className="overflow-hidden rounded-3xl border border-primary/25 bg-white shadow-2xl shadow-black/15">
        <Image
          src={src}
          alt={clinicalPartner.imageAlt}
          width={900}
          height={700}
          priority
          sizes="(min-width: 1024px) 44vw, 100vw"
          className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
        />
      </div>

      <div className="absolute bottom-0 left-1/2 w-[92%] -translate-x-1/2 rounded-2xl border border-primary/25 bg-card/95 p-4 shadow-xl shadow-black/25 backdrop-blur md:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:text-sm sm:tracking-[0.18em]">
          {clinicalPartner.imageCard.badge}
        </p>

        <h3 className="mt-2 font-heading text-xl font-bold text-foreground md:mt-3 md:text-2xl">
          {clinicalPartner.name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-muted-foreground md:mt-3">
          {clinicalPartner.imageCard.description}
        </p>
      </div>
    </div>
  );
}
