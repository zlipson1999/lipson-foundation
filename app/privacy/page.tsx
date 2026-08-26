import type { Metadata } from "next"
import { Container, PageIntro } from "@/components/container"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy",
}

export default function PrivacyPage() {
  return (
    <Container className="pb-20">
      <PageIntro kicker="Privacy" title="How we treat what you share.">
        <p>
          Lipson Foundation collects only what we need to answer you, complete a
          gift, or place a volunteer.
        </p>
      </PageIntro>
      <div className="flex max-w-2xl flex-col gap-6 text-base leading-relaxed text-muted-foreground">
        <p>
          Forms on this site record your name, email, and the message or gift
          details you submit. We use that information to follow up. We do not
          sell it, and we do not run advertising networks on these pages.
        </p>
        <p>
          Gift intents are not charges. We will not ask you to type a full card
          number into this website until a dedicated, secure processor is in
          place.
        </p>
        <p>
          If you want a record removed, write to {site.email} and we will
          delete what we can under the law and our need to keep donation
          receipts.
        </p>
      </div>
    </Container>
  )
}
