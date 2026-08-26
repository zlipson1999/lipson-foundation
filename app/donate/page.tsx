import type { Metadata } from "next"
import { Container, PageIntro } from "@/components/container"
import { DonateForm } from "@/components/donate-form"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { donateAsks, site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Sponsor a Lipson Foundation session, meal, or season. There is no payment processor on this site.",
}

export default function DonatePage() {
  return (
    <Container className="pb-20">
      <PageIntro kicker="Donate" title="Sponsor a dinner, a session, or a season.">
        <p>
          Programs stay free to the people they serve. If you want to underwrite
          that, start here. There is no checkout and no card field on this
          website.
        </p>
      </PageIntro>

      <Alert className="mb-12 border-gold bg-secondary">
        <AlertTitle>Planning asks — not a payment page</AlertTitle>
        <AlertDescription>
          We will follow up from {site.email}. Do not send a card number. We
          will not claim a gift is tax-deductible on this site.
        </AlertDescription>
      </Alert>

      <div className="mb-12 grid gap-4 sm:grid-cols-3">
        {donateAsks
          .filter((ask) => ask.value !== "other")
          .map((ask) => (
            <Card key={ask.value}>
              <CardHeader>
                <CardTitle className="text-lg">{ask.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {ask.body}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
      </div>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <DonateForm />
        <p className="text-sm leading-relaxed text-muted-foreground">
          These amounts are planning figures for a session, a meal, or a season
          for one young person. If you have a different number in mind, choose
          “another amount” and tell us.
        </p>
      </div>
    </Container>
  )
}
