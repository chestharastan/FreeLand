"""Regenerate the FULL MENU section of index.html from the catalogue below and splice it in.
Also refreshes public/media-manifest.json and the slot table in public/images/cafe/README.md."""
from __future__ import annotations

import json
import pathlib
import re
from html import escape

SITE = pathlib.Path(__file__).resolve().parents[1]

CATEGORIES = [
    ("espresso", "Espresso", "Pulled fresh on the demo bar and served hot."),
    ("iced", "Iced Favorites", "Cold, bright and built for a Phnom Penh afternoon."),
    ("noncoffee", "Non-Coffee", "Creamy, fruity and caffeine-light picks."),
    ("tea", "Tea", "Fragrant leaves and herbs, hot or over ice."),
    ("bakery", "Bakery", "Baked in small batches each demo morning."),
]

# slug, name, cat, price, desc, image slot, alt, tags, flags(new/signature), soldout branches
ITEMS = [
    ("espresso-shot", "Espresso Shot", "espresso", 2.00, "Intense and aromatic, served short.", "espresso", "Espresso Shot coffee", ["Hot", "Double shot option", "+1 stamp"], [], ""),
    ("americano", "Americano", "espresso", 2.50, "Espresso lengthened with hot water, clean and bold.", "americano", "Americano black coffee", ["Hot", "Black coffee", "+1 stamp"], ["new"], ""),
    ("flat-white", "Flat White", "espresso", 3.00, "Velvety microfoam, balanced and bold.", "flat-white", "Flat White coffee", ["Hot", "Oat milk option", "+1 stamp"], [], ""),
    ("cappuccino", "Cappuccino", "espresso", 3.00, "Espresso under a thick cap of airy foam.", "cappuccino", "Cappuccino coffee", ["Hot", "Cocoa dust", "+1 stamp"], ["new"], ""),
    ("mocha", "Mocha", "espresso", 3.50, "Espresso, dark chocolate and steamed milk.", "mocha", "Mocha coffee", ["Hot", "Whipped top", "+1 stamp"], ["new"], ""),

    ("tonle-iced-latte", "Tonlé Iced Latte", "iced", 3.25, "Silky espresso, chilled milk and a smooth finish.", "iced-latte", "Tonlé Iced Latte iced coffee", ["Iced", "Oat milk option", "+1 stamp"], ["signature"], ""),
    ("mekong-caramel", "Mekong Caramel", "iced", 3.75, "A bold espresso swirl with buttery caramel notes.", "mekong-caramel", "Mekong Caramel iced coffee", ["Iced", "Caramel drizzle", "+1 stamp"], ["signature"], ""),
    ("coconut-cloud", "Coconut Cloud", "iced", 3.95, "Creamy coconut and coffee, refreshingly light.", "coconut-cloud", "Coconut Cloud iced coffee", ["Iced", "Dairy-free", "+1 stamp"], ["signature"], "BKK"),
    ("citrus-cold-brew", "Citrus Cold Brew", "iced", 3.50, "Slow-steeped coffee with a bright citrus lift.", "citrus-cold-brew", "Citrus Cold Brew iced coffee", ["Iced", "No milk", "+1 stamp"], ["signature"], ""),
    ("brown-sugar-latte", "Brown Sugar Latte", "iced", 3.65, "A mellow latte with a dark sugar finish.", "brown-sugar", "Brown Sugar Latte iced coffee", ["Iced", "Sweet", "+1 stamp"], [], ""),
    ("iced-americano", "Iced Americano", "iced", 2.75, "Double espresso over ice, bright and refreshing.", "iced-americano", "Iced Americano coffee", ["Iced", "Black coffee", "+1 stamp"], ["new"], ""),
    ("palm-sugar-latte", "Palm Sugar Latte", "iced", 3.85, "Espresso and cold milk with a caramelly palm-sugar swirl.", "palm-sugar-latte", "Palm Sugar Latte iced coffee", ["Iced", "Local palm sugar", "+1 stamp"], ["new"], ""),

    ("matcha-cream", "Matcha Cream", "noncoffee", 3.75, "Earthy matcha lifted by a creamy finish.", "matcha", "Matcha Cream drink", ["Iced", "Oat milk option", "+1 stamp"], [], ""),
    ("iced-chocolate", "Iced Chocolate", "noncoffee", 3.50, "Rich cocoa, cold milk and a whipped top.", "iced-chocolate", "Iced Chocolate drink", ["Iced", "Kids' favourite", "+1 stamp"], ["new"], ""),
    ("strawberry-milk", "Strawberry Milk", "noncoffee", 3.40, "Fresh strawberry purée swirled into cold milk.", "strawberry-milk", "Strawberry Milk drink", ["Iced", "Caffeine-free", "+1 stamp"], ["new"], ""),
    ("mango-smoothie", "Mango Smoothie", "noncoffee", 3.95, "Ripe mango blended with yogurt and ice.", "mango-smoothie", "Mango Smoothie drink", ["Blended", "Real fruit", "+1 stamp"], ["new"], ""),

    ("lemongrass-tea", "Lemongrass Tea", "tea", 2.60, "Fragrant, soothing and gently citrusy.", "lemongrass-tea", "Lemongrass Tea", ["Hot or iced", "Caffeine-free", "+1 stamp"], [], ""),
    ("jasmine-green-tea", "Jasmine Green Tea", "tea", 2.50, "Fragrant jasmine green tea, hot or over ice.", "jasmine-green-tea", "Jasmine Green Tea", ["Hot or iced", "Light caffeine", "+1 stamp"], ["new"], ""),
    ("passion-fruit-iced-tea", "Passion Fruit Iced Tea", "tea", 3.20, "Black tea with tangy passion fruit, lime and mint.", "passion-fruit-tea", "Passion Fruit Iced Tea", ["Iced", "Real fruit", "+1 stamp"], ["new"], ""),

    ("butter-croissant", "Butter Croissant", "bakery", 2.40, "Golden layers, buttery at the center.", "croissant", "Butter Croissant pastry", ["Baked daily", "Vegetarian"], [], ""),
    ("banana-bread", "Banana Bread", "bakery", 2.50, "Soft, cozy and lightly spiced.", "banana-bread", "Banana Bread pastry", ["Baked daily", "Contains nuts"], [], ""),
    ("cinnamon-roll", "Cinnamon Roll", "bakery", 2.90, "Soft, swirled and glazed while warm.", "cinnamon-roll", "Cinnamon Roll pastry", ["Served warm", "Vegetarian"], ["new"], ""),
    ("chocolate-chip-cookie", "Chocolate Chip Cookie", "bakery", 1.80, "Chewy centre, crisp edges, melty chocolate chips.", "choc-chip-cookie", "Chocolate Chip Cookie", ["Baked daily", "Vegetarian"], ["new"], ""),
    ("pandan-coconut-cake", "Pandan Coconut Cake", "bakery", 2.70, "Fluffy green pandan sponge with toasted coconut.", "pandan-cake", "Pandan Coconut Cake slice", ["Local flavour", "Vegetarian"], ["new"], "TK"),
]

