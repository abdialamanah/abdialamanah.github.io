import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from "@/tailwind.config"

const Projects = () => {
  return (
    <div className='pt-32 pb-20 px-2 sm:px-20 text-center'>
      <div className='max-w-md mx-auto'>
        <h3 className='text-xs uppercase tracking-widest text-purple'>Featured Projects</h3>
        <h1 className='text-3xl font-bold '>programming language for this website</h1>
        <p className='pt-3 text-[15px] text-slate-200'>Collection of web solutions that showcase my skills in design and development.</p>
      </div> 
      <div className='mt-20 grid grid-cols-1 md:grid-cols-2 gap-5'>
        {
          projects.map(project => (
            <ProjectCard key={project.id} title={project.title} description={project.description} img={project.img}  />
          ))
        }
      </div>  
    </div>
  )
}

export default Projects
