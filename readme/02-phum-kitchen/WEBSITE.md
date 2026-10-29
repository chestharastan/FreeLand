# WEBSITE.md — Phum Kitchen

> **Goal:** A vivid Khmer restaurant website with full menu and dish-detail copy, multilingual structure, live booking interface and a design-led story. Everything, including menu, history and premises, is fictional. Operational rules are in `SYSTEM.md`.

## Brand foundation

**Name:** Phum Kitchen · **Tagline:** `Grandma's Khmer recipes, in the city.` **Voice:** warm, generous, sensory; celebrate Cambodian food without claiming historical recipes from a real family. Colors terracotta `#B85A40`, palm green `#315B48`, off-white `#F8F3EA`, charcoal `#2E302B`; subtle original geometric textile accents, not copied temple motifs. Display serif for English, friendly Khmer font. Languages **English, Khmer, Chinese** via translated locale files (English below is canonical). Primary CTA `Reserve a Table`; secondary `Explore the Menu`.

**Routes:** `/`, `/menu`, `/menu/[slug]`, `/our-kitchen`, `/gallery`, `/reserve`, `/private-dining`, `/visit`, `/faq`, `/contact`, `/reservation/[confirmation-token]`.

**Header:** `Home · Menu · Our Story · Gallery · Private Dining · Visit` | `Reserve a Table` | `EN · ខ្មែរ · 中文`.

**Footer:** `Phum Kitchen — a place to gather over Khmer flavors.` / `Menu · Book a Table · Private Dining · FAQ` / `Sample location: Phnom Penh, Cambodia (no real restaurant address)` / `hello@phumkitchen.example` / `All menus, prices, pictures, stories and reservations are fictional for this interactive demo.` / exact Thareah disclaimer.

## Home `/`

### Hero

![Generous Khmer dining table with shared plates and banana-leaf details](/images/restaurant/home-feast.webp)

- Eyebrow `A TABLE SET FOR TOGETHERNESS`
- H1 `Come hungry. Leave with stories.`
- Supporting line `From fragrant soups to comforting wok favorites, our imagined village kitchen brings the spirit of a Khmer family table into the city.`
- Buttons `Reserve a Table` -> `/reserve` and `Explore Our Menu` -> `/menu`.
- Image microcaption `Made to share, served with heart.`

### Our promise

Heading `Food that feels like home.` Text `The best meals aren't rushed. They're shared between friends, family and everyone who pulls up a chair. At Phum Kitchen, that's the feeling behind every plate.` Three cards `Cooked with care` / `Made for sharing` / `Rooted in Khmer flavors` with one-line captions respectively `Thoughtful preparation and familiar ingredients.` / `Generous dishes for everyone at the table.` / `A modern tribute to beloved Cambodian flavors.`

### Featured plates

![Close-up top-down scene of classic Khmer-inspired demo dishes](/images/restaurant/featured-plates.webp)

Heading `Favorites worth gathering for.` Intro `Start with these house-inspired favorites, then discover the whole table.` Cards:

| Dish | Menu teaser | Demo USD | Image |
|---|---|---:|---|
| Fish Amok | `Silky coconut curry, fragrant herbs and steamed rice.` | 8.50 | `/images/restaurant/fish-amok.webp` |
| Beef Lok Lak | `Peppery wok-seared beef, tangy dip and fresh salad.` | 9.50 | `/images/restaurant/lok-lak.webp` |
| Samlor Korko | `Comforting countryside-style vegetable stew.` | 7.75 | `/images/restaurant/samlor-korko.webp` |
| Green Mango Salad | `Crisp, bright and just a little fiery.` | 5.50 | `/images/restaurant/mango-salad.webp` |

CTA `See all dishes`.

### Family table / story

![Hands passing platters around a warm dining table](/images/restaurant/shared-table.webp)

Heading `Every seat belongs at our table.` Text `Inspired by memories of long lunches and favorite family dishes, Phum Kitchen is a fictional home for gathering, discovering and sharing Khmer food.` CTA `Step inside our story` -> `/our-kitchen`.

### Reservation teaser

Heading `Make time for a meal together.` Body `A weeknight dinner, a family lunch or a celebration with a group—find a table that fits the occasion.` Buttons `Book your table`, `See private dining`.

