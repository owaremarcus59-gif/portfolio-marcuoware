import Image from 'next/image';
import scalf from '../public/assets/bornwire.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const socio = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10 object-contain overflow-none' />
        <Image
        className='w-full absolute z-1 h-[50vh]  object-cover'
          width={800}
          height={500}
          src={scalf}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Bornwire Shop</h2>
          <h3>Next.Js / Tailwind / Supabase / Postgres / React.Js / Vercel</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p className='max-w-4xl leading-7 text-lg tracking-wide'>
          Bornwire is an online store celebrating African heritage, built with React.js, styled with Tailwind CSS, and deployed on Vercel. The platform showcases premium Kente clothing and cultural products, offering users an engaging shopping experience with rich imagery and intuitive navigation. It highlights the craftsmanship behind each piece, tells the story of traditional weaving, and provides seamless browsing through products, testimonials, and services — all optimized for a responsive experience across devices.
          </p>
          <Link
            href='https://github.com/kentemall2025-tech/bornwire.git'
            target='_blank'
           
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </Link>
          <Link
            href='https://socio-mauve.vercel.app'
           target='_blank'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
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

export default socio;
