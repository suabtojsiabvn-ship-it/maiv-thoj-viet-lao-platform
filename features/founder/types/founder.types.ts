export interface FounderStat {
  value: string;
  label: string;
}

export interface FounderViewModel {
  sectionLabel: string;
  title: string;
  description: string;
  story: string[];
  quote: string;
  cta: {
    label: string;
    href: string;
  };
  image: {
    src: string;
    alt: string;
  };
  stats: FounderStat[];
}