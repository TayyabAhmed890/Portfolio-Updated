import { IBM_Plex_Serif } from 'next/font/google';
import React from 'react'
import { FaLaptopCode, FaPaintBrush, FaCode } from "react-icons/fa";


const IBM = IBM_Plex_Serif({
    weight: ["300"],
    style: ["italic"],
    subsets: ["latin"],
});

const services = [
  {
    title: "Web Design",
    icon: <FaLaptopCode className="text-4xl text-green-400" />,
    description: "Modern and responsive website design with UI/UX best practices.",
  },
  {
    title: "Graphic Design",
    icon: <FaPaintBrush className="text-4xl text-green-400" />,
    description: "Creative and visually appealing graphic designs for branding.",
  },
  {
    title: "Web Development",
    icon: <FaCode className="text-4xl text-green-400" />,
    description: "Building fast, scalable, and interactive web applications.",
  },
];

const Services = () => {
  return (
    <>
    <section className=" bg-gray-900 text-white ">
      
      <div className="max-w-5xl px-8 mx-auto py-16  text-center backdrop-blur-sm">
        <h2 className="text-4xl font-bold mb-10">My <span className={`${IBM.className} text-green-400`}>Services</span></h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-transparent border-2 p-8 rounded-xl shadow-md flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0px_0px_20px_5px_rgba(0,200,100,0.5)]"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
   


    </>
  )
}

export default Services;