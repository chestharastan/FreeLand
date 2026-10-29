# WEBSITE.md — Lumière Beauty House

> Create a refined salon/spa marketing website with complete service catalogue, specialist portfolios, before/after **editorial mockups**, multi-service booking and the customer Telegram mini-app. Use `SYSTEM.md` for conflict-safe scheduling and commissions. Fictional business only.

## Visual identity and global structure

**Name** Lumière Beauty House · **Tagline** `Your glow, booked in 30 seconds.` Palette blush `#F7E5E4`, champagne gold `#C9A46A`, ink `#242123`, pearl `#FFFDF9`, muted rose `#B87F85`. Elegant serif display, restrained motion, roomy typography, welcoming authentic portraiture. Buttons rounded but not overly playful. **Locales:** Khmer / English.

**Global nav:** `Home · Services · Our Artists · Gallery · Locations · Gift Cards · About` | standout `Book Appointment`. **Routes:** `/`, `/services`, `/services/[slug]`, `/artists`, `/artists/[slug]`, `/gallery`, `/locations`, `/gift-cards`, `/about`, `/book`, `/booking/[manage-token]`, `/contact`, `/faq`, `/my-bookings` (mini-app webview).

**Footer:** `Beauty is a moment you make for yourself.` / `Our Services · Stylists · Branches · Booking · Gift Cards` / `hello@lumierebeauty.example` / `All salons, staff, treatments, prices and imagery are fictional demo content.` / exact Thareah concept footer.

## Home `/`

### Hero

![Soft editorial portrait of an adult with natural styled hair in a fictional salon](/images/salon/hero-portrait.webp)

Eyebrow `BEAUTY, AT YOUR OWN PACE`; H1 `A little time for you looks beautiful.`; body `Beautiful hair, thoughtful beauty rituals and the artists who make every appointment feel personal.`; primary `Book your moment` -> `/book`, secondary `Explore services` -> `/services`.

### Value row

`Easy appointment booking` — `Choose your branch and favorite artist.` / `A service for every moment` — `Hair, nails, skin and more.` / `Your style, your way` — `Thoughtful treatments designed around you.`

### Services preview

H2 `How would you like to feel today?` Paragraph `Discover everyday refreshes and special-occasion looks.` Four cards, each with image and CTA `Discover [category]`:

- Hair — `/images/salon/service-hair.webp` — `Fresh cuts, signature color and nourishing treatments.`
- Nails — `/images/salon/service-nails.webp` — `Small details that make a big difference.`
- Skin — `/images/salon/service-facial.webp` — `Slow down with a calming facial ritual.`
- Lashes — `/images/salon/service-lashes.webp` — `A little definition with a naturally polished finish.`

### Studio feature

![Warm blush-and-gold fictional beauty studio with mirrors](/images/salon/studio.webp)

H2 `A space made for your next exhale.` Body `Our imagined studios blend calm interiors, expert attention and small moments of luxury—without the fuss.` CTA `Explore our locations`.

### Artist spotlight

![Fictional stylist working on hair in a salon](/images/salon/artist-at-work.webp)

H2 `The hands behind your favorite look.` Body `Meet the creative people who listen first and style second.` CTA `Meet our artists`.

### Booking CTA

H2 `Your next appointment is a few taps away.` Body `Select a service, choose a convenient time and leave the calendar to us.` CTA `Book a demo appointment` + notice `No real appointment or deposit will be created.`

## Services listing `/services` and detail `/services/[slug]`

H1 `Your beauty menu.` Lead `Find a service that fits your day. Durations and prices are illustrative; booking availability comes from our demo calendar.` Search placeholder `Find a treatment...` Filters `All · Hair · Nails · Facials · Lashes · Waxing`.

| Service | Sales copy | Duration | Demo USD | Image |
|---|---|---:|---:|---|
| Signature Haircut & Style | `A flattering cut with an easy, polished finish.` | 60m | $24 | `/images/salon/haircut.webp` |
| Gloss & Color Refresh | `Refresh your tone and rediscover your shine.` | 120m | $65 | `/images/salon/color.webp` |
| Deep Conditioning Ritual | `A relaxing treatment for hair that feels cared for.` | 45m | $30 | `/images/salon/conditioning.webp` |
| Classic Manicure | `Neat shaping, careful cuticle work and your color of choice.` | 45m | $18 | `/images/salon/manicure.webp` |
| Gel Manicure | `A glossy, long-wear look with a detailed finish.` | 60m | $27 | `/images/salon/gel.webp` |
| Signature Facial | `A gentle, restorative skincare experience.` | 75m | $48 | `/images/salon/facial.webp` |
| Lash Lift | `Lift and define your natural lashes.` | 60m | $42 | `/images/salon/lash-lift.webp` |
| Brow Shaping | `A clean, natural frame for your features.` | 25m | $15 | `/images/salon/brows.webp` |
| Underarm Wax | `A quick and attentive service with clear aftercare guidance.` | 20m | $16 | `/images/salon/wax.webp` |

Each service detail: full-bleed photograph, intro, `What's included` (consultation, demo process, finishing/aftercare advice), service duration, starting price, whether patch consultation may be required, `Best for` in generic non-medical terms, optional related services, button `Book this service`. Example for Gloss & Color: `A considered refresh that adds richness and shine. Your stylist talks through color preferences before beginning.` Safety/disclaimer `Services, outcomes and allergy information are illustrative; real service providers must assess suitability and perform safety checks.`

## Artists `/artists` + detail

H1 `Artists who understand your vision.` Body `Thoughtful conversations and skillful details are at the heart of the Lumière experience.`

