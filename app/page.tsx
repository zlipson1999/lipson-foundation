import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRightIcon } from "@phosphor-icons/react/ssr"
import { Container } from "@/components/container"
import { PhoenixTag } from "@/components/marks"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { groups, site } from "@/lib/site"

export const metadata: Metadata = {
  title: { absolute: `${site.name} — Community programs. Completely free.` },
  description: site.description,
}

export default function HomePage() {
  return (
    <>
      <section className="border-b bg-primary text-primary-foreground">
        <Container className="flex flex-col gap-8 py-16 sm:py-24">
          <PhoenixTag className="size-14 text-gold" />
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
            {site.legalName} · EIN {site.ein}
          </p>
          <h1 className="max-w-3xl text-4xl leading-[1.1] sm:text-6xl">
            Cost-free programs in fitness, wellness, and mentoring.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            We build community programs in {site.location} and surrounding
            counties. Every program we run is completely free — no memberships,
            no fees, ever.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              nativeButton={false}
              render={<Link href="/in-your-corner" />}
            >
              In Your Corner
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<Link href="/help" />}
            >
              How to help
            </Button>
          </div>
        </Container>
      </section>

      <section>
        <Container className="grid gap-10 py-16 sm:py-24 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Who we are
            </p>
            <h2 className="text-3xl sm:text-4xl">Access changes lives.</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Lipson Foundation was founded by Zachary Lipson, whose own
              journey with hereditary spastic paraplegia taught him that access
              — to training, to people who believed he could, to a place that
              did not ask what he could afford — is what changes a life.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Cost is the barrier that quietly decides who gets a shot. We
              remove it entirely.
            </p>
          </div>
          <div className="flex flex-col gap-4 border border-border bg-card p-6 sm:p-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Flagship program
            </p>
            <h2 className="text-2xl">In Your Corner</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A free boxing and mentorship program that brings youth ages 12–17
              and veterans together to train. Boxing builds the relationships.
              Mentorship deepens them — later, not on day one. Veterans get a
              mission. Kids get someone in their corner.
            </p>
            <Button
              variant="link"
              className="w-fit px-0"
              nativeButton={false}
              render={<Link href="/in-your-corner" />}
            >
              Read the program
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
          </div>
        </Container>
      </section>

      <section className="border-y bg-secondary">
        <Container className="flex flex-col gap-8 py-16 sm:py-24">
          <div className="flex max-w-2xl flex-col gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Three groups. One team.
            </p>
            <h2 className="text-3xl sm:text-4xl">The Ring, the Corner, the Crew.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {groups.map((group) => (
              <Card key={group.name}>
                <CardHeader>
                  <CardTitle className="text-xl">{group.name}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {group.body}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="flex flex-col gap-6 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl">Want to host, train, or refer someone?</h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            We are looking for a veterans hall, veterans who will show up,
            counselors who know a kid who needs a safe place, and professionals
            who will spend 30 minutes talking about real work. There is no
            donate button here.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" nativeButton={false} render={<Link href="/help" />}>
              How to help
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<Link href="/contact" />}
            >
              Write to Zachary
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
