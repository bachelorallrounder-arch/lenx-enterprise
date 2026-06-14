import Image from "next/image";

import Container from "@/components/shared/Container";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FBFF] to-white py-24">
      <Container>
        <div className="mx-auto max-w-5xl text-center">

          {/* Logo */}
          <div className="flex justify-center">
            <div className="flex items-center gap-5">
              <Image
                src="/logo.png" // replace with your logo path
                alt="Lenx Tech Enterprise"
                width={80}
                height={80}
                className="rounded-xl"
              />

              <div className="text-left">
                <h1 className="text-3xl font-extrabold text-[#071B4D]">
                  LENX TECH
                </h1>

                <p className="tracking-[6px] text-[#FF6B00]">
                  ENTERPRISE
                </p>
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="mt-10">
            <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0066FF]">
              Contact & RFQ
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-8 text-5xl font-bold leading-tight text-[#071B4D]">
            Let's Discuss Your
            <span className="block text-[#0066FF]">
              Component & PCB Requirements
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Looking for electronic components, PCB solutions,
            prototype validation support, or hard-to-find
            sourcing? Send us your requirements and our team
            will get back to you with the right solution.
          </p>

          {/* Quick Stats */}
          <div className="mt-14 grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-3xl font-bold text-[#0066FF]">
                45+
              </h3>

              <p className="mt-2 text-slate-600">
                Product Categories
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-3xl font-bold text-[#FF6B00]">
                Global
              </h3>

              <p className="mt-2 text-slate-600">
                Supply Network
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-3xl font-bold text-[#0066FF]">
                24h
              </h3>

              <p className="mt-2 text-slate-600">
                Typical Response Time
              </p>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}