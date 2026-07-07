import Link from "next/link";

import { founder } from "@/content/people/founder";
import { founderContent } from "../data/founder-content";

import { FounderQuote } from "./FounderQuote";
import { FounderValues } from "./FounderValues";

export function FounderContent() {
  return (
    <div className="flex flex-col justify-center">
      {/* Label */}
      <span className="inline-flex w-fit rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-300">
        {founderContent.badge}
      </span>

      {/* Heading */}
      <h2 className="mt-6 text-4xl font-bold tracking-tight text-white lg:text-5xl">
        {founderContent.heading}
      </h2>

      {/* Intro */}
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
        {founderContent.intro}
      </p>

      {/* Story */}
      <div className="mt-8 space-y-6">
        {founderContent.story.map((paragraph) => (
          <p
            key={paragraph}
            className="leading-8 text-slate-400"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Quote */}
      <FounderQuote
        quote={founderContent.quote}
        author={founder.name}
      />

      {/* Values */}
      <FounderValues
        values={founderContent.values}
      />

      {/* CTA */}
      <div className="mt-10">
        <Link
          href={founderContent.cta.href}
          className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          {founderContent.cta.label}
        </Link>
      </div>
    </div>
  );
}