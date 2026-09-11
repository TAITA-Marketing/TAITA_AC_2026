# Handoff: TAITA Annual Conference 2026 website

## Overview

A marketing site for TAITA-SV's Annual Conference on **Saturday, October 3, 2026** at Delta Hotels by Marriott, Santa Clara. Six sections: Home, About TAITA, Speakers, Agenda, Venue, Sponsors, plus a Registration page reachable from the header CTA.

Target stack (decided by the client): **Next.js on Vercel + Sanity CMS**. Nearly all content must be editable in Sanity without a deploy. Ticketing is external (Zeffy).

## About the design files

The files in `reference/` are **design references created in HTML** — prototypes showing intended look and behavior, not production code to copy. `TAITA Conference Site.dc.html` is the authored source; `TAITA-Conference-Site-standalone.html` is a self-contained snapshot you can open in any browser to click through every page.

The task is to **recreate these designs in a Next.js app** (App Router recommended) using its own component patterns and a Sanity-backed content layer. Do not port the HTML file itself.

## Fidelity

**High fidelity.** Colors, typography, spacing, radii, and interaction states are final and should be matched closely. All values are listed under Design Tokens below.

---

## Screens / Views

The prototype simulates routing with local state. In Next.js these become real routes:

| Route | Screen |
|---|---|
| `/` | Home |
| `/about` | About TAITA |
| `/speakers` | Speakers |
| `/agenda` | Agenda |
| `/venue` | Venue |
| `/sponsors` | Sponsors |
| `/register` | Registration |

### Global shell

**Header** — sticky, `top: 0`, `z-index: 20`, background `rgba(255,255,255,.94)` with `backdrop-filter: blur(8px)`, bottom border `1px solid rgba(14,15,12,.08)`. Inner container `max-width: 1240px`, padding `14px 28px`, flex row, space-between, wraps.

Left cluster: TAITA logo at `height: 34px`, a `1px × 28px` divider in `rgba(14,15,12,.14)`, then two lines of 11px/800 uppercase text, `letter-spacing: 1.4px`, color `#454745` — "ANNUAL CONFERENCE / OCT 3, 2026".

Nav: six pill links in this exact order — **Home, About TAITA, Speakers, Agenda, Venue, Sponsors**. 14px/600, padding `9px 13px`, `border-radius: 9999px`. Active page: background `rgba(211,242,192,.6)`. Hover: `rgba(211,242,192,.45)`. Right of them, the primary CTA "Register": background `#9fe870`, color `#163300`, padding `11px 20px`, pill radius, `transform: scale(1.05)` on hover / `scale(0.95)` on active, transition `120ms cubic-bezier(.4,0,.2,1)`.

**Footer** — background `#0e0f0c`, color `#fff`, `border-radius: 40px 40px 0 0`, padding `60px 28px 40px`, `margin-top: 88px`. Inner grid `minmax(0,1.1fr) minmax(0,1.4fr) minmax(0,.8fr)`, gap 36px.

- Column 1: "TAITA" in display 34px `#9fe870`; below it the full org name in 14px/600 `rgba(255,255,255,.7)`; then three pill links — LinkedIn (`https://www.linkedin.com/company/svtaita/`) and Facebook (`https://www.facebook.com/TAITASV`) on `rgba(255,255,255,.1)`, and "TAITA-SV site ↗" (`https://taita-sv-website.vercel.app`) on `#9fe870` / `#163300`.
- Column 2: heading "CONFERENCE" (12px/700, `letter-spacing: 1.2px`, uppercase, `rgba(255,255,255,.5)`), then the six nav links in a **two-column grid**, `gap: 8px 14px`, 14px/600 `rgba(255,255,255,.8)`, hover `#9fe870`.
- Column 3: heading "CONTACT", then `marketting@taita.org` (note the double-t — this is the correct address) and "Santa Clara, California".
- Bottom bar: `margin-top: 40px`, `padding-top: 24px`, top border `1px solid rgba(255,255,255,.12)`, 12px/400 `rgba(255,255,255,.5)`, space-between. Left: "© 2026 TAITA-SV. A 501(c)(3) non-profit. All rights reserved. · Website created and designed by **Louis Chen**" (the name in `#9fe870`, weight 600). Right: "Registration powered by Zeffy · Content managed in Sanity".

