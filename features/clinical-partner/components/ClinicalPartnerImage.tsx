"use client";

import Image from "next/image";

import { useClinicalPartner } from "../hooks/useClinicalPartner";

interface ClinicalPartnerImageProps {
  src: string;
}

export function ClinicalPartnerImage({
  src,
}: ClinicalPartnerImageProps) {
  const { clinicalPartner } = useClinicalPartner();

  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
        <Image
          src={src}
          alt={clinicalPartner.imageAlt}
          width={900}
          height={700}
          priority
          className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
        />
      </div>

      <div className="absolute -bottom-6 left-1/2 w-[92%] -translate-x-1/2 rounded-2xl border border-cyan-500/20 bg-slate-900/90 p-6 backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
          {clinicalPartner.imageCard.badge}
        </p>

        <h3 className="mt-3 text-2xl font-bold text-white">
          {clinicalPartner.name}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-300">
          {clinicalPartner.imageCard.description}
        </p>
      </div>
    </div>
  );
}
