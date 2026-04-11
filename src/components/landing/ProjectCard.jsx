import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';
import React, { useRef } from 'react'

const ProjectCard = () => {
    const ref = useRef(null);
    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:ref.current,
                // markers:true,
                start:'top top',
                end:'+2500 top',
                pin:true,
                scrub:true
            }})

            tl.from('.card',{
                opacity:0,
                stagger:1
            }).to('.card',{
                rotate:10
            },).to('.card',{
                rotate:360,
                borderRadius:'50%',
                x:1500,
                stagger:1,
                reversed:true,
            })

            gsap.to('.card',{
                y:-5,
                duration:1,
                yoyo:true,
                repeat:-1
            },)



    })
  return (
    <div ref={ref} className='overflow-x-hidden w-screen h-screen flex items-center justify-center relative gap-10'>
            <div className='card h-[60%] aspect-square   bg-white/20 border border-white rounded-2xl bottom-0 -rotate-12 text-white text-2xl uppercase font-semibold p-[2%] py-[5%] flex flex-col items-center gap-5'>
                <div>senior secondary</div>
                <div className='capitalize text-gray-400'>
                    Completed Senior Secondary education from the UP Board with 90% overall marks, specializing in Physics, Chemistry, and Mathematics (PCM).
                </div>
                <div className='w-1/2 flex  items-center justify-center bg-white/40 border border-white rounded-full hover:bg-white/20 '>view More</div>
            </div>
            <div className='card h-[60%] aspect-square   bg-white/20 border border-white rounded-2xl bottom-0 -rotate-12 text-white text-2xl uppercase font-semibold p-[2%]  flex flex-col items-center gap-5'>
                <div>Graduation</div>
                <div className='capitalize text-gray-400'>
                    Bachelor of Computer Applications (BCA), MJP Rohilkhand University — Expected Graduation: 2027; currently developing a solid foundation in programming, data structures, and software development, with a focus on building practical, real-world applications.
                </div>
                <div className='w-1/2 flex  items-center justify-center bg-white/40 border border-white rounded-full hover:bg-white/20 '>view More</div>
            </div>
            <div className='card h-[60%] aspect-square   bg-white/20 border border-white rounded-2xl bottom-0 -rotate-12 text-white text-2xl uppercase font-semibold p-[2%] py-[5%] flex flex-col items-center gap-5'>
                <div>Technical Skills</div>
                <div className='capitalize text-gray-400'>
                     HTML, CSS , Tailwind, JavaScript (ES6+), React.js; GSAP for animations; Firebase (Auth, Firestore, Hosting); Python; Git & GitHub; strong in responsive UI, debugging, and building practical web applications.
                </div>
                <div className='w-1/2 flex  items-center justify-center bg-white/40 border border-white rounded-full hover:bg-white/20 '>view More</div>
            </div>
           
    </div>
  )
}

export default ProjectCard