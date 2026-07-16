"use client";

import Link from "next/link";

import { site } from "@/content/site";
import { useCurrentLocale, useDictionary } from "@/hooks/useDictionary";

export function Navigation() {
  const locale = useCurrentLocale();
  const dictionary = useDictionary();

  return (
    <nav
      aria-label={dictionary.navigation.items.home}
      className="hidden items-center gap-8 lg:flex"
    >
      {site.navigation.main.map((item) => {
        const href =
          item.href === "/"
            ? `/${locale}`
            : `/${locale}${item.href}`;

        return (
          <Link
            key={item.key}
            href={href}
            className="text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-cyan-400"
          >
            {dictionary.navigation.items[item.key]}
          </Link>
        );
      })}
    </nav>
  );
}
