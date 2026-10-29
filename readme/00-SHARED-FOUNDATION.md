# Shared Foundation — Seven Phnom Penh Concept Projects

> **Purpose:** This document is the implementation contract for an AI coding agent. Read it before any project-specific `WEBSITE.md` or `SYSTEM.md`. The seven brands are **fictional portfolio concepts**; do not present them as actual operating businesses.

## 1. Portfolio rules — mandatory

- Use the exact footer and case-study notice: **"Concept project by Thareah — fictional brand, not affiliated with any business."**
- Create original brand identity, copy, demo products, people, data and images. Do **not** reuse the names, logos, menu photos, portraits, testimonials, customer data or trademarks of the inspiration businesses mentioned in the source plan.
- All prices, schedules, opening hours, branches, packages, testimonials, contact information, professionals and results are **sample/demo only**. Prominently mark demo content in the app and the public booking/payment UI.
- No real payments. Display **"Demo payment — no money will be charged"** before any mock KHQR/ABA PayWay action. QR graphics must be non-payable placeholders; no live merchant credential or live QR payment payload.
- No real SMS, emails or Telegram messages to strangers. Notifications are logged to a simulated outbox unless the developer configures an opt-in test bot and an approved test account.
- No real medical, dental, student, guardian, vehicle or financial records. Seed clearly fictional test identities and reserved `.example` email addresses.
- Build functional demos, **not** only attractive landing-page mockups. Every described essential workflow must work end-to-end with a seeded PostgreSQL database.
- For public demos, issue distinct demo logins for owner, manager, staff and customer/guardian where applicable. Public demo roles must have limited permissions. Display a "Reset demo data" operation controlled by administrator/scheduled seed reset.

## 2. Technology and repo conventions

| Layer | Required approach |
|---|---|
| Web and dashboards | Next.js App Router, TypeScript strict mode, Tailwind CSS, shadcn/ui, React Hook Form and Zod |
| API | Python FastAPI, Pydantic v2, SQLAlchemy 2, Alembic migrations |
| Database | PostgreSQL 16+, transactional constraints, UTC timestamps; display Asia/Phnom_Penh timezone |
| Authentication | Short-lived JWT access + refresh-token rotation, httpOnly secure cookies for web; Argon2id password hashing |
| Authorization | Central policy layer + per-resource/branch scope; never trust role or branch passed from client |
| Localization | next-intl; Khmer and English for all projects, Chinese additionally for restaurant and dental websites |
| Realtime | Authenticated WebSocket or SSE with polling fallback; never send privileged payloads to public subscribers |
| Notifications | Telegram Bot API via adapter; demo notification outbox by default |
| Payment | Provider adapter with `mock` implementation; success only from a verified **mock server-side** callback |
| Media | Original/generated/licensed photos; optimize via Next Image; S3-compatible storage or local demo storage |
| PDF | Server-generated receipts, invoices, report cards or treatment plans as required |
| Deployment | Vercel frontend + Railway/Fly.io API/managed PostgreSQL; use secrets and separate staging configuration |
| Tests | Pytest for API, Playwright for core E2E, Vitest for non-trivial UI utilities |

Suggested mono-repo:

```text
project/
  apps/web/                   # Next.js public site + role-gated app pages
  apps/api/app/{api,auth,core,db,models,schemas,services,workers}/
  apps/api/alembic/
  packages/ui/                # optional shared React design primitives
  packages/i18n/              # locale strings and message keys
  assets/                     # original/local source image assets and licenses
  docs/{WEBSITE.md,SYSTEM.md,CASE_STUDY.md}
  scripts/{seed_demo.py,reset_demo.py}
  .env.example
  docker-compose.yml
  README.md
```

## 3. How to read and execute the specs

1. Read this foundation file, the chosen project `WEBSITE.md`, and its `SYSTEM.md` **in that order**.
2. Create working scaffold, run PostgreSQL in Docker, design database migrations, then seed reproducible demo data.
3. Implement website pages with **exact user-facing copy provided**; store copy in localization keys rather than inline JSX. Draft clear Khmer translations while keeping English source copy, and check fonts/line wrap manually. Restaurant and dental also require Chinese.
4. Build backend domain logic and permission checks **before** wiring admin buttons. Validate everything server-side, including availability, pricing, branch scope and status transitions.
5. Create UI screens and integrations, then end-to-end tests. All public CTAs must route to working pages or intentionally marked demo screens; no dead buttons.
6. Populate demo account guide, reset mechanism, setup instructions, sample screenshots, one-page case study, architecture diagram and a one-minute main-flow recording script.
7. In the final agent handoff, list completed requirements, files changed, test results, known gaps and exact setup/launch commands. Do not claim features work unless tested.

