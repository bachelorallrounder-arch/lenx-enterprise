import Link from "next/link";

import Container from "@/components/shared/Container";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#071B4D] py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#0066FF] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#FF6B00] blur-3xl" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-5xl text-center">
          <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Need Components Fast?
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white">
            Reliable Electronic Components &
            <span className="block text-[#4D9FFF]">
              PCB Solutions From Global Sources
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Whether you're developing prototypes, scaling
            production, or sourcing hard-to-find components,
            our team helps you secure genuine parts with
            competitive pricing and dependable supply chain
            support.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="
                rounded-xl
                bg-[#0066FF]
                px-8
                py-4
                text-base
                font-semibold
                text-white
                transition
                hover:bg-[#0052CC]
              "
            >
              Request a Quote
            </Link>

            <Link
              href="/products"
              className="
                rounded-xl
                border
                border-white/20
                px-8
                py-4
                text-base
                font-semibold
                text-white
                transition
                hover:bg-white/10
              "
            >
              Explore Products
            </Link>
          </div>

          <div className="mt-12 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-3">
            <div>
              <h3 className="text-3xl font-bold text-white">
                45+
              </h3>

              <p className="mt-2 text-slate-400">
                Product Categories
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                Global
              </h3>

              <p className="mt-2 text-slate-400">
                Supply Network
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                100%
              </h3>

              <p className="mt-2 text-slate-400">
                Genuine Components
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}