'use client';

import { IBM_Plex_Serif } from 'next/font/google';
import { FaHtml5, FaCss3Alt, FaJs, FaFigma } from 'react-icons/fa';
import { SiSanity,SiNextdotjs, SiAdobephotoshop, SiAdobeillustrator } from 'react-icons/si';

const skills = [
  { name: 'Sanity', icon: <SiSanity className='text-orange-600' /> },
  { name: 'Next js', icon: <SiNextdotjs className='text-white' /> },
  { name: 'HTML', icon: <FaHtml5 className='text-orange-500' /> },
  { name: 'CSS', icon: <FaCss3Alt className='text-blue-600' /> },
  { name: 'JavaScript', icon: <FaJs className='text-yellow-500' /> },
  { name: 'Figma', icon: <FaFigma className='text-purple-500' /> },
  { name: 'Photoshop', icon: <SiAdobephotoshop className='text-blue-500' /> },
  { name: 'Illustrator', icon: <SiAdobeillustrator className='text-orange-600' /> },
];

const IBM = IBM_Plex_Serif({
    weight: ["300"],
    style: ["italic"],
    subsets: ["latin"],
});

export default function SkillsSection() {
  
  return (
    <section className='py-16 bg-gray-900'>
      <div className='max-w-5xl mx-auto text-center'>
      <h2 className="text-4xl font-bold mb-10 text-white">My <span className={`${IBM.className} text-green-400`}>Skills</span></h2>
        <p className='text-green-400  mb-10'>Technologies and tools I work with</p>
      </div>

      <div className='max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='flex flex-col items-center justify-center bg-transparent border-2 p-6 rounded-xl shadow-md  transition-all duration-300 hover:scale-105 cursor-pointer hover:shadow-[0px_0px_20px_5px_rgba(0,200,100,0.5)]'
          >
            <div className='text-4xl'>{skill.icon}</div>
            <p className='mt-3 text-lg font-semibold text-white'>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}