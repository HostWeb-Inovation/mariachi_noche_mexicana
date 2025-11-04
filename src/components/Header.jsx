import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Music, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-amber-800/95 backdrop-blur-md z-50 shadow-lg shadow-black/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-8 h-18">
        {/* Logo */}
        <div className="flex items-center gap-2 text-yellow-400 font-bold text-xl">
          <Music className="text-yellow-400" />
          <span className="text-white font-serif">Mariachi Noche Mexicana</span>
        </div>
        
        {/* Navigation */}
        <nav className={`${
          isMenuOpen 
            ? 'absolute top-full left-0 right-0 bg-amber-800/98 transform translate-y-0 opacity-100 visible' 
            : 'hidden md:flex'
        } md:static md:bg-transparent transition-all duration-300 ease-in-out`}>
          <ul className="flex flex-col md:flex-row list-none m-0 p-8 md:p-0 gap-4 md:gap-8">
            <li>
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className="text-white no-underline font-medium px-4 py-2 rounded-md transition-all duration-300 hover:bg-yellow-400/10 hover:text-yellow-400 relative group"
              >
                Inicio
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-4/5"></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                onClick={() => setIsMenuOpen(false)}
                className="text-white no-underline font-medium px-4 py-2 rounded-md transition-all duration-300 hover:bg-yellow-400/10 hover:text-yellow-400 relative group"
              >
                Nosotros
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-4/5"></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                onClick={() => setIsMenuOpen(false)}
                className="text-white no-underline font-medium px-4 py-2 rounded-md transition-all duration-300 hover:bg-yellow-400/10 hover:text-yellow-400 relative group"
              >
                Servicios
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-4/5"></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/gallery" 
                onClick={() => setIsMenuOpen(false)}
                className="text-white no-underline font-medium px-4 py-2 rounded-md transition-all duration-300 hover:bg-yellow-400/10 hover:text-yellow-400 relative group"
              >
                Galería
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-4/5"></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="text-white no-underline font-medium px-4 py-2 rounded-md transition-all duration-300 hover:bg-yellow-400/10 hover:text-yellow-400 relative group"
              >
                Contacto
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-4/5"></span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact Links */}
        <div className="hidden lg:flex gap-4 items-center">
          <a 
            href="tel:+1234567890" 
            className="flex items-center gap-2 text-white no-underline px-4 py-2 border-2 border-yellow-400 rounded-full text-sm font-medium transition-all duration-300 hover:bg-yellow-400 hover:text-amber-800 hover:-translate-y-0.5"
          >
            <Phone size={18} />
            <span>(123) 456-7890</span>
          </a>
          <a 
            href="mailto:info@mariachi.com" 
            className="flex items-center gap-2 text-white no-underline px-4 py-2 border-2 border-yellow-400 rounded-full text-sm font-medium transition-all duration-300 hover:bg-yellow-400 hover:text-amber-800 hover:-translate-y-0.5"
          >
            <Mail size={18} />
            <span>Cotizar</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden bg-transparent border-0 text-white cursor-pointer p-2 rounded hover:bg-yellow-400/10"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;