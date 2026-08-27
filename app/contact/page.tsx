import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import { Container, PageIntro } from "@/components/container"
import { ContactForm } from "@/components/contact-form"
import { site } from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Write or call Zachary Lipson, Founder and President of Lipson Foundation Inc., about hosting, referrals, training, or support.",
  route: "/contact",
})

export default function ContactPage() {
  return (
    <Container className="pb-20">
      <PageIntro kicker="Contact" title="Zachary Lipson, Founder and President.">
        <p>
          Host a hall, refer a young person, come train, or ask a question.
          Every note is read.
        </p>
      </PageIntro>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <ContactForm />
        <aside className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 border border-border bg-card p-6">
            <h2 className="text-lg">Reach us</h2>
            <p className="text-sm text-muted-foreground">{site.location}</p>
            <a
              href={`mailto:${site.email}`}
              className="text-sm hover:text-primary"
            >
              {site.email}
            </a>
            <p className="text-sm text-muted-foreground">EIN {site.ein}</p>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            If you do not hear back within two business days, write or call
            again. We would rather you nudge us than assume we are not
            listening.
          </p>
        </aside>
      </div>
    </Container>
  )
}
