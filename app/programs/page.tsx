import type { Metadata } from "next"
import Image from "next/image"
import { pageMetadata } from "@/lib/seo"
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
import { asset } from "@/lib/assets"
import { programs, whatWeBuild } from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  title: "Programs",
  description:
    "Lipson Foundation brings cost-free community programs into underserved communities. Fitness, wellness, and mentoring are where the work starts. In Your Corner is the named flagship.",
  route: "/programs",
})

export default function ProgramsPage() {
  return (
    <Container className="pb-20">
      <PageIntro
        kicker="Programs"
        title="We bring programs to the community. Completely cost-free."
      >
        <p>
          Lipson Foundation exists to put cost-free community programs in
          underserved communities — different neighborhoods, different rooms,
          different needs. Fitness, wellness, and mentoring are where the work
          starts, not where it ends. Every program is cost-free to the people it
          serves. In Your Corner is the named flagship. More will be listed
          here as they launch.
        </p>
      </PageIntro>

      <section className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {whatWeBuild.map((item) => (
          <div key={item.title} className="border-l-2 border-gold pl-4">
            <p className="font-heading text-lg">{item.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.body}
            </p>
          </div>
        ))}
      </section>

      <h2 className="mb-6 text-3xl">Named programs</h2>

      <div className="grid gap-6">
        {programs.map((program) => (
          <Card key={program.slug} className="border-l-4 border-l-gold">
            {/* CardHeader is a grid, so the mark sits beside it rather than inside. */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
              <CardHeader className="flex-1">
                <Badge variant="secondary" className="self-start">
                  {program.status}
                </Badge>
                <CardTitle className="text-3xl">{program.name}</CardTitle>
                <CardDescription className="max-w-2xl text-base leading-relaxed">
                  {program.summary}
                </CardDescription>
              </CardHeader>
              {program.mark ? (
                <Image
                  src={asset(program.mark)}
                  alt=""
                  width={612}
                  height={640}
                  className="h-28 w-auto shrink-0 self-center px-4 sm:h-36 sm:self-auto sm:pl-0"
                  unoptimized
                />
              ) : null}
            </div>
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
    </Container>
  )
}
