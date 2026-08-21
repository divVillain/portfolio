import Hero from "./Modules/Home/Hero.jsx";
import Projects from "./Modules/Home/Projects.jsx";
import Clients from "./Modules/Home/Clients.jsx";
import About from "./Modules/Home/About.jsx";
import AboutMe from "./Modules/Home/AboutMe.jsx";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Home() {


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // 1. Inicializar #projects con opacidad 0 antes de la línea de tiempo
        // Usamos 'gsap.set' para establecer el estado inicial sin animación.
        gsap.set("#projects", { opacity: 0 });

        const heroTl = gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom 50%", // Cambiado a 'bottom top' para que termine justo cuando #hero sale de la vista
                scrub: true,
            }
        });

        // 2. Animación de desaparición del Hero (bgHero)
        heroTl.to("#hero", {
            opacity: 0,
            ease: "power1.inOut",
        }, 0); // El '0' asegura que esta animación comienza al inicio del timeline

        // 3. Animación de aparición de #projects
        // Usamos 'fromTo' para mayor claridad, animando de opacity: 0 a opacity: 1
        // La posición '0' lo hace empezar al mismo tiempo que la opacidad del hero
        heroTl.to('#projects', {
            opacity: 1,
            ease: "power1.inOut"
        }, 0.2);
        // NOTA: Si quieres que #projects aparezca un poco después de que #bgHero comience a desaparecer, 
        // podrías usar una posición de timeline como 0.2 para un ligero retraso:
        // heroTl.to('#projects', { opacity: 1, ease: "power1.inOut" }, 0.2);

        const projectsFade = gsap.timeline({
            scrollTrigger: {
                trigger: "#projects",
                start: "50% top",
                end: "bottom 20%", // Cambiado a 'bottom top' para que termine justo cuando #hero sale de la vista
                scrub: true,
            }
        });

        projectsFade.to("#projects", {
            opacity: 0,
            ease: "power1.inOut"
        }, 0);

    }
        , []);


    return (
        <div className="bg-[#191919]">
            <Hero />
            <Projects />


        </div>
    )
}