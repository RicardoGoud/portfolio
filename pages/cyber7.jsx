import React from 'react'
import cyber7Img from '../public/assets/projects/cyber7.png'
import Image from 'next/image';
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link';

const cyber7 = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={cyber7Img} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Cyber7</h2>
                <h3>Wordpress Website</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>
                    In mijn eerste stage had ik, vergeleken met nu, weinig kennis. Echter besloot mijn stagebedrijf dat het een goede uitdaging was om de interne website aan te pakken.
                    Deze website was ooit snel in elkaar gezet, en viel nu door ouderdom en achterstallig onderhoud uit elkaar. Ik mocht toen volledig zelf bepalen hoe de website eruit kwam te zien.
                    Elke dag hadden we een stand-up, waarin we de voortgang besproken en er feedback gegeven werd op mijn werk. Ik heb van dit project mijn examenproject gemaakt en heb het hiermee 
                    met een G afgerond. Deze website werd gebouwd met Wordpress, een eigen thema en diverse plug-ins, waaronder Elementor Pro. Ook kreeg ik hier voor het eerst te maken met het 
                    daadwerkelijk hosten van een website.
                </p>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Methodieken:</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> PHP
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> HTML
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Wordpress
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Hosting
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Elementor Pro
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

export default cyber7