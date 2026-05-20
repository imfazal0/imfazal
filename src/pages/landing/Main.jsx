import React, { useRef } from 'react'
import HeroText from './HeroText'
import Overlay from './Overlay'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';
import ProjectCard from './ProjectCard';

const Main = () => {
    const ref = useRef(null);
   // Main.js - Cleaned up version
useGSAP(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ref.current,
            pin: true,
            scrub: true,
            start: 'top top',
            end: '+=3000' // More explicit end point
        }
    });
    
    tl.to('.hero', {
        scale: 0.5,
        duration: 1
    })
    .to('.text1', {
        opacity: 0,
        display: "none",
        duration: 0.5
    })
    .to('.text2', {
        opacity: 1,
        duration: 0.5
    })
    .to('.text2', {
        opacity: 0,
        duration: 0.5
    })
    .to('.overlay', {
        y: "-100%",
        duration: 1
    })
    .to('.text3', {
        opacity: 1,
        duration: 0.5
    })
    // Cards fade in AND move simultaneously
    .to('.left', {
        opacity: 1,
        y: -100,
        stagger: 0.15,
        duration: 1
    }, '<') // Start with previous animation
    .to('.right', {
        opacity: 1,
        y: -50,
        stagger: 0.15,
        duration: 1
    }, '<')
    .to('.r-left', {
        opacity: 1,
        y: -100,
        stagger: 0.15,
        duration: 1
    }, '<')
    .to('.r-right', {
        opacity: 1,
        y: -50,
        stagger: 0.15,
        duration: 1
    }, '<');
    // Remove the final opacity:0 unless you want cards to disappear
})


    return (
        <div ref={ref} className='w-screen h-1/2 bg-transparent z-10 text-white  '>
            <HeroText />
            <Overlay />
        </div>
    )
}

export default Main