# WEBSITE.md — Kafé Tonlé

> **AI agent deliverable:** Build the complete public-facing multi-branch café website, menu catalogue, mobile QR ordering pages, loyalty pages and all specified copy and imagery. Pair with `SYSTEM.md` for operational behavior. Demo business only.

## Brand and experience

- Brand: **Kafé Tonlé** · tagline: **Coffee by the Mekong**.
- Story: a fictional three-branch urban coffee bar inspired by a slow riverside morning. Never claim a real riverside address.
- Palette: deep teal `#0D514F`, warm cream `#F8F3E8`, coffee brown `#734B36`, gold `#D8AD68`.
- Type: editorial display serif for headings + clean sans for body; Khmer-compatible fallback. Feel: welcoming, warm, fresh, premium without luxury pricing.
- Primary action: **Explore the menu**; secondary: **Order at your table**. Sticky mobile order bar on menu/detail views.
- Site-wide demo ribbon and exact footer disclaimer required by foundation.
- Pages: `/`, `/menu`, `/menu/[slug]`, `/locations`, `/locations/[branch]`, `/our-story`, `/contact`, `/order/[table-token]`, `/order/cart`, `/order/status/[order-code]`, `/rewards`, `/faq`.

## Shared shell — exact English content

**Logo wordmark:** KAFÉ TONLÉ · **Nav:** Home · Menu · Locations · Our Story · Rewards · Contact · **Header CTA:** View Menu. Language switch: EN | ខ្មែរ.

**Announcement ribbon:** `Good coffee, good company. Explore our café concept.`

**Footer columns:**
- `Kafé Tonlé` / `A little pause in your day, poured with care.`
- `Discover` / `Menu · Our Story · Rewards · FAQs`
- `Visit` / `Riverside · Toul Kork · BKK1` (all illustrative areas, not addresses)
- `Say hello` / `hello@kafetonle.example` (demo-only; no real mailbox)
- `Opening hours shown here are illustrative. Orders and payments are simulations.`
- `Concept project by Thareah — fictional brand, not affiliated with any business.`

## Page 1 — Home `/`

### Hero — photo on right, copy on left

![Barista pouring an iced coffee on a sunlit wood counter](/images/cafe/home-hero.webp)

- Eyebrow: `YOUR DAILY RITUAL, REIMAGINED`
- H1: `A good day begins with a better cup.`
- Body: `From the first rich espresso to the last sip of a bright iced latte, Kafé Tonlé makes space for the moments in between.`
- Primary CTA `Explore our menu` -> `/menu`; secondary `Find your café` -> `/locations`.
- Small caption beside image: `Freshly brewed. Thoughtfully served.`

### Trust/utility strip

Three short items: `Made when you order` / `Your way: ice, sugar and size` / `Three demo locations across Phnom Penh`.

### Signature drinks — horizontally scrollable cards

![Four original styled café drinks on a cream tabletop](/images/cafe/signature-lineup.webp)

Heading: `Meet your next favorite.` Body: `Familiar classics and playful Tonlé signatures, each ready to make your own.`

| Drink | Card description | Demo base price | Image |
|---|---|---:|---|
| Tonlé Iced Latte | `Silky espresso, chilled milk and a smooth finish.` | $3.25 | `/images/cafe/iced-latte.webp` |
| Mekong Caramel | `A bold espresso swirl with buttery caramel notes.` | $3.75 | `/images/cafe/mekong-caramel.webp` |
| Coconut Cloud | `Creamy coconut and coffee, refreshingly light.` | $3.95 | `/images/cafe/coconut-cloud.webp` |
| Citrus Cold Brew | `Slow-steeped coffee with a bright citrus lift.` | $3.50 | `/images/cafe/citrus-cold-brew.webp` |

Card button `See details`; section CTA `View full menu` -> `/menu`.

### How table ordering works — 3 illustrated steps

![Phone scanning a café table QR card](/images/cafe/qr-order-demo.webp)

Heading `Less waiting. More sipping.` Body `At a demo table, simply scan, customize and send your order.`

1. `Scan the table QR` — `No download or account needed.`
2. `Make it yours` — `Choose size, sweetness, ice and extras.`
3. `Follow your order` — `Watch it move from received to ready.`

CTA `Try demo table ordering` -> seeded `/order/demo-table-01`; label `Demo flow · no real order placed`.

### Lifestyle / story block

![Warm fictional café interior with teal accents and natural light](/images/cafe/interior-story.webp)

Heading `A little room to slow down.` Text `Some days call for a quiet corner; others for a table full of friends. We dreamed up Kafé Tonlé as an easygoing place for both.` CTA `Read our story`.

### Loyalty teaser

Heading `Your 10th drink is on us.` Text `Collect one stamp for each eligible paid drink. After nine stamps, redeem a free eligible drink on your tenth. Your reward stays in your account until used.` Button `How rewards work` -> `/rewards`.

