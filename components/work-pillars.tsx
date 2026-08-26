import { whatWeBuild } from "@/lib/site"

export function WorkPillars({
  heading = "All cost-free community programs.",
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
          The mission is bigger than any category. Lipson Foundation builds
          cost-free community programs — whatever an underserved community
          needs that cost has kept out of reach. Fitness, wellness, and
          mentoring are where the work starts. They are not where it ends.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
