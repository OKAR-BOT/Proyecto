import React from "react";
import "./TiposIA.css";

const tipos = [
  "Máquinas reactivas",
  "Memoria limitada",
  "Teoría de la mente",
  "Autoconocimiento",
];

const TiposIA = () => {
  return (
    <section className="tipos-section">
      <div className="tipos-content">
        <h2>Tipos de Inteligencia Artificial</h2>
        <p>
          La IA se clasifica en distintos niveles según su capacidad de
          aprendizaje y comprensión. Desde sistemas que solo reaccionan, hasta
          conceptos avanzados como el autoconocimiento, cada tipo representa un
          paso en la evolución tecnológica:
        </p>
        <ul className="tipos-list">
          <li>
            <strong>Máquinas reactivas:</strong> Responden a estímulos sin
            memoria. Ejemplo: Deep Blue.
          </li>
          <li>
            <strong>Memoria limitada:</strong> Usan datos pasados para mejorar
            decisiones. Son las más comunes hoy.
          </li>
          <li>
            <strong>Teoría de la mente:</strong> Aún en investigación. Buscaría
            comprender emociones y estados mentales.
          </li>
          <li>
            <strong>Autoconocimiento:</strong> IA consciente de sí misma. No
            existe aún, pero representa el futuro más avanzado.
          </li>
        </ul>
        <div className="tipos-buttons">
          {tipos.map((item, index) => (
            <button key={index} className="tipo-btn">
              {item}
            </button>
          ))}
        </div>

        {/* Imagen ilustrativa con animación */}
        <img
          src="/images/inicioIA.png"
          alt="Ilustración de tipos de IA"
          className="tipos-img"
        />
      </div>
    </section>
  );
};

export default TiposIA;
