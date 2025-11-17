import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/NocheMexicana.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const goTo = (path = '/', anchorId = null) => {
    setIsMenuOpen(false);
    if (location.pathname !== path) {
      navigate(path);
      setTimeout(() => {
        if (anchorId) document.getElementById(anchorId)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      if (anchorId) document.getElementById(anchorId)?.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-800 bg-black px-3 sm:px-10 lg:px-20 py-2 h-16 md:h-[72px] overflow-visible">
      <div className="max-w-6xl w-full mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-4 text-white flex-1 lg:flex-none min-w-0">
          <div className="relative w-14 sm:w-20 h-full flex items-center overflow-visible shrink-0">
            <img
              src={Logo}
              alt="Mariachi Noche Mexicana"
              className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 h-[110px] sm:h-32 md:h-[150px] lg:h-[170px] w-auto object-contain drop-shadow-2xl z-50 pointer-events-none select-none"
              draggable={false}
            />
          </div>
          <h2 className="text-white text-xs sm:text-base lg:text-lg font-bold truncate pr-1 sm:pr-2 lg:pr-0 leading-tight">
            Mariachi Noche Mexicana
          </h2>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          <button 
            type="button"
            onClick={() => goTo('/', 'inicio')} 
            className="text-white text-sm hover:text-gray-300 transition-colors"
          >
            Inicio
          </button>
          <button 
            type="button"
            onClick={() => goTo('/servicios', 'servicios')} 
            className="text-white text-sm hover:text-gray-300 transition-colors"
          >
            Servicios
          </button>
          <button 
            type="button"
            onClick={() => goTo('/galeria', 'galeria')} 
            className="text-white text-sm hover:text-gray-300 transition-colors"
          >
            Galería
          </button>
          <button 
            type="button"
            onClick={() => goTo('/sobre-nosotros', 'sobre-nosotros')} 
            className="text-white text-sm hover:text-gray-300 transition-colors"
          >
            Sobre Nosotros
          </button>
          <button 
            type="button"
            onClick={() => goTo('/contacto', 'contacto')} 
            className="text-white text-sm hover:text-gray-300 transition-colors"
          >
            Contacto
          </button>

          <a 
            href="https://wa.me/5527060009" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ml-4 inline-flex items-center px-4 py-2 bg-amber-400 text-black rounded-lg font-semibold hover:bg-amber-500 transition-colors"
          >
            Llámanos
          </a>
        </nav>

        <div className="lg:hidden shrink-0 ml-2">
          <button
            type="button"
            onClick={() => setIsMenuOpen(s => !s)}
            className="p-2 bg-gray-800 rounded-lg text-white hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-x-0 top-16 md:top-[72px] bottom-0 bg-black/95 backdrop-blur-sm border-t border-gray-800 z-70"
        >
          <div className="max-w-6xl mx-auto px-4 py-4 pb-[env(safe-area-inset-bottom)] overflow-y-auto h-full">
            <div className="flex flex-col gap-2">
              <button 
                type="button"
                onClick={() => goTo('/', 'inicio')} 
                className="text-white text-left text-base py-3 hover:text-amber-400 transition-colors"
              >
                Inicio
              </button>
              <button 
                type="button"
                onClick={() => goTo('/sobre-nosotros', 'sobre-nosotros')} 
                className="text-white text-left text-base py-3 hover:text-amber-400 transition-colors"
              >
                Sobre Nosotros
              </button>
              <button 
                type="button"
                onClick={() => goTo('/servicios', 'servicios')} 
                className="text-white text-left text-base py-3 hover:text-amber-400 transition-colors"
              >
                Servicios
              </button>
              <button 
                type="button"
                onClick={() => goTo('/galeria', 'galeria')} 
                className="text-white text-left text-base py-3 hover:text-amber-400 transition-colors"
              >
                Galería
              </button>
              <button 
                type="button"
                onClick={() => goTo('/contacto', 'contacto')} 
                className="text-white text-left text-base py-3 hover:text-amber-400 transition-colors"
              >
                Contacto
              </button>

              <a
                href="https://wa.me/5527060009"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="mt-3 inline-flex items-center justify-center px-4 py-3 bg-amber-400 text-black rounded-lg font-semibold hover:bg-amber-500 transition-colors"
              >
                Llámanos
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;