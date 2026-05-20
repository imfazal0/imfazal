import React from 'react'
import ProjectCard from './ProjectCard'
import { projectsData } from '../../../public/data/projects.data'

const Projects = () => {
  return (
    <main className='bg-transparent  py-[20vh] px-[5vw] flex flex-wrap gap-5'>
        {
            projectsData.map((project) => {
                return(
                    <ProjectCard project={project}/>
                )
            })
        }
    </main>
  )
}

export default Projects