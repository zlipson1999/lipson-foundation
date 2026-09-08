import type { Metadata } from "next"
import Link from "next/link"
import { pageMetadata } from "@/lib/seo"
import { Container, PageIntro } from "@/components/container"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { asset } from "@/lib/assets"
import { EpisodeCarousel } from "@/components/adapthletics-episodes"
import {
  adapthleticsMedia,
  adapthleticsTagline,
  site,
} from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  title: "Adapthletics",
  description:
    "Adapthletics is the Lipson Foundation's adaptive fitness program — strength, mobility, and confidence for people with disabilities. Built and coached by founder Zachary Lipson since 2022, now becoming cost-free for everyone.",
  route: "/adapthletics",
})

export default function AdapthleticsPage() {
  return (
    <Container className="pb-20">
      <PageIntro
        kicker="Adapthletics · A Lipson Foundation program"
        title={adapthleticsTagline}
      >
        <p className="font-heading text-xl text-foreground">
          Fitness that adapts to the athlete.
        </p>
        <p>
          An adaptive fitness program for people with disabilities — strength,
          mobility, and confidence, with every movement fitted to the body
          doing it. Completely cost-free, like everything the Lipson Foundation
          builds.
        </p>
        <p className="mt-2">
          <span className="inline-block -rotate-2 border-2 border-gold px-3 py-1 font-heading text-sm font-semibold uppercase tracking-[0.18em] text-gold-ink">
            Original · Est. 2022
          </span>
        </p>
      </PageIntro>

      {/* The hub rail: this page is the collection point for everything
          Adapthletics — jump straight to any part of it. */}
      <nav aria-label="On this page" className="mb-12 flex flex-wrap gap-2">
        {[
          ["#why", "Why this exists"],
          ["#track-record", "The track record"],
          ...(adapthleticsMedia.length > 0 ? [["#wall", "The wall"]] : []),
          ["#series", "From the Ground Up"],
        ].map(([href, label]) => (
          <a
            key={href}
            href={href}
            className="border border-gold/50 px-3 py-1.5 text-sm font-medium text-gold-ink transition-colors hover:border-gold hover:bg-gold/10"
          >
            {label}
          </a>
        ))}
      </nav>

      <section id="why" className="flex max-w-3xl scroll-mt-24 flex-col gap-4">
        <h2 className="text-3xl">Why this exists</h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          Adapthletics is named and designed by our founder, Zachary Lipson,
          who lives with hereditary spastic paraplegia. What changed his life
          was not a cure. It was access — to training, to people who believed
          he could, to a place that did not ask what he could afford.
          Adapthletics exists to be that access for someone else: a program
          where the training bends to the athlete, never the other way around,
          and where cost is never the reason someone stops.
        </p>
      </section>

      <section className="mt-16 grid max-w-4xl gap-8 sm:grid-cols-3">
        <div className="border-l-2 border-gold pl-4">
          <p className="font-heading text-lg">Adapted, not watered down</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Real training — strength, mobility, and fitness — with the
            movements, pace, and goals fitted to each athlete&apos;s body.
          </p>
        </div>
        <div className="border-l-2 border-gold pl-4">
          <p className="font-heading text-lg">Every body welcome</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Built for people with disabilities, at any starting point. Showing
            up is the only prerequisite.
          </p>
        </div>
        <div className="border-l-2 border-gold pl-4">
          <p className="font-heading text-lg">Cost-free, always</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            No memberships, no fees, no fine print. Cost is never the reason
            someone is left out.
          </p>
        </div>
      </section>

      <section id="track-record" className="mt-16 flex max-w-3xl scroll-mt-24 flex-col gap-6">
        <h2 className="text-3xl">This one is not starting from zero</h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          Adapthletics has existed since 2022 — first as Original Adapthletics,
          the adaptive training practice Zach built and coached himself. The
          foundation is bringing it home and removing the last barrier: the
          cost.
        </p>
        <ul className="grid gap-6 sm:grid-cols-2">
          <li className="border-l-2 border-gold pl-4">
            <p className="font-heading text-lg">Est. 2022</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Founded as Original Adapthletics — years of adaptive training
              before it ever had a website.
            </p>
          </li>
          <li className="border-l-2 border-gold pl-4">
            <p className="font-heading text-lg">Certified</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              ATA Adaptive &amp; Inclusive Training certification (2022) and
              the MedFit Adaptive Fitness Specialist specialization.
            </p>
          </li>
          <li className="border-l-2 border-gold pl-4">
            <p className="font-heading text-lg">In the gym</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Years coaching athletes with disabilities — wheelchair users
              included — on real equipment, at real intensity.
            </p>
          </li>
          <li className="border-l-2 border-gold pl-4">
            <p className="font-heading text-lg">From the Ground Up</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Zach&apos;s interview series spotlighting adaptive athletes and
              pioneers, one story at a time.
            </p>
          </li>
          <li className="border-l-2 border-gold pl-4">
            <p className="font-heading text-lg">An athlete himself</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Races Spartan obstacle courses while living with hereditary
              spastic paraplegia.
            </p>
          </li>
          <li className="border-l-2 border-gold pl-4">
            <p className="font-heading text-lg">In the community</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Speaker for the Spastic Paraplegia Foundation and a working voice
              for disability visibility.
            </p>
          </li>
        </ul>
      </section>

      {/* The media wall renders only once the founder's own photos and clips
          are in public/adapthletics/ and listed in adapthleticsMedia — the
          same honest empty-state pattern as events and news. Never stock,
          never placeholders. */}
      {adapthleticsMedia.length > 0 && (
        <section id="wall" className="mt-16 flex scroll-mt-24 flex-col gap-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl">The wall</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Straight from the training floor — no stock photos, no models,
              just the work.
            </p>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {adapthleticsMedia.map((item, i) => (
              <li
                key={item.src}
                className={`flex flex-col gap-2 border-2 border-gold/60 bg-background p-2 pb-3 shadow-sm transition-transform duration-200 hover:rotate-0 ${
                  i % 2 === 0 ? "rotate-1" : "-rotate-1"
                }`}
              >
                {item.type === "video" ? (
                  <video
                    controls
                    preload="metadata"
                    className="aspect-square w-full object-cover"
                    src={asset(item.src)}
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={asset(item.src)}
                    alt={item.alt}
                    className="aspect-square w-full object-cover"
                    loading="lazy"
                  />
                )}
                {item.caption ? (
                  <p className="px-1 font-heading text-sm text-muted-foreground">
                    {item.caption}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section id="series" className="mt-16 scroll-mt-24 bg-primary p-8 text-primary-foreground sm:p-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
          The interview series
        </p>
        <h2 className="mt-3 text-3xl text-primary-foreground">
          From the Ground Up
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-primary-foreground/70">
          Before Adapthletics was a foundation program, Zach was already
          handing the mic to the people who prove what adaptive athletes can
          do. Every episode is one athlete, one story, no shortcuts.
        </p>
        <div className="mt-8">
          <EpisodeCarousel />
        </div>
        <p className="mt-8 text-base leading-relaxed text-primary-foreground/70">
          Watch the episodes on{" "}
          <a
            href="https://www.instagram.com/lipsonfoundation/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gold underline underline-offset-4 hover:text-primary-foreground"
          >
            @lipsonfoundation
          </a>
          .
        </p>
      </section>

      <section className="mt-16 flex max-w-3xl flex-col gap-4">
        <Alert>
          <AlertTitle>Being designed now</AlertTitle>
          <AlertDescription>
            Adapthletics is in development as a foundation program. There is no
            schedule, venue, or start date yet — those stay blank until they
            are real. Tell us you&apos;re interested and you will hear first.
          </AlertDescription>
        </Alert>
      </section>

      <div className="mt-12 flex flex-col gap-3 sm:flex-row">
        <Button size="lg" nativeButton={false} render={<Link href="/help" />}>
          Tell us you&apos;re interested
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
