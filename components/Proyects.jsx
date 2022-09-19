import React from "react";
import Proyect from "./Proyect";
import palta from "../assets/palta-store.PNG";
import modular from "../assets/modular.PNG";
import tareas from "../assets/tareas.PNG";

const Proyects = () => {
  return (
    <div className="w-full my-6">
      <h1 className="text-4xl md:text-9xl font-bold text-secondary mt-4 text-right -mb-1">
        Proyectos
      </h1>
      <div className="w-full h-full grid md:grid-cols-4 place-items-center gap-10 mb-6">
        <Proyect
          description="E-commerce desarrollado con React utilizando varios hooks y Context para el manejo de el estado global. Los productos se almacenan utilizando Firebase como base de datos cloud"
          techs={["React", "Bootstrap", "Firebase"]}
          title="Palta Store"
          foto={palta}
          className="md:col-span-4"
          buttons={true}
        />
        <Proyect
          description="Trabajo freelance desarrollado para una empresa de construccion, landing page desarrollada en html utilizando Bootstrap para estilos, ademas cuenta con un servidor en Node para el manejo del formulario de contacto."
          techs={["Javascript", "Bootstrap", "Node", "HTML"]}
          title="Modular Espacios"
          foto={modular}
          className="md:col-span-2"
          buttons={true}
        />
        <Proyect
          description="Web app para gestion de tareas realizada con React.js y Tailwind.css"
          techs={["React", "Tailwind"]}
          title="Tareas App"
          foto={tareas}
          className="md:col-span-2"
          buttons={true}
        />
      </div>
    </div>
  );
};

export default Proyects;
