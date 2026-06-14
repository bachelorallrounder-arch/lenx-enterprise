import Link from "next/link";
import Container from "@/components/shared/Container";

interface Manufacturer {
  name: string;
  logo: string;
  href?: string;
}

interface FeaturedManufacturersProps {
  title?: string;
  subtitle?: string;
  manufacturers: Manufacturer[];
}

export default function FeaturedManufacturers({
  title = "Featured Manufacturers",
  subtitle = "Partnering with globally trusted electronic component manufacturers.",
  manufacturers,
}: FeaturedManufacturersProps) {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6B00]">
            Global Brands
          </span>

          <h2 className="mt-2 text-4xl font-bold text-[#071B4D]">
            {title}
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            {subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {manufacturers.map((manufacturer) => (
            <Link
              key={manufacturer.name}
              href={manufacturer.href || "#"}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                transition-all
                hover:-translate-y-2
                hover:border-[#0066FF]
                hover:shadow-xl
              "
            >
              <div className="flex h-28 items-center justify-center">
                <img
                  src={manufacturer.logo}
                  alt={manufacturer.name}
                  className="
                    max-h-16
                    w-auto
                    object-contain
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                />
              </div>

              <div className="mt-6 text-center">
                <h3 className="font-semibold text-[#071B4D]">
                  {manufacturer.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}