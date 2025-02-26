import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Perfil = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto p-4 flex-grow">
        <h1 className="text-2xl font-bold mb-4">Perfil de Usuario</h1>
        {/* Aquí puedes mostrar la información del usuario y su historial */}
      </main>
      <Footer />
    </div>
  );
};

export default Perfil;