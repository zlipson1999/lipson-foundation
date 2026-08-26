import type { Metadata } from "next"
import { Container, PageIntro } from "@/components/container"
import { GiveForm } from "@/components/give-form"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Give",
  description:
    "Support Lipson Foundation. Gifts are tax-deductible. EIN 39-4624045.",
}

export default function GivePage() {
  return (
    <Container className="pb-20">
      <PageIntro kicker="Give" title="Your gift becomes someone else’s next chance.">
        <p>
          We are a young 501(c)(3). Every early gift shapes who we can help
          first — a mentor, a training stipend, a pair of interview shoes, a
          month of bus fare.
        </p>
      </PageIntro>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <GiveForm />
        <div className="flex flex-col gap-4">
          <Alert>
            <AlertTitle>How giving works right now</AlertTitle>
            <AlertDescription>
              Tell us the amount and how you would like to give. We will follow
              up to complete the gift by check or electronic transfer. An online
              card portal is coming; we will not collect card numbers on this
              site until it is.
            </AlertDescription>
          </Alert>
          <Card>
            <CardHeader>
              <CardTitle>For your records</CardTitle>
              <CardDescription className="leading-relaxed">
                {site.legalName}
                <br />
                EIN {site.ein}
                <br />
                {site.location}
                <br />
                Tax-exempt since {site.taxExempt}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Other ways to give</CardTitle>
              <CardDescription className="leading-relaxed">
                Employer match, donor-advised funds, and gifts of stock are
                welcome. Mention it in the note field or write us at{" "}
                {site.email} and we will send instructions.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </Container>
  )
}
