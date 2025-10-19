"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowLeft } from "lucide-react";

const logos = [
  {
    id: 1,
    title: "Xeon Visuals",
    description:
      "The Xeon Visuals logo embodies cinematic storytelling with a bold, modern aesthetic. Its sleek typography and subtle film-inspired elements reflect creativity, precision, and passion. The red and black palette symbolizes energy and professionalism perfectly capturing a brand built to deliver powerful visual stories with lasting impact.",
    image: "/combo.jpg",
  },
  {
    id: 2,
    title: "Lifie Routers",
    description:
      "The Lifie Routers logo blends modern minimalism with tech-driven energy. Using a dynamic color palette of green, black, and white, it symbolizes speed, connectivity, and eco-conscious innovation. The clean typography paired with subtle wireless or signal-inspired elements reflects the brand’s focus on delivering fast, reliable, and smart internet solutions. This design captures the essence of a next-generation router brand built for connected lifestyles.",
    image: "/Logo.jpg",
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
        {/* 🔙 Back to Projects Button */}
        <div className="flex md:justify-start mb-8 justify-center">
          <Link
            href="/Pages/Projects"
            className="flex items-center gap-2 text-blue-700 font-medium border border-blue-700 rounded-full px-4 py-2 transition-all duration-300 hover:bg-blue-700 hover:text-white"
          >
            <ArrowLeft size={18} />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Page Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-12 text-center font-inter">
          Logo <br /><span>Design</span>
        </h1>

        {/* Logo List */}
        <div className="space-y-3">
          {logos.map((logo, index) => (
            <div
              key={logo.id}
              className="w-full bg-transparent border-black border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
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
                  openIndex === index
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
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
