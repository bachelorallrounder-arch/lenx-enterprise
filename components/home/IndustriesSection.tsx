import Link from "next/link";
import Container from "@/components/shared/Container";
import {
  HeartPulse,
  Car,
  ArrowRight,
} from "lucide-react";

export default function IndustriesSection() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="text-center">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0066FF]">
            Industries We Serve
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#071B4D]">
            Supporting Innovation Across
            <span className="block text-[#0066FF]">
              Critical Industries
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            We help OEMs, product developers, engineering
            teams and manufacturers source reliable electronic
            components for mission-critical applications.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Medical */}

          <Link
            href="/applications/medical-healthcare"
            className="
              group
              rounded-[32px]
              border
              border-slate-200
              bg-white
              p-10
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-[#0066FF]
              hover:shadow-xl
            "
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
              <HeartPulse
                size={32}
                className="text-[#0066FF]"
              />
            </div>

            <h3 className="mt-8 text-3xl font-bold text-[#071B4D]">
              Medical & Healthcare
            </h3>

            <p className="mt-4 text-slate-600">
              Reliable components for diagnostic equipment,
              patient monitoring systems, imaging devices,
              wearable healthcare solutions and medical-grade
              electronics.
            </p>

            <div className="mt-8 flex items-center gap-2 font-semibold text-[#0066FF]">
              Explore Industry
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </div>
          </Link>

          {/* Automotive */}

          <Link
            href="/applications/automotive-electronics"
            className="
              group
              rounded-[32px]
              border
              border-slate-200
              bg-white
              p-10
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-[#0066FF]
              hover:shadow-xl
            "
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50">
              <Car
                size={32}
                className="text-[#FF6B00]"
              />
            </div>

            <h3 className="mt-8 text-3xl font-bold text-[#071B4D]">
              Automotive Electronics
            </h3>

            <p className="mt-4 text-slate-600">
              High-performance semiconductor and embedded
              solutions for ADAS systems, EV platforms,
              infotainment, telematics and vehicle control
              applications.
            </p>

            <div className="mt-8 flex items-center gap-2 font-semibold text-[#0066FF]">
              Explore Industry
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
}