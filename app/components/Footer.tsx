"use client"
import { Poppins } from 'next/font/google'
import React from 'react'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const PoppinsFont = Poppins({
  subsets: ['latin'],
  weight: ["600"],
})

const Footer = () => {
  return (
    <footer className="text-black border-t border-black body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className={`ml-3 text-xl ${PoppinsFont.className} font-bold`}>Portfolio</span>
        </Link>
        <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-black sm:py-2 sm:mt-0 mt-4">
          © 2026 Tayyab Ahmed
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

          {/* Instagram */}
          <Link href="https://www.github.com/TayyabAhmed890" target="_blank" rel="noopener noreferrer" className="ml-3">
            <FaGithub size={27}/>
          </Link>

          {/* LinkedIn */}
          <Link href="https://www.linkedin.com/in/tayyab-ahmed-a83700246/" target="_blank" rel="noopener noreferrer" className="ml-3 ">
            <FaLinkedin size={27}/>
          </Link>

        </span>
      </div>
    </footer>
  )
}

export default Footer
