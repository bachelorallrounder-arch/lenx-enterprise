import {
  Globe,
  ShieldCheck,
  Search,
  Cpu,
  Clock3,
  Network,
} from "lucide-react";

import Container from "@/components/shared/Container";

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface WhyChooseIndustryProps {
  title?: string;
  subtitle?: string;
}

export default function WhyChooseIndustry({
  title = "Why Choose Lenx Tech Enterprise",
  subtitle = "Delivering reliable electronic component sourcing solutions backed by global supply chain expertise and quality assurance.",
}: WhyChooseIndustryProps) {
  const benefits: Benefit[] = [
    {
      title: "Global Component Sourcing",
      description:
        "Access components from leading global manufacturers through our extensive sourcing network.",
      icon: <Globe size={28} />,
    },

    {
      title: "Quality Assurance",
      description:
        "Strict quality control and supplier verification processes ensure reliable components.",
      icon: <ShieldCheck size={28} />,
    },

    {
      title: "Hard-to-Find Components",
      description:
        "Specialized sourcing support for obsolete, allocated, and difficult-to-source electronic parts.",
      icon: <Search size={28} />,
    },

    {
      title: "Engineering Alternatives",
      description:
        "Expert support in identifying equivalent and alternative components for continuity.",
      icon: <Cpu size={28} />,
    },

    {
      title: "Fast RFQ Response",
      description:
        "Quick quotation turnaround to keep your projects moving without delays.",
      icon: <Clock3 size={28} />,
    },

    {
      title: "Worldwide Supply Chain",
      description:
        "Flexible procurement and logistics solutions supporting global operations.",
      icon: <Network size={28} />,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6B00]">
            Why Lenx Tech
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#071B4D]">
            {title}
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            {subtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="
                group
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                transition-all
                hover:-translate-y-2
                hover:border-[#0066FF]
                hover:shadow-xl
              "
            >
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#EEF5FF]
                  text-[#0066FF]
                "
              >
                {benefit.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-[#071B4D]">
                {benefit.title}
              </h3>

              <p className="mt-4 leading-relaxed text-slate-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}