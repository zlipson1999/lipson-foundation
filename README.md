# Lipson Foundation

Public prototype for **Lipson Foundation Inc.** (EIN 39-4624045), a South Florida nonprofit building cost-free community programs. Flagship program: **In Ur Corner**.

This codebase follows the 22 August 2026 public-copy rules in the foundation kit:

- May say: legal name, EIN, South Florida / Palm Beach County, contact block
- Must not make any claim about tax status, charitable classification, or state
  registration — those are unconfirmed binder targets, and the kit lists the
  exact phrasings that are off limits
- No donate processor, no official tagline, no host name, no session days, no start date, no invented numbers
- Mission framing is **all** cost-free community programs; fitness, wellness,
  and mentoring are where the work starts, not the boundary
- Say **cost-free**, not "free", in public copy
- Formal program name is **In Ur Corner** (corrected 28 Aug 2026; the route stays `/in-your-corner`)
- Brand: navy `#03162F` · gold `#C6A15A` · paper `#F7F1E4`
- Logos: `public/brand/lipson-tag.png` (house mark: navy dog-tag in the header) · `public/brand/iyc-tag.png` (In Ur Corner graffiti mark on `/in-your-corner` only) · `public/brand/hero-panel.webp` (the home intro artwork). Formal name in copy is **In Ur Corner**. No ®/™.

Copy lives in `lib/site.ts` and the page files. It is taken from the public-safe fact sheet, program description, and the marks you supplied.

## Pages

| Path | Role |
| --- | --- |
| `/` | Home |
| `/about` | About us |
| `/team` | Board and staff |
| `/programs` | What we offer |
| `/in-your-corner` | Flagship program |
| `/events` | Events — empty until dates are real |
| `/news` | News — empty until there is something to report |
| `/donate` | Sponsor a dinner, session, or season (inquiry form, no checkout) |
| `/forms` | Form hub — contact, get involved, donate |
| `/help` | Get involved form |
| `/contact` | Contact form |
| `/privacy` | How inquiries are treated |

Forms store submissions in `.data/inquiries.json` during development.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:43147](http://localhost:43147).

`lipsonfoundation.org` is owned and parked. Do not point DNS here until a publish review.

## Stack

Next.js, TypeScript, Tailwind CSS, and shadcn/ui.
