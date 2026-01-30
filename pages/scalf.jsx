import Image from 'next/image';
import React from 'react';
import scalf from '../public/assets/scalf.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const dashboard = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10 object-contain' />
        <Image
          className='absolute z-1 object-cover  h-full '
          src={scalf}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Scalf.io</h2>
          <h3>Next.Js / Tailwind / Supabase / Postgres / React.Js / Vercel / Vercel Storage</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-6 '>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p className='max-w-4xl leading-7 text-lg tracking-wide'>
          This project is a full-stack web application built with React, Next.js, and TypeScript, featuring a responsive UI styled using Tailwind CSS. It leverages Supabase for authentication, database management, and file storage, while Node.js powers backend functionality. The application is optimized for mobile and desktop experiences and is statically deployed on Vercel for reliable, high-performance delivery.
          </p>
          <Link
            href='https://scalf-theta.vercel.app/'
            target='_blank'
            referrerPolicy='no-referrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </Link>
          <Link
            href='https://github.com/owaremarcus59-gif/scalf.git'
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
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Node.Js
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Vercel
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Supabase
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Typescript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Supabase
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next.Js
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className="text-wrap"/> Supabase Storage
              </p>
  
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer text-2xl underline-offset-3'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default dashboard;
