"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { GlassCard } from "@/components/ui";

import { useTreatments } from "../hooks/useTreatments";
import type { Treatment } from "../types/treatment.types";

interface TreatmentCardProps {
  treatment: Treatment;
}

export function TreatmentCard({
  treatment,
}: TreatmentCardProps) {
  const { treatments } = useTreatments();

  return (
    <GlassCard className="group overflow-hidden p-0 transition-all duration-500 hover:-translate-y-2">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={treatment.image}
          alt={treatment.title}
          fill
          loading="lazy"
          sizes="(min-width: 1280px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-white">
          {treatment.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-300">
          {treatment.description}
        </p>

        <Link
          href={`/treatments/${treatment.slug}`}
          className="mt-6 inline-flex items-center gap-2 font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
        >
          {treatments.cta.learnMore}

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </GlassCard>
  );
}