import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import Link from "next/link"
import { UsersThreeIcon } from "@phosphor-icons/react/ssr"
import { Container, PageIntro } from "@/components/container"
import { BoardList } from "@/components/board-list"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { site, staff } from "@/lib/site"

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
      </section>

      <section className="mt-16 flex flex-col gap-6">
        <h2 className="text-3xl">Staff</h2>
        {staff.length === 0 ? (
          <Empty className="border border-dashed border-border bg-card py-12">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <UsersThreeIcon />
              </EmptyMedia>
              <EmptyTitle className="text-base">Staff will be listed here as roles are filled.</EmptyTitle>
              <EmptyDescription className="text-sm">
                We will not invent names. Until then, write to {site.email}.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-3">
            {staff.map((person) => (
              <li key={person.name} className="border border-border bg-card p-5">
                <p className="font-heading text-lg">{person.name}</p>
                <p className="text-sm text-gold-ink">{person.role}</p>
                {person.note ? (
                  <p className="mt-2 text-sm text-muted-foreground">{person.note}</p>
                ) : null}
              </li>
            ))}
          </ul>
        )}
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
