import React from "react";
import profilePic from "../assets/fotomia2.jpg";
import Image from "next/future/image";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoHeart,
} from "react-icons/io5";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-accent text-primary-content">
      <div>
        <Image
          src={profilePic}
          alt="Foto de perfil"
          className="w-20 mask mask-hexagon-2 grayscale hover:grayscale-0 ease-in-out duration-1000"
        />
        <p className="font-bold">
          Francisco Sepulveda <br />
          Full stack Javascript Dev
        </p>
        <p>
          Build with <SiNextdotjs className="inline" />{" "}
          <SiTailwindcss className="inline" /> and{" "}
          <IoHeart className="inline" />{" "}
        </p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
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
    </footer>
  );
};

export default Footer;
