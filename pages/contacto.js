import React from "react";
import Form from "../components/Form";

const contact = () => {
  return (
    <div className="h-full flex justify-center py-6">
      <div className="w-full md:w-10/12">
        <h1 className="text-5xl text-left md:text-8xl md:text-right -mb-4 font-bold pl-2 md:pl-0 md:-mb-6 text-primary">
          Contacto
        </h1>
        <Form />
      </div>
    </div>
  );
};

export default contact;
