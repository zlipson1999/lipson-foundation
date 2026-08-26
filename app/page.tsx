import Link from "next/link"
import {
  ArrowRightIcon,
  HeartIcon,
  HouseLineIcon,
  PathIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react/ssr"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { pillars, site, whoWeServe } from "@/lib/site"

const pillarIcons = {
  stability: HouseLineIcon,
  opportunity: PathIcon,
  belonging: UsersThreeIcon,
} as const

export default function HomePage() {
  return (
    <>
      <section className="border-b bg-background">
        <Container className="grid gap-12 py-16 sm:py-24 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-end">
          <div className="flex flex-col gap-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              {site.location} · Est. {site.founded}
            </p>
            <h1 className="max-w-xl text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              {site.tagline}
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Lipson Foundation helps young people and families in Palm Beach
              County find their footing — then take the next step toward work,
              school, and a life they can own.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" nativeButton={false} render={<Link href="/give" />}>
                <HeartIcon data-icon="inline-start" />
                Give today
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<Link href="/work" />}
              >
                See our work
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-4 border border-border bg-card p-6 sm:p-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              At a glance
            </p>
            <dl className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <dt className="text-xs text-muted-foreground">Status</dt>
                <dd className="text-sm">IRS-recognized 501(c)(3)</dd>
              </div>
              <Separator />
              <div className="flex flex-col gap-1">
                <dt className="text-xs text-muted-foreground">EIN</dt>
                <dd className="text-sm">{site.ein}</dd>
              </div>
              <Separator />
              <div className="flex flex-col gap-1">
                <dt className="text-xs text-muted-foreground">Focus</dt>
                <dd className="text-sm">{site.ntee}</dd>
              </div>
              <Separator />
              <div className="flex flex-col gap-1">
                <dt className="text-xs text-muted-foreground">Home</dt>
                <dd className="text-sm">{site.location}</dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      <section className="border-b bg-primary text-primary-foreground">
        <Container className="grid gap-8 py-10 sm:grid-cols-3 sm:gap-10 sm:py-12">
          <p className="text-sm leading-relaxed sm:col-span-3 sm:max-w-3xl sm:text-base">
            When young adults have guidance, mentors, and a supportive
            environment, they begin to see what is possible — and take ownership
            of their future.
          </p>
        </Container>
      </section>

      <section>
        <Container className="flex flex-col gap-10 py-16 sm:py-24">
          <div className="flex max-w-2xl flex-col gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              How we help
            </p>
            <h2 className="text-3xl sm:text-4xl">Three doors in. One way forward.</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              We fund and build around the supports that actually move a life:
              a safe place to land, a skill that pays, and people who stay.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillarIcons[pillar.slug]
              return (
                <Card key={pillar.slug}>
                  <CardHeader>
                    <Badge variant="secondary">{pillar.title}</Badge>
                    <CardTitle className="mt-3 flex items-center gap-2 text-xl">
                      <Icon />
                      {pillar.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {pillar.summary}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="link"
                      nativeButton={false}
                      render={<Link href="/work" />}
                      className="px-0"
                    >
                      Read more
                      <ArrowRightIcon data-icon="inline-end" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="border-y bg-secondary">
        <Container className="grid gap-10 py-16 sm:py-24 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Who we serve
            </p>
            <h2 className="text-3xl sm:text-4xl">Neighbors, not abstractions.</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Palm Beach County is home to extraordinary wealth and to young
              people who are one missed ride, one eviction, or one closed door
              from losing the plot. We work with the people in that gap.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {whoWeServe.map((item) => (
              <li
                key={item}
                className="border border-border bg-card px-4 py-3 text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section>
        <Container className="grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="flex flex-col gap-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              A young foundation
            </p>
            <h2 className="text-3xl sm:text-4xl">Built in 2025. Built in public.</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Lipson Foundation Inc received 501(c)(3) recognition in{" "}
              {site.taxExempt}. We are honest about that. There is no decade of
              glossy impact reports yet — there is a clear purpose, a county we
              love, and an invitation to help us do the work well from the
              first dollar.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<Link href="/about" />}
              >
                Our story
              </Button>
              <Button size="lg" nativeButton={false} render={<Link href="/involved" />}>
                Get involved
              </Button>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Give where it lands.</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                A gift to Lipson Foundation is a gift to the next young adult
                who needs a mentor, a bus pass, a first resume, or a reason to
                believe the next chapter can look different.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" nativeButton={false} render={<Link href="/give" />}>
                Start a gift
              </Button>
              <p className="self-center text-xs text-muted-foreground">
                EIN {site.ein} · tax-deductible
              </p>
            </CardContent>
          </Card>
        </Container>
      </section>
    </>
  )
}