### Home

1. **Hero** — `max-width: 1240px`, padding `56px 28px 24px`, grid `minmax(0,1.15fr) minmax(0,.85fr)`, gap 48px, center-aligned.
   - Badge pill: "● TAITA Annual Conference · Silicon Valley", background `#e2f6d5`, color `#163300`, 13px/700, padding `6px 14px`.
   - H1 display: "Hybrid quantum / classical / computing." — `clamp(44px, 6.2vw, 92px)`, `line-height: .86`, `letter-spacing: -1px`.
   - Subhead 20px/400, `line-height: 1.44`, `#454745`, `max-width: 520px`.
   - Two CTAs: "Register on Zeffy →" (green) and "See the agenda" (`rgba(22,51,0,.08)`), both 19px/600, padding `18px 28px`.
   - Fact row above a `1px` top rule: three items — **Oct 3** / "Saturday, 2026 · Conference 12–5 PM · Banquet 6–9 PM", **Delta Hotels** / "Santa Clara, Silicon Valley", and a **live countdown** (days until `2026-10-03T09:00:00-07:00`) / "days to go". Numbers in display 34px, labels 13px/600 `#454745`.
   - Right column: the keynote flyer (`assets/flyer-main.jpg`), `border-radius: 30px`, ring shadow.

2. **Stats band** — background `#9fe870`, `border-radius: 40px`, padding `52px 44px`, grid `repeat(auto-fit, minmax(160px,1fr))`. Four stats in `#163300`: **200+** attendees expected, **12** speakers & panelists, **6** sessions in one afternoon, **23** years connecting Taiwan & SV. Numbers `clamp(48px,5vw,84px)` display, `line-height: .85`; labels 17px/600.

3. **Four themes** — heading "Four themes. / One decade ahead." with a supporting paragraph to its right. Grid `repeat(auto-fit, minmax(240px,1fr))`, gap 18px. Four cards, `border-radius: 30px`, padding 30px, `min-height: 250px`, flex column space-between, ring shadow. Backgrounds cycle `#e2f6d5` → `#ffffff` → `#0e0f0c` (white text) → `#cdffad`. Each has a 46px circular number badge (`#0e0f0c` bg / `#9fe870` text, inverted on the dark card), a 25px/600 title, and a 15px/400 description. Titles: Quantum computing, Classical computing, AI & intelligence, Global innovation.

4. **Featured speaker rotator** — background `#faf9f7`, `border-radius: 40px`, padding 44px, grid `minmax(0,320px) minmax(0,1fr)`, gap 40px.
   - Left: fixed `aspect-ratio: 1054/1492` box, `border-radius: 24px`, ring shadow. Three flyer images are **absolutely stacked** and crossfaded by opacity (`transition: opacity 600ms cubic-bezier(.4,0,.2,1)`), `object-fit: cover`. **Important:** in the prototype every `src` is a literal path — a dynamic `src` is fine in React, this note is only about why the HTML looks unusual.
   - Right: tag pill (`#0e0f0c` bg, `#9fe870` text, uppercase 12px/700), name in display `clamp(28px,3.2vw,46px)`, role 17px/700 `#163300`, talk title 19px/600, bio 16px/400 `#454745`. Below: "View all speakers →" green pill linking to `/speakers`, and pagination dots — 8px tall, 8px wide inactive (`rgba(14,15,12,.2)`), 26px wide active (`#0e0f0c`), `transition: width 200ms`.
   - Rotation: auto-advances every **6000ms** via `setInterval`, cleared on unmount. Clicking a dot jumps to that index.
   - The three entries and their flyers, in order:
     1. `flyer-wang.png` — **Mei-Hua Wang**, Former Minister of Economic Affairs, Taiwan — "The New AI Era: Taiwan's Tech Boom" — tag "Dinner keynote"
     2. `flyer-wu.png` — **Dr. Tsung-Han Wu**, Founder & CEO, Chi3 Optics — "Building the physical layer" — tag "Speaker"
     3. `flyer-manaloto.png` — **Nardo Manaloto**, Managing Partner, Qubits Ventures — "Quantum and beyond: the next frontier of medicine" — tag "Speaker"

