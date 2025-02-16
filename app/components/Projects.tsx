'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Code, ShoppingCart, LayoutDashboard } from 'lucide-react';
import { IBM_Plex_Serif } from 'next/font/google';

const IBM = IBM_Plex_Serif({
    weight: ["300"],
    style: ["italic"],
    subsets: ["latin"],
});


const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing my work and skills.',
    link: '#',
    icon: <Code className="w-6 h-6  text-green-400 transition-colors duration-300" />, 
  },
  {
    title: 'E-commerce Store',
    description: 'A modern online store with Next.js and Tailwind CSS.',
    link: '#',
    icon: <ShoppingCart className="w-6 h-6  text-green-400 transition-colors duration-300" />, 
  },
  {
    title: 'Dashboard UI',
    description: 'An admin dashboard with analytics and user management.',
    link: '#',
    icon: <LayoutDashboard className="w-6 h-6  text-green-400 transition-colors duration-300" />, 
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-16 bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-200">
          My <span className={`${IBM.className} text-green-400`}>Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="relative group">
              <Card 
                className="bg-transparent border-2 overflow-hidden relative rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-[0px_0px_20px_5px_rgba(0,200,100,0.5)]"
              >
                <CardContent className="p-6 relative z-10 flex flex-col items-start">
                  <div className="mb-4">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-200">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <Button variant="outline" className=" transition-all text-green-500 bg-transparent border-green-500">
                    View Project <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
