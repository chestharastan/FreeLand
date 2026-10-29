# WEBSITE.md — PitStop Auto Care

> Create a rugged, approachable auto garage website whose flagship feature is a customer repair-tracking link, like tracking a delivery. Pair with `SYSTEM.md` for inspection/job cards, quote approvals, inventory and secure status transitions. No real garage or vehicles.

## Brand system and sitemap

**Brand:** PitStop Auto Care · **Tagline:** `Know where your car is, every step.` Palette safety orange `#F47B39`, charcoal `#22272A`, warm white `#FAFAF8`, steel gray `#77828A`. Clean industrial sans, generous cards, clear status badges and stepper. Include high-quality **fictional** vehicle repair images; do not show real license plates or repair warranties.

Header `Home · Services · How It Works · Track Repair · Maintenance Tips · About · Contact` | CTA `Book Service`, EN/ខ្មែរ toggle.

**Routes:** `/`, `/services`, `/services/[slug]`, `/how-it-works`, `/book`, `/track`, `/track/[secure-token]`, `/maintenance`, `/about`, `/faq`, `/contact`, `/my-vehicles` (authenticated sample customer portal).

**Footer:** `PitStop Auto Care` / `Clear updates. Confident repairs.` / `Services · Book a Visit · Track a Repair · FAQ · Contact` / `hello@pitstop.example` / `All garage, mechanic, vehicle, pricing and booking data is fictional.` / exact Thareah disclaimer.

## Home `/`

### Hero

![Mechanic inspecting an unbranded modern car in a clean fictional workshop](/images/garage/hero-workshop.webp)

Eyebrow `AUTO CARE WITHOUT THE GUESSWORK`; H1 `Your car's in the shop. You're still in the loop.` Body `From a simple oil change to a larger repair, our demo tracker shows you what's happening and what comes next.` Buttons `Book a demo service` -> `/book`; `Track a sample repair` -> `/track/demo`.

### Value strips

`Step-by-step repair updates` / `Review quotes before work starts` / `See photos and service history`.

### How it works teaser

![Phone showing fictional car repair status card](/images/garage/tracking-phone.webp)

H2 `No more wondering what's next.` Copy `Book a visit, let the workshop inspect your car and follow progress from check-in to ready-for-pickup.` Steps `Check in your vehicle` / `Review the quote` / `Get live progress updates` / `Collect with confidence`. Button `See the full process`.

### Our services

Heading `The right care for every mile.` Copy `From everyday maintenance to more involved work, start with the service you're looking for.` Preview cards `Oil & Filters`, `Brakes`, `Air Conditioning`, `Tyres`, `Engine Diagnostics`, `Body & Paint` with each linking detail.

### Customer trust (no fake reviews)

Heading `A clearer experience from start to finish.` Body `We built this fictional repair experience around three simple commitments: transparent quotes, timely updates and service notes you can find again.` Cards `Understand the work` — `Read itemized parts and labor before approving.` `Follow the progress` — `Know when a repair moves to its next stage.` `Keep your history` — `See past visits and upcoming maintenance in one place.`

### End banner

`Need a tune-up or a second look?` / `Start a demo service booking in a few easy steps.` / CTA `Book a visit`.

## Service catalogue `/services`

H1 `Good maintenance starts with clear choices.` Text `Explore illustrative services with starting demo prices. Final repair costs depend on inspection; no work is actually performed.`

| Service | Card/detail introductory copy | Sample starting USD | Typical demo estimate | Image |
|---|---|---:|---|---|
| Oil & Filter Service | `Refresh your engine's essentials with a routine maintenance check.` | $29 | 45–60m | `/images/garage/oil-service.webp` |
| Brake Inspection | `Understand brake wear before planning next steps.` | $15 | 30–45m | `/images/garage/brake-check.webp` |
| Air Conditioning Check | `Investigate weak cooling or unusual cabin smells.` | $20 | 45–60m | `/images/garage/ac-check.webp` |
| Tyre Check & Rotation | `Review tyre condition, tread and basic wear patterns.` | $18 | 30–45m | `/images/garage/tyre-rotation.webp` |
| Engine Diagnostics | `Start with a structured assessment of warning lights or performance issues.` | $25 | 60–90m | `/images/garage/diagnostics.webp` |
| Battery Check | `Check charging symptoms and discuss replacement options.` | $12 | 20–30m | `/images/garage/battery.webp` |
| Body & Paint Estimate | `Review visible damage and receive an itemized estimate.` | $0 consult demo | By appointment | `/images/garage/body-paint.webp` |

Each detail `/services/[slug]` contains photo, H1, `When to consider this service`, `What we check`, `What happens next`, `Starting demo price`, `Estimated time is not guaranteed`, CTA `Request demo booking`. Example Engine Diagnostics copy `Warning lights can have many causes. An actual technician needs to inspect the vehicle before suggesting a repair. This concept illustrates how that inspection and approval can be documented.`

## How It Works `/how-it-works`

![Mechanic photographing a fictional car inspection before repair](/images/garage/checkin-photo.webp)

H1 `A clear journey for you and your car.` Intro `Our six-step workflow gives every sample repair a story you can follow.`

1. **Received** — `Your car is checked in and its details are recorded.`
2. **Diagnosing** — `The technician inspects the reported concern and documents findings.`
3. **Waiting for Approval** — `Review each recommended part or labor item before work proceeds.`
4. **Repairing** — `Approved work is in progress. Check your status any time.`
5. **Quality Check** — `The repair moves to a final review before pickup.`
6. **Ready** — `Your vehicle is ready for collection and the sample invoice is available.`

