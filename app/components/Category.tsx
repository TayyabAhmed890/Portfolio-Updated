import Link from "next/link";
import { FaBrush, FaObjectGroup } from "react-icons/fa";
import { PiCodeFill } from "react-icons/pi";
import { TiArrowRight } from "react-icons/ti";

export const categories = [
  {
    slug: 'ux-ui-design',
    title: "UX/UI Design",
    icon: <FaObjectGroup className="text-blue-700" size={29} />,
    description: "Designing user-friendly interfaces with seamless experiences.",
    link: 'Ux'
  },
  {
    slug: 'graphic-design',
    title: "Graphic Design",
    icon: <FaBrush className="text-blue-700" size={29} />,
    description: "Creative visual designs, branding, and digital artwork.",
    link: 'Design'
  },
  {
    slug: 'web-dev',
    title: "Web Development",
    icon: <PiCodeFill className="text-blue-700" size={30} />,
    description: "Building fast, responsive, and scalable web applications.",
    link: 'WebDev'
  },
];

export default function CategorySection() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl font-bold text-center mb-10">
        My <span className="font-IBM font-light text-blue-700">Projects</span>
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative group transform transition-transform duration-300 cursor-pointer"
          >
            {/* Shadow Layer */}
            <div className="absolute top-0 left-0 translate-x-1.5 translate-y-1.5 h-full w-full rounded-2xl bg-black z-0"></div>

            {/* Main Card */}
            <div className="relative z-10 h-full w-full rounded-2xl border-2 bg-white border-black bg-transparent px-6 py-8 text-center flex flex-col items-center font-semibold text-lg transition-all duration-300 ">
              <div className="flex flex-col items-center gap-2">
                {category.icon}
                <h1 className="font-Noto font-bold text-lg flex flex-col justify-center">
                  {category.title}
                  <span className="font-IBM font-light text-blue-700 text-lg">
                    Projects
                  </span>
                </h1>

                <Link href={`/Pages/Projects?type=${category.slug}`} className="mt-3">
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
