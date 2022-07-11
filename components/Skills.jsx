import Image from 'next/image';
import React from 'react';
import htmlImg from '../public/assets/skills/html.png'
import cssImg from '../public/assets/skills/css.png'
import javascriptImg from '../public/assets/skills/javascript.png'
import phpImg from '../public/assets/skills/php.png'
import xamppImg from '../public/assets/skills/xampp.png'
import wordpressImg from '../public/assets/skills/wordpress.png'
import photoshopImg from '../public/assets/skills/photoshop.png'
import lightroomImg from '../public/assets/skills/lightroom.png'
import adobexdImg from '../public/assets/skills/adobe-xd.png'
import bootstrapImg from '../public/assets/skills/bootstrap.png'
import blenderImg from '../public/assets/skills/blender.png'
import scssImg from '../public/assets/skills/sass.png'
import tailwindImg from '../public/assets/skills/tailwindcss.png'

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
                        src={htmlImg} 
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
                        src={cssImg} 
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
                        src={javascriptImg}
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
                        src={phpImg}
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
                        src={xamppImg}
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
                        src={wordpressImg} 
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

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image 
                        src={photoshopImg} 
                        width='64px' 
                        height='64px' 
                        alt='/' 
                    />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Photoshop</h3>
                </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image 
                        src={lightroomImg} 
                        width='64px' 
                        height='64px' 
                        alt='/' 
                    />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Lightroom</h3>
                </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image 
                        src={bootstrapImg} 
                        width='64px' 
                        height='64px' 
                        alt='/' 
                    />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Bootstrap</h3>
                </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image 
                        src={blenderImg} 
                        width='80px' 
                        height='64px' 
                        alt='/' 
                    />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Blender 3D</h3>
                </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image 
                        src={adobexdImg} 
                        width='64px' 
                        height='64px' 
                        alt='/' 
                    />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Adobe XD</h3>
                </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image 
                        src={scssImg} 
                        width='85px' 
                        height='64px' 
                        alt='/' 
                    />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>SCSS (SASS)</h3>
                </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image 
                        src={tailwindImg} 
                        width='85px' 
                        height='64px' 
                        alt='/' 
                    />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>TailwindCSS</h3>
                </div>
            </div>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Skills