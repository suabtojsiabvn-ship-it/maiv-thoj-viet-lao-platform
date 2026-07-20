"use client";

import Link from "next/link";

import { Button } from "@/components/ui";

import { useCoordinator } from "../hooks/useCoordinator";

import { CoordinatorQuote } from "./CoordinatorQuote";
import { CoordinatorServices } from "./CoordinatorServices";

export function CoordinatorContent() {
  const { coordinator } = useCoordinator();

  return (
    <div className="flex flex-col justify-center">
      <span className="inline-flex w-fit rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-medium uppercase tracking-wide text-gold-soft">
        {coordinator.badge}
      </span>

      <h2 className="mt-5 text-balance font-heading text-3xl font-bold tracking-tight text-foreground md:mt-6 md:text-4xl lg:text-5xl">
        {coordinator.heading}
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:mt-6 md:text-lg md:leading-8">
        {coordinator.intro}
      </p>

      <div className="mt-6 space-y-4 md:mt-8 md:space-y-6">
        {coordinator.story.map((paragraph) => (
          <p
            key={paragraph}
            className="leading-7 text-muted-foreground md:leading-8"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <CoordinatorQuote
        quote={coordinator.quote}
        author={coordinator.name}
      />

      <CoordinatorServices services={coordinator.services} />

      <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-5 md:mt-10 md:p-6">
        <p className="text-center text-base font-medium leading-7 text-foreground md:text-lg">
          {coordinator.description}
        </p>
      </div>

      <div className="mt-8 md:mt-10">
        <Button
          asChild
          size="lg"
          className="w-full sm:w-auto"
        >
          <Link href={coordinator.cta.href}>
            {coordinator.cta.label}
          </Link>
        </Button>
      </div>
    </div>
  );
}
