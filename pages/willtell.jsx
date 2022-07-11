import React from 'react'
import willtellImg from '../public/assets/projects/willtell.png'
import Image from 'next/image';
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link';

const willtell = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={willtellImg} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Willtell Website</h2>
                <h3>Wordpress website met Bootstrap & custom thema</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>
                    In mijn afstudeerstage heb ik een opdracht gekregen waar ik volledige controle over had. Ik mocht een website voor een klant bouwen. Uiteraard
                    wel volgens het ontwerp. In 2 weken tijd heb ik een website met Wordpress en Bootstrap opgezet. Hierin zaten ook verschillende plug-ins verwerkt.
                    Éen van de plug-ins was ACF, oftewel Advanced Custom Fields. Deze plug-in maakt content beheersbaar via het CMS door het gebruik van variabelen in de code.
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
                            <RiRadioButtonFill className='pr-1' /> Photoshop
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

export default willtell