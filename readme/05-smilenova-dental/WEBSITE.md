# WEBSITE.md — SmileNova Dental Clinic

> A calm, trust-focused fictional dental clinic website with sample service pages, provider profiles, appointment booking and a **demo-only** patient portal. Admin chart, clinical records and billing must follow `SYSTEM.md`. No real diagnosis, treatment or patient data.

## Brand direction and navigation

**Brand:** SmileNova Dental Clinic · **Tagline:** `Gentle care, bright smiles.` Colors mint `#D5F2E9`, navy `#193C53`, white `#FFFFFF`, seafoam `#65B9A2`, soft gray `#EFF3F5`. Friendly authoritative, **not** exaggerated clinical claims. Warm but restrained medical editorial photography. Fonts accessible in English, Khmer and Chinese. No invented professional licenses, credentials, accreditations or clinical outcomes.

Routes: `/`, `/services`, `/services/[slug]`, `/dentists`, `/dentists/[slug]`, `/about`, `/patient-guide`, `/gallery`, `/book`, `/book/confirmation/[token]`, `/faq`, `/contact`, `/portal`.

Header: `Home · Dental Services · Our Team · Patient Guide · About · Contact` | `Book a Visit` | `EN · ខ្មែរ · 中文`. Sticky mobile `Book Visit` CTA.

Footer: `SmileNova Dental Clinic` / `Making room for a calmer dental experience.` / `Services · Team · Appointments · FAQ · Patient Guide` / `hello@smilenova.example` / `All care, provider, pricing, availability and case materials are fictional; this website is not a medical service.` / exact Thareah concept line.

## Home `/`

### Hero

![Friendly fictional dental staff welcoming an adult patient in a mint white clinic](/images/dental/hero-clinic.webp)

Eyebrow `A GENTLER DENTAL EXPERIENCE`; H1 `A comfortable visit starts with a conversation.` Body `Explore clear treatment information, meet our fictional care team and choose an appointment time with ease.` Primary `Book a demo visit`, secondary `Explore our services`.

### Why SmileNova

Heading `Care built around clarity and comfort.` Lead `Our concept puts the person behind the smile first, from booking to follow-up.` Cards: `Clear next steps` — `Know what to expect before your visit.`; `Thoughtful scheduling` — `Choose a convenient time and provider.`; `A calm setting` — `Designed to make visits feel approachable.`.

### Service preview

![Close view of clean, generic dental tools on a white counter](/images/dental/service-tools.webp)

H2 `From routine visits to long-term plans.` Text `Learn about common dental treatments with sample information and illustrative fee ranges.` Cards `Routine Cleaning`, `Fillings`, `Braces Consultation`, `Dental Implants`, `Teeth Whitening`, each link to respective detail. CTA `View all treatments`.

### Team teaser

![Two fictional dentists smiling in modern neutral clinic setting](/images/dental/team-group.webp)

H2 `People make care feel personal.` Copy `We imagine a friendly team that listens, explains options and makes space for your questions.` CTA `Meet the demo team`.

### Appointment explainer

H2 `Plan your visit in three easy steps.` Step 1 `Choose the reason for your visit.` Step 2 `Pick a dentist and a time.` Step 3 `Review your confirmation and arrival guidance.` CTA `See available times`.

### Closing banner

`Questions are welcome here.` / `Browse patient information or try our interactive booking experience.` / `Read the patient guide`.

## Services `/services` and detail `/services/[slug]`

H1 `Your guide to dental services.` Text `These are general descriptions and **sample price ranges**, not personal clinical advice or a real clinic's fees.`

| Service | Public description | Sample USD range | Sample duration | Image |
|---|---|---|---|---|
| Dental Checkup | `An examination and discussion of your oral health questions.` | $15–$30 | 30m | `/images/dental/checkup.webp` |
| Scaling & Polishing | `Routine cleaning to remove plaque and surface buildup.` | $25–$50 | 45m | `/images/dental/scaling.webp` |
| Tooth Filling | `A discussion and treatment of a cavity if clinically appropriate.` | $30–$85 | 60m | `/images/dental/filling.webp` |
| Root Canal Consultation | `Assessment and discussion of options for a painful or damaged tooth.` | $20–$40 consult | 45m | `/images/dental/root-canal.webp` |
| Orthodontic Consultation | `A conversation about alignment goals and potential treatment paths.` | $20–$45 consult | 45m | `/images/dental/orthodontics.webp` |
| Dental Implant Consultation | `Review of missing-tooth options and possible next steps.` | $25–$55 consult | 60m | `/images/dental/implant.webp` |
| Whitening Consultation | `Explore whether a cosmetic whitening approach may suit you.` | $15–$30 consult | 30m | `/images/dental/whitening.webp` |
| Simple Extraction Consultation | `A professional evaluation of possible extraction options.` | $20–$40 consult | 30m | `/images/dental/extraction.webp` |

Each detail page must contain consistent subsections **Overview / What to expect / How long might it take? / Indicative fees / After the appointment / Questions to ask / Book a consultation**. Distinguish **consultation price** from any later procedure cost. Example Scaling detail text: `A routine cleaning appointment may involve an examination, plaque removal and polishing. A qualified dental professional should explain which steps are appropriate based on a real examination.` Example braces detail: `Orthodontic treatment varies widely. A clinical assessment is needed before recommending any plan, timeline or cost.` Do not promise painlessness, outcomes or guaranteed treatment lengths.

A fixed information box: `Educational demonstration only. This website cannot diagnose conditions or provide emergency dental care. For urgent symptoms or significant pain, contact a licensed local dental professional or emergency service.`

## Team `/dentists` + profile

H1 `A friendly face for every visit.` Lead `Meet fictional team profiles created only to demonstrate appointment matching.` Profiles:

| Demo name | Role label | Profile copy | Portrait |
|---|---|---|---|
| Dr. Dara S. | General Dental Provider (fictional) | `Focused on conversations, clear explanations and routine care.` | `/images/dental/dentist-dara.webp` |
| Dr. Lina V. | Restorative Care Profile (fictional) | `Interested in collaborative treatment planning and patient comfort.` | `/images/dental/dentist-lina.webp` |
| Dr. Vichea K. | Orthodontic Consultation Profile (fictional) | `Helps patients understand possible alignment pathways.` | `/images/dental/dentist-vichea.webp` |

Do **not** invent universities, board qualifications, license numbers or factual affiliations. Team card button `View profile`, profile hero `Let's make your next visit easier to plan.` Data-driven `Services offered`, `Example availability`, CTA `Book with [name]`.

## About `/about`

![Sunlit fictional clinic reception with mint-green features](/images/dental/reception.webp)

H1 `A brighter approach to the everyday visit.` Text `SmileNova is a fictional dental service concept that explores how clearer information, easier scheduling and well-designed patient records can work together.` Values:
- `Listen first` — `Every question deserves time and attention.`
- `Explain clearly` — `Good decisions begin with understanding the options.`
- `Follow through` — `Thoughtful reminders and well-organized records help visits feel connected.`

CTA `Explore appointments`.

## Patient Guide `/patient-guide`

H1 `Feel ready for your visit.` Intro `Helpful planning information for this demo booking experience.`

- `Before your visit`: `Bring any relevant health information to discuss with a qualified practitioner. In this demo, never enter genuine medical details.`
- `Your first appointment`: `A sample appointment usually starts with a conversation about concerns and a clinical assessment in real-world practice.`
- `Treatment planning`: `A dentist should explain options, possible risks, costs and follow-up requirements before any actual procedure.`
- `Aftercare`: `Always rely on the instructions of your own licensed professional for real treatment aftercare.`
- `Privacy`: `Our portfolio demo uses synthetic records only. Do not submit real X-rays, personal health history or identifying details.`

## Gallery `/gallery`

![Clean editorial concept dental operatory with no real patients](/images/dental/operatory.webp)

H1 `See the space behind the idea.` Subtitle `These images are fictional studio illustrations, not photographs of a working practice or actual patient outcomes.` Grid `The Reception`, `A Calm Treatment Room`, `Thoughtful Details`, `A Friendly Team`. Optional before/after section must use **clearly illustrated hypothetical dental diagrams**, labeled `Illustration only — not a real patient's clinical result`, never misleading patient transformation photos.

## Online booking `/book`

![Fictional dental appointment room with chair and clean equipment](/images/dental/booking-room.webp)

H1 `Let's find a time for your visit.` Copy `Select a service, provider and convenient time. This books a fictional appointment only.`

Step 1 `What would you like help with?` — service selector and estimated duration.
Step 2 `Who would you like to see?` — dentist or `First available`, plus demo branch if more than one.
Step 3 `When works for you?` — calendar with backend-provided chair+dentist free slots; empty `No appointment is available for these choices. Try another day or provider.`
Step 4 `Your booking details` — fake alias, reserved/demo email, age group (`Adult` only default for public demo; minors require guardian workflow if implemented), optional non-sensitive note max 200; do not solicit health diagnoses or real records.
Step 5 `Review and confirm` — `No real clinic visit or Telegram message will be created.` / `Confirm demo appointment`.

Confirmation `Your demo visit is scheduled.` / `Reference [code] · [date/time] · [service] · [dentist]` / `View or cancel` / `Add to calendar`.

## Contact `/contact` and FAQs `/faq`

Contact H1 `Have a question?` Copy `Reach out through this simulated contact form. Please do not include real health information.` Fields `Name/Alias`, `Demo email`, `Topic`, `Message`, validation, success `Your message has been saved for the demo. No email was sent.` Sample address `Phnom Penh — example neighborhood only; no operating clinic`. Email `.example`.

FAQs:
1. `How do I book?` — `Choose a service, a dentist and one of the available demo time slots.`
2. `Can I change my visit?` — `Use the booking management link to reschedule or cancel.`
3. `Does the listed fee include treatment?` — `Not always. Consultation fees and treatment estimates are clearly separated and illustrative.`
4. `Is my clinical history safe to enter here?` — `Do not enter real health details. The demo uses only fabricated records.`
5. `Can the website diagnose me?` — `No. It is an educational software demonstration, not dental advice.`
6. `Do you accept KHQR?` — `Only a simulated KHQR checkout for demo invoices; no real money.`

## Patient portal copy `/portal`

Sign in: `Explore your demo patient record.` Banner `Synthetic medical data only.` Tiles `Next appointment`, `Visit history`, `Treatment plan`, `Invoices`, `Documents` (synthetic preview). Empty `No sample treatment plans yet.` Buttons `View sample record`, `See upcoming appointments`, `Download demo invoice`. **Never display actual patient data in the public site**.

## Image manifest

All referenced files in `/images/dental/` must be created as properly licensed fictional/non-identifiable scenes. Hero 16:9, clinical spaces 3:2, services 1:1, portraits 4:5; mint/white/navy, gentle natural light, real-world proportions. Photographs of actual patients, identifiable X-rays, real doctor logos or invented credentials are prohibited. For procedures that could imply patient conditions use tasteful **medical-style illustrations** not graphic clinical photos. Use alt from Markdown or `Illustration of [service] for fictional SmileNova clinic`.

## Done when

Full source copy and image placements render; booking actually validates provider + chair; portal authorized; every page displays demo warning; multilingual labels and content supported; no unsafe clinical assertions or fake credentials; accessibility/mobile/SEO verified.
