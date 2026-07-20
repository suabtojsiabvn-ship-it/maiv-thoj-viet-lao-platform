"use client";

import Link from "next/link";

import { useClinicalPartner } from "../hooks/useClinicalPartner";

import { ClinicalHighlights } from "./ClinicalHighlights";
import { ClinicalTechnology } from "./ClinicalTechnology";
import { ClinicalQuote } from "./ClinicalQuote";

export function ClinicalPartnerContent() {
  const { clinicalPartner } = useClinicalPartner();

  return (
    <div className="flex flex-col justify-center">
      {/* Badge */}
      <span className="inline-flex w-fit rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-sm font-medium uppercase tracking-wide text-cyan-300">
        {clinicalPartner.badge}
      </span>

      {/* Heading */}
      <h2 className="mt-6 text-4xl font-bold tracking-tight text-white lg:text-5xl">
        {clinicalPartner.heading}
      </h2>

      {/* Intro */}
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
        {clinicalPartner.intro}
      </p>

      {/* Highlights */}
      <ClinicalHighlights
        highlights={clinicalPartner.highlights}
      />

      {/* Technology */}
      <ClinicalTechnology
        title={clinicalPartner.technology.title}
        technologies={clinicalPartner.technologies}
      />

      {/* Quote */}
      <ClinicalQuote
        quote={clinicalPartner.quote}
      />

      {/* CTA */}
      <div className="mt-10">
        <Link
          href={clinicalPartner.cta.href}
          className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          {clinicalPartner.cta.label}
        </Link>
      </div>
    </div>
  );
}
