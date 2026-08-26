import type { Metadata } from "next"
import Link from "next/link"
import { Container, PageIntro } from "@/components/container"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { pillars, whoWeServe } from "@/lib/site"

export const metadata: Metadata = {
  title: "Our work",
  description:
    "Lipson Foundation focuses on stability, opportunity, and belonging for young people and families in Palm Beach County.",
}

export default function WorkPage() {
  return (
    <Container className="pb-20">
      <PageIntro kicker="Our work" title="Practical help. Lasting change.">
        <p>
          We do not need another program that looks good in a brochure. We need
          rides, mentors, first jobs, and a place to put your bag down. That is
          the work.
        </p>
      </PageIntro>

      <Alert className="mb-12">
        <AlertTitle>How a new foundation shows up</AlertTitle>
        <AlertDescription>
          In this first chapter we partner with organizations already trusted in
          Palm Beach County and fund the gaps they name — essentials, coaching,
          training, and the unglamorous costs that keep someone in the game. As
          we grow, we will report who we funded and what changed.
        </AlertDescription>
      </Alert>

      <div className="flex flex-col gap-8">
        {pillars.map((pillar, index) => (
          <article
            key={pillar.slug}
            id={pillar.slug}
            className="grid gap-6 border border-border bg-card p-6 sm:p-10 lg:grid-cols-[8rem_1fr]"
          >
            <p className="font-heading text-4xl text-muted-foreground">
              0{index + 1}
            </p>
            <div className="flex flex-col gap-3">
              <Badge variant="secondary" className="w-fit">
                {pillar.title}
              </Badge>
              <h2 className="text-2xl sm:text-3xl">{pillar.title}</h2>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                {pillar.detail}
              </p>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl">Who this is for</h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            We pay particular attention to young adults, roughly 18 to 25, who
            are carrying more than their share — and to the families around
            them. Age is a lens, not a fence. If you are in Palm Beach County
            and trying to build a stable life, we want to hear from you or the
            people walking with you.
          </p>
        </div>
        <ul className="flex flex-col gap-2">
          {whoWeServe.map((item) => (
            <li key={item} className="border-b py-3 text-sm">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Ask us to partner</CardTitle>
            <CardDescription className="text-sm leading-relaxed">
              If you run a program that already serves these neighbors —
              workforce, housing, mentoring, recovery, reentry, education —
              tell us what a modest, well-aimed gift would unlock this quarter.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" nativeButton={false} render={<Link href="/involved" />}>
              Start a partnership
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<Link href="/contact" />}
            >
              Contact the team
            </Button>
          </CardContent>
        </Card>
      </section>
    </Container>
  )
}
