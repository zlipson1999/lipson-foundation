import type { Metadata } from "next"
import Link from "next/link"
import { pageMetadata } from "@/lib/seo"
import { Container, PageIntro } from "@/components/container"
import { StaffList } from "@/components/staff-list"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  title: "Staff",
  description:
    "Staff roles at Lipson Foundation Inc. are listed here as they are filled. Until then, write to Zachary Lipson, Founder and President.",
  route: "/team/staff",
})

export default function StaffPage() {
  return (
    <Container className="pb-20">
      <PageIntro kicker="The team" title="Staff.">
        <p>
          {site.legalName} lists staff here as roles are filled. Nothing stands
          in for a role that does not exist yet.
        </p>
      </PageIntro>

      <StaffList />

      <div className="mt-12 flex flex-col gap-3 sm:flex-row">
        <Button
          size="lg"
          nativeButton={false}
          render={<Link href="/team/board" />}
        >
          Board of Directors
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
