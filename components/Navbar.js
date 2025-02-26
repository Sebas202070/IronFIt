import Link from 'next/link';

const Navbar = () => {
    console.log('Navbar renderizado')
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">IronFit AI</Link>
        <div className="flex space-x-4">
          <Link href="/perfil" className="text-gray-300 hover:text-white">Perfil</Link>
          <Link href="/comunidad" className="text-gray-300 hover:text-white">Comunidad</Link>
          <Link href="/registro" className="text-gray-300 hover:text-white">Registro</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;