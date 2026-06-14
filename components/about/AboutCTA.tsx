import Link from "next/link";

import Container from "@/components/shared/Container";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[#071B4D]" />

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#0066FF]/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#FF6B00]/20 blur-3xl" />

      <Container>
        <div className="relative text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FFB366]">
            Partner With Lenx Tech
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Let's Build Stronger Supply Chains Together
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            Whether you need electronic components, sourcing support,
            engineering alternatives or supply chain expertise,
            Lenx Tech Enterprise is ready to help your business move forward.
          </p>

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
        </div>
      </Container>
    </section>
  );
}