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
import { board, faqs, site } from "@/lib/site"

export const metadata: Metadata = {
  title: "About",
  description:
    "Lipson Foundation Inc. is a South Florida nonprofit (EIN 39-4624045) building cost-free community programs.",
}

export default function AboutPage() {
  return (
    <Container className="pb-20">
      <PageIntro kicker="About" title="A South Florida nonprofit with a simple rule: free.">
        <p>
          {site.legalName} (EIN {site.ein}) builds cost-free community programs
          in fitness, wellness, and mentoring. Service area: {site.location}{" "}
          and surrounding counties.
        </p>
      </PageIntro>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="flex flex-col gap-6 text-base leading-relaxed text-muted-foreground">
          <p>
            Founded by Zachary Lipson, whose own journey with hereditary
            spastic paraplegia taught him that access changes lives. What
            changed his was not a cure. It was training, people who believed he
            could, and a place that did not ask what he could afford.
          </p>
          <p>
            The flagship program is In Your Corner: free boxing and mentorship
            for youth 12–17 and veterans. The Foundation does not own a gym. It
            brings equipment, coaching, insurance, and meals into a host hall.
          </p>
          <p>
            Every Lipson Foundation program is completely free to the people it
            serves.
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
              <dt className="text-muted-foreground">Geography</dt>
              <dd>{site.location}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Contact</dt>
              <dd>
                <a href={site.phoneHref} className="hover:text-primary">
                  {site.phone}
                </a>
                <br />
                <a href={`mailto:${site.email}`} className="hover:text-primary">
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
        </aside>
      </div>

      <section className="mt-16 flex flex-col gap-6">
        <h2 className="text-3xl">Board</h2>
        <ul className="grid gap-4 sm:grid-cols-3">
          {board.map((person) => (
            <li key={person.name} className="border border-border bg-card p-5">
              <p className="font-heading text-lg">{person.name}</p>
              <p className="text-sm text-muted-foreground">{person.role}</p>
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground">
          Zachary Lipson is Founder and President.
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
        <Button size="lg" nativeButton={false} render={<Link href="/in-your-corner" />}>
          In Your Corner
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
