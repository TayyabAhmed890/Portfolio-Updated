
import Link from "next/link";
import { IBM_Plex_Serif, Inter, Nunito_Sans } from "next/font/google";
import { FaBrush, FaObjectGroup} from "react-icons/fa";
import { PiCodeFill } from "react-icons/pi";
import { TiArrowRight } from "react-icons/ti";
import { Code, LayoutDashboard, ShoppingCart } from "lucide-react";



const Noto = Nunito_Sans({
    weight: ["400"],
    subsets: ["latin"],
})

const IBM = IBM_Plex_Serif({
    weight: ["300"],
    style: ["italic"],
    subsets: ["latin"],
});

const InterFont = Inter({
    weight: ["400", "600"],
    subsets: ["latin"],
});

export const categories = [
  { 
   
    slug: 'ux-ui-design',
    title: "UX/UI Design", 
    icon: <FaObjectGroup className="text-green-400" size={29} />, 
    description: "Designing user-friendly interfaces with seamless experiences.",
    link: 'Ux'
  },
  { 
    
    slug: 'graphic-design',
    title: "Graphic Design", 
    icon: <FaBrush className="text-green-400" size={29} />, 
    description: "Creative visual designs, branding, and digital artwork.",
    link: 'Design'
  },
  { 
   
    slug: 'web-dev',
    title: "Web Development", 
    icon: <PiCodeFill  className="text-green-400" size={30} />, 
    description: "Building fast, responsive, and scalable web applications.",
    link: 'WebDev'
  },
  
];

export default function CategorySection() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 bg-gray-900">
    <h2 className={`text-4xl font-bold text-center mb-10 text-gray-200 ${InterFont.className}`}>
      My <span className={`${IBM.className} text-green-400`}>Projects</span>
    </h2>
  
    {/* Grid Layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className="p-6 h-48 flex flex-col justify-center items-center text-center rounded-2xl shadow-lg text-white font-semibold border-2 text-lg bg-transparent transition-all duration-300 hover:shadow-[0px_0px_20px_5px_rgba(0,200,100,0.5)]"
        >
          <div className="flex flex-col items-center gap-3">
            {category.icon}
            <h1 className={`${Noto.className} font-bold text-xl`}>{category.title}</h1>
            <h1 className={`${IBM.className} text-green-400 text-lg`}>Projects</h1>
  
            <Link href={`/Category/${category.slug}`} className="mt-3">
              <h2 className={`border-2 flex items-center justify-center border-green-400 text-green-400 px-4 py-1 rounded-md ${Noto.className} transition hover:bg-green-400 hover:text-gray-900`}>
                View <TiArrowRight size={20} className="ml-1"/>
              </h2>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
}
