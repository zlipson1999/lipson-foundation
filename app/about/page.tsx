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
import { faqs, mission, site, vision, whoWeServe } from "@/lib/site"

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
            The Lipson Foundation was born from our founder&apos;s own fight.
            Growing up with hereditary spastic paraplegia and no role models,
            Zachary Lipson learned that what changes lives isn&apos;t a cure.
            It&apos;s access — training, people who believed he could, and a
            place that did not ask what he could afford.
          </p>
          <p>
            Cost is the barrier that quietly decides who gets a shot. We remove
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

      {/* The founder's track record lives here, where the page is already
          talking about him (owner-directed 9 Sep 2026, moved off
          /adapthletics so that page stays about the program; his From the
          Ground Up series and its embeds stay on /adapthletics). */}
      <section id="founder" className="mt-16 flex max-w-3xl scroll-mt-24 flex-col gap-6">
        <h2 className="text-3xl">Not starting from zero</h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          Adapthletics has existed since 2022 — first as Original Adapthletics,
          the adaptive training practice Zach built and coached himself. The
          foundation is bringing it home and removing the last barrier: the
          cost.
        </p>
        <ul className="grid gap-6 sm:grid-cols-2">
          <li className="border-l-2 border-gold pl-4">
            <p className="font-heading text-lg">Est. 2022</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Founded as Original Adapthletics — years of adaptive training
              before it ever had a website.
            </p>
          </li>
          <li className="border-l-2 border-gold pl-4">
            <p className="font-heading text-lg">Certified</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              ATA Adaptive &amp; Inclusive Training certification (2022) and
              the MedFit Adaptive Fitness Specialist specialization.
            </p>
          </li>
          <li className="border-l-2 border-gold pl-4">
            <p className="font-heading text-lg">In the gym</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Years coaching athletes with disabilities — wheelchair users
              included — on real equipment, at real intensity.
            </p>
          </li>
          <li className="border-l-2 border-gold pl-4">
            <p className="font-heading text-lg">From the Ground Up</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Zach&apos;s interview series spotlighting adaptive athletes and
              pioneers, one story at a time.
            </p>
          </li>
          <li className="border-l-2 border-gold pl-4">
            <p className="font-heading text-lg">An athlete himself</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Races Spartan obstacle courses while living with hereditary
              spastic paraplegia.
            </p>
          </li>
          <li className="border-l-2 border-gold pl-4">
            <p className="font-heading text-lg">In the community</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Speaker for the Spastic Paraplegia Foundation and a working voice
              for disability visibility.
            </p>
          </li>
        </ul>
        <p className="text-base leading-relaxed text-muted-foreground">
          The whole story is on the feed:{" "}
          <a
            href="https://www.instagram.com/lipsonfoundation/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gold-ink underline underline-offset-4 hover:text-primary"
          >
            @lipsonfoundation on Instagram
          </a>
          .
        </p>
      </section>

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
        <Button size="lg" nativeButton={false} render={<Link href="/team" />}>
          The team
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