Final CTA `Try a sample tracking page`. Note `Updates and notifications are simulations; timelines shown are not real service guarantees.`

## Booking `/book`

![Unbranded vehicle at fictional workshop check-in desk](/images/garage/booking.webp)

H1 `Tell us what your car needs.` Body `A short request helps our demo workshop prepare your visit.`

Fields and labels: `Your name / demo alias`, `Demo email`, `Vehicle make`, `Model`, `Model year`, `Vehicle plate` (optional, synthetic/sample only; use placeholder `DEMO-1234`), `Approximate mileage`, `Choose service`, `What have you noticed?` (max 500), `Preferred date/time`, optional `Upload sample photo` (no real vehicle/personal photos), `Booking notes`.

Button `Request demo appointment`; success `Your service request is in!` Text `Reference [code]. This is a simulated appointment; no garage has been contacted.` Button `Preview repair tracking` if seed job assigned.

## Tracking landing `/track` and detail `/track/[secure-token]`

![Phone with an orange-on-white progress bar for a sample vehicle repair](/images/garage/tracking-ui.webp)

Landing: H1 `No guessing. Just progress.` Lead `Use your private tracking link to follow the demo repair journey.` Input `Tracking reference or secure link` with explanation `For privacy, a reference alone is not enough to see personal repair details. Open the secure link from your demo confirmation.` Button `Open demo tracking example` links only seeded sample.

**Tracking detail page copy:** `Repair update for your [Year] [Make] [Model]` / `Job reference: PS-1042` / `Latest update: [date/time]` / status stepper (`Received → Diagnosing → Waiting for Approval → Repairing → Quality Check → Ready`).

Sections:
- `What we're working on` — `We have noted the issue you reported and are checking the next steps.`
- `Photos & notes` — show redacted synthetic arrival images with technician notes.
- `Quote items awaiting your decision` — `Review each recommended item before we proceed.` Example `Front brake pads — Parts $45 + Labor $20` and `Air filter — Parts $14 + Labor $7` (both **sample estimates**). Buttons per line `Approve` / `Decline` plus `Review details`.
- `Your itemized estimate` — totals by approved vs awaiting vs declined lines; dynamic.
- `Recent updates` — timeline with timestamp, icon, staff comment safe for customer.
- `Next step` — e.g., `We'll proceed with the items you've approved.` or `Your vehicle is ready for demo pickup.`

States: `Waiting for estimate`, `Action required`, `Repair in progress`, `Ready for pickup`. Invalid token `This private tracking link is unavailable or has expired.` Do **not** expose full plate, phone, photos or quotes without authorized token/login. For sample showcase use sanitized demo job data.

## Maintenance `/maintenance`

H1 `Stay a step ahead of your next service.` Intro `General maintenance reminders make it easier to plan, but your vehicle's manual and professional inspection should guide real work.` Editorial cards with images:

- `/images/garage/tips-oil.webp` `How to keep track of oil services` — `Record your mileage, date and recommended interval in your owner's manual.`
- `/images/garage/tips-tyres.webp` `Why tyre checks matter` — `Look for visible wear and seek expert advice if handling feels unusual.`
- `/images/garage/tips-ac.webp` `When your AC needs attention` — `Unusual odors or poor cooling are reasons to ask for an inspection.`

Disclaimer `These tips are general information, not vehicle-specific mechanical instructions.`

## About `/about`

![Fictional team of mechanics standing in a bright workshop](/images/garage/team.webp)

H1 `Good service deserves good communication.` Body `PitStop Auto Care is a fictional garage concept built around a simple belief: customers should know what's happening before, during and after work on their cars.` Subsections `Transparent estimates` / `Visible progress` / `Service history that stays organized`. CTA `See how tracking works`.

## FAQs/contact/customer history

FAQ:
- `How do I know the repair status?` `Open the secure private tracking link to see the latest sample updates.`
- `Can I approve part of a quote?` `Yes. You can approve or decline each quoted item independently.`
- `Will any work happen before I approve?` `The concept blocks repair work on items requiring authorization until approval is recorded.`
- `What if a part is unavailable?` `The status shows waiting-for-parts and a revised estimate if needed.`
- `Can I view service history?` `A signed-in demo account can view previous jobs for its associated synthetic vehicles.`
- `Is this a real repair company?` `No. It is a fictional portfolio demonstration.`

Contact page H1 `Let's make your next visit easier.` Fields `Demo name/email`, `Topic`, `Message`; simulated inbox success. `hello@pitstop.example`. `Our workshop location is illustrative; no public storefront exists.`

Customer portal `/my-vehicles`: H1 `Your garage, organized.` Tiles `My vehicles`, `Past visits`, `Next maintenance date`, `Unpaid sample invoices`; dynamic sample info, no plate-based anonymous lookup.

## Image direction and delivery

Create **all paths named above** with original or lawfully licensed photographs. Workshop hero 16:9, service thumbnails 3:2, repair/tracking process 4:3, staff 3:2, maintenance cards 3:2. Vehicles with **synthetic/obscured plates**, no manufacturer endorsement or real workshop logos; orange/charcoal details throughout. Tracking UI phone image should depict fake job info only. Each rendered `<Image>` gets the Markdown alt description or product-appropriate equivalent. Use locally stored optimized assets, not random hotlinks.

## Website acceptance

Full content; each card has imagery; public CTA paths work; tracking status and quotes are API-backed; sample plate protected; customer cannot access other jobs; booking forms validated; Khmer/mobile/accessibility and footer warning are implemented.
