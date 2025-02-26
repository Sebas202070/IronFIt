import React from 'react';

const PlanNutricionalGenerado = ({ alimentos }) => {
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-semibold mb-2 text-white">Plan Nutricional Generado:</h2>
      <ul>
        {alimentos.map((alimento, index) => (
          <li key={index} className="mb-2 text-white">
            <span>{alimento}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanNutricionalGenerado;