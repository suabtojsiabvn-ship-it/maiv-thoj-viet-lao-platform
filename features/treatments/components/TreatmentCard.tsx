"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { GlassCard } from "@/components/ui";
import { useCurrentLocale } from "@/hooks/useDictionary";

import { useTreatments } from "../hooks/useTreatments";
import type { Treatment } from "../types/treatment.types";

interface TreatmentCardProps {
  treatment: Treatment;
}

export function TreatmentCard({
  treatment,
}: TreatmentCardProps) {
  const { treatments } = useTreatments();
  const locale = useCurrentLocale();

  return (
    <GlassCard
      tone="light"
      className="group h-full overflow-hidden p-0 transition-all duration-500 hover:-translate-y-2"
    >
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

      <div className="flex h-full flex-col p-5 md:p-7 lg:p-8">
        <h3 className="font-heading text-xl font-bold text-ivory-foreground md:text-2xl">
          {treatment.title}
        </h3>

        <p className="mt-3 flex-1 leading-7 text-[#665f54] md:mt-4">
          {treatment.description}
        </p>

        <Link
          href={`/${locale}/treatments/${treatment.slug}`}
          className="mt-5 inline-flex items-center gap-2 font-semibold text-[#765817] transition-colors hover:text-[#4f3a0f] md:mt-6"
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
