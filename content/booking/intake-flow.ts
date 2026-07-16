export type IntakeStepId =
  | "about-you"
  | "treatment"
  | "travel"
  | "support"
  | "review";

export interface IntakeStep {
  id: IntakeStepId;
  order: number;
  title: string;
  description: string;
  required: boolean;
}

export const internationalIntakeFlow: readonly IntakeStep[] = [
  {
    id: "about-you",
    order: 1,
    title: "About You",
    description:
      "Tell us who you are, where you are contacting us from and how our international support team should communicate with you.",
    required: true,
  },
  {
    id: "treatment",
    order: 2,
    title: "Treatment Interest",
    description:
      "Share your dental concerns, preferred treatment and any available photographs or treatment records.",
    required: true,
  },
  {
    id: "travel",
    order: 3,
    title: "Travel Planning",
    description:
      "Provide your expected travel period, departure location and the number of people traveling with you.",
    required: false,
  },
  {
    id: "support",
    order: 4,
    title: "Support Services",
    description:
      "Choose the journey support services you may need, including airport pickup, accommodation assistance and language support.",
    required: false,
  },
  {
    id: "review",
    order: 5,
    title: "Review and Submit",
    description:
      "Review your information before sending your international consultation request to the Maiv Thoj Viet Lao team.",
    required: true,
  },
] as const;

export function getInternationalIntakeFlow(): readonly IntakeStep[] {
  return internationalIntakeFlow;
}

export function getIntakeStep(
  id: IntakeStepId,
): IntakeStep | undefined {
  return internationalIntakeFlow.find(
    (step) => step.id === id,
  );
}