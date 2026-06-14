import Container from "@/components/shared/Container";

export default function WhoWeAre() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          
          {/* Left Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6B00]">
              Who We Are
            </span>

            <h2 className="mt-4 text-5xl font-bold leading-tight text-[#071B4D]">
              Your Trusted Partner In
              <span className="block text-[#0066FF]">
                Electronics Distribution
              </span>
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-slate-600">
              Lenx Tech Enterprise is a specialized electronics and
              semiconductor distribution company committed to helping
              businesses access reliable components, global sourcing
              opportunities and supply chain solutions.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              We support manufacturers, OEMs, EMS providers,
              engineering teams and procurement professionals by
              connecting them with trusted manufacturers and
              high-quality electronic components across a wide range
              of industries.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Through our global supplier network and sourcing
              expertise, we help organizations reduce procurement
              challenges, improve component availability and maintain
              production continuity.
            </p>
          </div>

          {/* Right Side Cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            
            <div
              className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
                transition
                hover:-translate-y-2
                hover:border-[#0066FF]
                hover:shadow-xl
              "
            >
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#EEF5FF]
                  text-3xl
                "
              >
                ⚡
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-[#071B4D]">
                Electronic Components
              </h3>

              <p className="mt-4 text-slate-600">
                Access a broad range of passive, active and
                electromechanical components.
              </p>
            </div>

            <div
              className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
                transition
                hover:-translate-y-2
                hover:border-[#0066FF]
                hover:shadow-xl
              "
            >
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#FFF3E8]
                  text-3xl
                "
              >
                🌍
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-[#071B4D]">
                Global Sourcing
              </h3>

              <p className="mt-4 text-slate-600">
                Worldwide access to suppliers, manufacturers and
                strategic inventory.
              </p>
            </div>

            <div
              className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
                transition
                hover:-translate-y-2
                hover:border-[#0066FF]
                hover:shadow-xl
              "
            >
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#EEF5FF]
                  text-3xl
                "
              >
                🔍
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-[#071B4D]">
                Supply Chain Solutions
              </h3>

              <p className="mt-4 text-slate-600">
                Procurement support, inventory access and sourcing
                strategies tailored to your business.
              </p>
            </div>

            <div
              className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
                transition
                hover:-translate-y-2
                hover:border-[#0066FF]
                hover:shadow-xl
              "
            >
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#FFF3E8]
                  text-3xl
                "
              >
                🛡️
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-[#071B4D]">
                Quality Assurance
              </h3>

              <p className="mt-4 text-slate-600">
                Supplier verification, risk control and procurement
                confidence.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}