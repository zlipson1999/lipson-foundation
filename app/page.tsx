import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "@phosphor-icons/react/ssr"
import { Container } from "@/components/container"
import { BoardList } from "@/components/board-list"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { groups, site, whatWeBuild, whoWeServe } from "@/lib/site"

export const metadata: Metadata = {
  title: { absolute: `${site.name} — Community programs. Completely free.` },
  description: site.description,
}

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b bg-primary text-primary-foreground">
        <Image
          src="/brand/phoenix-dog-tag.svg"
          alt=""
          width={200}
          height={248}
          className="pointer-events-none absolute -right-8 top-8 h-[28rem] w-auto opacity-10 sm:right-8"
          unoptimized
        />
        <Container className="relative grid gap-10 py-16 sm:py-24 lg:grid-cols-[minmax(0,1.3fr)_auto] lg:items-center">
          <div className="flex flex-col gap-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              {site.legalName} · EIN {site.ein}
            </p>
            <h1 className="max-w-3xl text-4xl leading-[1.1] sm:text-6xl">
              Lipson Foundation builds cost-free programs for underserved communities.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
              We are a South Florida nonprofit. Fitness, wellness, and mentoring
              — completely free. No memberships, no fees, ever.
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
                Our programs
              </Button>
            </div>
          </div>
          <Image
            src="/brand/phoenix-dog-tag.svg"
            alt="Lipson Foundation phoenix dog-tag"
            width={200}
            height={248}
            className="relative z-10 hidden h-48 w-auto lg:block"
            unoptimized
            priority
          />
        </Container>
      </section>

      <section>
        <Container className="grid gap-10 py-16 sm:py-24 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="flex flex-col gap-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Who we are
            </p>
            <h2 className="text-3xl sm:text-4xl">A South Florida nonprofit with a simple rule: free.</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              {site.legalName} builds cost-free community programs in{" "}
              {site.location} and surrounding counties. Access is the origin
              story. Cost is the barrier that quietly decides who gets a shot.
              We remove it entirely.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Founded by Zachary Lipson, whose own journey with hereditary
              spastic paraplegia taught him that what changes a life is not a
              cure. It is training, people who believe you can, and a place that
              does not ask what you can afford.
            </p>
            <Button
              variant="link"
              className="w-fit px-0"
              nativeButton={false}
              render={<Link href="/about" />}
            >
              Read about us
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
          </div>
          <aside className="flex flex-col gap-4 border border-border bg-card p-6 sm:p-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              On the record
            </p>
            <dl className="flex flex-col gap-4 text-sm">
              <div>
                <dt className="text-muted-foreground">Legal name</dt>
                <dd>{site.legalName}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">EIN</dt>
                <dd>{site.ein}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Geography</dt>
                <dd>{site.location}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">The rule</dt>
                <dd>Every program is completely free to the people it serves.</dd>
              </div>
            </dl>
          </aside>
        </Container>
      </section>

      <section className="border-y bg-secondary">
        <Container className="flex flex-col gap-8 py-16 sm:py-24">
          <div className="flex max-w-2xl flex-col gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Who we serve
            </p>
            <h2 className="text-3xl sm:text-4xl">
              Underserved communities. Completely free.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              We go where a fee would keep someone out. Fitness, wellness, and
              mentoring should not require a membership.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {whoWeServe.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {item.body}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {whatWeBuild.map((item) => (
              <div key={item.title} className="border-l-2 border-gold pl-4">
                <p className="font-heading text-lg">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="flex flex-col gap-8 py-16 sm:py-24">
          <div className="flex max-w-2xl flex-col gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Our team
            </p>
            <h2 className="text-3xl sm:text-4xl">The board.</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Named officers of {site.legalName}. Zachary Lipson is Founder and
              President.
            </p>
          </div>
          <BoardList />
          <Button
            variant="link"
            className="w-fit px-0"
            nativeButton={false}
            render={<Link href="/about#team" />}
          >
            About the foundation
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
        </Container>
      </section>

      <section className="border-y bg-secondary">
        <Container className="flex flex-col gap-8 py-16 sm:py-24">
          <div className="flex max-w-2xl flex-col gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              What we do
            </p>
            <h2 className="text-3xl sm:text-4xl">Our programs.</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              These are the programs Lipson Foundation offers. The named
              flagship is In Your Corner. The Ring, the Corner, and the Crew
              are how that program is built — not separate launches.
            </p>
          </div>
          <div className="border border-border bg-card p-6 sm:p-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
              Flagship
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl">In Your Corner</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              A free boxing and mentorship program that brings youth ages 12–17
              and veterans together to train. Boxing builds the relationships.
              Mentorship deepens them — later, not on day one. Veterans get a
              mission. Kids get someone in their corner.
            </p>
            <Button
              className="mt-6"
              size="lg"
              nativeButton={false}
              render={<Link href="/in-your-corner" />}
            >
              Read the program
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {groups.map((group) => (
              <Link key={group.name} href={group.href} className="block">
                <Card className="h-full transition-colors hover:bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl">{group.name}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {group.body}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
          <Button
            variant="outline"
            size="lg"
            className="w-fit"
            nativeButton={false}
            render={<Link href="/programs" />}
          >
            All programs
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
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