5. **Our sponsors** — heading "Our sponsors" (display `clamp(26px,2.6vw,38px)`), then a grid `repeat(auto-fill, minmax(150px,1fr))` of 88px-tall dashed placeholder tiles. Replace with real logos from Sanity.

6. **Closing CTA** — `#0e0f0c` panel, `border-radius: 40px`, padding `56px 44px`, flex space-between wrap. "Seats are limited. / Tickets are not." in display `clamp(30px,3.6vw,58px)`, supporting line in `rgba(255,255,255,.8)`, green "Register now →" button.

### About TAITA

Grid `minmax(0,1fr) minmax(0,.75fr)`, gap 44px, top-aligned.

Left: logo at 56px, H1 "Bridging Taiwan and Silicon Valley since 2003." (`clamp(34px,4.4vw,68px)`), two 19px/400 paragraphs covering the Jan 3 2003 founding in Santa Clara and the deeptech-commercialization mission, then a dark `#0e0f0c` vision panel (`border-radius: 30px`, padding 32px) with a `#9fe870` "VISION" eyebrow and a 20px/600 statement. Below, a pill link "Read the full story on taita-sv ↗" → `https://taita-sv-website.vercel.app/about`.

Right: `#e2f6d5` card, `border-radius: 30px`, padding 32px, eyebrow "AT A GLANCE", then four facts in display 30px `#163300` with 14px/600 labels: **Jan 3, 2003** founded in Santa Clara CA · **501(c)(3)** non-profit, volunteer-led · **Deeptech** commercialization focus · **Young TAITA** students & early-career track.

Below: three pillar cards, grid `repeat(auto-fit, minmax(240px,1fr))`, white, `border-radius: 30px`, padding 30px, ring shadow — each with a 44px dark circular number, 22px/600 title, 15px/400 body. **01 Convene · 02 Invest · 03 Execute.**

### Speakers

H1 "Who's speaking." Grid `repeat(auto-fill, minmax(260px,1fr))`, gap 20px. Each card: `border-radius: 30px`, ring shadow, overflow hidden.
- Photo area: `aspect-ratio: 4/5`, white, bottom border, centered 64px circular initials badge (`#e2f6d5` bg, `#163300` text, display 22px) plus a 12px note. **Replace with the real headshot from Sanity when present; fall back to initials.**
- Body: padding `22px 24px 26px` — name 22px/600, role 14px/700 `#163300`, bio 14px/400 `#454745`, then a track pill (12px/700, `rgba(22,51,0,.08)` / `#163300`).

Twelve speakers, in this order: Mei-Hua Wang (Dinner keynote, mint card) · Dr. Subodh Kulkarni, Rigetti Computing (Keynote · not yet confirmed) · Chi-Chang Kao, Stanford/SLAC · Dr. Tsung-Han Wu, Chi3 Optics · John Chang, Jmem Tek · Xin-Chuan (Ryan) Wu, Intel · Hsiao-Mei Sherry Cho, Stanford Q-FARM/SLAC · Mingche Wang, ITRI International · Bert de Jong, LBNL · Min-Hsiu Hsieh, Hon Hai Research Institute · Nardo Manaloto, Qubits Ventures · John Cumbers, SynBioBeta · Norman Liang, Upshot Ventures (moderator).

Footer strip: `#faf9f7` bar, `border-radius: 20px`, "Want to speak, or nominate someone?" + a dark pill "Email the program team" → `mailto:marketting@taita.org`.

### Agenda

Badge "Saturday, October 3, 2026", H1 "One afternoon. / The quantum stack.", note that times are tentative.

Rows in a flex column, gap 12px. Each row: grid `minmax(120px,150px) minmax(0,1fr) minmax(0,220px)`, gap 24px, top-aligned, `border-radius: 20px`, padding `24px 26px`, ring shadow. Three fill treatments — **light** (white / `#0e0f0c` text / `rgba(22,51,0,.08)` tag), **mint** (`#e2f6d5` / `#163300` / dark tag), **dark** (`#0e0f0c` / white / `#9fe870` tag).

