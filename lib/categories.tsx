// app/Pages/Projects/categories.tsx
import { FaBrush, FaObjectGroup } from "react-icons/fa";
import { PiCodeFill } from "react-icons/pi";

export const categories = [
  {
    slug: "ux-ui-design",
    title: "Web Design",
    icon: <FaObjectGroup className="text-blue-700" size={29} />,
    description: "Designing user-friendly interfaces with seamless experiences.",
    link: "/ProjectPages/UserInterface/web",
    type: "ux-ui-design",
  },
  {
    slug: "ux-ui-design",
    title: "App Design",
    icon: <FaObjectGroup className="text-blue-700" size={29} />,
    description: "Designing user-friendly interfaces with seamless experiences.",
    link: "/ProjectPages/UserInterface/AppDesign",
    type: "ux-ui-design",
  },
  {
    slug: "graphic-design",
    title: "Brand Identity",
    icon: <FaBrush className="text-blue-700" size={29} />,
    description: "Creative visual designs, branding, and digital artwork.",
    link: "/ProjectPages/Brand",
    type: "graphic-design",
  },
  {
    slug: "graphic-design",
    title: "Logo Design",
    icon: <FaBrush className="text-blue-700" size={29} />,
    description: "Creative visual designs, branding, and digital artwork.",
    link: "/ProjectPages/Logo",
    type: "graphic-design",
  },
  {
    slug: "graphic-design",
    title: "Post Design",
    icon: <FaBrush className="text-blue-700" size={29} />,
    description: "Creative visual designs, branding, and digital artwork.",
    link: "/ProjectPages/Post",
    type: "graphic-design",
  },
  {
    slug: "web-dev",
    title: "Tech Blog",
    icon: <PiCodeFill className="text-blue-700" size={30} />,
    description: "Building fast, responsive, and scalable web applications.",
    link: "https://tech-blogs-tayyab.vercel.app/",
    type: "web-dev",
  },
  {
    slug: "web-dev",
    title: "E-Commerce",
    icon: <PiCodeFill className="text-blue-700" size={30} />,
    description: "Building fast, responsive, and scalable web applications.",
    link: "https://marketplace-e-commerce-platform.vercel.app/",
    type: "web-dev",
  },
  {
    slug: "web-dev",
    title: "SocialQR",
    icon: <PiCodeFill className="text-blue-700" size={30} />,
    description: "Building fast, responsive, and scalable web applications.",
    link: "https://socialqr.vercel.app/",
    type: "web-dev",
  },
];
