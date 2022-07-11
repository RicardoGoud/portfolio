import React from 'react'
import portfolioImg from '../public/assets/projects/portfolio.png'
import Image from 'next/image';
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link';

const portfolio = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={portfolioImg} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Portfolio</h2>
                <h3>NextJS & TailwindCSS</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>
                    Na het succesvol behalen van mijn diploma besloot ik als éen van mijn eerste projecten een portfolio te bouwen. Na wat zoekwerk naar een nieuw framework
                    kwam ik NextJS tegen. Dit in combinatie met TailwindCSS vormt een sterke basis voor websites zoals portfolio's. Nadat ik deze website gebouwd had, heb ik 
                    deze gehost bij Vercel en een eigen domein gekocht. Deze website dus :) <br />
                    Ik ben dan ook van plan deze website uit te breiden met nieuwe projecten, de algemene status van deze website te verbeteren en mijn kennis te verbreden.
                </p>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Methodieken:</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> NextJS
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> TailwindCSS
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Hosting
                        </p>

                    </div>
                </div>
            </div>
            <Link href='/#projects'>
                <p className='underline cursor-pointer'>Terug</p>
            </Link>
        </div>
    </div>
  )
}

export default portfolio