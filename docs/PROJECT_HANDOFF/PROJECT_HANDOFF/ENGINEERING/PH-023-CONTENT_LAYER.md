---
document_id: PH-023
title: Content Layer
version: 3.0
status: Approved
owner: Project Team
reviewer: Technical Lead
source_of_truth: true
phase: P3.0
sprint: P3.0.1
last_updated: 2026-07-10
---

# Content Layer

Content Layer owns business content.

## Current Domains
content/business, content/locales, content/media, content/stories, content/destinations, content/travel, content/blog, content/navigation, content/seo, content/site.ts, content/index.ts.

## M2 Content Foundation
`types/content/` contains base-content, story, destination, travel-guide, blog.

## Important Decision
Do not create a mega `ContentItem`. Use minimal BaseContent and domain-specific models.
