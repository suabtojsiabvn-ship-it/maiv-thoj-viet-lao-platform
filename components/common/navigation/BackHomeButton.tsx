"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  useCurrentLocale,
  useDictionary,
} from "@/hooks/useDictionary";

export function BackHomeButton() {
  const pathname = usePathname();
  const locale = useCurrentLocale();
  const dictionary = useDictionary();

  const homePath = `/${locale}`;
  const normalizedPath =
    pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;

  if (normalizedPath === homePath) {
    return null;
  }

  return (
    <Link
      href={homePath}
      aria-label={dictionary.navigation.items.home}
      className="group flex h-10 shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 text-sm font-medium text-slate-200 transition hover:border-cyan-400/60 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
    >
      <svg
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
        className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1"
      >
        <path
          d="M16 10H4m0 0 5-5m-5 5 5 5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span className="hidden md:inline">
        {dictionary.navigation.items.home}
      </span>
    </Link>
  );
}