'use client';

import { motion } from 'framer-motion';

const page = () => {
  return (
    <section id="about" className="py-16 min-h-screen ">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl font-bold  mt-5 mb-4">
            About <span className="font-IBM font-light text-blue-700">Me</span>
          </h2>
          <p className="text-lg  font-Noto font-light">
            I&apos;m <span className="text-blue-700">Tayyab Ahmed</span>, a beginner but passionate UX/UI Designer, Web Developer, and Graphic Designer just starting my creative journey.
            I love building visually appealing, functional websites that blend design with technology. Recently, I’ve been exploring how to integrate AI into web experiences, making them smarter and more engaging.
            Every project I take on helps me learn, grow, and move one step closer to becoming a skilled full-stack creative.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {[
            {
              title: "UX/UI Design",
              desc: "Designing user-friendly interfaces and seamless digital experiences that enhance engagement and accessibility.",
            },
            {
              title: "Web Development",
              desc: "Building high-performance, responsive websites with modern technologies like Next.js and Tailwind CSS.",
            },
            {
              title: "Graphic Design",
              desc: "Creating impactful logos, branding, and marketing materials for a strong and unique brand identity.",
            },
            {
              title: "Ai Agents",
              desc: "Exploring AI Agent creation with the OpenAI Agent SDK to enhance website interactivity and intelligence.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="relative group cursor-pointer transition-transform duration-300"
            >
              {/* Shadow layer */}
              <div className="absolute top-0 left-0 translate-x-1.5 translate-y-1.5 h-full w-full rounded-2xl bg-black z-0"></div>

              {/* Main card */}
              <div className="relative z-10 h-full w-full p-6 bg-white border-2 border-black rounded-2xl text-center">
                <h3 className="text-xl font-Noto font-bold text-black">{item.title}</h3>
                <p className="text-gray-800 mt-2">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
