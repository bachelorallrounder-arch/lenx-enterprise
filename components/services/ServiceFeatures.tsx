import Container from "@/components/shared/Container";

interface Feature {
  title: string;
  description: string;
}

interface ServiceFeaturesProps {
  badge?: string;
  title: string;
  subtitle: string;
  features: Feature[];
}

export default function ServiceFeatures({
  badge = "Core Capabilities",
  title,
  subtitle,
  features,
}: ServiceFeaturesProps) {
  return (
    <section className="bg-white py-8 lg:py-8">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full bg-[#EEF5FF] px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-[#0066FF]">
            {badge}
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-[#071B4D] md:text-5xl lg:text-4xl">
            {title}
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-slate-600 md:text-xl">
            {subtitle}
          </p>
        </div>

        {/* Features */}
        <div className="mx-auto mt-8 max-w-5xl">
          <div className="divide-y divide-slate-200">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="grid gap-6 py-10 md:grid-cols-[100px_1fr] md:gap-10 lg:py-8"
              >
                {/* Number */}
                <div className="flex items-start">
                  <span className="text-5xl font-bold leading-none text-[#0066FF]/20 md:text-6xl">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div className="inline-flex items-center rounded-full bg-[#EEF5FF] px-4 py-2 text-sm font-medium text-[#0066FF]">
                    Feature {index + 1}
                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-[#071B4D] md:text-3xl">
                    {feature.title}
                  </h3>

                  <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
                    {feature.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2">
                    <div className="h-1 w-12 rounded-full bg-[#FF6B00]" />
                    <div className="h-1 w-4 rounded-full bg-[#0066FF]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}