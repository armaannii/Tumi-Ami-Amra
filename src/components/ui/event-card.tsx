import { CalendarDays, MapPin, Users } from "lucide-react";
import { cn } from "cn";
import type { SampleEvent } from "@/lib/sample-events";
import { buttonStyles } from "@/lib/ui";

/**
 * Event card used in the Recent Events grid: photo, category chip, meta rows
 * and a shared-style "View Details" button.
 */
export default function EventCard({
  event,
  className,
}: {
  event: SampleEvent;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group flex flex-col border-2 border-forest/15 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-forest hover:shadow-[8px_8px_0_0_var(--brand)] dark:border-white/15 dark:bg-card dark:hover:border-brand",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-brand px-2.5 py-1 font-display text-[11px] font-bold tracking-wider text-forest uppercase">
          {event.category}
        </span>
        <span
          className={cn(
            "absolute top-3 right-3 px-2.5 py-1 font-display text-[11px] font-bold tracking-wider uppercase",
            event.status === "open"
              ? "bg-forest text-brand dark:bg-night dark:text-brand"
              : "bg-white/95 text-forest",
          )}
        >
          {event.status === "open" ? "Open" : "Upcoming"}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg leading-snug font-bold text-forest uppercase transition-colors group-hover:text-brand dark:text-brand dark:group-hover:text-white">
          {event.title}
        </h3>

        <ul className="mt-3.5 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <CalendarDays className="size-4 shrink-0 text-brand" />
            <span>
              {event.date} · {event.time}
            </span>
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="size-4 shrink-0 text-brand" />
            <span>{event.location}</span>
          </li>
          <li className="flex items-center gap-2">
            <Users className="size-4 shrink-0 text-brand" />
            <span>{event.attendees} volunteers joined</span>
          </li>
        </ul>

        <a
          href="/events"
          className={cn(buttonStyles("outline"), "mt-5 w-full self-start py-2.5 text-xs")}
        >
          View Details
        </a>
      </div>
    </article>
  );
}
