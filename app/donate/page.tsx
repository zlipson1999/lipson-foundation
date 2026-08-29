import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import { Container, PageIntro } from "@/components/container"
import { CopyEin } from "@/components/copy-ein"
import { DonateForm } from "@/components/donate-form"
import { GivebutterEmbed } from "@/components/givebutter-embed"
import { isGiving, keepItFree, site, taxNotice } from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  title: "Donate",
  description:
    "Give to Lipson Foundation. Every program stays cost-free to the people it serves.",
  route: "/donate",
})

export default function DonatePage() {
  return (
    <Container className="pb-20">
      <PageIntro kicker="Donate" title="Keep it cost-free.">
        <p>{keepItFree}</p>
        <p className="mt-3">
          Give what you can. Every gift keeps a program cost-free to the people
          it serves.
        </p>
      </PageIntro>

      {isGiving ? (
        <div className="flex max-w-3xl flex-col gap-10">
          <GivebutterEmbed />
          <div className="flex flex-col gap-4 border-t pt-8">
            <h2 className="text-xl">Rather talk first?</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              To give in kind, or to ask something before you give, send a note
              instead and we will follow up from {site.email}.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {taxNotice}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex max-w-3xl flex-col gap-10">
          <DonateForm />
          <div className="flex flex-col gap-4 border-t pt-8 text-sm leading-relaxed text-muted-foreground">
            <p>
              These are starting points, not a menu. If you have a different
              number in mind, choose “Other” and tell us.
            </p>
            <p>{taxNotice}</p>
            <CopyEin />
          </div>
        </div>
      )}
    </Container>
  )
}
