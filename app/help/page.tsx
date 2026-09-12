import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import Link from "next/link"
import { Container, PageIntro } from "@/components/container"
import { HelpForm } from "@/components/help-form"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { helpPaths } from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  title: "How to help",
  description:
    "Refer someone, offer a space, coach or mentor, share your trade, give in kind, or talk with us about supporting the foundation's cost-free programs.",
  route: "/help",
})

export default function HelpPage() {
  return (
    <Container className="page-shell pb-20">
      <PageIntro kicker="How to help" title="Get involved.">
        <p>
          A payment link is not how this starts. Our programs are built from
          what people choose to give: referrals, space, time, skills, and
          in-kind support. Tell us what you have, and we will find where it
          fits.
        </p>
      </PageIntro>

      <div className="mb-12 grid gap-4 sm:grid-cols-2">
        {helpPaths.map((path) => (
          <Card key={path.title}>
            <CardHeader>
              <CardTitle className="text-lg">{path.title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {path.body}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Alert className="mb-12">
        <AlertTitle>Giving</AlertTitle>
        <AlertDescription>
          Every gift keeps a program cost-free to the people it serves. Use
          the{" "}
          <Link href="/donate" className="underline underline-offset-4">
            Donate
          </Link>{" "}
          page to give, or to start that conversation.
        </AlertDescription>
      </Alert>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <HelpForm />
        <p className="text-sm leading-relaxed text-muted-foreground">
          Background checks apply to every adult around young people. We will
          not send you into a role unprepared. If you are not sure where you
          fit, say so.
        </p>
      </div>
    </Container>
  )
}
