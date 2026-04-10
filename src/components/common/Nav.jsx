import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import React, { useRef, useState } from 'react'

const pages = ["home", 'project', 'about', 'contact', 'resume']
const Nav = () => {
    const [position, setPosition] = useState(0)

    return (
        <header className='w-full h-[15vh] fixed flex items-center justify-center '>
            <nav className='relative w-1/2 px-[2px] h-9/12 rounded-full bg-white/20 backdrop-blur-2xl border border-white flex items-center '>
                {
                    pages.map((page) => (
                        <NavItem setPosition={setPosition}>{page}</NavItem>
                    ))
                }
                <Cursor position={position} />
            </nav>
        </header>
    )
}

const NavItem = ({ children, setPosition }) => {
    const ref = useRef(null);
    function handleNavClick() {
        if (!ref.current) return;
        setPosition(ref.current.offsetLeft*0.99);
    }

    return (
        <div
            onClick={handleNavClick}
            ref={ref}
            className='w-1/5 h-[90%]  text-white capitalize  font-bold text-2xl flex items-center justify-center rounded-full '
        >
            {children}
        </div>
    )

}


const Cursor = ({ position }) => {
    const ref = useRef(null);
    console.log(position);
    useGSAP(() => {

        gsap.to(ref.current, {
            x: position
        })
    }, [position])

    return (
        <div ref={ref} className='w-1/5 h-[90%] bg-white/30  rounded-full absolute ' />
    )

}


export default Nav

