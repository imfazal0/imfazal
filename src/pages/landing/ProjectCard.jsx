import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = () => {
  const ref = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".project-card");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
        end: "bottom center",
        scrub: 1,
      },
    });

    tl.from(cards, {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    }).to(cards, {
      rotate: 3,
      stagger: 0.1,
    });

    cards.forEach((card, index) => {
      gsap.to(card, {
        y: -2,
        duration: 2 + index * 0.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <div
      ref={ref}
      className="w-full min-h-screen px-4 py-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-6 overflow-x-hidden"
    >
      {/* Card 1 */}
      <div className="project-card w-full max-w-sm min-h-80 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white p-6 flex flex-col gap-5 shadow-xl">
        <h2 className="text-xl md:text-2xl font-semibold uppercase text-center">
          Senior Secondary
        </h2>

        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
          Completed Senior Secondary education from the UP Board with 90%
          overall marks, specializing in Physics, Chemistry, and Mathematics
          (PCM).
        </p>

        <button className="mt-auto py-3 rounded-full bg-white/20 border border-white hover:bg-white/10 transition">
          View More
        </button>
      </div>

      {/* Card 2 */}
      <div className="project-card w-full max-w-sm min-h-80 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white p-6 flex flex-col gap-5 shadow-xl">
        <h2 className="text-xl md:text-2xl font-semibold uppercase text-center">
          Graduation
        </h2>

        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
          Bachelor of Computer Applications (BCA), MJP Rohilkhand University —
          Expected Graduation: 2027; currently building strong foundations in
          programming, DSA, and real-world software development.
        </p>

        <button className="mt-auto py-3 rounded-full bg-white/20 border border-white hover:bg-white/10 transition">
          View More
        </button>
      </div>

      {/* Card 3 */}
      <div className="project-card w-full max-w-sm min-h-80 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white p-6 flex flex-col gap-5 shadow-xl">
        <h2 className="text-xl md:text-2xl font-semibold uppercase text-center">
          Technical Skills
        </h2>

        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
          HTML, CSS, Tailwind, JavaScript (ES6+), React.js, GSAP, Firebase,
          Python, Git & GitHub with strong focus on responsive UI and practical
          web applications.
        </p>

        <button className="mt-auto py-3 rounded-full bg-white/20 border border-white hover:bg-white/10 transition">
          View More
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
