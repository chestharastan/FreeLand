# FreeLand — seven fictional Phnom Penh concept projects

Portfolio demos by Thareah. Every brand is fictional; nothing here is a real business, booking or payment.

```
readme/                      specs (do not edit): 00-SHARED-FOUNDATION.md, README.md, 01…07 WEBSITE.md + SYSTEM.md
projects/                    implementations, one folder per project (same numbering as readme/)
  01-kafe-tonle/website/     ✓ parallax / 3D concept site (Vite + three.js + GSAP + Lenis)
.claude/agents/              one Claude Code agent per project
```

## Agents

| Agent | Project | Reference vibe it follows |
|---|---|---|
| `kafe-tonle` | 01 Kafé Tonlé — QR ordering, barista queue, loyalty | Simply Chocolate (colour-block product slides) |
| `phum-kitchen` | 02 Phum Kitchen — reservations, POS, kitchen display | Persepolis Reimagined (cinematic scroll chapters) |
| `ironlotus-fitness` | 03 IronLotus — 6-branch memberships, QR check-in | Noomo Agency (dark, glossy 3D, giant type) |
| `lumiere-beauty-house` | 04 Lumière — collision-safe booking, commissions | Igloo Inc, translated to pearl/blush |
| `smilenova-dental` | 05 SmileNova — appointments, tooth chart, treatment plans | Igloo Inc clarity + Beagle step story |
| `pitstop-auto-care` | 06 PitStop — repair tracking, quote approval | Bruno Simon (playful 3D car journey) |
| `brightbridge-english-centre` | 07 BrightBridge — enrolment, attendance, fees, portal | Podio Beagle by Curvy (illustrated parallax story) |

Each agent reads the foundation + its two spec files, builds only inside `projects/<its folder>/`, follows the
shared stack (Next.js / FastAPI / PostgreSQL) and the shared motion, 3D and performance standard, and reports with
a traceable handoff. Ask for one by name in Claude Code, e.g. *"Use the pitstop-auto-care agent to scaffold the
project and build the hero"* — or run `/agents` to see them.

## Run the finished site

```bash
cd projects/01-kafe-tonle/website && npm install && npm run dev
```
