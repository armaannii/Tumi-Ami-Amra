import Hero from "@/components/sections/hero";
import Stats from "@/components/sections/stats";
import HowItWorks from "@/components/sections/how-it-works";
import Features from "@/components/sections/features";
import RecentEvents from "@/components/sections/recent-events";
import Gallery from "@/components/sections/gallery";
import Testimonials from "@/components/sections/testimonials";
import CtaBanner from "@/components/sections/cta-banner";
import Newsletter from "@/components/sections/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <HowItWorks />
      <Features />
      <RecentEvents />
      <Gallery />
      <Testimonials />
      <CtaBanner />
      <Newsletter />
    </>
  );
}
