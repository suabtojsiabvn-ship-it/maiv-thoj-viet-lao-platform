# Architecture

> Technical Architecture of Maiv Thoj Viet Lao Platform

---

# Purpose

This document defines the overall software architecture of the project.

Every new feature, component and module must follow the architecture described here.

If an architectural decision changes, this document must be updated together with an ADR (Architecture Decision Record).

---

# Design Goals

The architecture is designed around five principles.

1. Scalability
2. Maintainability
3. Reusability
4. Internationalization
5. Separation of Concerns

---

# High-Level Architecture

```text
                    User
                      │
                      ▼
              Next.js App Router
                      │
                      ▼
               Feature Layer
                      │
      ┌───────────────┼───────────────┐
      ▼               ▼               ▼
    Hero         Treatments      Booking
      │
      ▼
      Hooks
      │
      ▼
Dictionary Layer
      │
      ▼
 Business Content
      │
      ▼
 Presentation Metadata
      │
      ▼
     React UI
```

---

# Layer Responsibilities

## App Layer

Location

```
app/
```

Responsibilities

- Routing
- Layout
- Metadata
- Locale
- API Routes

Must NOT contain

- Business Logic
- Feature Logic

---

## Feature Layer

Location

```
features/
```

Responsibilities

Each feature represents one business capability.

Examples

- Hero
- Founder
- Coordinator
- Journey
- Booking

Each feature is independent.

---

## Hook Layer

Responsibilities

Hooks prepare ViewModel for UI.

Example

```
useHero()

↓

Dictionary

↓

Metadata

↓

ViewModel
```

Hooks should never render JSX.

Hooks should not contain UI.

---

## Dictionary Layer

Responsibilities

Provide multilingual business content.

Location

```
content/locales/
```

Supported

- EN
- VI
- HMN
- LO
- TH

Dictionary is the single source of multilingual content.

---

## Business Content Layer

Location

```
content/
```

Responsibilities

Business knowledge.

Examples

- People
- Treatments
- Partners
- FAQ
- SEO

No presentation logic.

---

## Metadata Layer

Location

```
feature/data/
```

Responsibilities

Presentation only.

Examples

- icon
- image
- slug
- order

Must NOT contain

- title
- description
- quote

---

## UI Layer

Location

```
components/
```

Responsibilities

Reusable UI Components.

Examples

- Button
- Card
- Container
- Section

Must not contain business logic.

---

# Feature Architecture

Every feature follows the same structure.

```text
feature-name/

Feature.tsx

index.ts

components/

hooks/

types/

data/

services/

schema/
```

Services and schema are optional.

---

# Feature Lifecycle

```text
Business Requirement

↓

Dictionary

↓

Metadata

↓

Hook

↓

Section

↓

Page
```

---

# Data Flow

```text
Dictionary

↓

Hook

↓

ViewModel

↓

Component

↓

UI
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

React
```

---

# Folder Responsibilities

| Folder | Responsibility |
|----------|----------------|
| app | Routing |
| components | Shared UI |
| content | Business Data |
| features | Business Modules |
| hooks | Shared Hooks |
| lib | Utilities |
| docs | Documentation |
| public | Assets |

---

# Internationalization

Every multilingual string belongs to Dictionary.

Components never contain multilingual copy.

---

# Naming

See:

```
docs/conventions/NAMING.md
```

---

# Coding Standards

See:

```
docs/conventions/
```

---

# Architecture Principles

The project follows these immutable rules.

## Feature First

Business capability first.

---

## Dictionary First

Business text first.

---

## Metadata Only

Presentation data only.

---

## Component Purity

Components render.

Nothing more.

---

## Hook Responsibility

Hooks prepare data.

---

## Documentation

Documentation is part of the architecture.

---

# Architecture Freeze

Current Version

```
v1.0
```

Architecture changes require

- ADR
- Documentation Update
- Team Review

---

# Related Documents

README.md

FEATURE_STANDARD.md

CONTENT_ARCHITECTURE.md

NAMING.md

ADR