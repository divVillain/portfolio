import { useEffect, useRef, useState } from "react";
import "./Typography.css";
import HERODATA from "./HERODATA.json";
import PROJECTS from "./PROJECTS.json";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";


function App() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Inicializar #projects con opacidad 0 antes de la línea de tiempo
    // Usamos 'gsap.set' para establecer el estado inicial sin animación.
    gsap.set("#projects", { opacity: 0 }); 

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top", // Cambiado a 'bottom top' para que termine justo cuando #hero sale de la vista
        scrub: true,
        // markers: true, // Descomentar para depurar
      }
    });

    // 2. Animación de desaparición del Hero (bgHero)
    heroTl.to("#bgHero", {
      opacity: 0,
      ease: "power1.inOut",
    }, 0); // El '0' asegura que esta animación comienza al inicio del timeline

    // 3. Animación de aparición de #projects
    // Usamos 'fromTo' para mayor claridad, animando de opacity: 0 a opacity: 1
    // La posición '0' lo hace empezar al mismo tiempo que la opacidad del hero
    heroTl.to('#projects', { 
        opacity: 1, 
        ease: "power1.inOut"
    }, 0); 
    // NOTA: Si quieres que #projects aparezca un poco después de que #bgHero comience a desaparecer, 
    // podrías usar una posición de timeline como 0.2 para un ligero retraso:
    // heroTl.to('#projects', { opacity: 1, ease: "power1.inOut" }, 0.2);


  }, []); 

  // ... (El resto del código de la función App sigue igual)
  // ...
// --- Resto de los useEffects y el return ...
// ...

  const FALLBACK_IMAGE = '/home/code.png'; 
  // ... (otros useRef, useState, y useEffects) ...
  
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

  const [cycle, setCycle] = useState(0);

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
        console.log(prevDelayCycle);
        if (prevDelayCycle === HERODATA.length - 1) {
          return 0;
        }
        return prevDelayCycle + 1;
      });
    }, delay);

    // Función de limpieza
    return () => clearInterval(intervalId);
  }, []); // <-- Array de dependencia vacío


  const [hoveredIndex, setHoveredIndex] = useState(null);
  const projectRefs = useRef([]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  useEffect(() => {
    // Inicializa el array de refs si es necesario
    projectRefs.current = projectRefs.current.slice(0, PROJECTS.length);

    const handleScroll = () => {
      // 1. Obtener la posición del cursor (si estuviera fijo, podríamos usar el centro de la ventana)
      // Para simplificar, asumiremos que el punto de "hover" es el centro de la ventana (o un punto fijo).
      const viewportCenterY = window.innerHeight / 2;

      // 2. Iterar sobre los proyectos y verificar la intersección
      let detectedIndex = null;
      projectRefs.current.forEach((el, index) => {
        if (el) {
          const rect = el.getBoundingClientRect();

          // Asume que el "hover" se activa cuando el centro de la pantalla
          // (o una línea horizontal de referencia) pasa por el elemento <li>
          if (viewportCenterY >= rect.top && viewportCenterY <= rect.bottom) {
            detectedIndex = index;
          }
        }
      });

      // 3. Actualizar el estado (solo si ha cambiado)
      if (detectedIndex !== hoveredIndex) {
        setHoveredIndex(detectedIndex);
      }
    };

    // Añadir un listener de scroll
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hoveredIndex]); // Agregamos hoveredIndex a las dependencias para evitar warnings

  return (
    // ... (El JSX permanece sin cambios)
    <>
      <nav className="fixed w-full flex items-center justify-between p-8 top-0 left-0 z-50">
        <div className="head-container flex items-center gap-4 text-white">
          <span className="text-[18px]"><a href="#">Jaime González</a></span>
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="7.7836" height="7.7836" fill="white" />
          </svg>
          <span className="text-gray-500 text-[18px]">Product Designer</span>
          <span className="text-gray-500 text-[18px]">Frontend Developer</span>
          <span className="text-gray-500 text-[18px]">Illustrator</span>
        </div>
        <button><svg width="34" height="21" viewBox="0 0 34 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H25.5898V7.7836H0V0Z" fill="white" />
          <path d="M8.18518 12.4932H33.775V20.2768H8.18518V12.4932Z" fill="white" />
        </svg>
        </button>
      </nav>

      <section id="hero" className=" w-full min-h-[100vh]  flex items-center justify-center text-white"
      >
        <figure id="bgHero" className="absolute top-0 left-0 w-full h-full -z-100 overflow-hidden">
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
                key={item.id}
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
                key={item.id}
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
                className={`word absolute top-0 left-0`} key={item.id}
                style={{ "--delay": `${index * 2.5}s` }}
              >{item.skill}</strong>;
            })}
            {HERODATA[delayCycle].slice(HERODATA[cycle].length - 1, HERODATA[cycle].length).map((item, index) => {
              return <strong
                className={`word absolute top-0 left-0`} key={item.id}
                style={{ "--delay": `${(index + HERODATA[cycle].length - 1) * 2.5}s` }}
              >{item.skill}</strong>;
            })}
          </div>
        </h1>
      </section>


      <section
        id="projects"
        className="projects w-full min-h-[100vh] relative "
      >
        <div
          // Aplica una transición para que el cambio de backgroundImage sea suave
          className={`pin-bg w-full h-[100vh] sticky top-0 left-0 transition-opacity duration-300 ease-in-out`}
          style={{
            // ... tus estilos actuales
            backgroundImage: `url(${hoveredIndex !== null ? `/home/${PROJECTS[hoveredIndex].cover}` : FALLBACK_IMAGE}) `, // Usa la fallback image para evitar un fondo vacío inicial
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: "brightness(.2)",
            // Agrega una opacidad que puedes controlar si usas una imagen de fondo base
            opacity: hoveredIndex !== null ? 1 : 0.5 // Ejemplo: Opacidad completa si hay hover, reducida si no
          }}>
        </div>

        <ul className="flex flex-col items-center h-full mt-[-800px] pb-[800px]">
          {PROJECTS.map((item, index) => {
            return (

              <li
                ref={el => projectRefs.current[index] = el}
                onMouseEnter={() => handleMouseEnter(index)}
                key={index} className="w-full relative flex flex-col items-center py-10">
                <a href="#" className={`w-full text-[5.625rem] font-bold tracking-tight
                 flex text-white ${hoveredIndex === index ? "" : "opacity-10"}`}> <span className="w-full text-center">{item.name}</span> </a>
                <div className="flex gap-4 absolute top-[156px] left-[50%] -translate-x-[50%]">
                  {hoveredIndex === index ? item.keys.map((key, index) => {
                    return <span key={index} className="projectAlt text-center">{key}</span>;
                  }) : null}

                </div>
              </li>

            )
          })}
        </ul>



      </section >
    </>
  );
}

export default App;