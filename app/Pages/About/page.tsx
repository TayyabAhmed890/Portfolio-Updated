'use client';

import { motion } from 'framer-motion';



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
          <h2 className="text-4xl font-bold text-white mt-5 mb-4">About <span className={`font-IBM font-light text-cyan-400`}>Me</span></h2>
          <p className="text-lg text-gray-300 font-Noto font-light ">
            I&apos;m <span className="text-cyan-400 ">Tayyab Ahmed</span>, a passionate ux/ui designer, web developer, and graphic designer. 
            With expertise in creating visually stunning and functional websites, I help businesses establish a strong online presence. 
            My design skills ensure user-friendly and engaging experiences that leave a lasting impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-12 ">
          <motion.div 
           
            className="bg-transparent border-2 p-6 rounded-2xl shadow-lg text-center transition-all duration-300 hover:shadow-[0px_0px_20px_5px_rgba(0,100,100,0.6)] "
          >
              <h3 className="text-xl font-Noto  font-light text-cyan-400">UX/UI Design</h3>
            <p className="text-gray-300 mt-2">
              Designing user-friendly interfaces and seamless digital experiences that enhance engagement and accessibility.
            </p>
          </motion.div>

          <motion.div 
           
            className="bg-transparent border-2 p-6 rounded-2xl shadow-lg text-center transition-all duration-300 hover:shadow-[0px_0px_20px_5px_rgba(0,100,100,0.6)] "
          >
           <h3 className="text-xl font-Noto font-light text-cyan-400">Web Development</h3>
            <p className="text-gray-300 mt-2">
              Building high-performance, responsive websites with modern technologies like Next.js and Tailwind CSS.
            </p>
          </motion.div>

          <motion.div 
        
            className="bg-transparent border-2 p-6 rounded-2xl shadow-lg text-center transition-all duration-300 hover:shadow-[0px_0px_20px_5px_rgba(0,100,100,0.6)] "
          >
             <h3 className="text-xl font-Noto font-light text-cyan-400">Graphic Design</h3>
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
