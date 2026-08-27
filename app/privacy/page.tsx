import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import { Container, PageIntro } from "@/components/container"
import { site } from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  title: "Privacy",
  description:
    "What Lipson Foundation collects from the forms on this site, how it is used, and how to have a record removed.",
  route: "/privacy",
})

export default function PrivacyPage() {
  return (
    <Container className="pb-20">
      <PageIntro kicker="Privacy" title="How we treat what you share.">
        <p>
          Lipson Foundation collects only what we need to answer you, place a
          volunteer, or talk about hosting and meals.
        </p>
      </PageIntro>
      <div className="flex max-w-2xl flex-col gap-6 text-base leading-relaxed text-muted-foreground">
        <p>
          Forms on this site record your name, email, and the message you
          submit. We use that information to follow up. We do not sell it, and
          we do not run advertising networks on these pages.
        </p>
        <p>
          Payments are handled by our giving provider, not by this site. We
          never see or store your card details.
        </p>
        <p>
          If you want a record removed, write to {site.email}.
        </p>
      </div>
    </Container>
  )
}
