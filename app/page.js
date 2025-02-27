"use client"

import { useState } from 'react';
import axios from 'axios';
import { SyncLoader } from 'react-spinners'
import FormularioUsuario from '../components/FormularioUsuario';
import RutinaGenerada from '../components/RutinaGenerada';
import PlanNutricionalGenerado from '../components/PlanNutricionalGenerado';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  const [ejercicios, setEjercicios] = useState(null);
  const [alimentos, setAlimentos] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerar = async (datosUsuario) => {
    setLoading(true);
    try {
      const rutinaRes = await axios.post('/api/rutina', datosUsuario);
      setEjercicios(rutinaRes.data.ejercicios);

      const nutricionRes = await axios.post('/api/nutricion', datosUsuario);
      setAlimentos(nutricionRes.data.alimentos);
    } catch (error) {
      console.error('Error al generar:', error);
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-[url('/images/fondo-gimnasio.jpg')] bg-cover bg-center p-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4 text-white">Ingresa tus datos para armar tu Rutina de ejercicios y Plan nutricional</h1>
          <div className="flex justify-center">
            <div className="w-full md:w-1/2">
              <FormularioUsuario onGenerar={handleGenerar} />
            </div>
          </div>
         
          
          {loading && (
  <div className="flex flex-col justify-center items-center mt-4"> {/* Cambiar a flex-col */}
    <SyncLoader color="#ffffff" size={15} margin={3} />
    <p className="mt-2 text-white">Generando Rutina...</p> {/* Agregar margen superior */}
  </div>
)}
          {alimentos && (
            <div className="flex justify-center">
              <div className="w-full md:w-1/2">
                <PlanNutricionalGenerado alimentos={alimentos} />
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}