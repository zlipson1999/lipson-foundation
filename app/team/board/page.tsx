import type { Metadata } from "next"
import Link from "next/link"
import { pageMetadata } from "@/lib/seo"
import { Container, PageIntro } from "@/components/container"
import { BoardList } from "@/components/board-list"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  title: "Board of Directors",
  description:
    "The board of Lipson Foundation Inc.: Zachary Lipson, Founder and President; Joshua Weinfeld, CFO; Julia Vance, Secretary.",
  route: "/team/board",
})

export default function BoardPage() {
  return (
    <Container className="pb-20">
      <PageIntro kicker="The team" title="Board of Directors.">
        <p>
          The named officers of {site.legalName}. Day-to-day contact is Zachary
          Lipson, Founder and President, at {site.email}.
        </p>
      </PageIntro>

      <BoardList />

      <div className="mt-12 flex flex-col gap-3 sm:flex-row">
        <Button
          size="lg"
          nativeButton={false}
          render={<Link href="/team/staff" />}
        >
          Staff
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
