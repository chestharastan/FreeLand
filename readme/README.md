# Seven Fictional Business Websites + Systems — Agent-Ready Markdown Pack

Based on the provided **Portfolio Concept Projects Plan — Phnom Penh (Oct 27, 2026)**. Every project is a fictional portfolio demo, not a real business or a client engagement.

## Start here

1. Read [`00-SHARED-FOUNDATION.md`](00-SHARED-FOUNDATION.md).
2. Select **one** numbered project below.
3. Give the AI agent that project's **WEBSITE.md + SYSTEM.md**, along with the foundation file.
4. Ask it to implement and test that project before proceeding to the next. All seven are specified independently, not as a single unfinished mega-application.

| Order | Brand | Public website brief | Operational system brief | Key demonstration |
|---|---|---|---|---|
| 1 | Kafé Tonlé | [WEBSITE](01-kafe-tonle/WEBSITE.md) | [SYSTEM](01-kafe-tonle/SYSTEM.md) | QR ordering, realtime barista queue, loyalty |
| 2 | Phum Kitchen | [WEBSITE](02-phum-kitchen/WEBSITE.md) | [SYSTEM](02-phum-kitchen/SYSTEM.md) | Table reservations, POS, kitchen display |
| 3 | IronLotus Fitness | [WEBSITE](03-ironlotus-fitness/WEBSITE.md) | [SYSTEM](03-ironlotus-fitness/SYSTEM.md) | 6-branch memberships, QR check-in, mini app |
| 4 | Lumière Beauty House | [WEBSITE](04-lumiere-beauty-house/WEBSITE.md) | [SYSTEM](04-lumiere-beauty-house/SYSTEM.md) | Collision-safe booking, stylist calendar, commission |
| 5 | SmileNova Dental | [WEBSITE](05-smilenova-dental/WEBSITE.md) | [SYSTEM](05-smilenova-dental/SYSTEM.md) | Appointment + 32-tooth chart + treatments |
| 6 | PitStop Auto Care | [WEBSITE](06-pitstop-auto-care/WEBSITE.md) | [SYSTEM](06-pitstop-auto-care/SYSTEM.md) | Repair state machine, tracked quotes, parts |
| 7 | BrightBridge English Centre | [WEBSITE](07-brightbridge-english-centre/WEBSITE.md) | [SYSTEM](07-brightbridge-english-centre/SYSTEM.md) | Enrollment, attendance, fees, guardian portal |

## Recommended prompt to paste into your AI coding agent

```text
You are my senior full-stack implementation agent. Implement one complete portfolio concept using the attached 00-SHARED-FOUNDATION.md, WEBSITE.md, and SYSTEM.md.
Follow the brand, copy, image placements, user journeys, data model, APIs, permission rules, status transitions, test criteria, and demo-only constraints exactly.
Use Next.js + TypeScript + Tailwind + shadcn/ui, FastAPI + PostgreSQL + SQLAlchemy + Alembic. Build real working pages and real seeded backend operations, not a static prototype. Create original or properly licensed image assets at the exact image paths referenced in WEBSITE.md. Use fake data and clearly mark mock payment and Telegram previews.
Work phase by phase: scaffold -> DB/migrations/seed -> APIs + tests -> website -> dashboard/system -> integrations -> E2E -> deployment docs and case study. If ambiguities remain, pick the simplest safe implementation and document the choice; do not quietly omit features.
Deliver: working code, local setup commands, test report, demo logins, screenshots or screenshot instructions, and a checklist tracing each requirement to implementation.
```

## Image note

Website Markdown includes `![alt](/images/.../file.webp)` **asset destinations** and detailed original-image art direction. Those images are production tasks for the coding/design agent, not images that already exist inside this archive. The agent must create/license them and add them to the application.

## Scope note

The project specs add implementation defaults (e.g., sample prices, limits, state rules) beyond the short source plan to make them executable. All such defaults are illustrative and **not verified facts about Phnom Penh businesses**.
