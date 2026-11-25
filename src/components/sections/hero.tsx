import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import Reveal from "@/components/ui/reveal";
import { buttonStyles } from "@/lib/ui";

const HIGHLIGHTS = [
  "Free to join",
  "Verified organisers",
  "Volunteer hours tracked",
];

/**
 * Full-bleed hero: background photo from the internet with a dark teal
 * overlay, uppercase Rubik headline, quick location chip and CTAs.
 */
export default function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden">
      {/* Background image (sourced from Pexels — free to use) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.pexels.com/photos/6646873/pexels-photo-6646873.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Volunteers working together at a community event"
        className="absolute inset-0 -z-20 size-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-night/92 via-night/80 to-night/45" />

      <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-4 pt-30 pb-20 sm:px-6 lg:px-8 lg:pt-38">
        <Reveal>
          <span className="inline-flex w-fit items-center gap-2 border border-white/30 bg-white/10 px-3.5 py-1.5 text-xs tracking-wide text-white uppercase backdrop-blur-sm">
            <MapPin className="size-3.5 text-brand" />
            Dhaka · Chattogram · Sylhet · 40+ districts
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="heading-caps mt-6 max-w-4xl text-4xl text-white sm:text-6xl lg:text-[4.5rem]">
            Small hands,{" "}
            <span className="text-brand">big change</span> — start in your own
            neighbourhood
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Tumi Ami Amra connects volunteers with verified social development
            events around them — clean-ups, blood drives, winter relief, tree
            planting and more. Find a cause, show up, make it count.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/#recent-events" className={buttonStyles("primary")}>
              Browse Events
              <ArrowRight className="size-4" />
            </Link>
            <Link href="/create-event" className={buttonStyles("light")}>
              Organise an Event
            </Link>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-white/75"
              >
                <span className="size-1.5 bg-brand" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Lime ticker strip at the bottom of the hero */}
      <div className="relative z-10 overflow-hidden border-t-2 border-forest bg-brand py-3">
        <div className="flex animate-[marquee_28s_linear_infinite] gap-12 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, row) => (
            <div key={row} className="flex shrink-0 gap-12" aria-hidden={row === 1}>
              {[
                "Tree Planting",
                "Blood Donation",
                "River Clean-Up",
                "Winter Relief",
                "Food Distribution",
                "Elderly Care",
                "School Repair",
                "Disaster Response",
              ].map((t) => (
                <span
                  key={t}
                  className="font-display text-sm font-bold tracking-widest text-forest uppercase"
                >
                  {t} <span className="text-forest/50">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
