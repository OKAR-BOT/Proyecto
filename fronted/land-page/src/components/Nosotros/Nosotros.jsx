import React from "react";
import "./Nosotros.css";

const valores = [
  "Innovación con propósito",
  "Transparencia y confianza",
  "Diseño centrado en el usuario",
  "Colaboración profesional",
];

const Nosotros = () => {
  return (
    <section className="nosotros-section">
      <div className="nosotros-content">
        <h2>¿Quiénes somos?</h2>
        <p>
          Somos un equipo apasionado por la tecnología, el diseño y el impacto
          positivo. Creemos que la inteligencia artificial no solo transforma
          procesos, sino que también puede inspirar nuevas formas de conectar,
          aprender y crecer. Nuestra misión es crear experiencias digitales que
          motiven, resuelvan y generen valor real para las personas.
        </p>
        <p>
          Combinamos experiencia técnica con sensibilidad visual, cuidando cada
          detalle para que cada proyecto sea funcional, accesible y memorable.
          Nos mueve la curiosidad, la mejora continua y el deseo de compartir
          conocimiento.
        </p>

        <div className="nosotros-valores">
          {valores.map((item, index) => (
            <button key={index} className="valor-btn">
              {item}
            </button>
          ))}
        </div>

        {/* Imagen ilustrativa con animación */}
        <img
          src="/images/inicioIA.png"
          alt="Equipo colaborando con IA"
          className="nosotros-img"
        />
      </div>
    </section>
  );
};

export default Nosotros;
