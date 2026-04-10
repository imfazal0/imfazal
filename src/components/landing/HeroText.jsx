import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import { SplitText } from 'gsap/SplitText'
import React, { useRef } from 'react'

const HeroText = () => {
    const ref = useRef(null)
    useGSAP(() => {
        const text = SplitText.create(ref.current, { type: "chars" });
        gsap.from(text.chars, {
            y: 50,
            opacity: 0,
            duration: 0.25,
            stagger: 0.01
        })
    })

    return (
        <div className='hero w-screen h-screen flex items-center justify-center relative'>
            <div ref={ref} className='text1 md:text-9xl text-5xl  text-center md:leading-40  uppercase font-semibold'>
                Crafting Digital <br /> Experiences
            </div>
            <div className='text2 md:text-9xl text-5xl opacity-0 absolute text-center md:leading-40  uppercase font-semibold'>
                Building digital products
            </div>
            <div className='text3 md:text-9xl text-5xl opacity-0 absolute text-center md:leading-40  uppercase font-semibold'>
                Creating seamless interactions
            </div>
        </div>
    )
}

export default HeroText