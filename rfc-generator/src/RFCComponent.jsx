import React from 'react';

function RFCComponent({ paterno, materno, nombre, fechaNacimiento }) {
  // Función para obtener el RFC
  const calcularRFC = (paterno, materno, nombre, fechaNacimiento) => {
    const obtenerPrimeraVocal = (palabra) => {
      const vocales = 'AEIOU';
      for (let letra of palabra.toUpperCase().slice(1)) {
        if (vocales.includes(letra)) return letra;
      }
      return ''; // Si no encuentra vocal
    };

    const primerLetraPaterno = paterno[0]?.toUpperCase() || '';
    const primerVocalPaterno = obtenerPrimeraVocal(paterno) || '';
    const primerLetraMaterno = materno[0]?.toUpperCase() || '';
    const primerLetraNombre = nombre[0]?.toUpperCase() || '';

    const [year, month, day] = fechaNacimiento.split('-');

    return (
      primerLetraPaterno +
      primerVocalPaterno +
      primerLetraMaterno +
      primerLetraNombre +
      year.slice(-2) +
      month +
      day
    );
  };

  const rfc = calcularRFC(paterno, materno, nombre, fechaNacimiento);

  return (
    <div>
      <h2>Datos del Usuario:</h2>
      <p><strong>Nombre:</strong> {`${nombre} ${paterno} ${materno}`}</p>
      <p><strong>Fecha de Nacimiento:</strong> {fechaNacimiento}</p>
      <h3>RFC Calculado:</h3>
      <p>{rfc}</p>
    </div>
  );
}

export default RFCComponent;
