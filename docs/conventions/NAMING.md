# Naming Convention

> Naming Standards for Maiv Thoj Viet Lao Platform

---

# Purpose

This document defines naming conventions across the entire project.

A consistent naming strategy makes the codebase predictable, searchable and easier to maintain.

---

# Core Principles

1. Be descriptive.
2. Be consistent.
3. Prefer business terms.
4. Avoid abbreviations.
5. One concept → one name.

---

# Folder Naming

Folders use **kebab-case**.

✅ Good

```
hero
founder
clinical-partner
patient-stories
travel-guide
```

❌ Bad

```
Hero
HeroSection
heroSection
Hero_Section
```

---

# Feature Naming

Feature folders represent business capabilities.

```
hero
founder
booking
journey
coordinator
```

Avoid implementation names.

❌

```
home-banner
section-1
page-top
```

---

# Entry Point

Every feature exposes one entry point.

```
Hero.tsx

Founder.tsx

Coordinator.tsx

Booking.tsx
```

Responsibilities

- Export feature
- No business logic

---

# Root Component

The root component ends with **Section**.

Examples

```
HeroSection.tsx

FounderSection.tsx

CoordinatorSection.tsx

BookingSection.tsx

FAQSection.tsx
```

---

# Child Components

Use descriptive names.

```
HeroContent.tsx

HeroImage.tsx

HeroStats.tsx

HeroActions.tsx

HeroHighlights.tsx
```

Avoid

```
HeroItem.tsx

HeroPart.tsx

HeroBox.tsx
```

unless they truly represent those concepts.

---

# Hook Naming

Hooks always start with `use`.

```
useHero()

useBooking()

useFounder()

useJourney()
```

Avoid

```
useHeroContent()

useBookingSection()
```

unless there is a clear need.

---

# Type Naming

Interfaces and types must describe the business concept.

Examples

```
HeroViewModel

BookingFormData

CoordinatorService

FounderStatistic
```

Avoid

```
Data

Info

Object

Item
```

---

# Data Naming

Metadata files use feature-based names.

```
hero-meta.ts

booking-meta.ts

journey-meta.ts
```

Avoid

```
data.ts

content.ts

info.ts
```

---

# Dictionary Keys

Use stable semantic names.

Good

```ts
hero.title
hero.subtitle
hero.actions.primary
booking.form.name
```

Bad

```ts
title1
text2
buttonA
```

---

# Image Naming

Use lowercase + kebab-case.

```
hero-main.webp

doctor-toan.webp

airport-pickup.webp

before-after-01.webp
```

Avoid

```
IMG_1234.JPG

Final.jpg

new-image.png
```

Source images may keep original names, but production assets should be renamed.

---

# Constant Naming

Constants

```ts
const MAX_UPLOAD_SIZE = ...

const DEFAULT_LOCALE = ...
```

---

# Enum Naming

```
BookingStatus

JourneyType

LanguageCode
```

Enum members

```ts
Pending

Confirmed

Cancelled
```

---

# Component Props

```
HeroSectionProps

BookingFormProps

CoordinatorImageProps
```

---

# CSS Class Naming

Prefer Tailwind utility classes.

Do not introduce custom naming conventions unless necessary.

---

# Route Naming

```
/en

/vi

/hmn

/booking

/treatments
```

Use lowercase.

---

# File Extensions

```
*.tsx

*.ts

*.md
```

No mixed extensions.

---

# Anti-patterns

❌ Hero2.tsx

❌ NewHero.tsx

❌ HeroCopy.tsx

❌ temp.ts

❌ final-final.ts

---

# Refactoring Rule

When renaming:

1. Rename file.
2. Rename exported component.
3. Update entry point.
4. Update imports.
5. Run ESLint.
6. Run Build.

---

# Naming Checklist

Before committing:

□ File names follow convention.

□ Folder names use kebab-case.

□ Components end with proper suffix.

□ Hooks start with use.

□ Types are descriptive.

□ Images renamed.

□ Imports updated.

□ Build PASS.

□ Lint PASS.

---

# Related Documents

README.md

ARCHITECTURE.md

FEATURE_STANDARD.md

CONTENT_ARCHITECTURE.md