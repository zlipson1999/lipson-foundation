# Lipson Foundation

Public prototype for **Lipson Foundation Inc.** (EIN 39-4624045), a South Florida nonprofit building cost-free community programs. Flagship program: **In Your Corner**.

This codebase follows the 22 August 2026 public-copy rules in the foundation kit:

- May say: legal name, EIN, South Florida / Palm Beach County, contact block
- Must not say: 501(c)(3), public charity, tax-deductible, FDACS registration
- No donate processor, no official tagline, no host name, no session days, no start date, no invented numbers
- Formal program name is **In Your Corner** (do not use the short mark in body copy)
- Brand: navy `#1C2433` · gold `#C6A15A` · paper `#F7F1E4`

Copy lives in `lib/site.ts` and the page files. It is taken from the public-safe fact sheet and program description.

## Pages

| Path | Role |
| --- | --- |
| `/` | Foundation home |
| `/in-your-corner` | Flagship program |
| `/about` | Who we are, board, FAQ |
| `/help` | Host, refer, career night, meals, planning asks |
| `/contact` | Zachary Lipson — 845-642-1874 · zlipson@lipsonfoundation.org |
| `/privacy` | How inquiries are treated |

Contact and help forms store submissions in `.data/inquiries.json` during development.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:43147](http://localhost:43147).

`lipsonfoundation.org` is owned and parked. Do not point DNS here until a publish review.

## Stack

Next.js, TypeScript, Tailwind CSS, and shadcn/ui.
