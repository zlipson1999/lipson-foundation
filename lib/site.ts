/**
 * The service area, kept as two parts because the mobile hero sets it on two
 * lines and the rest of the site sets it on one. Composed rather than split
 * at the point of use, so there is still one source for the wording.
 */
const locationPrimary = "South Florida"
const locationSecondary = "Palm Beach County & surrounding counties"

export const locationLines = [locationPrimary, locationSecondary] as const

export const site = {
  name: "Lipson Foundation",
  legalName: "Lipson Foundation Inc.",
  kicker: "Community programs. Cost-free.",
  location: `${locationPrimary} — ${locationSecondary}`,
  ein: "39-4624045",
  email: "zlipson@lipsonfoundation.org",
  // No phone is published: the founder's cell is not going on a public site,
  // and a work number does not exist yet. Email is the only contact.
  domain: "lipsonfoundation.org",
  description:
    "Lipson Foundation Inc. is a South Florida nonprofit that builds cost-free community programs for underserved communities. Every program is completely cost-free — no memberships, no fees, ever. Flagship program: In Ur Corner.",
} as const

/**
 * The intro paragraph, taken from the opening of the keep-it-free line, so it
 * speaks for the foundation as a whole rather than for any one program.
 */
export const heroBlurb =
  "We don't charge the people we serve. Not a membership fee, not a dollar, not ever."

/**
 * Mission and vision, supplied by Zachary Lipson on 27 August 2026. Not from
 * the 22 August copy kit. "Free" is written "cost-free" here to match the rule
 * the rest of the site follows; nothing else about the wording is changed.
 */
export const mission =
  "The Lipson Foundation removes cost as a barrier to growth, offering cost-free programs that support health, personal growth, and professional development for underserved communities."

export const vision =
  "A community where cost is never the reason someone stops growing."

/**
 * Tax status. The IRS determination letter is in hand and the foundation is
 * listed in IRS Publication 78, confirmed by Zachary Lipson on 27 August 2026.
 * Until that confirmation this claim was off limits; it is on the strength of
 * the letter, not of anyone's expectation of one.
 */
export const taxNotice =
  "Lipson Foundation Inc. is a 501(c)(3) nonprofit organization. EIN 39-4624045. Contributions are tax-deductible to the extent allowed by law."

export const keepItFree =
  "We don't charge the people we serve. Not a membership fee, not a dollar, not ever. That only works because people like you decide it should. Keep it cost-free."

/**
 * `short` is the founder-supplied wording for the compact row under the hero,
 * taken verbatim from the design. `body` is the longer copy-kit text, which
 * still runs on /about and further down the home page.
 */
export const commitments = [
  {
    title: "Access",
    short: "Removing barriers so neighbors can get the support they need.",
    body: "Every program we run is completely cost-free — no memberships, no fees, no fine print. Cost will never be the reason someone is left out.",
  },
  {
    title: "Dignity",
    short: "Serving with respect and meeting people where they are.",
    body: "We meet people where they are. Whatever your ability, background, or circumstances, you belong here — and our programs are built to prove it, including on our own team, where we proudly employ adults with developmental disabilities.",
  },
  {
    title: "Community",
    short: "Building connections that strengthen South Florida.",
    body: "Instead of walls, we use local assets — veteran halls, schools, and shared spaces. A network where neighbors consistently support and uplift one another.",
  },
  {
    title: "Service",
    short: "Delivering reliable programs with compassion and integrity.",
    body: "Everyone has something to give. Our programs turn participants into mentors, neighbors into role models, and service into a way of life.",
  },
] as const

/**
 * Every public route, for the sitemap. Keep in step with the files in app/.
 * /work, /give, /involved and /updates are redirects only and are not listed.
 */
