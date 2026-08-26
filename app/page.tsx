import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "@phosphor-icons/react/ssr"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { asset } from "@/lib/assets"
import { keepItFree, promises, site } from "@/lib/site"
import { WorkPillars } from "@/components/work-pillars"
import { Commitments } from "@/components/commitments"

export const metadata: Metadata = {
  title: { absolute: `${site.name} — Community programs. Completely free.` },
  description: site.description,
}

const destinations = [
  {
    href: "/about",
    title: "About us",
    body: "Who Lipson Foundation is, who we serve, and why every program is free.",
  },
  {
    href: "/team",
    title: "The team",
    body: "The board, and staff as roles are filled.",
  },
  {
    href: "/programs",
    title: "Programs",
    body: "Every cost-free program we bring to communities, starting with the flagship.",
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
      <section className="relative overflow-hidden border-b bg-primary text-primary-foreground">
        <Container className="relative grid gap-10 py-16 sm:py-24 lg:grid-cols-[minmax(0,1.25fr)_auto] lg:items-center">
          <div className="flex flex-col gap-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              {site.legalName} · EIN {site.ein}
            </p>
            <h1 className="max-w-3xl text-4xl leading-[1.1] sm:text-6xl">
              Advancing community well-being through free, inclusive programs.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
              Lipson Foundation is a South Florida nonprofit building cost-free
              community programs of every kind. We don&apos;t charge the people
              we serve. Not a membership fee, not a dollar, not ever.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="bg-gold text-primary hover:bg-gold/90"
                nativeButton={false}
                render={<Link href="/donate" />}
              >
                Donate — keep it free
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
              <Button
                size="lg"
                variant="secondary"
                nativeButton={false}
                render={<Link href="/about" />}
              >
                About us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gold/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                nativeButton={false}
                render={<Link href="/programs" />}
              >
                Programs
              </Button>
            </div>
          </div>
          <Image
            src={asset("/brand/lipson-tag.png")}
            alt=""
            width={360}
            height={640}
            className="relative z-10 mx-auto h-56 w-auto sm:h-64 lg:mx-0 lg:h-72"
            unoptimized
            priority
          />
        </Container>
        <div className="border-t border-gold/25">
          <Container className="grid gap-px sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-1 border-b border-primary-foreground/10 px-2 py-6 sm:border-b-0"
              >
                <p className="font-heading text-2xl text-gold">{item.title}</p>
                <p className="text-xs leading-relaxed text-primary-foreground/70">
                  {item.body}
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
              category and not one program — it is every community program that
              a fee, a membership, or an equipment list has kept out of reach.
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
            <p className="text-sm text-muted-foreground">
              Every program is completely free to the people it serves.
            </p>
          </aside>
        </Container>
      </section>

      <section className="border-y bg-secondary">
        <Container className="py-16 sm:py-20">
          <Commitments />
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
        <Container className="grid gap-8 py-16 sm:py-20 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-center">
          <Image
            src={asset("/brand/iyc-tag.png")}
            alt=""
            width={341}
            height={420}
            className="h-40 w-auto justify-self-center lg:justify-self-start"
            unoptimized
          />
          <div className="flex flex-col gap-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              Flagship program — the first of many
            </p>
            <h2 className="text-3xl sm:text-4xl">In Your Corner</h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              Free boxing and mentorship for youth ages 12–17 and veterans.
              It is the named flagship and the proof of the model: bring
              everything a program needs into a room the community trusts, and
              charge no one. New programs will be listed as they launch — we
              will not invent a catalog.
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
            {keepItFree}
          </p>
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
