import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import Link from "next/link"
import { ArrowRightIcon } from "@phosphor-icons/react/ssr"
import { Container, PageIntro } from "@/components/container"
import { BoardList } from "@/components/board-list"
import { StaffList } from "@/components/staff-list"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  title: "The team",
  description:
    "Board and staff of Lipson Foundation Inc. Zachary Lipson, Founder and President; Joshua Weinfeld, CFO; Julia Vance, Secretary.",
  route: "/team",
})

export default function TeamPage() {
  return (
    <Container className="pb-20">
      <PageIntro kicker="The team" title="Board and staff.">
        <p>
          Named officers of {site.legalName} Day-to-day contact is Zachary
          Lipson, Founder and President.
        </p>
      </PageIntro>

      <section className="flex flex-col gap-6">
        <h2 className="text-3xl">Board</h2>
        <BoardList />
        <Button
          className="self-start"
          variant="outline"
          nativeButton={false}
          render={<Link href="/team/board" />}
        >
          Board of Directors
          <ArrowRightIcon data-icon="inline-end" />
        </Button>
      </section>

      <section className="mt-16 flex flex-col gap-6">
        <h2 className="text-3xl">Staff</h2>
        <StaffList />
        <Button
          className="self-start"
          variant="outline"
          nativeButton={false}
          render={<Link href="/team/staff" />}
        >
          Staff
          <ArrowRightIcon data-icon="inline-end" />
        </Button>
      </section>

      <div className="mt-12 flex flex-col gap-3 sm:flex-row">
        <Button size="lg" nativeButton={false} render={<Link href="/about" />}>
          About us
        </Button>
        <Button
          size="lg"
          variant="outline"
          nativeButton={false}
          render={<Link href="/contact" />}
        >
          Write to us
        </Button>
      </div>
    </Container>
  )
}
