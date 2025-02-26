import React from 'react';

const RutinaGenerada = ({ ejercicios }) => {
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-semibold mb-2 text-white">Rutina Generada:</h2>
      <ul>
        {ejercicios.map((ejercicio, index) => (
          <li key={index} className="mb-2 text-white">
            <span>{ejercicio}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RutinaGenerada;