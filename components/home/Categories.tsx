import Container from "@/components/shared/Container";
import { ArrowRight } from "lucide-react";
import { homeCategories } from "@/data/homeCategories";

export default function Categories() {
  const firstRow = homeCategories.slice(0, Math.ceil(homeCategories.length / 2));
  const secondRow = homeCategories.slice(Math.ceil(homeCategories.length / 2));

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f8fbff] to-white" />

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-100/40 blur-3xl" />

      <Container className="relative">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0066FF]">
            Product Portfolio
          </span>

          <h2 className="mt-4 text-5xl font-bold leading-tight text-[#071B4D]">
            Comprehensive Electronic Components
            <span className="block text-[#0066FF]">
              for Every Application
            </span>
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Explore our extensive range of electronic components,
            semiconductors, sensors, integrated circuits,
            interconnect solutions and industrial electronics.
          </p>
        </div>

        {/* First Row */}
        <div className="mt-18 overflow-hidden">
          <div className="flex w-max gap-8 animate-scroll-left">
            {[...firstRow, ...firstRow].map((category, index) => (
              <CategoryCard
                key={`${category.name}-${index}`}
                category={category}
              />
            ))}
          </div>
        </div>

        {/* Second Row */}
        <div className="mt-6 overflow-hidden">
          <div className="flex w-max gap-8 animate-scroll-right">
            {[...secondRow, ...secondRow].map((category, index) => (
              <CategoryCard
                key={`${category.name}-${index}`}
                category={category}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function CategoryCard({
  category,
}: {
  category: {
    name: string;
    image: string;
    products: string;
  };
}) {
  return (
    <div
      className="
        group
        relative
        h-[420px]
        w-[320px]
        overflow-hidden
        rounded-[28px]
        border
        border-slate-200
        bg-white
        shadow-lg
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#0066FF]
        hover:shadow-2xl
      "
    >
      {/* Image */}
      <div className="relative h-[260px] overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-sm font-medium text-[#FF6B00]">
          {category.products}
        </p>

        <h3 className="mt-2 text-2xl font-bold text-[#071B4D]">
          {category.name}
        </h3>

        <div className="mt-4 flex items-center gap-2 text-[#0066FF]">
          <span className="font-medium">
            Explore Category
          </span>

          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </div>
      </div>

      {/* Hover Accent */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-1
          w-0
          bg-gradient-to-r
          from-[#0066FF]
          to-[#FF6B00]
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </div>
  );
}