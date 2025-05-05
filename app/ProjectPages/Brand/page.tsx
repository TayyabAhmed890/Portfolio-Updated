"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const logos = [
  {
    id: 1,
    title: "Xeon Visuals",
    description: "Crafting Cinematic Stories Through Expert Filmmaking and Precision Video Editing.",
    images: [
      "/brand/1.jpg",
      "/brand/2.jpg",
      "/brand/three.jpg",
      "/brand/four.jpg",
      "/brand/five.jpg",
      "/brand/6.jpg",
      "/brand/pst1.jpg",
      "/brand/post.jpeg",
      "/brand/7.jpg",
      
    ],
  },
  // {
  //   id: 2,
  //   title: "PixelNest Studio",
  //   description: "A creative and modern logo for a graphic design studio.",
  //   images: [
  //     "/logos/pixelnest-1.png",
  //     "/logos/pixelnest-2.png",
  //     "/logos/pixelnest-3.png",
  //     "/logos/pixelnest-4.png",
  //     "/logos/pixelnest-5.png",
  //   ],
  // },
];

export default function LogoDesignPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen pt-24 px-4 sm:px-6 bg-gradient-to-b from-blue-50 via-white to-white pb-20 font-Poppins">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-12 text-center font-inter">
          Brand Identity<br /><span>Designs</span>
        </h1>

        <div className="space-y-8">
          {logos.map((logo, index) => (
            <div
              key={logo.id}
              className="w-full bg-white border border-gray-200 rounded-2xl shadow-md transition-all duration-300"
            >
              {/* Title Row with Thumbnail */}
              <div
                className="flex items-center justify-between px-5 py-4 cursor-pointer"
                onClick={() => toggleDropdown(index)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 relative rounded-xl overflow-hidden border border-gray-300 shadow-sm">
                    <Image
                      src={logo.images[0]}
                      alt={`${logo.title} thumbnail`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 font-inter">
                    {logo.title}
                  </h2>
                </div>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={24}
                />
              </div>

              {/* Dropdown Content */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-[9999px] opacity-100 py-4" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 pb-6">
                  <p className="text-gray-700 text-sm mb-4 font-poppins">
                    {logo.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {logo.images.map((imgSrc, i) => (
                      <div
                        key={i}
                        className="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm"
                      >
                        <Image
                          src={imgSrc}
                          alt={`${logo.title} - image ${i + 1}`}
                          width={800}
                          height={600}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
