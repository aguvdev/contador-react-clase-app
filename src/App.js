import './App.css';
import ClicsLogo from './img/logo.jpg';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className='App'>
      {/* Contenedor del Logo */}
      <div className='logo-container'>
        <img 
        className='logo'
        src={ClicsLogo}
        alt='Logo' />
      </div>
      
      {/* Contenedor principal del contador */}
      <div className='principal-container'>
        <Contador 
            numClics={numClics} />
        <Boton 
            texto='Click'
            esBotonDeClic={true}
            manejarClic={manejarClic} />
        <Boton 
            texto='Reset'
            esBotonDeClic={false}
            manejarClic={reiniciarContador} />
      </div>
    </div>
  );
};

export default App;
