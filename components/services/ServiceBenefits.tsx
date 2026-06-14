import { CheckCircle2 } from "lucide-react";

import Container from "@/components/shared/Container";

interface ServiceBenefitsProps {
  badge?: string;
  title: string;
  subtitle: string;
  benefits: string[];
}

export default function ServiceBenefits({
  badge = "Benefits",
  title,
  subtitle,
  benefits,
}: ServiceBenefitsProps) {
  return (
    <section className="bg-slate-50 py-12">
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

        {/* Benefits Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="
                group
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
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
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#EEF5FF]
                  text-[#0066FF]
                "
              >
                <CheckCircle2 size={28} />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#071B4D]">
                {benefit}
              </h3>

              <div
                className="
                  mt-4
                  h-1
                  w-12
                  rounded-full
                  bg-[#FF6B00]
                "
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}