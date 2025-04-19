"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const logos = [
  {
    id: 1,
    title: "ZenFlow Logo",
    description: "A calm and minimal logo for a meditation brand.",
    image: "/logos/zenflow.png",
  },
  {
    id: 2,
    title: "PixelNest Studio",
    description: "A creative and modern logo for a graphic design studio.",
    image: "/logos/pixelnest.png",
  },
];

export default function LogoDesignPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen pt-24 px-4 sm:px-6 bg-gradient-to-b from-blue-50 via-white to-white pb-20 font-Poppins">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-12 text-center font-inter">
          Post <br /> <span>Design</span>
        </h1>

        <div className="space-y-8">
          {logos.map((logo, index) => (
            <div
              key={logo.id}
              className="w-full bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Title Row */}
              <div className="flex items-center justify-between px-5 py-4">
                <h2 className="text-xl font-semibold text-gray-900 font-inter">
                  {logo.title}
                </h2>
                <button
                  onClick={() => toggleDropdown(index)}
                  className="text-blue-600 hover:underline"
                >
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    size={24}
                  />
                </button>
              </div>

              {/* Dropdown Content */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 pb-6">
                  <Image
                    src={logo.image}
                    alt={logo.title}
                    width={1080}
                    height={1080}
                    className="rounded-xl w-full h-auto object-cover mb-4"
                  />
                  <p className="text-gray-700 text-sm leading-relaxed font-poppins">
                    {logo.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
