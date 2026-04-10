import React from 'react'
import CenterDiv from './components/common/CenterDiv'
import Main from './components/landing/Main'
import Nav from './components/common/Nav'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const App = () => {
  gsap.registerPlugin(SplitText)
  gsap.registerPlugin(ScrollTrigger)
  return (
    <div className='w-full h-full '>
      <Nav/>
        <CenterDiv/>
        <Main/>
    </div>
  )
}

export default App