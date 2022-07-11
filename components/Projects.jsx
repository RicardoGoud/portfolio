import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import houdijkImg from '../public/assets/projects/houdijk.jpg'
import willtellImg from '../public/assets/projects/willtell.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>Mijn projecten & bijdragen</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem 
                    title='Houdijk Configurator'
                    subtitle='WP website met custom PHP & image-maps' 
                    backgroundImg={houdijkImg} 
                    projectUrl='/houdijk'
                />
                <ProjectItem 
                    title='Willtell' 
                    subtitle='Volledige website met Bootstrap'
                    backgroundImg={willtellImg} 
                    projectUrl='/willtell'
                />
            </div>
        </div>
    </div>
  )
}

export default Projects