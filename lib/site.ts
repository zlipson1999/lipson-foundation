export const site = {
  name: "Lipson Foundation",
  legalName: "Lipson Foundation Inc",
  tagline: "A path to possibility.",
  location: "West Palm Beach, Florida",
  ein: "39-4624045",
  founded: "2025",
  taxExempt: "October 2025",
  ntee: "Human Services — Multipurpose",
  email: "hello@lipsonfoundation.org",
  description:
    "Lipson Foundation is a 501(c)(3) human services organization in West Palm Beach. We help young people and families in Palm Beach County build stability, skills, and a future they can own.",
} as const

export const navItems = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Our work" },
  { href: "/give", label: "Give" },
  { href: "/involved", label: "Get involved" },
  { href: "/updates", label: "Updates" },
  { href: "/contact", label: "Contact" },
] as const

export const pillars = [
  {
    slug: "stability",
    title: "Stability",
    summary:
      "Help people meet basic needs so they can plan beyond the next day — housing connections, transportation, clothing, and hygiene essentials.",
    detail:
      "It is hard to look for work, stay in school, or recover when you do not know where you will sleep or how you will get there. We fund and partner on practical supports that make the rest of life possible.",
  },
  {
    slug: "opportunity",
    title: "Opportunity",
    summary:
      "Connect young adults to education, job training, career coaching, and the credentials that open a first real paycheck.",
    detail:
      "A resume, a trade certificate, or a seat in a classroom can change the trajectory of a life. We back programs that treat opportunity as something you practice, not something you wait for.",
  },
  {
    slug: "belonging",
    title: "Belonging",
    summary:
      "Pair people with mentors, wellness support, and a community that expects something of them — and shows up when it is hard.",
    detail:
      "Guidance and a supportive environment are not extras. They are how people begin to see what is possible and take ownership of their future.",
  },
] as const

export const whoWeServe = [
  "Young adults facing homelessness",
  "Youth aging out of foster care",
  "People looking for work or a first career",
  "Neighbors in recovery from substance use",
  "Families under financial strain",
  "People rebuilding after incarceration",
] as const

export const values = [
  {
    title: "Dignity first",
    body: "We treat every person as capable, not as a case file. Support should feel like a hand up, not a lecture.",
  },
  {
    title: "Close to the work",
    body: "Palm Beach County is home. We listen to the people living the problem before we fund a solution.",
  },
  {
    title: "Partners, not empires",
    body: "We would rather strengthen good programs than duplicate them. Community organizations already know the streets we serve.",
  },
  {
    title: "Clear books",
    body: "Donors and neighbors deserve to know where money goes. We publish our EIN, status, and — as filings come due — our returns.",
  },
] as const

export const faqs = [
  {
    question: "Is my gift tax-deductible?",
    answer:
      "Yes. Lipson Foundation Inc is a 501(c)(3) charitable organization. Donations are tax-deductible to the extent allowed by law. Our EIN is 39-4624045. Please keep your receipt for your records.",
  },
  {
    question: "How new is the foundation?",
    answer:
      "We were recognized as tax-exempt in October 2025. This site is the public face of a young organization: we are building programs, partnerships, and a donor community in the open rather than pretending we have a decade of history.",
  },
  {
    question: "Do you run programs directly or make grants?",
    answer:
      "Both, over time. In this first chapter we focus on partnerships with established Palm Beach County organizations and on practical support that young adults can use immediately. Direct programming will grow as capacity and funding allow.",
  },
  {
    question: "Can my organization apply for support?",
    answer:
      "Yes. Use the contact or get-involved form and tell us who you serve, what you need, and how you will know it worked. We review partnership requests as they come in.",
  },
  {
    question: "Do you have a donor portal yet?",
    answer:
      "Not yet. You can start a gift on this site and we will follow up with next steps — check, ACH, or a processor once it is in place. We would rather take a day to complete a gift correctly than collect card numbers we cannot yet safeguard.",
  },
] as const

export const giftAmounts = ["25", "50", "100", "250", "500", "other"] as const
