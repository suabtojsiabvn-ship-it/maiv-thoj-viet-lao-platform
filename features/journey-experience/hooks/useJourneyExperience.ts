export interface JourneyActivity {
  id: string;
  icon: string;
}

export interface JourneyDay {
  id: string;
  title: string;
  description: string;
  activities: JourneyActivity[];
}

export interface JourneyDestination {
  id: string;
  country?: string;
  city: string;
  description: string;
}

export interface JourneySupport {
  id: string;
  icon: string;
}

export interface JourneyExperienceDictionary {
  sectionLabel: string;
  badge: string;

  title: string;
  description: string;

  standardJourneyTitle: string;
  extendedJourneyTitle: string;

  supportTitle: string;

  memoriesTitle: string;
}