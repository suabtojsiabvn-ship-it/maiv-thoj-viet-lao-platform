import { Container, Section } from "@/components/ui";

interface HeroProps {
  children?: React.ReactNode;
}

export function Hero({
  children,
}: HeroProps) {
  return (
    <Section className="relative overflow-hidden py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {children}
        </div>
      </Container>
    </Section>
  );
}