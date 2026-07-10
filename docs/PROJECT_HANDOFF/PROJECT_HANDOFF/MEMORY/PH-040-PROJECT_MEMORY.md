---
document_id: PH-040
title: Project Memory
version: 3.0
status: Approved
owner: Project Team
reviewer: Technical Lead
source_of_truth: true
phase: P3.0
sprint: P3.0.1
last_updated: 2026-07-10
---

# Project Memory

## patient-coordinator → coordinator
Reason: cleaner business language and fewer path/import issues. Do not revert.

## useHeroContent removed
Reason: dead hook after feature hook pattern stabilized. Do not recreate without reason.

## Section component renames
HeroSection, FounderSection, BookingSection, FAQSection were introduced to avoid duplicate filenames and improve searchability.

## Experiences paused
Reason: created too early and conflicted with locale requirements. Recreate later when needed.

## Repository Pattern deferred
Reason: not enough repeated content query use cases yet.
