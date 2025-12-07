'use client';

import HERODATA from "../../HERODATA.json";
import { useEffect, useState, useRef, use } from "react";
import { getCarouselInfo } from "../../lib/get-projects-info.js";

export default function Hero() {
    

    const [cycle, setCycle] = useState(0);

    useEffect(() => { 
        const fetchData = async () => {
            const { carousel } = await getCarouselInfo();
            console.log(carousel);
        }
        fetchData();
    }, [cycle]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Usamos la forma funcional de setCycle para asegurar que usamos el 
            // valor más reciente de 'cycle'
            setCycle(prevCycle => {
                if (prevCycle === HERODATA.length - 1) {
                    return 0;
                }
                return prevCycle + 1;
            });
        }, HERODATA[0].length * 2500);

        // IMPORTANTE: Función de limpieza que detiene el timer
        return () => clearInterval(intervalId);
    }, []); // <-- Array de dependencia vacío

    const [delayCycle, setDelayCycle] = useState(0);

    useEffect(() => {
        const delay = (HERODATA[0].length * 2500) + 1350;

        const intervalId = setInterval(() => {
            setDelayCycle(prevDelayCycle => {
                if (prevDelayCycle === HERODATA.length - 1) {
                    return 0;
                }
                return prevDelayCycle + 1;
            });
        }, delay);

        // Función de limpieza
        return () => clearInterval(intervalId);
    }, []); // <-- Array de dependencia vacío

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
            <figure id="bgHero" className="fixed top-0 left-0 w-full h-full -z-100 overflow-hidden">
                {HERODATA[cycle].slice(0, HERODATA[cycle].length - 1).map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={`img-bg w-full h-full absolute top-0 left-0`}
                            style={{ "--delay": `${index * 2.5}s`, backgroundImage: `url(/home/${item.image})`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(.1) grayscale(1)" }}></div>
                    )
                }
                )}
                {HERODATA[delayCycle].slice(HERODATA[cycle].length - 1, HERODATA[cycle].length).map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={`img-bg w-full h-full absolute top-0 left-0`}
                            style={{ "--delay": `${(index + HERODATA[cycle].length - 1) * 2.5}s`, backgroundImage: `url(/home/${item.image})`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(.1) grayscale(1)" }}></div>
                    )
                }
                )}
            </figure>

            <div
                ref={imgRef}
                className="absolute  h-[500px] w-[750px] z-[2]"
            >
                {HERODATA[cycle].slice(0, HERODATA[cycle].length - 1).map((item, index) => {
                    return (
                        <figure
                            key={index}
                            className={`mask overflow-hidden absolute top-0 left-0`}
                            style={{ "--delay": `${index * 2.5}s`, "--amount": `${HERODATA[cycle].length * 2.5}s` }}
                        >
                            <img
                                src={`/home/${item.image}`}
                                className="h-[500px] w-[750px] object-cover"
                            />

                        </figure>
                    );
                })}
                {HERODATA[delayCycle].slice(HERODATA[cycle].length - 1, HERODATA[cycle].length).map((item, index) => {
                    return (
                        <figure
                            key={index}
                            className={`mask overflow-hidden absolute top-0 left-0`}
                            style={{ "--delay": `${(index + HERODATA[cycle].length - 1) * 2.5}s`, "--amount": `${HERODATA[cycle].length * 2.5}s` }}
                        >
                            <img
                                src={`/home/${item.image}`}
                                className="h-[500px] w-[750px] object-cover"
                            />

                        </figure>
                    );
                })}


            </div>
            <h1
                className="text-[5.625rem] font-bold z-99 absolute tracking-tight
                 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex gap-4 z-[10]"
            >
                Sometimes I{" "}
                <div className="words-container  flex flex-col h-[150px] overflow-hidden pr-4 relative w-[220px]">
                    {HERODATA[cycle].slice(0, HERODATA[cycle].length - 1).map((item, index) => {
                        return <strong
                            className={`word absolute top-0 left-0`} key={index}
                            style={{ "--delay": `${index * 2.5}s` }}
                        >{item.skill}</strong>;
                    })}
                    {HERODATA[delayCycle].slice(HERODATA[cycle].length - 1, HERODATA[cycle].length).map((item, index) => {
                        return <strong
                            className={`word absolute top-0 left-0`} key={index}
                            style={{ "--delay": `${(index + HERODATA[cycle].length - 1) * 2.5}s` }}
                        >{item.skill}</strong>;
                    })}
                </div>
            </h1>
        </section>

    )
}