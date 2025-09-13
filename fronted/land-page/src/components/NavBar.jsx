

export function NavBar({activeSection, onSectionChange}) {
  return (
    <nav className='navBar w-full h-16 m-10 items-center rounded-full px-5 text-white'>
      <ul className='w-full flex flex-row list-none h-16 rounded-full items-center justify-center'>
        <li className="flex-1 text-center"><button className={activeSection === 'Inicio' ? 'font-bold underline' : ''} onClick={() => onSectionChange('Inicio')}>Inicio</button></li>
        <li className="flex-1 text-center"><button className={activeSection === 'Beneficios' ? 'font-bold underline' : ''} onClick={() => onSectionChange('Beneficios')}>Beneficios de la IA</button></li>
        <li className="flex-1 text-center"><button className={activeSection === 'Nosotros' ? 'font-bold underline' : ''} onClick={() => onSectionChange('Nosotros')}>Nosotros</button></li>
        <li className="flex-1 text-center"><button className={activeSection === 'Tipos' ? 'font-bold underline' : ''} onClick={() => onSectionChange('Tipo')}>Tipos de IA</button></li>
      </ul>
    </nav>
  );
}

export default NavBar;