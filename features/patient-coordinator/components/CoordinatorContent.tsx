"use client";

import Link from "next/link";

import { coordinator as coordinatorProfile } from "@/content/people/coordinator";

import { useCoordinator } from "../hooks/useCoordinator";

import { CoordinatorQuote } from "./CoordinatorQuote";
import { CoordinatorServices } from "./CoordinatorServices";

export function CoordinatorContent() {
  const { coordinator } = useCoordinator();

  return (
    <div className="flex flex-col justify-center">
      {/* Badge */}
      <span className="inline-flex w-fit rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-sm font-medium uppercase tracking-wide text-cyan-300">
        {coordinator.badge}
      </span>

      {/* Heading */}
      <h2 className="mt-6 text-4xl font-bold tracking-tight text-white lg:text-5xl">
        {coordinator.heading}
      </h2>

      {/* Intro */}
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
        {coordinator.intro}
      </p>

      {/* Story */}
      <div className="mt-8 space-y-6">
        {coordinator.story.map((paragraph) => (
          <p
            key={paragraph}
            className="leading-8 text-slate-400"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Quote */}
      <CoordinatorQuote
        quote={coordinator.quote}
        author={coordinatorProfile.name}
      />

      {/* Services */}
      <CoordinatorServices services={coordinator.services} />

      {/* Closing Message */}
      <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">
        <p className="text-center text-lg font-medium text-white">
          {coordinator.description}
        </p>
      </div>

      {/* CTA */}
      <div className="mt-10">
        <Link
          href="/booking"
          className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          {coordinator.cta.label}
        </Link>
      </div>
    </div>
  );
}