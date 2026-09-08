"use client"

import { useRef } from "react"
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react/ssr"
import {
  adapthleticsEpisodeIds,
  adapthleticsSpotifyShowId,
} from "@/lib/site"

/**
 * The From the Ground Up rail: a swipeable Spotify mini-player per episode
 * (cover art, title, and playback all come from Spotify itself, so nothing
 * here can drift out of date), and below it the show embed, which lists
 * every episode and updates itself as new ones are uploaded.
 */
export function EpisodeCarousel() {
  const trackRef = useRef<HTMLUListElement>(null)

  const nudge = (direction: -1 | 1) => {
    const track = trackRef.current
    if (!track) return
    const slide = track.querySelector("li")
    const width = slide ? slide.getBoundingClientRect().width + 16 : 356
    track.scrollBy({ left: direction * width, behavior: "smooth" })
  }

  return (
    <div className="flex flex-col gap-6">
      <ul
        ref={trackRef}
        className="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-2"
        aria-label="From the Ground Up episodes"
      >
        {adapthleticsEpisodeIds.map((id, i) => (
          <li
            key={id}
            className="w-[300px] shrink-0 snap-start sm:w-[340px]"
          >
            <iframe
              src={`https://open.spotify.com/embed/episode/${id}`}
              width="100%"
              height="352"
              style={{ border: 0, borderRadius: 12 }}
              allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title={`From the Ground Up episode ${i + 1} on Spotify`}
            />
          </li>
        ))}
      </ul>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => nudge(-1)}
          aria-label="Previous episodes"
          className="flex h-11 w-11 items-center justify-center border border-gold/40 text-gold transition-colors hover:border-gold hover:bg-gold/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          <ArrowLeftIcon size={20} />
        </button>
        <button
          type="button"
          onClick={() => nudge(1)}
          aria-label="Next episodes"
          className="flex h-11 w-11 items-center justify-center border border-gold/40 text-gold transition-colors hover:border-gold hover:bg-gold/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          <ArrowRightIcon size={20} />
        </button>
      </div>
      {adapthleticsSpotifyShowId !== "" && (
        <div className="flex flex-col gap-3">
          <iframe
            src={`https://open.spotify.com/embed/show/${adapthleticsSpotifyShowId}`}
            width="100%"
            height="352"
            style={{ border: 0, borderRadius: 12 }}
            allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="From the Ground Up on Spotify"
          />
          <p className="text-sm leading-relaxed text-primary-foreground/60">
            Straight from Spotify — every new episode Zach uploads lands here
            automatically.
          </p>
        </div>
      )}
    </div>
  )
}
