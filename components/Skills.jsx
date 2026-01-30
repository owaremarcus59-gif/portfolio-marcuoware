import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import Google from '../public/assets/skills/google-cloud.png';
import Redux from '../public/assets/skills/redux.png'
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Python from '../public/assets/skills/python.png';
import C from '../public/assets/skills/c.png';
import Mongo from '../public/assets/skills/mongo.png';
import Node from '../public/assets/skills/node.png';
import Github from '../public/assets/skills/github1.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.png'


const Skills = () => {
  return (
    <div id='skills' className='w-full p-2 '>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className=' gap-8 p-2 max-w-[1100px]  '>
          {/* Frontend */}
          <div className=' max-w-[1240px] grow my-4'>
            <p className='uppercase tracking-widest text-center lg:text-left text-2xl '>frontend</p>
            <section className='flex flex-wrap gap-4 p-4'>

              <div className=' sm:max-w-[200px] p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2  gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Html} width='34px' height='34px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>HTML</h3>
                </div>
              </div>
            </div>

            <div className=' sm:max-w-[200px] p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                <div className=' m-auto'>
                  <Image src={Css} width='34px' height='34px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>CSS</h3>
                </div>
              </div>
            </div>

            <div className=' sm:max-w-[200px] p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={ReactImg} width='34px' height='34px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>React</h3>
                </div>
              </div>
            </div>

            <div className=' sm:max-w-[200px] p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Tailwind} width='34px' height='34px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Tailwind</h3>
                </div>
              </div>
            </div>
            <div className=' sm:max-w-[200px]  p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Firebase} width='34px' height='34px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Firebase</h3>
                </div>
              </div>
            </div>

            <div className=' sm:max-w-[200px]  p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Redux} width='34px' height='34px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>redux</h3>
                </div>
              </div>
            </div>


            <div className=' sm:max-w-[200px] p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Javascript}
                   width='34px'
                    height='34px' 
                    alt='/' 

                    />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>JavaScript</h3>
                </div>
              </div>
            </div>

            </section>
          </div>


          {/* Backend */}
          <div className='gap-3 max-w-[1240px] my-4'>
          <p className='uppercase tracking-widest text-center lg:text-left text-2xl '>backend</p>
              <section className='sm:flex gap-4 p-4 '>
                <div className=' sm:max-w-[200px] p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image 
                  src={Node} 
                  width='34px' 
                  height='34px' 
                  alt='/' 
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Node JS</h3>
                </div>
              </div>
            </div>

            <div className=' sm:max-w-[200px]  p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Google} width='34px' height='34px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Google Cloud</h3>
                </div>
              </div>
            </div>

            <div className=' sm:max-w-[200px] p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Mongo} width='34px' height='34px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Mongo</h3>
                </div>
              </div>
            </div>


              </section>


          </div>



          {/* Fullstack */}
          <div className='gap-3 my-4 max-w-[1240px]'>
          <p className='uppercase tracking-widest text-center lg:text-left text-2xl '>fullstack / others</p>
            <section className='flex flex-wrap  gap-4'>

               
            <div className=' sm:max-w-[200px] p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Github} width='34px' height='34px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Github</h3>
                </div>
              </div>
            </div>

            <div className=' sm:max-w-[200px] p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={NextJS} width='34px' height='34px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Next</h3>
                </div>
              </div>
            </div>

            <div className=' sm:max-w-[200px] p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Python} width='34px' height='34px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Python</h3>
                </div>
              </div>

            </div>
            
            <div className=' sm:max-w-[200px] p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={C} width='34px' height='34px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>C lang</h3>
                </div>
              </div>
            </div>
        
            </section>
          </div>
          
         
          
         

        </div>
      </div>
    </div>
  );
};

export default Skills;
