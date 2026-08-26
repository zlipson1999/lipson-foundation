export const site = {
  name: "Lipson Foundation",
  legalName: "Lipson Foundation Inc.",
  kicker: "Community programs. Completely free.",
  location: "South Florida / Palm Beach County",
  ein: "39-4624045",
  email: "zlipson@lipsonfoundation.org",
  phone: "845-642-1874",
  phoneHref: "tel:+18456421874",
  domain: "lipsonfoundation.org",
  description:
    "Lipson Foundation Inc. is a South Florida nonprofit building cost-free community programs in fitness, wellness, and mentoring for underserved communities. Flagship program: In Your Corner.",
} as const

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/team", label: "The team" },
  { href: "/programs", label: "Programs" },
  { href: "/events", label: "Events" },
  { href: "/news", label: "News" },
  { href: "/donate", label: "Donate" },
  { href: "/forms", label: "Forms" },
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
    body: "Palm Beach County and surrounding counties. Cost is the barrier that quietly decides who gets a shot. We remove it.",
  },
  {
    title: "Young people and veterans",
    body: "Youth who need structure, skills, and an adult in their corner — and military veterans looking for purpose, camaraderie, and a way to keep serving.",
  },
  {
    title: "Inclusive by design",
    body: "Adults with developmental disabilities work in paid Crew roles. Inclusion is built into how the work runs, not added later as a volunteer list.",
  },
] as const

export const whatWeBuild = [
  {
    title: "Fitness",
    body: "Training that is actually reachable. No membership, no dues, no equipment to buy.",
  },
  {
    title: "Wellness",
    body: "A meal after the work. Belonging in a room that does not ask what you can afford.",
  },
  {
    title: "Mentoring",
    body: "Adults who show up. Relationships first. Mentorship when both people are ready — not on day one.",
  },
] as const

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
    name: "In Your Corner",
    href: "/in-your-corner",
    status: "Flagship",
    summary:
      "A free boxing and mentorship program that brings youth ages 12–17 and veterans together to train. Boxing builds the relationships. Mentorship deepens them — later, not on day one.",
  },
] as const

export const programMenu = [
  {
    href: "/programs",
    name: "All programs",
    body: "What Lipson Foundation offers. In Your Corner is the flagship.",
  },
  {
    href: "/in-your-corner",
    name: "In Your Corner",
    body: "Free boxing and mentorship for youth and veterans.",
  },
  {
    href: "/in-your-corner#the-ring",
    name: "The Ring",
    body: "Youth and veterans train side by side.",
  },
  {
    href: "/in-your-corner#the-corner",
    name: "The Corner",
    body: "Mentorship after the relationship is real.",
  },
  {
    href: "/in-your-corner#the-crew",
    name: "The Crew",
    body: "Paid inclusive-employment roles.",
  },
  {
    href: "/in-your-corner#career-night",
    name: "Career Exploration Night",
    body: "Monthly: 60 minutes of training, then 30 minutes with a working professional.",
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
    body: "Sponsor a dinner, a session, or a season. No payment is taken on this site. We follow up.",
  },
] as const

export const donateAsks = [
  { value: "dinner", title: "$100", body: "Covers dinner for a session" },
  { value: "session", title: "$150", body: "Sponsors a full session" },
  { value: "season", title: "$500", body: "Sponsors one young person for a season" },
  { value: "other", title: "Another amount", body: "We will talk first" },
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
    body: "Planning asks: $150 sponsors a full session. $500 sponsors one young person for a season. $100 covers dinner. Use the Donate page to start that conversation. There is no checkout on this site.",
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
    title: "Completely free",
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
    title: "Equipment provided",
    body: "Gloves, wraps, coaching, water, and dinner. Families do not buy a kit to walk in.",
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
      "Lipson Foundation Inc. is a South Florida nonprofit (EIN 39-4624045) building cost-free community programs in fitness, wellness, and mentoring. Every program we run is completely free — no memberships, no fees, ever.",
  },
  {
    question: "Who do you serve?",
    answer:
      "Underserved communities in Palm Beach County and surrounding counties. The flagship program, In Your Corner, is built for youth ages 12–17 and military veterans of any era, with paid Crew roles for adults with developmental disabilities.",
  },
  {
    question: "Is In Your Corner a boxing gym?",
    answer:
      "No. Lipson Foundation does not own a gym. In Your Corner brings equipment, coaching, insurance, and meals into a host veterans hall once a host exists. Training is the hook. Mentorship is the point — later, not on day one.",
  },
  {
    question: "When do sessions start?",
    answer:
      "A host hall is not signed, and a start date is not set. If you want to host, train, refer a young person, or help with meals, write to us. We will not invent a calendar.",
  },
  {
    question: "Can I donate online?",
    answer:
      "There is a Donate page, but no payment processor. If you want to sponsor a session, a meal, or a season for a young person, use that form and we will follow up.",
  },
  {
    question: "How do I reach you?",
    answer:
      "Zachary Lipson, Founder and President. 845-642-1874. zlipson@lipsonfoundation.org.",
  },
] as const
