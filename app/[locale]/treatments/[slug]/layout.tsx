import type { ReactNode } from "react";

interface TreatmentDetailLayoutProps {
  children: ReactNode;
}

export default function TreatmentDetailLayout({
  children,
}: TreatmentDetailLayoutProps) {
  return <>{children}</>;
}