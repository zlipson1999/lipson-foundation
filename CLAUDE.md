# CLAUDE.md — Lipson Foundation site: full audit + implementation pass

You are working on the public website prototype for **Lipson Foundation Inc.** Your job in this session: run a FULL AUDIT of this repo (content compliance, accessibility, SEO/metadata, builds, performance), then IMPLEMENT every safe fix the audit finds. This file encodes all project knowledge. Read it completely before touching anything. The content rules below are legal-adjacent constraints, not style preferences — violating them can create false public claims about a nonprofit's tax status.

## 1. Project context

- **Org:** Lipson Foundation Inc., a South Florida nonprofit (EIN 39-4624045) building **cost-free community programs for underserved communities**. Fitness, wellness, and mentoring are where the work starts — **not the boundary** of the mission. Every program is completely free to participants, always.
- **Founder:** Zachary Lipson, Founder and President, who lives with hereditary spastic paraplegia. Board: Zachary Lipson (President), Joshua Weinfeld (CFO), Julia Vance (Secretary).
- **Flagship program:** **In Ur Corner** — free non-contact boxing + mentorship for youth ages 12–17 and military veterans of any era. 2×/week sessions of 60 minutes training + 30 minutes dinner together; monthly Career Exploration Night. No sparring, no head contact. No host hall is signed; no session days or start date exist.
- **Contact:** Zachary Lipson · zlipson@lipsonfoundation.org · **lipsonfoundation.org serves this site** (GitHub Pages custom domain, DNS at GoDaddy).
- **Stack:** Next.js 16 (App Router), TypeScript, Tailwind CSS v4, shadcn/ui (base-lyra / Base UI). Dev server already runs at http://127.0.0.1:43147 — **do not restart it, do not start another one**.
- **Git:** commit directly to `main`, push with `git push -u origin main`. No PRs, no feature branches. **Every push to GitHub `main` triggers a live redeploy** to GitHub Pages, so only push verified work.
- **Copy provenance:** all site copy derives from the 22 August 2026 public-copy kit (fact sheet + program description). That kit is the ONLY source of truth for facts. If a fact is not in the kit, it does not go on the site.

## 2. Hard content rules (public-claim checklist, 22 Aug 2026 kit)

These are absolute. Do not soften, reinterpret, or "improve" them.

**MAY say (and must stay consistent everywhere):**
- Legal name **Lipson Foundation Inc.** · EIN **39-4624045**
- **South Florida / Palm Beach County** (and surrounding counties) as service area
- **Zachary Lipson, Founder and President** · email **zlipson@lipsonfoundation.org**
- lipsonfoundation.org is owned (parked)
- Board names/roles as listed in §1

**501(c)(3) — CONFIRMED 27 Aug 2026 by Zachary Lipson.** The IRS determination
letter is in hand and the foundation is listed in IRS Publication 78. The site
may therefore say **501(c)(3)** and **tax-deductible to the extent allowed by
law**, alongside the EIN. The wording lives in `taxNotice` in `lib/site.ts` and
appears in the footer and on `/donate`. This reverses the earlier prohibition;
it rests on the letter, not on an expectation of one.

**MUST NOT say — anywhere, ever, in any phrasing:**
- FDACS registered / "registered with the state," DR-5 / DR-14 — still unconfirmed. Florida's charitable solicitation registration is a separate filing from the IRS determination, and nothing here confirms it.
- "Public charity" as a phrase — the determination letter's classification has not been read here, so do not characterise it beyond 501(c)(3).

- **No phone number is published** (27 Aug 2026). The founder's cell is not going on a public site and no work number exists yet; email is the only contact. Do not re-add one until a work number is supplied.

**MUST NOT invent:**
- Host post names, session days, or start dates (no host is signed; no calendar exists)
- An official tagline (none has been chosen)
- A donate URL, payment processor, or checkout of any kind
- Impact numbers, launch data, participant counts, or statistics (there is no launch data)
- Additional named programs beyond In Ur Corner, or staff names (staff list is intentionally empty)

- **Mission and vision (owner-supplied, 27 Aug 2026, Zachary Lipson — not from the 22 Aug kit).** Mission: "The Lipson Foundation removes cost as a barrier to growth, offering cost-free programs that support health, personal growth, and professional development for underserved communities." Vision: "A community where cost is never the reason someone stops growing." Both live on `/about` and are stored in `lib/site.ts`. His wording said "free"; it is written **cost-free** to match the rule below.

