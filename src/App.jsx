import React from 'react'
import CenterDiv from './components/common/CenterDiv'
import Main from './pages/landing/Main'
import Nav from './components/common/Nav'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProjectCard from './pages/landing/ProjectCard'
import MotionPathPlugin from 'gsap/MotionPathPlugin'
import Thanks from './pages/landing/Thanks'

import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/landing/Home'
import Projects from './pages/projects/Projects'
import Footer from './components/common/Footer'
import About from './pages/About/About'

const App = () => {
  gsap.registerPlugin(SplitText)
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(MotionPathPlugin);

  return (
    <div className='w-full h-full '>
      <BrowserRouter>
        <Nav />
        <CenterDiv />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/project' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Home />} />
          <Route path='/resume' element={<Home />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  )
}

export default App