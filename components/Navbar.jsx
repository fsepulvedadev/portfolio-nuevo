import React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 fixed bg-opacity-30 backdrop-blur-sm">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2 z-10">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
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
            <a>Item 1</a>
          </li>
          <li tabIndex={0}>
            <a>
              Parent
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-primary">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end hidden md:flex justify-center">
        <a href="https://github.com/panchixnrc" target="_blank" className="">
          <IoLogoGithub
            size="1.5rem"
            className="hover:scale-125  ease-in-out duration-300"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/fsepulvedadev"
          target="_blank"
          className="ml-2"
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
        >
          <IoLogoTwitter
            size="1.5rem"
            className="hover:scale-125 ease-in-out duration-300"
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
