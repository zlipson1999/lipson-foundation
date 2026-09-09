import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { pageMetadata } from "@/lib/seo"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { asset } from "@/lib/assets"
import { AdapthleticsSplash } from "@/components/adapthletics-splash"
import { EpisodeCarousel } from "@/components/adapthletics-episodes"
import {
  adapthleticsEpisodes,
  adapthleticsHeroPhotos,
  adapthleticsMedia,
  adapthleticsResults,
  site,
} from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  title: "Adapthletics",
  description:
    "Adapthletics is the Lipson Foundation's certified adaptive fitness program — strength, mobility, and confidence for people with disabilities, in person in South Florida and virtual anywhere. Completely cost-free.",
  route: "/adapthletics",
})

export default function AdapthleticsPage() {
  return (
    <Container className="pb-20">
      {/* Owner-directed (9 Sep 2026): the GoPro reel pops up in a closable
          window on page entry — see the component for the rules. */}
      <AdapthleticsSplash />
      {/* One centered column at every size (owner-directed layout): logo,
          real training photos, the stats line — one straight row across the
          page on desktop — then the kicker and intro. */}
      <header className="flex flex-col items-center gap-6 pt-12 pb-10 text-center sm:pt-16 sm:pb-14">
        <Image
          src={asset("/brand/adapthletics.png")}
          alt="Adapthletics logo — a gold and orange phoenix over the program name and the tagline Positive Progress Is Possible"
          width={800}
          height={442}
          className="h-auto w-64 sm:w-80 lg:w-96"
          unoptimized
          priority
        />
        {/* The logo above spells the program name and tagline, so the text
            heading is screen-reader-only (owner-directed 9 Sep 2026). */}
        <h1 className="sr-only">Adapthletics</h1>
        {/* Owner-directed hero order (9 Sep 2026): logo, then real training
            photos, then the stats box, then the wording. The stills come
            from the founder's own footage. */}
        <ul className="grid w-full grid-cols-3 gap-3 sm:gap-4">
          {adapthleticsHeroPhotos.map((photo) => (
            <li key={photo.src}>
              <Image
                src={asset(photo.src)}
                alt={photo.alt}
                width={1200}
                height={675}
                className="aspect-[16/10] w-full border-2 border-gold/40 object-cover"
                unoptimized
              />
            </li>
          ))}
        </ul>
        {adapthleticsResults.length > 0 && (
          <ul className="grid w-full gap-5 bg-primary p-6 text-left text-primary-foreground sm:grid-cols-2 sm:gap-6 sm:p-8 lg:grid-cols-5">
            {adapthleticsResults.map((item) => (
              <li key={item.label} className="border-l-2 border-gold pl-4">
                <p className="font-heading text-3xl text-gold">{item.value}</p>
                <p className="mt-1 text-sm leading-relaxed text-primary-foreground/80">
                  {item.label}
                </p>
              </li>
            ))}
          </ul>
        )}
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          Certified adaptive fitness
          <span className="hidden lg:inline"> · </span>
          <span className="block lg:inline">A Lipson Foundation program</span>
        </p>
        <div className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Certified adaptive fitness that works: strength, mobility, and
            confidence for people with disabilities — wheelchair users,
            hereditary spastic paraplegia, cerebral palsy, multiple sclerosis,
            limb loss, stroke recovery, cancer recovery, and more — with every
            movement customized to the participant. Completely cost-free, like
            everything the Lipson Foundation builds.
          </p>
        </div>
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
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            The coaching behind it is certified: ATA Adaptive &amp; Inclusive
            Training and the MedFit Adaptive Fitness Specialist specialization.
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
