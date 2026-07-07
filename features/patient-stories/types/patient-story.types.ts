export interface PatientStory {
  id: string;

  patient: string;

  country: string;

  treatment: string;

  material: string;

  completedIn: string;

  rating: number;

  thumbnail: string;

  videoUrl: string;

  quote: string;

  doctor?: string;

  language?: string;

  featured?: boolean;

  youtubeId?: string;

  slug?: string;

  seoTitle?: string;

  seoDescription?: string;
}