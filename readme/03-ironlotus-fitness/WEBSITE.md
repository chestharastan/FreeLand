# WEBSITE.md — IronLotus Fitness

> Build a bold six-branch gym website and companion member-facing Telegram mini-app screens. Actual membership, bookings and QR check-ins follow `SYSTEM.md`. All people, facilities, opening times and prices are fictitious.

## Brand + site design

**Name:** IronLotus Fitness · **Tagline:** `Train anywhere in the city.` **Personality:** energetic, focused, inclusive, modern, supportive rather than intimidating. Palette matte black `#141414`, lotus pink `#F04D85`, white `#FFFFFF`, slate `#353841`; oversized condensed English display font and legible Khmer companion. Photography should show a variety of adult fitness levels, not only bodybuilders. Use high contrast and accessible motion-reduced transitions.

**Website navigation:** `Home · Memberships · Branches · Classes · Trainers · Our Approach · FAQs` | primary `Start Your Journey`. Language EN | ខ្មែរ.

**Pages:** `/`, `/memberships`, `/branches`, `/branches/[slug]`, `/classes`, `/trainers`, `/about`, `/join`, `/faq`, `/contact`, `/member`, `/member/qr`, `/member/bookings`, `/member/billing`.

**Footer text:** `IRONLOTUS FITNESS` / `Move strong. Feel good. Show up as you are.` / `Find a Club · Membership Plans · Class Schedule · Join · Member Portal` / `Demo contact: hello@ironlotus.example` / `Six fictional branches; all plans, classes and benefits are sample data.` / exact Thareah disclaimer.

## Home `/`

### Hero

![Diverse adult gym members training in a dramatic fictional gym](/images/gym/hero-training.webp)

Eyebrow `STRONGER, ON YOUR TERMS`; H1 `Your city. Your pace. Your next level.`; body `One community. Six imagined training spaces. Whether you're finding your rhythm or chasing a new personal best, there's a place for you here.` CTA `Compare memberships` -> `/memberships`, secondary `Explore our clubs` -> `/branches`.

### Benefit strip

`Six convenient demo clubs` / `Flexible membership options` / `Classes that keep you moving` / `Check in with your phone`.

### Membership promo

![A gym member stretching near a rack of weights](/images/gym/strength-zone.webp)

H2 `Fitness that fits your life.` Text `Choose your home club or unlock access across the city. Switch routines, try a new class and keep showing up.` Buttons `See plans`, `How access works`.

### Training choices

Cards with original visuals:
- `/images/gym/zone-strength.webp` — **Strength** — `Build confidence with free weights and resistance training.`
- `/images/gym/zone-cardio.webp` — **Cardio** — `Find your own pace on machines built for every level.`
- `/images/gym/zone-class.webp` — **Group classes** — `Make time for movement with people who cheer you on.`
- `/images/gym/zone-pt.webp` — **Personal coaching** — `Focused support to help you train with intention.`

### How membership works

Title `From sign-up to first session in three steps.`
1. `Pick a membership` — `Select a duration and your access level.`
2. `Activate your demo plan` — `Complete simulated checkout and open your QR pass.`
3. `Show up and scan` — `Present your membership pass at your chosen demo branch.`

CTA `Get your pass` -> `/join`.

### Feature / classes

![Small adult fitness class doing coordinated exercises](/images/gym/group-class.webp)

H2 `Sweat together. Get stronger together.` Text `Explore strength, mobility and conditioning sessions designed for different goals. Reserve your spot before class begins.` CTA `Find a class` -> `/classes`.

### Closing

`Your strongest habit starts with showing up.` / `Take a look around, choose your plan and see how effortless fitness management can feel.` / CTA `Join the demo`.

## Memberships `/memberships`

H1 `A plan for every season of effort.` Intro `Transparent demo pricing, from a short boost to a full year of consistency. Nothing will be charged.` Show two selectable access tiers: **Home Club** / **All-Club**. Highlight `Most flexible` for all-club 6- or 12-month plan but do not manufacture popularity figures.

| Duration | Home Club demo USD | All-Club demo USD | Features |
|---|---:|---:|---|
| 1 month | $29 | $39 | Gym floor access, digital QR pass |
| 3 months | $79 | $109 | Floor access, QR, member class booking |
| 6 months | $149 | $209 | Same access + one demo plan-freeze allowance |
| 12 months | $269 | $379 | Same access + two demo plan-freeze allowances |

Cards include `Best for`, `Access locations`, `Valid for`, `What's included`, `Select plan`. Notes `All prices are illustrative, not a real purchase offer.` and `Class access is subject to available seats; premium personal training packages are separate.` FAQs under card: `Can I freeze my plan?` `Can I change branch?` `What happens when my plan expires?` with answers below.

### Join page `/join`

Step indicator `Plan → Your details → Demo payment → Your membership`. Fields name/alias, demo email, choose home branch, membership plan, accept demo terms. CTA `Continue to demo checkout`. Confirmation `Welcome to IronLotus.` `Your demo QR membership is ready.` Button `Open my QR pass`.

## Branches `/branches` and branch details

H1 `Six spaces. One training mindset.` Lead `Explore sample clubs across Phnom Penh. These are imagined locations, not real operating gyms.`

| Branch label | Teaser | Sample hours | Original image |
|---|---|---|---|
| BKK1 | `City-center energy and efficient workouts.` | 5:30–22:00 | `/images/gym/branch-bkk1.webp` |
| Toul Kork | `Room to focus, lift and unwind.` | 5:30–22:00 | `/images/gym/branch-toulkork.webp` |
| Sen Sok | `Wide training zones and lively classes.` | 6:00–22:00 | `/images/gym/branch-sensok.webp` |
| Chroy Changvar | `A relaxed training escape.` | 6:00–21:30 | `/images/gym/branch-chroychangvar.webp` |
| Russey Keo | `Practical fitness for everyday routines.` | 5:30–21:30 | `/images/gym/branch-russeykeo.webp` |
| Mean Chey | `A supportive space to keep moving.` | 6:00–22:00 | `/images/gym/branch-meanchey.webp` |