**Naming and framing rules:**
- **Program name corrected 28 Aug 2026 by Zachary Lipson.** The formal name is **In Ur Corner**, not "In Your Corner". The 22 Aug kit's reading — that "In Your Corner" was the formal name and UR was mark-only — was wrong; the founder confirmed the mark and the name are the same. Use **In Ur Corner** in all body copy, headings, metadata and alt text. This reverses the earlier mark-only rule.
- The route stays `/in-your-corner`. Renaming it would break every link already shared and the `/work` redirect that points at it. The URL is not the name.
- **The Crew** = **PAID** inclusive-employment roles for adults with developmental disabilities. Never describe Crew members as volunteers, and never mix the name with any "Corner Crew" volunteer concept.
- **Mentorship is never day-one.** Matches form after weeks of shared training and meals, only when both people are ready. Never imply mentors are assigned at signup.
- Mission framing: the foundation builds **all** cost-free community programs for underserved communities. Fitness/wellness/mentoring is where the work starts, not the limit. Do not narrow the mission to "a boxing charity."
- **Four commitments:** Access, Dignity, Community, Service. Keep them as a set of four.
- Donate pitch is **"keep it free"** — an inquiry form only, no checkout. Planning asks (planning language only, not prices): **$100** covers dinner for a session · **$150** sponsors a full session · **$500** sponsors one young person for a season.

**Brand rules:**
- Colors: navy `#03162F` · gold `#C6A15A` · paper `#F7F1E4`. **No crimson** anywhere.
- Official foundation logo: `public/brand/lipson-tag.png` (navy dog-tag with gold phoenix). In Ur Corner mark: `public/brand/iyc-tag.png`.
- Fonts: **Fraunces** for headings, **Source Sans 3** for body.

## 3. Architecture map

**Routes** (all in `app/`, one `page.tsx` each):
`/` · `/about` · `/team` · `/programs` · `/in-your-corner` · `/events` · `/news` · `/donate` · `/forms` · `/help` · `/contact` · `/privacy`
Plus `app/not-found.tsx` (404) and `app/layout.tsx` (fonts, header/footer, root metadata).

**Redirects** (defined in `next.config.ts`, active only in dynamic builds — static export cannot serve them):
`/work` → `/in-your-corner` · `/give` → `/donate` · `/involved` → `/forms` · `/updates` → `/news`

**Copy:** centralized in `lib/site.ts` (site identity, commitments, board, programs, FAQs, donate asks, help paths, session shape, offers). Some page-level prose lives in the `app/*/page.tsx` files. When auditing copy, check both.

**Intentionally empty arrays in `lib/site.ts`:** `events`, `newsItems`, `staff`. These drive honest empty states on `/events`, `/news`, `/team`. **Never fill them with placeholder or invented data.** The empty states are a feature, not a bug.

**Forms pipeline:**
- `components/contact-form.tsx`, `components/help-form.tsx`, `components/donate-form.tsx` → `lib/submit.ts` (client-side dispatcher + validation) → server actions in `lib/actions.ts` → writes `.data/inquiries.json` (gitignored).
- On the static export build, `NEXT_PUBLIC_STATIC_EXPORT` makes `lib/submit.ts` skip server actions and open a pre-filled `mailto:` draft to zlipson@lipsonfoundation.org instead. Both paths must keep working.

**Base UI / shadcn quirks (learned the hard way — preserve these):**
- `Button` renders links via `render={<Link ... />}` with `nativeButton={false}`. Do not convert to `asChild` or wrap `<Link>` inside `<Button>`.
- `Accordion` `value` / `defaultValue` are **arrays**, not strings.
- The accordion panel height utility `h-(--accordion-panel-height)` previously broke the FAQ (panels collapsed to zero). The current fixed version works — do not reintroduce that class or regress the accordion CSS.

**Static export + basePath:**
- `next/image` with `unoptimized: true` does **not** apply `basePath` to `src`. All `/public` asset paths must go through the `asset()` helper in `lib/assets.ts`, which prefixes `NEXT_PUBLIC_BASE_PATH`. Never hardcode `/brand/...` paths directly in `src` attributes.

**Deployment:**
- GitHub repo: `zlipson1999/lipson-foundation`. GitHub Pages deploy via `.github/workflows/deploy.yml`: static export with `NEXT_STATIC_EXPORT=1`, `NEXT_PUBLIC_STATIC_EXPORT=1`, `NEXT_PUBLIC_SITE_ORIGIN=https://lipsonfoundation.org`. **No base path** — the site is served from the root of its own domain.
- Live at **https://lipsonfoundation.org**. The github.io URL redirects there. Every push to `main` redeploys.
- `trailingSlash: true` is set, so both `/about` and `/about/` resolve.
- DNS lives at GoDaddy: four `A` records on `@` to GitHub's Pages IPs, `www` CNAME to `zlipson1999.github.io`. `public/CNAME` carries the domain into every build — do not delete it. **Microsoft 365 email runs on this domain**: never touch the `MX`, `TXT` (SPF/DMARC), `autodiscover`, `lyncdiscover`, `msoid`, `sip` or `_sip*` SRV records.

## 4. Audit checklist

Run each of these. Record findings before fixing.

