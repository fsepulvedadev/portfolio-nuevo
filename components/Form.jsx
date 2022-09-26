import { useState, useRef } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { CgSpinner } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [emailEnviado, setEmailEnviado] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setEnviando(true);

    emailjs
      .sendForm(
        "service_vb3b9kq",
        "template_c1i8xna",
        form.current,
        "4ouGEGtNjG9Sd2o7F"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmailEnviado(true);
          setNombre("");
          setApellido("");
          setEmail("");
          setMensaje("");
          setEnviando(false);
          setTimeout(() => {
            setEmailEnviado(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setEmailError(true);
          setEnviando(false);
          setTimeout(() => {
            setEmailError(false);
          }, 3000);
        }
      );
  };
  return (
    <>
      <div className="toast toast-end z-[500000]">
        {emailEnviado && (
          <div className="alert alert-info ">
            <div>
              <span>
                Mensaje enviado! Gracias! En unos minutos sera respondido!
              </span>
            </div>
          </div>
        )}
        {emailError && (
          <div className="alert alert-warning">
            <div>
              <span>Ha ocurrido un error al enviar.</span>
            </div>
          </div>
        )}
      </div>
      <div className="hero h-8/12 shadow-2xl border border-danger rounded">
        <div className="hero-content flex-col  lg:flex-row-reverse">
          <div className="text-center lg:text-left flex-col">
            <h1 className="text-3xl md:text-5xl font-bold text-info pt-6 lg:text-center">
              Hablemos!
            </h1>
            <p className="py-6 w-full lg:w-1/2 text-info-content text-xl m-auto">
              Podes contactarme llenando este formulario o en cualquiera de mis
              redes sociales. Respondo en unos
              <RoughNotationGroup show={true}>
                <RoughNotation
                  className="ml-1"
                  color="#e9498c"
                  type="underline"
                >
                  minutos!
                </RoughNotation>
              </RoughNotationGroup>
            </p>
            <div className=" flex items-center flex-col mt-4">
              <p className="flex items-center font-bold text-success justify-start mr-12">
                <FaWhatsapp size={"20px"} className="mr-2" /> +54 9 299 5 941
                966
              </p>
              <p className="flex items-center font-bold text-success mt-2">
                <MdOutlineAlternateEmail size={"20px"} className="mr-2" />{" "}
                fsepulvedadev@gmail.com
              </p>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm drop-shadow-lg bg-base-100">
            <div className="card-body bg-accent-focus">
              <form ref={form} className="w-full h-full" onSubmit={sendEmail}>
                <div className="form-control">
                  <label className="input-group input-group-vertical">
                    <span className="bg-accent-content text-white">Nombre</span>
                    <input
                      onChange={(e) => {
                        setNombre(e.target.value);
                      }}
                      value={nombre}
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      placeholder="Carla"
                      className="input input-bordered"
                    />
                  </label>
                </div>
                <div className="form-control mt-4">
                  <label className="input-group input-group-vertical">
                    <span className="bg-accent-content text-white">
                      Apellido
                    </span>
                    <input
                      onChange={(e) => {
                        setApellido(e.target.value);
                      }}
                      value={apellido}
                      type="text"
                      name="apellido"
                      id="apellido"
                      autoComplete="on"
                      placeholder="Recluter"
                      className="input input-bordered"
                      required
                    />
                  </label>
                </div>
                <div className="form-control mt-4">
                  <label className="input-group input-group-vertical">
                    <span className="bg-accent-content text-white">Email</span>
                    <input
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      value={email}
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="Carla@recluter.com"
                      className="input input-bordered"
                    />
                  </label>
                </div>
                <label className="input-group input-group-vertical mt-4">
                  <span className="bg-accent-content text-white">Mensaje</span>

                  <textarea
                    required
                    onChange={(e) => {
                      setMensaje(e.target.value);
                    }}
                    value={mensaje}
                    name="mensaje"
                    id="mensaje"
                    className="textarea textarea-bordered"
                    placeholder="Hola Fran! bla..."
                  ></textarea>
                </label>
                <div className="form-control mt-6">
                  <button
                    disabled={enviando}
                    type="submit"
                    className="btn btn-success"
                  >
                    {enviando ? (
                      <span className="flex items-center">
                        <CgSpinner
                          size={"1.4rem"}
                          className="mr-2 animate-spin"
                        />
                        Enviando...
                      </span>
                    ) : (
                      "Enviar"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
