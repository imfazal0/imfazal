import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all';
import React, { useRef } from 'react'

const CenterDiv = () => {
    const meshRef = useRef(null);
    useGSAP(()=>{
            gsap.to(meshRef.current,{
                rotate:360,
                scale:1.2,
                repeat:-1,
                duration:50,
            })

    });

  return (
    <div className='w-screen h-screen fixed -z-10 bg-black '>

        <div className='w-full h-full relative blur-3xl opacity-40 ' ref={meshRef}>
            <div className='h-[90%] aspect-square absolute left-1/4  bg-purple-700 rounded-full opacity-50  '></div>
            <div className='h-[90%] aspect-square absolute right-1/5 bg-blue-700 rounded-full   opacity-50'></div>
        </div>

    </div>
  )
}

export default CenterDiv