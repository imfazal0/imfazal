import React, { useRef } from 'react'
import HeroText from './HeroText'
import Overlay from './Overlay'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';

const Main = () => {
    const ref = useRef(null);
    useGSAP(() => {
        const tl = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: ref.current,
                    pin: true,
                    markers: true,
                    scrub: true,
                    start: 'top top',
                    end: 'bottom top'
                }
            }
        );

        tl.to('.hero', {
            scale: 0.5,
        },).to('.text1', {
            opacity: 0,
            display: "none"
        }).to('.text2', {
            opacity: 1,
        }, 'a').to('.text2',{
            opacity:0
        }).to('.overlay', {
            y: "-100%",
        }, 'a').to('.text3', {
            opacity: 1
        }, '+=1').to('.left', {
            opacity: 1,
            stagger: 0.11,
            y: -100
        }, 'a').to('.right', {
            opacity: 1,
            stagger: 0.11,
            y: -50,
        }, 'a').to('.r-left ', {
            opacity: 1,
            stagger: 0.11,
            y: -100
        }, 'a').to('.r-right', {
            opacity: 1,
            stagger: 0.11,
            y: -50
        }, 'a').to('.crd',{
            opacity:0
        })




    })
    return (
        <div ref={ref} className='w-screen h-[300vh] bg-transparent z-10 text-white '>
            <HeroText />
            <Overlay />
        </div>
    )
}

export default Main