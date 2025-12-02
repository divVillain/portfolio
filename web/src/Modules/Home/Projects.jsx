'use client';

import { useEffect, useRef, useState } from "react";
import PROJECTS from "../../PROJECTS.json";



export default function Projects() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [displayedIndex, setDisplayedIndex] = useState(null);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const projectRefs = useRef([]);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseEnter = (index) => {
        setIsFadingOut(false);
        setDisplayedIndex(index);
        setHoveredIndex(index);
    };

    const handleContainerMouseLeave = () => {
        setIsFadingOut(true);
        setHoveredIndex(null);
        // Clear after animation completes
        setTimeout(() => {
            setDisplayedIndex(null);
            setIsFadingOut(false);
        }, 500);
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const elementUnderCursor = document.elementFromPoint(mousePos.x, mousePos.y);

            if (!elementUnderCursor) {
                setHoveredIndex(null);
                return;
            }

            // Find which project is under the cursor
            let foundIndex = null;
            for (let i = 0; i < projectRefs.current.length; i++) {
                if (projectRefs.current[i]?.contains(elementUnderCursor)) {
                    foundIndex = i;
                    break;
                }
            }

            if (foundIndex !== null) {
                setIsFadingOut(false);
                setDisplayedIndex(foundIndex);
            }
            setHoveredIndex(foundIndex);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [mousePos]);

    return (
        <section
            id="projects"
            className="projects w-full min-h-[100vh] relative "
            onMouseLeave={handleContainerMouseLeave}
        >
            <div
                className={`pin-bg w-full h-[100vh] fixed top-0 left-0 transition-opacity duration-500 ease-in-out pointer-events-none ${isFadingOut ? 'animate-fade-out' : displayedIndex !== null && !isFadingOut ? 'animate-scale-in' : ''
                    }`}
                style={{
                    backgroundImage: displayedIndex !== null ? `url(${`/home/${PROJECTS[displayedIndex].cover}`})` : '',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: "brightness(.2)",
                    opacity: displayedIndex !== null && !isFadingOut ? 1 : 0,
                    animationPlayState: isFadingOut ? 'running' : 'paused',
                }}>
            </div>

            <ul className="flex flex-col items-center h-full pt-[200px] pb-[400px]">
                {PROJECTS.map((item, index) => {
                    return (
                        <li
                            ref={el => projectRefs.current[index] = el}
                            onMouseEnter={() => handleMouseEnter(index)}
                            key={index} className={`w-full relative flex flex-col items-center py-10`}>
                            <a href="#" className={`project w-full  ${hoveredIndex === index ? "text-[6rem]" : "text-[5.625rem]"} leading-[8rem] font-bold tracking-tight
                                flex  text-white ${hoveredIndex === index ? "" : "opacity-10"}`}> <span className="w-full text-center">{item.name}</span> </a>
                            <ul className="flex gap-4">
                                {hoveredIndex === index ? item.keys.map((key, index) => {
                                    return <li className="flex gap-4" key={index} ><span className="projectAlt text-center">{key}</span> <span className="projectAlt default text-center">{index != item.keys.length - 1 ? "|" : ""}</span></li>;
                                }) : null}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
