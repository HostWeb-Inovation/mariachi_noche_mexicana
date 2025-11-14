import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
// Añade esto (copia NocheMexicana.png a src/assets/)
import Logo from '../assets/NocheMexicana.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goTo = (path = '/', anchorId = null) => {
    setIsMenuOpen(false);
    if (location.pathname !== path) {
      navigate(path);
      // esperar render de Home y luego hacer scroll
      setTimeout(() => {
        if (anchorId) document.getElementById(anchorId)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      if (anchorId) document.getElementById(anchorId)?.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    // altura fija en mobile/desktop y overflow-visible para permitir que el logo sobresalga
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-800 bg-black px-4 sm:px-10 lg:px-20 py-2 h-[64px] md:h-[72px] overflow-visible">
      <div className="max-w-6xl w-full mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4 text-white">
          {/* Contenedor fijo (no altera el flujo). Imagen posicionada absolute para no afectar la altura del header */}
          <div className="relative w-20 h-full flex items-center overflow-visible">
            <img
              src={Logo}
              alt="Mariachi Noche Mexicana"
              // logo más grande sin cambiar la altura del header; overflow-visible permite que sobresalga
              className="absolute left-3 top-1/2 -translate-y-1/2 h-[120px] sm:h-[128px] md:h-[150px] lg:h-[170px] w-auto object-contain drop-shadow-2xl z-50"
              draggable={false}
            />
          </div>
          {/* ocultar el texto en pantallas muy pequeñas para que el logo gane presencia */}
          <h2 className="text-white text-lg font-bold hidden sm:block">Mariachi Noche Mexicana</h2>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          <button onClick={() => goTo('/', 'inicio')} className="text-white text-sm hover:text-gray-300">Inicio</button>
          <button onClick={() => goTo('/servicios', 'servicios')} className="text-white text-sm hover:text-gray-300">Servicios</button>
          <button onClick={() => goTo('/galeria', 'galeria')} className="text-white text-sm hover:text-gray-300">Galería</button>
          <button onClick={() => goTo('/sobre-nosotros', 'sobre-nosotros')} className="text-white text-sm hover:text-gray-300">Sobre Nosotros</button>
          <button onClick={() => goTo('/contacto', 'contacto')} className="text-white text-sm hover:text-gray-300">Contacto</button>

          <a href="https://wa.me/5527060009" target="_blank" rel="noopener noreferrer" className="ml-4 inline-flex items-center px-4 py-2 bg-amber-400 text-black rounded-lg font-semibold hover:bg-amber-500 transition-colors">Llámanos</a>
        </nav>

        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(s => !s)} className="p-2 bg-gray-800 rounded-lg text-white">
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden w-full bg-black border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
            <button onClick={() => goTo('/', 'inicio')} className="text-white text-left">Inicio</button>
            <button onClick={() => goTo('/sobre-nosotros', 'sobre-nosotros')} className="text-white text-left">Sobre Nosotros</button>
            <button onClick={() => goTo('/servicios', 'servicios')} className="text-white text-left">Servicios</button>
            <button onClick={() => goTo('/galeria', 'galeria')} className="text-white text-left">Galería</button>
            <button onClick={() => goTo('/contacto', 'contacto')} className="text-white text-left">Contacto</button>

            <a href="https://wa.me/5527060009" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="mt-2 inline-flex items-center px-4 py-2 bg-amber-400 text-black rounded-lg hover:bg-amber-500 transition-colors">Llámanos</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;