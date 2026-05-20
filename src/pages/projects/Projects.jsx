import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className='bg-transparent  py-[20vh] px-[5vw] flex flex-wrap gap-5'>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
    </div>
  )
}

export default Projects