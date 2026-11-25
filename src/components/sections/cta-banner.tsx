import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Reveal from "@/components/ui/reveal";
import { buttonStyles } from "@/lib/ui";

/**
 * Full-width call-to-action banner over a second background photo with a
 * heavy brand/teal overlay.
 */
export default function CtaBanner() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.pexels.com/photos/6647026/pexels-photo-6647026.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Volunteers celebrating after an event"
        loading="lazy"
        className="absolute inset-0 -z-20 size-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-forest/85 mix-blend-multiply" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-night/70 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="max-w-3xl">
          <span className="inline-flex items-center gap-2 border border-brand/50 bg-brand/10 px-3.5 py-1.5 text-xs tracking-[0.16em] text-brand uppercase">
            <Sparkles className="size-3.5" />
            Your community needs you
          </span>
          <h2 className="heading-caps mt-5 text-3xl text-white sm:text-5xl">
            One afternoon. One cause.{" "}
            <span className="text-brand">A lifetime of impact.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
            Whether you have two hours or every weekend, there is an event
            waiting for you. Create a free account and claim your first shift
            today — no fees, no commitments, just showing up.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/register" className={buttonStyles("primary")}>
              Join as a Volunteer
              <ArrowRight className="size-4" />
            </Link>
            <Link href="/create-event" className={buttonStyles("light")}>
              Host an Event
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
