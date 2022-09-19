import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import fotoMia from "../assets/fotomia2.jpg";
import Image from "next/future/image";

const Hero = () => {
  return (
    <>
      <div className="hero h-full md:min-h-screen backdrop-blur-lg rounded  my-4 ">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <Image
            src={fotoMia}
            className="md:max-w-sm rounded-lg shadow-2xl mask mask-parallelogram-2 grayscale hover:grayscale-0 duration-1000 "
            alt="foto"
          />
          <div className="text-4xl md:text-8xl font-bold">
            <RoughNotationGroup show={true}>
              <RoughNotation
                className="mt-4 w-fit"
                color="#44adee"
                order={"1"}
                customElement="div"
                type="highlight"
              >
                Hola!
              </RoughNotation>
              <RoughNotation
                className="mt-4"
                color="#e9498c"
                order={"2"}
                customElement="div"
                type="highlight"
              >
                Soy Francisco
              </RoughNotation>{" "}
              <RoughNotation
                className="mt-4"
                color="#fff133"
                order={"4"}
                customElement="div"
                type="highlight"
              >
                Full Stack Dev
              </RoughNotation>
            </RoughNotationGroup>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
