
import Link from "next/link";
import { FaBrush, FaObjectGroup} from "react-icons/fa";
import { PiCodeFill } from "react-icons/pi";
import { TiArrowRight } from "react-icons/ti";
// import { Code, LayoutDashboard, ShoppingCart } from "lucide-react";


const categories = [
  { 
   
    slug: 'ux-ui-design',
    title: "UX/UI Design", 
    icon: <FaObjectGroup className="text-cyan-400" size={29} />, 
    description: "Designing user-friendly interfaces with seamless experiences.",
    link: 'Ux'
  },
  { 
    
    slug: 'graphic-design',
    title: "Graphic Design", 
    icon: <FaBrush className="text-cyan-400" size={29} />, 
    description: "Creative visual designs, branding, and digital artwork.",
    link: 'Design'
  },
  { 
   
    slug: 'web-dev',
    title: "Web Development", 
    icon: <PiCodeFill  className="text-cyan-400" size={30} />, 
    description: "Building fast, responsive, and scalable web applications.",
    link: 'WebDev'
  },
  
];

export default function page() {
  return (
    <div className="container max-w-7xl mx-auto py-12 bg-gray-900 h-auto sm:h-screen pt-20">
      <h2 className={`text-4xl font-bold text-center mb-8 text-gray-200` }>
        My <span className={`font-IBM font-light text-cyan-400`}>Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="p-6 h-48 flex flex-col justify-center rounded-2xl shadow-lg text-white font-semibold border-2  text-lg bg-transparent transition-shadow duration-300 hover:shadow-[0px_0px_20px_5px_rgba(0,100,100,0.6)] "
          >
            <div className="flex flex-col items-center gap-3">
              {category.icon}
              <div className="text-center text-xl">
               
              <h1 className={`font-Noto font-light text-center  `}>{category.title}</h1>
              <h1 className={`font-IBM font-light text-cyan-400`}>Projects</h1>
              </div>
              {/* <p className="text-center text-gray-300 text-sm">{category.description}</p> */}
          <Link href={`/Category/${category.slug}`}>
              <h2 className={`border-2 flex items-center justify-center border-cyan-400 text-cyan-400 px-3 py-1 rounded-md font-Noto font-light`}>View <TiArrowRight size={24}/></h2>
            </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
