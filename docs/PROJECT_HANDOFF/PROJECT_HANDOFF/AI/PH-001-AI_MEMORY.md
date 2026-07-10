---
document_id: PH-001
title: AI Memory
version: 3.0
status: Approved
owner: Project Team
reviewer: Technical Lead
source_of_truth: true
phase: P3.0
sprint: P3.0.1
last_updated: 2026-07-10
---

# AI Memory

## Purpose
This is the first file every AI must read before helping with the project.

## Project Identity
- Project: Maiv Thoj Viet Lao Platform
- Type: International Medical Tourism Platform
- Primary focus: Hmong international patients first, then broader international market
- Core partner: An Nhien Dental, Hà Nội
- Core product: Dental tourism / medical concierge / patient journey platform
- Tech stack: Next.js 16, React 19, TypeScript, Tailwind, App Router

## What This Project Is Not
- Not just a dental clinic website.
- Not just a landing page.
- Not a generic travel website.
- Not a demo project.

## What This Project Is
A long-term multilingual international patient journey platform connecting overseas patients with trusted medical, dental, beauty and travel support in Vietnam.

## Team Roles
- Maiv Thoj: Community Advisor / International Ambassador / Hmong community trust bridge.
- A Sử (Txhim): International Patient Journey Manager.
- Dr. Toàn Nguyễn: Clinical Director / An Nhien Dental.
- An Nhien Dental: Clinical partner.

## Architecture Lock
Do not change these without a new ADR:
- Feature-based architecture.
- Dictionary First.
- Content Layer owns business content.
- `feature/data` contains metadata only.
- Hook creates ViewModel.
- Component only renders.
- Shared UI components.
- Shared Content Components.
- One Sprint = One Goal.

## AI Must Never
- Never hardcode multilingual business copy.
- Never guess file structure.
- Never rename features without explicit approval.
- Never introduce repository/CMS abstractions too early.
- Never mark a module done if only architecture is done.
- Never continue a sprint when build is red.
- Never skip lint/build verification.

## AI Must Always
- Ask for missing files when needed.
- Give full file when modifying a file.
- Keep build green and lint green.
- Be honest about uncertainty.
- Separate Architecture Complete from Feature Complete, Localization Complete, SEO Complete, and Production Ready.

## Current State Summary
- M1 Foundation: complete and pushed.
- M2.1 Content Foundation: PASS.
- M2.2 Patient Stories Content Model: PASS.
- M2.3 Patient Stories Landing Feature: PASS.
- M2.4 Shared Content Components: PASS.
- Current documentation phase: P3.0 Engineering Bible.
- Next technical sprint after P3.0: M2.5 Story Detail Page.

## Boot Sequence
1. Read this file.
2. Read Executive Summary.
3. Read Current Status.
4. Read Module Status.
5. Read Language Matrix.
6. Read Next Sprint.
7. Only then start implementation.
