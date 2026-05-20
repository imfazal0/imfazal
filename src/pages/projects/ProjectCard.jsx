import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

const ProjectCard = ({ project }) => {
    const [showComplete, setShowComplete] = useState(false);

    const boxRef = useRef(null);
    const disRef = useRef(null);
    const gitRef = useRef(null);
    const checkRef = useRef(null);

    const tlRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            paused: true,
            defaults: {
                ease: "power3.inOut",
            },
        });

        gsap.set([gitRef.current, checkRef.current], {
            opacity: 0,
            y: 20,
            pointerEvents: "none",
        });

        gsap.set(disRef.current, {
            opacity: 0,
            height: 0,
        });

        tl.to(boxRef.current, {
            width: window.innerWidth < 768 ? "100%" : "100%",
            duration: 0.5,
        })
            .to(
                disRef.current,
                {
                    height: "auto",
                    opacity: 1,
                    duration: 0.4,
                },
                "-=0.2"
            )
            .to(
                [gitRef.current, checkRef.current],
                {
                    opacity: 1,
                    y: 0,
                    pointerEvents: "auto",
                    stagger: 0.1,
                    duration: 0.3,
                },
                "-=0.2"
            );

        tlRef.current = tl;
    }, []);

    const handleToggle = () => {
        if (!tlRef.current) return;

        if (!showComplete) {
            tlRef.current.play();
        } else {
            tlRef.current.reverse();
        }

        setShowComplete((prev) => !prev);
    };

    return (
        <section
            ref={boxRef}
            className="
        w-full md:w-[48%]
        min-h-[450px]
        bg-white/10
        backdrop-blur-md
        border border-white/20
        rounded-3xl
        text-white
        p-4 md:p-6
        shadow-xl
        overflow-hidden
        flex flex-col
      "
        >
            <div className="w-full h-[220px] rounded-2xl overflow-hidden bg-zinc-800">
                <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="mt-5 flex flex-col flex-1">
                <h1 className="text-2xl md:text-3xl font-bold truncate">
                    {project.name}
                </h1>

                <p className="mt-3 text-sm md:text-base text-zinc-300 line-clamp-3">
                    {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                        <div
                            key={index}
                            className="
                px-4 py-2
                rounded-full
                bg-white/10
                border border-white/20
                text-sm
                truncate
              "
                        >
                            {tool}
                        </div>
                    ))}
                </div>

                <button
                    onClick={handleToggle}
                    className="
            mt-6
            w-full
            py-3
            rounded-xl
            bg-white/10
            border border-white/20
            hover:bg-white/20
            transition
          "
                >
                    {showComplete ? "Show Less" : "View Project"}
                </button>

                <div
                    ref={disRef}
                    className="overflow-hidden flex flex-col gap-4"
                >
                    <p className="text-zinc-300 text-sm md:text-base mt-5">
                        {project.about}
                    </p>

                    <div className="flex flex-col md:flex-row gap-3">
                        <a
                            ref={gitRef}
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="
                flex-1
                py-3
                rounded-xl
                text-center
                bg-white/10
                border border-white/20
                hover:bg-white/20
                transition
              "
                        >
                            GitHub
                        </a>

                        <a
                            ref={checkRef}
                            href={project.liveURL}
                            target="_blank"
                            rel="noreferrer"
                            className="
                flex-1
                py-3
                rounded-xl
                text-center
                bg-white
                text-black
                hover:opacity-90
                transition
              "
                        >
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectCard;