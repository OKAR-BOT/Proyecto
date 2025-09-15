import React, { useState } from "react";
import "./FormularioContacto.css";

function FormularioContacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    celular: "",
    consentimiento: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8080/api/contactos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    alert("¡Datos enviados correctamente!");
  };

  return (
    <div className="formulario-fondo">
      <div
        className="formulario-contenedor"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Images/inicioIA.png"
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="formulario-titulo">
          No te quedes atrás. Inscríbete y descubre cómo la IA puede
          revolucionar tu forma de trabajar
        </h2>
        <form onSubmit={handleSubmit} className="formulario-contacto">
          <input
            name="nombre"
            type="text"
            placeholder="Nombre"
            onChange={handleChange}
            required
          />
          <input
            name="apellido"
            type="text"
            placeholder="Apellido"
            onChange={handleChange}
            required
          />
          <input
            name="correo"
            type="email"
            placeholder="Correo"
            onChange={handleChange}
            required
          />
          <input
            name="celular"
            type="tel"
            placeholder="Celular"
            onChange={handleChange}
            required
          />
          <label className="consentimiento">
            <input
              type="checkbox"
              name="consentimiento"
              onChange={handleChange}
            />
            Acepto el tratamiento de mis datos y recibir información
          </label>
          <button type="submit" className="boton-enviar">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormularioContacto;
