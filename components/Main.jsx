import React from 'react';
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text=sm tracking-widest text-gray-600'>Lorem ipsum dolor sit amet, consectetur</p>
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
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main