import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon, HeartIcon } from "@phosphor-icons/react/ssr"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { asset } from "@/lib/assets"
import { commitments, heroBlurb, site } from "@/lib/site"
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
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,50%)] xl:grid-cols-[minmax(0,1fr)_minmax(0,44%)]">
          {/* The panel is square art, so it keeps its own aspect on small
              screens and fills the column height from lg up. */}
          <div className="relative order-first aspect-square overflow-hidden lg:order-last lg:aspect-auto">
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

          <div className="flex flex-col items-start gap-6 px-4 pb-14 pt-10 sm:px-6 lg:justify-center lg:py-16 lg:pl-[calc(max(0px,(100vw-72rem)/2)+2rem)] lg:pr-10">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              {site.legalName} · EIN {site.ein}
            </p>
            <h1 className="text-4xl leading-[1.08] text-balance sm:text-5xl lg:text-[2.6rem] xl:text-[3.5rem] 2xl:text-[3.75rem]">
              Cost-free community programs for underserved communities across
              South Florida.
            </h1>
            <p className="max-w-[46ch] text-lg leading-relaxed text-primary-foreground/75">
              {heroBlurb}
            </p>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button
                size="lg"
                className="h-11 bg-gold px-4 text-primary hover:bg-gold/90"
                nativeButton={false}
                render={<Link href="/donate" />}
              >
                Donate — keep it free
                <HeartIcon data-icon="inline-end" />
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="h-11 px-4"
                nativeButton={false}
                render={<Link href="/about" />}
              >
                About us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-11 border-gold/40 bg-transparent px-4 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                nativeButton={false}
                render={<Link href="/programs" />}
              >
                Programs
              </Button>
            </div>
          </div>
        </div>

        {/* Access, Dignity, Community and Service directly under the intro. */}
        <div className="border-t border-gold/25">
          <Container className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {commitments.map((item) => (
              <div key={item.title} className="flex flex-col gap-2">
                <p className="font-heading text-2xl text-gold">{item.title}</p>
                <p className="max-w-[30ch] text-sm leading-relaxed text-primary-foreground/70">
                  {item.short}
                </p>
              </div>
            ))}
          </Container>
        </div>
      </section>

      <section>
        <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div className="flex flex-col gap-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              The mission
            </p>
            <h2 className="text-3xl sm:text-4xl">
              If cost is the barrier, the program is our job.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              {site.legalName} serves underserved communities across{" "}
              {site.location} and surrounding counties. The work is not one
              category and not one program.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Read who we are, meet the team, then see the programs we bring to
              the room.
            </p>
          </div>
          <aside className="flex flex-col gap-3 border border-border bg-card p-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              On the record
            </p>
            <p className="text-sm">{site.legalName}</p>
            <p className="text-sm text-muted-foreground">EIN {site.ein}</p>
            <p className="text-sm text-muted-foreground">{site.location}</p>
          </aside>
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

      <section>
        <Container className="flex flex-col gap-8 py-16 sm:py-20">
          <div className="flex flex-col gap-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold-ink">
              Flagship program — the first of many
            </p>
            <h2 className="text-3xl sm:text-4xl">In Your Corner</h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              Boxing and mentorship for youth ages 12–17 and veterans. It is
              the named flagship and the proof of the model: bring everything a
              program needs into a room the community trusts. New programs
              will be listed as they launch — we will not invent a catalog.
            </p>
            <p className="max-w-2xl text-base leading-relaxed">
              This is what it means to have someone in your corner.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" nativeButton={false} render={<Link href="/in-your-corner" />}>
                Read the program
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<Link href="/forms" />}
              >
                Forms
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t bg-primary text-primary-foreground">
        <Container className="flex flex-col gap-6 py-16 sm:py-20">
          <h2 className="max-w-2xl text-3xl sm:text-4xl">
            Help keep every program free.
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
