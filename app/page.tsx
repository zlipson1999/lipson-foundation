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
import { commitments, heroBlurb, programs, site } from "@/lib/site"
import { WorkPillars } from "@/components/work-pillars"

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
  {
    href: "/team",
    title: "The team",
    body: "The board, and staff as roles are filled.",
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
    body: "Sponsor a dinner, a session, or a season. No checkout on this site.",
  },
] as const

export default function HomePage() {
  return (
    <>
      <section className="border-b bg-primary text-primary-foreground">
        {/* Intro. One grid: the artwork panel leads on small screens and moves
            to the right from lg up, where the copy column's left padding is
            calculated to line up with the centred container everywhere else on
            the page. */}
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
            {/* The art's left edge lands mid-teal against the hero navy, which
                reads as a seam. This carries one into the other. */}
            <div
              aria-hidden
              className="absolute inset-y-0 left-0 hidden w-28 bg-gradient-to-r from-primary to-transparent lg:block"
            />
          </div>

          <div className="flex flex-col items-start gap-6 px-4 pb-14 pt-10 sm:px-6 lg:justify-center lg:py-10 lg:pl-[calc(max(0px,(100vw-72rem)/2)+2rem)] lg:pr-10">
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-gold sm:text-sm">
              {site.legalName} · EIN {site.ein}
            </p>
            <h1 className="text-4xl leading-[1.08] text-balance sm:text-5xl lg:text-[2.75rem] xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Cost-free community programs for underserved communities across
              South Florida.
            </h1>
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
              <div key={item.title} className="flex flex-col gap-2">
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
      <section>
        <Container className="flex flex-col gap-8 py-16 sm:py-20">
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
                className="flex flex-col gap-6 border-l-2 border-gold pl-6 sm:flex-row sm:items-start sm:gap-8"
              >
                <Image
                  src={asset(program.mark)}
                  alt=""
                  width={612}
                  height={640}
                  className="h-24 w-auto shrink-0 sm:h-28"
                  unoptimized
                />
                <div className="flex flex-col items-start gap-3">
                  <Badge variant="secondary">{program.status}</Badge>
                  <h3 className="font-heading text-2xl">{program.name}</h3>
                  <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {program.summary}
                  </p>
                  <Button
                    nativeButton={false}
                    render={<Link href={program.href} />}
                  >
                    Read the program
                    <ArrowRightIcon data-icon="inline-end" />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>


      <section>
        <Container className="py-16 sm:py-20">
          <WorkPillars heading="All cost-free community programs." />
        </Container>
      </section>

      <section className="border-y bg-secondary">
        <Container className="flex flex-col gap-8 py-16 sm:py-20">
          <div className="flex max-w-2xl flex-col gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Explore
            </p>
            <h2 className="text-3xl sm:text-4xl">Find your way around.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((item) => (
              <Link key={item.href} href={item.href} className="block">
                <Card className="h-full transition-colors hover:bg-card">
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

      <section className="border-t bg-primary text-primary-foreground">
        <Container className="flex flex-col gap-6 py-16 sm:py-20">
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
    </>
  )
}
