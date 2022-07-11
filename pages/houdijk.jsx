import React from 'react'
import houdijkImg from '../public/assets/projects/houdijk.jpg'
import Image from 'next/image';
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link';

const houdijk = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={houdijkImg} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Houdijk Configurator</h2>
                <h3>WP website met custom PHP & image-maps</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p className='py-2'>
                    In mijn afstudeerstage heb ik mogen werken voor verschillende klanten. Éen van deze klanten was Houdijk, een producent van fabrieksmachines voor het bereiden
                    van diverse soorten koekjes. Door een reeks van bepaalde machines achter elkaar te zetten komt er een gewenst soort product uit. Door middel van een configurator
                    kan de klant diverse opties kiezen. Denk hierbij aan de vorm van het koekje, de vulling, de verpakking, de hoeveelheid per verpakking etc.
                </p>
                <p className='py-2'>
                    Mijn deel in dit project was het vullen van deze configurator. Er zijn vandaag de dag ruim 50 mogelijkheden die alle 50 een andere uitkomst bieden.
                    Alle foto&apos;s van de aparte machines moesten worden toegevoegd in het CMS, de image-map moest gemaakt worden met behulp van Adobe Dreamweaver, waarvan
                    vervolgens de coördinaten aan de desbetreffende machine gehangen moest worden. Door dit project heb ik kennis opgedaan van diverse PHP functies, Dreamweaver,
                    Image-maps en het CMS Wordpress in combinatie met diverse plug-ins.
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
                            <RiRadioButtonFill className='pr-1' /> Image-maps
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Photoshop
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1 w-4 h-4' /> Adobe Dreamweaver
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

export default houdijk