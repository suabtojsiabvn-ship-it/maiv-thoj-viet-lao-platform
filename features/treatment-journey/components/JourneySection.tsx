import type { ReactNode } from "react";

import {
  SectionHeading,
} from "@/components/ui";

interface JourneySectionProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function JourneySection({
  title,
  description,
  children,
}: JourneySectionProps) {
  return (
    <div>
      <SectionHeading
        title={title}
        description={description}
        align="left"
        maxWidth="lg"
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </div>
  );
}