import React from 'react'
import { FaLaptopCode, FaPaintBrush, FaCode } from "react-icons/fa";
import { RiRobot2Fill } from "react-icons/ri";

const services = [
  {
    title: "Web Design",
    icon: <FaLaptopCode className="text-4xl text-blue-700" />,
    description: "Modern and responsive website design with UI/UX best practices.",
  },
  {
    title: "Graphic Design",
    icon: <FaPaintBrush className="text-4xl text-blue-700" />,
    description: "Creative and visually appealing graphic designs for branding.",
  },
  {
    title: "Web Development",
    icon: <FaCode className="text-4xl text-blue-700" />,
    description: "Building fast, scalable, and interactive web applications.",
  },
  {
    title: "Ai Agents",
    icon: <RiRobot2Fill className="text-4xl text-blue-700" />,
    description: "Building Agents and integrate with web applications.",
  },
];

const Services = () => {
  return (
    <section>
      <div className="max-w-6xl px-8 mx-auto py-16 text-center backdrop-blur-sm">
        <h2 className="text-4xl font-bold mb-10">
          My <span className="font-IBM font-light text-blue-700">Services</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            // Entire wrapper scales including shadow
            <div
              key={index}
              className="relative group transform transition-transform duration-300 hover:scale-105"
            >
              {/* Shadow Layer */}
              <div className="absolute top-0 left-0 translate-x-1.5 translate-y-1.5 h-full w-full rounded-xl bg-black z-0"></div>

              {/* Main Card */}
              <div className="relative z-10 h-full w-full rounded-xl border-2 border-black bg-white px-6 py-8 text-center flex flex-col items-center">
                <div className="mb-4 text-blue-700">{service.icon}</div>
                <h3 className="text-xl mb-2 font-Noto font-bold">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
