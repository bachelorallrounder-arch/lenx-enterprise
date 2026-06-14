import Link from "next/link";
import Container from "@/components/shared/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-orange-100/30 blur-3xl" />
      </div>

      <Container>
        <div className="grid min-h-[85vh] items-center gap-16 py-18 lg:grid-cols-2">
          
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#0066FF] uppercase">
                Global Electronics Distribution Partner
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Delivering Advanced
              <span className="block text-[#0066FF]">
                Electronic Components
              </span>
              for Tomorrow's Technologies
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              Lenx Tech Enterprise provides high-quality electronic
              components, semiconductors, interconnect solutions,
              sensors, embedded systems, and industrial electronics
              backed by trusted sourcing and technical expertise.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="rounded-full bg-[#0066FF] px-8 py-4 font-medium text-white transition hover:bg-[#0052cc]"
              >
                Explore Products
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-slate-300 bg-white px-8 py-4 font-medium text-slate-700 transition hover:border-[#0066FF] hover:text-[#0066FF]"
              >
                Request Quote
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <p className="text-sm text-slate-500">
                  Genuine Components
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Global Sourcing Network
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Technical Expertise
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-2xl">
              
              {/* Main Image */}
              <div className="overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src="/hero-electronics.jpg"
                  alt="Electronic Components"
                  className="h-[350px] w-full object-cover"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
                <p className="text-3xl font-bold text-[#0066FF]">
                  10K+
                </p>
                <p className="text-sm text-slate-600">
                  Electronic Components
                </p>
              </div>

              {/* Floating Card */}
              <div className="absolute -right-6 top-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
                <p className="text-3xl font-bold text-[#FF6B00]">
                  99%
                </p>
                <p className="text-sm text-slate-600">
                  Quality Assurance
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}