import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import houdijkImg from '../public/assets/projects/houdijk.jpg'
import willtellImg from '../public/assets/projects/willtell.png'
import wadmImg from '../public/assets/projects/wadm.png'
import aurumImg from '../public/assets/projects/aurum.png'
import cyber7Img from '../public/assets/projects/cyber7.png'
import portfolioImg from '../public/assets/projects/portfolio.png'
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
                <ProjectItem 
                    title='Namegenerator' 
                    subtitle='80s Retro Website'
                    backgroundImg={wadmImg} 
                    projectUrl='/namegenerator'
                />
                <ProjectItem 
                    title='Aurum' 
                    subtitle='Digitaal dossier voor de zorg'
                    backgroundImg={aurumImg} 
                    projectUrl='/aurum'
                />
                <ProjectItem 
                    title='Cyber7' 
                    subtitle='Wordpress Website'
                    backgroundImg={cyber7Img} 
                    projectUrl='/cyber7'
                />
                <ProjectItem 
                    title='Portfolio' 
                    subtitle='NextJS & TailwindCSS'
                    backgroundImg={portfolioImg} 
                    projectUrl='/portfolio'
                />
            </div>
        </div>
    </div>
  )
}

export default Projects