import React from 'react'
import CenterDiv from '../../components/common/CenterDiv'
import Main from './Main'
import ProjectCard from './ProjectCard'
import Thanks from './Thanks'

const Home = () => {
  return (
    <div className='w-full h-full'>
              <Main />
              <ProjectCard />
              <Thanks />
    </div>
  )
}

export default Home