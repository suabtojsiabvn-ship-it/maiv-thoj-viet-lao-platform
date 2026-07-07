import { Container } from "@/components/ui";

import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header>
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          <Navigation />
        </div>
      </Container>
    </header>
  );
}