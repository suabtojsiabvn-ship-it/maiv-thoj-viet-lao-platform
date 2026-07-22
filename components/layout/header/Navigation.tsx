"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { site } from "@/content/site";
import { useCurrentLocale, useDictionary } from "@/hooks/useDictionary";

export function Navigation() {
  const pathname = usePathname();
  const locale = useCurrentLocale();
  const dictionary = useDictionary();

  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function getNavigationItem(item: (typeof site.navigation.main)[number]) {
    const href = item.href === "/" ? `/${locale}` : `/${locale}${item.href}`;

    const isHome = item.href === "/";
    const active = isHome
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);

    return {
      href,
      active,
    };
  }

  return (
    <>
      <nav
        aria-label={dictionary.navigation.label}
        className="hidden items-center gap-5 xl:flex"
      >
        {site.navigation.main.map((item) => {
          const { href, active } = getNavigationItem(item);

          return (
            <Link
              key={item.key}
              href={href}
              aria-current={active ? "page" : undefined}
              className={[
                "relative py-2 text-[0.82rem] font-medium transition-colors duration-300",
                active
                  ? "text-gold-soft"
                  : "text-muted-foreground hover:text-primary",
              ].join(" ")}
            >
              {dictionary.navigation.items[item.key]}

              <span
                aria-hidden="true"
                className={[
                  "absolute inset-x-0 -bottom-0.5 h-0.5 origin-center rounded-full bg-primary transition-transform duration-300",
                  active ? "scale-x-100" : "scale-x-0",
                ].join(" ")}
              />
            </Link>
          );
        })}
      </nav>

      <div ref={menuRef} className="relative xl:hidden">
        <button
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={open}
          aria-label={
            open
              ? dictionary.navigation.closeMenu
              : dictionary.navigation.openMenu
          }
          onClick={() => setOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/25 bg-card/80 text-primary transition hover:border-primary/60 hover:bg-primary/10 hover:text-gold-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="h-5 w-5"
          >
            {open ? (
              <path
                d="M6 6l12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M5 7h14M5 12h14M5 17h14"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>

        {open ? (
          <nav
            id="mobile-navigation"
            aria-label={dictionary.navigation.label}
            className="absolute right-0 top-full z-50 mt-3 w-[min(20rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-primary/20 bg-card/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl"
          >
            {site.navigation.main.map((item) => {
              const { href, active } = getNavigationItem(item);

              return (
                <Link
                  key={item.key}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={[
                    "flex min-h-11 items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                    active
                      ? "bg-primary/15 text-gold-soft"
                      : "text-muted-foreground hover:bg-primary/10 hover:text-foreground",
                  ].join(" ")}
                >
                  <span>{dictionary.navigation.items[item.key]}</span>

                  {active ? (
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-primary"
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>
        ) : null}
      </div>
    </>
  );
}
