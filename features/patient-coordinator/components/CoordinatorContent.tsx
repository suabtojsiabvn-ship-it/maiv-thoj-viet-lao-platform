import Link from "next/link";

import { coordinatorContent } from "../data/coordinator-content";

import { CoordinatorQuote } from "./CoordinatorQuote";
import { CoordinatorServices } from "./CoordinatorServices";

export function CoordinatorContent() {
  return (
    <div className="flex flex-col justify-center">
      {/* Badge */}
      <span className="inline-flex w-fit rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-sm font-medium uppercase tracking-wide text-cyan-300">
        {coordinatorContent.badge}
      </span>

      {/* Heading */}
      <h2 className="mt-6 text-4xl font-bold tracking-tight text-white lg:text-5xl">
        {coordinatorContent.heading}
      </h2>

      {/* Intro */}
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
        {coordinatorContent.intro}
      </p>

      {/* Story */}
      <div className="mt-8 space-y-6">
        {coordinatorContent.story.map((paragraph) => (
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
        quote={coordinatorContent.quote}
        author="A Sử"
      />

      {/* Services */}
      <CoordinatorServices
        services={coordinatorContent.services}
      />

      {/* Closing Message */}
      <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">
        <p className="text-center text-lg font-medium text-white">
          Your comfort is our responsibility.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-10">
        <Link
          href={coordinatorContent.cta.href}
          className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          {coordinatorContent.cta.label}
        </Link>
      </div>
    </div>
  );
}