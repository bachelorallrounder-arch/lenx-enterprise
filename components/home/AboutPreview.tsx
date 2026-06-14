import Link from "next/link";
import Container from "@/components/shared/Container";

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden py-18">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-50" />

      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-100/30 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-18 lg:grid-cols-2">
          
          {/* Left Visual */}
          <div className="relative">
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
              <img
                src="/about-electronics.png"
                alt="Lenx Tech Enterprise"
                className="h-[450px] w-full object-cover"
              />
            </div>

            {/* Floating Card 1 */}
            <div className="absolute -left-6 bottom-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <h4 className="text-3xl font-bold text-[#0066FF]">
                10K+
              </h4>

              <p className="mt-1 text-sm text-slate-500">
                Components Portfolio
              </p>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute -right-6 top-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <h4 className="text-3xl font-bold text-[#FF6B00]">
                99%
              </h4>

              <p className="mt-1 text-sm text-slate-500">
                Quality Commitment
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0066FF]">
              Who We Are
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
              Engineering Reliable Supply Chains for
              <span className="block text-[#0066FF]">
                Electronic Innovation
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Lenx Tech Enterprise is a trusted electronics and
              component distribution partner serving industries
              that demand quality, precision, and reliability.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We specialize in sourcing and supplying electronic
              components, semiconductors, sensors, embedded
              solutions, interconnect products, and industrial
              electronics from globally recognized manufacturers.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Through strategic sourcing, technical expertise,
              and a customer-first approach, we help businesses
              accelerate development cycles and maintain a
              dependable supply chain.
            </p>

            {/* Features */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h4 className="font-semibold text-slate-900">
                  Global Sourcing
                </h4>

                <p className="mt-2 text-sm text-slate-600">
                  Access to trusted manufacturers and suppliers.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h4 className="font-semibold text-slate-900">
                  Quality Assurance
                </h4>

                <p className="mt-2 text-sm text-slate-600">
                  Reliable and genuine electronic components.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h4 className="font-semibold text-slate-900">
                  Technical Expertise
                </h4>

                <p className="mt-2 text-sm text-slate-600">
                  Support for industrial and engineering projects.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h4 className="font-semibold text-slate-900">
                  Supply Reliability
                </h4>

                <p className="mt-2 text-sm text-slate-600">
                  Consistent sourcing and procurement solutions.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="/about"
                className="
                  inline-flex
                  items-center
                  rounded-full
                  bg-[#0066FF]
                  px-8
                  py-4
                  font-medium
                  text-white
                  transition
                  hover:bg-[#0052cc]
                "
              >
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}