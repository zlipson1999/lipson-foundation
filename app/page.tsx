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
import { site } from "@/lib/site"
import { WorkPillars } from "@/components/work-pillars"

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
    body: "Cost-free programs we bring to underserved communities.",
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
              Lipson Foundation builds cost-free programs for underserved communities.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
              A South Florida nonprofit. We bring cost-free fitness, wellness,
              and mentoring programs into underserved communities — not one
              gym, not one neighborhood.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                nativeButton={false}
                render={<Link href="/about" />}
              >
                About us
                <ArrowRightIcon data-icon="inline-end" />
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
            src="/brand/lipson-primary.png"
            alt="Lipson Foundation phoenix dog-tag"
            width={200}
            height={338}
            className="relative z-10 mx-auto h-56 w-auto sm:h-64 lg:mx-0 lg:h-72"
            unoptimized
            priority
          />
        </Container>
      </section>

      <section>
        <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div className="flex flex-col gap-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Home
            </p>
            <h2 className="text-3xl sm:text-4xl">Start here.</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              {site.legalName} brings cost-free fitness, wellness, and mentoring
              programs into underserved communities across {site.location} and
              surrounding counties. Read who we are, meet the team, then see
              the programs we bring to the room.
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

      <section className="border-y bg-secondary">
        <Container className="py-16 sm:py-20">
          <WorkPillars heading="We bring programs to underserved communities." />
        </Container>
      </section>

      <section>
        <Container className="flex flex-col gap-8 py-16 sm:py-20">
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
            src="/brand/iyc-tag.png"
            alt="In Your Corner dog-tag mark"
            width={160}
            height={205}
            className="h-40 w-auto justify-self-center lg:justify-self-start"
            unoptimized
          />
          <div className="flex flex-col gap-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              Flagship program — one of the ways this work shows up
            </p>
            <h2 className="text-3xl sm:text-4xl">In Your Corner</h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              Free boxing and mentorship for youth ages 12–17 and veterans.
              That is the named flagship. It is not the whole foundation.
              Other fitness, wellness, and mentoring programs will be listed as
              they launch — we will not invent a catalog.
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
    </>
  )
}
