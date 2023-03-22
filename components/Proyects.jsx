import React from "react";
import Proyect from "./Proyect";
import palta from "../assets/palta-store.PNG";
import calculadora from "../assets/calculadora.png";
import maiten from "../assets/maiten.png";

const Proyects = () => {
  return (
    <div className="w-full my-6">
      <h1 className="mt-4 -mb-1 text-4xl font-bold text-right md:text-9xl text-secondary">
        Proyectos
      </h1>
      <div className="grid w-full h-full gap-10 mb-6 md:grid-cols-4 place-items-center">
        <Proyect
          description="Proyecto desarrollado en mi trabajo actual en COPADE donde soy el unico desarrollador del equipo. Es un visor web para datos estadisticos, en este caso de espacios verdes en la provincia de neuquen."
          techs={["Javascript", "Tailwind", "Leaflet.js", "GIS"]}
          title="Maiten"
          id="modular"
          foto={maiten}
          className="md:col-span-4"
          buttons={true}
          repo="https://github.com/panchixnrc/maiten-demo"
          live="https://maiten-demo.vercel.app/"
        />
        <Proyect
          description="E-commerce desarrollado con React utilizando varios hooks y Context para el manejo de el estado global. Los productos se almacenan utilizando Firebase como base de datos cloud"
          techs={["React", "Bootstrap", "Firebase"]}
          title="Palta Store"
          foto={palta}
          className="md:col-span-2"
          buttons={true}
          repo="https://github.com/panchixnrc/paltastore-franciscosepulveda"
          live="https://palta-store.netlify.app/"
        />

        <Proyect
          description="Progressive Web App para convertir moneda extranjera a pesos argentinos calculando el dolar qatar para saber cuanto se va a pagar en la tarjeta de credito al realizar compras en el exterior realizada con React.js y Tailwind.css para el Front-End que consume una API en express la cual realiza web scrapping para obtener el valor de las monedas cada cierto intervalo."
          techs={[
            "React",
            "Tailwind",
            "Express",
            "API REST",
            "Web Scrapping",
            "PWA",
          ]}
          title="Calculadora Dolar Qatar"
          foto={calculadora}
          className="md:col-span-2"
          buttons={true}
          repo="https://github.com/panchixnrc/conversor-pwa"
          live="https://calculadora-dolarqatar.vercel.app/"
          backend="https://github.com/panchixnrc/dolar-api"
        />
      </div>
    </div>
  );
};

export default Proyects;
