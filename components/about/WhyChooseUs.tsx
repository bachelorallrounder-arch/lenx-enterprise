import Container from "@/components/shared/Container";

const reasons = [
  {
    icon: "🌍",
    title: "Global Sourcing Network",
    description:
      "Access components through a worldwide network of manufacturers, suppliers and sourcing partners.",
  },
  {
    icon: "🛡️",
    title: "Quality Assurance",
    description:
      "Supplier verification, traceability and quality-focused sourcing processes that build procurement confidence.",
  },
  {
    icon: "⚡",
    title: "Hard-To-Find Components",
    description:
      "Specialized sourcing capabilities for obsolete, allocated and difficult-to-source electronic components.",
  },
  {
    icon: "🔬",
    title: "Engineering Support",
    description:
      "Alternative component recommendations and technical sourcing expertise to support project success.",
  },
  {
    icon: "📦",
    title: "Supply Chain Expertise",
    description:
      "Procurement and inventory solutions designed to improve availability and reduce sourcing risk.",
  },
  {
    icon: "🤝",
    title: "Customer-Focused Service",
    description:
      "Responsive support and tailored sourcing strategies aligned with your business requirements.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6B00]">
            Why Choose Lenx Tech
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#071B4D]">
            Trusted By Businesses Seeking
            <span className="block text-[#0066FF]">
              Reliable Electronics Distribution
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            We combine sourcing expertise, supplier relationships and
            customer-focused service to help organizations navigate
            today's complex electronics supply chain.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
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
                {reason.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#071B4D]">
                {reason.title}
              </h3>

              <p className="mt-4 leading-relaxed text-slate-600">
                {reason.description}
              </p>

              <div className="mt-6 h-1 w-12 rounded-full bg-[#FF6B00]" />
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div
          className="
            mt-20
            overflow-hidden
            rounded-[40px]
            bg-[#071B4D]
            p-10
            lg:p-14
          "
        >
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6B00]">
                Our Commitment
              </span>

              <h3 className="mt-4 text-4xl font-bold text-white">
                Building Long-Term Partnerships
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-slate-300">
                We focus on delivering dependable sourcing solutions,
                transparent communication and exceptional service that
                helps customers achieve their business objectives.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-3xl bg-white/10 p-6 text-center">
                <h4 className="text-4xl font-bold text-[#0066FF]">
                  50K+
                </h4>

                <p className="mt-2 text-slate-300">
                  Components
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-6 text-center">
                <h4 className="text-4xl font-bold text-[#FF6B00]">
                  120+
                </h4>

                <p className="mt-2 text-slate-300">
                  Manufacturers
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-6 text-center">
                <h4 className="text-4xl font-bold text-[#0066FF]">
                  Global
                </h4>

                <p className="mt-2 text-slate-300">
                  Network
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-6 text-center">
                <h4 className="text-4xl font-bold text-[#FF6B00]">
                  B2B
                </h4>

                <p className="mt-2 text-slate-300">
                  Focused
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}