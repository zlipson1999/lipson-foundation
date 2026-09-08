import type { Metadata } from "next"
import Link from "next/link"
import { pageMetadata } from "@/lib/seo"
import { Container, PageIntro } from "@/components/container"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { site } from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  title: "Adapthletics",
  description:
    "Adapthletics is the Lipson Foundation's adaptive fitness program in development — strength, mobility, and confidence for people with disabilities, cost-free, always.",
  route: "/adapthletics",
})

export default function AdapthleticsPage() {
  return (
    <Container className="pb-20">
      <PageIntro
        kicker="Adapthletics · In development"
        title="Fitness that adapts to the athlete."
      >
        <p>
          An adaptive fitness program for people with disabilities — strength,
          mobility, and confidence, with every movement fitted to the body
          doing it. Completely cost-free, like everything the Lipson Foundation
          builds.
        </p>
      </PageIntro>

      <section className="flex max-w-3xl flex-col gap-4">
        <h2 className="text-3xl">Why this exists</h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          Adapthletics is named and designed by our founder, Zachary Lipson,
          who lives with hereditary spastic paraplegia. What changed his life
          was not a cure. It was access — to training, to people who believed
          he could, to a place that did not ask what he could afford.
          Adapthletics exists to be that access for someone else: a program
          where the training bends to the athlete, never the other way around,
          and where cost is never the reason someone stops.
        </p>
      </section>

      <section className="mt-16 grid max-w-4xl gap-8 sm:grid-cols-3">
        <div className="border-l-2 border-gold pl-4">
          <p className="font-heading text-lg">Adapted, not watered down</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Real training — strength, mobility, and fitness — with the
            movements, pace, and goals fitted to each athlete&apos;s body.
          </p>
        </div>
        <div className="border-l-2 border-gold pl-4">
          <p className="font-heading text-lg">Every body welcome</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Built for people with disabilities, at any starting point. Showing
            up is the only prerequisite.
          </p>
        </div>
        <div className="border-l-2 border-gold pl-4">
          <p className="font-heading text-lg">Cost-free, always</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            No memberships, no fees, no fine print. Cost is never the reason
            someone is left out.
          </p>
        </div>
      </section>

      <section className="mt-16 flex max-w-3xl flex-col gap-4">
        <Alert>
          <AlertTitle>Being designed now</AlertTitle>
          <AlertDescription>
            Adapthletics is in development. There is no schedule, venue, or
            start date yet — those stay blank until they are real. Tell us
            you&apos;re interested and you will hear first.
          </AlertDescription>
        </Alert>
      </section>

      <div className="mt-12 flex flex-col gap-3 sm:flex-row">
        <Button size="lg" nativeButton={false} render={<Link href="/help" />}>
          Tell us you&apos;re interested
        </Button>
        <Button
          size="lg"
          variant="outline"
          nativeButton={false}
          render={<Link href="/contact" />}
        >
          {site.email}
        </Button>
      </div>
    </Container>
  )
}
