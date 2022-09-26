import React from "react";
import Image from "next/future/image";
import fotoDefault from "../assets/fotomia2.jpg";

const Proyect = ({
  className,
  foto,
  title,
  description,
  techs,
  buttons,
  repo,
  live,
  id,
}) => {
  return (
    <div
      className={`indicator w-full h-full bg-base-100 shadow-2xl ${className}`}
      id={id}
    >
      <div className={` card overflow-visible`}>
        <div className="indicator-item indicator-bottom indicator-start flex ml-32">
          {buttons && (
            <>
              <button className="btn btn-accent w-20">
                <a href={live} target="_blank" rel="noopener noreferrer">
                  Live demo
                </a>
              </button>
              <button className="btn btn-accent ml-2 w-20">
                <a href={repo} target="_blank" rel="noopener noreferrer">
                  Repo
                </a>
              </button>
            </>
          )}
        </div>
        <figure>
          <Image
            className="w-full h-72 grayscale"
            src={foto ? foto : fotoDefault}
            alt="Shoesss"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-primary text-3xl">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            {techs?.map((tech, key) => (
              <div key={key} className="badge badge-success">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyect;
