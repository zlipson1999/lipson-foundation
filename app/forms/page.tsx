import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import Link from "next/link"
import { ArrowRightIcon } from "@phosphor-icons/react/ssr"
import { Container, PageIntro } from "@/components/container"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { formPages } from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  title: "Forms",
  description:
    "Contact, get involved, and donate inquiry forms for Lipson Foundation Inc.",
  route: "/forms",
})

export default function FormsPage() {
  return (
    <Container className="pb-20">
      <PageIntro kicker="Forms" title="Write to us. We read every note.">
        <p>
          Use the form that matches what you need. Submissions stay with Lipson
          Foundation. We do not sell them.
        </p>
      </PageIntro>

      <div className="grid gap-4 md:grid-cols-3">
        {formPages.map((item) => (
          <Card key={item.href} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">{item.title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {item.body}
              </CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Button
                nativeButton={false}
                render={<Link href={item.href} />}
              >
                Open form
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Container>
  )
}
