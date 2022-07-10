import React from 'react';
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text=sm tracking-widest text-gray-600'>Don&apos;t wait. The time will never be just right.</p>
                <h1 className='py-4 text-gray-700'>
                    Hi, ik ben <span className='text-[#5651e5]' >Ricardo Goud</span>
                </h1>
                <h1 className='py-2 text-gray-700'>
                    Een pas afgestudeerde developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    Ik ben een recentelijk afgestudeerd developer die zich richt op het developen en deployen van websites en andere digitale uitingen. Momenteel ben ik mijn kennis aan het verbreden in deze grote branche.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <a href="https://www.linkedin.com/in/ricardo-goud-095652194/" target='_blank' rel="noreferrer">
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div>
                    </a>

                    <a href="https://github.com/RicardoGoud" target='_blank' rel="noreferrer">
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                    </div>
                    </a>

                    <a href="mailto:ricardogoud@gmail.com" target='_blank' rel="noreferrer">
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail />
                    </div>
                    </a>

                    <a href="#contact">
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                    </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main