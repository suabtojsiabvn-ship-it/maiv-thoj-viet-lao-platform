import { LanguageSwitcher } from "@/components/common/language-switcher";
import { BackHomeButton } from "@/components/common/navigation";
import { Container } from "@/components/ui";

import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-primary/15 bg-background/90 shadow-lg shadow-black/20 backdrop-blur-xl">
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-3 py-2 lg:min-h-20 lg:gap-6">
          <div className="flex min-w-0 items-center gap-3">
            <BackHomeButton />
            <Logo />
          </div>

          <div className="flex shrink-0 items-center gap-3 lg:gap-6">
            <Navigation />
            <LanguageSwitcher />
          </div>
        </div>
      </Container>
    </header>
  );
}
