import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { commitments } from "@/lib/site"

export function Commitments() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex max-w-3xl flex-col gap-3">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          Our commitment
        </p>
        <h2 className="text-3xl sm:text-4xl">
          Access. Dignity. Community. Service.
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          Four promises behind every program we run — no matter what the
          program is or which community it serves.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {commitments.map((item) => (
          <Card key={item.title} className="border-l-4 border-l-gold">
            <CardHeader>
              <CardTitle className="text-xl">{item.title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {item.body}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
