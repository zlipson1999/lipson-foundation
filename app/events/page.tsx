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
          Career Exploration Night is part of In Your Corner once a host hall
          and dates are real. We will not print placeholders as facts.
        </p>
      </PageIntro>

      {events.length === 0 ? (
        <Empty className="border border-dashed border-border bg-card py-16">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <CalendarBlankIcon />
            </EmptyMedia>
            <EmptyTitle className="text-lg">No events posted yet.</EmptyTitle>
            <EmptyDescription className="text-sm">
              When a session night or Career Exploration Night is scheduled, it
              will show up here. If you want to host or speak, use the form.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button nativeButton={false} render={<Link href="/help" />}>
              Get involved
            </Button>
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
