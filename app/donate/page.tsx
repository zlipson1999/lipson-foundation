import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import { Container, PageIntro } from "@/components/container"
import { DonateForm } from "@/components/donate-form"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { donateAsks, keepItFree, site } from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  title: "Donate",
  description:
    "Sponsor a Lipson Foundation session, meal, or season. There is no payment processor on this site.",
  route: "/donate",
})

export default function DonatePage() {
  return (
    <Container className="pb-20">
      <PageIntro kicker="Donate" title="Keep it cost-free.">
        <p>{keepItFree}</p>
        <p className="mt-3">
          If you want to underwrite a dinner, a session, or a season, start
          here. There is no checkout and no card field on this website.
        </p>
      </PageIntro>

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

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <DonateForm />
        <div className="flex flex-col gap-6">
          <Alert className="border-gold bg-secondary">
            <AlertTitle>No card details on this site</AlertTitle>
            <AlertDescription>
              This form takes your gift details, not your payment. We will
              follow up from {site.email} to complete it. Do not send a card
              number by email, and never put one in this form.
            </AlertDescription>
          </Alert>
          <p className="text-sm leading-relaxed text-muted-foreground">
            These amounts are planning figures for a session, a meal, or a
            season for one young person. If you have a different number in
            mind, choose “another amount” and tell us.
          </p>
        </div>
      </div>
    </Container>
  )
}
