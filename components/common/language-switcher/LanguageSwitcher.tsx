"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { useCurrentLocale } from "@/hooks/useDictionary";
import {
  getLocaleInfo,
  getSupportedLocales,
} from "@/lib/i18n";
import type { Locale } from "@/types/i18n";

const STORAGE_KEY = "site-locale";

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useCurrentLocale();

  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const currentLocaleInfo = getLocaleInfo(currentLocale);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
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

  function buildLocalizedPath(nextLocale: Locale) {
    const segments = pathname.split("/").filter(Boolean);
    const supportedLocales = getSupportedLocales();

    if (
      segments.length > 0 &&
      supportedLocales.includes(segments[0] as Locale)
    ) {
      segments[0] = nextLocale;
    } else {
      segments.unshift(nextLocale);
    }

    return `/${segments.join("/")}`;
  }

  function handleChange(nextLocale: Locale) {
    if (nextLocale === currentLocale) {
      setOpen(false);
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, nextLocale);

    const nextPath = buildLocalizedPath(nextLocale);

    setOpen(false);
    router.push(nextPath);
  }

  return (
    <div
      ref={menuRef}
      className="relative"
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="flex h-10 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 text-sm font-medium text-white transition hover:border-cyan-400/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
      >
        <span
          aria-hidden="true"
          className="text-base"
        >
          🌐
        </span>

        <span className="hidden sm:inline">
          {currentLocaleInfo.nativeLabel}
        </span>

        <svg
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className={[
            "h-4 w-4 transition-transform duration-200",
            open ? "rotate-180" : "",
          ].join(" ")}
        >
          <path
            d="m6 8 4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open ? (
        <div
          role="menu"
          aria-label="Language"
          className="absolute right-0 top-full z-50 mt-3 w-52 origin-top-right overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl"
        >
          {getSupportedLocales().map((code) => {
            const localeInfo = getLocaleInfo(code);
            const active = code === currentLocale;

            return (
              <button
                key={code}
                type="button"
                role="menuitemradio"
                aria-checked={active}
                onClick={() => handleChange(code)}
                className={[
                  "flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition",
                  active
                    ? "bg-cyan-500/15 text-cyan-300"
                    : "text-slate-200 hover:bg-white/10 hover:text-white",
                ].join(" ")}
              >
                <span>{localeInfo.nativeLabel}</span>

                {active ? (
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      d="m5 10 3 3 7-7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}