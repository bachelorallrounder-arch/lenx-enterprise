import Container from "@/components/shared/Container";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fbff] via-white to-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,102,255,0.08),transparent_35%)]" />

      <Container>
        <div className="py-16 lg:py-16">
          <div className="mx-auto max-w-5xl text-center">
            <span className="rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#0066FF]">
              About Lenx Tech
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-[#071B4D] lg:text-5xl">
              Powering Innovation Through
              <span className="block text-[#0066FF]">
                Global Electronics Distribution
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-slate-600">
              Lenx Tech Enterprise connects businesses with trusted
              electronic components, semiconductor solutions and
              global supply chain expertise, helping organizations
              accelerate innovation with confidence.
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-4">
              <div>
                <h3 className="text-4xl font-bold text-[#0066FF]">
                  50K+
                </h3>
                <p className="mt-2 text-slate-500">
                  Components
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#FF6B00]">
                  120+
                </h3>
                <p className="mt-2 text-slate-500">
                  Manufacturers
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#0066FF]">
                  Global
                </h3>
                <p className="mt-2 text-slate-500">
                  Sourcing Network
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#FF6B00]">
                  B2B
                </h3>
                <p className="mt-2 text-slate-500">
                  Distribution Focus
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}