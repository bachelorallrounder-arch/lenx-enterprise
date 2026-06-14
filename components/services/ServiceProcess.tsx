import Container from "@/components/shared/Container";

interface ProcessStep {
  title: string;
  description: string;
}

interface ServiceProcessProps {
  badge?: string;
  title: string;
  subtitle: string;
  steps: ProcessStep[];
}

export default function ServiceProcess({
  badge = "Our Process",
  title,
  subtitle,
  steps,
}: ServiceProcessProps) {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6B00]">
            {badge}
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#071B4D]">
            {title}
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            {subtitle}
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative mt-20">
          {/* Desktop Line */}
          <div className="absolute left-0 top-10 hidden h-[2px] w-full bg-slate-200 lg:block" />

          <div className="grid gap-10 lg:grid-cols-5">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative text-center"
              >
                {/* Step Number */}
                <div
                  className="
                    relative
                    mx-auto
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0066FF]
                    text-2xl
                    font-bold
                    text-white
                    shadow-lg
                  "
                >
                  {index + 1}
                </div>

                {/* Content */}
                <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-[#071B4D]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}