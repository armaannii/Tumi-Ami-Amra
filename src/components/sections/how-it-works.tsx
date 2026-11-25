import { CalendarPlus, HandHeart, MapPinned, Trophy } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

const STEPS = [
  {
    icon: MapPinned,
    step: "01",
    title: "Find a cause near you",
    text: "Browse upcoming events filtered by district, cause and date — every listing is verified before it goes live.",
  },
  {
    icon: CalendarPlus,
    step: "02",
    title: "Register in seconds",
    text: "One click to reserve your spot. Organisers see your name on the roster and reach out with the details.",
  },
  {
    icon: HandHeart,
    step: "03",
    title: "Show up & help out",
    text: "Arrive, meet your crew and get to work. Safety kits and guidance are provided on the ground.",
  },
  {
    icon: Trophy,
    step: "04",
    title: "Track your impact",
    text: "Every hour is logged to your volunteer profile with a certificate you can share anywhere.",
  },
];

/** Four-step "how it works" band on a dark teal background. */
export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-forest py-20 lg:py-28"
    >
      {/* subtle brand blob */}
      <div className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-brand/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="How it works"
          title="From couch to cause in four steps"
          subtitle="No paperwork, no waiting lists. Joining a social development event should feel as easy as booking a ticket."
        />

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.step} delay={i * 110} as="li" className="relative">
              <div className="flex h-full flex-col border border-white/15 bg-white/[0.04] p-6 transition-colors hover:border-brand/60 hover:bg-white/[0.07]">
                <div className="flex items-start justify-between">
                  <span className="flex size-12 items-center justify-center bg-brand text-forest">
                    <s.icon className="size-6" strokeWidth={2.2} />
                  </span>
                  <span className="font-display text-4xl font-black text-white/10">
                    {s.step}
                  </span>
                </div>
                <h3 className="heading-caps mt-5 text-lg text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {s.text}
                </p>
              </div>
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute top-1/2 -right-4 hidden h-0.5 w-4 bg-brand lg:block"
                />
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
