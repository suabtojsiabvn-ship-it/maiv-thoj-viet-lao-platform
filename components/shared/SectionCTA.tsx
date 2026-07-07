import Link from "next/link";

import { Button } from "@/components/ui/button";

interface SectionCTAProps {
  href: string;
  label: string;
}

export function SectionCTA({
  href,
  label,
}: SectionCTAProps) {
  return (
    <Button
      asChild
      size="lg"
    >
      <Link href={href}>
        {label}
      </Link>
    </Button>
  );
}