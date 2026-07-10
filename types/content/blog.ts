import type { BaseContent } from "./base-content";

export type BlogCategory =
  | "dental"
  | "travel"
  | "beauty"
  | "patient-guide"
  | "news";

export interface BlogContent extends BaseContent {
  category: BlogCategory;
  author: string;
  body: string[];
}