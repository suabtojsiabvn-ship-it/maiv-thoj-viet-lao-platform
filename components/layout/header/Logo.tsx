"use client";

import Image from "next/image";
import Link from "next/link";

import { brand } from "@/content/branding";
import { useCurrentLocale, useDictionary } from "@/hooks/useDictionary";

export function Logo() {
  const locale = useCurrentLocale();
  const dictionary = useDictionary();

  return (
    <Link
      href={`/${locale}`}
      aria-label={`${brand.name} — ${dictionary.common.tagline}`}
      className="group flex min-w-0 items-center gap-2.5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full shadow-lg shadow-black/40 ring-1 ring-primary/40 transition-all duration-300 group-hover:ring-primary/80 lg:h-12 lg:w-12">
        <Image
          src="/images/logo.png"
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 48px, 44px"
          className="object-contain"
        />
      </div>

      <div className="hidden min-w-0 flex-col leading-none sm:flex">
        <span className="whitespace-nowrap text-sm font-bold text-foreground lg:text-base">
          {brand.name}
        </span>

        <span className="mt-1 max-w-64 text-[0.7rem] leading-4 text-muted-foreground lg:max-w-72">
          {dictionary.common.tagline}
        </span>
      </div>
    </Link>
  );
}
