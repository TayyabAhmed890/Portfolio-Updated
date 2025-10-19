"use client";
import React from "react";
import HeroTypewriter from "./HeroTypewriter"; // ✅ make sure this import path is correct

const Hero: React.FC = () => {
  return (
    <section className="pt-20 relative text-center flex items-center justify-center bg-cover bg-center h-96 w-full bg-gradient-to-b from-blue-200/50 to-transparent">
      <div className="relative z-10 p-4 md:p-8">
        <h1 className="font-Noto text-4xl md:text-5xl font-bold">
          <span className="font-IBM font-light text-blue-700">Hello </span><span className="">Iam</span> <br /> Tayyab Ahmed <br />
          <HeroTypewriter
            words={["Web Developer", "Graphic Designer", "AI Enthusiast"]}
            typingSpeed={100}
            deletingSpeed={50}
            pauseBetween={1500}
            className="text-blue-700 text-3xl font-Poppins font-bold md:text-4xl"
          />
        </h1>

        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-4 inline-block"
        >
          <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
          <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-blue-700 hover:text-white">
            My Resume
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
