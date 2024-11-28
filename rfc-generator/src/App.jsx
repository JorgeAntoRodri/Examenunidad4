import React from 'react';
import RFCComponent from './RFCComponent';

function App() {
  // Props para el cálculo del RFC
  const userInfo = {
    paterno: 'Rodríguez',
    materno: 'Rodríguez',
    nombre: 'Jorge Antonio',
    fechaNacimiento: '1999-08-11', // Formato ISO (YYYY-MM-DD)
  };

  return (
    <div className="App">
      <h1>Examen Unidad 4</h1>
      <h1>Mi generador de RFC</h1>
      <RFCComponent {...userInfo} />
    </div>
  );
}

export default App;
