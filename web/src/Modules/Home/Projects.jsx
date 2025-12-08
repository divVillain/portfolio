'use client';

import { useEffect, useRef, useState } from "react";
import { getProjectsInfo } from "../../lib/get-projects-info.js";
import { Link } from "react-router-dom";



export default function Projects() {

    const [projects, setProjects] = useState([]);
    const [projectsHeight, setProjectsHeight] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            setProjects(await getProjectsInfo([]))
            setProjectsHeight(projects?.length * 1000);
        }
        fetchData();
    }, [projects]);


    const [brightness, setBrightness] = useState(0.8);

    const handleMouseHover = () => {
        setBrightness(0.2);
    }
    const handleMouseLeave = () => {
        setBrightness(0.8);
    }


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
            className={`projects w-full min-h-[200vh] relative`}
            onMouseLeave={handleContainerMouseLeave}
        >
            <div
                className={`pin-bg w-full h-[100vh] fixed top-0 left-0 transition-opacity duration-500 ease-in-out pointer-events-none ${isFadingOut ? 'animate-fade-out' : displayedIndex !== null && !isFadingOut ? 'animate-scale-in' : ''
                    }`}
                style={{
                    backgroundImage: displayedIndex !== null ? `url(${`http://localhost:1337${projects[displayedIndex]?.cover?.url}`})` : '',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: `brightness(${brightness})`,
                    opacity: displayedIndex !== null && !isFadingOut ? 1 : 0,
                    animationPlayState: isFadingOut ? 'running' : 'paused',
                    transition: 'filter 0.5s cubic-bezier(0.65,0.05,0.36,1)',
                }}>
            </div>
            <video
                autoPlay
                loop
                muted
                src={`http://localhost:1337${projects[displayedIndex]?.cover?.url}`}
                className={`pin-bg w-full h-[100vh] fixed top-0 left-0 transition-all duration-500 ease-in-out pointer-events-none ${isFadingOut ? 'animate-fade-out' : displayedIndex !== null && !isFadingOut ? 'animate-scale-in' : ''
                    }`}
                style={{
                    filter: `brightness(${brightness})`,
                    opacity: displayedIndex !== null && !isFadingOut ? 1 : 0,
                    animationPlayState: isFadingOut ? 'running' : 'paused',
                    transition: 'filter 0.5s cubic-bezier(0.65,0.05,0.36,1)'
                }}>
            </video>

            <ul className="flex flex-col items-center h-full pt-[200px] pb-[400px]">
                {projects != [] ? projects.map((project, index) => {
                    return (
                        <li
                            ref={el => projectRefs.current[index] = el}
                            onMouseEnter={() => handleMouseEnter(index)}
                            key={index} className={`w-full relative flex flex-col items-center`}>

                            <Link
                                to={project?.slug}
                                onMouseEnter={handleMouseHover}
                                onMouseLeave={handleMouseLeave}
                                className={`project py-10 ${hoveredIndex === index ? "text-[7rem]" : "text-[6.5rem]"} leading-[100%] font-bold tracking-tight
                                flex  text-white ${hoveredIndex === index ? "" : "opacity-5"}`}> <span className="w-full text-center">
                                    {project.title}
                                </span>
                            </Link>
                            {project.project_categories != undefined ? <ul className="flex gap-4 absolute bottom-0 ">
                                {hoveredIndex === index ? project.project_categories.map((projectCategory, index) => {
                                    return <li
                                        onMouseEnter={handleMouseHover}
                                        onMouseLeave={handleMouseLeave}
                                        className="flex gap-4" key={index} >
                                        <span className="projectAlt text-center">
                                            {projectCategory.name}
                                        </span>
                                        <span className="projectAlt default text-center">
                                            {index != project.project_categories.length - 1 ? "|" : ""}
                                        </span>
                                    </li>;
                                }) : null}
                            </ul> : null}
                        </li>
                    );
                }) : null}
            </ul>
        </section>
    );
}
