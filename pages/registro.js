import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Registro = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto p-4 flex-grow">
        <h1 className="text-2xl font-bold mb-4">Registro / Inicio de Sesión</h1>
        {/* Aquí puedes implementar el formulario de registro/inicio de sesión */}
      </main>
      <Footer />
    </div>
  );
};

export default Registro;