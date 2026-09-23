"use client";

import HERODATA from "../../data/HERODATA.json";
import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Usamos la forma funcional de setCycle para asegurar que usamos el
      // valor más reciente de 'cycle'
      setCycle((prevCycle) => {
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
    const delay = HERODATA[0].length * 2500 + 1350;

    const intervalId = setInterval(() => {
      setDelayCycle((prevDelayCycle) => {
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
    <section
      id="hero"
      className=" w-full min-h-[100vh]  flex items-center justify-center bg-[#191919]"
    >
      <figure
        id="bgHero"
        className="fixed top-0 left-0 w-full h-full -z-100 overflow-hidden"
      >
        {HERODATA[cycle]
          .slice(0, HERODATA[cycle].length - 1)
          .map((item, index) => {
            return (
              <div
                key={index}
                className={`img-bg w-full h-full absolute top-0 left-0`}
                style={{
                  "--delay": `${index * 2.5}s`,
                  backgroundImage: `url(/${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(.25) grayscale(1)",
                }}
              ></div>
            );
          })}
        {HERODATA[delayCycle]
          .slice(HERODATA[cycle].length - 1, HERODATA[cycle].length)
          .map((item, index) => {
            return (
              <div
                key={index}
                className={`img-bg w-full h-full absolute top-0 left-0`}
                style={{
                  "--delay": `${(index + HERODATA[cycle].length - 1) * 2.5}s`,
                  backgroundImage: `url(/${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(.25) grayscale(1)",
                }}
              ></div>
            );
          })}
      </figure>

      <div
        ref={imgRef}
        className="absolute h-[400px] w-[300px] md:h-[500px] md:w-[750px] z-[2]"
      >
        {HERODATA[cycle]
          .slice(0, HERODATA[cycle].length - 1)
          .map((item, index) => {
            return (
              <figure
                key={index}
                className={`mask overflow-hidden absolute top-0 left-0`}
                style={{
                  "--delay": `${index * 2.5}s`,
                  "--amount": `${HERODATA[cycle].length * 2.5}s`,
                }}
              >
                <img
                  src={`/${item.image}`}
                  className="h-[400px] w-[300px] md:h-[500px] md:w-[750px] object-cover"
                />
              </figure>
            );
          })}
        {HERODATA[delayCycle]
          .slice(HERODATA[cycle].length - 1, HERODATA[cycle].length)
          .map((item, index) => {
            return (
              <figure
                key={index}
                className={`mask overflow-hidden absolute top-0 left-0`}
                style={{
                  "--delay": `${(index + HERODATA[cycle].length - 1) * 2.5}s`,
                  "--amount": `${HERODATA[cycle].length * 2.5}s`,
                }}
              >
                <img
                  src={`/${item.image}`}
                  className="h-[400px] w-[300px] md:h-[500px] md:w-[750px] object-cover"
                />
              </figure>
            );
          })}
      </div>
      <h1
        className="w-full px-10 justify-between items-center text-white text-[52px] md:text-[5.625rem] font-bold z-[20] absolute tracking-tight
                 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col md:flex-row gap-4 max-w-[1400px]"
      >
        I design{" "}
        <div className="words-container flex flex-col w-full h-[80px] md:h-[150px] overflow-hidden pr-4 relative md:w-[420px] mt-[300px] md:mt-0">
          {HERODATA[cycle]
            .slice(0, HERODATA[cycle].length - 1)
            .map((item, index) => {
              return (
                <strong
                  className={`word text-center display-decorative-large-italic text-primary-red italic absolute top-0 md:left-0 left-[50%]`}
                  key={index}
                  style={{ "--delay": `${index * 2.5}s` }}
                >
                  {item.skill}
                </strong>
              );
            })}
          {HERODATA[delayCycle]
            .slice(HERODATA[cycle].length - 1, HERODATA[cycle].length)
            .map((item, index) => {
              return (
                <strong
                  className={`word text-center display-decorative-large-italic text-primary-red italic absolute top-0 md:left-0 left-[50%]`}
                  key={index}
                  style={{
                    "--delay": `${(index + HERODATA[cycle].length - 1) * 2.5}s`,
                  }}
                >
                  {item.skill}
                </strong>
              );
            })}
        </div>
      </h1>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%] z-[10] flex flex-col items-center gap-0">
        <img src="/home/scroll.gif" className="h-[80px]" autoPlay loop muted />
        <span>Scroll to discover</span>
      </div>
    </section>
  );
}
