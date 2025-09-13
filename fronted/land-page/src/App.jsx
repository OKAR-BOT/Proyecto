
import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar.jsx';
import  Info  from './components/Info.jsx';
import ContentInicio from './ContentInicio.jsx';
function App() {

  const [activeSection, setActiveSection] = useState('Inicio');
  
  let Content;

  
    let section = activeSection;
    console.log('Seccion activa:', section);

    switch (section) {
      case 'Inicio':
        Content=<ContentInicio></ContentInicio>
        break;
      case 'Beneficios':
        // Renderizar componente de Beneficios
        break;
      case 'Nosotros':
        // Renderizar componente de Nosotros
        break;
      case 'Tipos':
        // Renderizar componente de Tipos de IA
        break;
      default:
        break;

  };

  return (
    <>
    <header className=' w-full flex flex-col h-80 items-center md:flex-row md:h-40 md:justify-between'>
      <img src="/Images/logo.png" alt='Logo' className='w-20 h-20 mb-4 md:mb-0 md:ml-10'></img>
      <NavBar activeSection={activeSection} onSectionChange={setActiveSection}/> 
      <Info />
    </header>
    <main className='w-full h-auto'>
      {Content}
    </main>
    </>
  );
}

export default App;
