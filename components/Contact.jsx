import React from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Link from 'next/link';
import Image from 'next/image';
import contactImg from '../public/assets/ricardo-goud.jpeg'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                Contact
            </p>
            <h2 className='py-4'>Get in touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div className='hover:scale-105 ease-in duration-300'>
                            <Image className='rounded-xl' src={contactImg} alt='/' />
                        </div>
                        <div>
                            <h2 className='py-2'>Ricardo Goud</h2>
                            <p>Developer</p>
                            <p className='py-4'>Verdere vragen of opmerkingen? Ik hoor het graag! Neem via deze weg contact met mij op.</p>
                        </div>
                    <div>
                        <p className='uppercase pt-8'>Connect with me</p>
                        <div className='flex items-center justify-between py-4'>
                            <a href="https://www.linkedin.com/in/ricardo-goud-095652194/" target='_blank' rel="noreferrer">
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:text-[#5651e5] hover:scale-110 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>
                            </a>

                            <a href="https://github.com/RicardoGoud" target='_blank' rel="noreferrer">
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:text-[#5651e5] hover:scale-110 ease-in duration-300'>
                                    <FaGithub />
                                </div>
                            </a>

                            <Link href="/#contact">
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:text-[#5651e5] hover:scale-110 ease-in duration-300'>
                                    <AiOutlineMail />
                                </div>
                            </Link>

                            <a href="https://www.instagram.com/ricardo_goud/">
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:text-[#5651e5] hover:scale-110 ease-in duration-300'>
                                    <BsInstagram />
                                </div>
                            </a>
                        </div>
                    </div>
                    </div>
                </div>

                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Naam</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                </div>
                                <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Telefoonnummer</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Onderwerp</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Bericht</label>
                                <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='8'></textarea>
                            </div>
                            <button className='w-full p-4 text-gray-100 mt-4'>Stuur bericht</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30}/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact