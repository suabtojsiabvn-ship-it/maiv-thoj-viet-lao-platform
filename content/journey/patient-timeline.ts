export type PatientJourneyStage =
  | "discovery"
  | "consultation"
  | "planning"
  | "travel"
  | "arrival"
  | "treatment"
  | "recovery"
  | "experience"
  | "departure"
  | "aftercare";

export interface PatientJourneyStep {
  id: string;
  order: number;
  stage: PatientJourneyStage;

  title: string;
  description: string;

  optional?: boolean;
  estimatedDuration?: string;

  relatedTravelGuides?: readonly string[];
  relatedDestinations?: readonly string[];
}

export const patientJourneyTimeline: readonly PatientJourneyStep[] = [
  {
    id: "initial-contact",
    order: 1,
    stage: "discovery",

    title: "Contact Our International Support Team",

    description:
      "Share your dental concerns, preferred language, available photographs or records, and your expected travel period with the Maiv Thoj Viet Lao team.",

    estimatedDuration: "Before treatment planning",
  },

  {
    id: "initial-consultation",
    order: 2,
    stage: "consultation",

    title: "Initial Consultation",

    description:
      "The team reviews your information, answers initial questions and helps coordinate communication with the clinical partner. A final diagnosis cannot be confirmed until an appropriate clinical examination is completed.",

    estimatedDuration: "Online before travel",
  },

  {
    id: "preliminary-planning",
    order: 3,
    stage: "planning",

    title: "Preliminary Treatment and Travel Planning",

    description:
      "Based on the information available, the team helps prepare a preliminary journey plan covering expected appointments, travel dates, airport arrival and accommodation needs.",

    estimatedDuration: "Before booking travel",

    relatedTravelGuides: [
      "visa-preparation",
      "hotel-stay",
    ],
  },

  {
    id: "travel-to-vietnam",
    order: 4,
    stage: "travel",

    title: "Travel to Vietnam",

    description:
      "Before departure, confirm your flight details, passport requirements, accommodation and contact information so the support team can prepare for your arrival.",

    estimatedDuration: "Travel day",

    relatedTravelGuides: [
      "visa-preparation",
      "airport-arrival",
    ],
  },

  {
    id: "airport-arrival",
    order: 5,
    stage: "arrival",

    title: "Airport Pickup and Arrival Support",

    description:
      "A Sử (Txhim), Patient Journey Manager, or an assigned team member coordinates the meeting point and supports your transfer from the airport according to the confirmed journey plan.",

    estimatedDuration: "Arrival day",

    relatedTravelGuides: [
      "airport-arrival",
      "local-transportation",
      "hotel-stay",
    ],
  },

  {
    id: "clinical-assessment",
    order: 6,
    stage: "treatment",

    title: "Clinical Examination and Final Treatment Plan",

    description:
      "The clinical partner examines your oral health, reviews diagnostic imaging when required and explains the final recommended treatment plan, schedule and material options before treatment begins.",

    estimatedDuration: "First clinical appointment",
  },

  {
    id: "treatment-process",
    order: 7,
    stage: "treatment",

    title: "Treatment and Journey Coordination",

    description:
      "Treatment is completed according to the approved clinical plan. The Patient Journey Manager helps coordinate transportation, communication and the daily schedule throughout the treatment period.",

    estimatedDuration: "Depends on the treatment plan",

    relatedTravelGuides: [
      "local-transportation",
      "hotel-stay",
    ],
  },

  {
    id: "recovery",
    order: 8,
    stage: "recovery",

    title: "Rest and Recovery",

    description:
      "Follow the clinical aftercare instructions and allow appropriate time for rest. The team remains available to support communication and schedule adjustments during your stay.",

    estimatedDuration: "According to clinical advice",

    relatedTravelGuides: [
      "aftercare-travel",
      "food-culture",
    ],
  },

  {
    id: "optional-travel",
    order: 9,
    stage: "experience",

    title: "Optional Vietnam Experience",

    description:
      "When your treatment schedule and clinical condition allow, the team may help coordinate a suitable travel experience before your return journey.",

    optional: true,
    estimatedDuration: "Based on available time",

    relatedTravelGuides: [
      "aftercare-travel",
      "food-culture",
    ],

    relatedDestinations: [
      "sapa",
      "bac-ha",
      "ha-giang",
      "moc-chau",
      "ha-long",
    ],
  },

  {
    id: "final-review",
    order: 10,
    stage: "departure",

    title: "Final Review and Airport Drop-off",

    description:
      "Before departure, the clinical team reviews the treatment result and provides aftercare guidance. Airport drop-off is then coordinated according to the confirmed flight schedule.",

    estimatedDuration: "Final day",

    relatedTravelGuides: [
      "local-transportation",
    ],
  },

  {
    id: "international-aftercare",
    order: 11,
    stage: "aftercare",

    title: "Follow-up After Returning Home",

    description:
      "After returning home, keep your treatment records and follow the recommended maintenance plan. The support team can help coordinate follow-up communication when necessary.",

    estimatedDuration: "Ongoing",
  },
] as const;

export function getPatientJourneyTimeline(): readonly PatientJourneyStep[] {
  return patientJourneyTimeline;
}

export function getPatientJourneyStep(
  id: string,
): PatientJourneyStep | undefined {
  return patientJourneyTimeline.find(
    (step) => step.id === id,
  );
}

export function getPatientJourneyStepsByStage(
  stage: PatientJourneyStage,
): readonly PatientJourneyStep[] {
  return patientJourneyTimeline.filter(
    (step) => step.stage === stage,
  );
}