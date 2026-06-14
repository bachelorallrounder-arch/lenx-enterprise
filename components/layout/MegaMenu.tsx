"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { productCategories } from "@/data/productCategories";

export default function MegaMenu() {
  return (
    <div
      className="
        invisible absolute left-0 top-full z-50
        mt-3
        translate-y-2
        opacity-0
        transition-all duration-200
        group-hover:visible
        group-hover:translate-y-0
        group-hover:opacity-100
      "
    >
      <div
        className="
          w-80
          overflow-hidden
          rounded-2xl
          border border-slate-200
          bg-white
          shadow-xl
        "
      >
        <div className="py-2">
          {productCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/products/${category.slug}`}
              className="
                flex items-center justify-between
                px-4 py-3
                text-sm font-medium
                text-slate-700
                transition-colors
                hover:bg-slate-50
                hover:text-[#0066FF]
              "
            >
              <span>{category.title}</span>

              <ChevronRight
                size={15}
                className="text-slate-400"
              />
            </Link>
          ))}
        </div>

        <div className="border-t border-slate-100">
          <Link
            href="/products"
            className="
              block
              px-4 py-3
              text-sm
              font-semibold
              text-[#0066FF]
              transition-colors
              hover:bg-blue-50
            "
          >
            View All Products →
          </Link>
        </div>
      </div>
    </div>
  );
}