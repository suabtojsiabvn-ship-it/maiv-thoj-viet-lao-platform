"use client";

import { LanguageSwitcher } from "@/components/common/language-switcher";
import { BackHomeButton } from "@/components/common/navigation";
import { Container } from "@/components/ui";
import { brand } from "@/content/branding";
import { useDictionary } from "@/hooks/useDictionary";

import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export function Header() {
  const dictionary = useDictionary();

  return (
    <header className="sticky top-0 z-50 border-b border-primary/15 bg-background/90 shadow-lg shadow-black/20 backdrop-blur-xl">
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-3 py-2 lg:min-h-20 lg:gap-6">
          <div className="flex min-w-0 items-center gap-3">
            <BackHomeButton />
            <Logo />
          </div>

          <div className="flex shrink-0 items-center gap-3 lg:gap-6">
            <div className="order-2 xl:order-1">
              <Navigation />
            </div>

            <div className="order-1 xl:order-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        <div className="pb-3 text-center sm:hidden">
          <p className="text-base font-bold leading-5 text-foreground">
            {brand.name}
          </p>

          <p className="mx-auto mt-1 max-w-sm text-xs leading-5 text-muted-foreground">
            {dictionary.common.tagline}
          </p>
        </div>
      </Container>
    </header>
  );
}
