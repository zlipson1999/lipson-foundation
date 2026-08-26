# Lipson Foundation

Public website for **Lipson Foundation Inc**, a 501(c)(3) human services organization in West Palm Beach, Florida (EIN 39-4624045).

The site is a first working slice: mission, programs, giving, volunteering, and contact. Copy is grounded in the foundation’s public IRS record (tax-exempt since October 2025, NTEE Human Services). Program language reflects the founder’s work with young adults in Palm Beach County. Swap anything in `lib/site.ts` as the board firms up messaging.

## What you can do on the site

- Read the mission, values, and three focus areas (stability, opportunity, belonging)
- Start a gift (intent form — no card numbers collected yet)
- Offer to volunteer, mentor, or partner
- Send a contact message
- See EIN and tax-exempt status on every public page that needs it

Form submissions are stored locally in `.data/inquiries.json` so you can review them in development. Point `lib/actions.ts` at email or a CRM when you are ready.

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:43147](http://localhost:43147).

```bash
npm run build
npm start
```

## Customize

| What | Where |
| --- | --- |
| Name, EIN, email, tagline | `lib/site.ts` |
| Colors | `app/globals.css` (`:root` tokens) |
| Pages | `app/` |
| Forms | `components/*-form.tsx` and `lib/actions.ts` |

Update `hello@lipsonfoundation.org` to a real inbox before you share the site widely. Online card processing can be added later (Stripe, Givebutter, etc.) without changing the public copy.

## Stack

Next.js, TypeScript, Tailwind CSS, and shadcn/ui.
