import Container from "@/components/shared/Container";

const values = [
  {
    title: "Integrity",
    description:
      "Building trust through transparency, honesty and accountability.",
  },
  {
    title: "Reliability",
    description:
      "Delivering dependable sourcing solutions and customer support.",
  },
  {
    title: "Quality",
    description:
      "Maintaining high standards across suppliers and procurement processes.",
  },
  {
    title: "Partnership",
    description:
      "Creating long-term relationships that support customer success.",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6B00]">
            Our Values
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#071B4D]">
            Principles That Guide
            <span className="block text-[#0066FF]">
              Every Partnership
            </span>
          </h2>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="
                rounded-[32px]
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
                transition-all
                hover:-translate-y-2
                hover:border-[#0066FF]
                hover:shadow-xl
              "
            >
              <h3 className="text-2xl font-bold text-[#071B4D]">
                {value.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">
                {value.description}
              </p>

              <div className="mt-6 h-1 w-12 rounded-full bg-[#FF6B00]" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}