'use client';

import { IBM_Plex_Serif } from 'next/font/google';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaFigma
} from 'react-icons/fa';
import {
  SiSanity,
  SiNextdotjs,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiOpenai,
  SiPython,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSupabase
} from 'react-icons/si';
import { BiLogoFirebase,BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";

const skills = [
  { name: 'HTML', icon: <FaHtml5 className='text-orange-500' /> },
  { name: 'CSS', icon: <FaCss3Alt className='text-blue-600' /> },
  { name: 'JavaScript', icon: <FaJs className='text-yellow-500' /> },
  { name: 'React js', icon: <SiReact className='text-cyan-500' /> },
  { name: 'Next js', icon: <SiNextdotjs className='text-black' /> },
  { name: 'TypeScript', icon: <SiTypescript className='text-blue-700' /> },
  { name: 'Node js', icon: <SiNodedotjs className='text-green-700' /> },
  { name: 'Express js', icon: <SiExpress className='text-yellow-600' /> },
  { name: 'Sanity', icon: <SiSanity className='text-orange-600' /> },
  { name: 'Mongo DB', icon: <SiMongodb className='text-green-600' /> },
  { name: 'Firebase', icon: <BiLogoFirebase className='text-red-800' /> },
  { name: 'PostgreSQL', icon: <BiLogoPostgresql className='text-blue-800' /> },
  { name: 'MySQL', icon: <GrMysql className='text-blue-600' /> },
  { name: 'Supabase', icon: <SiSupabase className='text-green-400' /> },
  { name: 'Python', icon: <SiPython className='text-blue-600' /> },
  { name: 'OpenAI SDK', icon: <SiOpenai className='text-black' /> },
  { name: 'Photoshop', icon: <SiAdobephotoshop className='text-blue-500' /> },
  { name: 'Illustrator', icon: <SiAdobeillustrator className='text-orange-600' /> },
  { name: 'Figma', icon: <FaFigma className='text-purple-500' /> },
];

const IBM = IBM_Plex_Serif({
  weight: ['300'],
  style: ['italic'],
  subsets: ['latin'],
});

export default function SkillsSection() {
  return (
    <section className='py-16'>
      <div className='max-w-5xl mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-10'>
          My <span className={`${IBM.className} text-blue-700`}>Skills</span>
        </h2>
        <p className='text-blue-700 mb-10'>Technologies and tools I work with</p>
      </div>

      <div className='max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='relative group transform transition-transform duration-300 hover:scale-105 cursor-pointer'
          >
            {/* Shadow layer */}
            <div className='absolute top-0 left-0 translate-x-1.5 translate-y-1.5 h-full w-full rounded-xl bg-black z-0'></div>

            {/* Main card */}
            <div className='relative z-10 h-full w-full rounded-xl border-2 border-black bg-white p-6 flex flex-col items-center justify-center text-center'>
              <div className='text-4xl'>{skill.icon}</div>
              <p className='mt-3 text-lg font-Noto font-light'>{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
