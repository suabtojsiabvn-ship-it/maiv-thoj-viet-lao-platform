---
document_id: PH-020
title: Architecture
version: 3.0
status: Approved
owner: Project Team
reviewer: Technical Lead
source_of_truth: true
phase: P3.0
sprint: P3.0.1
last_updated: 2026-07-10
---

# Architecture

## High-Level Flow
```text
App Route → Feature → Hook → Dictionary / Content → Metadata → ViewModel → Component → UI
```

## App Layer
`app/` handles routing, locale routes, API routes, metadata routes and page composition. It must not contain feature internals or hardcoded business copy.

## Feature Layer
`features/` contains business capabilities such as hero, founder, coordinator, clinical-partner, treatments, before-after, journey, booking, faq, patient-stories.

## Hook Layer
Hooks create ViewModels. They can read dictionary/content, merge metadata and transform data for UI. They should not render JSX.

## Content Layer
`content/` contains business content, dictionaries, media metadata and domain content.

## Metadata Layer
`features/*/data/` contains image, icon, order, slug, mapping and visual metadata only.

## Component Layer
Components render only.

## Shared Content Components
`components/content/` includes ContentHero, ContentMeta, ContentBody, ContentGallery, ContentTags.
