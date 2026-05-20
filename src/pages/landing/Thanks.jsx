import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Thanks = () => {
    useGSAP(()=>{
      const tl = gsap.timeline({
        scrollTrigger:{
          start:'-100 top',
          end:'200 top',
          trigger:'.pp',
        }
      });

        tl.from('.h',{
          opacity:0,
          x:-100
        }).from('.p',{
          opacity:0,
          y:20
        })

    })
  return (
    <section className='pp w-screen h-screen overflow-hidden md:text-9xl text-6xl z-10 text-white flex items-center justify-center uppercase font-extrabold flex-col'>
        <h1 className='h'>Thanks</h1>
        <p className='p block  md:text-xl text-sm font-semibold'>For visiting my protfolio</p>
    </section>
  )
}

export default Thanks