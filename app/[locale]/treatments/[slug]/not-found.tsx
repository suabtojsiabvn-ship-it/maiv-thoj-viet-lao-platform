"use client";

import Link from "next/link";

import { Button } from "@/components/ui";
import {
  useCurrentLocale,
  useDictionary,
} from "@/hooks/useDictionary";

export default function TreatmentNotFound() {
  const locale = useCurrentLocale();
  const dictionary = useDictionary();
  const treatmentsPage = dictionary.pages.treatments;

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-background px-6 py-16 text-center text-foreground">
      <div className="max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary md:tracking-[0.25em]">
          {treatmentsPage.badge}
        </p>

        <h1 className="mt-4 font-heading text-3xl font-bold md:text-4xl">
          {treatmentsPage.emptyState.heading}
        </h1>

        <p className="mt-4 leading-7 text-muted-foreground">
          {treatmentsPage.emptyState.description}
        </p>

        <Button
          asChild
          size="lg"
          className="mt-8 w-full sm:w-auto"
        >
          <Link href={`/${locale}`}>
            {dictionary.navigation.items.home}
          </Link>
        </Button>
      </div>
    </main>
  );
}
