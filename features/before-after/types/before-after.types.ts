export type BeforeAfterCaseKey =
  | "case1"
  | "case2"
  | "case3"
  | "case4";

export interface BeforeAfterMeta {
  key: BeforeAfterCaseKey;
  before: string;
  after: string;
}

export interface BeforeAfterCase {
  key: BeforeAfterCaseKey;

  title: string;

  treatment: string;

  country: string;

  before: string;

  after: string;

  doctor?: string;

  duration?: string;

  materials?: string;
}