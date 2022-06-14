import './App.css';
import ClicsLogo from './img/logo.jpg';
import Boton from './components/Boton';
import Contador from './components/Contador';
import React from 'react';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      numClics: 0
    };
    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  manejarClic() {
    this.setState(({ numClics }) => ({ numClics: numClics + 1 }))
  }

  reiniciarContador() {
    this.setState({ numClics: 0 })
  }


  render() {
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
              numClics={this.state.numClics} />
          <Boton 
              texto='Click'
              esBotonDeClic={true}
              manejarClic={this.manejarClic} />
          <Boton 
              texto='Reset'
              esBotonDeClic={false}
              manejarClic={this.reiniciarContador} />
        </div>
      </div>
    );
  }
}

export default App;
