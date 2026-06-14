import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import MissionVision from "@/components/about/MissionVision";
import WhatWeDo from "@/components/about/WhatWeDo";
import IndustriesServe from "@/components/about/IndustriesServe";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import GlobalNetwork from "@/components/about/GlobalNetwork";
import CoreValues from "@/components/about/CoreValues";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata = {
  title: "About Us | Lenx Tech Enterprise",
  description:
    "Lenx Tech Enterprise is a global electronics and semiconductor sourcing partner providing component distribution, supply chain solutions and engineering support.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />

      <WhoWeAre />

      <MissionVision />

      <WhatWeDo />

      <IndustriesServe />

      <WhyChooseUs />

      <GlobalNetwork />

      <CoreValues />

      <AboutCTA />
    </main>
  );
}