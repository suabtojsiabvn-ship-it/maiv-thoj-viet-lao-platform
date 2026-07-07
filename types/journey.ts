export interface JourneyStep {
  id: string;

  title: string;

  description: string;
}

export interface PatientJourney {
  steps: JourneyStep[];
}