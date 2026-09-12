import type { Metadata } from "next"
import Image from "next/image"
import { pageMetadata } from "@/lib/seo"
import Link from "next/link"
import { ArrowRightIcon } from "@phosphor-icons/react/ssr"
import { Container, PageIntro } from "@/components/container"
import { CategoryChips } from "@/components/category-chips"
import { Button } from "@/components/ui/button"
import { asset } from "@/lib/assets"
import { programs, whatWeBuild } from "@/lib/site"
import homeStyles from "@/app/home.module.css"

export const metadata: Metadata = pageMetadata({
  title: "Programs",
  description:
    "Lipson Foundation brings cost-free community programs into underserved communities. Fitness, wellness, and mentoring are where the work starts. Adapthletics is the named flagship.",
  route: "/programs",
})

export default function ProgramsPage() {
  return (
    <Container className="page-shell pb-20">
      <PageIntro
        kicker="Programs"
        title="We bring programs to the community. Completely cost-free."
      >
        <p>
          Lipson Foundation exists to put cost-free community programs in
          underserved communities — different neighborhoods, different rooms,
          different needs. Fitness, wellness, and mentoring are where the work
          starts, not where it ends. Every program is cost-free to the people it
          serves. Adapthletics is the named flagship. More will be listed here
          as they launch.
        </p>
      </PageIntro>

      <section className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {whatWeBuild.map((item) => (
          <div key={item.title} className="border-l-2 border-gold pl-4">
            <p className="font-heading text-lg">{item.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.body}
            </p>
          </div>
        ))}
      </section>

      <section className={homeStyles.programs} aria-labelledby="programs-heading">
        <div className={homeStyles.sectionHead}>
          <div>
            <p className={homeStyles.eyebrow}>Where the work starts <span /></p>
            <h2 id="programs-heading">Our programs</h2>
          </div>
          <p>Cost-free to the people we serve.</p>
        </div>
        {programs.map((program) => (
          <article
            key={program.slug}
            className={homeStyles.programCard}
            style={{
              backgroundImage: `url("${asset("/brand/palm-backdrop.webp")}")`,
            }}
          >
            <div className={homeStyles.programLogo}>
              <Image
                src={asset(program.mark)}
                alt={program.name}
                width={program.slug === "adapthletics" ? 1447 : 612}
                height={program.slug === "adapthletics" ? 877 : 640}
                unoptimized
              />
            </div>
            <div className={homeStyles.programContent}>
              <p className={homeStyles.eyebrow}>{program.status} <span /></p>
              <h3>{program.name}</h3>
              <CategoryChips
                categories={program.categories}
                className={homeStyles.categories}
              />
              <p>{program.summary}</p>
              <Button
                nativeButton={false}
                render={<Link href={program.href} />}
                className={homeStyles.goldButton}
              >
                About the program
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
            </div>
          </article>
        ))}
      </section>
    </Container>
  )
}
