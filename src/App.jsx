import { useEffect, useRef } from "react";
import "./Typography.css";
import HERODATA from "./HERODATA.json";

function App() {
  const imgRef = useRef(null);

  const limit = 30; // límite del movimiento

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
    <>
      <section className="w-full min-h-[100vh]  flex items-center justify-center text-white">
        <div
          ref={imgRef}
          className="absolute  h-[500px] w-[750px] -z-99"
        >
          {HERODATA.map((item, index) => {
            return (
              <figure key={item.id} className={`mask-${index} overflow-hidden absolute top-0 left-0`}>
                <img
                  src={`/home/${item.image}`}
                  className="h-[500px] w-[750px] object-cover"
                />
              </figure>
            );
          })}
        </div>
        <h1
          className="text-[5.625rem] font-bold z-99 absolute 
                 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex gap-4"
        >
          Sometimes I{" "}
          <span className="flex flex-col h-[150px] overflow-hidden pr-4 relative w-[220px]">
            {HERODATA.map((item, index) => {
              return <strong className={`word-${index} absolute top-0 left-0`} key={item.id}>{item.skill}</strong>;
            })}
          </span>
        </h1>
      </section>
    </>
  );
}

export default App;
