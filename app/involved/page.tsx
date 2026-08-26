import type { Metadata } from "next"
import { Container, PageIntro } from "@/components/container"
import { InvolvedForm } from "@/components/involved-form"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Get involved",
  description:
    "Volunteer, mentor, or partner with Lipson Foundation in Palm Beach County.",
}

const paths = [
  {
    title: "Mentor",
    body: "Show up consistently for a young adult who needs a steady adult in their corner — career, school, or just how to navigate a week.",
  },
  {
    title: "Volunteer",
    body: "Help with events, intake support, donations of time for resumes, mock interviews, or the logistics that keep programs running.",
  },
  {
    title: "Partner",
    body: "If you already serve this community, tell us where a grant, a referral pipeline, or a shared program would do more than either of us could alone.",
  },
  {
    title: "Give in kind",
    body: "Professional skills, clothing, hygiene kits, transit support, and meeting space all matter. Name what you can offer.",
  },
]

export default function InvolvedPage() {
  return (
    <Container className="pb-20">
      <PageIntro kicker="Get involved" title="This only works if more of us show up.">
        <p>
          Money moves programs. People move lives. If you have hours, a skill,
          a network, or an organization already in the work, we want to meet
          you.
        </p>
      </PageIntro>

      <div className="mb-12 grid gap-4 sm:grid-cols-2">
        {paths.map((path) => (
          <Card key={path.title}>
            <CardHeader>
              <CardTitle className="text-lg">{path.title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {path.body}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <InvolvedForm />
        <p className="text-sm leading-relaxed text-muted-foreground">
          Background checks and training will apply where we place mentors
          alongside young people. We will never send you into a role unprepared.
          If you are not sure where you fit, say so — we will help you find a
          useful place.
        </p>
      </div>
    </Container>
  )
}
