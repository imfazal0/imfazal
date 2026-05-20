import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router'

const pages = ["home", 'project', 'about', 'contact', 'resume']
const Nav = () => {
    const [position, setPosition] = useState(0)

    return (
        <header className='w-full md:h-[15vh] h-[8vh] fixed flex items-center justify-center z-20'>
            <nav className='relative md:w-1/2 w-[90%] px-0.5  md:h-9/12 h-[60%] rounded-full bg-white/20 backdrop-blur-2xl border border-white flex items-center '>
                {
                    pages.map((page) => (
                        <NavItem key={page} setPosition={setPosition}>{page}</NavItem>
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
        <Link to={`/${children}`} className='w-1/5  md:h-[90%] h-full select-none text-white capitalize  font-bold md:text-2xl text-sm flex items-center justify-center rounded-full '>
        <div
        onClick={handleNavClick}
        ref={ref}
         className='w-full h-full flex items-center justify-center'
        >
            {children}
        </div>
        </Link>

    )

}


const Cursor = ({ position }) => {
    const ref = useRef(null);
    console.log(ref.current);
    useGSAP(() => {

        gsap.to(ref.current, {
            x: position
        })
    }, [position])

    return (
        <div ref={ref} className='w-1/5 md:h-[90%] h-full bg-white/30  rounded-full absolute ' />
    )

}


export default Nav

