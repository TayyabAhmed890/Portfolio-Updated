import React from 'react';
import { IBM_Plex_Serif } from 'next/font/google';
import { Nunito_Sans } from 'next/font/google';

const Noto = Nunito_Sans({
    weight: ["800"],
    subsets: ["latin"],
})

const IBM = IBM_Plex_Serif({
    weight: ["300"],
    style: ["italic"],
    subsets: ["latin"],
});

const Hero: React.FC = () => {
    return (
    <section className='pt-20 relative text-center flex items-center justify-center bg-cover bg-center h-96 w-full bg-gray-900 bg-gradient-to-b from-green-900/50 to-transparent'>
       {/* <div className='absolute inset-0 bg-black opacity-50'></div> */}
       <div className='relative z-10 text-white p-4 md:p-8'>
          <h1 className={`${Noto.className} text-4xl md:text-5xl font-bold`}>
             Crafting <span className={`${IBM.className} text-green-400`}>Designs</span> <br/> Building Seamless <br/>
             <span className={`${IBM.className} text-green-400`}>Web</span> <span className={`${Noto.className} `}>Experience</span>
          </h1>
<button className="border-2 border-green-500 hover:scale-105 transition-all px-3 rounded-md py-2 text-green-400 my-4 text-md sm:text-xl font-semibold">Explore</button>
       </div>
    </section>
    );
};

export default Hero;

// style={{ backgroundImage: 'url(port.jpg)' }}