### Final CTA

`Three neighborhoods. One great coffee break.` / `Explore sample branches and choose your favorite atmosphere.` / `See locations`.

## Page 2 — Menu `/menu`

- H1 `Something good is brewing.`; lead `Browse our demo menu. All prices and availability are illustrative and may vary by branch.`
- Filters: `All · Espresso · Iced Favorites · Non-Coffee · Tea · Bakery`; search placeholder `Find a drink or pastry...`; branch selector `Choose demo branch`; availability label `Available here` / `Sold out here`.
- Product grid with real image asset for each item, product name, short tasting note, sample price `USD` plus sample equivalent KHR using a configurable **demo conversion rate** (do not assume real FX), `Customize` button.

**Additional catalogue copy/data:**

| Category | Item | Description | Demo USD price | Image asset |
|---|---|---|---:|---|
| Espresso | Espresso Shot | `Intense and aromatic, served short.` | 2.00 | `/images/cafe/espresso.webp` |
| Espresso | Flat White | `Velvety microfoam, balanced and bold.` | 3.00 | `/images/cafe/flat-white.webp` |
| Iced Favorites | Brown Sugar Latte | `A mellow latte with a dark sugar finish.` | 3.65 | `/images/cafe/brown-sugar.webp` |
| Non-Coffee | Matcha Cream | `Earthy matcha lifted by a creamy finish.` | 3.75 | `/images/cafe/matcha.webp` |
| Tea | Lemongrass Tea | `Fragrant, soothing and gently citrusy.` | 2.60 | `/images/cafe/lemongrass-tea.webp` |
| Bakery | Butter Croissant | `Golden layers, buttery at the center.` | 2.40 | `/images/cafe/croissant.webp` |
| Bakery | Banana Bread | `Soft, cozy and lightly spiced.` | 2.50 | `/images/cafe/banana-bread.webp` |

Include the four signature drinks from Home. Empty result `No matches yet. Try another drink or category.`

## Page 3 — Product detail `/menu/[slug]`

![Close-up photograph of the selected menu item](/images/cafe/iced-latte.webp)

Example Tonlé Iced Latte:
- Breadcrumb `Menu / Iced Favorites / Tonlé Iced Latte`; H1 `Tonlé Iced Latte`.
- Description `Fresh espresso over milk and ice, blended for a smooth, easygoing cup.`
- Controls: `Size` Small (+$0), Regular (+$0.50), Large (+$1.00); `Sweetness` 0/25/50/75/100%; `Ice` 0/25/50/75/100%; `Milk` Dairy (+$0), Oat (+$0.60); `Extra espresso shot` (+$0.90); `Special instructions` max 180 chars; `Quantity` 1–20.
- Primary CTA `Add to demo order — $[calculated]`; secondary `Keep browsing`.
- Show branch-level sold-out and disable ordering appropriately. Display `Ingredients and allergen information are illustrative. Ask staff in a real café.`

## Page 4 — Locations `/locations` + `/locations/[branch]`

H1 `Your corner of the city.` Lead `Three imagined café spaces, each with its own rhythm. Locations and hours are examples for this portfolio.`

| Branch | Title | Card description | Illustrative hours | Image |
|---|---|---|---|---|
| Riverside | `Kafé Tonlé Riverside` | `For unhurried mornings and long conversations.` | 7:00 AM–9:00 PM | `/images/cafe/branch-riverside.webp` |
| Toul Kork | `Kafé Tonlé Toul Kork` | `A neighborhood pause between busy moments.` | 7:30 AM–9:30 PM | `/images/cafe/branch-toulkork.webp` |
| BKK1 | `Kafé Tonlé BKK1` | `Espresso breaks in the heart of the city.` | 7:00 AM–10:00 PM | `/images/cafe/branch-bkk1.webp` |

Branch detail sections: full-width photo, about this space, amenities (`Wi-Fi`, `Indoor seats`, `Takeaway` as sample), illustrative opening hours, menu availability, directions UI **disabled or labeled demo map area** unless pointing to a genuinely available public neighborhood map rather than a fictitious business pin. Button `Preview branch menu`.

## Page 5 — Our Story `/our-story`

![Hands preparing espresso near a sunlit window](/images/cafe/story-craft.webp)

- H1 `Coffee is better when it brings us together.`
- Lead `Kafé Tonlé is a fictional café concept built around simple ideas: thoughtful ingredients, friendly spaces and a cup made exactly how you like it.`
- Section `Inspired by the river` / `We imagine each branch as a place where the pace softens and conversations have time to grow.`
- Section `Made for your taste` / `Less sugar? More ice? Extra espresso? Small choices make the drink feel like yours.`
- Section `Designed for everyday convenience` / `Our QR ordering concept keeps the experience personal, while cutting down the wait between ordering and enjoying.`
- CTA `Find your next cup` -> `/menu`.

