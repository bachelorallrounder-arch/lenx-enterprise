import Link from "next/link";
import Container from "@/components/shared/Container";

interface ApplicationHeroProps {
  badge: string;
  title: string;
  description: string;
  image: string;
}

export default function ApplicationHero({
  badge,
  title,
  description,
  image,
}: ApplicationHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fbff] via-white to-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,102,255,0.08),transparent_35%)]" />

      <Container>
        <div className="relative grid items-center gap-16 py-14 lg:grid-cols-2 lg:py-8">
          
          {/* Content */}
          <div>
            <span
              className="
                inline-flex
                rounded-full
                bg-blue-50
                px-4
                py-0
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#0066FF]
              "
            >
              {badge}
            </span>

            <h1
              className="
                mt-4
                text-4xl
                font-bold
                leading-tight
                text-[#071B4D]
                lg:text-4xl
              "
            >
              {title}
            </h1>

            <p
              className="
                mt-6
                max-w-2xl
                text-lg
                leading-relaxed
                text-slate-600
              "
            >
              {description}
            </p>

            {/* Quick Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <h3 className="text-3xl font-bold text-[#0066FF]">
                  15K+
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Components
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#FF6B00]">
                  120+
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Manufacturers
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#0066FF]">
                  Global
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Supply Network
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="
                  rounded-xl
                  bg-[#0066FF]
                  px-7
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#0052cc]
                "
              >
                Explore Products
              </Link>

              <Link
                href="/contact"
                className="
                  rounded-xl
                  border
                  border-slate-300
                  px-7
                  py-4
                  font-semibold
                  text-[#071B4D]
                  transition
                  hover:border-[#0066FF]
                  hover:text-[#0066FF]
                "
              >
                Request Quote
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div
              className="
                absolute
                -left-10
                -top-10
                h-40
                w-40
                rounded-full
                bg-blue-100
                blur-3xl
              "
            />

            <div
              className="
                absolute
                -bottom-10
                -right-10
                h-40
                w-40
                rounded-full
                bg-orange-100
                blur-3xl
              "
            />

            <div
              className="
                overflow-hidden
                rounded-[32px]
                border
                border-slate-200
                bg-white
                shadow-2xl
              "
            >
              <img
                src={image}
                alt={title}
                className="h-[450px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}