import React from "react";
import Head from "next/head";

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
import leaflet from "../assets/react-leaflet.svg";
import Link from "next/link";
import Image from "next/image";

const experiencia = () => {
  return (
    <>
      <Head>
        <title>Francisco Sepulveda DEV - Experiencia</title>
      </Head>
      <section className="h-full mt-10">
        <h1 className="left-0 my-4 mr-3 text-4xl font-bold text-right md:mr-0 md:my-0 md:text-8xl text-secondary md:rotate-90 md:-translate-x-10 md:absolute top-72">
          Experiencia
        </h1>
        <div className="flex justify-center">
          <div className="flex flex-col w-10/12 border-opacity-50 md:w-1/3">
            <div className="w-full my-4 indicator md:my-8">
              <span className="w-auto p-3 mr-6 text-lg rounded indicator-item badge badge-success md:text-lg ">
                Actualidad
              </span>
              <div className="grid w-full h-auto p-4 border-2 card bg-accent-focus text-accent-content rounded-box place-items-center border-success">
                <h2 className="flex items-center w-full my-2 text-lg font-bold text-left text-warning-content">
                  <MdOutlineArrowRight size={"1.5rem"} /> Programador
                </h2>
                <h3 className="flex items-center w-full my-2 italic text-left text-md">
                  <BsBuilding size={"1.2rem"} className="mr-2" /> Gobierno de la
                  provincia de Neuquen - COPADE
                </h3>
                <p>
                  Actualmente me encuentro trabajando como programador para la
                  secretaria de planificacion y accion para el desarrollo del
                  gobierno de la provincia del Neuquen. Entre mis tareas se
                  encuentra el mantenimiento de la web de la secretaria.
                  Desarrollo de web apps para distintos proyectos. <br /> Uno de
                  los destacados es un SIG (Sistema de Informacion Geografica)
                  con un visor online para mostrar informacion en capas sobre un
                  mapa.
                </p>
              </div>
            </div>
            <div className="my-4 divider before:bg-primary after:bg-primary">
              <HiOutlineArrowNarrowUp
                className="text-success md:hover:animate-bounce"
                size={"5rem"}
              />
            </div>
            <div className="w-full my-4 indicator md:my-8">
              <span className="w-auto p-3 mr-6 text-lg rounded indicator-item badge badge-success md:text-lg">
                2021 - 2022
              </span>
              <div className="grid w-full h-auto p-4 card bg-accent-focus text-accent-content rounded-box place-items-center">
                <h2 className="flex items-center w-full my-2 text-lg font-bold text-left text-warning-content">
                  <MdOutlineArrowRight size={"1.5rem"} /> Trabajos como
                  Freelance
                </h2>
                <p>
                  Realice distintos trabajos como desarrollador freelance,
                  realizando webs para empresas de distintos rubros, entre las
                  que se destaca la de MODULAR ESPACIOS. Que se encuentra
                  expuesta en el{" "}
                  <Link href="/#modular">
                    <span className="font-bold cursor-pointer hover:underline">
                      inicio.
                    </span>
                  </Link>
                </p>
              </div>
            </div>
            <div className="my-4 divider before:bg-primary after:bg-primary">
              <HiOutlineArrowNarrowUp
                className="text-success md:hover:animate-bounce"
                size={"5rem"}
              />
            </div>
            <div className="w-full my-4 indicator md:my-8">
              <span className="w-auto p-3 mr-6 text-lg rounded indicator-item badge badge-success md:text-lg">
                2020
              </span>
              <div className="grid w-full h-auto p-4 card bg-accent-focus text-accent-content rounded-box place-items-center">
                <h2 className="flex items-center w-full my-2 text-lg font-bold text-left text-warning-content">
                  <MdOutlineArrowRight size={"1.5rem"} /> Inicios de estudio
                </h2>
                <p>
                  Inicio de estudios en programacion, autodidacta y cursos en
                  Platzi entre otras plataformas. Este mismo año realizo un
                  curso de Desarrollo Front End en Docta Devs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-auto my-4">
          <h1 className="my-6 text-5xl font-bold text-center md:text-7xl text-primary md:rotate-12">
            Tecnologias
          </h1>
          <div className="flex flex-col items-center justify-center w-10/12 h-auto mx-auto my-10 lg:flex-row">
            <div className="w-full indicator">
              <span className="w-24 p-1 text-lg text-white rounded indicator-item indicator-center badge badge-secondary">
                Front End
              </span>

              <div className="grid flex-grow w-full h-auto grid-cols-2 p-2 bg-blue-200 md:grid-cols-4 md:h-52 card rounded-box place-items-center">
                <div className="flex flex-col items-center justify-center w-24 h-24 p-2 font-bold text-center bg-accent mask mask-hexagon-2">
                  <IoLogoReact size={"30px"} className="text-secondary " />
                  React
                </div>
                <div className="flex flex-col items-center justify-center w-24 h-24 p-4 font-bold text-center bg-accent mask mask-hexagon-2">
                  <SiTailwindcss size={"30px"} className="text-secondary " />
                  Tailwind
                </div>
                <div className="flex flex-col items-center justify-center w-24 h-24 p-4 font-bold text-center bg-accent mask mask-hexagon-2">
                  <IoLogoJavascript size={"30px"} className="text-secondary " />
                  Javascript
                </div>
                <div className="flex flex-col items-center justify-center w-24 h-24 p-4 font-bold text-center bg-accent mask mask-hexagon-2">
                  <IoLogoCss3 size={"30px"} className="text-secondary " />
                  CSS
                </div>
                <div className="flex flex-col items-center justify-center w-24 h-24 p-4 font-bold text-center bg-accent mask mask-hexagon-2">
                  <SiBootstrap size={"30px"} className="text-secondary " />
                  Bootstrap
                </div>
                <div className="flex flex-col items-center justify-center w-24 h-24 p-4 font-bold text-center bg-accent mask mask-hexagon-2">
                  <SiNextdotjs size={"30px"} className="text-secondary " />
                  Next.js
                </div>
                <div className="flex flex-col items-center justify-center w-24 h-24 p-4 font-bold text-center bg-accent mask mask-hexagon-2">
                  <Image className="leaflet" src={leaflet} />
                  Leaflet.js
                </div>
              </div>
            </div>
            <div className="divider before:bg-primary after:bg-primary lg:divider-horizontal">
              <CgCodeSlash size={"6rem"} className="text-success" />
            </div>
            <div className="w-full indicator">
              <span className="w-24 p-1 text-lg text-white rounded indicator-item indicator-center badge badge-secondary">
                Back End
              </span>
              <div className="grid flex-grow w-full h-auto grid-cols-2 p-2 bg-blue-200 md:grid-cols-2 md:h-52 card rounded-box place-items-center">
                <div className="flex flex-col items-center justify-center w-24 h-24 p-2 font-bold text-center bg-accent mask mask-hexagon-2">
                  <SiNodedotjs size={"30px"} className="text-secondary " />
                  Node.js
                </div>
                <div className="flex flex-col items-center justify-center w-24 h-24 p-2 font-bold text-center bg-accent mask mask-hexagon-2">
                  <SiMongodb size={"30px"} className="text-secondary " />
                  MongoDB
                </div>
                <div className="flex flex-col items-center justify-center w-24 h-24 p-2 font-bold text-center bg-accent mask mask-hexagon-2">
                  <SiFirebase size={"30px"} className="text-secondary " />
                  Firebase
                </div>
                <div className="flex flex-col items-center justify-center w-24 h-24 p-2 font-bold text-center bg-accent mask mask-hexagon-2">
                  <SiSocketdotio size={"30px"} className="text-secondary " />
                  Socket.io
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default experiencia;
