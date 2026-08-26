import type { Metadata } from "next"
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
import { faqs, site, values } from "@/lib/site"

export const metadata: Metadata = {
  title: "About",
  description:
    "Lipson Foundation is a 501(c)(3) human services organization in West Palm Beach, founded in 2025.",
}

export default function AboutPage() {
  return (
    <Container className="pb-20">
      <PageIntro kicker="About" title="A Palm Beach County foundation with a simple brief.">
        <p>
          Help people who have been counted out find stability, skills, and a
          community that stays. Then get out of the way so they can own what
          comes next.
        </p>
      </PageIntro>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="flex flex-col gap-6 text-base leading-relaxed text-muted-foreground">
          <p>
            Lipson Foundation Inc is a charitable organization based in West
            Palm Beach. The IRS recognized us as a 501(c)(3) in {site.taxExempt}.
            Our work sits in human services: the unglamorous, necessary supports
            that let someone show up to a job interview, stay in school, or
            sleep somewhere safe tonight.
          </p>
          <p>
            We are a young organization on purpose. Rather than wait for a
            perfect program manual, we are building alongside the people and
            partners already doing this work in Palm Beach County — mentoring
            networks, workforce programs, housing providers, and neighbors who
            know the names behind the statistics.
          </p>
          <p>
            The idea is not new. When young adults have guidance, mentors, and a
            supportive environment, they begin to see what is possible. Our job
            is to make that less of a slogan and more of a Tuesday.
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
              <dt className="text-muted-foreground">Tax-exempt since</dt>
              <dd>{site.taxExempt}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">NTEE</dt>
              <dd>{site.ntee}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Donations</dt>
              <dd>Tax-deductible to the extent allowed by law</dd>
            </div>
          </dl>
        </aside>
      </div>

      <section className="mt-16 flex flex-col gap-8">
        <h2 className="text-3xl">What we hold to</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {values.map((value) => (
            <Card key={value.title}>
              <CardHeader>
                <CardTitle className="text-lg">{value.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {value.body}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-8 border border-border bg-secondary p-6 sm:p-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col gap-3">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Leadership
          </p>
          <h2 className="text-3xl">Zachary Lipson</h2>
          <p className="text-sm text-muted-foreground">Founder · West Palm Beach</p>
        </div>
        <p className="text-base leading-relaxed text-muted-foreground">
          Zachary works in youth development and community wellness in Palm
          Beach County. He started Lipson Foundation to put durable support
          behind young adults who are aging out of systems, coming home from
          hardship, or simply trying to get a first fair shot. As the
          organization grows, we will name additional board members here.
        </p>
      </section>

      <section className="mt-16 flex flex-col gap-6">
        <h2 className="text-3xl">Questions we hear</h2>
        <Accordion>
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
        <Button size="lg" nativeButton={false} render={<Link href="/give" />}>
          Give
        </Button>
        <Button
          size="lg"
          variant="outline"
          nativeButton={false}
          render={<Link href="/contact" />}
        >
          Write to us
        </Button>
      </div>
    </Container>
  )
}
