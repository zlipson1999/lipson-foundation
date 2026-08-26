import type { Metadata } from "next"
import { Container, PageIntro } from "@/components/container"
import { ContactForm } from "@/components/contact-form"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact",
  description: "Write to Lipson Foundation in West Palm Beach.",
}

export default function ContactPage() {
  return (
    <Container className="pb-20">
      <PageIntro kicker="Contact" title="We read every note.">
        <p>
          Whether you want to give, partner, ask a question, or tell us we have
          something wrong — start here.
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
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            We are a small team. If you do not hear back within two business
            days, write again — messages sometimes hide, and we would rather you
            nudge us than assume we are not listening.
          </p>
        </aside>
      </div>
    </Container>
  )
}
