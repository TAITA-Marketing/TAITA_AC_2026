# Sanity content model — TAITA Annual Conference site

Every list in the mockup is one document type. Nothing on the site needs a code deploy to change.

## `flyer`
| field | type | notes |
|---|---|---|
| `title` | string | e.g. "Keynote — Dr. Tsung-Han Wu" |
| `image` | image (hotspot on) | portrait, 1024×1536 or larger |
| `caption` | text | one line under the flyer |
| `publishedAt` | datetime | ordering — newest first |
| `featured` | boolean | pins it to the home page strip |

Renders on: Home (flyer strip, first 4) and Flyers page (all).

## `speaker`
`name`, `role`, `company`, `headshot` (image, square 1200×1200+), `bio` (text, 2–3 sentences), `track` (string / reference), `linkedin` (url), `isKeynote` (boolean), `order` (number).

Renders on: Speakers page grid, Home keynote block (`isKeynote`), Agenda session references.

## `session`
`startTime` (datetime), `durationMinutes` (number), `title`, `description`, `track`, `room`, `speakers` (array of references → `speaker`), `emphasis` (string: `light` | `mint` | `dark` — controls the row's fill).

## `sponsor`
`name`, `logo` (SVG or transparent PNG), `url`, `tier` (`platinum` | `gold` | `silver` | `inKind`), `order`.

Tier drives logo size on the Sponsors page and the home "Backed by" row.

## `sponsorTier`
`name`, `priceLabel`, `availabilityLabel`, `benefits` (array of `{label, value}`) — feeds the benefits comparison table.

## `ticket`
`kind`, `price`, `description`, `zeffyUrl`, `salesEnd` (datetime), `emphasis` (boolean → dark card).

## `sponsorInquiry` (write-only, from the site)
`company`, `contactName`, `email`, `website`, `tier` (same enum as `sponsor.tier`), `message` (text), `ref` (string, e.g. `SPN-2026-482`), `submittedAt` (datetime), `status` (`new` | `contacted` | `won` | `declined`).

Created by the form on the Sponsors page — gives the team a pipeline view in the same Studio.

### `/api/sponsor-inquiry` (Next.js route handler)
1. Validate: company, contactName, email required; email format checked.
2. Write the `sponsorInquiry` doc with a Sanity **write token** (server-side only, never `NEXT_PUBLIC_`).
3. Email the team via Resend — to `sponsors@…`, reply-to the submitter, subject `Sponsor inquiry — {company} ({tier})`.
4. Send the submitter a confirmation containing `ref`.
5. Return `{ ok: true, ref }`; the form shows the success state.

Env: `SANITY_WRITE_TOKEN`, `RESEND_API_KEY`, `SPONSOR_INBOX`. Add a honeypot field or Vercel rate limiting to keep bots out.

## `eventSettings` (singleton)
`eventDate`, `doorsOpen`, `venueName`, `address`, `mapUrl`, `roomBlockUrl`, `heroHeadline`, `heroSubhead`, `stats` (array of `{number, label}`), `socialLinks`, `contactEmails`.

The countdown on the home page is computed from `eventDate` at request time.

## Notes for the Next.js build
- One GROQ query per page; ISR revalidate on webhook.
- Images through `next/image` + `@sanity/image-url` — the flyer strip only needs `w=440`.
- Zeffy links are plain external `<a>`; no embed needed.
