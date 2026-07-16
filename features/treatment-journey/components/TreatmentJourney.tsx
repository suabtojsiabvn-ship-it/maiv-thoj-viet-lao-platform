import type { ReactNode } from "react";

export interface TreatmentJourneyProps {
  children?: ReactNode;
}

export function TreatmentJourney({
  children,
}: TreatmentJourneyProps) {
  if (!children) {
    return null;
  }

  return <>{children}</>;
}

export default TreatmentJourney;