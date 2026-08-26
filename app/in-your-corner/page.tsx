import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { asset } from "@/lib/assets"
import { Container, PageIntro } from "@/components/container"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { groups, sessionShape, site, veteranOffer, youthOffer } from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  title: "In Your Corner",
  description:
    "In Your Corner is a free boxing and mentorship program of Lipson Foundation Inc. for youth ages 12–17 and veterans in South Florida.",
  route: "/in-your-corner",
})

export default function InYourCornerPage() {
  return (
    <Container className="pb-20">
      <div className="flex flex-col items-start gap-2 lg:flex-row lg:items-center lg:gap-14">
        <Image
          src={asset("/brand/iyc-tag.png")}
          alt=""
          width={612}
          height={640}
          className="mt-12 h-44 w-auto shrink-0 sm:h-52 lg:order-last lg:mt-0 lg:h-64"
          priority
          unoptimized
        />
        <PageIntro
          kicker="A program of Lipson Foundation Inc."
          title="In Your Corner"
        >
          <p>
            Free boxing and mentorship that brings youth ages 12 to 17 and
            military veterans together to train. There is no cost to any
            participant, ever.
          </p>
        </PageIntro>
      </div>

      <div className="flex max-w-3xl flex-col gap-6 text-base leading-relaxed text-muted-foreground">
        <p>
          They train together twice a week. They eat dinner together afterward.
          Over time, relationships form, and those relationships become
          mentorships.
        </p>
        <p>
          Boxing is the hook, not the point. It draws young people who would
          never sign up for a mentoring program, and it teaches what we want to
          teach: show up on time, control yourself, work when it is hard,
          respect the person across from you.
        </p>
        <p>
          For veterans, the gym is familiar ground. Physical training alongside
          people who understand discipline is one of the few settings where
          connection happens without anyone having to talk about feelings first.
        </p>
      </div>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="border border-border bg-card p-6">
          <h2 className="text-2xl">For youth (ages 12–17)</h2>
          <ul className="mt-4 flex flex-col gap-4">
            {youthOffer.map((item) => (
              <li key={item.title}>
                <p className="font-heading text-base">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="border border-border bg-card p-6">
          <h2 className="text-2xl">For veterans</h2>
          <ul className="mt-4 flex flex-col gap-4">
            {veteranOffer.map((item) => (
              <li key={item.title}>
                <p className="font-heading text-base">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {sessionShape.map((item) => (
          <Card
            key={item.title}
            id={item.title === "Monthly" ? "career-night" : undefined}
            className={item.title === "Monthly" ? "scroll-mt-28" : undefined}
          >
            <CardHeader>
              <CardTitle className="text-lg">{item.title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {item.body}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <section className="mt-16 flex max-w-3xl flex-col gap-4">
        <h2 className="text-3xl">How mentorship actually works</h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          We do not assign mentors on day one. Matches grow out of the
          relationships that form over weeks of training and shared meals, and
          they are made only when both people are ready.
        </p>
        <ul className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
          <li>Every adult is screened. Background checks for every coach, mentor, and volunteer — no exceptions.</li>
          <li>No unsupervised one-on-one contact. Mentoring happens in the group setting. Two-adult rule.</li>
          <li>Guardians stay informed. Parents know the match and can reach the coordinator.</li>
          <li>Every session is documented. A coordinator reviews match health and conduct.</li>
          <li>Photo consent, if used at all, is separate and optional. It is never a condition of participation.</li>
        </ul>
      </section>

      <section className="mt-16 grid gap-4 md:grid-cols-3">
        {groups.map((group) => (
          <Card key={group.name} id={group.slug} className="scroll-mt-28">
            <CardHeader>
              <CardTitle className="text-lg">{group.name}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {group.body}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      <section className="mt-16 flex max-w-3xl flex-col gap-4">
        <h2 className="text-3xl">Who it serves</h2>
        <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted-foreground">
          <li>
            Youth ages 12–17 from underserved communities in Palm Beach County
            — referred by families, schools, community centers, and juvenile
            diversion programs, or who simply walk in.
          </li>
          <li>
            Military veterans of any era, any branch, any service-connected
            status — whether they want to train, mentor, or both.
          </li>
          <li>
            Adults with developmental disabilities in paid support roles on The
            Crew. Inclusion is built into how the program operates.
          </li>
        </ul>
      </section>

      <section className="mt-16 flex max-w-3xl flex-col gap-4">
        <h2 className="text-3xl">Why we partner with veterans posts</h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          In Your Corner does not own a gym and does not need one. The program
          brings its own equipment, coaches, insurance, and meals into a space
          that is already a pillar of the community — a VFW or American Legion
          hall. The post gets new energy in the building and a visible
          youth-service mission. Youth sessions run alcohol-free.
        </p>
        <Alert>
          <AlertTitle>No host is signed</AlertTitle>
          <AlertDescription>
            We are looking for two evenings a week in a hall or covered outdoor
            space. Days, times, and a start date stay blank until they are
            real. If you command a post, walk us through the space.
          </AlertDescription>
        </Alert>
      </section>

      <section className="mt-16 flex max-w-3xl flex-col gap-4">
        <h2 className="text-3xl">How we will measure it</h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          Every participant completes a survey when they enroll and again at
          the end of a cycle — confidence, connection to a caring adult,
          belonging, self-control, fitness, school engagement, career
          awareness, and hope for the future; for veterans, purpose, connection,
          and a chance to keep serving. Attendance, meals, mentor matches, and
          career nights will be tracked every session. There is no launch data
          yet. We will not invent numbers.
        </p>
      </section>

      <p className="mt-16 max-w-3xl font-heading text-2xl leading-snug">
        This is what it means to have someone in your corner.
      </p>

      <div className="mt-12 flex flex-col gap-3 sm:flex-row">
        <Button size="lg" nativeButton={false} render={<Link href="/help" />}>
          Host, refer, or support
        </Button>
        <Button
          size="lg"
          variant="outline"
          nativeButton={false}
          render={<Link href="/contact" />}
        >
          {site.email}
        </Button>
      </div>
    </Container>
  )
}
