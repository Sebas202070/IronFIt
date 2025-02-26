import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Comunidad = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto p-4 flex-grow">
        <h1 className="text-2xl font-bold mb-4">Comunidad</h1>
        {/* Aquí puedes implementar el foro o espacio para compartir experiencias */}
      </main>
      <Footer />
    </div>
  );
};

export default Comunidad;