## 4. Shared design principles

- Responsive at 360, 768, 1024 and 1440px; keyboard navigable; WCAG AA contrast; focus indicators; image alt text; form labels; reduced-motion support.
- Do not depend on color alone to express booking, payment or check-in state.
- Khmer fonts: select a legible Khmer-friendly webfont with appropriate licensing. Pair with an English display and body font. Test mixed Khmer/Latin lines.
- Use **real named image assets**, referenced exactly in Markdown (e.g., `/images/cafe/home-hero.webp`). Image prompts below are briefs for the asset-generation or licensed-stock stage, **not** claims that an image is already embedded. Generate and store the file before considering a page done. Use `alt` text from the page spec. Never hotlink competitor photos.
- Provide loading, success, empty, expired-link, offline/retry, validation, 403 and 404 states for every workflow.
- Analytics must derive from real demo transaction rows, never fake hard-coded totals disconnected from the data model.
- All demo personally identifiable and sensitive content must be fake. Keep demo secrets out of GitHub; public demo roles should never be able to export sensitive collections.

## 5. Shared platform primitives (build once, reuse)

**Identity and audit:** `users`, `roles`, `user_role_assignments`, `sessions`, `audit_events`, `branches`, `branch_memberships` (adapt per product). Authenticate by email/username + password; Telegram login optional and must verify signed init data on the API; rotate/revoke sessions. Audit financial edits, access to protected records and state transitions.

**Payments:** `payments` with `id, payable_type, payable_id, amount_minor, currency, method, status, provider_ref, idempotency_key, created_at, verified_at`. For the demo, `POST /mock-payments/{id}/complete` works only with a signed test capability, not arbitrary unauthenticated clients. Never accept client-reported `paid=true`.

**Notifications:** an `outbox_notifications` table stores `channel, recipient_demo_id, template_key, payload, status, attempted_at`. User-facing preview in admin instead of actually sending. Retry safely with event deduplication.

**Media:** `media_assets` contains ownership, content type, size, storage key, alt text and license/source note. Check uploads for size/type, sanitize image processing, use signed upload/download for private documents.

**Scheduling:** store instants in UTC and branch timezone separately. Handle concurrent bookings with database locks and/or exclusion constraints; never rely solely on browser availability checks.

**Audit/security:** HTTPS; rate limit anonymous endpoints; CSRF protections when using cookie auth; CORS allowlists; input validation; least-privilege secrets; log redaction; deletion policy; database backup; server-side pagination; indexed filters.

## 6. Copy and image implementation policy

- Each website file provides full **English source copy**, demo catalogue values and image placements. It is not an instruction to fabricate real reviews, real branch addresses, real dentists or actual success statistics.
- Add a small site-wide top ribbon: **"Interactive portfolio demo · Fictional business · No real bookings or payments"**.
- Put this near booking/payment confirmation as a second visible reminder.
- For image generation, avoid misleading before/after medical or beauty claims; use illustrations or clearly labeled editorial examples.
- All sample data and prices may be localized for KHR/USD display. Configure an explicitly fictitious demo exchange rate for display conversion; always charge/record in one chosen transaction currency and store rate snapshots. Do not claim a current official exchange rate.

## 7. Cross-project delivery checklist

- [ ] Public pages completed, with authored copy and actual locally available image assets, plus mobile design.
- [ ] Every stated system role and permission checked by API tests.
- [ ] Happy paths and failure paths for core workflows pass Playwright E2E.
- [ ] Database migrations, seeds and reset command work on a clean DB.
- [ ] Mock payments and simulated Telegram notifications visibly marked as demo.
- [ ] `.env.example`, Docker Compose and README with one-command local startup.
- [ ] Owner/staff/customer demo credentials and scoped demo data.
- [ ] Accessible forms, responsive layout, localization keys (KM/EN; ZH when required).
- [ ] Screenshot-ready dashboards, architecture diagram, one-page case study, demo video script.
- [ ] Exact footer concept disclaimer on every public page and in case study.
