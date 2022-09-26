import React from "react";
import { HiOutlineArrowNarrowUp } from "react-icons/hi";
import { MdOutlineArrowRight } from "react-icons/md";
import { BsBuilding } from "react-icons/bs";
import { CgCodeSlash } from "react-icons/cg";
import { IoLogoReact, IoLogoJavascript, IoLogoCss3 } from "react-icons/io5";
import {
  SiTailwindcss,
  SiBootstrap,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiSocketdotio,
} from "react-icons/si";
import Link from "next/link";

const experiencia = () => {
  return (
    <section className="h-full mt-10">
      <h1 className="text-4xl mr-3 md:mr-0 md:my-0 my-4 md:text-8xl font-bold text-secondary text-right  md:rotate-90 md:-translate-x-10 md:absolute left-0 top-72">
        Experiencia
      </h1>
      <div className="flex justify-center">
        <div className="flex flex-col border-opacity-50 w-10/12 md:w-1/3">
          <div className="indicator w-full my-4 md:my-8">
            <span className="indicator-item badge badge-success rounded w-auto text-lg md:text-lg p-3 mr-6 ">
              Actualidad
            </span>
            <div className="grid h-auto card bg-accent-focus text-accent-content rounded-box place-items-center w-full p-4 border-2 border-success">
              <h2 className="font-bold text-lg text-warning-content text-left w-full flex items-center my-2">
                <MdOutlineArrowRight size={"1.5rem"} /> Programador
              </h2>
              <h3 className="text-md italic text-left w-full flex items-center my-2">
                <BsBuilding size={"1.2rem"} className="mr-2" /> Gobierno de la
                provincia de Neuquen - COPADE
              </h3>
              <p>
                Actualmente me encuentro trabajando como programador para la
                secretaria de planificacion y accion para el desarrollo del
                gobierno de la provincia del Neuquen. Entre mis tareas se
                encuentra el mantenimiento de la web de la secretaria.
                Desarrollo de webs para distintos eventos y el principal
                proyecto es un SIG (Sistema de Informacion Geografica) con un
                visor online para mostrar informacion en capas sobre un mapa.
              </p>
            </div>
          </div>
          <div className="divider before:bg-primary after:bg-primary my-4">
            <HiOutlineArrowNarrowUp
              className="text-success md:hover:animate-bounce"
              size={"5rem"}
            />
          </div>
          <div className="indicator w-full my-4 md:my-8">
            <span className="indicator-item badge badge-success rounded w-auto mr-6 text-lg md:text-lg p-3">
              2021 - 2022
            </span>
            <div className="grid h-auto card bg-accent-focus text-accent-content rounded-box place-items-center w-full p-4">
              <h2 className="font-bold text-lg text-warning-content text-left w-full flex items-center my-2">
                <MdOutlineArrowRight size={"1.5rem"} /> Trabajos como Freelance
              </h2>
              <p>
                Realice distintos trabajos como desarrollador freelance,
                realizando webs para empresas de distintos rubros, entre las que
                se destaca la de MODULAR ESPACIOS. Que se encuentra expuesta en
                el{" "}
                <Link href="/#modular">
                  <span className="font-bold hover:underline cursor-pointer">
                    inicio.
                  </span>
                </Link>
              </p>
            </div>
          </div>
          <div className="divider before:bg-primary after:bg-primary my-4">
            <HiOutlineArrowNarrowUp
              className="text-success md:hover:animate-bounce"
              size={"5rem"}
            />
          </div>
          <div className="indicator w-full my-4 md:my-8">
            <span className="indicator-item badge badge-success rounded w-auto mr-6 text-lg md:text-lg p-3">
              2020
            </span>
            <div className="grid h-auto card bg-accent-focus text-accent-content rounded-box place-items-center w-full p-4">
              <h2 className="font-bold text-lg text-warning-content text-left w-full flex items-center my-2">
                <MdOutlineArrowRight size={"1.5rem"} /> Inicios de estudio
              </h2>
              <p>
                Inicio de estudios en programacion, autodidacta y cursos en
                Platzi entre otras plataformas. Este mismo año realizo un curso
                de Desarrollo Front End en Docta Devs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full h-auto my-4">
        <h1 className="md:text-7xl text-5xl font-bold text-primary md:rotate-12 text-center my-6">
          Tecnologias
        </h1>
        <div className="flex flex-col justify-center items-center w-10/12 lg:flex-row h-auto my-10 mx-auto">
          <div className="indicator w-full">
            <span className="indicator-item indicator-center badge badge-secondary w-24 p-1 rounded text-lg text-white">
              Front End
            </span>

            <div className="grid grid-cols-2 md:grid-cols-4 flex-grow h-auto md:h-52 card bg-blue-200 rounded-box place-items-center w-full p-2">
              <div className="bg-accent h-24 w-24 mask mask-hexagon-2 p-2 flex flex-col justify-center text-center font-bold items-center">
                <IoLogoReact size={"30px"} className="text-secondary " />
                React
              </div>
              <div className="bg-accent mask h-24 w-24 mask-hexagon-2 p-4 flex flex-col justify-center items-center text-center font-bold">
                <SiTailwindcss size={"30px"} className="text-secondary " />
                Tailwind
              </div>
              <div className="bg-accent h-24 w-24 mask mask-hexagon-2 p-4 flex flex-col justify-center text-center font-bold items-center">
                <IoLogoJavascript size={"30px"} className="text-secondary " />
                Javascript
              </div>
              <div className="bg-accent h-24 w-24 mask mask-hexagon-2 p-4 flex flex-col justify-center text-center font-bold items-center">
                <IoLogoCss3 size={"30px"} className="text-secondary " />
                CSS
              </div>
              <div className="bg-accent h-24 w-24 mask mask-hexagon-2 p-4 flex flex-col justify-center text-center font-bold items-center">
                <SiBootstrap size={"30px"} className="text-secondary " />
                Bootstrap
              </div>
              <div className="bg-accent h-24 w-24 mask mask-hexagon-2 p-4 flex flex-col justify-center text-center font-bold items-center">
                <SiNextdotjs size={"30px"} className="text-secondary " />
                Next.js
              </div>
            </div>
          </div>
          <div className="divider before:bg-primary after:bg-primary lg:divider-horizontal">
            <CgCodeSlash size={"6rem"} className="text-success" />
          </div>
          <div className="indicator w-full">
            <span className="indicator-item indicator-center badge badge-secondary w-24 p-1 rounded text-lg text-white">
              Back End
            </span>
            <div className="grid grid-cols-2 md:grid-cols-2 flex-grow h-auto md:h-52 card bg-blue-200 rounded-box place-items-center w-full p-2">
              <div className="bg-accent h-24 w-24 mask mask-hexagon-2 p-2 flex flex-col justify-center text-center font-bold items-center">
                <SiNodedotjs size={"30px"} className="text-secondary " />
                Node.js
              </div>
              <div className="bg-accent h-24 w-24 mask mask-hexagon-2 p-2 flex flex-col justify-center text-center font-bold items-center">
                <SiMongodb size={"30px"} className="text-secondary " />
                MongoDB
              </div>
              <div className="bg-accent h-24 w-24 mask mask-hexagon-2 p-2 flex flex-col justify-center text-center font-bold items-center">
                <SiFirebase size={"30px"} className="text-secondary " />
                Firebase
              </div>
              <div className="bg-accent h-24 w-24 mask mask-hexagon-2 p-2 flex flex-col justify-center text-center font-bold items-center">
                <SiSocketdotio size={"30px"} className="text-secondary " />
                Socket.io
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experiencia;
