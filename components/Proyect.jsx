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
  backend,
}) => {
  return (
    <div
      className={`indicator w-full h-full bg-base-100 shadow-2xl ${className}`}
      id={id}
    >
      <div className={` card overflow-visible`}>
        <div className="flex ml-32 indicator-item indicator-bottom indicator-start">
          {buttons && (
            <>
              <button className="w-20 btn btn-accent">
                <a href={live} target="_blank" rel="noopener noreferrer">
                  Live
                </a>
              </button>
              <button className="w-20 ml-2 btn btn-accent">
                <a href={repo} target="_blank" rel="noopener noreferrer">
                  Repo
                </a>
              </button>
              {backend && (
                <button className="w-20 ml-2 btn btn-accent">
                  <a href={backend} target="_blank" rel="noopener noreferrer">
                    Repo BackEnd
                  </a>
                </button>
              )}
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
          <h2 className="text-3xl card-title text-primary">{title}</h2>
          <p>{description}</p>
          <div className="justify-end card-actions">
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
