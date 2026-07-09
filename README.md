# 🌏 Maiv Thoj Viet Lao Platform

> **International Medical & Beauty Concierge Platform**

Connecting international patients with trusted healthcare providers in Vietnam through multilingual communication, personalized coordination and unforgettable travel experiences.

---

<p align="center">

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38BDF8)
![Status](https://img.shields.io/badge/Status-Architecture_Freeze-success)

</p>

---

# ✨ Vision

Maiv Thoj Viet Lao Platform is **not a dental clinic website**.

It is an international patient journey platform that helps overseas patients discover trusted healthcare providers in Vietnam while enjoying a safe, comfortable and memorable travel experience.

Our goal is to remove every barrier between patients and high-quality healthcare through multilingual communication, personalized support and transparent information.

---

# 🎯 Project Goals

The platform aims to provide one seamless experience covering:

- International Patient Journey
- Dental Tourism
- Medical Tourism
- Beauty Tourism
- Travel Coordination
- Multilingual Communication
- Long-term Patient Relationship

---

# 🌍 Supported Languages

| Language | Status |
|-----------|--------|
| 🇺🇸 English | ✅ |
| 🇻🇳 Vietnamese | ✅ |
| 🇭🇲 Hmong | ✅ |
| 🇱🇦 Lao | ✅ |
| 🇹🇭 Thai | ✅ |

---

# ⭐ Core Features

## Patient Journey

- Treatment Consultation
- Personalized Treatment Plan
- Airport Pickup
- Hotel Arrangement
- Local Transportation
- Translation Support
- Aftercare

---

## Dental Services

- Dental Implants
- Smile Makeover
- Veneers
- Crowns
- Orthodontics

---

## Travel Experience

- Cultural Destinations
- Local Experiences
- Accommodation
- Transportation
- Food Recommendations

---

# 🏗 Technology Stack

| Category | Technology |
|-----------|------------|
| Framework | Next.js 16 |
| UI | React 19 |
| Language | TypeScript |
| Styling | TailwindCSS |
| Form | React Hook Form |
| Validation | Zod |
| Animation | Framer Motion |
| Email | Resend |

---

# 🧱 Architecture Overview

```text
                    User
                      │
                      ▼
             Next.js App Router
                      │
                      ▼
               Feature Layer
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
      Hero        Treatments    Booking
        │
        ▼
      Hook Layer
        │
        ▼
   Dictionary Layer
        │
        ▼
   Business Content
        │
        ▼
      Metadata
        │
        ▼
     React UI
```

---

# 📁 Project Structure

```text
app/
components/
content/
features/
hooks/
lib/
providers/
contexts/
types/
public/
docs/
scripts/
tests/
```

---

# 📖 Documentation

Developer documentation is available in the `/docs` directory.

```text
docs/

README

architecture/

conventions/

development/

roadmap/

decisions/
```

---

# 📚 Documentation Roadmap

| Document | Purpose |
|-----------|----------|
| README | Project Overview |
| ARCHITECTURE | System Architecture |
| FEATURE_STANDARD | Feature Development Standard |
| CONTENT_ARCHITECTURE | Content Layer |
| NAMING | Naming Convention |
| WORKFLOW | Development Workflow |
| ROADMAP | Product Roadmap |

---

# 🏛 Development Principles

The project follows several immutable principles.

## 1. Feature-based Architecture

Every business capability lives inside its own feature.

---

## 2. Dictionary First

All multilingual content comes from the Dictionary Layer.

No hardcoded multilingual text.

---

## 3. Business Content

Business content belongs to:

```text
content/
```

---

## 4. Metadata

Presentation metadata belongs to:

```text
feature/data/
```

---

## 5. Components

Components render UI only.

---

## 6. Hooks

Hooks prepare ViewModel.

---

## 7. No Hardcoded Business Copy

Business copy must never appear inside components.

---

## 8. Build First

Every Sprint ends with:

- ESLint PASS
- Build PASS

---

## 9. Documentation First

Architecture changes require documentation updates.

---

## 10. Simplicity

Simple solutions are preferred over clever implementations.

---

# 🚀 Development Workflow

```text
Audit

↓

Implement

↓

Lint

↓

Build

↓

Review

↓

Commit

↓

Push
```

---

# 📦 Current Status

## Architecture

✅ Completed

## Landing Platform

✅ Near Completion

## Documentation

🚧 In Progress

## Content Platform

⏳ Planned

## Booking Platform

⏳ Planned

---

# 🗺 Roadmap

```text
M1
Landing Platform
████████████████████

M2
Content Platform
░░░░░░░░░░░░░░░░░░░░

M3
Booking Platform
░░░░░░░░░░░░░░░░░░░░

M4
SEO & Marketing
░░░░░░░░░░░░░░░░░░░░

M5
Performance
░░░░░░░░░░░░░░░░░░░░

M6
Production Release
░░░░░░░░░░░░░░░░░░░░
```

---

# 🤝 Contributing

Before contributing:

- Read the documentation.
- Follow Feature Standard.
- Follow Naming Convention.
- Pass ESLint.
- Pass Build.

---

# 📄 License

Private Project.

All rights reserved.

---

# ❤️ Philosophy

We don't build pages.

We build experiences.

We don't build components.

We build reusable systems.

We don't build a clinic website.

We build an international healthcare platform.