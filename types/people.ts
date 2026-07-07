export interface ImageAsset {
  src: string;
  alt: string;
}

export interface SocialProfile {
  platform:
    | "facebook"
    | "tiktok"
    | "youtube"
    | "instagram";

  url: string;

  followers?: number;
}

export interface BasePerson {
  id: string;

  name: string;

  role: string;

  languages: string[];

  profileImage: ImageAsset;
}

export interface Founder extends BasePerson {
  badge: string;

  shortBio: string;

  longBio: string[];

  quote: string;

  promise: string;

  responsibilities: string[];

  socials: SocialProfile[];
}

export interface CoordinatorService {
  id: string;

  title: string;

  description: string;

  icon: string;
}

export interface Coordinator extends BasePerson {
  quote: string;

  experience?: string;

  services: CoordinatorService[];

  gallery?: ImageAsset[];
}