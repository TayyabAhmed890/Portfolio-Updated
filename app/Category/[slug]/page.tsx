"use client";

import { useParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Code, Brush, ShoppingCart, Smartphone, Globe, PenTool, Image as ImageIcon, Palette, Database} from "lucide-react";
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
      { name: "Mobile App Redesign", description: "Redesigning a mobile banking app UI with modern aesthetics.", icon: <Smartphone className="w-10 h-10 text-green-400" /> },
      { name: "E-commerce Website UI", description: "Improving the UX of an online store for better conversions.", icon: <ShoppingCart className="w-10 h-10 text-green-400" /> },
      { name: "Creative Dashboard UI", description: "Designing an innovative dashboard for data analytics.", icon: <Palette className="w-10 h-10 text-green-400" /> },
    ],
  },
  "web-dev": {
    title: "Web Development",
    projects: [
      { name: "Portfolio Website", description: "A stunning personal portfolio built with Next.js & Tailwind CSS.", icon: <Globe className="w-10 h-10 text-green-400" /> },
      { name: "Blog Platform", description: "A dynamic blog system with authentication & CMS integration.", icon: <Code className="w-10 h-10 text-green-400" /> },
      { name: "Database Management System", description: "A secure and scalable DBMS for enterprise solutions.", icon: <Database className="w-10 h-10 text-green-400" /> },
    ],
  },
  "graphic-design": {
    title: "Graphic Design",
    projects: [
      { name: "Brand Logo", description: "Creating a unique and timeless brand identity.", icon: <PenTool className="w-10 h-10 text-green-400" /> },
      { name: "Marketing Posters", description: "Eye-catching promotional materials for digital campaigns.", icon: <ImageIcon className="w-10 h-10 text-green-400" /> },
      { name: "3D Illustration", description: "Designing immersive 3D illustrations for branding.", icon: <Brush className="w-10 h-10 text-green-400" /> },
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
          <span className={`${IBM.className} text-green-400`}>Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.projects.map((p, index) => (
            <div key={index} className="relative group">
              <Card 
                className="bg-transparent border-2 overflow-hidden relative rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-[0px_0px_20px_5px_rgba(0,200,100,0.5)]"
              >
                <CardContent className="p-6 relative z-10 flex flex-col items-start">
                  <div className="mb-4">{p.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-200">{p.name}</h3>
                  <p className="text-gray-400 mb-4">{p.description}</p>
                  <Button variant="outline" className="transition-all text-green-500 bg-transparent border-green-500">
                    View Project <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/" className="inline-block px-6 py-3 border-2 border-green-400 bg-transparent text-green-400 font-medium rounded-lg shadow-md hover:scale-105 transition-all">
            ← Back to Projects
          </Link>
        </div>
      </div>
    </section>
  );
}