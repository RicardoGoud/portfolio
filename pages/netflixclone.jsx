import React from 'react'
import netflixcloneImg from '../public/assets/projects/netflixclone.png'
import Image from 'next/image';
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link';

const portfolio = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={netflixcloneImg} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Netflix Clone</h2>
                <h3>ReactJS & TailwindCSS</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>
                    Momenteel ben ik bezig met het bouwen van een Netflix Clone. Deze bestaat voornamelijk uit ReactJS en TailwindCSS. Ook maakt deze applicatie gebruik van een API van The Movie Database (TMDB).
                    Zo worden onder de sectie &apos;trending&apos; ook daadwerkelijk momenteel trending films opgehaald. Dit geldt voor alle categorieën.
                    Ook kunnen gebruikers zichzelf registreren en vervolgens aanmelden. Dit wordt gedaan door middel van Firebase. Momenteel is de Authenticatie van Firebase in aanbouw.
                    Echter is het project en de voortgang hiervan al wel terug te vinden op GitHub.
                </p>
                <a
                    href='https://github.com/RicardoGoud/netflix-reactjs'
                    target='_blank'
                    rel='noreferrer'
                >
                    <button className='px-8 py-2 mt-4 mr-8'>GitHub</button>
                </a>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Methodieken:</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> ReactJS
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> TailwindCSS
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Firebase
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> API
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