NOTE_DRINK = "Customize size, sweetness, ice, milk and extras, then add to a demo order."
NOTE_BAKERY = "Add to a demo order."


def item_html(it) -> str:
    slug, name, cat, price, desc, slot, alt, tags, flags, soldout = it
    badges = "".join(
        f'<span class="badge badge--{f}">{"New" if f == "new" else "Signature"}</span>' for f in flags
    )
    badges_html = f'<span class="badges" aria-label="{", ".join("New" if f == "new" else "Signature" for f in flags)}">{badges}</span>' if badges else ""
    tags_html = "".join(f"<li>{escape(t)}</li>" for t in tags)
    new_attr = ' data-new=""' if "new" in flags else ""
    note = NOTE_BAKERY if cat == "bakery" else NOTE_DRINK
    return f"""          <li class="item" data-cat="{cat}" data-name="{escape(name)}" data-tags="{escape(' '.join(tags))}"{new_attr} data-soldout="{soldout}">
            <figure class="ph" data-slot="{slot}" data-src="/images/cafe/{slot}.webp" data-alt="{escape(alt)}" style="--ratio: 1 / 1"><figcaption class="ph__label"><span class="ph__slot">{slot}.webp</span><span class="ph__meta">1:1</span></figcaption></figure>
            {badges_html}
            <div class="item__body"><h3>{escape(name)}</h3><p>{escape(desc)}</p>
              <ul class="item__tags" aria-label="Details">{tags_html}</ul>
              <div class="item__row"><span class="price" data-usd="{price:.2f}">${price:.2f}</span><span class="khr caption" data-usd="{price:.2f}"></span><span class="avail">Available here</span></div>
              <a class="btn btn--ghost btn--sm" href="/menu/{slug}" data-route="{escape(name)}" data-route-note="{note}">Customize</a></div>
          </li>"""


