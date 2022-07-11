import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import aboutImg from '../public/assets/ricardo-goud.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Wie ben ik:</h2>
                <p className='py-2 text-gray-600'>
                Ik ben Ricardo Goud, 18 jaar en wonend in Ridderkerk. In juni 2022 heb ik de opleiding Applicatie- 
                & Mediaontwikkelaar op het Hoornbeeck College in Rotterdam afgerond. In deze opleiding heb ik tweemaal
                stage mogen lopen, die mij beide veel kennis hebben opgeleverd. Ik heb besloten om na deze 3 schooljaren
                mijn kennis in de praktijk te willen brengen. Ikzelf leerde het meest van de stages. Het mogen proeven van het
                bedrijfsleven leverde mij vaak in +- 20 weken net zoveel kennis op als een geheel schooljaar.
                </p>
                <p className='py-2 text-gray-600'>
                Naast school en werk vind ik het leuk om bezig te zijn met mijn auto. Wassen, een rondje rijden of aan sleutelen, ik vind het allemaal leuk.
                Ik ben dan ook, sinds ik mijn rijbewijs heb, een parttime bezorger bij DHL. De vrije tijd die ik over houd besteed ik graag aan de sportschool.
                In de weekenden ben ik graag rond vrienden, het maakt dan niet uit wat we doen, stappen of thuis een film kijken, ik vind het allemaal best.
                Ook vind ik het leuk om mijzelf bezig te houden met welke vorm van development dan ook. Ik ben immers klaar met school, dus vind ik het leuk om mezelf uit te
                dagen met eigen projecten. Deze website bijvoorbeeld :) <br />
                </p>
                <Link href="/#projects"><p className='py-2 text-gray-600 underline cursor-pointer'>Bekijk hier mijn bijdragen & projecten.</p></Link>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src={aboutImg} alt='/' />
            </div>
        </div>
    </div>
  )
}

export default About