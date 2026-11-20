import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import Image from "next/image"
import { Container, PageIntro } from "@/components/container"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { events } from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  title: "Events",
  description:
    "Public events from Lipson Foundation, including the 2026 Holiday Toy Drive and NICU Clothing Drive.",
  route: "/events",
})

export default function EventsPage() {
  return (
    <Container className="page-shell pb-20">
      <PageIntro kicker="Events" title="What is on the calendar.">
        <p>Find upcoming events and ways to get involved with Lipson Foundation.</p>
      </PageIntro>

      <section
        aria-labelledby="holiday-drive-title"
        className="mb-8 grid items-start gap-6 rounded-xl border p-5 sm:p-8 md:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] md:gap-8"
      >
        <div className="min-w-0 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-ink">
            Donation deadline: <time dateTime="2026-12-21">December 21, 2026</time>
          </p>
          <h2 id="holiday-drive-title" className="text-3xl font-semibold leading-tight">
            Holiday Toy Drive &amp; NICU Clothing Drive
          </h2>
          <p className="text-sm leading-relaxed">
            Donate new toys and books for children, or new baby clothes and swaddle
            blankets for NICU families, at Palm Beach Children’s Hospital at St. Mary’s.
          </p>
          <p className="text-sm leading-relaxed">
            Ask Zach what to bring and arrange your drop-off by{" "}
            <a className="break-all font-medium underline" href="mailto:zlipson@lipsonfoundation.org">
              zlipson@lipsonfoundation.org
            </a>{" "}
            or <a className="font-medium underline" href="tel:+18456421874">845-642-1874</a>.
            The Lipson Foundation will deliver the donations to the hospital.
          </p>
        </div>
        <a
          href="/events/lipson-holiday-drive-flyer.webp?v=swaddles"
          aria-label="View the full-size Holiday Toy Drive and NICU Clothing Drive flyer"
          className="block overflow-hidden rounded-lg border"
        >
          <Image
            src="/events/lipson-holiday-drive-flyer.webp?v=swaddles"
            alt="Lipson Foundation holiday drive flyer"
            width={1071}
            height={1386}
            sizes="(min-width: 768px) 352px, (min-width: 640px) 520px, 90vw"
            className="h-auto w-full"
          />
        </a>
      </section>

      {events.length > 0 && (
        <ul className="flex flex-col gap-4">
          {events.map((event) => (
            <li key={event.title}>
              <Card>
                <CardHeader>
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold-ink">
                    {event.when}
                  </p>
                  <CardTitle className="text-2xl">{event.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {event.where}
                    <br />
                    {event.body}
                  </CardDescription>
                </CardHeader>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </Container>
  )
}
