export interface BeforeAfterCase {
  id: string;

  title: string;

  treatment: string;

  before: string;

  after: string;

  country: string;

  doctor?: string;

  duration?: string;

  materials?: string;
}