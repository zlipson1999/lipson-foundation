import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon, LeafIcon, HeartIcon, SunIcon, UsersThreeIcon } from "@phosphor-icons/react/ssr"
import { Button } from "@/components/ui/button"
import { asset } from "@/lib/assets"
import { commitments, heroBlurb, programs, site } from "@/lib/site"
import { CategoryChips } from "@/components/category-chips"
import { pageMetadata } from "@/lib/seo"
import styles from "./home.module.css"

export const metadata: Metadata = pageMetadata({
  title: `${site.name} — ${site.kicker}`,
  description: site.description,
  route: "/",
  absoluteTitle: true,
})

const destinations = [
  {
    href: "/about",
    title: "About us",
    body: "Who Lipson Foundation is, who we serve, and why the work exists.",
  },
  {
    href: "/team",
    title: "The team",
    body: "The board, and staff as roles are filled.",
  },
  {
    href: "/programs",
    title: "Programs",
    body: "The programs we bring to communities, starting with the flagship.",
  },
  {
    href: "/events",
    title: "Events",
    body: "Public dates when they exist. None are posted yet.",
  },
  {
    href: "/news",
    title: "News",
    body: "Updates from the foundation. The page is ready; the feed is not.",
  },
  {
    href: "/donate",
    title: "Donate",
    body: "Every gift keeps a program cost-free to the people it serves.",
  },
] as const

const icons = [SunIcon, HeartIcon, UsersThreeIcon, LeafIcon]

function Action({ href, children, outline = false }: {
  href: string; children: React.ReactNode; outline?: boolean
}) {
  return <Button nativeButton={false} render={<Link href={href} />}
    className={outline ? styles.outlineButton : styles.goldButton}>{children}</Button>
}

export default function HomePage() {
  return (
    <div className={styles.home}>
      <section className={styles.hero} style={{ backgroundImage: `url("${asset("/brand/palm-backdrop.webp")}")` }}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Palm Beach County &amp; beyond <span /></p>
            <h1>Community<br />programs.<br /><em>Cost-free.</em></h1>
            <p className={styles.description}>Removing cost as a barrier to health,<br className={styles.desktopBreak} /> personal growth, and opportunity.</p>
            <div className={styles.actions}>
              <Action href="/programs">Explore programs <ArrowRightIcon /></Action>
              <Action href="/help" outline>Get involved</Action>
            </div>
          </div>
          <div className={styles.heroArt}>
            <Image src={asset("/brand/founder.webp")} alt="Zachary Lipson, Founder and President"
              width={803} height={900} priority unoptimized className={styles.founder} />
            <p className={styles.statement}>Positive<br />People<br />Stronger<br />Communities<span /></p>
            <div className={styles.caption}><strong>Zachary Lipson</strong><span>Founder &amp; President</span><i /></div>
          </div>
        </div>
      </section>

      <section className={styles.commitments} aria-label="Our commitments">
        {commitments.map((item, index) => {
          const Icon = icons[index]
          return <div key={item.title} className={styles.commitment}>
            <div><Icon weight="light" aria-hidden /><h2>{item.title}</h2></div>
            <p>{item.short}</p>
          </div>
        })}
      </section>

      <section className={styles.introduction} aria-label="About the foundation">
        <h2>Cost-free community programs for underserved communities across South Florida.</h2>
        <p>{heroBlurb}</p>
        <div className={styles.facts}><span>EIN {site.ein}</span><span>{site.location}</span><a href={`mailto:${site.email}`}>{site.email}</a></div>
      </section>

      <section className={styles.programs}>
        <div className={styles.sectionHead}>
          <div><p className={styles.eyebrow}>Where the work starts <span /></p><h2>Our programs</h2></div>
          <p>Cost-free to the people we serve.</p>
        </div>
        <p className={styles.programIntro}>Every one is cost-free to the people it serves. New programs are listed as they launch.</p>
        {programs.map((program) => <article key={program.slug} className={styles.programCard} style={{ backgroundImage: `url("${asset("/brand/palm-backdrop.webp")}")` }}>
          <div className={styles.programLogo}>
            <Image src={asset(program.mark)} alt={program.name}
              width={program.slug === "adapthletics" ? 1447 : 612} height={program.slug === "adapthletics" ? 877 : 640} unoptimized />
          </div>
          <div className={styles.programContent}>
            <p className={styles.eyebrow}>{program.status} <span /></p>
            <h3>{program.name}</h3>
            <CategoryChips categories={program.categories} className={styles.categories} />
            <p>{program.summary}</p>
            <Action href={program.href}>About the program <ArrowRightIcon /></Action>
          </div>
        </article>)}
        <section className={styles.explore} aria-labelledby="explore-heading">
          <p className={styles.eyebrow}>Explore</p>
          <h2 id="explore-heading">Find your way around.</h2>
          <div className={styles.destinationGrid}>{destinations.map(item => <Link key={item.href} href={item.href}><h3>{item.title}</h3><p>{item.body}</p><ArrowRightIcon aria-hidden /></Link>)}</div>
        </section>
        <div className={styles.support}>
          <div>
          <h2><span />Help keep every program cost-free.</h2>
          <p>Host a space, refer someone, lend a skill, or sponsor a session. Every note goes to a person, not a queue.</p>
          </div>
          <div className={styles.supportActions}>
          <Action href="/donate">Donate</Action>
          <Action href="/help">Get involved <ArrowRightIcon /></Action>
          <Action href="/contact" outline>Contact</Action>
          </div>
        </div>
      </section>
    </div>
  )
}
