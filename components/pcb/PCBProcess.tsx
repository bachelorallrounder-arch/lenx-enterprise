import Container from "@/components/shared/Container";

const steps = [
  {
    number: "01",
    title: "Submit Requirements",
    description:
      "Share your PCB specifications, Gerber files, BOM and project requirements through our quote request form.",
  },
  {
    number: "02",
    title: "Engineering Review",
    description:
      "Our team reviews your design, manufacturing requirements and component availability.",
  },
  {
    number: "03",
    title: "Quotation & Sourcing",
    description:
      "Receive a customized quotation including PCB fabrication, assembly and BOM sourcing options.",
  },
  {
    number: "04",
    title: "Manufacturing & Delivery",
    description:
      "Production begins and your completed PCB solution is delivered according to project timelines.",
  },
];

export default function PCBProcess() {
  return (
    <section className="bg-white py-24">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6B00]">
            Our Process
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#071B4D]">
            Simple & Efficient
            <span className="block text-[#0066FF]">
              PCB Procurement Workflow
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            From initial requirements to final delivery, we simplify
            PCB manufacturing, assembly and component sourcing through
            a streamlined process.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mt-20 grid gap-8 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="
                relative
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
              {/* Connector Line */}
              {index !== steps.length - 1 && (
                <div
                  className="
                    absolute
                    top-16
                    left-full
                    hidden
                    h-[2px]
                    w-8
                    bg-slate-300
                    xl:block
                  "
                />
              )}

              {/* Step Number */}
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#EEF5FF]
                  text-2xl
                  font-bold
                  text-[#0066FF]
                "
              >
                {step.number}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#071B4D]">
                {step.title}
              </h3>

              <p className="mt-4 leading-relaxed text-slate-600">
                {step.description}
              </p>

              <div className="mt-6 h-1 w-12 rounded-full bg-[#FF6B00]" />
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div
          className="
            mt-20
            rounded-[40px]
            bg-[#071B4D]
            p-10
            text-center
            lg:p-14
          "
        >
          <h3 className="text-4xl font-bold text-white">
            End-to-End PCB Solutions
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-300">
            Whether you need prototype boards, production-ready PCB
            assembly or complete BOM sourcing, Lenx Tech Enterprise
            provides a single point of contact for your electronics
            manufacturing requirements.
          </p>
        </div>
      </Container>
    </section>
  );
}