import React from 'react'
import wadmImg from '../public/assets/projects/wadm.png'
import Image from 'next/image';
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link';

const namegenerator = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={wadmImg} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>WADM Namegenerator</h2>
                <h3>80s style retro website met scoreboards</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>
                    Mijn afstudeerproject was het bouwen van een namegenerator voor mijn bedrijf. Het hoofdkantoor van dit bedrijf zat destijds aan de waal,
                    vandaar dat het bedrijf een lange tijd Waal aan de Maas (WADM) heeft geheten. Echter is het hoofdkantoor verplaatst. De bedrijfsnaam heeft nu dus geen
                    betekenis meer. Er is toen besloten om klanten en collega&apos;s te laten brainstormen over een nieuwe naam. Hiervoor is toen een namegenerator bedacht.
                    De gebruiker laat zijn naam en emailadres achter, en vult vervolgens zijn of haar idee in over waar WADM voor zou kunnen staan. Dit komt, na goedkeuring vanuit
                    het CMS terug in verschillende scoreboards op de website. Andere gebruikers kunnen vervolgens stemmen op inzendingen. Eenmaal per jaar wordt er gekeken naar de
                    inzending met de meeste punten.
                </p>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Methodieken:</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Wordpress
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> PHP
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Bootstrap
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> ACF Forms
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Javascript
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

export default namegenerator