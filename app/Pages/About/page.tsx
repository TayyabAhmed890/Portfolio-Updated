'use client';

import { motion } from 'framer-motion';
import { IBM_Plex_Serif } from 'next/font/google';



const IBM = IBM_Plex_Serif({
    weight: ["300"],
    style: ["italic"],
    subsets: ["latin"],
});

const page = () => {
  return (
    <section id="about" className="py-16 h-auto sm:h-screen  bg-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-white mt-5 mb-4">About <span className={`${IBM.className} text-green-400`}>Me</span></h2>
          <p className="text-lg text-gray-300">
            I&apos;m <span className="text-green-400 font-semibold">Tayyab Ahmed</span>, a passionate ux/ui designer, web developer, and graphic designer. 
            With expertise in creating visually stunning and functional websites, I help businesses establish a strong online presence. 
            My design skills ensure user-friendly and engaging experiences that leave a lasting impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-12 ">
          <motion.div 
           
            className="bg-transparent border-2 p-6 rounded-2xl shadow-lg text-center transition-all duration-300 hover:shadow-[0px_0px_20px_5px_rgba(0,200,100,0.5)] "
          >
              <h3 className="text-xl font-semibold text-green-400">UX/UI Design</h3>
            <p className="text-gray-300 mt-2">
              Designing user-friendly interfaces and seamless digital experiences that enhance engagement and accessibility.
            </p>
          </motion.div>

          <motion.div 
           
            className="bg-transparent border-2 p-6 rounded-2xl shadow-lg text-center transition-all duration-300 hover:shadow-[0px_0px_20px_5px_rgba(0,200,100,0.5)] "
          >
           <h3 className="text-xl font-semibold text-green-400">Web Development</h3>
            <p className="text-gray-300 mt-2">
              Building high-performance, responsive websites with modern technologies like Next.js and Tailwind CSS.
            </p>
          </motion.div>

          <motion.div 
        
            className="bg-transparent border-2 p-6 rounded-2xl shadow-lg text-center transition-all duration-300 hover:shadow-[0px_0px_20px_5px_rgba(0,200,100,0.5)] "
          >
             <h3 className="text-xl font-semibold text-green-400">Graphic Design</h3>
            <p className="text-gray-300 mt-2">
              Creating impactful logos, branding, and marketing materials for a strong and unique brand identity.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default page;
