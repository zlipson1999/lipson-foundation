import type { Metadata } from "next"
import Link from "next/link"
import { NewspaperIcon } from "@phosphor-icons/react/ssr"
import { Container, PageIntro } from "@/components/container"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Badge } from "@/components/ui/badge"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Updates",
  description: "News and notes from Lipson Foundation.",
}

export default function UpdatesPage() {
  return (
    <Container className="pb-20">
      <PageIntro kicker="Updates" title="What we are doing, as we do it.">
        <p>
          This page will hold notes on partnerships, gifts at work, and
          anything we owe the public. For now, here is the first fact worth
          posting.
        </p>
      </PageIntro>

      <article className="mb-12 flex flex-col gap-3 border border-border bg-card p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">Foundation</Badge>
          <time className="text-xs text-muted-foreground" dateTime="2025-10">
            October 2025
          </time>
        </div>
        <h2 className="text-2xl">Recognized as a 501(c)(3)</h2>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          The IRS recognized {site.legalName} as a tax-exempt charitable
          organization. EIN {site.ein}. Donations are deductible to the extent
          allowed by law. We are based in {site.location}.
        </p>
      </article>

      <Empty className="border">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <NewspaperIcon />
          </EmptyMedia>
          <EmptyTitle>More stories are coming</EmptyTitle>
          <EmptyDescription>
            When we fund a partner or launch a program, it will be written here
            — plainly, with names we have permission to share.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button nativeButton={false} render={<Link href="/involved" />}>
            Help us write the next one
          </Button>
        </EmptyContent>
      </Empty>
    </Container>
  )
}