export const routes = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/in-your-corner", priority: 0.9, changeFrequency: "monthly" },
  { path: "/programs", priority: 0.8, changeFrequency: "monthly" },
  { path: "/donate", priority: 0.8, changeFrequency: "monthly" },
  { path: "/team", priority: 0.7, changeFrequency: "monthly" },
  { path: "/team/board", priority: 0.6, changeFrequency: "monthly" },
  { path: "/team/staff", priority: 0.4, changeFrequency: "monthly" },
  { path: "/help", priority: 0.7, changeFrequency: "monthly" },
  { path: "/forms", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/events", priority: 0.5, changeFrequency: "weekly" },
  { path: "/news", priority: 0.5, changeFrequency: "weekly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
] as const

/**
 * Mirrors the redirects in next.config.ts, which only run on dynamic builds.
 * The static export serves the 404 page for these paths instead, so the 404
 * page uses this map to offer the destination itself. Keep the two in step.
 */
export const legacyRedirects: Record<string, { href: string; label: string }> =
  {
    "/work": { href: "/in-your-corner", label: "In Ur Corner" },
    "/give": { href: "/donate", label: "Donate" },
    "/involved": { href: "/forms", label: "Contact us" },
    "/updates": { href: "/news", label: "News" },
    "/the-ring": { href: "/in-your-corner#the-ring", label: "In Ur Corner" },
    "/the-corner": {
      href: "/in-your-corner#the-corner",
      label: "In Ur Corner",
    },
    "/the-crew": { href: "/in-your-corner#the-crew", label: "In Ur Corner" },
  }

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/team", label: "The team" },
  { href: "/programs", label: "Programs" },
  { href: "/events", label: "Events" },
  { href: "/news", label: "News" },
  { href: "/donate", label: "Donate" },
  { href: "/forms", label: "Contact us" },
] as const

export const board = [
  {
    name: "Zachary Lipson",
    role: "Founder and President",
    note: "Lives with hereditary spastic paraplegia. What changed his life was not a cure. It was access — to training, to people who believed he could, to a place that did not ask what he could afford.",
  },
  {
    name: "Joshua Weinfeld",
    role: "CFO",
    note: "",
  },
  {
    name: "Julia Vance",
    role: "Secretary",
    note: "",
  },
] as const

export const staff: { name: string; role: string; note: string }[] = []

export const whoWeServe = [
  {
    title: "Underserved communities",
    body: "Palm Beach County and surrounding counties — neighborhoods where the programs other places take for granted are not on the block, or cost too much to touch. Not one zip code. Not one age group.",
  },
  {
    title: "Whoever a fee would leave out",
    body: "Young people, families, veterans, seniors, and adults with disabilities. If cost is the reason someone stays home, that is exactly who the work is for.",
  },
  {
    title: "Where people already gather",
    body: "Halls, posts, schools, and community rooms. We bring the program to the neighborhood. We do not ask anyone to cross the county for a building they cannot afford.",
  },
] as const

export const howWeWork = [
  {
    title: "We bring programs to communities",
    body: "Lipson Foundation does not own a facility. We pack a program — the coaching, the equipment, the meal, the people who run it — into a space the neighborhood already trusts.",
  },
  {
    title: "Different communities, different programs",
    body: "A youth program and a veterans program and a seniors program do not look alike, and they should not. Each program is shaped around the people in the room — not the other way around.",
  },
  {
    title: "Every program is completely cost-free",
    body: "No memberships, no dues, no equipment to buy, no fundraiser to sell. Cost is never how we decide who belongs.",
  },
] as const

/**
 * The mandate stated foundation-wide. These are deliberately not program
 * categories: fitness, wellness and mentoring are where the work starts, and
 * naming them here would read as the limit of it.
 */
export const whatWeBuild = [
  {
    title: "Community programming",
    body: "Whatever a neighborhood needs and cost has kept out of reach. The category is not the point — the community is.",
  },
  {
    title: "Underserved communities",
    body: "South Florida and Palm Beach County. Whoever a membership fee, a commute, or a program cost would leave out.",
  },
  {
    title: "Cost-free, always",
    body: "No memberships, no fees, no fine print. Cost is never the reason someone is left out.",
  },
  {
    title: "And whatever comes next",
    body: "The mandate is cost-free community programs — all of them. When a community needs something that is not on this list, the list grows.",
  },
] as const

