import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
import EventCard from "@/components/ui/event-card";
import { sampleEvents } from "@/lib/sample-events";
import { buttonStyles } from "@/lib/ui";

/** Latest-events grid: six sample event cards in a 3-column layout. */
export default function RecentEvents() {
  return (
    <section id="recent-events" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Upcoming"
            title="Events happening soon"
            subtitle="Hand-picked opportunities from verified organisers across Bangladesh — reserve your spot before the slots run out."
          />
        </Reveal>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {sampleEvents.map((event, i) => (
            <Reveal key={event.id} delay={(i % 3) * 110}>
              <EventCard event={event} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Link href="/events" className={buttonStyles("primary")}>
            View All Events
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
