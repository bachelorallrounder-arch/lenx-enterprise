import Link from "next/link";

import Container from "@/components/shared/Container";

const industries = [
  {
    title: "Medical & Healthcare",
    description:
      "Supporting medical devices, diagnostics, wearable healthcare and laboratory automation.",
    image: "/industries/medical.jpg",
    href: "/applications/medical-healthcare",
  },
  {
    title: "Automotive Electronics",
    description:
      "Components for EV platforms, ADAS systems, connectivity and intelligent mobility.",
    image: "/industries/automotive.jpg",
    href: "/applications/automotive-electronics",
  },
  {
    title: "Industrial Automation",
    description:
      "Reliable electronic solutions for factory automation and industrial control systems.",
    image: "/industries/industrial.jpg",
    href: "/products",
  },
  {
    title: "Consumer Electronics",
    description:
      "Electronic components powering next-generation consumer products.",
    image: "/industries/consumer.jpg",
    href: "/products",
  },
  {
    title: "Telecommunications",
    description:
      "Semiconductor and connectivity solutions for communication infrastructure.",
    image: "/industries/telecom.jpg",
    href: "/products",
  },
  {
    title: "IoT & Embedded Systems",
    description:
      "Microcontrollers, wireless modules and sensors for connected technologies.",
    image: "/industries/iot.jpg",
    href: "/products",
  },
];

export default function IndustriesServe() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6B00]">
            Industries We Serve
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#071B4D]">
            Supporting Innovation Across
            <span className="block text-[#0066FF]">
              Diverse Industries
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Lenx Tech Enterprise provides sourcing, procurement and
            supply chain solutions for organizations operating across
            multiple technology-driven industries.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => (
            <Link
              key={industry.title}
              href={industry.href}
              className="
                group
                overflow-hidden
                rounded-[32px]
                border
                border-slate-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[#0066FF]
                hover:shadow-2xl
              "
            >
              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#071B4D]">
                  {industry.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {industry.description}
                </p>

                <div className="mt-6 flex items-center font-semibold text-[#0066FF]">
                  Learn More →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Banner */}
        <div
          className="
            mt-16
            rounded-[40px]
            bg-[#071B4D]
            p-10
            text-center
            lg:p-14
          "
        >
          <h3 className="text-4xl font-bold text-white">
            Industry-Focused Component Expertise
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-300">
            From healthcare and automotive electronics to industrial
            automation and IoT, Lenx Tech Enterprise helps businesses
            access the components and sourcing support needed to bring
            innovative products to market.
          </p>
        </div>
      </Container>
    </section>
  );
}