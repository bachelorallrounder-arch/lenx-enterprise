import Container from "@/components/shared/Container";

const metrics = [
  {
    value: "10K+",
    label: "Components",
  },
  {
    value: "500+",
    label: "Global Suppliers",
  },
  {
    value: "99%",
    label: "Quality Assurance",
  },
  {
    value: "24/7",
    label: "Technical Support",
  },
];

export default function Stats() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <Container>
        <div className="grid grid-cols-2 gap-y-8 py-10 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`
                text-center
                ${index !== metrics.length - 1 ? "lg:border-r lg:border-slate-200" : ""}
              `}
            >
              <h3 className="text-4xl font-bold text-slate-900 lg:text-5xl">
                {metric.value}
              </h3>

              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-slate-500">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}