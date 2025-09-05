
function Header() {
  return (
<div className='Header h-16 m-10 items-center rounded-full px-5 text-white'>
        <ul className='flex gap-x-40 list-none h-16 rounded-full items-center justify-center'>
          <li>Inicio</li>
          <li>Beneficios de la IA</li>
          <li>Nosotros</li>
          <li>Tipos de IA</li>
        </ul>
    </div>
  )
    }
    export default Header;

function Info(){
  return(
    <div>
      <button className="btn-info flex h-16 rounded-2xl text-white items-center p-5 mr-5">Mas Informacion</button>
    </div>
  )
}
export {Info};