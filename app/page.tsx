import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import AboutPreview from "@/components/home/AboutPreview";
import Categories from "@/components/home/Categories";
import Manufacturers from "@/components/home/Manufacturers";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import Industries from "@/components/home/IndustriesSection";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
       <Stats />
       <AboutPreview />
       <Manufacturers />
       <Categories />
     <WhyChooseUs />
      <Industries />
      <CTA />
    </>
  );
}