**A. Content-compliance scan (highest priority):**
- `rg -i` across `app/ components/ lib/ public/ README.md` for forbidden phrases: `501\(c\)`, `501c`, `tax[- ]deduct`, `public charity`, `FDACS`, `DR-5`, `DR-14`, `IRS`, `determination letter`, `charity registration`, `nonprofit status`, `crimson`.
- Scan for invented facts: specific weekdays/times attached to sessions, start dates, host post names presented as committed (e.g. "Post 47" as a signed host), impact numbers/statistics, tagline-like slogans presented as official, donation URLs or processor names (Stripe, PayPal, GoFundMe, Donorbox…).
- Verify EIN `39-4624045`, email `zlipson@lipsonfoundation.org`, and the legal name are consistent in every occurrence (grep for partial/typo variants).
- Confirm "In Ur Corner" (not "In Your Corner") in all body copy; confirm The Crew is described as paid everywhere; confirm no day-one mentorship implication.

**B. Accessibility:**
- Landmarks: one `<main>` per page, `<header>`/`<footer>`/`<nav>` with accessible names where duplicated.
- Every image has meaningful `alt` (or `alt=""` if decorative).
- Visible focus states on all interactive elements (links, buttons, accordion triggers, mobile nav, dropdown).
- Color contrast on navy/gold/paper combinations — gold `#C6A15A` on paper `#F7F1E4` likely fails for body text; check every gold-on-light and gold-on-navy text usage against WCAG AA.
- Every form input has an associated `<label>`; error messages are announced (aria-live or equivalent); required fields marked.
- Heading hierarchy sane per page (one h1, no skips).

**C. SEO / metadata:**
- Per-page `metadata` exports: unique title + description on every route, derived only from kit-safe copy.
- `metadataBase` set correctly (respect basePath in static export); OpenGraph title/description/image (use existing brand assets, no new claims in descriptions).
- **`app/sitemap.ts` and `app/robots.ts` are missing today — implement both.** They must work under static export (Next requires them to be compatible with `output: "export"`; sitemap URLs use `siteOrigin`).
- Sensible `<html lang>`, canonical handling, 404 page metadata.

**D. Builds and behavior:**
- Both build modes must pass (commands in §6).
- Manually verify against the running dev server (http://127.0.0.1:43147): mobile nav opens/closes, FAQ accordion expands/collapses, programs dropdown works, 404 page renders, `/work` `/give` `/involved` `/updates` redirects work in dev.
- Forms: dev-mode submission writes to `.data/inquiries.json`; validation errors display.

**E. Performance:**
- Brand PNGs are heavy: `public/brand/iyc-tag.png` ≈ 1.6 MB, `public/brand/lipson-tag.png` ≈ 912 KB. Optimize (resize to actual display dimensions, recompress, or convert to WebP with PNG fallback if needed) **without changing how the marks look**. Keep the same file paths or update every reference through `asset()`.
- Font loading: Fraunces + Source Sans 3 via `next/font` with sensible subsets/weights; no render-blocking font CSS.
- Check for unused dependencies, oversized client bundles, unnecessary `"use client"`.

**F. Honest empty states:**
- `/events`, `/news`, and the staff section of `/team` must render honest empty states from the empty arrays. Verify they read well and are not broken. Do NOT populate them.

## 5. Implementation directives

- Fix **everything** the audit finds that is safe under the content rules in §2. Content-rule violations are fixed by removing/correcting the claim, never by adding new facts.
- **Never add facts not in the kit.** No new numbers, dates, names, programs, quotes, or testimonials. When rewriting copy, reuse kit language.
- Implement the missing `app/sitemap.ts` and `app/robots.ts` (see §4C).
- Preserve: the Base UI quirks in §3, the `asset()` helper pattern, the empty arrays, the forms dual-mode behavior, the brand palette and fonts.
- Do not restart or duplicate the dev server. Do not point DNS anywhere. Do not add analytics, payment, or third-party scripts.
- Commit in **logical units** (one concern per commit: e.g. "content compliance fixes", "add sitemap and robots", "optimize brand images", "accessibility fixes") with clear messages. Push to `origin main` only after all verification in §6 passes — pushes deploy the live site.

## 6. Verification commands (all must pass before you finish)

```bash
# Type check
npx tsc --noEmit

# Lint (zero warnings allowed)
npx eslint app components lib --max-warnings 0

# Normal (dynamic) build
npx next build

# Static export build exactly as GitHub Pages runs it
NEXT_STATIC_EXPORT=1 NEXT_PUBLIC_STATIC_EXPORT=1 \
NEXT_BASE_PATH=/lipson-foundation NEXT_PUBLIC_BASE_PATH=/lipson-foundation \
NEXT_DIST_DIR=.next-test npx next build

# CRITICAL cleanup: remove test dist dirs and any exported `out/` afterwards.
# Tailwind v4 scans stray exported HTML files and will corrupt the CSS build
# if .next-test or out/ are left in the repo.
rm -rf .next-test out
```

Also spot-check key pages on the dev server (http://127.0.0.1:43147) after your changes: home, /in-your-corner, /donate, /events (empty state), FAQ accordion, mobile nav.

When done: ensure the working tree is clean, all commits are pushed to `origin main`, and summarize what the audit found, what you fixed, and anything you deliberately left alone (with the content-rule reason).