### Gallery / final banner

![Warm terracotta-and-green fictional Khmer restaurant interior](/images/restaurant/interior-wide.webp)

Overlay `A warm welcome is always on the menu.` / `Explore our space` -> `/gallery`.

## Menu `/menu`

Heading `Good food, shared well.` Intro `Explore a fictional Khmer-inspired menu. All prices, portions and ingredients are sample content.` Filters `Starters · Soups · Khmer Classics · Grill & Wok · Vegetarian · Desserts · Drinks`; search `Search a dish...`; dietary legend `Vegetarian option / Contains nuts / Contains seafood / Spicy`. Do not assume labels guarantee allergen safety.

| Category | Dish | User-facing description | Demo USD | Spice | Allergen note | Image |
|---|---|---|---:|---|---|---|
| Starters | Green Mango Salad | `Fresh mango, herbs, toasted crunch and a lively dressing.` | 5.50 | Medium | May contain peanuts/fish sauce | `/images/restaurant/mango-salad.webp` |
| Starters | Crispy Vegetable Rolls | `Golden rolls with herbs and a bright dipping sauce.` | 4.75 | Mild | Contains wheat | `/images/restaurant/veg-rolls.webp` |
| Soups | Samlor Korko | `A hearty bowl of vegetables and warming Khmer seasoning.` | 7.75 | Mild | Ask staff | `/images/restaurant/samlor-korko.webp` |
| Soups | Sour Fish Soup | `A light, tangy broth with herbs and fresh vegetables.` | 8.25 | Medium | Contains fish | `/images/restaurant/sour-fish-soup.webp` |
| Khmer Classics | Fish Amok | `Delicate fish, coconut cream and aromatic spices.` | 8.50 | Mild | Fish, coconut | `/images/restaurant/fish-amok.webp` |
| Khmer Classics | Beef Lok Lak | `Tender beef with pepper-lime sauce and crisp greens.` | 9.50 | Mild | Soy may be present | `/images/restaurant/lok-lak.webp` |
| Grill & Wok | Lemongrass Grilled Chicken | `Smoky chicken with fragrant herbs and steamed rice.` | 8.75 | Mild | Ask staff | `/images/restaurant/grilled-chicken.webp` |
| Vegetarian | Morning Glory with Garlic | `Fresh green vegetables, tossed in a garlicky wok sauce.` | 5.75 | Mild | Soy may be present | `/images/restaurant/morning-glory.webp` |
| Desserts | Palm Sugar Sticky Rice | `Soft sticky rice with coconut and sweet palm notes.` | 4.25 | None | Coconut | `/images/restaurant/sticky-rice.webp` |
| Drinks | Iced Lemongrass Cooler | `A chilled herbal sip with a citrus finish.` | 2.75 | None | None listed | `/images/restaurant/lemongrass-drink.webp` |

Menu detail `/menu/[slug]`: large photo, breadcrumbs, title, full description, spice meter `Not spicy / Gentle / Medium / Hot`, ingredients (demo), `Possible allergens`, `Pairs well with`, portion size, tag `Available for dine-in`, link `Reserve to try this dish` -> `/reserve`. Example Fish Amok: `Wrapped in fragrance and comfort, our Fish Amok brings coconut, kroeung-inspired herbs and tender fish together in an imagined family favorite.` **Disclaimer:** `Allergen details are demo examples and not suitable for real dietary decisions.`

## Our Kitchen `/our-kitchen`

![Fictional cook stirring herbs over a clay-toned counter](/images/restaurant/kitchen-craft.webp)

H1 `Our table has room for everyone.` Lead `Phum means village. In our imagined kitchen, that spirit comes to life through generous plates and an open invitation to share.` Section `The inspiration` / `Long meals, family stories and comforting Khmer cooking inspire this fictional restaurant concept.` Section `The flavors` / `Bright herbs, balancing sourness, warming aromatics and a little fire when you want it.` Section `The experience` / `A welcoming place for quick lunches, unhurried dinners and happy occasions.` CTA `Find your table`.

## Gallery `/gallery`

