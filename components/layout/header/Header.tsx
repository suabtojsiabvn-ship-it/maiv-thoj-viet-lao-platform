"use client";

import Link from "next/link";

import { LanguageSwitcher } from "@/components/common/language-switcher";
import { BackHomeButton } from "@/components/common/navigation";
import { Container } from "@/components/ui";
import { brand } from "@/content/branding";
import { useCurrentLocale, useDictionary } from "@/hooks/useDictionary";

import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export function Header() {
  const locale = useCurrentLocale();
  const dictionary = useDictionary();

  return (
    <header className="relative z-50 border-b border-primary/15 bg-background/90 shadow-lg shadow-black/20 backdrop-blur-xl md:sticky md:top-0">
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-3 py-2 lg:min-h-[4.5rem] lg:gap-5">
          <div className="flex min-w-0 items-center gap-3">
            <BackHomeButton />
            <Logo />
          </div>

          <div className="flex shrink-0 items-center gap-2.5 lg:gap-4">
            <div className="order-2 xl:order-1">
              <Navigation />
            </div>

            <div className="order-1 xl:order-2">
              <LanguageSwitcher />
            </div>

            <Link
              href={`/${locale}/booking`}
              className="order-3 hidden h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/15 transition hover:bg-gold-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:inline-flex"
            >
              {dictionary.hero.actions.primary}
            </Link>
          </div>
        </div>

        <div className="pb-2.5 text-center sm:hidden">
          <p className="text-sm font-bold leading-5 text-foreground">
            {brand.name}
          </p>

          <p className="mx-auto mt-0.5 max-w-sm text-xs leading-5 text-muted-foreground">
            {dictionary.common.tagline}
          </p>
        </div>
      </Container>
    </header>
  );
}
