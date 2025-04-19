// "use client";

// import { useParams } from "next/navigation";
// import { Card, CardContent } from "@/components/ui/card";
// import { ArrowUpRight, Code, Brush, ShoppingCart, Smartphone, Globe, PenTool, Image as ImageIcon, Palette } from "lucide-react";
// import { JSX } from "react";
// import Link from "next/link";
// import { IBM_Plex_Serif } from "next/font/google";

// const IBM = IBM_Plex_Serif({
//   weight: ["300"],
//   style: ["italic"],
//   subsets: ["latin"],
// });

// // Type definitions for projects
// interface Project {
//   name: string;
//   description: string;
//   icon: JSX.Element;
//   link:string;
// }

// interface ProjectData {
//   title: string;
//   projects: Project[];
// }

// // Dummy Projects Data
// const projectData: Record<string, ProjectData> = {
//   "ux-ui-design": {
//     title: "UX/UI Design",
//     projects: [
//       { name: "Mobile App Redesign", description: "Redesigning a mobile banking app UI with modern aesthetics.", icon: <Smartphone className="w-10 h-10 text-blue-700" />,link:'/' },
//       { name: "E-commerce Website UI", description: "Improving the UX of an online store for better conversions.", icon: <ShoppingCart className="w-10 h-10 text-blue-700" />,link:'/' },
//       { name: "Creative Dashboard UI", description: "Designing an innovative dashboard for data analytics.", icon: <Palette className="w-10 h-10 text-blue-700" />,link:'/' },
//     ],
//   },
//   "web-dev": {
//     title: "Web Development",
//     projects: [
//       { name: "Portfolio Website", description: "A stunning personal portfolio built with Next.js & Tailwind CSS.", icon: <Globe className="w-10 h-10 text-blue-700" />,link:'/' },
//       { name: "Blog Platform", description: "A dynamic blog system with authentication & CMS integration.", icon: <Code className="w-10 h-10 text-blue-700" />,link:'/' },
//       { name: "E-commerce Website", description: "A Scalable and Optimized Shopping Website", icon: <ShoppingCart className="w-10 h-10 text-blue-700" />,link:'https://marketplace-e-commerce-platform.vercel.app/' },
//     ],
//   },
//   "graphic-design": {
//     title: "Graphic Design",
//     projects: [
//       { name: "Logo Design", description: "Creating a unique and timeless brand identity.", icon: <PenTool className="w-10 h-10 text-blue-700" />,link:'/ProjectPages/Logo' },
//       { name: "Marketing Posters", description: "Eye-catching promotional materials for digital campaigns.", icon: <ImageIcon className="w-10 h-10 text-blue-700" />,link:'/' },
//       { name: "3D Illustration", description: "Designing immersive 3D illustrations for branding.", icon: <Brush className="w-10 h-10 text-blue-700" />,link:'/' },
//     ],
//   },
// };

// export default function ProjectDetail() {
//   const { slug } = useParams<{ slug: string }>();

//   if (!slug || !projectData[slug]) {
//     return (
//       <div className="flex justify-center items-center h-screen text-black-600 text-lg">
//         Loading...
//       </div>
//     );
//   }

//   const project = projectData[slug];

//   return (
//     <section className=" pt-20 min-h-screen">
//   <div className="max-w-6xl mx-auto px-6 mt-2 ">
//     <h2 className="text-4xl font-bold text-center mb-12 text-black flex flex-col">
//       {project.title}
//       <span className={`${IBM.className} text-blue-700`}>Projects</span>
//     </h2>
//     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {project.projects.map((p, index) => (
//         <div key={index} className="relative group">
//           {/* Shadow Layer */}
//           <span className="absolute top-0 left-0 mt-2 ml-2 h-full w-full rounded-2xl bg-black z-0"></span>
          
//           {/* Main Card */}
//           <Card className=" relative z-10 bg-white border-2 border-black overflow-hidden rounded-2xl shadow-lg transition-shadow duration-300 ">
//             <CardContent className="p-6 relative z-10 flex flex-col items-start">
//               <div className="mb-4">{p.icon}</div>
//               <h3 className="text-xl font-semibold mb-2 text-black">{p.name}</h3>
//               <p className="text-black mb-4">{p.description}</p>
//               <Link href={`${p.link}`} target="_blank">
//                 <h2 className="flex items-center rounded-md justify-center border-2 p-2 transition-all text-blue-700 bg-transparent border-blue-700 hover:bg-blue-700 hover:text-black">
//                   View Project <ArrowUpRight className="w-4 h-4 ml-2" />
//                 </h2>
//               </Link>
//             </CardContent>
//           </Card>
//         </div>
//       ))}
//     </div>

//     <div className="text-center mt-8">
//       <Link href="/" className="inline-block px-6 py-3 border-2 border-blue-700 bg-transparent text-blue-700 font-medium rounded-lg shadow-md hover:scale-105 transition-all">
//         ← Back to Projects
//       </Link>
//     </div>
//   </div>
// </section>

//   );
// }