def section_html() -> str:
    total = len(ITEMS)
    new_n = sum(1 for it in ITEMS if "new" in it[8])
    counts = {c[0]: sum(1 for it in ITEMS if it[2] == c[0]) for c in CATEGORIES}
    chips = [f'<button type="button" class="chip is-active" data-cat="all" aria-pressed="true">All <span class="chip__n">{total}</span></button>']
    for key, label, _ in CATEGORIES:
        chips.append(f'<button type="button" class="chip" data-cat="{key}" aria-pressed="false">{label} <span class="chip__n">{counts[key]}</span></button>')
    chips.append(f'<button type="button" class="chip chip--new" data-cat="new" aria-pressed="false">New <span class="chip__n">{new_n}</span></button>')
    cats = []
    for key, label, blurb in CATEGORIES:
        rows = "\n".join(item_html(it) for it in ITEMS if it[2] == key)
        cats.append(f"""        <section class="menucat" data-cat="{key}" aria-labelledby="menucat-{key}">
          <header class="menucat__head">
            <h3 class="display display--s" id="menucat-{key}">{label}</h3>
            <p class="caption">{blurb}</p>
            <span class="menucat__count caption">{counts[key]} items</span>
          </header>
          <ul class="menu">
{rows}
          </ul>
        </section>""")
    cats_html = "\n".join(cats)
    return f"""    <!-- ============================ FULL MENU — every product, grouped by category; filters + search (client-side) ============================
         Generated from the catalogue in tools/build_menu.py (edit the list there and re-run it), or hand-edit: the markup is plain HTML. -->
    <section class="menugrid section" id="full-menu" data-theme="cream">
      <div class="container">
        <header class="section__head">
          <p class="eyebrow" data-reveal>Full menu</p>
          <h2 class="display display--l" data-reveal data-split>Something good is brewing.</h2>
          <p class="lead" data-reveal>Browse our demo menu. All prices and availability are illustrative and may vary by branch.</p>
          <p class="menu__summary" id="menu-summary" data-reveal>{total} items across {len(CATEGORIES)} categories · {new_n} new this season</p>
        </header>

        <div class="menugrid__tools" data-reveal>
          <div class="chips" role="group" aria-label="Categories">
            {"\n            ".join(chips)}
          </div>
          <label class="field field--search"><span class="sr-only">Search the menu</span><input type="search" id="menu-search" placeholder="Find a drink or pastry..." autocomplete="off" /></label>
          <label class="field field--select"><span class="field__label">Choose demo branch</span>
            <select id="menu-branch"><option value="RIV">Riverside</option><option value="TK">Toul Kork</option><option value="BKK">BKK1</option></select>
          </label>
        </div>

        <div class="menucats" id="menu-list">
{cats_html}
        </div>
        <p class="menu__empty" id="menu-empty" hidden>No matches yet. Try another drink or category.</p>
        <p class="caption menu__note">KHR shown with a configurable <strong>demo conversion rate</strong>, not a real exchange rate. Ingredients and allergen information are illustrative. Ask staff in a real café. Drinks marked <strong>+1 stamp</strong> count toward the nine-stamp reward.</p>
      </div>
    </section>
"""


def splice() -> None:
    p = SITE / "index.html"
    s = p.read_text()
    start = s.index("    <!-- ============================ FULL MENU")
    end = s.index("    <!-- ============================ HOW TABLE ORDERING WORKS")
    s = s[:start] + section_html() + "\n" + s[end:]
    p.write_text(s)
    print("index.html: full menu section replaced")


def manifest() -> None:
    p = SITE / "public" / "media-manifest.json"
    data = json.loads(p.read_text())
    have = {s["slot"] for s in data["slots"]}
    for it in ITEMS:
        slot, alt = it[5], it[6]
        if slot not in have:
            data["slots"].append({"slot": slot, "file": f"{slot}.webp", "ratio": "1:1", "alt": alt})
            have.add(slot)
    p.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    print("media-manifest.json:", len(data["slots"]), "slots")

    r = SITE / "public" / "images" / "cafe" / "README.md"
    txt = r.read_text()
    rows = []
    for it in ITEMS:
        slot, alt, name = it[5], it[6], it[1]
        if f"`{slot}.webp`" not in txt:
            rows.append(f"| `{slot}.webp` | 1:1 | Full menu · {name} | Hero shot on branded neutral background | {alt} |")
    if rows:
        anchor = "| `branch-bkk1.webp`"
        i = txt.index(anchor)
        j = txt.index("\n", i) + 1
        txt = txt[:j] + "\n".join(rows) + "\n" + txt[j:]
        r.write_text(txt)
    print("images README: added", len(rows), "rows")


if __name__ == "__main__":
    splice()
    manifest()
