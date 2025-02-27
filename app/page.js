"use client"


import { useState } from 'react';
import axios from 'axios';
import { SyncLoader } from 'react-spinners'
import jsPDF from 'jspdf';
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

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text('Rutina Generada', 10, 10);
    ejercicios.forEach((ejercicio, index) => {
      doc.text(ejercicio, 10, 20 + index * 10);
    });
    doc.text('Plan Nutricional Generado', 10, 50 + ejercicios.length * 10);
    alimentos.forEach((alimento, index) => {
      doc.text(alimento, 10, 60 + ejercicios.length * 10 + index * 10);
    });
    doc.save('rutina_nutricion.pdf');
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
          
          {ejercicios && (
            <div className="flex justify-center">
              <div className="w-full md:w-1/2">
                <RutinaGenerada ejercicios={ejercicios} />
              </div>
            </div>
          )}
          {alimentos && (
            <div className="flex justify-center">
              <div className="w-full md:w-1/2">
                <PlanNutricionalGenerado alimentos={alimentos} />
              </div>
            </div>
          )}
          {(ejercicios && alimentos) && (
            <div className="flex justify-center mt-4">
              <button onClick={handleDownloadPDF} className="bg-blue-500 text-white p-2 rounded">
                Descargar PDF
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}