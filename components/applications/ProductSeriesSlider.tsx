"use client";

import Link from "next/link";

interface Product {
  title: string;
  image: string;
  products: string;
  href: string;
}

interface ProductSeriesSliderProps {
  title: string;
  subtitle: string;
  products: Product[];
}

export default function ProductSeriesSlider({
  title,
  subtitle,
  products,
}: ProductSeriesSliderProps) {
  const duplicatedProducts = [...products, ...products];

  return (
    <section className="overflow-hidden py-24 bg-white">
      <div className="mx-auto mb-14 max-w-4xl text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6B00]">
          Product Portfolio
        </span>

        <h2 className="mt-4 text-5xl font-bold text-[#071B4D]">
          {title}
        </h2>

        <p className="mt-5 text-lg text-slate-600">
          {subtitle}
        </p>
      </div>

      <div className="relative">
        <div className="flex animate-[scroll_35s_linear_infinite] gap-6">
          {duplicatedProducts.map((product, index) => (
            <Link
              key={`${product.title}-${index}`}
              href={product.href}
              className="
                group
                min-w-[320px]
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                shadow-sm
                transition-all
                hover:-translate-y-2
                hover:border-[#0066FF]
                hover:shadow-xl
              "
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="
                    h-56
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#071B4D]">
                  {product.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {product.products}
                </p>

                <span className="mt-5 inline-flex font-medium text-[#0066FF]">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}