
import './App.css';
import Header  from './Header.jsx';
import { Info } from './Header.jsx';
function App() {

  return (
    <div className='flex h-40 items-center'>
      <img src="/Images/logo.png" alt='Logo' className='ml-10 w-20 h-20'></img>
      <Header />
      <Info />
    </div>
  );
}

export default App;
