import { BadgeCheck, BellRing, Gauge, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Verified organisers",
    text: "Every organiser is ID-checked and reviewed by our team before they can publish an event, so you always know who you're volunteering with.",
  },
  {
    icon: BellRing,
    title: "Smart alerts",
    text: "Get notified when a cause you care about announces an event near your district — no scrolling through endless group chats.",
  },
  {
    icon: BadgeCheck,
    title: "Tracked hours & certificates",
    text: "Your attendance is logged automatically and exportable as a signed certificate for university or job applications.",
  },
  {
    icon: Gauge,
    title: "Live capacity boards",
    text: "See how many slots are left in real time and claim yours before the crew fills up — organisers can close registration anytime.",
  },
];

/** Two-column feature band: copy on the left, image + floating stat card. */
export default function Features() {
  return (
    <section id="features" className="bg-mist py-20 dark:bg-card lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Why Tumi Ami Amra"
            title="Everything a volunteer needs, nothing they don't"
            subtitle="We built the platform we wished existed when the last flood hit — fast to join, honest about impact, and joyful to use."
          />
          <ul className="mt-8 space-y-5">
            {FEATURES.map((f) => (
              <li key={f.title} className="flex gap-4">
                <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center bg-brand text-forest">
                  <f.icon className="size-5" strokeWidth={2.2} />
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold tracking-wide text-forest uppercase dark:text-brand">
                    {f.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {f.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div className="border-4 border-forest dark:border-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1000"
              alt="Volunteers sorting donations together"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover sm:aspect-[4/3] lg:aspect-[4/5]"
            />
          </div>

          {/* Floating stat card */}
          <div className="absolute -bottom-6 -left-4 max-w-[15rem] border-4 border-forest bg-brand p-5 shadow-[10px_10px_0_0_var(--forest)] dark:border-brand dark:shadow-[10px_10px_0_0_rgba(200,223,10,0.25)] sm:-left-8">
            <p className="heading-caps text-3xl text-forest">4.9 / 5</p>
            <p className="mt-1.5 text-xs leading-snug font-semibold tracking-wide text-forest/80 uppercase">
              Volunteer rating from 3,200+ reviews
            </p>
          </div>

          {/* Decorative corner square */}
          <span
            aria-hidden
            className="absolute -top-5 -right-5 -z-10 size-24 bg-brand/40 dark:bg-brand/20"
          />
        </Reveal>
      </div>
    </section>
  );
}