Left cell: time in display 22px, duration 12px/600 at 60% opacity. Middle: 21px/600 title, 15px/400 description at 75% opacity. Right: track pill and a small note (room or status) at 70% opacity.

Eight rows:

| Time | Dur | Title | Track | Note | Fill |
|---|---|---|---|---|---|
| 1:00 PM | 50 min | Keynote — Scaling quantum advantage (Dr. Subodh Kulkarni, Rigetti) | Keynote | Not yet confirmed | dark |
| 1:50 PM | 50 min | Building the physical layer — photonics, detectors & secure silicon | Hardware | Panel · 5 speakers | light |
| 2:40 PM | 40 min | Decoding quantum — algorithms, compilers & error correction | Software | Panel · 4 speakers | light |
| 3:20 PM | 10 min | Coffee break | Break | Foyer | mint |
| 3:30 PM | 40 min | Quantum and beyond: the next frontier of medicine | Applications | Panel · 2 speakers | light |
| 4:10 PM | 40 min | Funding the frontier (moderated by Norman Liang) | Capital | Topic tentative · panelists TBD | light |
| 5:30 PM | 30 min | Banquet check-in & registration | Banquet | Foyer | mint |
| 6:00 PM | 3 hrs | Evening banquet & dinner keynote (Mei-Hua Wang) | Banquet | Separate ticket | dark |

### Venue

H1 "Delta Hotels, / Santa Clara." Then a single full-width dark panel (`#0e0f0c`, `border-radius: 30px`, padding 36px, flex column gap 22px), sections separated by `1px rgba(255,255,255,.15)` rules, each with a `#9fe870` uppercase eyebrow:
- **Date** — display 38px "Sat, Oct 3, 2026"; "Conference 12:00–5:00 PM · Banquet 6:00–9:00 PM PDT".
- **Room** — "Saratoga Ballroom"; "3,212 sq ft · seated in rounds of 10 · up to 260 guests".
- **Address** — "Delta Hotels by Marriott / 2151 Laurelwood Rd / Santa Clara, CA 95054"; "10 min from SJC · Complimentary parking validation · +1 408-988-8411".
- Green pill "Open in Maps ↗" → `https://www.google.com/maps/search/?api=1&query=2151+Laurelwood+Rd+Santa+Clara+CA+95054`.

Below: three white info cards (`border-radius: 20px`, padding 26px, ring shadow), grid `repeat(auto-fit, minmax(230px,1fr))` — **Getting there**, **The hotel**, **Accessibility**.

*Not yet built:* an embedded map and venue photography. Leave room for both.

### Sponsors

H1 "Sponsor the / corridor." plus an intro paragraph.

**Tiers** — five blocks in a flex column, gap 30px, in this order: **Super Diamond, Diamond, Emerald, Platinum, Gold**. Each block header is a flex row: tier name in display `clamp(24px,2.6vw,36px)`, then a 10px-tall pill rule that flexes to fill remaining width. Rule colors descend: `#0e0f0c`, `#163300`, `#9fe870`, `#cdffad`, `#e2f6d5`. **Do not show prices or availability counts.**

Below each header, a grid of logo slots whose size shrinks by tier: Super Diamond `minmax(280px,1fr)` × 160px tall (2 slots), Diamond `240px`/140px (3), Emerald `200px`/118px (4), Platinum `170px`/100px (5), Gold `150px`/86px (6). Slots are dashed `1px rgba(14,15,12,.2)` on `#faf9f7`, `border-radius: 16px` — replace with real logos, keeping the per-tier sizing.

