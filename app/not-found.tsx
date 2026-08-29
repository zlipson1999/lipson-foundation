import Link from "next/link"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <Container className="flex flex-1 flex-col items-start justify-center gap-4 py-24">
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
        404
      </p>
      <h1 className="text-4xl">That page is not here.</h1>
      <p className="max-w-md text-muted-foreground">
        It may have moved, or the link may be off. The work is still on the
        rest of the site.
      </p>
      <Button nativeButton={false} render={<Link href="/" />}>
        Back home
      </Button>
    </Container>
  )
}
