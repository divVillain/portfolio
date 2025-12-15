'use client';


import { useEffect, useState, useRef } from "react";
import { getCarouselInfo } from "../../lib/get-carousel-info.js";

export default function Hero() {


    const [cycle, setCycle] = useState(0);
    const [delayCycle, setDelayCycle] = useState(0);

    const [carousel, setCarousel] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const { carousel } = await getCarouselInfo();
            setCarousel(carousel);
        }
        fetchData();
    }, []);


    useEffect(() => {
        const intervalId = setInterval(() => {
            // Usamos la forma funcional de setCycle para asegurar que usamos el 
            // valor más reciente de 'cycle'
            setCycle(prevCycle => {
                if (prevCycle === carousel.length - 1) {
                    return 0;
                }
                return prevCycle + 1;
            });
        }, 3 * 2500);

        // IMPORTANTE: Función de limpieza que detiene el timer
        return () => clearInterval(intervalId);
    }, [cycle]); // <-- Array de dependencia vacío


    useEffect(() => {
        const delay = (3 * 2500) + 1350;

        const intervalId = setInterval(() => {
            setDelayCycle(prevDelayCycle => {
                if (prevDelayCycle === carousel.length - 1) {
                    return 0;
                }
                return prevDelayCycle + 1;
            });
        }, delay);

        // Función de limpieza
        return () => clearInterval(intervalId);
    }, [delayCycle]); // <-- Array de dependencia vacío


    const paint = carousel[cycle]?.paint;
    const design = carousel[cycle]?.design;
    const code = carousel[delayCycle]?.code;

    const imgRef = useRef(null);

    const limit = 100; // límite del movimiento

    useEffect(() => {
        const handleMouseMove = (e) => {
            const img = imgRef.current;
            if (!img) return;

            // Tamaño y posición actual de la imagen
            const rect = img.getBoundingClientRect();

            // Centro real de la imagen en la pantalla
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Distancia del mouse al centro
            const dx = e.clientX - centerX;
            const dy = e.clientY - centerY;

            // Si el mouse está en el centro → dx = 0 y dy = 0 → translate(0,0)
            const offsetX = Math.max(Math.min(dx * 0.1, limit), -limit);
            const offsetY = Math.max(Math.min(dy * 0.1, limit), -limit);

            img.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);


    return (
        <section id="hero" className=" w-full min-h-[100vh]  flex items-center justify-center text-white bg-[#191919]"
        >
            {carousel[0] ? <>
                <figure id="bgHero" className="fixed top-0 left-0 w-full h-full -z-100 overflow-hidden">

                    <div

                        className={`img-bg w-full h-full absolute top-0 left-0`}
                        style={{ "--delay": `${0}s`, backgroundImage: `url(${paint.image.url})`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(.1) grayscale(1)" }}>
                    </div>

                    <div

                        className={`img-bg w-full h-full absolute top-0 left-0`}
                        style={{ "--delay": `${2.5}s`, backgroundImage: `url(${design.image.url})`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(.1) grayscale(1)" }}>
                    </div>
                    <div

                        className={`img-bg w-full h-full absolute top-0 left-0`}
                        style={{ "--delay": `${2 * 2.5}s`, backgroundImage: `url(${code.image.url})`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(.1) grayscale(1)" }}>
                    </div>
                </figure>

                <div
                    ref={imgRef}
                    className="absolute  h-[500px] w-[750px] z-[2]"
                >
                    <figure

                        className={`mask overflow-hidden absolute top-0 left-0`}
                        style={{ "--delay": `${0}s`, "--amount": `${carousel[cycle]?.length * 2.5}s ` }}
                    >

                        <img

                            src={`${paint.image.url}`}
                            className="h-[500px] w-[750px] object-cover"
                        />

                    </figure>
                    <figure

                        className={`mask overflow-hidden absolute top-0 left-0`}
                        style={{ "--delay": `${2.5}s`, "--amount": `${carousel[cycle]?.length * 2.5}s` }}
                    >

                        <img

                            src={`${design.image.url}`}
                            className="h-[500px] w-[750px] object-cover"
                        />

                    </figure>

                    <figure

                        className={`mask overflow-hidden absolute top-0 left-0`}
                        style={{ "--delay": `${2 * 2.5}s`, "--amount": `${carousel[cycle]?.length * 2.5}s` }}
                    >

                        <img

                            src={`${code.image.url}`}
                            className="h-[500px] w-[750px] object-cover"
                        />

                    </figure>


                </div>
                <h1
                    className="text-[5.625rem] font-bold z-99 absolute tracking-tight
                 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex gap-4 z-[10]"
                >
                    Sometimes I
                    <div className="words-container  flex flex-col h-[150px] overflow-hidden pr-4 relative w-[220px]">
                        <strong
                            className={`word absolute top-0 left-0`}
                            style={{ "--delay": `${0}s` }}
                        >
                            {paint.skill}
                        </strong>

                        <strong
                            className={`word absolute top-0 left-0`}
                            style={{ "--delay": `${2.5}s` }}
                        >
                            {design.skill}
                        </strong>
                        <strong
                            className={`word absolute top-0 left-0`}
                            style={{ "--delay": `${2 * 2.5}s` }}
                        >
                            {code.skill}
                        </strong>
                    </div>
                </h1>
            </> : null}
        </section>

    )
}