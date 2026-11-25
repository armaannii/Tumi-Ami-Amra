import { Quote, Star } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

const TESTIMONIALS = [
  {
    name: "Nusrat Jahan",
    role: "Volunteer, 24 events",
    quote:
      "I found my first clean-up drive here during exam week and haven't stopped since. The hour tracker actually got me my semester's community credit.",
    avatar:
      "https://ui-avatars.com/api/?name=Nusrat+Jahan&background=c8df0a&color=193838&size=96&bold=true",
  },
  {
    name: "Tanvir Ahmed",
    role: "Organiser, Green Dhaka",
    quote:
      "We used to recruit volunteers over Facebook posts and lose track of everyone. Now registration, roster and turnout are all in one place.",
    avatar:
      "https://ui-avatars.com/api/?name=Tanvir+Ahmed&background=96cdcf&color=051a1a&size=96&bold=true",
  },
  {
    name: "Farhana Karim",
    role: "Volunteer, 11 events",
    quote:
      "My parents were nervous about me joining strangers. Seeing verified organiser profiles and real attendee counts changed their mind completely.",
    avatar:
      "https://ui-avatars.com/api/?name=Farhana+Karim&background=193838&color=c8df0a&size=96&bold=true",
  },
];

/** Three testimonial cards on a dark teal band. */
export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-forest py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="Testimonials"
            title="Loved by the people who show up"
            subtitle="Volunteers and organisers on why they keep coming back."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 110} className="h-full">
              <figure className="flex h-full flex-col border border-white/15 bg-white/[0.05] p-6 transition-colors hover:border-brand/60">
                <Quote
                  className="size-8 text-brand"
                  fill="currentColor"
                  strokeWidth={0}
                />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/75">
                  “{t.quote}”
                </blockquote>
                <div className="mt-5 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="size-4 fill-brand text-brand"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <figcaption className="mt-4 flex items-center gap-3 border-t border-white/15 pt-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    className="size-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-display text-sm font-bold tracking-wide text-white uppercase">
                      {t.name}
                    </p>
                    <p className="text-xs text-brand">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
