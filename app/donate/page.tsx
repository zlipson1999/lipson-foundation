import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import { Container, PageIntro } from "@/components/container"
import { DonateForm } from "@/components/donate-form"
import { GivebutterEmbed } from "@/components/givebutter-embed"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { donateAsks, isGiving, keepItFree, site } from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  title: "Donate",
  description: isGiving
    ? "Give to Lipson Foundation. Every program stays cost-free to the people it serves."
    : "Support Lipson Foundation. There is no payment processor on this site.",
  route: "/donate",
})

export default function DonatePage() {
  return (
    <Container className="pb-20">
      <PageIntro kicker="Donate" title="Keep it cost-free.">
        <p>{keepItFree}</p>
        <p className="mt-3">
          {isGiving
            ? "Give what you can. Every gift keeps a program cost-free to the people it serves."
            : "Give what you can. There is no checkout and no card field on this website."}
        </p>
      </PageIntro>

      <div className="mb-12 grid gap-4 sm:grid-cols-3">
        {donateAsks
          .filter((ask) => ask.value !== "other")
          .map((ask) => (
            <Card key={ask.value}>
              <CardHeader>
                <CardTitle className="text-2xl">{ask.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
      </div>

      {isGiving ? (
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div className="flex flex-col gap-6">
            <GivebutterEmbed />
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              These are starting points, not a menu. Any amount goes to the
              same place.
            </p>
            <div className="flex flex-col gap-4 border-t pt-6">
              <h2 className="text-xl">Rather talk first?</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                To give in kind, or to ask something before you give, send a
                note instead and we will follow up from{" "}
                {site.email}.
              </p>
            </div>
          </div>
        </div>
      ) : (
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
              These are starting points, not a menu. If you have a different
              number in mind, choose “another amount” and tell us.
            </p>
          </div>
        </div>
      )}
    </Container>
  )
}
