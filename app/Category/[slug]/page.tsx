"use client";

import { useParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Code, Brush, ShoppingCart, Smartphone, Globe, PenTool, Image as ImageIcon, Palette } from "lucide-react";
import { JSX } from "react";
import Link from "next/link";
import { IBM_Plex_Serif } from "next/font/google";

const IBM = IBM_Plex_Serif({
  weight: ["300"],
  style: ["italic"],
  subsets: ["latin"],
});

// Type definitions for projects
interface Project {
  name: string;
  description: string;
  icon: JSX.Element;
  link:string;
}

interface ProjectData {
  title: string;
  projects: Project[];
}

// Dummy Projects Data
const projectData: Record<string, ProjectData> = {
  "ux-ui-design": {
    title: "UX/UI Design",
    projects: [
      { name: "Mobile App Redesign", description: "Redesigning a mobile banking app UI with modern aesthetics.", icon: <Smartphone className="w-10 h-10 text-cyan-400" />,link:'/' },
      { name: "E-commerce Website UI", description: "Improving the UX of an online store for better conversions.", icon: <ShoppingCart className="w-10 h-10 text-cyan-400" />,link:'/' },
      { name: "Creative Dashboard UI", description: "Designing an innovative dashboard for data analytics.", icon: <Palette className="w-10 h-10 text-cyan-400" />,link:'/' },
    ],
  },
  "web-dev": {
    title: "Web Development",
    projects: [
      { name: "Portfolio Website", description: "A stunning personal portfolio built with Next.js & Tailwind CSS.", icon: <Globe className="w-10 h-10 text-cyan-400" />,link:'/' },
      { name: "Blog Platform", description: "A dynamic blog system with authentication & CMS integration.", icon: <Code className="w-10 h-10 text-cyan-400" />,link:'/' },
      { name: "E-commerce Website", description: "A Scalable and Optimized Shopping Website", icon: <ShoppingCart className="w-10 h-10 text-cyan-400" />,link:'https://web-portfolio-tayyab-ahmed.vercel.app/' },
    ],
  },
  "graphic-design": {
    title: "Graphic Design",
    projects: [
      { name: "Brand Logo", description: "Creating a unique and timeless brand identity.", icon: <PenTool className="w-10 h-10 text-cyan-400" />,link:'/' },
      { name: "Marketing Posters", description: "Eye-catching promotional materials for digital campaigns.", icon: <ImageIcon className="w-10 h-10 text-cyan-400" />,link:'/' },
      { name: "3D Illustration", description: "Designing immersive 3D illustrations for branding.", icon: <Brush className="w-10 h-10 text-cyan-400" />,link:'/' },
    ],
  },
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !projectData[slug]) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600 text-lg">
        Loading...
      </div>
    );
  }

  const project = projectData[slug];

  return (
    <section className="sm:h-screen bg-gray-900 text-gray-300 pt-20 h-auto">
      <div className="max-w-6xl mx-auto px-6 mt-2">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-200 flex flex-col">
          {project.title}
          <span className={`${IBM.className} text-cyan-400`}>Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.projects.map((p, index) => (
            <div key={index} className="relative group">
              <Card
                className="bg-transparent border-2 overflow-hidden relative rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-[0px_0px_20px_5px_rgba(0,100,100,0.6)]"
              >
                <CardContent className="p-6 relative z-10 flex flex-col items-start">
                  <div className="mb-4">{p.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-200">{p.name}</h3>
                  <p className="text-gray-400 mb-4">{p.description}</p>
                  <Link href={`${p.link}`} target="_blank">
                    <h2 className="flex items-center rounded-md justify-center border-2 p-2 transition-all text-cyan-500 bg-transparent border-cyan-500 hover:bg-cyan-400 hover:text-black">
                      View Project <ArrowUpRight className="w-4 h-4 ml-2" />
                    </h2>
                  </Link>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/" className="inline-block px-6 py-3 border-2 border-cyan-400 bg-transparent text-cyan-400 font-medium rounded-lg shadow-md hover:scale-105 transition-all">
            ← Back to Projects
          </Link>
        </div>
      </div>
    </section>
  );
}