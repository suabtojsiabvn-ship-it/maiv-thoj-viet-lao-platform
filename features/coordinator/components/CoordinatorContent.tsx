"use client";

import Link from "next/link";

import { useCoordinator } from "../hooks/useCoordinator";

import { CoordinatorQuote } from "./CoordinatorQuote";
import { CoordinatorServices } from "./CoordinatorServices";

export function CoordinatorContent() {
  const { coordinator } = useCoordinator();

  return (
    <div className="flex flex-col justify-center">
      <span className="inline-flex w-fit rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-sm font-medium uppercase tracking-wide text-cyan-300">
        {coordinator.badge}
      </span>

      <h2 className="mt-6 text-4xl font-bold tracking-tight text-white lg:text-5xl">
        {coordinator.heading}
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
        {coordinator.intro}
      </p>

      <div className="mt-8 space-y-6">
        {coordinator.story.map((paragraph) => (
          <p key={paragraph} className="leading-8 text-slate-400">
            {paragraph}
          </p>
        ))}
      </div>

      <CoordinatorQuote
        quote={coordinator.quote}
        author={coordinator.name}
      />

      <CoordinatorServices services={coordinator.services} />

      <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">
        <p className="text-center text-lg font-medium text-white">
          {coordinator.description}
        </p>
      </div>

      <div className="mt-10">
        <Link
          href={coordinator.cta.href}
          className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          {coordinator.cta.label}
        </Link>
      </div>
    </div>
  );
}
