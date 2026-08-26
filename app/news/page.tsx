import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import Link from "next/link"
import { NewspaperIcon } from "@phosphor-icons/react/ssr"
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
import { newsItems } from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  title: "News",
  description: "News and updates from Lipson Foundation Inc.",
  route: "/news",
})

export default function NewsPage() {
  return (
    <Container className="pb-20">
      <PageIntro kicker="News" title="What we can say in public.">
        <p>
          This page is for foundation updates. There is nothing to post yet. We
          will not invent a feed.
        </p>
      </PageIntro>

      {newsItems.length === 0 ? (
        <Empty className="border border-dashed border-border bg-card py-16">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <NewspaperIcon />
            </EmptyMedia>
            <EmptyTitle className="text-lg">No news posted yet.</EmptyTitle>
            <EmptyDescription className="text-sm">
              When there is something to report — a host, a start date, a
              session that actually ran — it will live here.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button nativeButton={false} render={<Link href="/contact" />}>
              Write to us
            </Button>
          </EmptyContent>
        </Empty>
      ) : (
        <ul className="flex flex-col gap-4">
          {newsItems.map((item) => (
            <li key={item.title}>
              <Card>
                <CardHeader>
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold-ink">
                    {item.date}
                  </p>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {item.body}
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
