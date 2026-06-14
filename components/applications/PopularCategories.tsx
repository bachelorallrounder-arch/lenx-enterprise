import Link from "next/link";
import Container from "@/components/shared/Container";

interface Category {
  title: string;
  image: string;
  products: string;
  href: string;
}

interface PopularCategoriesProps {
  title?: string;
  subtitle?: string;
  categories: Category[];
}

export default function PopularCategories({
  title = "Popular Categories",
  subtitle = "Explore our most in-demand electronic component categories.",
  categories,
}: PopularCategoriesProps) {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6B00]">
            Product Categories
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#071B4D]">
            {title}
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            {subtitle}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                transition-all
                hover:-translate-y-2
                hover:border-[#0066FF]
                hover:shadow-xl
              "
            >
              <div className="p-7">
                <h3 className="text-2xl font-semibold text-[#071B4D]">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm text-[#0066FF] font-medium">
                  {category.products}
                </p>

                <span className="mt-5 inline-flex font-medium text-[#FF6B00]">
                  Explore Category →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}