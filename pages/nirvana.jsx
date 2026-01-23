import Image from 'next/image';
import React from 'react';
import scalf from '../public/assets/scalf.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const nirvana = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1 obje'
          layout='fill'
          objectFit='cover'
          src={scalf}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Nirvana News</h2>
          <h3>Typescript | Next Js | Tailwindcss | Newsapi </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This appplication was built using Next.JS,NewsApi,Typescript  and  is styled with
            Tailwind CSS. The application is hosted  on Vercel.
            This is a mobile responsive website and renders extremely well on all screen sizes.The project utilizes the new app directory for next.js 13.4. It uses server components  for better application performance making the more work loads happend on the sever rather than the  client side.
           
          </p>
          <Link
            href='https://nirvana-two.vercel.app/'
            target='_blank'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Live</button>
          </Link>
          <Link
            href='https://github.com/Weten-Ogen/react-restaurant-app'
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
                <RiRadioButtonFill className='pr-1' /> Newsapi
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
