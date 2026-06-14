import Container from "@/components/shared/Container";

export default function GlobalNetwork() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6B00]">
              Global Network
            </span>

            <h2 className="mt-4 text-5xl font-bold text-[#071B4D]">
              Connected To A
              <span className="block text-[#0066FF]">
                Worldwide Supply Chain
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Lenx Tech Enterprise works with trusted manufacturers,
              distributors and sourcing partners worldwide to provide
              customers with broader inventory access and reliable
              procurement opportunities.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Our global sourcing approach helps businesses improve
              availability, reduce lead times and secure critical
              components across multiple industries.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-4xl font-bold text-[#0066FF]">
                  120+
                </h3>

                <p className="mt-2 text-slate-500">
                  Manufacturers
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#FF6B00]">
                  Global
                </h3>

                <p className="mt-2 text-slate-500">
                  Sourcing Reach
                </p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="rounded-[40px] bg-[#071B4D] p-10 text-white">
            <h3 className="text-3xl font-bold">
              Supply Chain Advantages
            </h3>

            <div className="mt-8 space-y-6">
              {[
                "Worldwide Supplier Access",
                "Broader Inventory Availability",
                "Strategic Procurement Support",
                "Reduced Supply Risk",
                "Improved Component Availability",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <div className="h-3 w-3 rounded-full bg-[#FF6B00]" />

                  <span className="text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}