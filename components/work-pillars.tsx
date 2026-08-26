import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { howWeWork, whatWeBuild } from "@/lib/site"

export function WorkPillars({
  heading = "What we build",
}: {
  heading?: string
}) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex max-w-3xl flex-col gap-3">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          The work
        </p>
        <h2 className="text-3xl sm:text-4xl">{heading}</h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          Lipson Foundation brings cost-free programs into underserved
          communities — different neighborhoods, different rooms, different
          needs. Fitness, wellness, and mentoring are the work. A boxing
          program is one way that work shows up. It is not the only way.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {howWeWork.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardTitle className="text-xl">{item.title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {item.body}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {whatWeBuild.map((item) => (
          <div key={item.title} className="border-l-2 border-gold pl-4">
            <p className="font-heading text-lg">{item.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
