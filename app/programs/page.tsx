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
import { groups, programs } from "@/lib/site"

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Pick a Lipson Foundation program. In Your Corner is the flagship: free boxing and mentorship for youth and veterans.",
}

export default function ProgramsPage() {
  return (
    <Container className="pb-20">
      <PageIntro kicker="Programs" title="Pick where you want to stand.">
        <p>
          Lipson Foundation builds cost-free community programs in fitness,
          wellness, and mentoring. The named flagship is In Your Corner. The
          Ring, the Corner, and the Crew are how that program is built — not
          separate launches.
        </p>
      </PageIntro>

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
