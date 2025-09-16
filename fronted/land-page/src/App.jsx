import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import ContentInicio from "./ContentInicio.jsx";
import FormularioContacto from "./components/FormularioContacto.jsx";
import BeneficiosIA from "./components/BeneficiosIA/BeneficiosIA.jsx";
import TiposIA from "./components/TiposIA/TiposIA.jsx";
import Nosotros from "./components/Nosotros/Nosotros.jsx";

function App() {
  const [activeSection, setActiveSection] = useState("Inicio");

  let Content;

  let section = activeSection;
  console.log("Seccion activa:", section);

  switch (section) {
    case "Inicio":
      Content = <ContentInicio></ContentInicio>;
      break;
    case "Beneficios":
      Content = <BeneficiosIA />;
      break;
    case "Nosotros":
      Content = <Nosotros />;
      break;
    case "Tipos":
      Content = <TiposIA />;
      break;
    case "MasInforamcion":
      Content = (
        <section className="p-6">
          <h2 className="text-2xl font-bold mb-4">Formulario de Contacto</h2>
          <FormularioContacto />
        </section>
      );
      break;
    default:
      break;
  }

  return (
    <>
      <header className=" w-full flex flex-col h-80 items-center md:flex-row md:h-40 md:justify-between">
        <img
          src="/Images/logo.png"
          alt="Logo"
          className="w-20 h-20 mb-4 md:mb-0 md:ml-10"
        ></img>
        <NavBar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
      </header>
      <main className="w-full h-auto">{Content}</main>
    </>
  );
}

export default App;
