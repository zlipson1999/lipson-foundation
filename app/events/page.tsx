import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import Link from "next/link"
import { CalendarBlankIcon } from "@phosphor-icons/react/ssr"
import { Container, PageIntro } from "@/components/container"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { RingRopes } from "@/components/marks"
import { events } from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  title: "Events",
  description:
    "Public events from Lipson Foundation. Career Exploration Night will be listed here when a host and dates exist.",
  route: "/events",
})

export default function EventsPage() {
  return (
    <Container className="pb-20">
      <PageIntro kicker="Events" title="What is on the calendar.">
        <p>
          Career Exploration Night is part of In Ur Corner once a host hall
          and dates are real. We will not print placeholders as facts.
        </p>
      </PageIntro>

      {events.length === 0 ? (
        <Empty className="relative overflow-hidden border border-gold/40 bg-card py-16">
          <RingRopes className="absolute inset-x-0 top-0 h-3 text-gold/50" />
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <CalendarBlankIcon />
            </EmptyMedia>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold-ink">
              Nothing on the calendar — yet
            </p>
            <EmptyTitle className="text-lg">No events posted yet.</EmptyTitle>
            <EmptyDescription className="text-sm">
              When a session night or Career Exploration Night is scheduled, it
              will show up here. Ask us to tell you when dates are set, or use
              the form if you want to host or speak.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                nativeButton={false}
                render={<Link href="/contact?topic=updates" />}
              >
                Ask to be notified
              </Button>
              <Button
                variant="outline"
                nativeButton={false}
                render={<Link href="/help" />}
              >
                Get involved
              </Button>
            </div>
          </EmptyContent>
        </Empty>
      ) : (
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
