import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

const PHOTOS = [
  {
    src: "https://images.pexels.com/photos/6647012/pexels-photo-6647012.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Volunteers packing relief supplies",
    span: "sm:col-span-2 sm:row-span-2",
    label: "Flood relief packing",
  },
  {
    src: "https://images.pexels.com/photos/6646781/pexels-photo-6646781.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Hands planting a sapling",
    span: "",
    label: "Tree plantation",
  },
  {
    src: "https://images.pexels.com/photos/6568953/pexels-photo-6568953.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Community volunteers cheering together",
    span: "",
    label: "Volunteer meetup",
  },
  {
    src: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Cleaning a public space",
    span: "",
    label: "Clean-up drive",
  },
  {
    src: "https://images.pexels.com/photos/6647025/pexels-photo-6647025.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Volunteers distributing food",
    span: "",
    label: "Food distribution",
  },
];

/** Photo mosaic gallery showing moments from past events. */
export default function Gallery() {
  return (
    <section id="gallery" className="border-y-2 border-forest/10 bg-mist py-20 dark:border-white/10 dark:bg-card lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Gallery"
            title="Moments from the field"
            subtitle="Real people, real streets, real impact — snapshots from events our community ran this year."
          />
        </Reveal>

        <div className="mt-12 grid auto-rows-[11rem] grid-cols-2 gap-3 sm:auto-rows-[13rem] sm:grid-cols-4 sm:gap-4">
          {PHOTOS.map((photo, i) => (
            <Reveal
              key={photo.src}
              delay={i * 70}
              className={`group relative overflow-hidden border-2 border-forest/15 dark:border-white/15 ${photo.span}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-night/85 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="p-3.5 font-display text-xs font-bold tracking-wider text-brand uppercase">
                  {photo.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