/** Groups inside In Ur Corner — not named programs. Shown on /in-your-corner. */
export const groups = [
  {
    slug: "the-ring",
    name: "The Ring",
    href: "/in-your-corner#the-ring",
    body: "Youth and veterans train side by side.",
  },
  {
    slug: "the-corner",
    name: "The Corner",
    href: "/in-your-corner#the-corner",
    body: "Veterans who choose to mentor, after the relationship is real.",
  },
  {
    slug: "the-crew",
    name: "The Crew",
    href: "/in-your-corner#the-crew",
    body: "Adults with developmental disabilities in paid support roles. Not a volunteer list.",
  },
] as const

export const programs = [
  {
    slug: "in-your-corner",
    name: "In Ur Corner",
    href: "/in-your-corner",
    status: "Flagship",
    mark: "/brand/iyc-tag.png",
    summary:
      "A cost-free boxing and mentorship program that brings youth ages 12–17 and veterans together to train. Boxing builds the relationships. Mentorship deepens them — later, not on day one. The Ring, The Corner, and The Crew live inside it.",
  },
] as const

/**
 * The nav lists programs only. The Ring, The Corner, The Crew and Career
 * Exploration Night are parts of In Ur Corner rather than programs of their
 * own, so they live on the In Ur Corner page and are not surfaced here.
 */
export const teamMenu = [
  {
    href: "/team/board",
    name: "Board of Directors",
    body: "The named officers of Lipson Foundation Inc.",
  },
  {
    href: "/team/staff",
    name: "Staff",
    body: "Listed here as roles are filled.",
  },
] as const

export const programMenu = [
  {
    href: "/in-your-corner",
    name: "In Ur Corner",
    body: "Cost-free boxing and mentorship for youth and veterans.",
  },
] as const

export const formPages = [
  {
    href: "/contact",
    title: "Contact",
    body: "A question, a hosting conversation, or a note for Zachary Lipson.",
  },
  {
    href: "/help",
    title: "Get involved",
    body: "Host a hall, refer a young person, train as a veteran, lead a career night, or help with meals.",
  },
  {
    href: "/donate",
    title: "Donate",
    body: "Give what you can. Every gift keeps a program cost-free.",
  },
] as const

/**
 * Givebutter hosts the giving form. The widget renders card entry inside an
 * iframe served from their domain, so no card number ever reaches this site's
 * code and the site stays out of PCI scope.
 *
 * Both values are public identifiers - they appear in the page source either
 * way. Find them in Givebutter under the campaign, Share, then Embed: the
 * script tag carries `acct=` and the element carries the widget id.
 *
 * While these are empty the donate page falls back to the inquiry form, so
 * nothing about giving is claimed before it actually works.
 */
export const givebutter = {
  account: "",
  widget: "",
} as const

export const isGiving = Boolean(givebutter.account && givebutter.widget)

/**
 * Amounts only. Each one used to carry a line saying what it covered, which
 * priced things the foundation has no budget for yet; the amounts stand on
 * their own as something to pick.
 */
export const donateAsks = [
  { value: "50", title: "$50" },
  { value: "100", title: "$100" },
  { value: "250", title: "$250" },
  { value: "500", title: "$500" },
  { value: "other", title: "Other" },
] as const

export const events: {
  title: string
  when: string
  where: string
  body: string
}[] = []

export const newsItems: {
  title: string
  date: string
  body: string
}[] = []

export const helpPaths = [
  {
    title: "Veteran posts",
    body: "Host sessions. We bring the kit, carry insurance, and leave it clean. Walk-ins only until a counsel-reviewed agreement exists.",
  },
  {
    title: "Schools and counselors",
    body: "Refer a young person who needs a safe place to be.",
  },
  {
    title: "Businesses and professionals",
    body: "Lead a monthly Career Exploration Night.",
  },
  {
    title: "Veterans",
    body: "Any era. Come train — and mentor when you are ready.",
  },
  {
    title: "Supporters",
    body: "Every gift keeps a program cost-free to the people it serves. Use the Donate page to give, or to start that conversation.",
  },
] as const

