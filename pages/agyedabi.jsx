import Image from 'next/image';
import React from 'react';
import scalf from '../public/assets/agyedabi.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const nirvana = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10 object-contain ' />
        <Image
          className='w-full absolute z-1 h-[50vh]  object-cover'
          src={scalf}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Agyedabi Shop</h2>
          <h3>Typescript | Next Js | Tailwindcss | Prima | Vercel </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p className='max-w-4xl leading-7 text-lg tracking-wide'>
          Agyedabi.shop is a modern educational platform built with React.js, styled using Tailwind CSS, and hosted on Vercel. The site offers interactive learning experiences, including courses, live tutoring sessions, and job-matching services for aspiring developers. It uses PostgreSQL with Prisma for efficient and scalable database management. The platform features a fully responsive design, intuitive navigation, and dynamic components for course browsing, profile management, and skill tracking, providing a seamless experience across all devices.
           
          </p>
          <Link
            href='https://agyedabi.shop/'
            target='_blank'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Live</button>
          </Link>
          <Link
            href='https://github.com/owaremarcus59-gif/agyedabi.git'
            target='_blank'
            referrerPolicy='no-referrer'
          >
            <button className='px-8 py-2 mt-4'>Code</button>
          </Link>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> 
                Next.JS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwindcss
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Postgres 
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Prisma 
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> 
                JavaScript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> 
                Typescript
              </p>
  
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default nirvana;
