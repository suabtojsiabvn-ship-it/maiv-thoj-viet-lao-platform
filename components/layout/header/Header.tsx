"use client";

import Link from "next/link";

import { LanguageSwitcher } from "@/components/common/language-switcher";
import { BackHomeButton } from "@/components/common/navigation";
import { Container } from "@/components/ui";
import { useCurrentLocale, useDictionary } from "@/hooks/useDictionary";

import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { WhatsAppButton } from "./WhatsAppButton";

export function Header() {
  const locale = useCurrentLocale();
  const dictionary = useDictionary();

  return (
    <header className="sticky top-0 z-50 border-b border-primary/15 bg-background/95 shadow-lg shadow-black/20 backdrop-blur-xl">
      <Container className="px-3 sm:px-6 lg:px-8">
        <div className="flex min-h-16 items-center justify-between gap-1.5 py-2 sm:gap-3 lg:min-h-[4.5rem] lg:gap-5">
          <div className="flex min-w-0 items-center gap-1.5 sm:gap-3">
            <BackHomeButton />
            <Logo />
          </div>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5 lg:gap-4">
            <div className="order-1 xl:order-2">
              <LanguageSwitcher />
            </div>

            <div className="order-2 xl:order-3">
              <WhatsAppButton />
            </div>

            <div className="order-3 xl:order-1">
              <Navigation />
            </div>

            <Link
              href={`/${locale}/booking`}
              className="order-4 hidden h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/15 transition hover:bg-gold-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:inline-flex"
            >
              {dictionary.hero.actions.primary}
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