export const sessionShape = [
  {
    title: "Twice a week",
    body: "60 minutes of training, then 30 minutes of dinner together. Days, times, and a start date are not set. We will not print placeholders as facts.",
  },
  {
    title: "Monthly",
    body: "Career Exploration Night: 60 minutes of training, then 30 minutes with a working professional — a trade, a first responder, a business owner, a veteran who used the GI Bill.",
  },
  {
    title: "Completely cost-free",
    body: "Gloves, wraps, coaching, water, and dinner included. No dues, no fees, no equipment to buy, no fundraiser to sell.",
  },
  {
    title: "Non-contact",
    body: "Footwork, bag work, mitt work, and fitness. No sparring. No head contact of any kind.",
  },
] as const

export const youthOffer = [
  {
    title: "Train twice a week",
    body: "60 minutes of boxing and conditioning, then dinner together. That meal is where conversation happens.",
  },
  {
    title: "Everything provided",
    body: "Gloves, wraps, coaching, water, dinner, and transportation assistance. Families do not buy a kit to walk in.",
  },
  {
    title: "Mentorship that is real",
    body: "Relationships with veterans and community members — after the work is shared, not assigned on day one.",
  },
  {
    title: "Confidence beyond the gym",
    body: "Show up on time. Control yourself. Work when it is hard. Respect the person across from you.",
  },
] as const

export const veteranOffer = [
  {
    title: "Stay connected",
    body: "Train alongside fellow veterans as part of a mission-driven community.",
  },
  {
    title: "A healthy physical outlet",
    body: "Fitness, structure, and less isolation — without anyone having to talk about feelings first.",
  },
  {
    title: "Be in a young person’s corner",
    body: "Share life experience, career knowledge, and encouragement when you are ready.",
  },
  {
    title: "Continue serving",
    body: "A reason to show up on a weeknight. A lasting impact on the next generation.",
  },
] as const

export const faqs = [
  {
    question: "What is Lipson Foundation?",
    answer:
      "Lipson Foundation Inc. is a South Florida nonprofit (EIN 39-4624045) that builds cost-free community programs for underserved communities. We do not own a facility. We bring programs into halls, posts, schools, and rooms a neighborhood already trusts. Every program is completely cost-free — no memberships, no fees, ever.",
  },
  {
    question: "Do you only run fitness programs?",
    answer:
      "No. The mandate is cost-free community programs, full stop. Fitness, wellness, and mentoring are where the work starts, because that is what the flagship needed first. When a community needs something different, that becomes a program too. More named programs will be listed as they launch.",
  },
  {
    question: "Who do you serve?",
    answer:
      "Underserved communities in Palm Beach County and surrounding counties — whoever a fee would leave out. In Ur Corner is built for youth ages 12–17 and military veterans of any era, with paid Crew roles for adults with developmental disabilities. That is one program, not the limit of who the foundation is for.",
  },
  {
    question: "Is In Ur Corner a boxing gym?",
    answer:
      "No. Lipson Foundation does not own a gym. In Ur Corner brings equipment, coaching, insurance, and meals into a host veterans hall once a host exists. Training is the hook. Mentorship is the point — later, not on day one.",
  },
  {
    question: "When do sessions start?",
    answer:
      "A host hall is not signed, and a start date is not set. If you want to host, train, refer a young person, or help with meals, write to us. We will not invent a calendar.",
  },
  {
    question: "Can I donate online?",
    answer:
      "Yes — use the Donate page. If you would rather talk first, or give in kind, the same page has a form and we will follow up.",
  },
  {
    question: "How do I reach you?",
    answer:
      "Zachary Lipson, Founder and President. zlipson@lipsonfoundation.org.",
  },
] as const
