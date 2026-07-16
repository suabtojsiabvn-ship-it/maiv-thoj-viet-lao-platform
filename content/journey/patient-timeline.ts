import type {
  LocalePatientJourneyStepKey,
} from "@/types/i18n";

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

export interface PatientJourneyStepMeta {
  id: string;
  dictionaryKey: LocalePatientJourneyStepKey;
  order: number;
  stage: PatientJourneyStage;
  optional?: boolean;
  relatedTravelGuides?: readonly string[];
  relatedDestinations?: readonly string[];
}

export interface PatientJourneyStep
  extends PatientJourneyStepMeta {
  stageLabel: string;
  title: string;
  description: string;
  estimatedDuration: string;
}

export const patientJourneyTimelineMeta:
  readonly PatientJourneyStepMeta[] = [
    {
      id: "initial-contact",
      dictionaryKey: "initialContact",
      order: 1,
      stage: "discovery",
    },
    {
      id: "initial-consultation",
      dictionaryKey: "initialConsultation",
      order: 2,
      stage: "consultation",
    },
    {
      id: "preliminary-planning",
      dictionaryKey: "preliminaryPlanning",
      order: 3,
      stage: "planning",
      relatedTravelGuides: [
        "visa-preparation",
        "hotel-stay",
      ],
    },
    {
      id: "travel-to-vietnam",
      dictionaryKey: "travelToVietnam",
      order: 4,
      stage: "travel",
      relatedTravelGuides: [
        "visa-preparation",
        "airport-arrival",
      ],
    },
    {
      id: "airport-arrival",
      dictionaryKey: "airportArrival",
      order: 5,
      stage: "arrival",
      relatedTravelGuides: [
        "airport-arrival",
        "local-transportation",
        "hotel-stay",
      ],
    },
    {
      id: "clinical-assessment",
      dictionaryKey: "clinicalAssessment",
      order: 6,
      stage: "treatment",
    },
    {
      id: "treatment-process",
      dictionaryKey: "treatmentProcess",
      order: 7,
      stage: "treatment",
      relatedTravelGuides: [
        "local-transportation",
        "hotel-stay",
      ],
    },
    {
      id: "recovery",
      dictionaryKey: "recovery",
      order: 8,
      stage: "recovery",
      relatedTravelGuides: [
        "aftercare-travel",
        "food-culture",
      ],
    },
    {
      id: "optional-travel",
      dictionaryKey: "optionalTravel",
      order: 9,
      stage: "experience",
      optional: true,
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
      dictionaryKey: "finalReview",
      order: 10,
      stage: "departure",
      relatedTravelGuides: [
        "local-transportation",
      ],
    },
    {
      id: "international-aftercare",
      dictionaryKey: "internationalAftercare",
      order: 11,
      stage: "aftercare",
    },
  ] as const;

export function getPatientJourneyTimelineMeta():
  readonly PatientJourneyStepMeta[] {
  return patientJourneyTimelineMeta;
}

export function getPatientJourneyStepMeta(
  id: string,
): PatientJourneyStepMeta | undefined {
  return patientJourneyTimelineMeta.find(
    (step) => step.id === id,
  );
}

export function getPatientJourneyStepsByStage(
  stage: PatientJourneyStage,
): readonly PatientJourneyStepMeta[] {
  return patientJourneyTimelineMeta.filter(
    (step) => step.stage === stage,
  );
}