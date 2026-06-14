import Link from "next/link";

import Container from "@/components/shared/Container";

interface ServiceCTAProps {
  title: string;
  description: string;
}

export default function ServiceCTA({
  title,
  description,
}: ServiceCTAProps) {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-[#071B4D]" />

      {/* Blue Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#0066FF]/20 blur-3xl" />

      {/* Orange Glow */}
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#FF6B00]/20 blur-3xl" />

      <Container>
        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-white/5
            px-8
            py-16
            backdrop-blur-sm
            lg:px-20
          "
        >
          <div className="mx-auto max-w-4xl text-center">
            <span
              className="
                inline-flex
                rounded-full
                border
                border-white/20
                bg-white/10
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#FFB366]
              "
            >
              Partner With Lenx Tech
            </span>

            <h2 className="mt-6 text-5xl font-bold text-white">
              {title}
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="
                  rounded-xl
                  bg-[#0066FF]
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#0052cc]
                "
              >
                Request Quote
              </Link>

              <Link
                href="/products"
                className="
                  rounded-xl
                  border
                  border-white/20
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:bg-white/10
                "
              >
                Explore Products
              </Link>
            </div>

            {/* Trust Metrics */}
            <div className="mt-14 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-3">
              <div>
                <h3 className="text-3xl font-bold text-[#0066FF]">
                  120+
                </h3>

                <p className="mt-2 text-slate-400">
                  Global Manufacturers
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#FF6B00]">
                  50K+
                </h3>

                <p className="mt-2 text-slate-400">
                  Electronic Components
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#0066FF]">
                  Global
                </h3>

                <p className="mt-2 text-slate-400">
                  Supply Chain Access
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}