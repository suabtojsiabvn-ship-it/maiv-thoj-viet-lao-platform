"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { site } from "@/content/site";
import {
  useCurrentLocale,
  useDictionary,
} from "@/hooks/useDictionary";

export function Navigation() {
  const pathname = usePathname();
  const locale = useCurrentLocale();
  const dictionary = useDictionary();

  return (
    <nav
      aria-label={dictionary.navigation.items.home}
      className="hidden items-center gap-6 xl:flex"
    >
      {site.navigation.main.map((item) => {
        const href =
          item.href === "/"
            ? `/${locale}`
            : `/${locale}${item.href}`;

        const isHome = item.href === "/";
        const active = isHome
          ? pathname === href
          : pathname === href || pathname.startsWith(`${href}/`);

        return (
          <Link
            key={item.key}
            href={href}
            aria-current={active ? "page" : undefined}
            className={[
              "relative py-2 text-sm font-medium transition-colors duration-300",
              active
                ? "text-cyan-300"
                : "text-slate-300 hover:text-cyan-300",
            ].join(" ")}
          >
            {dictionary.navigation.items[item.key]}

            <span
              aria-hidden="true"
              className={[
                "absolute inset-x-0 -bottom-0.5 h-0.5 origin-center rounded-full bg-cyan-400 transition-transform duration-300",
                active
                  ? "scale-x-100"
                  : "scale-x-0",
              ].join(" ")}
            />
          </Link>
        );
      })}
    </nav>
  );
}