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
    "Lipson Foundation Inc. is a South Florida nonprofit building cost-free community programs in fitness, wellness, and mentoring. Flagship program: In Your Corner, free boxing and mentorship for youth and veterans.",
} as const

export const navItems = [
  { href: "/in-your-corner", label: "In Your Corner" },
  { href: "/about", label: "About" },
  { href: "/help", label: "How to help" },
  { href: "/contact", label: "Contact" },
] as const

export const board = [
  { name: "Zachary Lipson", role: "President" },
  { name: "Joshua Weinfeld", role: "CFO" },
  { name: "Julia Vance", role: "Secretary" },
] as const

export const groups = [
  {
    name: "The Ring",
    body: "Youth and veterans train side by side.",
  },
  {
    name: "The Corner",
    body: "Veterans who choose to mentor, after the relationship is real.",
  },
  {
    name: "The Crew",
    body: "Adults with developmental disabilities in paid support roles. Not a volunteer list.",
  },
] as const

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
    body: "Planning asks only: $150 sponsors a full session. $500 sponsors one young person for a season. $100 covers dinner for a session. There is no donate button on this site.",
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
    body: "Equipment, coaching, and dinner included. No dues, no fees, no equipment to buy, no fundraiser to sell.",
  },
  {
    title: "Non-contact",
    body: "Footwork, bag work, mitt work, and fitness. No sparring. No head contact of any kind.",
  },
] as const

export const faqs = [
  {
    question: "Is In Your Corner a boxing gym?",
    answer:
      "No. Lipson Foundation does not own a gym. In Your Corner brings equipment, coaching, insurance, and meals into a host veterans hall once a host exists. Training is the hook. Mentorship is the point — later, not on day one.",
  },
  {
    question: "Who can take part?",
    answer:
      "Youth ages 12–17 from Palm Beach County, referred by families, schools, community centers, and juvenile diversion programs, or who walk in. Military veterans of any era, any branch. Adults with developmental disabilities in paid Crew roles.",
  },
  {
    question: "When do sessions start?",
    answer:
      "A host hall is not signed, and a start date is not set. If you want to host, train, refer a young person, or help with meals, write to us. We will not invent a calendar.",
  },
  {
    question: "Can I donate online?",
    answer:
      "Not on this site. There is no payment processor. If you want to sponsor a session, a meal, or a season for a young person, use the contact form and we will follow up.",
  },
  {
    question: "How do I reach you?",
    answer:
      "Zachary Lipson, Founder and President. 845-642-1874. zlipson@lipsonfoundation.org.",
  },
] as const
