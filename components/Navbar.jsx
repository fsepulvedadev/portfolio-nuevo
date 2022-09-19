import React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-center w-full bg-base-100 fixed bg-opacity-90 backdrop-blur-sm z-20">
      <div className="navbar w-full  md:w-10/12 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 hover:bg-none"
            >
              <li>
                <a>Inicio</a>
              </li>

              <li>
                <a>Sobre mi</a>
              </li>
              <li>
                <a>Experiencia</a>
              </li>
              <li>
                <a>Proyectos</a>
              </li>
              <li>
                <a>Contacto</a>
              </li>
            </ul>
          </div>
          <a className="btn bg-transparent hover:bg-transparent border-none text-neutral  normal-case text-2xl">
            {" "}
            <span className="font-bold text-primary">FS</span> epulveda{" "}
            <span className="font-bold text-primary">DEV</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a>Inicio</a>
            </li>

            <li>
              <a>Sobre mi</a>
            </li>
            <li>
              <a>Experiencia</a>
            </li>
            <li>
              <a>Proyectos</a>
            </li>
            <li>
              <a>Contacto</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end hidden md:flex justify-end items-center">
          <a
            href="https://github.com/panchixnrc"
            target="_blank"
            rel="noreferrer"
            className=""
          >
            <IoLogoGithub
              size="1.5rem"
              className="hover:scale-125  ease-in-out duration-300"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/fsepulvedadev"
            target="_blank"
            className="ml-2"
            rel="noreferrer"
          >
            <IoLogoLinkedin
              size="1.5rem"
              className="hover:scale-125 ease-in-out duration-300"
            />
          </a>
          <a
            href="https://twitter.com/panchisepulveda"
            target="_blank"
            className="ml-2"
            rel="noreferrer"
          >
            <IoLogoTwitter
              size="1.5rem"
              className="hover:scale-125 ease-in-out duration-300"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
