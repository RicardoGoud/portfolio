import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import aboutImg from '../public/assets/ricardo-goud.jpg';

const About = () => {
    const birthdate = '2003-07-16';
    const age = calculateAge(birthdate);

  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Wie ben ik:</h2>
                <p className='py-2 text-gray-600'>
                Ik ben Ricardo Goud, {age} jaar en wonend in Ridderkerk. In juni 2022 heb ik de opleiding Applicatie- 
                & Mediaontwikkelaar op het Hoornbeeck College in Rotterdam afgerond. In deze opleiding heb ik tweemaal
                stage mogen lopen, die mij beide veel kennis hebben opgeleverd. Ik heb besloten om na deze 3 schooljaren
                mijn kennis in de praktijk te willen brengen. Ikzelf leerde het meest van de stages. Het mogen proeven van het
                bedrijfsleven leverde mij vaak in +- 20 weken net zoveel kennis op als een geheel schooljaar. Daarom werk ik sinds november 2022 met veel passie
                bij <a href='https://growteq.nl/medewerkers/ricardo-goud/' target='_blank' className='text-[#5651e5]'>Growteq</a> als .NET developer.
                </p>
                <p className='py-2 text-gray-600'>
                Naast werk vind ik het leuk om bezig te zijn met mijn auto. Wassen, een rondje rijden of aan sleutelen, ik vind het allemaal leuk.
                In de weekenden ben ik graag rond vrienden, het maakt dan niet uit wat we doen, een festival of thuis een film kijken. Daarnaast ben ik ook regelmatig graag sportief bezig.
                Sportschool, padellen en zaalvoetbal zijn grote hobby's van mij.
                Ook vind ik het leuk om mijzelf bezig te houden met welke vorm van development dan ook, ik geloof erin dat je jezelf altijd moet blijven uitdagen.
                Dit doe ik dan ook met eigen projecten. Deze website bijvoorbeeld :) <br />
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


const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
};