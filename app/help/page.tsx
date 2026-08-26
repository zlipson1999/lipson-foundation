import type { Metadata } from "next"
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

export const metadata: Metadata = {
  title: "How to help",
  description:
    "Host a session, refer a young person, lead a career night, or talk with us about supporting In Your Corner.",
}

export default function HelpPage() {
  return (
    <Container className="pb-20">
      <PageIntro kicker="How to help" title="We need halls, veterans, referrals, and meals.">
        <p>
          A payment link is not how this starts. If you have a post, a young
          person who needs a safe place, a trade to talk about, or a kitchen
          that can feed a session, write to us.
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
        <AlertTitle>Planning asks — not a checkout</AlertTitle>
        <AlertDescription>
          $100 covers dinner for a session. $150 sponsors a full session. $500
          sponsors one young person for a season. There is no donate processor
          on this site. If that is how you want to help, tell us in the form
          and we will follow up.
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
