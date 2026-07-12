import type { ReactNode } from "react";

interface TravelGuideDetailLayoutProps {
  children: ReactNode;
}

export default function TravelGuideDetailLayout({
  children,
}: TravelGuideDetailLayoutProps) {
  return <>{children}</>;
}