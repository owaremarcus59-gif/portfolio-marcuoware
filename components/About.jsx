import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
      <p className='py-2 text-gray-600 tracking-wide leading-8 md:max-w-3xl word-spacing-wide'>
      My interest in computers began at age seven, when I received my first Dell desktop in Tema, Ghana. That early exposure sparked a lasting curiosity about how technology works and how software can solve real-world problems.
      I began pursuing web development seriously in 2020 and have since grown into a full-stack developer focused on building responsive, scalable web applications. My work spans modern front-end frameworks and backend systems, with hands-on experience integrating APIs, databases, and AI-powered features.
      In 2026, I transitioned my teaching to Twitch, where I stream and teach web development, full-stack engineering, and practical AI concepts including LangChain-based RAG systems to a global audience.
          </p>
          
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
