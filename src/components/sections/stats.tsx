import Reveal from "@/components/ui/reveal";

const STATS = [
  { value: "12,400+", label: "Active volunteers" },
  { value: "860+", label: "Events organised" },
  { value: "64", label: "Districts covered" },
  { value: "98%", label: "Would join again" },
];

/** Counter strip sitting directly under the hero. */
export default function Stats() {
  return (
    <section aria-label="Platform impact" className="border-b-2 border-forest/10 bg-mist dark:border-white/10 dark:bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {STATS.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 90}
            className="border-forest/10 py-9 text-center not-first:border-l dark:border-white/10 lg:py-12"
          >
            <p className="heading-caps text-3xl text-forest sm:text-4xl dark:text-brand">
              {stat.value}
            </p>
            <p className="mt-2 text-xs tracking-[0.14em] text-muted-foreground uppercase sm:text-sm">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