## Page 6 — Rewards `/rewards`

![Illustration of a nine-stamp progress card and free-drink badge](/images/cafe/reward-card.webp)

- H1 `Every cup gets you closer.`
- Copy `Sign in with a demo phone identity or an approved test Telegram account to keep your stamps in one place.`
- Steps: `1. Order and pay for an eligible drink. 2. Earn one stamp after the order is paid. 3. Collect nine stamps. 4. Claim your free eligible tenth drink.`
- Rules copy: `One stamp per paid eligible drink. Free drinks do not earn new stamps. Refunds reverse corresponding stamps. Rewards are account-bound and cannot be exchanged for cash. Demo only.`
- Signed-in example: `You have 6 of 9 stamps toward your next free drink.` / button `View reward history`.
- Guest state: `Save your progress for next time` / CTA `Create demo rewards account`.

## Page 7 — FAQs `/faq`, Contact `/contact`

FAQ entries:
1. **Do I need an app to order?** `No. Open the table QR link in your browser and you can order as a guest.`
2. **Can I change sugar and ice?** `Yes. Choose your preference on eligible drinks before adding them to your cart.`
3. **Can I pay with KHQR?** `This concept shows a simulated KHQR flow; it does not accept real payments.`
4. **Can I collect stamps without an account?** `You can order as a guest, but a linked demo rewards account is required to retain stamps.`
5. **What happens if a drink is sold out?** `The menu reflects availability at your selected demo branch.`

Contact page: H1 `Say hello.` Text `Questions about this concept? Send a demo message below.` Fields `Name`, `Email`, `Topic`, `Message`; button `Send demo message`; success `Message saved in the demo inbox. No email was sent.` Use `hello@kafetonle.example` as nonfunctional illustrative address.

## Page 8 — QR ordering and tracking copy

`/order/[table-token]`: `Welcome to Kafé Tonlé [branch]` / `Table [number]` / `Order at your own pace.` For invalid QR: `This table link isn't available. Please ask the demo café staff for a new code.`

Cart: H1 `Your order`; lines `Add a note`, `Edit`, `Remove`, `Quantity`, `Subtotal`, `Demo tax/fees` (if implemented show actual rules), `Total`, `Checkout`. Empty: `Your cup is waiting. Add something delicious from the menu.`

Checkout: `How would you like to pay?` -> `Mock KHQR` / `Cash at counter`. Optional `Name for order`, `Rewards identity`. Before mock QR: `Demo payment — no money will be charged.` Confirmation: `Order KT-1042 received!` / `We'll update the status as your drink is prepared.` / `Track order`.

Tracking: `Received → Preparing → Ready → Collected`; `Your order is being made.`; `It's ready! Please collect it at the counter.`; `Thanks for visiting.` Status polling/realtime fallback. Never claim to deliver to a real branch.

## Original image production manifest

Generate, photograph under license or otherwise lawfully source each exact path before release. Use original cups with generic fictional wordmark, no third-party logos, no text embedded except optional subtle brand mark. Consistent warm daylight, deep-teal/cream sets, editorial food photography, responsive crops with focal subjects protected. Create every item image in catalog, plus:

| Asset | Ratio | Precise art direction / required alt |
|---|---|---|
| `home-hero.webp` | 4:5 | Authentic barista hand pouring espresso/iced milk in fictional café; **alt:** `Barista finishing an iced coffee in a warm café` |
| `signature-lineup.webp` | 16:9 | Four coffee drinks, natural table textures; **alt:** `Selection of four iced signature café drinks` |
| `qr-order-demo.webp` | 4:3 | Hand scanning a **fake** table QR with phone; no readable payment QR; **alt:** `Customer scanning a demo table ordering QR code` |
| `interior-story.webp` | 3:2 | Fictional sunlit deep-teal café, plants and shared seating; **alt:** `Welcoming café interior with daylight and comfortable seats` |
| `story-craft.webp` | 3:2 | Hands at espresso station; **alt:** `Barista carefully preparing a coffee` |
| `reward-card.webp` | 3:2 | Branded illustrated nine-stamp card; **alt:** `Illustrated progress toward a free tenth drink` |
| `branch-*.webp` | 3:2 | Three **distinct fictional interiors**, no recognizable real storefront; alt by branch |
| Catalogue `*.webp` | 1:1 | One realistic hero shot per listed product on branded neutral background; alt equals product name plus drink/food type |

## Website acceptance criteria

- All routes render and navigation resolves; every listing/detail reflects branch-specific sold-out state from the API.
- Copy above is present; no lorem ipsum, missing image, fake testimony or dead CTA.
- QR demo guest can order and track a real seeded order via API and mock checkout.
- Rewards view accurately reflects paid order events; footer/demo notice appears everywhere.
- Meets mobile, keyboard, performance, empty/error-state and localization criteria in foundation.
