import React from 'react'
import CenterDiv from './components/common/CenterDiv'
import Main from './components/landing/Main'
import Nav from './components/common/Nav'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProjectCard from './components/landing/ProjectCard'
import MotionPathPlugin from 'gsap/MotionPathPlugin'
import Thanks from './components/landing/Thanks'
import Footer from './components/landing/Footer'

const App = () => {
  gsap.registerPlugin(SplitText)
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(MotionPathPlugin);

  return (
    <div className='w-full h-full '>
      <Nav/>
        <CenterDiv/>
        <Main/>
        <ProjectCard/>
        <Thanks/>
        <Footer/>
    </div>
  )
}

export default App