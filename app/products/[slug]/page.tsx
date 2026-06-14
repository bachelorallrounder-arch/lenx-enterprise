import Image from "next/image";
import { notFound } from "next/navigation";

import Container from "@/components/shared/Container";
import { productCatalog } from "@/data/productCatalog";
import { productCategories } from "@/data/productCategories";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({
  params,
}: Props) {
  const { slug } = await params;

  const catalogCategory = productCatalog.find(
    (item) => item.slug === slug
  );

  if (!catalogCategory) {
    notFound();
  }

  const displayCategory = productCategories.find(
    (item) => item.slug === slug
  );

  const totalProducts = catalogCategory.subCategories.reduce(
    (sum, item) => sum + item.count,
    0
  );

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#F8FBFF] to-white py-20">
        <Container>
          <div
            className={`grid items-center gap-12 ${
              displayCategory
                ? "lg:grid-cols-2"
                : "lg:grid-cols-1"
            }`}
          >
            <div>
              <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0066FF]">
                Product Category
              </span>

              <h1 className="mt-6 text-5xl font-bold text-[#071B4D]">
                {catalogCategory.category}
              </h1>

              <p className="mt-6 max-w-3xl text-lg text-slate-600">
                Explore our complete range of{" "}
                {catalogCategory.category.toLowerCase()} and
                related electronic components sourced from
                global manufacturers.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
                <div>
                  <h3 className="text-3xl font-bold text-[#0066FF]">
                    {catalogCategory.subCategories.length}
                  </h3>

                  <p className="mt-1 text-sm text-slate-600">
                    Product Groups
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-[#FF6B00]">
                    {totalProducts.toLocaleString()}
                  </h3>

                  <p className="mt-1 text-sm text-slate-600">
                    Products
                  </p>
                </div>

                {displayCategory?.manufacturersCount && (
                  <div>
                    <h3 className="text-3xl font-bold text-[#0066FF]">
                      {displayCategory.manufacturersCount}
                    </h3>

                    <p className="mt-1 text-sm text-slate-600">
                      Manufacturers
                    </p>
                  </div>
                )}

                {displayCategory?.productsCount && (
                  <div>
                    <h3 className="text-3xl font-bold text-[#FF6B00]">
                      {displayCategory.productsCount.toLocaleString()}
                    </h3>

                    <p className="mt-1 text-sm text-slate-600">
                      Featured Products
                    </p>
                  </div>
                )}
              </div>
            </div>

            {displayCategory?.image && (
              <div>
                <Image
                  src={displayCategory.image}
                  alt={displayCategory.title}
                  width={700}
                  height={500}
                  className="w-full rounded-3xl border border-slate-200 bg-white p-4 shadow-lg"
                />
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Manufacturers */}
      {displayCategory?.manufacturers?.length ? (
  <section className="bg-slate-50 py-20">
    <Container>
      <h2 className="mb-10 text-4xl font-bold text-[#071B4D]">
        Featured Manufacturers
      </h2>

      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
        {displayCategory.manufacturers.map(
          (manufacturer, index) => (
            <div
              key={index}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                text-center
                shadow-sm
                transition
                hover:border-[#0066FF]
                hover:shadow-lg
              "
            >
              {typeof manufacturer === "string" ? (
                <span className="font-semibold text-slate-800">
                  {manufacturer}
                </span>
              ) : (
                <div className="flex flex-col items-center gap-3">
                  <Image
                    src={manufacturer.logo}
                    alt={manufacturer.name}
                    width={120}
                    height={60}
                    className="h-10 w-auto object-contain"
                  />

                  <span className="font-semibold text-slate-800">
                    {manufacturer.name}
                  </span>
                </div>
              )}
            </div>
          )
        )}
      </div>
    </Container>
  </section>
) : null}

      {/* Product Groups */}
      <section className="py-20">
        <Container>
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-[#071B4D]">
              Product Groups
            </h2>

            <p className="mt-3 text-slate-600">
              Browse available product groups within{" "}
              {catalogCategory.category}.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="grid grid-cols-12 bg-slate-50 px-6 py-5 font-semibold text-slate-700">
              <div className="col-span-8">
                Product Group
              </div>

              <div className="col-span-4 text-right">
                Available Products
              </div>
            </div>

            {catalogCategory.subCategories.map(
              (subCategory, index) => (
                <div
                  key={subCategory.name}
                  className={`grid grid-cols-12 px-6 py-5 transition hover:bg-slate-50 ${
                    index !==
                    catalogCategory.subCategories.length -
                      1
                      ? "border-b border-slate-100"
                      : ""
                  }`}
                >
                  <div className="col-span-8 font-medium text-slate-800">
                    {subCategory.name}
                  </div>

                  <div className="col-span-4 text-right font-semibold text-[#0066FF]">
                    {subCategory.count.toLocaleString()}
                  </div>
                </div>
              )
            )}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#071B4D] py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white">
              Looking For Specific Components?
            </h2>

            <p className="mt-4 text-lg text-slate-300">
              Contact our sourcing team for pricing,
              availability, lead times and alternative
              component recommendations.
            </p>

            <a
              href="/contact"
              className="
                mt-8
                inline-flex
                rounded-xl
                bg-[#0066FF]
                px-8
                py-4
                font-semibold
                text-white
                transition
                hover:bg-[#0052CC]
              "
            >
              Request Quote
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}