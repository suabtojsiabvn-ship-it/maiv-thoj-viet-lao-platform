# PROJECT REFACTOR PLAN

Version: 1.0 Phoenix  
Status: ACTIVE  
Project: Maiv Thoj Viet Lao Platform v2  
Business Owner: A Sử (Txhim)  
Technical Lead: ChatGPT  
Last Updated: 2026-07-09

---

# Purpose

This document controls how the cloned v1 project will be transformed into Phoenix v2.

No files or folders should be deleted during the build phase unless they break the build.

Cleanup will happen only after v2 Feature Complete.

---

# Core Rule

Build first.

Clean later.

Do not delete legacy files during active development.

---

# Feature Folder Standard

Every active feature should follow this structure:

```text
feature-name/
│ index.ts
│ FeatureName.tsx
│
├── components/
├── hooks/
├── data/
├── types/
├── utils/
└── services/ optional