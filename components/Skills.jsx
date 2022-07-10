import Image from 'next/image';
import React from 'react';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
            <h2 className='py-4'>Mijn vaardigheden:</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image 
                        src='/../public/assets/skills/html.png' 
                        width='64px' 
                        height='64px' 
                        alt='/' 
                    />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>HTML</h3>
                </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image 
                        src='/../public/assets/skills/css.png' 
                        width='64px' 
                        height='64px' 
                        alt='/' 
                    />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>CSS</h3>
                </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image 
                        src='/../public/assets/skills/javascript.png' 
                        width='64px' 
                        height='64px' 
                        alt='/' 
                    />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>JavaScript</h3>
                </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image 
                        src='/../public/assets/skills/php.png' 
                        width='100px' 
                        height='64px' 
                        alt='/' 
                    />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>PHP</h3>
                </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image 
                        src='/../public/assets/skills/xampp.png' 
                        width='64px' 
                        height='64px' 
                        alt='/' 
                    />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>XAMPP</h3>
                </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image 
                        src='/../public/assets/skills/wordpress.png' 
                        width='64px' 
                        height='64px' 
                        alt='/' 
                    />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Wordpress</h3>
                </div>
            </div>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Skills