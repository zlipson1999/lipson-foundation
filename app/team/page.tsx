import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import Link from "next/link"
import { Container, PageIntro } from "@/components/container"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { site, teamMenu } from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  title: "The team",
  description:
    "The board and staff of Lipson Foundation Inc. Board of Directors and Staff each have their own page.",
  route: "/team",
})

export default function TeamPage() {
  return (
    <Container className="pb-20">
      <PageIntro kicker="The team" title="Board and staff.">
        <p>
          The people behind {site.legalName} Day-to-day contact is Zachary
          Lipson, Founder and President, at {site.email}.
        </p>
      </PageIntro>

      {/* Each roster lives on its own page; this page only points at them, so
          neither list is maintained in two places. */}
      <div className="grid gap-4 sm:grid-cols-2">
        {teamMenu.map((item) => (
          <Link key={item.href} href={item.href} className="block">
            <Card className="h-full border-l-4 border-l-gold transition-colors hover:bg-card">
              <CardHeader>
                <CardTitle className="text-2xl">{item.name}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {item.body}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12 flex flex-col gap-3 sm:flex-row">
        <Button size="lg" nativeButton={false} render={<Link href="/about" />}>
          About us
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
