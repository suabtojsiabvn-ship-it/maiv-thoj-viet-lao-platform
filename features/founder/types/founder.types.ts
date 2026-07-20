export interface FounderStat {
  value: string;
  label: string;
}

export interface FounderQuote {
  text: string;
  author: string;
}

export interface FounderViewModel {
  sectionLabel: string;
  title: string;
  description: string;
  story: string[];
  quote: FounderQuote;
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