H1 `A glimpse of Phum.` Lead `Food, laughter and little details that make a gathering memorable.` Grid captions: `The feast begins` (`/images/restaurant/featured-plates.webp`), `Room for a long lunch` (`interior-wide.webp`), `From our imaginary kitchen` (`kitchen-craft.webp`), `A dish to remember` (`fish-amok.webp`), `Together tastes better` (`shared-table.webp`). Click opens accessible lightbox with captions.

## Reservations `/reserve`

![Softly lit booth and dining table in fictional restaurant](/images/restaurant/reservation-scene.webp)

- H1 `Your table is waiting.` Text `Choose a date, time and party size. We'll find a suitable demo table for your visit.`
- Inputs `Date`, `Time`, `Guests` (1–16), `Seating preference` (`Any · Indoor · Outdoor · Private room`), `Occasion` (`None · Birthday · Family dinner · Business meal`), `Name`, `Email`, `Telegram demo contact (optional)`, `Special requests` (max 250).
- Live availability cards `6:00 PM · Available`, `6:30 PM · Limited`, `7:00 PM · Full` should always come **from backend**, not static assumptions. If full: `No table at this time. Try a nearby slot or join the demo waitlist.`
- CTA `Confirm demo reservation`; inline disclosure `No real restaurant reservation or message will be created outside this demo.`
- Success `You're on the guest list!` / `Reservation [reference] · [date/time] · [guests]` / `View confirmation` / `Reschedule or cancel`.

## Private Dining `/private-dining`

![Elegant fictional small private dining room set for a group](/images/restaurant/private-room.webp)

H1 `Big moments deserve a shared table.` Body `Celebrate together in a cozy private space, with flexible sample set menus for your group.` Cards `Family celebration` / `Team gathering` / `Small ceremony`. Sample packages: `The Village Table — $18 per person, suggested 6+ guests`, `The Celebration Table — $26 per person, suggested 8+ guests`, each flagged `Illustrative packages only`. CTA `Request group reservation` -> `/reserve?type=private` prefill. Text `For larger parties, we'll show an inquiry request rather than promise immediate availability.`

## Visit `/visit`, FAQ, Contact

`/visit`: H1 `Find the feeling of home.` Text `This is a fictional Phnom Penh restaurant; no real location exists. Explore the sample interior and see how map and opening-hours sections would look on a live site.` Demo hours Mon–Sun 11:00–21:30. Show **neighborhood map placeholder, not fabricated business pin**, link `Reserve a table`.

FAQ:
- `Do you accept walk-ins?` → `The concept supports both reservations and walk-in seating through staff tools.`
- `Can I book a private room?` → `Yes. Choose Private room; available slots depend on room capacity.`
- `What if my group size changes?` → `Use the reservation management link. We recheck availability before confirming changes.`
- `Do you offer vegetarian choices?` → `Yes, sample vegetarian dishes are listed. Real allergen and preparation details would require staff confirmation.`
- `Is this a real restaurant?` → `No. Phum Kitchen is a fictional interactive portfolio concept.`

Contact: heading `Let's talk about your table.` Text `Have a question about the demo? Write a note.` Form `Name, Email, Subject, Message`; saved demo inbox success message. Reserved email `hello@phumkitchen.example`.

## Image manifest and placement rules

All assets must be generated or properly licensed original-looking photography of *fictional people and environments*; no use of actual inspiration restaurants' photos. Generate every dish shown in menu to its designated path. Main assets: `home-feast.webp` 16:9 overhead communal food feast; `featured-plates.webp` 3:2 styled dishes; `shared-table.webp` 3:2 hands at table; `interior-wide.webp` 16:9 warm terracotta + palm green restaurant; `kitchen-craft.webp` 3:2 hands handling herbs; `reservation-scene.webp` 4:3 romantic but warm seating; `private-room.webp` 3:2 elegant private room. **Alt text:** use the descriptive subject from each image Markdown tag. Dish images 1:1, `alt="[dish name] plated in Khmer-inspired style"`. Crop hero art for mobile separately if necessary; no false medical/health/nutrition claims.

## Website done when

All page copy and demo assets exist; multilingual menus and UI switches work; booking results come from availability service; table reservation management is functional; all CTA flows navigate; keyboard, responsive and demo disclaimers pass checks. Maintain source file copy in CMS/content constants, not scattered JSX.