| Name (invented) | Specialty | Bio copy | Photo |
|---|---|---|---|
| Sopheak L. | Senior Hair Stylist | `Loves modern cuts, everyday ease and hair that moves naturally.` | `/images/salon/stylist-sopheak.webp` |
| Nita C. | Color Artist | `Enjoys creating balanced tones and personalized style plans.` | `/images/salon/stylist-nita.webp` |
| Maly R. | Nail Artist | `Believes the smallest details can change a whole look.` | `/images/salon/stylist-maly.webp` |
| Dara V. | Facial & Brow Artist | `Creates calm appointments with attention to individual preferences.` | `/images/salon/stylist-dara.webp` |

Profile page includes cover portrait, specialty list, fictional portfolio, home branch, next free bookable slots from API, `Book with [name]`. All biographies are fictional and should not imply licensed credentials.

## Gallery `/gallery`

H1 `Find your inspiration.` Lead `A collection of editorial concept looks—not real client results.` Filters `Hair · Color · Nails · Skin · Studio`. Galleries use art-directed standalone pictures (see image manifest); before/after paired images should be labeled `Concept style study — not a real treatment result` and not imply medical outcomes. Captions `Soft dimensional color`, `Clean nail details`, `Fresh layered cut`, `Minimal everyday lashes`, `The studio mood`.

## Booking `/book` — complete visible copy

![Salon booking experience shown next to a clean vanity scene](/images/salon/booking-scene.webp)

H1 `Make room for your moment.` Intro `Five simple steps, and your sample appointment is in the calendar.` Progress bar `Services → Branch → Artist → Time → Confirm`.

1. **Services:** `What are you booking today?` Choose one or more compatible services. Chips show durations and demo prices; summary `Estimated total: $[amount] · [duration] minutes`.
2. **Branch:** `Where would you like to visit?` Choose `BKK1`, `Toul Kork` or `Sen Sok` (fictional spaces). Each includes image and selected services offered.
3. **Artist:** `Anyone available` or specific staff card, expertise and `Next availability`.
4. **Time:** `Pick a moment that suits you.` Calendar date + available slots, not hard-coded. Empty state `We're fully booked then. Choose another artist, branch or day.`
5. **Confirm:** `Almost there.` Name, demo email, optional opt-in Telegram test identity, notes max 300, policies acknowledgment, optional mock deposit for long services (>=120 min). Button `Confirm demo booking`.

Success `It's a date!` / `Your appointment [ref] is reserved for [date] at [branch].` / `Manage booking` / `Add to calendar` (generate ICS using sample booking data).

Manage booking `/booking/[manage-token]`: `Your appointment details`, `Reschedule`, `Cancel`, `Deposit status`, `Changes depend on the booking policy and available slots.` Invalid/expired link: `This booking link is no longer valid. Sign in to the demo portal or contact the demo reception.`

## Locations `/locations`

| Branch | Description | Demo hours | Image |
|---|---|---|---|
| Lumière BKK1 | `Your bright city-center refresh.` | 9:00–20:00 | `/images/salon/branch-bkk1.webp` |
| Lumière Toul Kork | `Relaxed appointments in a warm studio.` | 9:00–20:00 | `/images/salon/branch-toulkork.webp` |
| Lumière Sen Sok | `A spacious pause in your day.` | 10:00–21:00 | `/images/salon/branch-sensok.webp` |

H1 `Your favorite space, closer than you think.` Mark all areas **fictional and approximate**, show generic neighborhood map preview only, cards with `View services` and `Book here`.

## Gift cards `/gift-cards`

![Blush gift envelope with minimal gold salon typography](/images/salon/gift-card.webp)

H1 `Give someone a little glow.` Text `A thoughtful gift for birthdays, celebrations or simply because.` Demo denominations `$25, $50, $100`, select and mock purchase, then display a **sample, nonredeemable outside demo** gift code and balance. Redemption logic in system spec. CTA `Create a demo gift card`.

## About, FAQ and Contact

`/about`: H1 `Beauty feels better when it's personal.` Body `Lumière Beauty House is a fictional idea for appointments that are simple to book and lovely to experience.` Sections `Listen first` / `Make time for detail` / `Leave feeling like yourself`. Supporting image `/images/salon/studio.webp`.

FAQ: `Can I choose a stylist?` → `Yes, or choose anyone available for more options.` `Can I combine services?` → `Yes; the booking calendar calculates the combined time and required staff.` `Is a deposit required?` → `Long appointments may show a simulated deposit. No real payment is taken.` `How can I reschedule?` → `Use your booking management link, subject to available times.` `Do gift cards work outside this demo?` → `No. All gift cards shown are fictional.`

Contact heading `We're here for your questions.` Form `Name / Demo email / Subject / Message` with saved-in-demo confirmation. Email `hello@lumierebeauty.example`.

## Image production checklist

Create each listed path as an original or licensed asset. Hero/artist portraits 4:5, services 1:1 or 3:2, interiors 16:9, before/after *illustrative concept* pairs 1:1, gift card 3:2. Warm natural lighting, rich texture, diverse adult representation and fictional non-identifiable studios. Alt comes from descriptive Markdown labels or `Service [name] editorial concept photograph`. Avoid appropriating real salon client galleries, fake testimonials, unsupported medical results or copyrighted marks.

## Acceptance

Every user-facing string above exists; filters work; multi-service selection updates durations/prices; artist and date availability reflects backend; manage booking works; images generated at paths; responsive/localized/fake disclaimers are visible.
