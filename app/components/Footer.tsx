"use client"
import { Poppins } from 'next/font/google'
import React from 'react'
import Link from 'next/link'

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
          © 2025 Tayyab Ahmed
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

          {/* Instagram */}
          <Link href="https://www.instagram.com/ig_tayyab_ahmed/" target="_blank" rel="noopener noreferrer" className="ml-3 text-blue-700">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </Link>

          {/* LinkedIn */}
          <Link href="https://linkedin.com/in/tayyab-ahmed-a83700246" target="_blank" rel="noopener noreferrer" className="ml-3 text-blue-700">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </Link>

        </span>
      </div>
    </footer>
  )
}

export default Footer
