import Link from "next/link";

import Container from "@/components/shared/Container";
import { productCatalog } from "@/data/productCatalog";

export default function ProductsPage() {
  return (
    <main className="bg-slate-50 py-20">
      <Container>
        {/* Hero */}
        <div className="mb-16 text-center">
          <span
            className="
              inline-flex
              rounded-full
              bg-blue-50
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#0066FF]
            "
          >
            Product Portfolio
          </span>

          <h1 className="mt-6 text-5xl font-bold text-[#071B4D]">
            Electronic Components &
            <span className="block text-[#0066FF]">
              Product Categories
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-4xl text-lg text-slate-600">
            Explore our extensive portfolio of electronic components,
            semiconductors, sensors, connectors, power solutions,
            integrated circuits and industrial automation products.
          </p>
        </div>

        {/* Categories */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {productCatalog.map((category) => {
            const subCategories = category.subCategories || [];

            const totalItems = subCategories.reduce(
              (sum, item) => sum + (item.count || 0),
              0
            );

            const topSubCategories = [...subCategories]
              .sort((a, b) => b.count - a.count)
              .slice(0, 4);

            return (
              <Link
                key={category.slug}
                href={`/products/${category.slug}`}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#0066FF]
                  hover:shadow-lg
                "
              >
                <div className="flex items-start justify-between">
                  <h2
                    className="
                      text-xl
                      font-bold
                      text-[#071B4D]
                      transition
                      group-hover:text-[#0066FF]
                    "
                  >
                    {category.category}
                  </h2>

                  <span
                    className="
                      rounded-full
                      bg-blue-50
                      px-3
                      py-1
                      text-xs
                      font-semibold
                      text-[#0066FF]
                    "
                  >
                    {subCategories.length}
                  </span>
                </div>

                {/* NEW: total items */}
                <p className="mt-2 text-sm font-medium text-slate-600">
                  {totalItems.toLocaleString()} total items
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {subCategories.length} product groups
                </p>

                {/* Top categories */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {topSubCategories.map((subCategory) => (
                    <span
                      key={subCategory.name}
                      className="
                        rounded-full
                        bg-slate-100
                        px-3
                        py-1
                        text-xs
                        text-slate-600
                      "
                    >
                      {subCategory.name}
                    </span>
                  ))}
                </div>

                <div className="mt-8 font-semibold text-[#0066FF]">
                  View Category →
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </main>
  );
}