import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all';
import React, { useRef, useState } from 'react'

const ProjectCard = () => {
    const [showComplete ,setShowComplete] = useState(false);

    const boxRef = useRef(null);
    const gitRef = useRef(null);
    const disRef = useRef(null);
    const checkRef = useRef(null);
    const tlRef = useRef(null);


    useGSAP(()=>{
        const tl = gsap.timeline({paused:true});

        tl.to(boxRef.current,{
            width:"100%",
            duration:0.5
        },'a').to(disRef.current,{
            display:"flex"
        },'a').from(gitRef.current,{
            display:"none",
            x:5,
            opacity:0
        },'b').from(checkRef.current,{
            display:"none",
            x:5,
            opacity:0
        },'b')

        tlRef.current = tl;

    },[])

    useGSAP(()=>{
        if (showComplete) {
            return tlRef.current.play();
        }
        else if(!showComplete){
            return tlRef.current.reverse();
        }

    },[showComplete])

    return (
        <section ref={boxRef} onClick={()=>setShowComplete(prev => (!prev))} className="select-none project-card w-[49%] aspect-video  bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white p-6  gap-5 shadow-xl ">

            <div className='h-1/2 w-full flex bg-amber-200 rounded-2xl overflow-hidden'>
                <div className='w-full h-full bg-green-400'></div>
                <div ref={disRef} className=' hidden w-full h-full bg-red-400'></div>
            </div>
            <div className='w-full  p-2 flex flex-col  '>
                <div className='text-3xl font-bold truncate'>
                    CALCULATOR
                </div>
                <div>
                    React Native Expo
                    React Context API For State Management
                    NativeWind For Styling
                </div>
                <div className='my-5 h-[10vh] flex gap-2 font-bold text-xl '>
                    <div className='w-1/5 h-full flex flex-col items-center justify-center   bg-white/10 backdrop-blur-md border border-white/50 rounded-2xl text-white shadow-xl '>React</div>
                    <div className='w-1/5 h-full  bg-white/10 backdrop-blur-md border border-white/50 rounded-2xl text-white shadow-xl '></div>
                    <div className='w-1/5 h-full  bg-white/10 backdrop-blur-md border border-white/50 rounded-2xl text-white shadow-xl '></div>
                </div>
            </div>
            <div className='w-full flex flex-col gap-2 '>
                <div ref={gitRef} className='w-full h-[10vh]  flex items-center justify-center   bg-white/10 backdrop-blur-md border border-white/50 rounded-2xl text-white shadow-xl '> github </div>
                <div ref={checkRef} className='w-full h-[10vh]  flex items-center justify-center   bg-white/10 backdrop-blur-md border border-white/50 rounded-2xl text-white shadow-xl '> Check Out Live</div>
            </div>
        </section>
    )
}

export default ProjectCard
