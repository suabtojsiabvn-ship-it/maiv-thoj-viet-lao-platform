"use client";

import Link from "next/link";

import { Button } from "@/components/ui";

import { useClinicalPartner } from "../hooks/useClinicalPartner";

import { ClinicalHighlights } from "./ClinicalHighlights";
import { ClinicalTechnology } from "./ClinicalTechnology";
import { ClinicalQuote } from "./ClinicalQuote";

export function ClinicalPartnerContent() {
  const { clinicalPartner } = useClinicalPartner();

  return (
    <div className="flex flex-col justify-center">
      <span className="inline-flex w-fit rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-medium uppercase tracking-wide text-[#765817]">
        {clinicalPartner.badge}
      </span>

      <h2 className="mt-5 text-balance font-heading text-3xl font-bold tracking-tight text-ivory-foreground md:mt-6 md:text-4xl lg:text-5xl">
        {clinicalPartner.heading}
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-7 text-[#554e43] md:mt-6 md:text-lg md:leading-8">
        {clinicalPartner.intro}
      </p>

      <ClinicalHighlights
        highlights={clinicalPartner.highlights}
      />

      <ClinicalTechnology
        title={clinicalPartner.technology.title}
        technologies={clinicalPartner.technologies}
      />

      <ClinicalQuote
        quote={clinicalPartner.quote}
      />

      <div className="mt-8 md:mt-10">
        <Button
          asChild
          size="lg"
          className="w-full sm:w-auto"
        >
          <Link href={clinicalPartner.cta.href}>
            {clinicalPartner.cta.label}
          </Link>
        </Button>
      </div>
    </div>
  );
}
