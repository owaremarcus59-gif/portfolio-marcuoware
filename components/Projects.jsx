import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import agyedabi from '../public/assets/agyedabi.png'
import bornwire from '../public/assets/bornwire.png'
import scalf from '../public/assets/scalf.png';
import ProjectItem from './ProjectItem';
import sneakers from '../public/assets/sneakers.png';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Agyedabi.Shop'
            backgroundImg={agyedabi}
            projectUrl='/agyedabi'
            tech='next.js,vercel,node.js'
          />
          <ProjectItem
            title='Bornwire.Shop'
            backgroundImg={bornwire}
            projectUrl='/bornwire'
            tech='next.Js, react.js, node.js'
          />
          <ProjectItem
            title='Scalf.io'
            backgroundImg={scalf}
            projectUrl='/scalf'
            tech='next.js, supabase, postgresql'
          />
           <ProjectItem
            title='Sneaker-Merce'
            backgroundImg={sneakers}
            projectUrl='/sneakers'
            tech='next.js,tailwind'
          />
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
