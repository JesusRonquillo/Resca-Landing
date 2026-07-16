import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { MarqueeBand } from "@/components/sections/marquee";
import { Stats } from "@/components/sections/stats";
import { Mission } from "@/components/sections/mission";
import { Cycle } from "@/components/sections/cycle";
import { Testimonials } from "@/components/sections/testimonials";
import { Team } from "@/components/sections/team";
import { WhySupport } from "@/components/sections/why-support";
import { Donate } from "@/components/sections/donate";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <MarqueeBand />
        <Stats />
        <Mission />
        <Cycle />
        <Testimonials />
        <Team />
        <WhySupport />
        <Donate />
      </main>
      <Footer />
    </>
  );
}
