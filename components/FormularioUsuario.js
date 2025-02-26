import { useState } from 'react';

const FormularioUsuario = ({ onGenerar }) => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [musculo, setMusculo] = useState('');
  const [objetivos, setObjetivos] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerar({ peso, altura, musculo, objetivos });
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 w-120 ">
      <div className="flex flex-col">
        <label htmlFor="peso" className="text-sm text-white">Peso (kg)</label>
        <input type="number" id="peso" value={peso} onChange={(e) => setPeso(e.target.value)} className="border p-2 rounded text-sm" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="altura" className="text-sm  text-white">Altura (cm)</label>
        <input type="number" id="altura" value={altura} onChange={(e) => setAltura(e.target.value)} className="border p-2 rounded text-sm" />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="musculo" className="text-sm  text-white">Músculo a entrenar</label>
        <input type="text" id="musculo" value={musculo} onChange={(e) => setMusculo(e.target.value)} className="border p-2 rounded text-sm" />
      </div>
      <div className="flex flex-col col-span-1 md:col-span-2">
        <label htmlFor="objetivos" className="text-sm  text-white">Objetivos</label>
        <textarea id="objetivos" value={objetivos} onChange={(e) => setObjetivos(e.target.value)} className="border p-2 rounded text-sm" />
      </div>
      <div className="col-span-1 md:col-span-2">
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full text-sm">Generar</button>
      </div>
    </form>
  );
};

export default FormularioUsuario;