Each branch detail: image, brief text above, demo hours, `Equipment preview` (`Free weights`, `Cardio machines`, `Functional zone`, `Locker area`; adjust branch seed individually), 7-day scheduled classes sourced from API, trainers on roster, access label `Available on all-club plans; home-club plans only if selected here`, button `Make this my home club`, `View classes`. Do not pin fake gym addresses on public maps; show neighborhood area map or demo badge.

## Classes `/classes`

![Coach leading a small group in a light-filled studio](/images/gym/class-schedule.webp)

H1 `Find a class worth showing up for.` Intro `Choose a club, day or energy level and book your place in a sample group session.` Filters `Branch · Day · Type · Beginner-friendly`.

| Class | Description | Duration | Sample schedule | Capacity | Image |
|---|---|---|---|---:|---|
| Strength Basics | `Learn form, build confidence and lift steadily.` | 50 min | Mon/Wed 18:00 | 16 | `/images/gym/class-strength.webp` |
| Morning Mobility | `Move easier with a guided stretch and reset.` | 45 min | Tue/Thu 07:00 | 18 | `/images/gym/class-mobility.webp` |
| Lotus HIIT | `Intervals, energy and a good challenge.` | 40 min | Fri 18:30 | 14 | `/images/gym/class-hiit.webp` |
| Core & Balance | `Find control, posture and strength.` | 45 min | Sat 09:00 | 20 | `/images/gym/class-core.webp` |

Cards: `Seats left: [dynamic]`, `Book class` / `Join waitlist` / `Members only`. Confirmation `You're booked for [class] at [branch] on [date/time].`; cancellation `Your place has been released.`

## Trainers `/trainers`

H1 `Guidance makes a difference.` Intro `Meet fictional trainers who help our demo members move with confidence.`

| Demo identity | Role | Profile copy | Portrait asset |
|---|---|---|---|
| Dara S. | Strength Coach | `Dara enjoys helping beginners make strength training approachable.` | `/images/gym/trainer-dara.webp` |
| Lina K. | Mobility & Conditioning | `Lina builds upbeat sessions with a practical focus on movement.` | `/images/gym/trainer-lina.webp` |
| Vichea M. | Personal Trainer | `Vichea focuses on sustainable habits and progressive training.` | `/images/gym/trainer-vichea.webp` |
| Sreyneang P. | Group Fitness Coach | `Sreyneang's classes are energetic, supportive and welcoming.` | `/images/gym/trainer-sreyneang.webp` |

CTAs `Explore PT options`, `Browse class schedule`. PT sample package: `4 coaching sessions — $80 demo`, `8 sessions — $150 demo`. Do not claim medical/rehabilitation expertise.

## About `/about`

![Gym community smiling after a class](/images/gym/community.webp)

H1 `Progress belongs to everyone.` Text `IronLotus is an imagined citywide fitness community, built around one simple idea: consistency matters more than comparison.` Values `Show up` — `Every session counts.`; `Keep learning` — `Good coaching makes room for beginners.`; `Train together` — `Support makes effort feel easier.` CTA `Find your club`.

## Member portal and Telegram mini app copy

`/member`: `Good to see you, [demo name].` Cards `Plan: All-Club 3 Months`, `Days remaining`, `Your home club`, `Next class`, `Visits this month`. Buttons `Show QR Pass`, `Book a Class`, `Renew Plan`.

`/member/qr`: `Your IronLotus Pass` / dynamic expiry `Valid for [x] seconds` / `Show this code at reception. Do not share a screenshot.` / `Active` or `Expired — renew to access clubs.`

`/member/bookings`: `Upcoming classes` / `Cancel booking` / `Join waitlist` / `Past sessions`.

`/member/billing`: `Membership history` / `Next expiry` / `Freeze my plan` / `Renew` / demo-only payment notice.

## FAQ `/faq` and Contact `/contact`

- `Can I train at all six clubs?` `Yes with All-Club access; Home Club plans allow check-in only at your selected branch.`
- `What does a freeze do?` `An approved freeze temporarily pauses access and shifts your expiry according to the demo plan rules.`
- `Can I book a full class?` `You can join a waitlist and receive a simulated notification if a seat opens.`
- `Do I need my phone at check-in?` `The demo uses a short-lived QR pass in the member portal or Telegram mini app.`
- `Is personal training included?` `PT sessions are booked through a separate package.`
- `Is IronLotus a real gym?` `No. This is an interactive fictional portfolio concept.`

Contact heading `Questions before you start?` Body `Send us a note through the interactive demo.` Form name/email/topic/message; success `Your demo message has been saved.`

## Image production board

Asset ratios: hero 16:9 and 4:5 mobile; training zone/card imagery 3:2; six distinct fictional branch interiors 3:2; classes 3:2; trainer portraits 4:5; membership page subtle abstract lotus gradient permitted. Original athletic adult models, Cambodian-city-inspired setting without genuine signage, realistic form and inclusivity; do not add before/after weight-loss claims or fake endorsements. Paths listed on the pages are **required local assets**; descriptive Markdown image text is accessible alt guidance. Additional branch/class/trainer images use alt pattern `Fictional [subject] at IronLotus Fitness`.

## Website acceptance

No missing pages/images; exact copy present; price toggle changes selected plan and checkout; class remaining seats and waitlist come from API; QR portal responds to active/frozen/expired status; visible demo warning; mobile and Khmer UI tested.
