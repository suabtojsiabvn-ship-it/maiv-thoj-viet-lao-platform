"use client";

import Image from "next/image";
import Link from "next/link";

import { brand } from "@/content/branding";
import { useCurrentLocale } from "@/hooks/useDictionary";

export function Logo() {
  const locale = useCurrentLocale();

  return (
    <Link
      href={`/${locale}`}
      aria-label={`${brand.name} — ${brand.tagline}`}
      className="group flex min-w-0 items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full shadow-lg shadow-black/40 ring-1 ring-primary/40 transition-all duration-300 group-hover:ring-primary/80 lg:h-14 lg:w-14">
        <Image
          src="/images/logo.png"
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 56px, 48px"
          className="object-contain"
        />
      </div>

      <div className="hidden min-w-0 flex-col leading-none sm:flex">
        <span className="truncate text-base font-bold text-foreground lg:text-lg">
          {brand.name}
        </span>

        <span className="mt-1 max-w-64 truncate text-xs text-muted-foreground">
          {brand.tagline}
        </span>
      </div>
    </Link>
  );
}