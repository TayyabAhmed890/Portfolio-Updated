'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Page = () => {
  return (
    <section id="about" className="py-12 md:py-20 min-h-screen">
      <div className="container mx-auto px-5 md:px-12 lg:px-20 flex flex-col items-center">
        
        {/* Top Header & Intro Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto mb-14 md:mb-16 w-full"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 mt-10">
            About <span className="font-IBM font-light text-blue-700">Me</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            {/* Image Container — Mobile Par Clear Aur Sharp */}
            <div className="relative group w-60 h-60 sm:w-72 sm:h-72 md:w-72 md:h-72 flex-shrink-0">
              {/* Solid Shadow */}
              <div className="absolute top-0 left-0 translate-x-1 translate-y-1 h-full w-full rounded-2xl bg-black z-0"></div>
              
              {/* Image Frame */}
              <div className="relative z-10 h-full w-full rounded-2xl border-2 border-black overflow-hidden bg-gray-100">
                <Image
                  src="/profile.jpg" // Public folder me image path
                  alt="Tayyab Ahmed"
                  fill
                  sizes="(max-width: 768px) 280px, 300px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Intro Text */}
            <div className=" md:text-left flex-1 mt-2 md:mt-0">
              <p className="text-lg md:text-xl font-Noto font-normal leading-relaxed text-gray-900">
                Hey! I&apos;m <span className="font-bold text-blue-700">Tayyab Ahmed</span>, a 6th semester Computer Science student at Virtual University with a big ambition: becoming a truly solid <span className="font-semibold text-black">Software Engineer</span>.
              </p>
              
              <p className="text-base md:text-lg font-Noto font-light leading-relaxed text-gray-700 mt-4">
                I dove into the <span className="font-semibold text-black">MERN stack</span> to gain a deep, hands on understanding of how modern web applications work end to end. Beyond core engineering, creative design is something I naturally enjoy as a hobby it allows me to make the systems I build visually engaging and enjoyable to use.
              </p>
              
              <p className="text-base md:text-lg font-Noto font-light leading-relaxed text-gray-700 mt-4">
                Lately, I&apos;ve also been exploring AI agents to make web applications smarter and more dynamic, constantly building projects to strengthen my fundamentals.
              </p>
            </div>

          </div>
        </motion.div>

        {/* Cards Grid — Updated Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {[
            {
              title: "MERN Stack",
              desc: "Building full-stack web applications with React, Node.js, Express, and MongoDB to master web architecture.",
            },
            {
              title: "Software Engineering",
              desc: "Focusing on core CS fundamentals, clean code, and problem-solving to build reliable software systems.",
            },
            {
              title: "Creative Design",
              desc: "Enjoying visual design as a creative outlet to craft clean, attractive, and user-friendly web layouts.",
            },
            {
              title: "AI Integration",
              desc: "Exploring OpenAI SDKs to embed interactive AI agents into web platforms.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative group cursor-pointer transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Shadow layer */}
              <div className="absolute top-0 left-0 translate-x-1.5 translate-y-1.5 h-full w-full rounded-2xl bg-black z-0"></div>

              {/* Main card */}
              <div className="relative z-10 h-full w-full p-6 bg-white border-2 border-black rounded-2xl text-center flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-Noto font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Page;