"use client";

import Link from "next/link";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { categories } from "@/lib/categories";
import { TiArrowRight } from "react-icons/ti";


// ✅ Step 1: Move useSearchParams into a child component
function CategoryContent() {
  const searchParams = useSearchParams();
  const typeFromQuery = searchParams?.get("type") ?? null;
  const [selectedType, setSelectedType] = useState<string | null>(typeFromQuery);

  const filteredCategories =
    selectedType === null
      ? categories
      : categories.filter((cat) => cat.type === selectedType);

  return (
    <div className="flex flex-col lg:flex-row gap-10">
      {/* Sidebar Filters */}
      <div className="lg:w-1/4 w-full flex flex-col gap-3 font-Noto">
        <h3 className="text-xl font-semibold mb-2">Filter by Category</h3>
        <button
          onClick={() => setSelectedType(null)}
          className={`text-left py-2 px-3 rounded-md transition-all ${
            selectedType === null
              ? "bg-blue-700 text-white"
              : "hover:bg-blue-100"
          }`}
        >
          All Projects
        </button>
        {["ux-ui-design", "graphic-design", "web-dev"].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`text-left py-2 px-3 rounded-md capitalize transition-all ${
              selectedType === type
                ? "bg-blue-700 text-white"
                : "hover:bg-blue-100"
            }`}
          >
            {type.replace("-", " ")}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredCategories.map((category, index) => (
          <div
            key={index}
            className="relative group transform transition-transform duration-300 cursor-pointer"
          >
            <div className="absolute top-0 left-0 translate-x-1.5 translate-y-1.5 h-full w-full rounded-2xl bg-black z-0"></div>

            <div className="relative z-10 h-full w-full rounded-2xl border-2 border-black bg-white p-6 flex flex-col justify-center items-center text-center">
              <div className="flex flex-col items-center gap-2">
                {category.icon}
                <h1 className="font-Noto font-light text-lg flex flex-col justify-center">
                  {category.title}
                  <span className="font-IBM font-light text-blue-700 text-lg">
                    Project
                  </span>
                </h1>

                <Link href={`${category.link}`} className="mt-3">
                  <h2 className="border-2 flex items-center justify-center border-blue-700 text-blue-700 px-4 py-1 rounded-md font-Noto font-light transition hover:bg-blue-700 hover:text-white">
                    View <TiArrowRight size={20} className="ml-1" />
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


// ✅ Step 2: Wrap that component in Suspense (same file)
export default function CategorySection() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-12">
        My{" "}
        <span className="font-IBM font-light text-blue-700">Projects</span>
      </h2>

      {/* Suspense wrapper for hydration safety */}
      <Suspense fallback={<div className="text-center py-20">Loading Projects...</div>}>
        <CategoryContent />
      </Suspense>
    </div>
  );
}
