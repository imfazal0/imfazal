import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";



const pages = [
  "home",
  "project",
  "about",
  "contact",
  "resume",
];

const Nav = () => {
  const location = useLocation();

  const [position, setPosition] = useState(0);

  
  useEffect(() => {

    const currentPath = location.pathname.replace("/", "");

    const index = pages.indexOf(currentPath);

    const safeIndex = index === -1 ? 0 : index;

    setPosition(safeIndex);

  }, [location.pathname]);

  return (
    <header
      className="
        w-full
        md:h-[15vh]
        h-[8vh]
        fixed
        top-0
        left-0
        flex
        items-center
        justify-center
        z-50
      "
    >
      <nav
        className="
          relative
          md:w-1/2
          w-[92%]
          md:h-[70%]
          h-[75%]
          px-1
          rounded-full
          bg-white/10
          backdrop-blur-2xl
          border border-white/20
          flex
          items-center
          overflow-hidden
        "
      >
        <Cursor position={position} />

        {pages.map((page) => (
          <NavItem
            key={page}
            page={page}
          />
        ))}
      </nav>
    </header>
  );
};


const NavItem = ({ page }) => {
  return (
    <Link
      to={`/${page}`}
      className="
        relative z-10
        w-1/5
        h-full
        flex
        items-center
        justify-center
        rounded-full
        text-white
        capitalize
        font-bold
        md:text-xl
        text-[11px]
        transition-all
        duration-300
        hover:text-white/90
        select-none
      "
    >
      {page}
    </Link>
  );
};

const Cursor = ({ position }) => {

  const ref = useRef(null);

  useGSAP(() => {

    gsap.to(ref.current, {
      x: `${position * 100}%`,
      duration: 0.4,
      ease: "power3.out",
    });

  }, [position]);

  return (
    <div
      ref={ref}
      className="
        absolute
        left-0
        top-0
        w-1/5
        h-full
        bg-white/20
        rounded-full
      "
    />
  );
};

export default Nav;