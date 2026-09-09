import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { pageMetadata } from "@/lib/seo"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { asset } from "@/lib/assets"
import { EpisodeCarousel } from "@/components/adapthletics-episodes"
import { CategoryChips } from "@/components/category-chips"
import {
  adapthleticsEpisodes,
  adapthleticsMedia,
  adapthleticsTagline,
  programs,
  site,
} from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  title: "Adapthletics",
  description:
    "Adapthletics is the Lipson Foundation's adaptive fitness program — strength, mobility, and confidence for people with disabilities, in person in South Florida and virtual anywhere. Built by founder Zachary Lipson since 2022, cost-free under the foundation.",
  route: "/adapthletics",
})

export default function AdapthleticsPage() {
  const program = programs.find((p) => p.slug === "adapthletics")!
  return (
    <Container className="pb-20">
      <header className="flex flex-col-reverse items-start gap-8 pt-12 pb-10 sm:pt-16 sm:pb-14 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Adaptive fitness · A Lipson Foundation program
          </p>
          <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
            Adapthletics
          </h1>
          <div className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p className="font-heading text-2xl text-gold-ink">
              {adapthleticsTagline}
            </p>
            <p className="mt-4">
              Fitness that adapts to the athlete: strength, mobility, and
              confidence for people with disabilities, with every movement
              fitted to the body doing it. Completely cost-free, like
              everything the Lipson Foundation builds.
            </p>
            <p className="mt-4">
              <span className="inline-block -rotate-2 border-2 border-gold px-3 py-1 font-heading text-sm font-semibold uppercase tracking-[0.18em] text-gold-ink">
                Original · Est. 2022
              </span>
            </p>
          </div>
          <CategoryChips categories={program.categories} />
        </div>
        <Image
          src={asset("/brand/adapthletics.png")}
          alt="Adapthletics logo — a gold and orange phoenix over the program name and the tagline Positive Progress Is Possible"
          width={800}
          height={464}
          className="h-auto w-64 shrink-0 self-center sm:w-80 lg:w-96"
          unoptimized
          priority
        />
      </header>

      {/* Pics and clips lead the page — the media wall renders only once the
          founder's own photos and videos are in public/adapthletics/ and
          listed in adapthleticsMedia. Same honest empty-state pattern as
          events and news: never stock, never placeholders. */}
      {adapthleticsMedia.length > 0 && (
        <section id="wall" className="mb-16 flex scroll-mt-24 flex-col gap-6">
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

      {/* The information hub: what the program is, and the two ways it runs. */}
      <section id="offer" className="flex scroll-mt-24 flex-col gap-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl">What we offer</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Adaptive fitness training — strength, mobility, and conditioning
            with the movements, pace, and goals fitted to each athlete&apos;s
            body. Adapted, never watered down. Every body welcome, at any
            starting point. And like everything the foundation runs, completely
            cost-free: no memberships, no fees, no fine print.
          </p>
        </div>
        <div className="max-w-4xl border-2 border-gold/40 p-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold-ink">
            How we offer it
          </p>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="font-heading text-2xl">In person</p>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                Hands-on adaptive training in South Florida — Palm Beach County
                and surrounding counties, in spaces the community already uses.
              </p>
            </div>
            <div className="border-t border-gold/30 pt-6 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-6">
              <p className="font-heading text-2xl">Virtual</p>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                Adaptive coaching online, wherever you are — the same training,
                fitted to your body and whatever equipment you have.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="mt-16 flex max-w-3xl scroll-mt-24 flex-col gap-4">
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
        <p className="text-base leading-relaxed text-muted-foreground">
          The whole story is on the feed:{" "}
          <a
            href="https://www.instagram.com/lipsonfoundation/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gold-ink underline underline-offset-4 hover:text-primary"
          >
            @lipsonfoundation on Instagram
          </a>
          .
        </p>
      </section>

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
          do. Every episode is one athlete, one story, no shortcuts — guests
          so far include{" "}
          {adapthleticsEpisodes.map((ep) => ep.guest).join(", ")}.
        </p>
        <div className="mt-8">
          <EpisodeCarousel />
        </div>
      </section>

      <section className="mt-16 flex max-w-3xl flex-col gap-4">
        <Alert>
          <AlertTitle>Get started</AlertTitle>
          <AlertDescription>
            Email us and we will fit the training to you — virtual coaching is
            available now. In-person sessions in South Florida are being
            arranged; days and locations will be announced when they are real.
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
