import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "@phosphor-icons/react/ssr"
import { Container } from "@/components/container"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { asset } from "@/lib/assets"
import { RingRopes } from "@/components/marks"
import { commitments, heroBlurb, locationLines, programs, site } from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  title: `${site.name} — ${site.kicker}`,
  description: site.description,
  route: "/",
  absoluteTitle: true,
})

const destinations = [
  {
    href: "/about",
    title: "About us",
    body: "Who Lipson Foundation is, who we serve, and why the work exists.",
  },
  // No card for /team: the team is reached through the header picker
  // (Board of Directors or Staff), never a page link of its own.
  {
    href: "/help",
    title: "Get involved",
    body: "Host a hall, refer a young person, train as a veteran, lead a career night, or help with meals.",
  },
  {
    href: "/programs",
    title: "Programs",
    body: "The programs we bring to communities, starting with the flagship.",
  },
  {
    href: "/events",
    title: "Events",
    body: "Public dates when they exist. None are posted yet.",
  },
  {
    href: "/news",
    title: "News",
    body: "Updates from the foundation. The page is ready; the feed is not.",
  },
  {
    href: "/donate",
    title: "Donate",
    body: "Every gift keeps a program cost-free to the people it serves.",
  },
] as const

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="order-1 bg-primary text-primary-foreground">
        {/* Intro. One grid: the artwork panel leads on small screens and moves
            to the right from lg up, where the copy column's left padding is
            calculated to line up with the centred container everywhere else on
            the page. */}
        {/* Only what is not already on screen above: the header carries the
            name and the mark, so this is the EIN, where we work, and the two
            ways to reach us. Desktop only - on a phone it would wrap into
            three lines and push the hero down. */}
        <div className="hidden border-b border-primary-foreground/10 lg:block">
          {/* Everything stays on one line at every width the strip renders at.
              The type steps down rather than any item dropping out: measured
              at 1024, the four items need 886px of the 960 available. */}
          <Container className="flex items-center justify-between gap-4 py-3.5 text-[11px] font-medium tracking-[0.1em] whitespace-nowrap text-primary-foreground/60 uppercase xl:gap-6 xl:text-[12px] xl:tracking-[0.16em]">
            <span className="text-gold">EIN {site.ein}</span>
            <span>{site.location}</span>
            <a href={`mailto:${site.email}`} className="hover:text-gold">
              {site.email}
            </a>
          </Container>
        </div>
        {/* Phones get the same facts as the desktop strip, split around the
            art: where we work above it, who we are and how to reach us below.
            The service area needs two lines at this width. */}
        <p className="border-b border-primary-foreground/10 px-4 py-3 text-center text-[11px] font-medium tracking-[0.1em] text-primary-foreground/60 uppercase lg:hidden">
          {locationLines[0]}
          <span className="block">{locationLines[1]}</span>
        </p>
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,46%)] xl:grid-cols-[minmax(0,1fr)_minmax(0,41%)]">
          {/* The panel is square art, so it keeps its own aspect on small
              screens and fills the column height from lg up. */}
          <div className="relative order-first aspect-square overflow-hidden lg:order-last lg:self-end">
            <Image
              src={asset("/brand/hero-panel.webp")}
              alt="Zachary Lipson, Founder and President, beside the Lipson Foundation dog tag"
              width={1100}
              height={1100}
              className="absolute inset-0 h-full w-full object-cover object-center"
              priority
              unoptimized
            />
            {/* The art's edges land mid-teal against the hero navy, which reads
                as a seam - on the left, and along the top where the square
                sits lower than the copy beside it. These carry one into the
                other. */}
            <div
              aria-hidden
              className="absolute inset-y-0 left-0 hidden w-28 bg-gradient-to-r from-primary to-transparent lg:block"
            />
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 hidden h-20 bg-gradient-to-b from-primary to-transparent lg:block"
            />
          </div>

          <div className="flex flex-col items-center gap-1 border-b border-primary-foreground/10 px-4 py-3 text-center text-[11px] font-medium tracking-[0.1em] whitespace-nowrap text-primary-foreground/60 uppercase lg:hidden">
            <span className="text-gold">EIN {site.ein}</span>
            <a href={`mailto:${site.email}`} className="hover:text-gold">
              {site.email}
            </a>
          </div>

          <div className="flex flex-col items-start gap-6 px-4 pb-14 pt-10 sm:px-6 lg:justify-center lg:py-8 lg:pl-[calc(max(0px,(100vw-72rem)/2)+2rem)] lg:pr-10">
            <h1 className="font-display text-4xl leading-[1.08] text-balance sm:text-5xl lg:text-[2.75rem] xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Cost-free community programs for underserved communities across
              South Florida.
            </h1>
            {/* Blurb and buttons share a group so the buttons sit closer to
                the line above them than the headline does to the blurb. */}
            <div className="flex w-full flex-col gap-4">
              <p className="max-w-[46ch] text-lg leading-relaxed text-primary-foreground/75">
                {heroBlurb}
              </p>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Button
                  size="lg"
                  className="h-12 bg-gold px-6 text-[15px] text-primary hover:bg-gold/90"
                  nativeButton={false}
                  render={<Link href="/donate" />}
                >
                  Donate
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="h-12 px-6 text-[15px]"
                  nativeButton={false}
                  render={<Link href="/about" />}
                >
                  About us
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 border-gold/40 bg-transparent px-6 text-[15px] text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  nativeButton={false}
                  render={<Link href="/programs" />}
                >
                  Programs
                </Button>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Its own section so the order can differ by breakpoint: the four sit
          under the hero on desktop, and after the programs on phones, where
          the hero already fills the screen and the concrete thing should come
          before the abstract one. Same navy and the same bottom border the
          hero used to carry, so desktop is unchanged. */}
      <section className="order-3 border-b bg-primary text-primary-foreground lg:order-2">
        {/* Access, Dignity, Community and Service directly under the intro.
            This is now the only place the four appear; /about links here
            rather than repeating them. */}
        <div className="border-t border-gold/25">
          <Container className="flex flex-col gap-6 py-12">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              Our commitment
            </p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {commitments.map((item) => (
              <div key={item.title} className="reveal flex flex-col gap-2">
                <p className="font-heading text-2xl text-gold">{item.title}</p>
                <p className="max-w-[30ch] text-sm leading-relaxed text-primary-foreground/70">
                  {item.short}
                </p>
              </div>
            ))}
            </div>
          </Container>
        </div>
      </section>

      {/* The programs, straight after the commitments. One entry today; the
          list grows from lib/site.ts as programs launch, and no placeholder
          stands in for one that has not. */}
      <section className="order-2 lg:order-3">
        <Container className="flex flex-col gap-8 py-12 sm:py-20">
          <RingRopes className="h-3 text-gold-ink/25" />
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold-ink">
              What we run
            </p>
            <h2 className="text-3xl sm:text-4xl">Our programs</h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              Every one is cost-free to the people it serves. New programs are
              listed as they launch.
            </p>
          </div>
          <ul className="flex flex-col gap-6">
            {programs.map((program) => (
              <li
                key={program.slug}
                className="flex flex-col items-center gap-6 border-t-2 border-gold pt-6 text-center sm:flex-row sm:items-start sm:gap-8 sm:border-t-0 sm:border-l-2 sm:pt-0 sm:pl-6 sm:text-left"
              >
                <Image
                  src={asset(program.mark)}
                  alt=""
                  width={612}
                  height={640}
                  className="h-28 w-auto shrink-0 self-center sm:h-32 lg:h-36"
                  unoptimized
                />
                <div className="flex flex-col items-center gap-3 sm:items-start">
                  <Badge variant="secondary">{program.status}</Badge>
                  <h3 className="font-heading text-2xl">{program.name}</h3>
                  <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {program.summary}
                  </p>
                  <Button
                    className="group"
                    nativeButton={false}
                    render={<Link href={program.href} />}
                  >
                    Read the program
                    <ArrowRightIcon
                      data-icon="inline-end"
                      className="transition-transform motion-safe:group-hover:translate-x-0.5"
                    />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>


      {/* Why the foundation exists, in the founder's story. Every line is
          reused from /about and lib/site.ts (board[0].note) — this section
          re-sequences existing copy, it does not add facts. */}
      <section className="order-4 border-t">
        <Container className="flex flex-col gap-6 py-12 sm:py-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold-ink">
            Why this exists
          </p>
          {/* Deliberately NOT a <blockquote>: this is the site's own copy
              about the founder (verbatim from board[0].note), not something
              he said — quote markup would fabricate a testimonial. */}
          <div className="flex flex-col gap-4 border-l-2 border-gold pl-6">
            <p className="max-w-3xl font-heading text-2xl leading-snug tracking-tight sm:text-3xl">
              What changed his life was not a cure. It was access — to
              training, to people who believed he could, to a place that did
              not ask what he could afford.
            </p>
            <p className="text-sm text-muted-foreground">
              Zachary Lipson, Founder and President, lives with hereditary
              spastic paraplegia.
            </p>
          </div>
          <div>
            <Button
              variant="outline"
              className="group"
              nativeButton={false}
              render={<Link href="/about" />}
            >
              Read the story
              <ArrowRightIcon
                data-icon="inline-end"
                className="transition-transform motion-safe:group-hover:translate-x-0.5"
              />
            </Button>
          </div>
        </Container>
      </section>

      <section className="order-5 border-y bg-secondary">
        <Container className="flex flex-col gap-8 py-12 sm:py-20">
          <div className="flex max-w-2xl flex-col gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Explore
            </p>
            <h2 className="text-3xl sm:text-4xl">Find your way around.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((item) => (
              <Link key={item.href} href={item.href} className="group block">
                <Card className="reveal h-full transition-colors hover:bg-card">
                  {/* A gold line draws across the card's top edge on hover. */}
                  <span
                    aria-hidden
                    className="-mt-4 block h-0.5 w-full origin-left scale-x-0 bg-gold transition-transform duration-300 motion-safe:group-hover:scale-x-100"
                  />
                  <CardHeader>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {item.body}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* No watermark here or in the footer — the owner keeps the bottom of
          the page plain apart from the small footer logo. */}
      <section className="order-6 border-t bg-primary text-primary-foreground">
        <Container className="flex flex-col gap-6 py-12 sm:py-20">
          <h2 className="max-w-2xl text-3xl sm:text-4xl">
            Help keep every program cost-free.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-primary-foreground/80">
            Host a space, refer someone, lend a skill, or sponsor a session.
            Every note goes to a person, not a queue.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="bg-gold text-primary hover:bg-gold/90"
              nativeButton={false}
              render={<Link href="/donate" />}
            >
              Donate
            </Button>
            <Button
              size="lg"
              variant="secondary"
              nativeButton={false}
              render={<Link href="/help" />}
            >
              Get involved
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gold/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              nativeButton={false}
              render={<Link href="/contact" />}
            >
              Contact
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}
