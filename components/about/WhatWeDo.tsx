import Container from "@/components/shared/Container";

const services = [
  {
    icon: "⚡",
    title: "Electronics Distribution",
    description:
      "Access a broad portfolio of electronic components from globally recognized manufacturers.",
  },
  {
    icon: "🔌",
    title: "Semiconductor Sourcing",
    description:
      "Reliable sourcing solutions for active, passive and semiconductor components.",
  },
  {
    icon: "🌎",
    title: "Global Procurement",
    description:
      "Worldwide supplier access helping businesses secure inventory efficiently.",
  },
  {
    icon: "📦",
    title: "Supply Chain Solutions",
    description:
      "Strategic procurement and inventory solutions designed to improve availability.",
  },
  {
    icon: "🛡️",
    title: "Quality Assurance",
    description:
      "Supplier verification, traceability and quality-focused sourcing processes.",
  },
  {
    icon: "🔬",
    title: "Engineering Support",
    description:
      "Component alternatives, technical guidance and sourcing expertise for project success.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-white py-24">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6B00]">
            What We Do
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#071B4D]">
            Delivering Reliable Electronics
            <span className="block text-[#0066FF]">
              Distribution Solutions
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Lenx Tech Enterprise supports businesses with component sourcing,
            procurement solutions and supply chain expertise that help
            accelerate innovation and improve operational efficiency.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="
                group
                rounded-[32px]
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
                transition-all
                duration-300
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
                  text-3xl
                  transition
                  group-hover:scale-110
                "
              >
                {service.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#071B4D]">
                {service.title}
              </h3>

              <p className="mt-4 leading-relaxed text-slate-600">
                {service.description}
              </p>

              <div className="mt-6 h-1 w-12 rounded-full bg-[#FF6B00]" />
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-24 rounded-[40px] bg-[#071B4D] p-10 lg:p-14">
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            <div className="text-center">
              <h3 className="text-5xl font-bold text-[#0066FF]">
                50K+
              </h3>

              <p className="mt-3 text-slate-300">
                Electronic Components
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-[#FF6B00]">
                120+
              </h3>

              <p className="mt-3 text-slate-300">
                Global Manufacturers
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-[#0066FF]">
                Global
              </h3>

              <p className="mt-3 text-slate-300">
                Supplier Network
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-[#FF6B00]">
                B2B
              </h3>

              <p className="mt-3 text-slate-300">
                Distribution Focus
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}