**Apply block** (`id="apply"`) — `#e2f6d5`, `border-radius: 40px`, padding 44px, grid `minmax(0,1.1fr) minmax(0,.9fr)`, gap 40px, center-aligned.
- Left: "Apply to sponsor" display heading, a 16px paragraph ("Tell us a little about your team. We'll come back within three business days…"), then a dark pill CTA. **The client is supplying a Google Form URL — currently the CTA is `mailto:marketting@taita.org` with a "Google Form link coming soon" chip beside it. Replace both with a single link to the form when the URL arrives.**
- Right: white card (`border-radius: 30px`, padding 30px, ring shadow) titled "BEFORE YOU APPLY" with four bullet rows, each an 8px `#9fe870` dot plus 15px/400 text: logo-placement deadline Sept 5 2026 · tables assigned in confirmation order · in-kind and community sponsorships welcome · full benefits and pricing come in the prospectus.

*Removed deliberately:* the tier benefits comparison table. Don't reintroduce it.

### Registration

H1 "Get your seat." Grid `repeat(auto-fit, minmax(250px,1fr))`, gap 20px. Three ticket cards, `border-radius: 30px`, padding 32px, ring shadow, flex column gap 16px: uppercase kind label (13px/700, 70% opacity), price in display 46px, description 15px/400 (flex: 1 so buttons align), then a full-width pill CTA.

| Kind | Price | Card | CTA |
|---|---|---|---|
| TAITA member | Free | `#e2f6d5` / `#163300`, dark button | Register on Zeffy ↗ |
| Early bird · until Sep 13 | $10 | `#0e0f0c` / white, green button | Register on Zeffy ↗ |
| General admission | $15 | white, green button | Register on Zeffy ↗ |

All three link to **`https://www.zeffy.com/en-US/ticketing/2026-taita`**.

Below: a `#e2f6d5` membership band (`border-radius: 30px`, padding `32px 36px`, flex space-between) — "Not a member yet?" in display `clamp(22px,2.2vw,32px)`, supporting line, and a dark pill "Become a member now ↗" → `https://taita-sv-website.vercel.app/membership`.

Below that: a `#faf9f7` panel, `border-radius: 30px`, padding 32px, grid `repeat(auto-fit, minmax(220px,1fr))`, gap 26px — three notes: **Why Zeffy** (no platform fee, 100% goes to TAITA-SV), **Add a donation** (tax-receipt-eligible donation at checkout), **Registration closes** (GA available through October 2).

---

## Interactions & behavior

- **Navigation** — prototype uses state; implement as real routes. Every nav change scrolls to top.
- **Featured rotator** — 6s interval, dot click jumps, crossfade via opacity. Pause on hover would be a welcome improvement.
- **Countdown** — days until the event, computed at render. Compute server-side or hydrate carefully to avoid SSR mismatch.
- **Buttons** — every pill CTA: `transform: scale(1.05)` hover, `scale(0.95)` active, `transition: transform 120ms cubic-bezier(.4,0,.2,1)`. Primary green also lightens to `#cdffad` on hover.
- **Nav links** — hover background `rgba(211,242,192,.45)`.
- **Inputs** (if a form is reintroduced) — focus is a ring: `box-shadow: rgb(134,134,133) 0 0 0 1px; outline: none`.
- **Responsive** — all grids use `auto-fit`/`minmax` and should collapse to one column under ~720px. The two-column grids that are currently fixed (hero, About, Apply block, keynote rotator) need explicit single-column breakpoints; the prototype was built at desktop width.

## State management

Minimal. Per-page data comes from Sanity at request time. The only client state is the featured-rotator index (`number`, auto-incremented on a 6s interval, cleared on unmount). If the sponsor inquiry form is ever reinstated it needs form fields, a `status` of `idle | sending | sent`, and an error string.

## Design tokens

This design follows the **Wise Design System** (bold display type, lime-green CTAs, ring shadows, pill radii). Values used here:

**Colors**
| Token | Value | Use |
|---|---|---|
| Wise green | `#9fe870` | Primary CTAs, accent band, dark-surface accents |
| Green hover | `#cdffad` | Primary button hover, 4th theme card |
| Light mint | `#e2f6d5` | Badges, soft cards, member ticket |
| Nav hover | `rgba(211,242,192,.45)` | Nav/ghost hover |
| Dark green | `#163300` | Text on green |
| Near black | `#0e0f0c` | Primary text, dark surfaces, footer |
| Body gray | `#454745` | Secondary text |
| Muted gray | `#868685` | Tertiary text, placeholder captions |
| Canvas | `#ffffff` | Page background |
| Warm canvas | `#faf9f7` | Panels, placeholder fills |
| Overlay | `rgba(22,51,0,.08)` | Secondary button fill |
| Hairline | `rgba(14,15,12,.12)` | Card ring |
| Danger | `#d03238` on `#fde7e8` | Form errors |

