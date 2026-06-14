import Link from "next/link";

import Container from "@/components/shared/Container";

export default function PCBCTA() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-[#071B4D]" />

      <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-[#0066FF]/20 blur-3xl" />

      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#FF6B00]/20 blur-3xl" />

      <Container>
        <div className="relative">
          <div className="mx-auto max-w-5xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FFB366]">
              Start Your PCB Project
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight text-white lg:text-6xl">
              Need PCB Manufacturing,
              <span className="block text-[#0066FF]">
                Assembly & Component Sourcing?
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-slate-300">
              From prototype development to production-ready PCB
              solutions, Lenx Tech Enterprise provides fabrication,
              assembly and electronic component sourcing through a
              single trusted partner.
            </p>

            {/* Features */}
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white">
                PCB Fabrication
              </div>

              <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white">
                PCB Assembly
              </div>

              <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white">
                BOM Sourcing
              </div>

              <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white">
                Prototype Validation
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <a
                href="#pcb-quote"
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
                Request PCB Quote
              </a>

              <Link
                href="/contact"
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
                Contact Sales
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="text-4xl font-bold text-[#0066FF]">
                  PCB
                </h3>

                <p className="mt-2 text-slate-400">
                  Manufacturing
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#FF6B00]">
                  PCBA
                </h3>

                <p className="mt-2 text-slate-400">
                  Assembly Services
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#0066FF]">
                  BOM
                </h3>

                <p className="mt-2 text-slate-400">
                  Component Sourcing
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}