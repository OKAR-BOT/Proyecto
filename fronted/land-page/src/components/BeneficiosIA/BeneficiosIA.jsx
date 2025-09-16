import React from "react";
import "./BeneficiosIA.css";

const beneficios = [
  "Mejora en la personalización",
  "Automatización de tareas repetitivas",
  "Toma de decisiones más inteligentes",
  "Predicción de tendencias",
  "Innovación constante",
  "Accesibilidad y apoyo social",
];

const BeneficiosIA = () => {
  return (
    <section className="beneficios-section">
      <div className="beneficios-content">
        <h2>Beneficios de la Inteligencia Artificial</h2>
        <p>
          La IA está revolucionando los entornos profesionales al automatizar
          tareas repetitivas o complejas, mejorar la toma de decisiones y
          potenciar la productividad. Permite personalizar experiencias,
          predecir tendencias y combinar datos de múltiples fuentes para obtener
          insights más profundos.
        </p>
        <div className="beneficios-buttons">
          {beneficios.map((item, index) => (
            <button key={index} className="beneficio-btn">
              {item}
            </button>
          ))}
        </div>
        <img
          src="/images/inicioIA.png"
          alt="Ilustración futurista de IA"
          className="beneficios-img"
        />
      </div>
    </section>
  );
};

export default BeneficiosIA;
