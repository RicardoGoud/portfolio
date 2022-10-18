import React from 'react'
import aurumImg from '../public/assets/projects/aurum.png'
import Image from 'next/image';
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link';

const aurum = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={aurumImg} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>AURUM</h2>
                <h3>Digitaal dossier voor de zorg</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>
                    Éen van de grootste projecten die wij op school hebben verwerkt was Aurum, een ECD (Elektronisch Cliënten Dossier). Het project betreft een digitale omgeving
                    voor alle mensen in de zorg. Denk hierbij aan doktoren, ziekenhuismedewerkers, apothekers, verzekeringsmaatschappijen maar ook de cliënt zelf. In dit project
                    heb ik geleerd hoe te werken met rollen. Hoe krijgt de ene gebruiker iets anders te zien dan een volgende gebruiker. Een verzekeraar kan nieuwe cliënten aanmaken
                    die automatisch aan de desbetreffende verzekeringsmaatschappij wordt toegewezen. Een dokter kan medicijnen voorschrijven voor cliënten die bij hem in de huisartspraktijk
                    staan ingeschreven. De apotheker kan dan vervolgens op zijn beurt de medicijnen klaarzetten en een bevestiging naar de cliënt sturen.
                    Het ziekenhuis kan mensen toevoegen aan kamers en een specifiek bed. De verblijfstijd van de cliënt wordt automatisch bijgehouden en komt terug op de automatisch gegenereerde
                    factuur aan het eind van het ziekenhuisbezoek.
                </p>
                <a
                    href='https://github.com/RicardoGoud/Aurum'
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
                            <RiRadioButtonFill className='pr-1' /> PHP
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> HTML
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> XAMPP
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Hosting
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Adobe XD
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

export default aurum