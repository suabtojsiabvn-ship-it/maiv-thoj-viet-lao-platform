# Content Architecture

> Business Content Architecture of Maiv Thoj Viet Lao Platform

---

# Purpose

This document defines how business content is organized throughout the project.

The platform separates **business knowledge**, **multilingual content**, and **presentation metadata** into independent layers.

This separation keeps the project scalable, maintainable and translation-friendly.

---

# Core Principles

The Content Layer follows five immutable principles.

1. Business First
2. Dictionary First
3. Metadata Separation
4. No Hardcoded Business Copy
5. Single Source of Truth

---

# Content Architecture Overview

```text
                Business Knowledge
                       │
                       ▼
                 content/
                       │
         ┌─────────────┼─────────────┐
         ▼             ▼             ▼
     branding      people      treatments
         │
         ▼
      Dictionary
         │
         ▼
        Hook
         │
         ▼
     ViewModel
         │
         ▼
      Component
```

---

# Content Layers

The platform is divided into three content layers.

## Layer 1

Business Content

Location

```
content/
```

Contains

- Brand
- People
- Partners
- Treatments
- Stories
- FAQ
- SEO
- Contact
- Journey

Business owns this content.

---

## Layer 2

Dictionary

Location

```
content/locales/
```

Contains multilingual business copy.

Examples

```
en.ts

vi.ts

hmn.ts

lo.ts

th.ts
```

Dictionary is the only source of multilingual text.

---

## Layer 3

Presentation Metadata

Location

```
features/*/data/
```

Contains

- image
- icon
- slug
- order
- animation
- style

No business copy.

---

# Business Content

Business content represents knowledge.

Examples

```
Founder Story

Treatment Information

Patient Journey

Travel Information

Brand Story
```

Business content must not contain presentation logic.

---

# Dictionary

Dictionary transforms business content into localized text.

Example

```
Hero

↓

Title

↓

Subtitle

↓

CTA

↓

Statistics
```

Components never hardcode text.

---

# Metadata

Metadata controls presentation.

Allowed

```
image

icon

slug

order

background

layout
```

Not Allowed

```
title

description

quote

paragraph

button text
```

---

# Content Flow

```text
Business Team

↓

Content Layer

↓

Dictionary

↓

Hook

↓

React Component

↓

User
```

---

# Adding New Content

When adding a new business module:

Step 1

Create business content.

Step 2

Translate dictionary.

Step 3

Prepare metadata.

Step 4

Create ViewModel.

Step 5

Render component.

---

# Folder Structure

```
content/

branding/

people/

partners/

journey/

treatments/

stories/

faq/

seo/

locales/
```

---

# Responsibilities

Business Layer

Responsible for business knowledge.

Dictionary

Responsible for localization.

Metadata

Responsible for presentation.

Component

Responsible for rendering.

---

# Single Source of Truth

Business knowledge

↓

content/

Multilingual copy

↓

content/locales/

Presentation

↓

feature/data/

---

# Anti-patterns

❌ Business text inside React component.

❌ Business text inside feature/data.

❌ Translation inside component.

❌ Duplicate content across locales.

---

# Best Practices

✔ One source of truth.

✔ Keep business content reusable.

✔ Keep metadata lightweight.

✔ Keep dictionary consistent.

✔ Reuse content whenever possible.

---

# Checklist

Before merging content:

□ Added to content/

□ Added to all locales

□ Metadata updated

□ Hook updated

□ Build PASS

□ Lint PASS

---

# Related Documents

README.md

ARCHITECTURE.md

FEATURE_STANDARD.md

NAMING.md