**Typography** — Display: **Archivo Black** (stand-in for Wise Sans), weight 900, `line-height: .85–.95`, `letter-spacing: -1px` at hero scale. Body: **Inter**, default weight **600** (400 for paragraphs), `letter-spacing: .18px`, `font-feature-settings: "calt" 1`. Both from Google Fonts.

Scale: hero `clamp(44px,6.2vw,92px)` · page H1 `clamp(40px,5.4vw,84px)` · section H2 `clamp(26px,2.6vw,38px)` · stat numbers `clamp(48px,5vw,84px)` · card title 22–25px/600 · body large 19–20px/400 · body 15–16px/400 · caption 12–13px.

**Radii** — pill `9999px` · card small `16px` · card medium `20px` · card large `30px` · section `40px` · footer `40px 40px 0 0`.

**Shadows** — ring only: `rgba(14,15,12,.12) 0 0 0 1px`. Input focus: `rgb(134,134,133) 0 0 0 1px`. **No Y-offset drop shadows.**

**Spacing** — page container `max-width: 1240px`, horizontal padding 28px. Section vertical rhythm 56–72px. Card padding 26–44px by scale. Grid gaps 14–24px.

**Motion** — `cubic-bezier(.4,0,.2,1)`; 120ms button scale, 200ms dot width, 500–600ms opacity crossfade.

## Assets

In `assets/`:
- `taita-logo.png` — client-supplied TAITA logo (header, About).
- `flyer-main.jpg` — client-supplied hero keynote flyer.
- `flyer-wang.png`, `flyer-wu.png`, `flyer-manaloto.png` — speaker flyers for the rotator, in rotation order.

Still needed from the client: speaker headshots (square, 1200px+), sponsor logos (SVG or transparent PNG) by tier, venue photography, the Google Form URL for sponsorship applications, and any additional promotion flyers.

Fonts load from Google Fonts. No icon library — Unicode glyphs only (`→ ↗ ↓ ● ✓`).

## Content model

`reference/sanity-content-model.md` has the full Sanity schema: `flyer`, `speaker`, `session`, `sponsor`, `sponsorTier`, `ticket`, `sponsorInquiry`, and an `eventSettings` singleton. Two things in it are now out of date and should be corrected during implementation:

1. `sponsorTier` no longer needs `priceLabel` / `availabilityLabel` / `benefits` — the site shows neither prices nor a benefits table. Tier names are Super Diamond, Diamond, Emerald, Platinum, Gold.
2. The `sponsorInquiry` document type and `/api/sponsor-inquiry` route are **not currently used** — the client moved sponsorship applications to a Google Form. Keep the spec around in case they revert.

`eventSettings` should carry the event date, times, venue details, hero copy, the four stat figures, social links, and the single contact address `marketting@taita.org`.

## Files

- `reference/TAITA Conference Site.dc.html` — authored source of the prototype.
- `reference/TAITA-Conference-Site-standalone.html` — open this in a browser to click through the whole site offline.
- `reference/sanity-content-model.md` — Sanity schema notes.
- `assets/` — the images the design uses.
- `screenshots/` — one capture per page (viewport-height, top of page): `01-home`, `02-about`, `03-speakers`, `04-agenda`, `05-venue`, `06-sponsors`, `07-register`. For full-page views, open the standalone HTML.

## Open items

- Google Form URL for sponsorship applications.
- Whether the evening banquet is a separate Zeffy ticket (currently labeled "Separate ticket" on the agenda).
- Dr. Subodh Kulkarni's keynote is marked "not yet confirmed" — remove the qualifier once confirmed.
- Confirmed session times (the agenda is explicitly labeled tentative).
- Mobile breakpoints were not designed; the prototype is desktop-first.
