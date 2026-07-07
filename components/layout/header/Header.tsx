import { Container } from "@/components/ui";

import { LanguageSwitcher } from "@/components/common/language-switcher";

import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header>
      <Container>
        <div className="flex items-center justify-between gap-6">
          <Logo />

          <div className="flex items-center gap-6">
            <Navigation />
            <LanguageSwitcher />
          </div>
        </div>
      </Container>
    </header>
  );
}