export interface PartnerHighlight {
  id: string;

  title: string;

  description: string;

  icon: string;
}

export interface Technology {
  id: string;

  name: string;

  description: string;
}

export interface Certification {
  id: string;

  title: string;
}

export interface ClinicalPartner {
  id: string;

  name: string;

  tagline: string;

  description: string;

  location: string;

  website?: string;

  profileImage: {
    src: string;
    alt: string;
  };

  gallery: {
    src: string;
    alt: string;
  }[];

  highlights: PartnerHighlight[];

  technologies: Technology[];

  certifications: Certification[];
}