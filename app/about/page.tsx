import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import Link from "next/link"
import { Container, PageIntro } from "@/components/container"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { faqs, mission, site, taxNotice, vision, whoWeServe } from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  title: "About us",
  description:
    "Lipson Foundation Inc. is a South Florida nonprofit (EIN 39-4624045) that builds cost-free community programs for underserved communities.",
  route: "/about",
})

export default function AboutPage() {
  return (
    <Container className="pb-20">
      {/* No standing copy under the title: the legal name, EIN and service
          area it carried are all in On the record beside the copy below. */}
      <PageIntro
        kicker="About us"
        title="Lipson Foundation is a South Florida nonprofit with a simple rule: cost-free."
      />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="flex flex-col gap-6 text-base leading-relaxed text-muted-foreground">
          <p>
            The Lipson Foundation was born from our founder&apos;s own struggle.
            Growing up with hereditary spastic paraplegia and no role models,
            Zachary Lipson learned that what changes lives isn&apos;t a cure.
            It&apos;s access — training, people who believed he could, and a
            place that did not ask what he could afford.
          </p>
          <p>
            Cost is the barrier that quietly decides who gets a chance. We remove
            it entirely. Every Lipson Foundation program is completely cost-free to
            the people it serves — no memberships, no fees, ever.
          </p>
          <p>
            The work lives in Palm Beach County and surrounding counties. We do
            not own a facility. We bring community programs into rooms the
            community already trusts — halls, posts, schools, and neighborhood
            spaces. Fitness, wellness, and mentoring are where the work starts.
            The mandate is any cost-free program a community needs. Different
            communities get different programs. That is the point.
          </p>
        </div>
        <aside className="flex flex-col gap-4 border border-border bg-card p-6">
          <h2 className="text-lg">On the record</h2>
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
              <dt className="text-muted-foreground">Status</dt>
              {/* The one approved wording, from its single source. */}
              <dd>{taxNotice}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Geography</dt>
              <dd>{site.location}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Contact</dt>
              <dd>
                <a href={`mailto:${site.email}`} className="hover:text-primary">
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
        </aside>
      </div>

      {/* Moved off the home page so the mission is stated where someone has
          come to read about the foundation, not where they have come to act. */}
      <section className="mt-16 flex flex-col gap-10">
        {/* The two statements share a format on purpose: same gold rule, same
            heading type, so they read as a pair rather than as body copy. The
            labels carry the heading level, since the statements are the
            content rather than a headline above them. */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3 border-l-2 border-gold pl-6">
            <h2 className="font-sans text-[11px] font-medium tracking-[0.22em] text-gold-ink uppercase">
              Mission
            </h2>
            <p className="max-w-2xl font-heading text-2xl leading-snug tracking-tight sm:text-3xl">
              {mission}
            </p>
          </div>
          <div className="flex flex-col gap-3 border-l-2 border-gold pl-6">
            <h2 className="font-sans text-[11px] font-medium tracking-[0.22em] text-gold-ink uppercase">
              Vision
            </h2>
            <p className="max-w-2xl font-heading text-2xl leading-snug tracking-tight sm:text-3xl">
              {vision}
            </p>
          </div>
        </div>
      </section>

      <section
        id="who-we-serve"
        className="mt-16 flex scroll-mt-28 flex-col gap-6"
      >
        <h2 className="text-3xl">Who we serve</h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          Underserved communities in South Florida. Whoever a membership fee,
          a gym commute, or a program cost would leave out.
        </p>
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
      </section>

      <section className="mt-16 flex flex-col gap-6">
        <h2 className="text-3xl">Questions we hear</h2>
        <Accordion defaultValue={["What is Lipson Foundation?"]}>
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="text-sm sm:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <div className="mt-12 flex flex-col gap-3 sm:flex-row">
        <Button
          size="lg"
          nativeButton={false}
          render={<Link href="/team/board" />}
        >
          Board of Directors
        </Button>
        <Button
          size="lg"
          variant="outline"
          nativeButton={false}
          render={<Link href="/programs" />}
        >
          Programs
        </Button>
      </div>
    </Container>
  )
}
