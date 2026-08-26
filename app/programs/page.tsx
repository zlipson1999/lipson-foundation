import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRightIcon } from "@phosphor-icons/react/ssr"
import { Container, PageIntro } from "@/components/container"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { groups, howWeWork, programs, whatWeBuild } from "@/lib/site"

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Lipson Foundation brings cost-free community programs into underserved communities. Fitness, wellness, and mentoring are where the work starts. In Your Corner is the named flagship.",
}

export default function ProgramsPage() {
  return (
    <Container className="pb-20">
      <PageIntro
        kicker="Programs"
        title="We bring programs to the community. Completely free."
      >
        <p>
          Lipson Foundation exists to put cost-free community programs in
          underserved communities — different neighborhoods, different rooms,
          different needs. Fitness, wellness, and mentoring are where the work
          starts, not where it ends. Every program is free to the people it
          serves. In Your Corner is the named flagship. More will be listed
          here as they launch.
        </p>
      </PageIntro>

      <section className="mb-14 grid gap-4 md:grid-cols-3">
        {whatWeBuild.map((item) => (
          <div key={item.title} className="border-l-2 border-gold pl-4">
            <p className="font-heading text-lg">{item.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.body}
            </p>
          </div>
        ))}
      </section>

      <section className="mb-14 grid gap-4 md:grid-cols-3">
        {howWeWork.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardTitle className="text-xl">{item.title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {item.body}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      <h2 className="mb-6 text-3xl">Named programs</h2>

      <div className="grid gap-6">
        {programs.map((program) => (
          <Card key={program.slug} className="border-l-4 border-l-gold">
            <CardHeader>
              <Badge variant="secondary">{program.status}</Badge>
              <CardTitle className="text-3xl">{program.name}</CardTitle>
              <CardDescription className="max-w-2xl text-base leading-relaxed">
                {program.summary}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button
                size="lg"
                nativeButton={false}
                render={<Link href={program.href} />}
              >
                Open this program
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <section className="mt-14 flex flex-col gap-6">
        <h2 className="text-3xl">Inside In Your Corner</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {groups.map((group) => (
            <Link key={group.slug} href={group.href} className="block">
              <Card className="h-full transition-colors hover:bg-secondary">
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
        <Link href="/in-your-corner#career-night" className="block">
          <Card className="transition-colors hover:bg-secondary">
            <CardHeader>
              <CardTitle className="text-xl">Career Exploration Night</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                Monthly: 60 minutes of training, then 30 minutes with a working
                professional — a trade, a first responder, a business owner, a
                veteran who used the GI Bill.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </section>
    </Container>
  )
}
